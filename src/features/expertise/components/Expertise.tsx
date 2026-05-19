import "../styles/expertise.css";
import ExpertiseContent from "./ExpertiseContent";
import ExpertiseImage from "./ExpertiseImage";
export default function Expertise() {
  return (
    <section id="expertise" className="expertise">
      <div className="expertise__container">
        <ExpertiseImage />
        <ExpertiseContent />
      </div>
    </section>
  );
}
