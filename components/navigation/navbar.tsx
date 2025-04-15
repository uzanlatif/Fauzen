import { Phone } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4 px-8 md:px-16 sticky top-0 bg-black bg-opacity-70 backdrop-blur-md z-20">
      <div className="text-xl font-bold text-white">Monocle Agency</div>
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
      <Link
        href="http://wa.me/+62895801102898"
        className="bg-white text-black rounded-full px-4 py-1.5 flex items-center text-sm"
      >
        <Phone className="h-3 w-3 mr-2" />
        Contact Us
      </Link>
    </nav>
  );
}
