/**
 * @copyright 2024 sammie-create
 * @license Apache-2.0
 */

const bioItems = [
  {
    label: "Projects done",
    number: 5,
  },
  {
    label: "Years of experience",
    number: 2,
  },
];

const Bio = () => {
  return (
    <section id="bio" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-[18px] md:max-w-[60ch]">
            Hi, I&apos;m Samuel Durumba, a Creative and versatile full-stack
            developer with proven expertise in building responsive, user-centric
            web applications. Proficient in JavaScript, React, Next.js, Tailwind
            CSS, and Java/Spring Boot with MySQL. Skilled in scalable design
            systems, AI-driven user experience, and integrating third-party
            services. Adept at optimizing performance, managing complex state,
            and delivering seamless end-to-end solutions while working within
            cross-functional teams. I&apos;m passionate about building
            innovative digital solutions that meet user needs and exceed
            expectations.
            <span className="block pt-2">
              Let&apos;s build something remarkable together.
            </span>
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {bioItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-bold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-blue-500 font-semibold md:text-3xl">
                    +
                  </span>
                </div>

                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            <img
              src="/images/sd-logo.png"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
