import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google'; // ✅ Use DM Sans

const dmSans = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // adjust weights as needed
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'FABRO - Digital Excellence',
  description: 'Crafting digital excellence through innovative solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.className} scroll-smooth`}>
      <body>{children}</body>
    </html>
  );
}
