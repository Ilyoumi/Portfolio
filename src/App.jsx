import React, { useEffect, useRef, useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Socials from "./components/Socials";

export default function App() {

   const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("App component mounted!");
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
        <Socials />
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


