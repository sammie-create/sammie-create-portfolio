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
    id: 6393,
    content:
      "A Fantastic job on the website! The website is modern and professional, user-friendly and perfectly reflects our brand.",
    name: "Simon Durumba",
    company: "WorldSmith Company",
  },
  {
    id: 6394,
    content:
      "Samuel delivers clean, user-friendly interfaces with great attention to detail. A skilled and reliable frontend developer!",
    name: "Sarah Johnson",
    company: "Techwave",
  },
  {
    id: 6395,
    content:
      "Fantastic to work with! Samuel builds smooth, responsive designs and stays ahead of the latest frontend trends.",
    name: "Mustapha Semilore",
    company: "Fullstack Developer",
  },
  {
    id: 6396,
    content:
      "Working with Samuel has been an amazing experience! Their frontend skills bring designs to life with precision and responsiveness. Highly recommended",
    name: "Mike Davis",
    company: "UI/UX Designer",
  },
];

const Testimonial = () => {
  useGSAP(() => {
    gsap.to(".scrub-slide", {
      scrollTrigger: {
        trigger: ".scrub-slide",
        start: "250% 20%",
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
