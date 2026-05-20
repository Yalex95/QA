import "../styles/expertise.css";
import ExpertiseCertBadge from "./ExpertiseCertBadge";
import ExpertiseContent from "./ExpertiseContent";
import ExpertiseImage from "./ExpertiseImage";
export default function Expertise() {
  const certifications = [
    "ISO 9001: Quality Management",
    "ISO 14001: Environmental",
    "ISO 45001: Ocupational Healt",
    "ISO 13485: Medical devices",
  ];
  return (
    <section id="expertise" className="expertise">
      <div className="expertise__container">
        <ExpertiseImage />
        <ExpertiseContent certifications={certifications} />
        <div className="expertise__iso_certs_container ">
          {certifications.map((cert, index) => (
            <ExpertiseCertBadge key={index} certification={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
