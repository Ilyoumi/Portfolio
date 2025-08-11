import React from "react";
import Stat from "./Stat";
import AnimatedIllustration from "./AnimatedIllustration";

export default function Hero() {
  return (
    <section
      id="home"
      className="fade-in-section min-h-[70vh] flex flex-col md:flex-row items-center gap-8 py-12"
    >
      <div className="flex-1">
        <div className="max-w-xl">
          <p className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[#FFEAF2] text-[#FF7AA2] mb-4">
            Full‑Stack Developer
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4 text-[#2b2730]">
            Hey there, I’m{" "}
            <span className="text-[#FF6FA1]">Ghizlane Khabir</span>
            <span className="block text-lg font-medium text-[#5b5561] mt-2">
              Crafting clean code, quirky fixes, and sometimes miracles
            </span>
          </h1>

          <p className="text-slate-600 my-6">
            I turn ideas into smooth, user-friendly web apps — with a little
            caffeine and a lot of curiosity. When bugs show up, I don’t just fix
            them; I wrestle them until they behave. Ready to build something
            awesome together?
          </p>

          <div className="flex gap-4 items-center">
            <a
              href="#projects"
              className="inline-flex items-center gap-3 bg-[#FFEAF2] hover:bg-[#FFD9EA] px-5 py-3 rounded-xl font-semibold shadow transition-transform transform hover:-translate-y-0.5"
            >
              See My Work
            </a>
            <a
              href="#contact"
              className="text-sm text-slate-700 hover:text-pink-500"
            >
              Get in Touch
            </a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 text-sm text-slate-700">
            <Stat label="Projects" value="10+" />
            <Stat label="Languages" value="JavaScript, TypeScript, Python" />
            <Stat label="Location" value="Huesca, Spain" />
          </div>
        </div>
      </div>

      <div className="flex-1 flex justify-center relative">
        <AnimatedIllustration />
      </div>
    </section>
  );
}
