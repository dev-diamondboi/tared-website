"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

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
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
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
            <button
              onClick={() => scrollToSection("home")}
              className="text-white bg-[#BE232D] px-6 py-2.5 rounded-lg hover:bg-[#9e1d26] transition-all font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-[#2C2449] hover:text-[#BE232D] transition-colors px-6 py-2.5 font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("director")}
              className="text-[#2C2449] hover:text-[#BE232D] transition-colors px-6 py-2.5 font-medium"
            >
              Director
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-[#2C2449] hover:text-[#BE232D] transition-colors px-6 py-2.5 font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-[#2C2449] hover:text-[#BE232D] transition-colors px-6 py-2.5 font-medium"
            >
              Contact
            </button>
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
            <button
              onClick={() => scrollToSection("home")}
              className="text-white bg-[#BE232D] px-6 py-3 rounded-lg hover:bg-[#9e1d26] transition-all text-left font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-[#2C2449] hover:text-[#BE232D] hover:bg-gray-50 transition-all text-left px-6 py-3 rounded-lg font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("director")}
              className="text-[#2C2449] hover:text-[#BE232D] hover:bg-gray-50 transition-all text-left px-6 py-3 rounded-lg font-medium"
            >
              Director
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-[#2C2449] hover:text-[#BE232D] hover:bg-gray-50 transition-all text-left px-6 py-3 rounded-lg font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-[#2C2449] hover:text-[#BE232D] hover:bg-gray-50 transition-all text-left px-6 py-3 rounded-lg font-medium"
            >
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}
