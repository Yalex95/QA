export default function Metrics() {
  const metrics_impact = [
    { id: 1, metric: "35%", impact: "Reduction in Workplace Incidents" },
    { id: 2, metric: "100%", impact: "Audit Compliance Rate" },
    { id: 3, metric: "15+", impact: "Major Industrial Audits Conducted" },
  ];
  return (
    <dl className="core-specialist__metrics">
      {metrics_impact.map((item) => {
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
