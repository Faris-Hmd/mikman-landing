import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Features from "../../components/Features";
import Plans from "../../components/Plans";
import HowToStart from "../../components/HowToStart";
import Footer from "../../components/Footer";

export default function LandingPage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Plans />
      <HowToStart />
      <Footer />
    </main>
  );
}