import Button from "@/features/shared/components/Button";
import { Icon } from "@iconify/react";

export type certProps = {
  type: string;
  name: string;
  issuing_org: string;
  year: string;
  id: string;
  link: string;
  icon: string;
};
export default function CertificationsCard({
  type,
  name,
  issuing_org,
  year,
  id,
  link,
  icon,
}: certProps) {
  return (
    <article className="cert-card">
      <header className="cert-card__header">
        <div className="cert-card__icon">
          <Icon icon={icon} className="w-8 h-8" />
        </div>

        <span className="cert-card__badge">{type}</span>
      </header>

      <section className="cert-card__content">
        <h3 className="cert-card__title">{name}</h3>

        <div className="cert-card__meta">
          <div className="cert-card__item">
            <span className="cert-card__label">Issuing Org:</span>
            <span className="cert-card__value">{issuing_org}</span>
          </div>

          <div className="cert-card__item">
            <span className="cert-card__label">Year:</span>
            <span className="cert-card__value">{year}</span>
          </div>

          <div className="cert-card__item">
            <span className="cert-card__label">Credential ID:</span>
            <span className="cert-card__value">{id}</span>
          </div>
        </div>
      </section>

      <footer className="cert-card__actions">
        <Button variant="secondary" href={link}>
          View Certificate
        </Button>
        <Button variant="primary" href={link}>
          Download
          <Icon icon="material-symbols:download-2-rounded" className="ml-3" />
        </Button>
      </footer>
    </article>
  );
}
