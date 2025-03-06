"use client";

import Image from "next/image";
import { Github, Link as LinkIcon } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-20 mt-16 xl:mt-32 bg-[#06061E]">
      <div className="container mx-auto px-4">
        <h1 className="text-[3.1vmax] font-mono font-semibold text-center mb-16 text-white ">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
             {
              title: "Grocery Store Web App",
              image: "/GroceryStore.png",
              description: "Online store to shop for grocery items.",
              techStack: "MERN Stack, React-Redux",
              liveLink: "https://grocery-store-mern-frontend.vercel.app/",
              githubLink: "https://github.com/SUNIDHI-JAIN125/Grocery-Store-MERN",
            },
            {
              title: "Dev-Score",
              image: "/devscore.png",
              description: "DevScore scores your GitHub & resume like a recruiter, with actionable feedback.",
              techStack: "Gemini API, NextJS, TypeScript, Prisma ORM, Tailwind CSS ",
              liveLink: "https://dev-score-wheat.vercel.app/",
            },
            {
              title: "Ringle (NFT AMM)",
              image: "/ringle1.png",
              description: "DEX for buying and selling NFTs.",
              techStack: "Ethereum, Polygon, NextJS, Solidity, Chainlink VRF",
              liveLink: "https://block-magic-hackathon.vercel.app/",
              githubLink: "https://github.com/SUNIDHI-JAIN125/Block-Magic-Hackathon",
            },
            
            {
                title: "CineBuddy",
                image: "/cinebuddy.png",
                description: "App for watching movies together.",
                techStack: "NodeJs, MongoDB, Android-Development, Gemini API",
                liveLink: "",
                githubLink: "https://github.com/HackThisFall-Divine-Devs/CineBuddy",
              },
              {
                title: "Pattern Memory Game",
                image: "/pmgame.png",
                description: "A real-time, 2-player game.",
                techStack: "TypeScript, NextJS, WebSockets, PostgreSQL, Prisma, Shadcn-UI",
                liveLink: "https://pattern-memory-game.vercel.app/",
                githubLink: "https://github.com/SUNIDHI-JAIN125/Pattern-Memory-Game",
              },
            {
              title: "Food Copilot",
              image: "/foodie2.png",
              description: "Smart meal-planning app.",
              techStack: "Gemini API, Spoonacular API, NextJS (TypeScript), Firebase",
              liveLink: "https://foodie-blue-pi.vercel.app/",
              githubLink: "https://github.com/SUNIDHI-JAIN125/FoodCopilot",
            },
            {
                title: "Safe Shipping",
                image: "/safeshipping.png",
                description: "Decentralized freelancing Web 3 App.",
                techStack: "Solana Blockchain, NextJS, Rust",
                liveLink: "https://safe-shipping-d-app-web3.vercel.app/",
                githubLink: "https://github.com/SUNIDHI-JAIN125/Safe_Shipping-DApp-Web3",
              },
            {
              title: "W3 Venture",
              image: "/startup.png",
              description: "Decentralized Fundraising Platform.",
              techStack: "NodeJS, MongoDB, NextJS, Solidity, TypeScript, Sepolia, TailwindCSS",
              liveLink: "https://w3-venture-frontend.vercel.app/",
              githubLink: "https://github.com/SUNIDHI-JAIN125/W3-Venture",
            },
            {
              title: "LiveStream App",
              image: "/liveApp.png",
              description: "LiveStreaming Application.",
              techStack: "ReactJS, JavaScript, TailwindCSS",
              liveLink: "https://live-stream-app-iota.vercel.app/",
              githubLink: "",
            }

          ].map((project) => (
            <div
              key={project.title}
              className="relative overflow-hidden mt-16 rounded-lg group"
            >
             
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={600}
                className="w-full h-auto xl:h-[260px] object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
              />
        
              <div className="absolute inset-0 bg-black/60 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out flex flex-col items-center justify-start  px-4 text-center">
                <h3 className=" text-[2.1vmax] lg:text-[1.6vmax] xl:text-[1.4vmax] mt-8 font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-[1.7vmax] lg:text-[1.2vmax] xl:text-[1vmax] text-gray-300 mt-2 italic">
                  {project.techStack}
                </p>
              </div>
             
              <div className="mt-6 text-center">
                <p className="text-[1.7vmax] lg:text-[1.3vmax] xl:text-[1.2vmax] text-gray-300">{project.description}</p>
              </div>
          
              <div className="flex gap-8 mt-4 items-center justify-center relative z-10">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white cursor-pointer bg-black  w-9 h-9 flex items-center justify-center rounded-full"
                    aria-label="GitHub Link"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white cursor-pointer text-black hover:bg-black hover:text-white  w-9 h-9 flex items-center justify-center rounded-full"
                    aria-label="Live Project Link"
                  >
                    <LinkIcon className="w-6 h-6" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
