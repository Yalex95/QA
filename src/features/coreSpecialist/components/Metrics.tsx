import { METRICS_IMPACT } from "@/data/cv";

export default function Metrics() {
  return (
    <dl className="core-specialist__metrics">
      {METRICS_IMPACT.map((item) => {
        return (
          <div className="core-specialist__metrics_item" key={item.id}>
            <dt className="core-specialist__metrics_metric">{item.metric}</dt>
            <dd className="core-specialist__metrics_text">{item.impact}</dd>
          </div>
        );
      })}
    </dl>
  );
}
