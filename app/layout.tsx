import type { Metadata } from "next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ErrorBoundary } from "./components/ErrorBoundary"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL('https://zaneonfire.com'),
  title: {
    default: 'Zane on Fire Digital | AI-Powered Websites That Convert 24/7',
    template: '%s | Zane on Fire Digital'
  },
  description: 'We build intelligent websites with AI automation that capture leads, book appointments, and convert visitors around the clock. Melbourne-based web development agency delivering modern, AI-powered solutions in weeks, not months.',
  keywords: ['web development', 'AI chatbot', 'website design', 'lead generation', 'Melbourne web developer', 'Next.js', 'AI automation', 'business websites', 'conversion optimization', 'web design agency'],
  authors: [{ name: 'Zane Priddle', url: 'https://zanepriddle.com' }],
  creator: 'Zane on Fire Digital',
  publisher: 'Zane on Fire Digital',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://zaneonfire.com',
    siteName: 'Zane on Fire Digital',
    title: 'Zane on Fire Digital | AI-Powered Websites That Convert 24/7',
    description: 'Melbourne-based web development agency building intelligent websites with AI automation. We capture leads, book appointments, and convert visitors 24/7.',
    images: [
      {
        url: '/bella-vista-screenshot.webp',
        width: 1200,
        height: 630,
        alt: 'Zane on Fire Digital - AI-Powered Web Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zane on Fire Digital | AI-Powered Websites That Convert 24/7',
    description: 'Melbourne-based web development agency building intelligent websites with AI automation that work as hard as you do.',
    images: ['/bella-vista-screenshot.webp'],
    creator: '@zaneonfire',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://zaneonfire.com',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#f97316" media="(prefers-color-scheme: light)" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body suppressHydrationWarning>
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
        <SpeedInsights />
      </body>
    </html>
  )
}
