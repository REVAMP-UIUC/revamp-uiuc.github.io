import { HeroSection } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features";
import { ProjectsSection } from "@/components/sections/projects";
import { CTASection } from "@/components/sections/cta";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <ProjectsSection />
      <CTASection />
    </div>
  );
}
