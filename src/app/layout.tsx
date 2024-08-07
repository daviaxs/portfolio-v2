import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { LanguageProvider } from '@/shared/context/LanguageContext'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const inter = Nunito({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'],
})

export const metadata: Metadata = {
  title: 'Portfólio | Davi Alves',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}
