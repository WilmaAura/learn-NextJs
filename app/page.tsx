import Hero from "./section/hero";
import Skills from "./section/skills";
import Education from "./section/education";
import Contact from "./section/contact";
export default function Home() {
  return (
    <div>
      <h1>
        <Hero></Hero>
        <Skills></Skills>
        <Education></Education>
        <Contact></Contact>
      </h1>
    </div>
  );
}
