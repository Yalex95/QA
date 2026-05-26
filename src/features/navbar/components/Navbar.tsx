import Button from "@/features/shared/components/Button";
import i18n from "@/i18n";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Logo from "../../footer/assets/qa.webp";
import "../styles/navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng); // Guardar preferencia
  };

  const currentLanguage = i18n.language;
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
              <a href="#about">{t("nav.about")}</a>
            </li>

            <li>
              <a href="#expertise">{t("nav.expertise")}</a>
            </li>

            <li>
              <a href="#projects">{t("nav.projects")}</a>
            </li>

            <li>
              <a href="#contact">{t("nav.certifications")}</a>
            </li>
            <li>
              <Button variant="primary">{t("nav.download_cv")}</Button>
            </li>
            {/* Language Toggle */}
            <li className="language-toggle">
              <button
                onClick={() => changeLanguage("en")}
                className={`lang-btn ${currentLanguage === "en" ? "active" : ""}`}
                aria-label="English"
              >
                🇺🇸 EN
              </button>
              <span className="lang-separator">|</span>
              <button
                onClick={() => changeLanguage("es")}
                className={`lang-btn ${currentLanguage === "es" ? "active" : ""}`}
                aria-label="Español"
              >
                🇪🇸 ES
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
