import Button from "@/features/shared/components/Button";
import { Icon } from "@iconify/react";
import "../styles/contact.css";
export default function Contact() {
  return (
    <section className="contact">
      <div className="contact__container">
        {/* <!-- Left Content --> */}
        <article className="contact__content">
          <header className="contact__header">
            <h2 className="contact__title">
              Let's Discuss Your Next Compliance Goal
            </h2>

            <p className="contact__description">
              Looking to enhance your safety protocols or implement a global
              quality system? Reach out for a consultation.
            </p>
          </header>

          <address className="contact__info">
            <ul className="contact__list">
              <li className="contact__item">
                <span className="contact__icon">
                  <Icon icon="material-symbols:mail" />
                </span>

                <a href="mailto:specialist@industry-portfolio.com">
                  specialist@industry-portfolio.com
                </a>
              </li>

              <li className="contact__item">
                <span className="contact__icon">
                  <Icon icon="material-symbols-light:location-on" />
                </span>

                <span>Tijuana BC, Mexico.</span>
              </li>
            </ul>
          </address>

          <footer className="contact__actions">
            <Button variant="primary" href="#">
              Download CV
              <Icon
                icon="material-symbols:download-2-rounded"
                className="ml-3 w-6 h-6"
              />
            </Button>
            <Button variant="secondary" href="#">
              LinkedIn Profile
              <Icon icon="mdi:linkedin" className="ml-3 w-6 h-6" />
            </Button>
          </footer>
        </article>

        {/* <!-- Right Card --> */}
        <aside className="contact-support-card">
          <div className="contact-support-card__icon">
            <Icon icon="mdi:whatsapp" className="text-[#25D366] w-12 h-12" />
          </div>

          <div className="contact-support-card__content">
            <h3 className="contact-support-card__title">
              Professional Instant Support
            </h3>

            <p className="contact-support-card__description">
              Get immediate responses regarding safety audits, quality system
              implementations, or general consultations.
            </p>
          </div>

          <div className="contact-support-card__actions">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-support-card__button"
            > 
            <Icon icon="mdi:whatsapp" className="w-8 h-8" />

              Contact me via WhatsApp
            </a>

            <small className="contact-support-card__note">
              Typically responds within 1 hour during business hours
            </small>
          </div>
        </aside>
      </div>
    </section>
  );
}
