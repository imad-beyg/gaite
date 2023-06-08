import './app.scss'
import {Header} from '@/app/components/header'
import {Footer} from '@/app/components/footer'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import { MarketplaceContextProvider } from './context/marketplace'

export const metadata = {
  title: 'Gaide',
  description: 'AI Based Software',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <MarketplaceContextProvider>
          <Header />
          <main role="main">
            {children}
          </main>
          <Footer/>
      </MarketplaceContextProvider>
      </body>
    </html>
  )
}
