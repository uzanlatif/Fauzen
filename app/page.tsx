import { Navbar } from "@/components/navigation/navbar";
import { Hero } from "@/components/section/hero";
import { Client } from "@/components/section/client";
import { About } from "@/components/section/about_us";
import { Case } from "@/components/section/case_study";
import { Process } from "@/components/section/process";
import { Service } from "@/components/section/service";
import { CTA } from "@/components/section/cta";
import { Footer } from "@/components/section/footer";
import { Mission } from "@/components/section/mission";
import { Service2 } from "@/components/section/new_service";
import { HoverService } from "@/components/section/hover_service";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Client />
      <About />
      <Mission />
      <Case />
      <Process />
      <Service />
      <Service2/>
      <HoverService/>
      <CTA />
      <Footer />
    </main>
  );
}
