
import { Facebook, Twitter, Linkedin, Instagram, MailIcon, Phone, LinkIcon } from "lucide-react";
import "./style/Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3 className="footer-logo"><span><LinkIcon size={28} className="logo-icon" /></span>itlumins</h3>
          <p>
            Full-stack developer passionate about creating modern, responsive web experiences.
            Always exploring new technologies to deliver clean and user-friendly solutions.
          </p>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>
            <MailIcon size={16} /> IamNotRealEmail@hello.io
          </p>
          <p>
            <Phone size={16} /> 077*******
          </p>
          <p>Amman, Jordan</p>
        </div>

        <div className="footer-social">
          <h4>Follow Me</h4>
          <div className="social-icons">
            <a href="#"><Facebook /></a>
            <a href="#"><Twitter /></a>
            <a href="#"><Linkedin /></a>
            <a href="#"><Instagram /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Omar Aldabbas. All rights reserved.</p>
      </div>
    </footer>
  );
};
