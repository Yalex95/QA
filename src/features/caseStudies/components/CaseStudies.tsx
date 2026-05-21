import { Icon } from "@iconify/react";
import image from "../assets/Refinery project.png";
import "../styles/caseStudies.css";
import CaseStudiesCard, {
  type caseStudiesCardPropsType,
} from "./CaseStudiesCard";
export default function CaseStudies() {
  const caseStudiesCards: caseStudiesCardPropsType[] = [
    {
      id: 1,
      badge: "Oil & Gas",
      image_link: image,
      title: "Refinery HS&E Systems Overhaul",
      problem:
        "Increasing minor incidents and outdated risk reporting mechanisms leading to production delays.",
      action:
        "Implemented a real-time digital hazard reporting system and localized safety training workshops.",
      result:
        "40% drop in incidents within 6 months. 100% staff adoption rate.",
    },
    {
      id: 2,
      badge: "Manufacturing",
      image_link: image,

      title: "Automotive Quality Control Optimization",
      problem:
        "High rejection rates at the final assembly stage causing significant material waste.",
      action:
        "Deployed Lean Six Sigma DMAIC process and upgraded station-level QA testing equipment.",
      result:
        "Reduced scrap rate by 22%. Annual savings of $450k in material costs.",
    },
  ];
  return (
    <section className="case-studies">
      <div className="case-studies__container">
        <div className="flex justify-between mb-12 items-end">
          <header className="case-studies__header">
            <h2>Case Studies</h2>
            <p>
              Real-world solutions delivered across diverse industrial
              landscapes.
            </p>
          </header>
          <a className=" hidden md:inline-flex">
            View all projects <Icon icon="ri:gallery-view-2" />
          </a>
        </div>
        <div className="case-studies__featured_projects">
          {caseStudiesCards.map((card) => (
            <CaseStudiesCard key={card.id} {...card} />
          ))}
        </div>
        <a className="md:hidden inline-flex mt-10 justify-center w-full ">
          View all projects <Icon icon="ri:gallery-view-2" />
        </a>
      </div>
    </section>
  );
}
