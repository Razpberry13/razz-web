import Image from "next/image";
import { Hoome } from "./component/home";
import { Navbar } from "./component/navbar";
import { Summary } from "./component/summary";
import { About } from "./component/about";
import { Skills } from "./component/Skills"
import { Contact } from "./component/Contact";
import { Footer } from "./component/Footer";


export default function Home() {
  return (
    <>
    <Hoome/>
    <Navbar/>
    <Summary/>
    <About/>
    <Skills/>
    <Contact/>
    <Footer/> 

    </>
  );

}