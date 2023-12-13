import type { Metadata } from 'next'
import { Roboto, Montserrat } from 'next/font/google'

import Navbar from '@/components/Shared/Navbar';
import Footer from '@/components/Shared/Footer';

import './globals.css'

const roboto = Roboto({
  variable: "--roboto-font",
  subsets: ['latin'],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const montserrat = Montserrat({
  variable: "--montserrat-font",
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: 'Volo',
  description: 'Turbinando sua empresa com as tecnologias de ponta',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.variable} ${montserrat.variable}`}>
        <Navbar />
        <main className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
