/**
 * @copyright 2024 sammie-create
 * @license Apache-2.0
 */

// Node Modules
import { ReactLenis } from "lenis/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

// Register GSAP Plugin
gsap.registerPlugin(useGSAP, ScrollTrigger);

// COMPONENTS
import Header from "./components/Header";
import Hero from "./components/Hero";
import Bio from "./components/Bio";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  useGSAP(() => {
    const elements = gsap.utils.toArray(".reveal-up");

    elements.forEach(el => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: "-200 bottom",
          end: "bottom 80%",
          scrub: true,
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });
    });
  });

  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <Bio />
        <Skill />
        <Projects />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  );
};

export default App;
