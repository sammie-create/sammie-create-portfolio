/**
 * @copyright 2024 sammie-create
 * @license Apache-2.0
 */

// Node Modules

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register GSAP Plugin
gsap.registerPlugin(useGSAP, ScrollTrigger);

// COMPONENT
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    content:
      "A Fantastic job on the website! The website is modern and professional, user-friendly and perfectly reflects our brand.",
    name: "Simon Durumba",
    imgSrc: "/images/sd-logo.png",
    company: "WorldSmith Company",
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repudiandae modi explicabo voluptates rerum vitae ea corporis assumenda animi deleniti!",
    name: "Sarah Durumba",
    imgSrc: "/images/sd-logo.png",
    company: "StarPix",
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repudiandae modi explicabo voluptates rerum vitae ea corporis assumenda animi deleniti!",
    name: "Sarah Durumba",
    imgSrc: "/images/sd-logo.png",
    company: "StarPix",
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repudiandae modi explicabo voluptates rerum vitae ea corporis assumenda animi deleniti!",
    name: "Sarah Durumba",
    imgSrc: "/images/sd-logo.png",
    company: "StarPix",
  },
];

const Testimonial = () => {
  useGSAP(() => {
    gsap.to(".scrub-slide", {
      scrollTrigger: {
        trigger: ".scrub-slide",
        start: "-50% 20%",
        end: "200% 20%",
        scrub: true,
      },
      x: "-500",
    });
  });

  return (
    <section id="testimonials" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">Testimonials</h2>

        <div className="scrub-slide flex items-stretch gap-3 w-fit">
          {testimonials.map(({ content, name, imgSrc, company }, key) => (
            <TestimonialCard
              key={key}
              name={name}
              imgSrc={imgSrc}
              company={company}
              content={content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
