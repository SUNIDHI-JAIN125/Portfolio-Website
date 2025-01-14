"use client";

import { Mail, Github, Linkedin,FileText } from "lucide-react";

export default function Contact() {
 

  return (
    <section id="contact" className=" py-20 mt-10 xl:mt-28 min-h-screen">
    <div className=" container mx-auto px-4">
      <h1 className="text-[3.1vmax] text-center font-mono font-semibold border-b-[3px] border-white pb-2 mb-20">
        Contact
      </h1>
      <div className="flex flex-col md:flex-row justify-around mt-10">
      <div className="md:w-[40%] mt-10">
          
            <p className="text-[1.3vmax] text-white flex items-center">
              <Mail className="mr-3 text-[#d24242]" />
              <span>sunidhijain0403@gmail.com</span>
            </p>

           
           

            <a
              href="/resume.pdf"
              download
              className="inline-block px-3 py-2 mt-8 bg-[#d24242] text-white text-[1.2vmax] font-mono rounded-md hover:bg-[#db2222] transition-colors duration-300"
            >
              <FileText className="inline mr-2" />
              Download Resume
            </a>
        
             <div className="flex flex-row mt-16 gap-8"> <a
              href="https://github.com/SUNIDHI-JAIN125"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-[1.7vmax text-white hover:text-[#db2222] transform hover:-translate-y-1 transition-transform duration-300"
            >
              <Github className="mr-3 w-7 h-7" /> 
            </a>

         
            <a
              href="https://www.linkedin.com/in/sunidhi-jain-b71866284"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-[1.7vmax] text-white hover:text-[#db2222] transform hover:-translate-y-1 transition-transform duration-300"
            >
              <Linkedin className="mr-3 w-7 h-7" /> 
            </a></div>
          </div>
        <div className="md:w-[45%] mt-8 md:mt-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
          
            }}
            className="space-y-4"
          >
            <input
              type="text"
              name="Name"
              placeholder="What's Your Name?"
              required
              className="w-full bg-[#e0e0fa] text-black rounded-md p-4 text-[1vmax]"
            />
            <input
              type="email"
              name="Email"
              placeholder="Enter Your Email Id"
              required
              className="w-full bg-[#e0e0fa] text-black rounded-md p-4 text-[1vmax]"
            />
            <textarea
              name="Message"
              rows={6}
              placeholder="Any Message..."
              className="w-full bg-[#e0e0fa] text-black rounded-md p-4 text-[1vmax]"
            />
            <button
              type="submit"
              className="px-3 py-2 bg-[#e0e0fa] text-black rounded-md text-[1vmax] hover:bg-[#8c8cc7] transition-colors duration-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
     
    </div>
  </section> ); }
