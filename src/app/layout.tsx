import Taskbar from '@/components/Taskbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rudys Website',
  description: 'Showcase website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <div>
        <Taskbar />
        <body className={inter.className}>{children}</body>
      </div>
    </html>
  )
}
