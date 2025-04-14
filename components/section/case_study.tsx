import Image from "next/image"
export function Case(){
    return(
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
                  src="/images/sepatu.png"
                  alt="Case Study"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-center">
                  <div className="absolute top-8 left-8">
                    {/* <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Profile"
                      width={40}
                      height={40}
                      className="rounded-full"
                    /> */}
                  </div>
                  <div className="max-w-md">
                    {/* <p className="text-white">
                      We helped a growing beauty brand increase their online visibility through a multi-platform digital
                      campaign. By combining paid ads, influencer outreach, and precise audience targeting, we tripled
                      their monthly leads. The campaign achieved a 4.5x return on ad spend in just 2 months.
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
      