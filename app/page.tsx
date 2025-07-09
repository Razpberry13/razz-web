import { HeroLayout } from "./component/sections/hero";
import { About } from "./component/sections/about";
import { Summary } from "./component/sections/about/Summary";
import { Skills } from "./component/sections/skills";
import { Projects } from "./component/sections/projects";
import { Contact } from "./component/sections/contacts";
import { Footer } from "./component/layout/footer";
import { Navbar } from "./component/layout/navbars";
export default function Home() {
  return (
    <>
      <HeroLayout />
      <Summary />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Navbar />
    </>
  );
}
