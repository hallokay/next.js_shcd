import './globals.css'
import Header from '../components/Header'
import Link from 'next/link'


export const metadata = {
  title: 'next.js 기초',
  description: '생활코딩 Next.js배우기',
}

export default function RootLayout({ children }) {
  return (
    <html >
      <body>
        <Header />
        {children}
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
      </body>
    </html>
  )
}
