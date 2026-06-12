import { HeroSection } from "@/components/sections/hero";
import { MarqueeSection } from "@/components/sections/marquee";
import { ManifestoSection } from "@/components/sections/manifesto";
import { ServicesSection } from "@/components/sections/services";
import { ProcessSection } from "@/components/sections/process";
import { StatsSection } from "@/components/sections/stats";
import { WorkSection } from "@/components/sections/work";
import { CTASection } from "@/components/sections/cta";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <MarqueeSection />
      <ManifestoSection />
      <ServicesSection />
      <ProcessSection />
      <StatsSection />
      <WorkSection />
      <CTASection />
    </div>
  );
}
