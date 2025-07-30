import './globals.css'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NewCountertops.com - Find Trusted Granite Contractors',
  description: 'Connect with verified granite contractors and fabricators for your countertop project. Get quotes, compare prices, and book trusted professionals.',
  keywords: 'granite countertops, contractors, fabricators, kitchen remodel, bathroom countertops',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
