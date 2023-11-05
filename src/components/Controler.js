"use client"

import React from 'react'
import Link from 'next/link'

export default function Controler() {
    return (
        <ul className='py-6 px-8 flex justify-end gap-6 bg-slate-300'>
            <li>
                <Link href={'/create'}>새 게시물</Link>

            </li>
            <li>
                <Link href={'/update/1'}>수정</Link>

            </li>
            <li>
                <input type='button' value={'delete'} />
            </li>
        </ul>
    )
}
