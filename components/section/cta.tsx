import Link from "next/link";
import Image from "next/image";

export function CTA() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        {/* Set background image and adjust its size */}
        <div
          className="relative bg-cover bg-center rounded-lg" // Add rounded corners to the background
          style={{
            backgroundImage: "url('/images/pattern.jpeg')",
            backgroundSize: '250%', // Memperbesar background menjadi lebih luas
            backgroundPosition: 'top', // Set the background position to 'top'
            padding: '5rem 0', // Menambah padding agar background lebih lebar
          }}
        >
          <div className="max-w-2xl mx-auto relative z-10 text-left flex items-center justify-between ml-40">
            {/* Text section with padding-left */}
            <div className="text-white pl-8"> {/* Add padding-left here */}
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
            
            {/* Image section with margin-left auto to push it to the right */}
            <div className="flex-shrink-0 ml-auto">
              <Image
                src="/images/ion_rocket.png" // Ganti dengan path gambar yang diinginkan
                alt="Rocket Image"
                width={150}
                height={150}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
