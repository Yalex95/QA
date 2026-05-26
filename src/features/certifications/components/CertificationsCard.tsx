import type { certProps } from "@/data/cv";
import Button from "@/features/shared/components/Button";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

export default function CertificationsCard({
  type,
  name,
  issuing_org,
  year,
  id,
  link,
  icon,
}: certProps) {
  const { t } = useTranslation();

  return (
    <article className="cert-card">
      <header className="cert-card__header">
        <div className="cert-card__icon">
          <Icon icon={icon} className="w-8 h-8" />
        </div>

        <span className="cert-card__badge">{t(type)}</span>
      </header>

      <section className="cert-card__content">
        <h3 className="cert-card__title">{t(name)}</h3>

        <div className="cert-card__meta">
          <div className="cert-card__item">
            <span className="cert-card__label">
              {t("certifications_section.issuing_org")}
            </span>
            <span className="cert-card__value">{t(issuing_org)}</span>
          </div>

          <div className="cert-card__item">
            <span className="cert-card__label">
              {t("certifications_section.year")}
            </span>
            <span className="cert-card__value">{year}</span>
          </div>

          <div className="cert-card__item">
            <span className="cert-card__label">
              {t("certifications_section.credential_id")}
            </span>
            <span className="cert-card__value">{id}</span>
          </div>
        </div>
      </section>

      <footer className="cert-card__actions">
        <Button variant="secondary" href={link}>
          {t("certifications_section.view_cert")}
        </Button>
        <Button variant="primary" href={link}>
          {t("certifications_section.download")}
          <Icon icon="material-symbols:download-2-rounded" className="ml-3" />
        </Button>
      </footer>
    </article>
  );
}
