/**
 * @copyright 2024 sammie-create
 * @license Apache-2.0
 */

// COMPONENTS
import ProjectCard from "./ProjectCard";

const projects = [
  {
    imgSrc: "/images/project-1.jpg",
    title: "WorldSmith Construction Company Website",
    // desc: "Developed a responsive website for a construction company with service listings, project showcases, and a blog using HTML, CSS, and JavaScript.",
    tags: ["Dev", "HTML", "CSS", "JS"],
    projectLink: "https://worldsmithconstruct.com",
  },
  {
    imgSrc: "/images/project-2.jpg",
    title: "Ulo·Aku Dummy Bank App",
    tags: ["JS", "Web App", "Banking"],
    projectLink: "https://sammie-create.github.io/ulo-aku-project/",
  },
  {
    imgSrc: "/images/project-3.jpg",
    title: "SunnySide Agency Landing Page",
    tags: ["UI", "Responsive", "Sass", "Figma"],
    projectLink: "https://sunnyside-agency-landing-page-beryl-one.vercel.app/",
  },
  {
    imgSrc: "/images/project-4.jpg",
    title: "E-learnig platform landing page",
    tags: ["UI", "CSS5"],
    projectLink:
      "https://sammie-create.github.io/skilled-e-learning-landing-page/",
  },
  {
    imgSrc: "/images/project-5.jpg",
    title: "Pig dice game",
    tags: ["JS", "CSS"],
    projectLink: "https://sammie-create.github.io/pig-dice-game/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My Portfolio highlights</h2>

        <div className="grid gap-x-4 gap-y-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
