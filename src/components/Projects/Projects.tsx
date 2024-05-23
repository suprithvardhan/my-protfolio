"use client";
import React from "react";
import { PinContainer } from "../ui/3d-pin";
import Image from "next/image";
import portfolio from "../../../public/images/protfolio.png";
import socialmedia from "../../../public/images/socialmedia.jpg";
import stockBot from "../../../public/images/stock-bot.jpg";
import lostFound from "../../../public/images/lost-found.jpeg";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon from react-icons

export function Projects() {
  return (
    <div className="min-h-screen pb-24">
      {/* Apply the darker gradient background from left to right */}
      <div className="text-center mb-4">
        <h1 className="text-3xl font-bold font-serif">PROJECTS</h1>
      </div>

      <div className="h-auto w-full flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-y-32 md:gap-28">
        <PinContainer
          title="Decentralised Social Media"
          href="https://github.com/your-github-repo"
        >
          <div className="relative flex flex-col p-4 tracking-tight text-slate-100/50 w-[15rem] md:w-[20rem] h-auto sm:h-[20rem]">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
              Decentralised Social Media
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500">
                A decentralized social media platform built on blockchain
                technology.
              </span>
            </div>
            <div className="relative flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
              <Image
                src={socialmedia}
                alt="socialmedia"
                layout="responsive"
                width={300}
                height={150}
                className="rounded-lg"
              />
              <a
                href="https://loopconnect.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-2 right-2 text-white text-2xl"
              >
                <FaGithub />
              </a>
            </div>
            <div className="mt-4 flex justify-center">
              <a
                href="https://loopconnect.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-4 py-2 rounded bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white font-bold">
                  Visit
                </button>
              </a>
            </div>
          </div>
        </PinContainer>

        <PinContainer
          title="My Portfolio"
          href="https://github.com/your-github-repo"
        >
          <div className="relative flex flex-col p-4 tracking-tight text-slate-100/50 w-[15rem] sm:w-[20rem] h-auto sm:h-[20rem] shadow-xl">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
              My Portfolio
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500">
                A personal portfolio website showcasing my projects and skills.
              </span>
            </div>
            <div className="relative flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
              <Image
                src={portfolio}
                alt="portfolio"
                layout="responsive"
                width={300}
                height={150}
                className="rounded-lg"
              />
              <a
                href="https://suprithvardhan.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-2 right-2 text-white text-2xl"
              >
                <FaGithub />
              </a>
            </div>
            <div className="mt-4 flex justify-center">
              <a
                href="https://suprithvardhan.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-4 py-2 rounded bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white font-bold">
                  Visit
                </button>
              </a>
            </div>
          </div>
        </PinContainer>

        {/* Stock Price Bot */}
        <PinContainer
          title="Stock Price Bot"
          href="https://github.com/your-github-repo"
        >
          <div className="relative flex flex-col p-4 tracking-tight text-slate-100/50 w-[15rem] md:w-[20rem] h-auto sm:h-[20rem]">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
              Stock Price Bot
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500">
                A bot that fetches and displays real-time stock prices.
              </span>
            </div>
            <div className="relative flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
              <Image
                src={stockBot}
                alt="stock-bot"
                layout="responsive"
                width={300}
                height={150}
                className="rounded-lg"
              />
              <a
                href="https://github.com/your-github-repo"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-2 right-2 text-white text-2xl"
              >
                <FaGithub />
              </a>
            </div>
            <div className="mt-4 flex justify-center">
              <a
                href="https://example.com/stock-bot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-4 py-2 rounded bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white font-bold">
                  Visit
                </button>
              </a>
            </div>
          </div>
        </PinContainer>

        {/* Lost and Found App */}
        <PinContainer
          title="Lost and Found App"
          href="https://github.com/your-github-repo"
        >
          <div className="relative flex flex-col p-4 tracking-tight text-slate-100/50 w-[15rem] sm:w-[20rem] h-auto sm:h-[20rem] shadow-xl">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
              Lost and Found App
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500">
                A website and app developed for use within college communities
                for managing lost and found items.
              </span>
            </div>
            <div className="relative flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
              <Image
                src={lostFound}
                alt="lost-found"
                layout="responsive"
                width={300}
                height={150}
                className="rounded-lg"
              />
              <a
                href="https://github.com/your-github-repo"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-2 right-2 text-white text-2xl"
              >
                <FaGithub />
              </a>
            </div>
            <div className="mt-4 flex justify-center">
              <a
                href="https://example.com/lost-found"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-4 py-2 rounded bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white font-bold">
                  Visit
                </button>
              </a>
            </div>
          </div>
        </PinContainer>
      </div>
    </div>
  );
}

export default Projects;
