import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex flex-col gap-24 px-6 md:px-20 py-20">
      <Hero />
      <Experience />
      <Projects />
    </main>
  );
}
