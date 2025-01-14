"use client";
import WorkSlider from "./components/WorkSlider";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070707] text-white">
      <Header />

      <WorkSlider />


<Skills/>
      <Projects />

      <Contact />
    </main>
  );
}
