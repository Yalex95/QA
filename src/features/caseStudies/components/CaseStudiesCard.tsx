import type { caseStudiesItem } from "@/data/cv";
import { useTranslation } from "react-i18next";

export default function CaseStudiesCard({
  id,
  badge,
  image_link,
  title,
  problem,
  action,
  result,
}: caseStudiesItem) {
  const { t } = useTranslation();
  return (
    <article className="case_study__card" key={id}>
      <header>
        <div className="case_study__card_badge">
          <span>{t(badge)}</span>
        </div>
        <img
          src={image_link}
          alt={t(title)}
          className="case_study__card_image"
        />
      </header>
      <div className="case_study__card_content">
        <h3>{t(title)}</h3>
        <section className="case_study__card_block-text">
          <h4>problem</h4>
          <p>{t(problem)}</p>
        </section>
        <section className="case_study__card_block-text border-b border-[var(--color-primary)] pb-4">
          <h4>Action</h4>
          <p>{t(action)}</p>
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
              <span className="kpi-item">{t(result)}</span>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
