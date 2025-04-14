"use client"

import type React from "react"

import { useState } from "react"
import { ArrowUpRight, Zap, Users, Code, ShoppingCart } from "lucide-react"

interface ServiceProps {
  title: string
  description: string
  icon: React.ReactNode
  comingSoon?: boolean
}

const Service = ({ title, description, icon, comingSoon = false }: ServiceProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative rounded-xl border border-gray-800 p-8 transition-all duration-300 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: isHovered ? "linear-gradient(to bottom, rgba(0,30,60,0.5), rgba(0,0,0,0))" : "transparent",
        boxShadow: isHovered ? "0 0 30px rgba(0, 149, 255, 0.15)" : "none",
      }}
    >
      <div className="flex flex-col items-center justify-center text-center h-full">
        {!isHovered ? (
          <>
            <div className="rounded-lg p-4 mb-4 w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-400">
              {icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          </>
        ) : (
          <div className="flex flex-col h-full">
            <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
            <p className="text-gray-300 mb-auto">{description}</p>
            {comingSoon && (
              <div className="mt-6 text-blue-400 flex items-center justify-center">
                Coming soon <ArrowUpRight className="ml-1 h-4 w-4" />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export function Service2() {
  const services = [
    {
      title: "Digital Campaigns",
      description: "360° Digital Campaign Execution and Performance Marketing to drive measurable business outcomes.",
      icon: <Zap className="h-8 w-8 text-white" />,
      comingSoon: true,
    },
    {
      title: "Social Activation",
      description: "Engage your audience with strategic social media campaigns that drive conversation and conversion.",
      icon: <Users className="h-8 w-8 text-white" />,
    },
    {
      title: "Tech & Development",
      description: "Custom software solutions and technical infrastructure to power your digital transformation.",
      icon: <Code className="h-8 w-8 text-white" />,
    },
    {
      title: "Live Commerce",
      description: "Interactive shopping experiences that blend entertainment with direct sales opportunities.",
      icon: <ShoppingCart className="h-8 w-8 text-white" />,
    },
  ]

  return (
    <div className="bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          {/* <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2> */}
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Service
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              comingSoon={service.comingSoon}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
