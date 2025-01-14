"use client";

const skills = {
  "Primary Stack": ["Next.js", "TypeScript","Tailwind CSS","PostgreSQL", "Prisma"],
  Frontend: ["HTML", "CSS", "JavaScript", "React.js", "Redux"],
  Backend: ["Node.js", "Express.js","MongoDB",],
  Languages: ["C++", "TypeScript","Solidity"],
  Web3: ["Smart Contracts", "Ethereum","Solana","Web3.js",],
  Tools: [
    "Docker",
    "TurboRepo",
    "CI/CD", 
    "Git"
  ],
  "Testing & APIs": ["GraphQL", "RESTful APIs", "Zod"],
};

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen py-20 mt-24 bg-[#070707]">
      <div className="container mx-auto px-4">
        <h1 className="text-[3.1vmax] font-mono font-semibold text-center mb-12 text-white">
            Skills
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 lg:mt-20">
          {Object.entries(skills).map(([category, skillsList], index) => (
            <div
              key={index}
              className="bg-[#121212] p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-[1.3vmax] font-semibold text-white mb-4">
                {category}
              </h2>
              <div className="grid grid-cols-3 xl:grid-cols-4 gap-4">
                {skillsList.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-white text-black text-center py-2 px-2 rounded-lg shadow-md text-[1vmax] font-mono hover:bg-gray-100 transition-colors duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
