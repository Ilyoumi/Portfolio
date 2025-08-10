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
            Hi, I’m <span className="text-[#FF6FA1]">Ghizlane Khabir</span>
            <span className="block text-lg font-medium text-[#5b5561] mt-2">
              I build delightful, accessible web apps with React & Node.js
            </span>
          </h1>

          <p className="text-slate-600 my-6">
            I craft pixel‑perfect user interfaces and robust backends. My focus
            is on clean code, delightful UX, and maintainable systems — all
            wrapped in soft, pastel aesthetics.
          </p>

          <div className="flex gap-4 items-center">
            <a
              href="#projects"
              className="inline-flex items-center gap-3 bg-[#FFEAF2] hover:bg-[#FFD9EA] px-5 py-3 rounded-xl font-semibold shadow transition-transform transform hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a href="#contact" className="text-sm text-slate-700 hover:text-pink-500">
              Contact me
            </a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 text-sm text-slate-700">
            <Stat label="Experience" value="2+ yrs" />
            <Stat label="Languages" value="JS, TS, Python" />
            <Stat label="Location" value="Huesca, Spain" />
          </div>
        </div>
      </div>

      <div className="flex-1 flex justify-center relative">
        {/* Pastel animated illustration (SVG + CSS animations) */}
        <AnimatedIllustration />
      </div>
    </section>
  );
}
