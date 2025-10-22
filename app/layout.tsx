import type { Metadata } from "next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css"

export const metadata: Metadata = {
  title: 'Zane on Fire Digital | AI-Powered Websites That Convert 24/7',
  description: 'We build intelligent websites with AI automation that capture leads, book appointments, and convert visitors around the clock. Get your site in weeks, not months.',
  keywords: 'web development, AI chatbot, website design, lead generation, Melbourne web developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
