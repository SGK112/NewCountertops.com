import './globals.css'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/layout/Navbar-clean'
import { Footer } from '@/components/layout/Footer'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NewCountertops.com - Find Trusted Granite Contractors',
  description: 'Connect with verified granite contractors and fabricators for your countertop project. Get quotes, compare prices, and book trusted professionals.',
  keywords: 'granite countertops, contractors, fabricators, kitchen remodel, bathroom countertops',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.svg', sizes: '16x16', type: 'image/svg+xml' },
    ],
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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
