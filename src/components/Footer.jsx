import React from 'react'

const Footer = () => {
  return (
    <footer className="py-8">
      <div className="max-w-6xl mx-auto text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Ghizlane Khabir — Built with ❤️ using React & Tailwind
      </div>
    </footer>
  );
}

export default Footer