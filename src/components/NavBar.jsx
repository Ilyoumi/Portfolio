import React, { useState } from "react";

export default function Navbar() {
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
          <a href="#about" className="hover:text-pink-500">
            About
          </a>
          <a href="#projects" className="hover:text-pink-500">
            Projects
          </a>
          <a href="#contact" className="hover:text-pink-500">
            Contact
          </a>
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
          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="block hover:text-pink-500"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={() => setOpen(false)}
            className="block hover:text-pink-500"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block hover:text-pink-500"
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}
