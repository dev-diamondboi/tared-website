import type { Metadata } from "next"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Director from "@/components/director"
import Services from "@/components/services"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Tared Ltd - Professional Business Solutions",
  description:
    "Tared Ltd provides exceptional business solutions and services. Learn about our company, meet our director, explore our services, and get in touch.",
  keywords: "Tared Ltd, business solutions, professional services",
  authors: [{ name: "Tared Ltd" }],
  openGraph: {
    title: "Tared Ltd - Professional Business Solutions",
    description: "Tared Ltd provides exceptional business solutions and services.",
    type: "website",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Director />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}
