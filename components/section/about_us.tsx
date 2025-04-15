import Image from "next/image";
export function About() {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="relative">
            <div className="">
              <div className="">
                <Image
                  src="/images/spiderman.png"
                  alt="Team"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full w-fit">
              ABOUT US
            </div>
            <br /><br />
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
