import './globals.css'
import Header from '../components/Header'
import Controler from '@/components/Controler'


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
        <Controler />
      </body>
    </html>
  )
}
