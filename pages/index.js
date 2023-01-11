import OurTeam from "../components/sections/OurTeam";
import Wrapper from "../components/wrapper/Wrapper";
import Hero from "../components/sections/Hero";
import WhoWeAre from "../components/sections/WhoWeAre";
import WhatWeDo from "../components/sections/WhatWeDo";
import ContactUs from "../components/sections/ContactUs";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Wrapper >
        <Hero />
      <h1 className="text-3xl font-bold text-center text-indigo-700">Unit A landing Page</h1>;
        <WhoWeAre />
        <WhatWeDo />
        <OurTeam />
        <ContactUs />
        <Footer />
      </Wrapper>
    </>
  );
}
