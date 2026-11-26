import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SignatureDishes from "@/components/SignatureDishes";
import MatchNights from "@/components/MatchNights";
import Menu from "@/components/Menu";
import Rooftop from "@/components/Rooftop";
import Testimonials from "@/components/Testimonials";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SignatureDishes />
        <MatchNights />
        <Menu />
        <Rooftop />
        <Testimonials />
        <Visit />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
