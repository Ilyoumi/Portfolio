import React, { useEffect, useRef, useState } from "react";

export default function App() {

   const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Show for 2s
    return () => clearTimeout(timer);
  }, []);
  // Scroll fade-in animation for sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in-section").forEach(el => {
      observer.observe(el);
    });
  }, []);

  return (
  <div className="min-h-screen bg-[#FFF8FB] text-slate-800 antialiased">
    {loading ? (
      <Loader />
    ) : (
      <>
        <Navbar />
        <main className="max-w-6xl mx-auto px-6 md:px-8">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </>
    )}
   </div>
  )
}

function Loader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-gradient-to-br from-[#FFEAF2] via-[#FFF8FB] to-[#EAF8FF]">
      {/* SVG Logo Draw Animation */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="w-20 h-20 mb-4 animate-logoDraw"
      >
        <path
          d="M50 15 A35 35 0 1 0 85 50 H60 A15 15 0 1 1 45 35"
          fill="none"
          stroke="#DB2777"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="300"
          strokeDashoffset="300"
          className="animate-draw"
        />
        <path
          d="M40 25 V75 M40 50 L70 25 M40 50 L70 75"
          fill="none"
          stroke="#DB2777"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="300"
          strokeDashoffset="300"
          className="animate-draw delay-[0.3s]"
        />
      </svg>

      {/* Name Fade In */}
      <h1 className="text-2xl font-bold text-[#DB2777] opacity-0 animate-fadeIn delay-[1.3s]">
        Ghizlane Khabir
      </h1>

      <style>{`
        @keyframes draw {
          to { stroke-dashoffset: 0; }
        }
        @keyframes fadeIn {
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeOutScreen {
          to { opacity: 0; visibility: hidden; }
        }
        .animate-draw {
          animation: draw 1s ease forwards;
        }
        .animate-fadeIn {
          transform: scale(0.95);
          animation: fadeIn 0.6s ease forwards;
        }
        .animate-logoDraw {
          animation: fadeOutScreen 0.5s ease forwards;
          animation-delay: 2.2s;
        }
      `}</style>
    </div>
  );
}



