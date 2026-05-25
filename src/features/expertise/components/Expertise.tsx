import { EXPERTISE } from "@/data/cv";
import "../styles/expertise.css";
import ExpertiseCertBadge from "./ExpertiseCertBadge";
import ExpertiseContent from "./ExpertiseContent";
import ExpertiseImage from "./ExpertiseImage";
export default function Expertise() {
  return (
    <section id="expertise" className="expertise">
      <div className="expertise__container">
        <ExpertiseImage />
        <ExpertiseContent />
        <div className="expertise__iso_certs_container ">
          {EXPERTISE.certifications.map((cert, index) => (
            <ExpertiseCertBadge key={index} certification={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
