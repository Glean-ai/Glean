import Hero from "@/components/hero";
import Skills from "@/components/skills";
import HowItWorks from "@/components/how-it-works";
import InstallSection from "@/components/install-section";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <Hero />
      <Skills />
      <HowItWorks />
      <InstallSection />
    </div>
  );
}
