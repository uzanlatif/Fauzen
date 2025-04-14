import Link from "next/link"
import Image from "next/image"

export function CTA(){
    return(
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
    )
}
