export function Service(){
    return(
<section id="services" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
          <div className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full w-fit mx-auto mb-4">
            OUR SERVICE
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Services</h2>
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
    )
}
