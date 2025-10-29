import type React from "react"
import type { Metadata } from "next"
import { Urbanist } from "next/font/google"
import "./globals.css"

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Tared Ltd",
  description: "Professional business solutions and services",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={urbanist.className}>
      <body>{children}</body>
    </html>
  )
}
