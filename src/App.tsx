import { Icon } from "@iconify/react";
import CaseStudies from "./features/caseStudies/components/CaseStudies";
import Certifications from "./features/certifications/components/Certifications";
import Contact from "./features/contact/components/Contact";

import CoreSpecialist from "./features/coreSpecialist/components/CoreSpecialist";
import Expertise from "./features/expertise/components/Expertise";
import Footer from "./features/footer/components/Footer";
import Hero from "./features/hero/components/Hero";
import Navbar from "./features/navbar/components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Hero />
        <Expertise />
        <CoreSpecialist />
        <CaseStudies />
        <Certifications />
        <Contact />
        <Footer />
      </main>
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
