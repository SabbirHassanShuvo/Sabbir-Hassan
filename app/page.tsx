"use client";
import { Banner } from "./components/sections/Banner";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { AboutSection } from "./components/sections/AboutSection";
import { Education } from "./components/sections/Education";
import { Contact } from "./components/sections/ContactSection";
import NewSkills from "./components/sections/NewSkills";

export default function Home() {
  return (
    <>
      <div id="scroll-container">
        <Banner />
        <Experience id="experience" />
        <Projects id="projects" />
        <NewSkills id="skills" />
        {/* <AboutSection id="about" /> */}
        <Education id="education" />
        <Contact id="contact" />
      </div>
    </>
  );
}
