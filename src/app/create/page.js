'use client'
import { useRouter } from 'next/navigation';
import React from 'react'


export default function Create() {
    const router = useRouter();
    const onSubmit = (e) => {
        e.preventDefault();

        const title = e.target.title.value;
        const body = e.target.body.value;

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({ title, body })
        }

        fetch(`http://localhost:9999/topics`, options)
            .then(res => res.json())
            .then(result => {
                //게시물 생성 후 사용자가 작성한 글로 주소를 리디렉션해야함
                console.log(result);
                const lastId = result.id;
                router.refresh();
                router.push(`/read/${lastId}`)


            })
    }



    return (
        <section className='flex align-center justify-center p-5'>

            <form className='w-full md:w-[50%]' onSubmit={onSubmit}>
                <p className=''>
                    <input className='border mb-6 w-full h-5 p-4' type='text' name='title' placeholder='제목' />
                </p>
                <p>
                    <textarea className='border w-full p-4' name='body' placeholder='내용' />
                </p>


                <button type='submit'>생성</button>

            </form>
        </section>
    )
}
