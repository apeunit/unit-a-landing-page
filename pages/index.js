import OurTeam from "../components/sections/OurTeam";
import Wrapper from "../components/wrapper/Wrapper";
import WhoWeAre from "../components/sections/WhoWeAre";
import WhatWeDo from "../components/sections/WhatWeDo";
import ContactUs from "../components/sections/ContactUs";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Wrapper >
        <WhoWeAre />
        <WhatWeDo />
        <OurTeam />
        <ContactUs />
        <Footer />
      </Wrapper>
    </>
  );
}
