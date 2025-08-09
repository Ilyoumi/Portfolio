import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaGithub, FaMoon, FaSun } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (localStorage.theme === 'light') {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
  };

  const icons = [
    { icon: <FaHtml5 size={40} className="text-orange-500" />, delay: 0 },
    { icon: <FaCss3Alt size={40} className="text-blue-500" />, delay: 0.2 },
    { icon: <FaJsSquare size={40} className="text-yellow-400" />, delay: 0.4 },
    { icon: <FaReact size={40} className="text-sky-400" />, delay: 0.6 },
    { icon: <SiTailwindcss size={40} className="text-teal-400" />, delay: 0.8 },
    { icon: <FaNodeJs size={40} className="text-green-500" />, delay: 1.0 },
    { icon: <SiMongodb size={40} className="text-green-400" />, delay: 1.2 },
    { icon: <FaGithub size={40} className="text-gray-200 dark:text-white" />, delay: 1.4 },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-500 flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-purple-100/80 dark:bg-gray-800/80 backdrop-blur-md z-50 py-4 px-8 flex justify-between items-center shadow-lg">
        <h1 className="text-xl font-bold text-purple-600 dark:text-pink-400">Jane Doe</h1>
        <ul className="hidden md:flex gap-6 text-gray-700 dark:text-gray-300">
          {['About', 'Skills', 'Projects', 'Testimonials', 'Contact'].map((item, idx) => (
            <li key={idx} className="hover:text-purple-600 dark:hover:text-pink-400 transition-colors">
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>
        <button
          onClick={toggleTheme}
          className="ml-6 p-2 rounded-full bg-purple-200 dark:bg-gray-700 hover:scale-110 transition"
        >
          {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800" />}
        </button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center relative pt-20">
        <motion.div
          className="w-64 h-64 rounded-full p-4 bg-gradient-to-tr from-purple-400 via-pink-300 to-yellow-200 dark:from-purple-600 dark:via-pink-500 dark:to-yellow-400 shadow-2xl border-4 border-white dark:border-gray-900 relative z-10"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ overflow: 'hidden' }}
        >
          <img
            src="/programmer-girl.png"
            alt="Programmer Girl Illustration"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {icons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{ delay: item.delay, duration: 2, repeat: Infinity }}
            style={{
              top: `${50 + 35 * Math.sin(index * (Math.PI / 4))}%`,
              left: `${50 + 35 * Math.cos(index * (Math.PI / 4))}%`,
              transform: 'translate(-50%, -50%)'
            }}
          >
            {item.icon}
          </motion.div>
        ))}

        <motion.h1
          className="text-4xl font-bold mt-6 text-purple-600 dark:text-pink-400"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          Hi, I'm Ghizlane Khabir
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-400 mt-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          Web Developer | UI/UX Enthusiast
        </motion.p>
      </section>

      {/* About Me Section */}
      <section className="max-w-4xl my-20 px-4 mx-auto" id="about">
        <h2 className="text-3xl font-semibold mb-6 text-purple-600 dark:text-pink-400">About Me</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          I'm a passionate web developer specializing in creating beautiful and functional websites.
          With expertise in modern frameworks and a keen eye for design, I strive to build
          applications that offer seamless user experiences.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Outside of coding, I love contributing to open-source projects, writing technical blogs,
          and mentoring aspiring developers. My goal is to continually improve my skills and stay at
          the forefront of technology trends.
        </p>
      </section>

      {/* Skills Section */}
      <section className="max-w-4xl my-20 px-4 mx-auto" id="skills">
        <h2 className="text-3xl font-semibold mb-6 text-purple-600 dark:text-pink-400">Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Git/GitHub'].map(
            (skill, idx) => (
              <motion.li
                key={idx}
                className="bg-purple-100 dark:bg-gray-800 p-4 rounded-xl hover:bg-purple-200 dark:hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                {skill}
              </motion.li>
            )
          )}
        </ul>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl my-20 px-4 mx-auto" id="projects">
        <h2 className="text-3xl font-semibold mb-6 text-purple-600 dark:text-pink-400">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((proj) => (
            <motion.div
              key={proj}
              className="rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-purple-100 to-pink-100 dark:from-gray-800 dark:to-gray-900 border border-purple-200 dark:border-pink-400 hover:border-purple-400 dark:hover:border-pink-300 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <div className="h-40 bg-purple-200 dark:bg-gray-700 flex items-center justify-center text-2xl font-bold text-purple-600 dark:text-pink-400">
                Project {proj} Image
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-purple-600 dark:text-pink-400">
                  Creative Project {proj}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  An innovative project leveraging modern web technologies to deliver outstanding
                  performance and design.
                </p>
                <a href="#" className="text-purple-600 dark:text-pink-400 hover:underline">
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-4xl my-20 px-4 mx-auto" id="testimonials">
        <h2 className="text-3xl font-semibold mb-6 text-purple-600 dark:text-pink-400">Testimonials</h2>
        <div className="space-y-6">
          {[1, 2, 3].map((t) => (
            <motion.div
              key={t}
              className="bg-purple-100 dark:bg-gray-800 p-6 rounded-xl shadow-md"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-gray-800 dark:text-gray-300 italic">
                “Jane is a highly skilled developer with an incredible eye for design. Her attention
                to detail and dedication to quality make her a valuable asset to any team.”
              </p>
              <p className="text-gray-600 dark:text-gray-500 mt-2">- Client {t}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="relative w-full py-20 bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
        id="contact"
      >
        <div className="absolute inset-0 bg-[url('/contact-pattern.svg')] opacity-10 animate-pulse"></div>
        <h2 className="text-3xl font-semibold mb-6 text-center z-10 relative text-purple-600 dark:text-pink-400">
          Let's Build Something Amazing
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center z-10 relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Rather than just filling a form, tell me about your dream project and let's brainstorm
              together in real time!
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>💬 Live chat availability</li>
              <li>🎨 Free initial UI/UX sketch</li>
              <li>⚡ Fast response time</li>
            </ul>
          </motion.div>
          <motion.form
            className="bg-purple-100 dark:bg-gray-800 p-6 rounded-2xl shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <input
              type="text"
              placeholder="Name"
              className="p-3 rounded-lg bg-white dark:bg-gray-900 border border-purple-200 dark:border-gray-700 mb-4 w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 rounded-lg bg-white dark:bg-gray-900 border border-purple-200 dark:border-gray-700 mb-4 w-full"
            />
            <textarea
              placeholder="Describe your vision"
              rows="4"
              className="p-3 rounded-lg bg-white dark:bg-gray-900 border border-purple-200 dark:border-gray-700 mb-4 w-full"
            />
            <motion.button
              type="submit"
              className="bg-purple-600 dark:bg-pink-400 text-white dark:text-gray-900 font-semibold py-2 px-4 rounded-lg hover:bg-purple-500 dark:hover:bg-pink-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Idea
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-gray-600 dark:text-gray-500 text-sm mt-20 mb-4 text-center">
        © {new Date().getFullYear()} Jane Doe. All rights reserved.
      </footer>
    </div>
  );
}
