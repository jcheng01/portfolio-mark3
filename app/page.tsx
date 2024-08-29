import About from "@/components/about";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import SectionDivider from "@/components/sectionDivider";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Intro />
      <SectionDivider />
      <Experience />
      <About />
    </main>
  );
}
