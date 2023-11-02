import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <header className='px-8 py-6 flex justify-between bg-slate-400'>
            <h1 className='font-bold'>
                <Link href={'/'}>Web</Link>

            </h1>
            <ul className='flex justify-between gap-6'>
                <li>
                    <Link href={'/read/1'}>html</Link>

                </li>
                <li>
                    <Link href={'/read/2'}>css</Link>

                </li>

            </ul>
        </header>
    )
}
