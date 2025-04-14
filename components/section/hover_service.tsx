import type React from "react"
import { BarChart3, Smartphone, Laptop, Zap } from "lucide-react"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  isHighlighted?: boolean
}

const ServiceCard = ({ icon, title, description, isHighlighted = false }: ServiceCardProps) => {
  return (
    <div
      className={`relative rounded-xl border border-gray-700 bg-[#001a2c] p-6 transition-all duration-300 h-full
        ${isHighlighted ? "border-purple-500 shadow-[0_0_15px_rgba(149,76,233,0.3)]" : "hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]"}`}
    >
      <div className="flex flex-col h-full">
        <div className="bg-gray-100 rounded-lg p-2 w-10 h-10 flex items-center justify-center mb-4">{icon}</div>

        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  )
}

export function HoverService() {
  const services = [
    {
      icon: <Zap className="h-5 w-5 text-gray-800" />,
      title: "Digital Campaign",
      description: "From ideation to execution, we craft integrated campaigns that build awareness.",
    },
    {
      icon: <Smartphone className="h-5 w-5 text-gray-800" />,
      title: "Social Activation",
      description: "We spark conversations and build community through social-first ideas.",
    },
    {
      icon: <Laptop className="h-5 w-5 text-gray-800" />,
      title: "Tech & Development",
      description: "We design and develop intuitive high-performing websites and digital products.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-gray-800" />,
      title: "Performance",
      description: "We analyze every step of your digital journey, measurable results that grow your business.",
      isHighlighted: true,
    },
  ]

  return (
    <div className="bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              isHighlighted={service.isHighlighted}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
