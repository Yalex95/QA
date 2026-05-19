import "./../styles/hero.css";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <HeroContent />
      <HeroImage />
    </section>
  );
}
