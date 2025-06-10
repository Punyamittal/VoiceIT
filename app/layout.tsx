import type { Metadata } from 'next'
import './globals.css'
import Hyperspeed from '@/components/Hyperspeed'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'Voice IT - VIT Chennai',
  description: 'Official RJ Club of VIT Chennai - Where voices come alive and stories find their rhythm',
  generator: 'Next.js',
  icons: {
    icon: [
      { url: '/voice.png', type: 'image/png' },
    ],
    shortcut: '/voice.png',
    apple: '/voice.png',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/voice.png" />
        <link rel="apple-touch-icon" href="/voice.png" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Hyperspeed />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
