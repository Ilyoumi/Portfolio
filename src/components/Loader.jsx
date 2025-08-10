import React from "react";

export default function Loader() {
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
