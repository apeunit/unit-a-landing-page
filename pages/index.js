import OurTeam from "../components/sections/OurTeam";
import OurWork from "../components/sections/OurWork";
import Wrapper from "../components/wrapper/Wrapper";
import Partners from "../components/sections/Partners";
import WhoWeAre from "../components/sections/WhoWeAre";
import WhatWeDo from "../components/sections/WhatWeDo";
import ContactUs from "../components/sections/ContactUs";
import Footer from "../components/layout/Footer";
export default function Home() {
  return (
    <>
      <Wrapper>
        <OurWork />
        <WhoWeAre />
        <WhatWeDo />
        <OurTeam />
        <Partners />
        <ContactUs />
        <Footer />
      </Wrapper>
    </>
  );
}
