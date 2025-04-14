import Image from "next/image"
import Link from "next/link"
import { Phone } from "lucide-react"
import { ScrollingLogos } from "@/components/scrolling-logos"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between py-4 px-8 md:px-16 border-b border-gray-800">
        <div className="text-xl font-bold">Monocle Agency</div>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#about" className="text-sm hover:text-gray-300">
            About Us
          </Link>
          <Link href="#case-study" className="text-sm hover:text-gray-300">
            Case Study
          </Link>
          <Link href="#how-it-works" className="text-sm hover:text-gray-300">
            How It Works
          </Link>
          <Link href="#services" className="text-sm hover:text-gray-300">
            Our Service
          </Link>
        </div>
        <Link href="#contact" className="bg-white text-black rounded-full px-4 py-1.5 flex items-center text-sm">
          <Phone className="h-3 w-3 mr-2" />
          Contact Us
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 py-16 relative">
        <div className="relative max-w-3xl mx-auto">

          <div className="border border-transparent bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-[1px] rounded-xl">
            <div className="bg-black rounded-xl p-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                Elevating Brands with
                <br />
                Smart Digital Strategies
              </h1>

              <p className="text-center text-gray-300 mb-8 max-w-2xl mx-auto">
                We help businesses grow through data-driven campaigns, creative content, and targeted digital solutions
                tailored to your goals.
              </p>

              <div className="flex justify-center">
                <Link
                  href="#get-started"
                  className="bg-transparent border border-blue-400 text-white rounded-full px-6 py-2 hover:bg-blue-900/20 transition"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted By Section - Updated */}
        <div className="mt-24">
          <p className="text-sm uppercase tracking-wider text-center mb-2">TRUSTED BY LEADING COMPANIES</p>
          <ScrollingLogos />
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl p-[1px]">
                <div className="bg-[#0a1525] rounded-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Team"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full w-fit mb-4">
                ABOUT US
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Driven by Purpose, Built for Impact</h2>
              <p className="text-gray-300">
                We are a digital marketing agency with a passion for creativity, strategy, and results. Our team blends
                data, innovation, and execution to help brands grow in meaningful ways. From startups to established
                businesses, we partner with those who dare to do things differently. Together, we turn ideas into
                measurable impact across digital platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section id="case-study" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center relative">
              <div className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full w-fit mb-4">
                CASE STUDY
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Digital
                <br />
                Campaign
              </h2>
              <div className="absolute left-0 bottom-0 flex space-x-4">
                <button className="bg-black border border-white/20 rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-left"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                <button className="bg-black border border-white/20 rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-right"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Case Study"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-center">
                  <div className="absolute top-8 left-8">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Profile"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                  <div className="max-w-md">
                    <p className="text-white">
                      We helped a growing beauty brand increase their online visibility through a multi-platform digital
                      campaign. By combining paid ads, influencer outreach, and precise audience targeting, we tripled
                      their monthly leads. The campaign achieved a 4.5x return on ad spend in just 2 months.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Make It Happen Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
          <div className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full w-fit mx-auto mb-4">
            HOW IT WORKS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Make It Happen</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-16">
            A simple, transparent process designed to help your brand grow efficiently.
          </p>

          <div className="relative max-w-4xl mx-auto">
            {/* Infinity Symbol */}
            <div className="relative h-80 mb-8">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" className="w-full">
                  <path
                    d="M100,100 C100,55 145,55 170,100 C195,145 240,145 240,100 C240,55 285,55 310,100 C335,145 380,145 380,100"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="12"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Left Circle Text */}
                <div className="absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <p className="font-bold">Creative</p>
                  <p className="font-bold">Execution</p>
                </div>

                {/* Right Circle Text */}
                <div className="absolute left-3/4 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <p className="font-bold">Strategic</p>
                  <p className="font-bold">Foundation</p>
                </div>

                {/* Avatar */}
                <div className="absolute right-1/3 top-1/2 -translate-y-1/2">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Profile"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Solutions Section */}
      <section id="services" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
          <div className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full w-fit mx-auto mb-4">
            OUR SERVICE
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Smart Solutions for Brands</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-16">
            We combine creative strategy, smart execution, and data-driven decisions to help you thrive in the digital
            world.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {/* Digital Campaign */}
            <div className="bg-[#0a1525] p-6 rounded-lg text-left">
              <div className="bg-[#0f2a4a] h-12 w-12 flex items-center justify-center rounded-md mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M9 9h6v6H9z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-3">Digital Campaign</h3>
              <p className="text-gray-300 text-sm">
                From ideation to execution, we craft integrated campaigns that build awareness.
              </p>
            </div>

            {/* Social Activation */}
            <div className="bg-[#0a1525] p-6 rounded-lg text-left">
              <div className="bg-[#0f2a4a] h-12 w-12 flex items-center justify-center rounded-md mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                  <path d="M12 18h.01" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-3">Social Activation</h3>
              <p className="text-gray-300 text-sm">
                We spark conversations and build community through social-first ideas.
              </p>
            </div>

            {/* Tech & Development */}
            <div className="bg-[#0a1525] p-6 rounded-lg text-left">
              <div className="bg-[#0f2a4a] h-12 w-12 flex items-center justify-center rounded-md mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <rect width="18" height="12" x="3" y="4" rx="2" ry="2" />
                  <line x1="2" x2="22" y1="20" y2="20" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-3">Tech & Development</h3>
              <p className="text-gray-300 text-sm">
                We design and develop intuitive, high-performing websites and digital products.
              </p>
            </div>

            {/* Performance */}
            <div className="bg-[#0a1525] p-6 rounded-lg text-left">
              <div className="bg-[#0f2a4a] h-12 w-12 flex items-center justify-center rounded-md mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M3 3v18h18" />
                  <path d="m19 9-5 5-4-4-3 3" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-3">Performance</h3>
              <p className="text-gray-300 text-sm">
                We analyze every step of your digital journey, measurable results that grow your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-12 relative overflow-hidden">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Grow Your
                <br />
                Brand Online?
              </h2>
              <Link
                href="#contact"
                className="bg-transparent border border-blue-400 text-white rounded-full px-6 py-2 inline-block hover:bg-blue-900/20 transition"
              >
                Let's Talk Strategy
              </Link>
            </div>
            <div className="absolute right-12 top-1/2 -translate-y-1/2">
              <div className="relative">
                <svg
                  width="400"
                  height="400"
                  viewBox="0 0 400 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-blue-500"
                >
                </svg>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Image
                    src="/images/ion_rocket.png"
                    alt="Profile"
                    width={400}
                    height={400}
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a1525] py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-6">Monocle Agency</h3>
              <p className="text-gray-400 text-sm">
                1234 Market Street, Suite 500
                <br />
                San Francisco, CA 94103 US
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">About Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Career
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Highlights
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Industries
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Solutions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  +1 (555) 123456789
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  contact@fabco.com
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
            2023 © Monocle Agency
          </div>
        </div>
      </footer>
    </main>
  )
}
