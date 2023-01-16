import JoinOurTeam from "../components/sections/JoinOurTeam";
import OurWork from "../components/sections/OurWork";
import PageWrapper from "../components/wrappers/PageWrapper";
import Partners from "../components/sections/Partners";
import WhoWeAre from "../components/sections/WhoWeAre";
import WhatWeDo from "../components/sections/WhatWeDo";
import ContactUs from "../components/sections/ContactUs";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
const Home = () =>{
  return (
      <PageWrapper >
        <Hero />
        <WhoWeAre />
        <OurWork />
        <WhatWeDo />
        <JoinOurTeam />
        <Partners />
        <ContactUs />
        <Footer />
      </PageWrapper>
  );
}
export default Home
