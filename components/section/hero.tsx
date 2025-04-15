import Link from "next/link";

export function Hero() {
  return (
    <section
      className="max-w-7xl mx-auto px-8 md:px-16 py-16 relative transition-all"
      style={{
        backgroundImage: 'url("/images/pattern.jpeg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay untuk background image */}
      <div
        className="absolute inset-0 bg-black opacity-80"
        style={{ zIndex: -1 }} // Overlay berada di belakang konten hero
      ></div>

      {/* Menambahkan gambar dan tombol */}
      <div className="relative z-10 text-center">
        <img
          src="/Images/Frame_Hero.png"
          alt="Hero Gambar"
          className="mx-auto"
          style={{
            width: "60%",
            maxWidth: "800px", // Menetapkan lebar maksimum gambar
          }}
        />

        {/* Tombol Get Started */}
        <Link
          href="#get-started"
          className="mt-4 inline-block px-6 py-3 text-white font-semibold rounded-full transform transition duration-300 hover:scale-105"
          style={{
            position: "absolute",
            bottom: "40px", // Menyesuaikan posisi tombol
            left: "50%",
            transform: "translateX(-50%)",
            background: "none",
            border: "2px solid transparent",
            borderImage: "linear-gradient(to right, #3b82f6, #9333ea) 1", // Gradient border
            borderRadius: "30px", // Rounded border
          }}
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
