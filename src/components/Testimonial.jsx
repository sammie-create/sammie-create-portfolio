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
    id: Math.floor(1000 + Math.random() * 9000),
    content:
      "A Fantastic job on the website! The website is modern and professional, user-friendly and perfectly reflects our brand.",
    name: "Simon Durumba",
    imgSrc: "/images/sd-logo.png",
    company: "WorldSmith Company",
  },
  {
    id: Math.floor(1000 + Math.random() * 9000),
    content:
      "Samuel delivers clean, user-friendly interfaces with great attention to detail. A skilled and reliable frontend developer!",
    name: "Sarah Johnson",
    imgSrc: "/images/sd-logo.png",
    company: "Techwave",
  },
  {
    id: Math.floor(1000 + Math.random() * 9000),
    content:
      "Fantastic to work with! Samuel builds smooth, responsive designs and stays ahead of the latest frontend trends.",
    name: "Mustapha Semilore",
    imgSrc: "/images/sd-logo.png",
    company: "Fullstack Developer",
  },
  // {
  //   content:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repudiandae modi explicabo voluptates rerum vitae ea corporis assumenda animi deleniti!",
  //   name: "Sarah Durumba",
  //   imgSrc: "/images/sd-logo.png",
  //   company: "StarPix",
  // },
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
          {testimonials.map(({ id, content, name, company }, key = { id }) => (
            <TestimonialCard
              key={key}
              name={name}
              imgSrc={`https://i.pravatar.cc/48?u=${id}`}
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
