import { useState, useEffect } from "react";
import { Moon, Zap } from "lucide-react"; 
import "./style/ThemeToggle.css"


export const ThemeToggle = () => {
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme !== null) return savedTheme === "true";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [darkMode, setDarkMode] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`theme-toggle-btn`}
      title="Toggle Dark / Light Mode"
    >
      {darkMode ? <Zap size={20} /> : <Moon size={20} />}
    </button>
  );
};
