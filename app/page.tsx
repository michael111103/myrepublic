import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Packages from "./components/Packages";
import PromoAddon from "./components/PromoAddon";
import Testimonials from "./components/Testimonials";
import RegisterForm from "./components/RegisterForm";
import Footer from "./components/Footer";
import FloatingWA from "./components/FloatingWA";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-900">
      <Navbar />
      <Hero />
      <Features />
      <Packages />
      <PromoAddon />
      <Testimonials />
      <RegisterForm />
      <Footer />
      <FloatingWA />
    </main>
  );
}
