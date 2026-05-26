import { certification_section, type certProps } from "@/data/cv";
import { useTranslation } from "react-i18next";
import "../styles/certifications.css";
import CertificationsCard from "./CertificationsCard";
export default function Certifications() {
  const { t } = useTranslation();

  return (
    <section id="certifications" className="certifications">
      <header>
        <h2 className="certifications__title">
          {t(certification_section.title)}
        </h2>
        <p className="certifications__desc">
          {t(certification_section.paragraph)}
        </p>
      </header>
      <div className="cert_cards__grid">
        {certification_section.certifications.map((cert: certProps) => (
          <CertificationsCard key={cert.id} {...cert} />
        ))}
      </div>
    </section>
  );
}
