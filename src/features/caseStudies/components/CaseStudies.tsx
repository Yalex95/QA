import { case_studies_data } from "@/data/cv";
import { Icon } from "@iconify/react";
import "../styles/caseStudies.css";
import CaseStudiesCard from "./CaseStudiesCard";
export default function CaseStudies() {
  return (
    <section className="case-studies">
      <div className="case-studies__container">
        <div className="flex justify-between mb-12 items-end">
          <header className="case-studies__header">
            <h2>{case_studies_data.title}</h2>
            <p>{case_studies_data.paragraph}</p>
          </header>
          <a className=" hidden md:inline-flex">
            View all projects <Icon icon="ri:gallery-view-2" />
          </a>
        </div>
        <div className="case-studies__featured_projects">
          {case_studies_data.case_studies.map((card) => (
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
