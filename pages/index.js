import { DefaultButton, LargeButton } from "../components/ui/Button";
import OurTeam from "../components/sections/OurTeam";
import Wrapper from "../components/wrapper/Wrapper";
import Partners from "../components/sections/Partners";
import WhatWeDo from "../components/sections/WhatWeDo";
import ContactUs from "../components/sections/ContactUs";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Wrapper >
      <Title content='Who we are'></Title>
     
         <Partners/>

        <h1 className="text-3xl font-bold text-center text-indigo-700">Unit A landing Page</h1>;
        <DefaultButton text="Learn more" hasArrow={true} />
        <LargeButton text="Learn more" hasArrow={true} />
        <WhatWeDo />
         <OurTeam />
         <ContactUs />
        <Footer />

        </Wrapper>
    </>
  );
}
