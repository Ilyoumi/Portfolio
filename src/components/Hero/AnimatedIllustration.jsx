// src/components/Hero/AnimatedIllustration.jsx
import React from "react";

export default function AnimatedIllustration() {
  return (
    <div className="w-[360px] h-[420px] relative flex items-center justify-center overflow-visible">
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

        <g transform="translate(40,10)">
          <ellipse
            cx="40"
            cy="50"
            rx="100"
            ry="80"
            fill="url(#g1)"
          >
            <animate attributeName="cx" dur="6s" values="40;90;40" repeatCount="indefinite" />
            <animate attributeName="cy" dur="8s" values="50;110;50" repeatCount="indefinite" />
          </ellipse>

          <ellipse
            cx="380"
            cy="100"
            rx="140"
            ry="100"
            fill="url(#g2)"
          >
            <animate attributeName="cx" dur="7s" values="380;320;380" repeatCount="indefinite" />
            <animate attributeName="cy" dur="9s" values="100;170;100" repeatCount="indefinite" />
          </ellipse>

          <ellipse
            cx="250"
            cy="370"
            rx="160"
            ry="110"
            fill="#F7E6FF"
            opacity="0.9"
          >
            <animate attributeName="cx" dur="8s" values="250;300;250" repeatCount="indefinite" />
            <animate attributeName="cy" dur="6s" values="370;320;370" repeatCount="indefinite" />
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
                    <animate attributeName="cx" dur="4s" values="40;44;40" repeatCount="indefinite" />
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
            <div className="text-sm text-slate-500">Full-Stack Developer</div>
          </div>
        </div>

        <div className="mt-4 text-sm text-slate-600">
          <p>React • Node.js • TypeScript • Tailwind</p>
        </div>

        {/* Updated buttons with functionality */}
        <div className="mt-4 flex gap-3">
          {/* Hire me - opens email */}
          <a
            href="mailto:ghi.khabir@gmail.com"
            className="text-xs px-3 py-2 rounded-full bg-[#FFF0F6] border border-[#FAD9E6] hover:bg-[#FAD9E6] transition"
          >
            Hire me
          </a>

          {/* Download CV - direct file download */}
          <a
            href="/cv/Ghizlane_K_CV.pdf"
            download="Ghizlane_K_CV.pdf"
            className="text-xs px-3 py-2 rounded-full bg-[#F0FDFF] border border-[#D6F1FF] hover:bg-[#D6F1FF] transition"
          >
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
