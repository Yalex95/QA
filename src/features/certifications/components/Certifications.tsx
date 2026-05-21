import "../styles/certifications.css";
import CertificationsCard from "./CertificationsCard";
export default function Certifications() {
  const CERTIFICATIONS: certProps[] = [
    {
      type: "ISO",
      name: "ISO 9001:2015 Lead Auditor",
      issuing_org: "IRCA",
      year: "2022",
      id: "QA-9001-8841-X",
      link: "/certificates/iso-9001-lead-auditor.pdf",
      icon: "iconamoon:certificate-badge",
    },
    {
      type: "OSHA",
      name: "OSHA 30-Hour Outreach",
      issuing_org: "IRCA",
      year: "2022",
      id: "QA-9001-8842-X",
      link: "/certificates/osha-30-hour.pdf",
      icon: "tdesign:secured",
    },
    {
      type: "Safety",
      name: "ISO 45001 Internal Auditor",
      issuing_org: "IRCA",
      year: "2022",
      id: "QA-9001-8843-X",
      link: "/certificates/iso-45001-internal-auditor.pdf",
      icon: "material-symbols:ecg-heart-outline",
    },
  ];
  return (
    <section className="certifications">
      <header>
        <h2 className="certifications__title">Certifications & Credentials</h2>
        <p className="certifications__desc">
          Verified professional standards and international industry
          qualifications.
        </p>
      </header>
      <div className="cert_cards__grid">
        {CERTIFICATIONS.map((cert) => (
        <CertificationsCard key={cert.id} {...cert} />
      ))}
      </div>
    </section>
  );
}
