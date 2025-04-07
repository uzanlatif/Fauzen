'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Home, Package, Users, Phone, Menu, X } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/product', label: 'Product', icon: Package },
  { href: '/client', label: 'Client', icon: Users },
  { href: '/contact', label: 'Contact', icon: Phone },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b border-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between flex-row md:justify-center items-center h-16">
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${
                  item.href === '/'
                    ? 'text-primary font-medium'
                    : 'text-foreground hover:text-primary transition-colors'
                } flex items-center gap-2`}
              >
                <item.icon size={18} />
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}

          <div className="text-xl font-bold md:hidden">FABRO</div>
          <div className="md:hidden ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Items */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-4 mt-4 pb-4 border-t pt-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`${
                  item.href === '/'
                    ? 'text-primary font-medium'
                    : 'text-muted-foreground hover:text-primary transition-colors'
                } flex items-center gap-2 px-2`}
              >
                <item.icon size={18} />
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
