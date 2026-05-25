import { HERO } from "@/data/cv";
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
          />
          Available for consultation
        </span>
        <h1 className="hero__title">
          {HERO.title.map((item, index) => (
            <span key={index} className="hero__title-line">
              {item}
            </span>
          ))}
        </h1>
        <p className="hero__description">{HERO.description}</p>
        <div className="hero__cta_buttons">
          {/* <Button variant="primary" href="#">
            View Proyects
            <Icon icon="material-symbols:arrow-forward" className="ml-3" />
          </Button> */}
          <Button variant="primary" href="#contact">
            Contact Me
          </Button>
          <Button variant="badge" href="#credentials">
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
