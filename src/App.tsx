import CaseStudies from "./features/caseStudies/components/CaseStudies";
import Certifications from "./features/certifications/components/Certifications";
import Contact from "./features/contact/components/Contact";

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
      <Contact />
    </>
  );
}

export default App;
