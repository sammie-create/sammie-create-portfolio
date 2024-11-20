/**
 * @copyright 2024 sammie-create
 * @license Apache-2.0
 */

// COMPONENTS
import SkillCard from "./SkillCard";

const toolKit = [
  {
    imgSrc: "/images/html.svg",
    label: "HTML",
    desc: "Web Development",
  },
  {
    imgSrc: "/images/css.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/bootstrap.svg",
    label: "Bootstrap",
    desc: "CSS Library",
  },
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/images/sass.svg",
    label: "Sass",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/react.svg",
    label: "React",
    desc: "JS Framework",
  },
  {
    imgSrc: "images/figma.svg",
    label: "Figma",
    desc: "Design Tool",
  },
  {
    imgSrc: "images/github.svg",
    label: "GitHub",
    desc: "Version Control",
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">My Tool Kit</h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[70ch]">
          Discover my amazing toolkit i use to develop, design and deliver
          seamless and visually stunning web experiences:
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {toolKit.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
