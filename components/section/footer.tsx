import Link from "next/link"

export function Footer(){
    return(
        <footer className="bg-[#0a1525] py-16">
<div className="max-w-7xl mx-auto px-8 md:px-16">
  <div className="grid md:grid-cols-4 gap-8">
    <div>
      <h3 className="text-xl font-bold mb-6">Monocle Agency</h3>
      <p className="text-gray-400 text-sm">
        1234 Market Street, Suite 500
        <br />
        San Francisco, CA 94103 US
      </p>
    </div>
    <div>
      <h4 className="font-semibold mb-4">About Us</h4>
      <ul className="space-y-2 text-gray-400">
        <li>
          <Link href="#" className="hover:text-white">
            Team
          </Link>
        </li>
        <li>
          <Link href="#" className="hover:text-white">
            Career
          </Link>
        </li>
        <li>
          <Link href="#" className="hover:text-white">
            Blog
          </Link>
        </li>
      </ul>
    </div>
    <div>
      <h4 className="font-semibold mb-4">Our Services</h4>
      <ul className="space-y-2 text-gray-400">
        <li>
          <Link href="#" className="hover:text-white">
            Highlights
          </Link>
        </li>
        <li>
          <Link href="#" className="hover:text-white">
            Industries
          </Link>
        </li>
        <li>
          <Link href="#" className="hover:text-white">
            Solutions
          </Link>
        </li>
      </ul>
    </div>
    <div>
      <h4 className="font-semibold mb-4">Contact</h4>
      <ul className="space-y-2 text-gray-400">
        <li className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          +1 (555) 123456789
        </li>
        <li className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2"
          >
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
          contact@fabco.com
        </li>
      </ul>
    </div>
  </div>
  <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
    2025 © Monocle Digital Agency
  </div>
</div>
</footer>
    )
}
