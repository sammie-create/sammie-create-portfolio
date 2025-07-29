/**
 * @copyright 2024 sammie-create
 * @license Apache-2.0
 */

// Node Module

// Components
import { ButtonPrimary, ButtonOutline } from "./Button";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-30">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10 lg:h-[500px]">
        <div>
          <div className="flex items-center gap-3">
            <figure className="flex items-center justify-center w-12 h-12 rounded-lg img-box">
              <img
                src="/images/sd-logo.png"
                alt="Samuel Durumba Avater"
                className="align-middle img-cover"
                style={{ width: "44px", height: "44px" }}
              />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>

          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Building Visually Stunning and Seamless Web Experiences
          </h2>

          <div className="flex items-center gap-3">
            <ButtonPrimary
              label="Download CV"
              icon="download"
              href="/samuel-fullstack-resume.pdf"
              target="_blank"
            />

            <ButtonOutline
              href="#bio"
              label="Scroll down"
              icon="arrow_downward"
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] h-full max-h-[500px] ml-auto rounded-full overflow-hidden">
            <img
              src="/images/hero-img.JPG"
              alt="Samuel Durumba"
              className="w-full h-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
