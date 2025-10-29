import { Briefcase, Users, TrendingUp, Award } from "lucide-react"

const services = [
  {
    icon: Briefcase,
    title: "Business Consulting",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  },
  {
    icon: Users,
    title: "Team Management",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  },
  {
    icon: TrendingUp,
    title: "Growth Strategy",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-40 bg-white">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C2449] mb-6 text-balance">
              Our <span className="text-[#BE232D]">Services</span>
            </h2>
            <div className="w-24 h-1.5 bg-[#BE232D] mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl p-8 lg:p-10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#BE232D] to-[#9e1d26] rounded-xl flex items-center justify-center mb-6 shadow-lg">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#2C2449] mb-4">{service.title}</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
