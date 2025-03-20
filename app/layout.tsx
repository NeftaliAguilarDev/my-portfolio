import type { Metadata } from 'next'
import { AppProviders } from '../providers/AppProviders'
import { Geist_Mono } from 'next/font/google'
import './globals.css'
import 'primereact/resources/themes/lara-light-cyan/theme.css'

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Neftali Aguilar',
  description:
    'Senior Frontend Developer specializing in building exceptional digital experiences',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable}`}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  )
}
