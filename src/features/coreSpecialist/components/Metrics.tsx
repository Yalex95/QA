import { METRICS_IMPACT } from "@/data/cv";
import { useTranslation } from "react-i18next";

export default function Metrics() {
  const { t } = useTranslation();
  return (
    <dl className="core-specialist__metrics">
      {METRICS_IMPACT.map((item) => {
        return (
          <div className="core-specialist__metrics_item" key={item.id}>
            <dt className="core-specialist__metrics_metric">
              {t(item.metric)}
            </dt>
            <dd className="core-specialist__metrics_text">{t(item.impact)}</dd>
          </div>
        );
      })}
    </dl>
  );
}
