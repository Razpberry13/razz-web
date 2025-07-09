import AboutHeader from "./AboutHeader";
import AboutDescription from "./AboutDescription";

const About = () => (
  <section className="py-12 px-4 sm:px-8 bg-[#d7d7d7]">
    <div className="max-w-3xl mx-auto text-center">
      <AboutHeader />
      <AboutDescription />
    </div>
  </section>
);

export default About;
