import { certification_section } from "@/data/cv";
import "../styles/certifications.css";
import CertificationsCard from "./CertificationsCard";
export default function Certifications() {
  return (
    <section className="certifications">
      <header>
        <h2 className="certifications__title">{certification_section.title}</h2>
        <p className="certifications__desc">
          {certification_section.paragraph}
        </p>
      </header>
      <div className="cert_cards__grid">
        {certification_section.certifications.map((cert) => (
          <CertificationsCard key={cert.id} {...cert} />
        ))}
      </div>
    </section>
  );
}
