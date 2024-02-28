import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Theme } from '@radix-ui/themes';
const inter = Inter({ subsets: ['latin'] })
import {NextUIProvider} from "@nextui-org/react"
import Topbar from './(root)/(new)/_components/Topbar';
export const metadata: Metadata = {
  title: 'Content.Io',
  description: 'vneiv',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Topbar/>
        <Theme>
        {children}
        </Theme>
        </body>
    </html>
  )
}
