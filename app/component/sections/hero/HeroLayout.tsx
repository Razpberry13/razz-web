import HeroText from "./HeroText";
import HeroSocial from "./HeroSocial";
import HeroImage from "./HeroImage";

const HeroLayout = () => (
  <section className="min-h-screen flex flex-col lg:flex-row relative overflow-hidden bg-[#d7d7d7]">
    <div className="w-full lg:w-1/2 bg-[#d7d7d7] flex flex-col justify-center items-center relative px-4 sm:px-8 py-12 lg:py-0">
      <HeroText />
      <HeroSocial />
    </div>

    <div className="w-full lg:w-1/2 bg-black flex items-end justify-center px-4 py-12">
      <HeroImage />
    </div>
  </section>
);

export default HeroLayout;
