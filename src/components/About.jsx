import React from "react";

const About = () => {
  return (
    <section id="about" className="fade-in-section py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold mb-4">About</h2>
          <p className="text-slate-600 mb-4">
            Hi, I’m Ghizlane — a developer-in-progress who’s mastered the
            ancient art of turning “just one quick fix” into a three-hour
            debugging session. I build things, break things, and occasionally
            create something that works on the first try (still not sure if
            that’s skill or witchcraft). All this usually happens fueled by way
            too much coffee.
            <br />
            <br />
            I’ve had arguments with my code editor… and lost. I don’t always
            understand my own commits, but that’s a problem for future-me. Most
            of my time is spent looking at error messages and wondering what I
            did wrong, and the rest of the time I’m genuinely surprised when
            things actually work. Every time I solve a bug, I feel like I
            deserve an award — or at least a nap.
          </p>

          <ul className="grid grid-cols-2 gap-2 text-sm text-slate-700">
            <li>• React, Next.js, Vite</li>
            <li>• Node.js, Express, NestJS</li>
            <li>• TypeScript, JavaScript</li>
            <li>• PostgreSQL, MongoDB</li>
            <li>• Tailwind CSS, CSS-in-JS</li>
            <li>• Testing (Jest, RTL)</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow">
          <div className="text-sm text-slate-500">Currently</div>
          <div className="font-semibold text-lg mt-2">
            Looking for new adventures (and bugs to fix).
          </div>
          <div className="text-sm text-slate-600 mt-4">
            Ready to put my skills to work, build cool stuff, and maybe even
            teach my code editor who’s boss.
          </div>

          <div className="mt-4 flex gap-3">
            <span className="px-3 py-2 rounded-md bg-[#FFF0F6] text-sm">
              Open to work
            </span>

            <a
              href="mailto:ghi.khabir@gmail.com"
              className="px-3 py-2 rounded-md bg-[#F0FDFF] text-sm hover:bg-[#D6F1FF] transition"
            >
              Let’s talk code, coffee, or both
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
