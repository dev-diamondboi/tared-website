"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { CONTENT_MAX_WIDTH } from "@/lib/layout"

const navigationItems = [
  { id: "home", label: "Home", isPrimary: true },
  { id: "about", label: "About" },
  { id: "director", label: "Director" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
]

const getDesktopButtonClasses = (isPrimary: boolean) =>
  isPrimary
    ? "text-white bg-[#BE232D] px-6 py-2.5 rounded-lg hover:bg-[#9e1d26] transition-all font-medium"
    : "text-[#2C2449] hover:text-[#BE232D] transition-colors px-6 py-2.5 font-medium"

const getMobileButtonClasses = (isPrimary: boolean) =>
  isPrimary
    ? "text-white bg-[#BE232D] px-6 py-3 rounded-lg hover:bg-[#9e1d26] transition-all text-left font-medium"
    : "text-[#2C2449] hover:text-[#BE232D] hover:bg-gray-50 transition-all text-left px-6 py-3 rounded-lg font-medium"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className={`${CONTENT_MAX_WIDTH} py-5`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-3xl lg:text-4xl font-bold tracking-tight">
              <span className="text-[#2C2449]">Ta</span>
              <span className="text-[#BE232D]">red</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navigationItems.map(({ id, label, isPrimary }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={getDesktopButtonClasses(Boolean(isPrimary))}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-[#2C2449] p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 pb-4 flex flex-col gap-2 border-t border-gray-100 pt-6">
            {navigationItems.map(({ id, label, isPrimary }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={getMobileButtonClasses(Boolean(isPrimary))}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}