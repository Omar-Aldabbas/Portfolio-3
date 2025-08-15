import { useState, useEffect } from "react";
import { LinkIcon, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import "./style/Navbar.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "home", path: "/" },
    { name: "projects", path: "/projects" },
    { name: "about-me", path: "/about" },
    { name: "contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 760) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-left">
        <Link to="/">
          <LinkIcon size={28} className="logo-icon" />
          <span className="logo-text">itlumins</span>
        </Link>
      </div>

      <ul className="navbar-menu desktop">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link to={item.path}>
              <span className="hash">#</span>
              {item.name}
            </Link>
          </li>
        ))}
        <li>
          <ThemeToggle />
        </li>
      </ul>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </div>

      <ul className={`navbar-menu mobile ${isOpen ? "show" : ""}`}>
        {navItems.map((item, index) => (
          <li key={index}>
            <Link to={item.path} onClick={() => setIsOpen(false)}>
              <span className="hash">#</span>
              {item.name}
            </Link>
          </li>
        ))}
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
};
