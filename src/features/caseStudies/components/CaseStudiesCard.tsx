export type caseStudiesCardPropsType = {
  id?: number;
  badge: string;
  image_link: string;
  title: string;
  problem: string;
  action: string;
  result: string;
};
export default function CaseStudiesCard({
  id,
  badge,
  image_link,
  title,
  problem,
  action,
  result,
}: caseStudiesCardPropsType) {
  return (
    <article className="case_study__card" key={id}>
      <header>
        <div className="case_study__card_badge">
          <span>{badge}</span>
        </div>
        <img src={image_link} alt={title} className="case_study__card_image" />
      </header>
      <div className="case_study__card_content">
        <h3>{title}</h3>
        <section className="case_study__card_block-text">
          <h4>problem</h4>
          <p>{problem}</p>
        </section>
        <section className="case_study__card_block-text border-b border-[var(--color-primary)] pb-4">
          <h4>Action</h4>
          <p>{action}</p>
        </section>

        <section
          className="case_study__card_info-block"
          aria-labelledby="case_study__card_result-heading"
        >
          <div className="case_study__card_block-header">
            <h5 id="case_study__card_result-heading">RESULT (KPIS)</h5>
          </div>
          <div className="case_study__card_result-highlight">
            <div className="kpi-grid">
              <span className="kpi-item">{result}</span>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
