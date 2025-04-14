import Image from "next/image";
export function Process() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
        <div className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full w-fit mx-auto mb-4">
          HOW IT WORKS
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          How We Make It Happen
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-16">
          A simple, transparent process designed to help your brand grow
          efficiently.
        </p>

        <div>
          <Image
            src="/images/process.png"
            alt="Case Study"
            width={600}
            height={400}
            className="w-full h-full object-cover opacity-70"
          />
        </div>
      </div>
    </section>
  );
}
