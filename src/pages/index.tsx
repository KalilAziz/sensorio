import { HeroHome } from "@/components/HeroHome";
import { StatsHome } from "@/components/Stats";
import { Partners } from "@/components/partners";
import { TestimonialsGrid } from "@/components/testimonialsGrid";

export default function Home() {
  return (
    <main>
      <HeroHome />
      <StatsHome />
      <TestimonialsGrid />
      <Partners />
    </main>
  );
}
