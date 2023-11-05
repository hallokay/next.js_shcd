import Link from 'next/link'
import React from 'react'

export default async function Header() {
    const topicsRes = await fetch('http://localhost:9999/topics', { cache: 'no-store' });
    const topics = await topicsRes.json();

    return (
        <header className='px-8 py-6 flex justify-between bg-slate-400'>
            <h1 className='font-bold'>
                <Link href={'/'}>Web</Link>

            </h1>
            <ul className='flex justify-between gap-6'>
                {topics.map(topic => (

                    <li key={topic.id}>
                        <Link href={`/read/${topic.id}`}>{topic.title}</Link>

                    </li>
                ))}


            </ul>
        </header>
    )
}
