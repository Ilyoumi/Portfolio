import React from "react";

const About = () => {
  return (
    <section id="about" className="fade-in-section py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold mb-4">About</h2>
          <p className="text-slate-600 mb-4">
            I’m Ghizlane — a Full‑Stack Developer who loves turning ideas into
            delightful, accessible web experiences. I enjoy collaborating with
            designers and product teams to ship features fast while keeping code
            clean and maintainable.
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
            Available for new opportunities
          </div>
          <div className="text-sm text-slate-600 mt-4">
            Actively seeking exciting roles where I can contribute my skills,
            help build amazing products, and grow alongside a talented team.
          </div>

          <div className="mt-4 flex gap-3">
            <span className="px-3 py-2 rounded-md bg-[#FFF0F6] text-sm">
  Open to work
</span>

            <a
              href="mailto:ghi.khabir@gmail.com"
              className="px-3 py-2 rounded-md bg-[#F0FDFF] text-sm hover:bg-[#D6F1FF] transition"
            >
              Let's chat
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
