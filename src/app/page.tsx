import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PressBar from "@/components/PressBar";
import Adventures from "@/components/Adventures";
import ZagrosTrail from "@/components/ZagrosTrail";
import HalgurdLevels from "@/components/HalgurdLevels";
import Destinations from "@/components/Destinations";
import Stays from "@/components/Stays";
import IraqTour from "@/components/IraqTour";
import WhyVIK from "@/components/WhyVIK";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="page-transition">
        <Hero />
        <PressBar />
        <div className="zagros-divider max-w-5xl mx-auto" />
        <Adventures />
        <div className="ridge-divider max-w-4xl mx-auto" />
        <ZagrosTrail />
        <div className="zagros-divider max-w-5xl mx-auto" />
        <HalgurdLevels />
        <div className="ridge-divider max-w-4xl mx-auto" />
        <Destinations />
        <div className="ridge-divider max-w-4xl mx-auto" />
        <Stays />
        <div className="zagros-divider max-w-5xl mx-auto" />
        <IraqTour />
        <div className="ridge-divider max-w-4xl mx-auto" />
        <WhyVIK />
        <div className="ridge-divider max-w-4xl mx-auto" />
        <Gallery />
        <div className="ridge-divider max-w-4xl mx-auto" />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
