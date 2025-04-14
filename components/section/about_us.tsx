import Image from "next/image";
export function About() {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl p-[1px]">
              <div className="bg-[#0a1525] rounded-xl overflow-hidden">
                <Image
                  src="/images/people.jpg"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Driven by Purpose, Built for Impact
            </h2>
            <p className="text-gray-300">
              Not just looking - we focus.
              <br />
              As a digital agency, we bring clarity in the blur, frame ideas
              with purpose, and sharpen every angle until they cut through the
              noise.
              <br />
              We don't just play in digital - we see throught it
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
