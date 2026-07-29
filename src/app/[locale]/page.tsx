import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Showcase from "@/components/Showcase";
import HowToStart from "@/components/HowToStart";
import Plans from "@/components/Plans";
import Footer from "@/components/Footer";
import ParallaxBackground from "@/components/ParallaxBackground";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-bg text-text-primary selection:bg-primary selection:text-white overflow-x-hidden">
      <ParallaxBackground />
      <Navbar />
      <Hero />
      <Features />
      <Showcase />
      <HowToStart />
      <Plans />
      <Footer />
    </main>
  );
}