import React from "react";

const Projects = () => {
  const items = [
    {
      title: "Portfolio Redesign",
      desc: "A pixel-perfect portfolio built with React & Tailwind. Focused on animations and accessibility.",
      tech: "React • Tailwind • Vite",
      link: "#",
    },
    {
      title: "E-commerce Admin",
      desc: "Admin dashboard for managing products, orders, and users. Real-time charts and CSV export.",
      tech: "React • Node • PostgreSQL",
      link: "#",
    },
    {
      title: "Realtime Chat App",
      desc: "Websocket-based chat with rooms, typing indicators and media sharing.",
      tech: "Socket.io • Node • React",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="fade-in-section py-16">
      <h2 className="text-3xl font-bold mb-6">Selected Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((p, i) => (
          <article
            key={i}
            className="bg-white rounded-2xl p-5 shadow-lg hover:scale-[1.02] transition transform origin-bottom flex flex-col h-full"
          >
            <div className="text-sm text-slate-500">{p.tech}</div>
            <h3 className="font-semibold text-lg my-2">{p.title}</h3>
            <p className="text-sm text-slate-600 mb-4 flex-grow">{p.desc}</p>

            {/* Always pinned to bottom */}
            <div className="flex justify-between items-center mt-auto pt-4 border-t border-slate-100">
              <a
                href={p.link}
                className="text-pink-500 text-sm font-medium hover:underline"
              >
                View
              </a>
              <div className="text-xs text-slate-400">Mar 2025</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
