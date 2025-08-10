import React from "react";

export default function Stat({ label, value }) {
  return (
    <div className="bg-white/60 backdrop-blur rounded-xl px-4 py-3 shadow flex flex-col items-start">
      <div className="text-xs text-slate-500">{label}</div>
      <div className="font-semibold text-lg">{value}</div>
    </div>
  );
}
