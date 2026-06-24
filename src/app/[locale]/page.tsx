import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import EngineeringSection from "@/components/engineering-section";
import ProcessSection from "@/components/process-section";
import HomeSolutions from "@/components/home-solutions";
import ConsultationSection from "@/components/consultation-section";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <EngineeringSection />
      <HomeSolutions />
      <ProcessSection />
      <ConsultationSection />
      <Footer />
    </main>
  );
}