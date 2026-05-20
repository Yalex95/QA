import CaseStudies from "./features/caseStudies/components/CaseStudies";
import Certifications from "./features/certifications/components/components/Certifications";
import CoreSpecialist from "./features/coreSpecialist/components/CoreSpecialist";
import Expertise from "./features/expertise/components/Expertise";
import Hero from "./features/hero/components/Hero";

function App() {
  return (
    <>
      <Hero />
      <Expertise />
      <CoreSpecialist />
      <CaseStudies />
      <Certifications />
    </>
  );
}

export default App;
