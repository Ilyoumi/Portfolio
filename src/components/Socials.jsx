import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Socials() {
  const socials = [
    {
      icon: <FaLinkedin size={24} />,
      url: "https://www.linkedin.com/in/ghizlane-khabir-1b9916200/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
    {
      icon: <FaGithub size={24} />,
      url: "https://github.com/ilyoumi",
    },
    {
      icon: <FaInstagram size={24} />,
      url: "https://instagram.com/ghizlane._k",
    },
    {
      icon: <FaEnvelope size={24} />,
      url: "mailto:ghi.khabir@gmail.com",
    },
  ];

  return (
    <div className="fixed top-1/2 -translate-y-1/2 left-6 flex flex-col gap-6 z-50">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-600 hover:text-pink-500 transition-colors"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}
