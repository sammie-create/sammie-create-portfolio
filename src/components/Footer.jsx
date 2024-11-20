/**
 * @copyright 2024 sammie-create
 * @license Apache-2.0
 */

// Components

import { ButtonPrimary } from "./Button";

const siteMap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Bio",
    href: "#bio",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/samuel-durumba-580914245/",
  },
  {
    label: "Twitter",
    href: "https://x.com/sdurumba90614?s=21",
  },
  {
    label: "GitHub",
    href: "https://github.com/sammie-create",
  },
];

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-2 mb-8 lg:max-w-[16ch] reveal-up">
              Let&apos;s create something amazing together today
            </h2>

            <ButtonPrimary
              href="mailto:samueldurumba@gmail.com"
              label="Start Project"
              icon="chevron_right"
              classes="reveal-up"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2 reveal-up">Sitemap</p>

              <ul>
                {siteMap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2 reveal-up">Socials</p>

              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-10 mb-8">
          <a href="#home" className="Logo reveal-up">
            <img src="/images/sd-logo.png" width={40} height={40} alt="logo" />
          </a>

          <p className="text-zinc-500 text-sm reveal-up">
            &copy; 2024 <span className="text-zinc-200">Samuel Devs</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