function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="py-4">
      <nav className="flex items-center justify-between max-w-6xl mx-auto">
         <div className="flex items-center gap-3">
  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#FFDCE6] to-[#FFEFEF] flex items-center justify-center shadow">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="w-6 h-6"
    >
      {/* Creative G */}
      <path
        d="M50 15
           A35 35 0 1 0 85 50
           H60
           A15 15 0 1 1 45 35"
        fill="none"
        stroke="#DB2777"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Creative K */}
      <path
        d="M40 25
           V75
           M40 50
           L70 25
           M40 50
           L70 75"
        fill="none"
        stroke="#DB2777"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
  <span className="font-semibold">Ghizlane Khabir</span>
         </div>



        <div className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <a href="#about" className="hover:text-pink-500">About</a>
          <a href="#projects" className="hover:text-pink-500">Projects</a>
          <a href="#contact" className="hover:text-pink-500">Contact</a>
        </div>

        <div className="md:hidden">
          {/* Interactive hamburger */}
          <button
            aria-label="menu"
            className="p-2 rounded-md bg-white shadow"
            onClick={() => setOpen(!open)}
          >
            <div className={`hamburger ${open ? "open" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-white shadow-lg rounded-md mt-2 max-w-xs mx-auto p-4 space-y-4 text-center text-pink-600 font-semibold">
          <a href="#about" onClick={() => setOpen(false)} className="block hover:text-pink-500">About</a>
          <a href="#projects" onClick={() => setOpen(false)} className="block hover:text-pink-500">Projects</a>
          <a href="#contact" onClick={() => setOpen(false)} className="block hover:text-pink-500">Contact</a>
        </nav>
      )}
    </header>
  );
}

function Hero() {
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
            <Stat label="Experience" value="4+ yrs" />
            <Stat label="Languages" value="JS, TS, Python" />
            <Stat label="Location" value="Casablanca" />
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

function Stat({ label, value }) {
  return (
    <div className="bg-white/60 backdrop-blur rounded-xl px-4 py-3 shadow flex flex-col items-start">
      <div className="text-xs text-slate-500">{label}</div>
      <div className="font-semibold text-lg">{value}</div>
    </div>
  );
}

function AnimatedIllustration() {
  return (
    <div className="w-[360px] h-[420px] relative flex items-center justify-center">
      {/* soft background blobs */}
      <svg viewBox="0 0 500 500" className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopColor="#FFEAF2" />
            <stop offset="100%" stopColor="#FFF1F8" />
          </linearGradient>
          <linearGradient id="g2" x1="0" x2="1">
            <stop offset="0%" stopColor="#EAF8FF" />
            <stop offset="100%" stopColor="#FFF8F0" />
          </linearGradient>
        </defs>

        <g transform="translate(50,30)">
          <ellipse
            cx="60"
            cy="60"
            rx="90"
            ry="70"
            fill="url(#g1)"
          >
            <animate attributeName="cx" dur="6s" values="60;80;60" repeatCount="indefinite" />
            <animate attributeName="cy" dur="8s" values="60;90;60" repeatCount="indefinite" />
          </ellipse>

          <ellipse
            cx="360"
            cy="120"
            rx="120"
            ry="90"
            fill="url(#g2)"
          >
            <animate attributeName="cx" dur="7s" values="360;340;360" repeatCount="indefinite" />
            <animate attributeName="cy" dur="9s" values="120;150;120" repeatCount="indefinite" />
          </ellipse>

          <ellipse
            cx="220"
            cy="340"
            rx="140"
            ry="100"
            fill="#F7E6FF"
            opacity="0.9"
          >
            <animate attributeName="cx" dur="8s" values="220;240;220" repeatCount="indefinite" />
            <animate attributeName="cy" dur="6s" values="340;320;340" repeatCount="indefinite" />
          </ellipse>
        </g>
      </svg>

      {/* stylized 'developer girl' card */}
      <div className="relative z-10 w-[320px] bg-white rounded-3xl shadow-2xl p-6">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FFDCE6] to-[#FFEFEF] flex items-center justify-center shadow-md">
            {/* simple avatar with animated hair */}
            <div className="relative w-12 h-12 rounded-full bg-[#FFF5F8] flex items-center justify-center overflow-visible">
              <svg viewBox="0 0 80 80" className="w-12 h-12">
                <defs>
                  <clipPath id="faceClip">
                    <circle cx="40" cy="36" r="18" />
                  </clipPath>
                </defs>
                {/* hair */}
                <g clipPath="url(#faceClip)">
                  <ellipse cx="40" cy="28" rx="28" ry="18" fill="#FFC7DA">
                    <animate attributeName="cx" dur="4s" values="40;42;40" repeatCount="indefinite" />
                  </ellipse>
                </g>
                {/* face */}
                <circle cx="40" cy="36" r="18" fill="#FFF1F4" stroke="#FFD6E6" strokeWidth="1" />
                {/* eyes */}
                <circle cx="34" cy="36" r="2" fill="#3b3a3c" />
                <circle cx="46" cy="36" r="2" fill="#3b3a3c" />
                {/* smile */}
                <path d="M33 44 q7 6 14 0" stroke="#3b3a3c" strokeWidth="1.6" fill="none" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          <div>
            <div className="font-semibold text-lg">Ghizlane K.</div>
            <div className="text-sm text-slate-500">Full‑Stack Developer</div>
          </div>
        </div>

        <div className="mt-4 text-sm text-slate-600">
          <p>React • Node.js • TypeScript • Tailwind</p>
        </div>

        <div className="mt-4 flex gap-3">
          <a className="text-xs px-3 py-2 rounded-full bg-[#FFF0F6] border border-[#FAD9E6] hover:bg-[#FAD9E6] transition">
            Hire me
          </a>
          <a className="text-xs px-3 py-2 rounded-full bg-[#F0FDFF] border border-[#D6F1FF] hover:bg-[#D6F1FF] transition">
            Download CV
          </a>
        </div>
      </div>

      {/* floating code window */}
      <div className="absolute -right-6 -bottom-6 w-40 h-28 bg-[#FFF] rounded-2xl shadow-lg p-3 transform animate-float">
        <div className="h-2 bg-[#FFEAF2] rounded mb-2" style={{ width: "70%" }}></div>
        <div className="h-2 bg-[#EAF8FF] rounded mb-2" style={{ width: "50%" }}></div>
        <div className="h-2 bg-[#F7E6FF] rounded" style={{ width: "40%" }}></div>
      </div>
    </div>
  );
}

function About() {
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
          <div className="font-semibold text-lg mt-2">Working at a startup</div>
          <div className="text-sm text-slate-600 mt-4">
            Building product features, improving performance, and mentoring junior
            devs.
          </div>

          <div className="mt-4 flex gap-3">
            <a className="px-3 py-2 rounded-md bg-[#FFF0F6] text-sm hover:bg-[#FAD9E6] transition">Open to work</a>
            <a className="px-3 py-2 rounded-md bg-[#F0FDFF] text-sm hover:bg-[#D6F1FF] transition">Let's chat</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const items = [
    {
      title: "Portfolio Redesign",
      desc: "A pixel-perfect portfolio built with React & Tailwind. Focused on animations and accessibility.",
      tech: "React • Tailwind • Vite",
      link: "#",
    },
    {
      title: "E‑commerce Admin",
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
            className="bg-white rounded-2xl p-5 shadow-lg hover:scale-[1.02] transition transform origin-bottom"
          >
            <div className="text-sm text-slate-500">{p.tech}</div>
            <h3 className="font-semibold text-lg my-2">{p.title}</h3>
            <p className="text-sm text-slate-600 mb-4">{p.desc}</p>
            <div className="flex justify-between items-center">
              <a href={p.link} className="text-pink-500 text-sm font-medium hover:underline">
                View
              </a>
              <div className="text-xs text-slate-400">Mar 2025</div>
                       </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="fade-in-section py-16">
      <div className="grid md:grid-cols-3 gap-10 items-center">
        
        {/* Contact Form - 2/3 */}
        <div className="md:col-span-2 bg-gradient-to-br from-[#FFF8FB] to-[#FFF0F6] rounded-3xl shadow-xl p-10">
          <h2 className="text-3xl font-bold mb-3 text-[#2b2730]">Let’s work together</h2>
          <p className="text-slate-600 mb-8 text-lg">
            Whether you have a project idea or just want to say hi — I’d love to hear from you.
          </p>

          <form className="space-y-5">
            <input
              className="w-full border border-transparent rounded-xl px-5 py-4 bg-white/70 backdrop-blur-sm focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-300 transition text-lg"
              placeholder="Your name"
              type="text"
            />
            <input
              className="w-full border border-transparent rounded-xl px-5 py-4 bg-white/70 backdrop-blur-sm focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-300 transition text-lg"
              placeholder="Email"
              type="email"
            />
            <textarea
              className="w-full border border-transparent rounded-xl px-5 py-4 bg-white/70 backdrop-blur-sm h-40 resize-none focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-300 transition text-lg"
              placeholder="Message"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#FF6FA1] text-white px-6 py-4 rounded-xl font-semibold hover:bg-pink-600 shadow-lg hover:shadow-pink-300/50 transition text-lg"
            >
              Send message
            </button>
          </form>

          <div className="mt-8 text-sm text-slate-500">
            Or reach me directly at{" "}
            <a href="mailto:ghizlane@example.com" className="text-pink-500 hover:underline">
              ghizlane@example.com
            </a>
          </div>
        </div>

        {/* Illustration - 1/3 */}
        <div className="relative flex justify-center items-center">
          <svg
            viewBox="0 0 500 500"
            className="absolute inset-0 w-full h-full"
          >
            <defs>
              <linearGradient id="contactGradient" x1="0" x2="1">
                <stop offset="0%" stopColor="#FFEAF2" />
                <stop offset="100%" stopColor="#EAF8FF" />
              </linearGradient>
            </defs>
            <circle cx="250" cy="250" r="200" fill="url(#contactGradient)" opacity="0.3" />
          </svg>

          <div className="bg-white rounded-3xl shadow-2xl p-6 relative z-10 w-64">
            <div className="h-3 bg-[#FFEAF2] rounded mb-3 w-2/3"></div>
            <div className="h-3 bg-[#EAF8FF] rounded mb-3 w-1/2"></div>
            <div className="h-3 bg-[#F7E6FF] rounded mb-3 w-1/3"></div>
            <div className="mt-6 text-xs text-slate-500">Example Code Snippet</div>
            <pre className="bg-slate-900 text-pink-200 p-4 rounded-lg mt-2 text-xs overflow-x-auto">
              {`const sayHello = () => {
  console.log("Let's work together!");
};`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}



function Footer() {
  return (
    <footer className="py-8">
      <div className="max-w-6xl mx-auto text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Ghizlane Khabir — Built with ❤️ using React & Tailwind
      </div>
    </footer>
  );
}