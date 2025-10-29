import { CONTENT_MAX_WIDTH, SECTION_SCROLL_MARGIN, SECTION_VERTICAL_PADDING } from "@/lib/layout"

export default function Director() {
  return (
    <section
      id="director"
      className={`${SECTION_SCROLL_MARGIN} ${SECTION_VERTICAL_PADDING} bg-gray-50`}
    >
      <div className={CONTENT_MAX_WIDTH}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C2449] mb-6 text-balance">
              Our <span className="text-[#BE232D]">Director</span>
            </h2>
            <div className="w-24 h-1.5 bg-[#BE232D] mx-auto rounded-full"></div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 lg:p-16">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="w-56 h-56 bg-gradient-to-br from-[#2C2449] to-[#3d3360] rounded-2xl flex-shrink-0 flex items-center justify-center shadow-lg">
                <span className="text-7xl text-white font-bold">JD</span>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-[#2C2449] mb-3">John Doe</h3>
                <p className="text-[#BE232D] font-semibold text-xl mb-6">Chief Executive Officer</p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
