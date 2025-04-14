import Link from "next/link";

export function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-8 md:px-16 py-16 relative">
      <div className="relative max-w-3xl mx-auto">
        <div className="border border-transparent bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-[1px] rounded-xl">
          <div className="bg-black rounded-xl p-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              Seeing Through the Noise
              <br />
              Clarity isn't found - it's crafted
            </h1>

            <p className="text-center text-gray-300 mb-8 max-w-2xl mx-auto">
              We help brands focus, zoom in on what matters, and cut through the
              clutter of a crowded digital world.
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
    </section>
  );
}
