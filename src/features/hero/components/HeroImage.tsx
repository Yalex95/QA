import { Icon } from "@iconify/react";
import HeroImg from "../assets/HS&E QA.svg";

export default function HeroImage() {
  return (
    <div className="hero__image_container">
      <img
        src={HeroImg}
        alt="Industrial QA & HS&E Specialist"
        className="hero__image"
      />
      <div className="hero__cert_badge">
        <span className="hero__cert_icon">
          <Icon icon="ix:certificate-success-filled" className="w-6 h-6 md:w-8 md:h-8" />
        </span>
        <p className="hero__cert_text">
          <span>Certified Professional</span>
          <span>ISO & OSHA Compliance</span>
        </p>
      </div>
    </div>
  );
}
