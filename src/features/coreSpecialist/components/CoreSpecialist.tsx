import { CORE_SPECIALIST } from "@/data/cv";
import { useTranslation } from "react-i18next";
import "../styles/coreSpecialist.css";
import Metrics from "./Metrics";
import SwiperContainer from "./swiper/index";
export default function CoreSpecialist() {
  const { t } = useTranslation();
  return (
    <section className="core-specialist" id="core-specialist">
      <div>
        <h2 className="core-specialist__title">{t(CORE_SPECIALIST.title)}</h2>
        <p className="core-specialist__text">{t(CORE_SPECIALIST.paragraph)}</p>
      </div>
      <SwiperContainer />
      <Metrics />
    </section>
  );
}
