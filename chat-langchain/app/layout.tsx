import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chat LangChain',
  description: 'Chatbot for LangChain',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-[calc(100vh-6rem)] m-[calc(2rem)]">
          {children}
        </div>
      </body>
    </html>
  )
}