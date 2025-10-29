"use client"

import type React from "react"
import { Mail, Phone, MapPin } from "lucide-react"
import { useState } from "react"
import { CONTENT_MAX_WIDTH, SECTION_SCROLL_MARGIN, SECTION_VERTICAL_PADDING } from "@/lib/layout"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section
      id="contact"
      className={`${SECTION_SCROLL_MARGIN} ${SECTION_VERTICAL_PADDING} bg-[#2C2449] text-white`}
    >
      <div className={CONTENT_MAX_WIDTH}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Contact <span className="text-[#BE232D]">Us</span>
            </h2>
            <div className="w-24 h-1.5 bg-[#BE232D] mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#BE232D] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Mail size={26} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Email</h4>
                    <p className="text-gray-300 text-lg">info@taredltd.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#BE232D] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Phone size={26} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Phone</h4>
                    <p className="text-gray-300 text-lg">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#BE232D] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MapPin size={26} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Address</h4>
                    <p className="text-gray-300 text-lg">123 Business Street, City, Country</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[#2C2449] font-semibold mb-2 text-lg">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#BE232D] focus:border-transparent text-[#2C2449] text-lg transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[#2C2449] font-semibold mb-2 text-lg">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#BE232D] focus:border-transparent text-[#2C2449] text-lg transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-[#2C2449] font-semibold mb-2 text-lg">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#BE232D] focus:border-transparent text-[#2C2449] text-lg resize-none transition-all"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#BE232D] text-white py-4 rounded-xl font-semibold text-lg hover:bg-[#9e1d26] transition-all shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
