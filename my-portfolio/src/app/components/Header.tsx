"use client";

import { useEffect, useState } from "react";
import Typed from "typed.js";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const typed = new Typed("#element", {
      strings: ["Coder", "Backend-Developer", "Blockchain", "API Integration"],
      typeSpeed: 40,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <header className="min-h-screen " id="header">
      <div className="p-4">
       
        <nav className="flex items-center justify-between flex-wrap mt-0">
         
          <ul className="hidden md:flex space-x-12 mx-auto mt-6 italic">
            {["Home", "My Work", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="text-white no-underline text-[1.5vmax] relative hover:after:w-full after:content-[''] after:w-0 after:h-[2.8px] after:bg-[#d42929] after:absolute after:left-0 after:bottom-[-4px] after:transition-[width] after:duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </nav>

      
        {isMenuOpen && (
          <ul className="mt-4 space-y-4   md:hidden text-center">
            {["Home", "My Work", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="text-white  underline hover:text-[#d42929] text-lg block"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        )}

      
        <section className="flex  flex-col md:flex-row justify-around w-full min-h-[max-content] mt-6">
       
          <div className="flex mt-20 md:mt-28 flex-col md:w-1/2  items-center md:items-start justify-center text-center md:text-left md:ml-8">
            <h1 className=" text-[4vmax] sm:text-[6vmax] md:text-[4.5vmax] font-tourney text-white font-semibold">
              HEY I AM{" "}
              <span className="text-[#d42929] font-roboto font-semibold italic">
                SUNIDHI
              </span>
            </h1>
          </div>

          <div className="hidden md:block w-[6px] h-[35vmax] bg-[#cfcfe3] absolute left-1/2 top-[8.5vmax] rounded-[30%]" />

      
          <div className="flex flex-col mt-14 md:mt-28 md:w-1/2 items-center justify-center px-2 font-roboto text-center">
            <div className="w-[80%]">
         
              <h4 className="text-[2.5vmax] md:text-[2vmax] text-center md:text-start italic">
                &lt; <span id="element" className="text-[#ec4b4b]"></span> /&gt;
              </h4>
            
              <h4 className="text-[2.5vmax] md:text-[2vmax] xl:text-[2.2vmax] font-sans text-start font-[500] italic mt-[4vmax] md:mt-[2.2vmax]">
                I&apos;m a Full Stack Developer
              </h4>
              
              <ul className=" mt-[2vmax] tracking-wide space-y-1 list-disc list-outside text-start ml-[5%]">
                {[
                  "HTML, CSS, Javascript, Typescript, Rust",
                  "MERN Stack",
                  "NextJs, Tailwind CSS",
                  "Web 3, Solana, Ethereum",
                  "PostgreSQL, Prisma & SEO Optimisation",
                ].map((skill) => (
                  <li
                    key={skill}
                    className="text-[2vmax] md:text-[1.5vmax] text-start font-serif"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </header>
  );
}
