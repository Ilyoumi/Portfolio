import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="fade-in-section py-16">
      <div className="grid md:grid-cols-3 gap-10 items-center">
        {/* Contact Form - 2/3 */}
        <div className="md:col-span-2 bg-gradient-to-br from-[#FFF8FB] to-[#FFF0F6] rounded-3xl shadow-xl p-10">
          <h2 className="text-3xl font-bold mb-3 text-[#2b2730]">
            Let’s work together
          </h2>
          <p className="text-slate-600 mb-8 text-lg">
            Whether you have a project idea or just want to say hi — I’d love to
            hear from you.
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
            <a
              href="mailto:ghi.khabir@gmail.com"
              className="text-pink-500 hover:underline"
            >
              ghi.khabir@gmail.com
            </a>
          </div>
        </div>

        {/* Illustration - 1/3 */}
        <div className="relative flex justify-center items-center">
          <svg viewBox="0 0 500 500" className="absolute inset-0 w-full h-full">
            <defs>
              <linearGradient id="contactGradient" x1="0" x2="1">
                <stop offset="0%" stopColor="#FFEAF2" />
                <stop offset="100%" stopColor="#EAF8FF" />
              </linearGradient>
            </defs>
            <circle
              cx="250"
              cy="250"
              r="200"
              fill="url(#contactGradient)"
              opacity="0.3"
            />
          </svg>

          <div className="bg-white rounded-3xl shadow-2xl p-6 relative z-10 w-90">
            <div className="h-3 bg-[#FFEAF2] rounded mb-3 w-2/3"></div>
            <div className="h-3 bg-[#EAF8FF] rounded mb-3 w-1/2"></div>
            <div className="h-3 bg-[#F7E6FF] rounded mb-3 w-1/3"></div>
            <div className="mt-6 text-xs text-slate-500">
              Small script to say hello 👋
            </div>

            <pre className="bg-slate-900 text-pink-200 p-4 rounded-lg mt-2 text-xs overflow-x-auto">
              {`const contactMe = () => {
  console.log("Let's work together!");
};`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
