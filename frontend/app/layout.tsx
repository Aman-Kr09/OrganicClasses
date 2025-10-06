import './globals.css'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import Providers from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://organic-classes.vercel.app'),
  title: 'Organic Classes - Trusted Coaching Institute for Class 5th to 12th',
  description: 'Empowering Students from Class 5th to 12th to Achieve Academic Excellence. Special batches for Govt. Schools. Expert faculty for Physics, Chemistry, Maths, Biology, Accountancy, Economics & Business Studies.',
  keywords: 'coaching classes, education, physics, chemistry, maths, biology, accountancy, economics, business studies, govt school batches',
  authors: [{ name: 'Organic Classes' }],
  openGraph: {
    title: 'Organic Classes - Trusted Coaching Institute',
    description: 'Empowering Students from Class 5th to 12th to Achieve Academic Excellence',
    images: ['/og-image.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Organic Classes - Trusted Coaching Institute',
    description: 'Empowering Students from Class 5th to 12th to Achieve Academic Excellence',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f97316" />
        <meta name="color-scheme" content="light" />
      </head>
      <body className={inter.className}>
        <Providers session={null} children={children} />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              style: {
                background: '#10b981',
              },
            },
            error: {
              style: {
                background: '#ef4444',
              },
            },
          }}
        />
      </body>
    </html>
  )
}