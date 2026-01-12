import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ReduxProvider } from "@/lib/providers"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Soludesks - Learning Management System",
  description: "Soludesks LMS - Create, organize, and assign courses to teams and individuals",
  icons: {
    icon: "/images/branding/logo.png",
    apple: "/images/branding/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ReduxProvider>{children}</ReduxProvider>
        <Analytics />
      </body>
    </html>
  )
}
