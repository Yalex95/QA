import { Icon } from "@iconify/react";
import CaseStudies from "./features/caseStudies/components/CaseStudies";
import Certifications from "./features/certifications/components/Certifications";
import Contact from "./features/contact/components/Contact";

import CoreSpecialist from "./features/coreSpecialist/components/CoreSpecialist";
import Expertise from "./features/expertise/components/Expertise";
import Footer from "./features/footer/components/Footer";
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
      <Footer />
      <a
        className="fixed right-6 bottom-6 rounded-full bg-[#25D366] p-3 z-10"
        href="#"
      >
        <Icon icon="mdi:whatsapp" className="text-white w-10 h-10" />
      </a>
    </>
  );
}

export default App;
