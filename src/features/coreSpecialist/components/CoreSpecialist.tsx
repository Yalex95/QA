import "../styles/coreSpecialist.css";
import Metrics from "./Metrics";
import SwiperContainer from "./swiper/index";
export default function CoreSpecialist() {
  const specialist_list = [
    {
      icon: "material-symbols:fact-check-outline",
      title: "Quality Assurance & Control",
      text: "Implementing robust QA frameworks for zero-defect manufacturing.",
    },
    {
      icon: "icon-park-outline:caution",
      title: "Risk Assessment & Analysis",
      text: "Identifying and mitigating operational hazards before they occur.",
    },
    {
      icon: "streamline:justice-hammer-remix",
      title: "Regulatory Compliance",
      text: "Navigating complex legal and industry- specific regulations.",
    },
    {
      icon: "ic:baseline-fact-check",
      title: "Safety Training & Audits",
      text: "Comprehensive internal audits and specialized staff training.",
    },
    {
      icon: "carbon:growth",
      title: "Continuous Improvement",
      text: "Lean and Six Sigma methodologies for operational excellence.",
    },
  ];
  return (
    <section className="core-specialist" id="core-specialist">
      <div>
        <h2 className="core-specialist__title">Core Specialist Expertise</h2>
        <p className="core-specialist__text">
          Providing end-to-end industrial solutions through technical mastery
          and strategic safety implementation.
        </p>
      </div>
      {/* <div className="core-specialist__card_container">
        {specialist_list.map((card, index) => (
          <CoreSpecialistCard key={index} {...card} />
        ))}
      </div> */}
      <SwiperContainer slides={specialist_list} />
      <Metrics />
    </section>
  );
}
