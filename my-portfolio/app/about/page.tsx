import Navbar from "@/components/Navbar";
import Bio from "@/components/Bio";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About — Rabih Siddiqui",
  description: "Experience, skills, and education.",
};

export default function About() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <Bio />
        <Experience />
        <Skills />
        <Education />
      </div>
      <Footer />
    </main>
  );
}
