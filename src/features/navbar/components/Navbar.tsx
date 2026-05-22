import Button from "@/features/shared/components/Button";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Logo from "../../footer/assets/qa.webp";
import "../styles/navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container">
        <div className="logo-container">
          <img
            src={Logo}
            alt="QA Engineer logo"
            className="w-10 h-10 md:w-16 md:h-16 object-contain"
          />

          <span className="md:text-lg font-bold">QA Specialist</span>
        </div>

        {/* Toggle button */}
        <button
          className="menu-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Icon
            icon="ci:hamburger"
            className="w-6 h-6 text-[var(--color-primary)]"
          />
        </button>

        {/* Navigation */}
        <nav
          id="primary-navigation"
          className={`main-nav ${isOpen ? "active" : ""}`}
          aria-label="Main navigation"
        >
          <ul className="nav-list">
            <li>
              <a href="#home">About</a>
            </li>

            <li>
              <a href="#about">Expertise</a>
            </li>

            <li>
              <a href="#projects">Projects</a>
            </li>

            <li>
              <a href="#contact">Certifications</a>
            </li>
            <li>
              <Button variant="primary">Download CV</Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
