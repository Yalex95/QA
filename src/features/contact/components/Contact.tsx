import { contactSeccion } from "@/data/cv";
import Button from "@/features/shared/components/Button";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import "../styles/contact.css";
export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <article className="contact__content">
          <header className="contact__header">
            <h2 className="contact__title">{t(contactSeccion.title)}</h2>

            <p className="contact__description">
              {t(contactSeccion.paragraph)}
            </p>
          </header>

          <address className="contact__info">
            <ul className="contact__list">
              <li className="contact__item">
                <span className="contact__icon">
                  <Icon icon="material-symbols:mail" />
                </span>

                <a href="mailto:specialist@industry-portfolio.com">
                  {contactSeccion.mail}
                </a>
              </li>

              <li className="contact__item">
                <span className="contact__icon">
                  <Icon icon="material-symbols-light:location-on" />
                </span>

                <span>{contactSeccion.location}</span>
              </li>
            </ul>
          </address>

          <footer className="contact__actions">
            <Button variant="primary" href={contactSeccion.cv_link}>
              {t("contact.download_cv")}
              <Icon
                icon="material-symbols:download-2-rounded"
                className="ml-3 w-6 h-6"
              />
            </Button>
            <Button variant="secondary" href={contactSeccion.linkedIn}>
              {t("contact.linkedIn")}
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
              {t(contactSeccion.support_title)}
            </h3>

            <p className="contact-support-card__description">
              {t(contactSeccion.support_p)}
            </p>
          </div>

          <div className="contact-support-card__actions">
            <a
              href={contactSeccion.wa}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-support-card__button"
            >
              <Icon icon="mdi:whatsapp" className="w-8 h-8" />
              {t("contact.contact_wa")}
            </a>

            <small className="contact-support-card__note">
              {t(contactSeccion.disclaimer)}
            </small>
          </div>
        </aside>
      </div>
    </section>
  );
}
