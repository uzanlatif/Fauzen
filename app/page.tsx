import { Navbar } from "@/components/navigation/navbar";
import { Hero } from "@/components/sections/hero";
import { Clients } from "@/components/sections/clients";
import { CaseStudy } from "@/components/sections/case-study";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Clients />
      <CaseStudy />
      <Footer />
    </main>
  );
}