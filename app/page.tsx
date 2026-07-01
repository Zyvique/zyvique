import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhatWeBuild from "@/components/WhatWeBuild";
import Work from "@/components/Work";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <WhatWeBuild />
        <Work />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
