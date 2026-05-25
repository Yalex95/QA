import { CORE_SPECIALIST } from "@/data/cv";
import "../styles/coreSpecialist.css";
import Metrics from "./Metrics";
import SwiperContainer from "./swiper/index";
export default function CoreSpecialist() {
  return (
    <section className="core-specialist" id="core-specialist">
      <div>
        <h2 className="core-specialist__title">{CORE_SPECIALIST.title}</h2>
        <p className="core-specialist__text">{CORE_SPECIALIST.paragraph}</p>
      </div>
      <SwiperContainer />
      <Metrics />
    </section>
  );
}
