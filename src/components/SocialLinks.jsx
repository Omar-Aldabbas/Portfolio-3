import { Github, Linkedin, Twitter } from "lucide-react";
import "./style/SocialLinks.css";

export const SocialLinks = () => {
  const socials = [
    { name: "GitHub", url: "https://github.com/Omar-Aldabbas", icon: <Github size={24} /> },
    { name: "LinkedIn", url: "https://linkedin.com/in/omar-aldabbas-jo", icon: <Linkedin size={24} /> },
    { name: "Twitter", url: "#", icon: <Twitter size={24} /> },
  ];

  return (
    <div className="social-links">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          title={social.name}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};
