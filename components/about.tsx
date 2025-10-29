export default function About() {
  return (
    <section id="about" className="py-24 lg:py-40 bg-white">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C2449] mb-6 text-balance">
              About <span className="text-[#BE232D]">Us</span>
            </h2>
            <div className="w-24 h-1.5 bg-[#BE232D] mx-auto rounded-full"></div>
          </div>
          <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
            <p className="text-xl md:text-2xl text-[#2C2449] font-medium text-center mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-[#2C2449] mb-4">Our Mission</h3>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                  laborum.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-[#2C2449] mb-4">Our Vision</h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
