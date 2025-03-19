import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Guillaume BREON',
  description: 'Guillaume BREON',
  generator: 'Guillaume BREON',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
