import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Profiles from "@/components/Profiles";
import Impact from "@/components/Impact";
import FeaturedSystem from "@/components/FeaturedSystem";
import Writing from "@/components/Writing";



export default function Home() {
  return (
    <main className="flex flex-col gap-24 px-6 md:px-20 py-20">
    <Hero />
    <Impact />
    <FeaturedSystem />
    <Projects />
    {/* <Skills /> */}
    <Writing />
    <Profiles />

    </main>
  );
}
