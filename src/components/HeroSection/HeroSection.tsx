"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";


export function HeroSection() {

  const words = [
    {
      text:"A",
    },
    {
      text: "WEB",
      className:"text-blue-500 dark:text-blue-500"
    },
    {
      text: "DEVELOPER",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="relative z-10  text-3xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
           I'M SUPRITH VARDHAN <br />                      
          <div>
          <TypewriterEffectSmooth className="justify-center text-center" words={words} />
          </div>
        </h1>
        <p className="font-extralight text-xs md:text-xl dark:text-neutral-200 py-4 pl-2 md:pl-8">
          Passionate web developer skilled in rapid learning and adapting to diverse environments, dedicated to creating exceptional digital experiences
        </p>
        
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default HeroSection;

