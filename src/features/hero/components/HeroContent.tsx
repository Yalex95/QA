import { Icon } from "@iconify/react";
import Button from "../../shared/components/Button";

export default function HeroContent() {
  return (
    <>
      <div className="hero__content">
        <span className="hero__badge">
          <Icon
            icon="ci:dot-04-l"
            style={{ fontSize: "1rem", marginRight: "4px" }}
          />{" "}
          Available for consultation
        </span>
        <h1 className="hero__title">
          <span className="hero__title-line">
            Industrial QA & HS&E Specialist |
          </span>
          <span className="hero__title-line">
            Compliance, Safety & Improvement
          </span>
        </h1>
        <p className="hero__description">
          Driving quality systems, safety regulations, and risk management with
          precision and reliability across global industrial sectors.
        </p>
        <div className="hero__cta_buttons">
          <Button variant="primary" href="#">
            View Proyects
            <Icon icon="material-symbols:arrow-forward" className="ml-3" />
          </Button>
          <Button variant="secondary" href="#">
            Contact Me
          </Button>
          <Button variant="badge" href="#">
            Professional Credentials
            <Icon
              icon="qlementine-icons:certified-filled-16"
              className="ml-3"
            />
          </Button>
        </div>
      </div>
    </>
  );
}
