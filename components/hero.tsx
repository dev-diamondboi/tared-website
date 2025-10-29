"use client"
import { CONTENT_MAX_WIDTH, SECTION_SCROLL_MARGIN } from "@/lib/layout"

export default function Hero() {
  return (
    <section
      id="home"
      className={`${SECTION_SCROLL_MARGIN} bg-[#2C2449] text-white min-h-[90vh] flex items-center`}
    >
      <div className={`${CONTENT_MAX_WIDTH} py-24 lg:py-32 w-full`}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-balance leading-tight">
            Welcome to <span className="text-[#BE232D]">Tared Ltd</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-[#BE232D] text-white px-8 py-4 rounded-lg hover:bg-[#9e1d26] transition-all font-semibold text-lg"
            >
              Get Started
            </button>
            <button
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-white/10 text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all font-semibold text-lg backdrop-blur-sm border border-white/20"
            >
              Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
