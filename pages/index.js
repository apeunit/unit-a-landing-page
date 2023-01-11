import { DefaultButton, LargeButton } from "../components/ui/Button";
import WhatWeDo from "../components/cards/WhatWeDo";
import Title from "../components/ui/Title";
import polygon from '../public/assets/images/polygon.webp'
import OurTeam from "../components/sections/OurTeam";
import Wrapper from "../components/wrapper/Wrapper";
import Partners from "../components/sections/Partners";
import ContactUs from "../components/sections/ContactUs";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Wrapper >
      <Title content='Who we are'></Title>
      <WhatWeDo 
         title="Blockchain is the internet  for cooperation"
         description="We believe that blockchain technology could have the same revolutionary potential as the internet and will change how we cooperate." 
         imagePath={polygon} />
         <Partners/>

         <OurTeam />
         <ContactUs />
        <Footer />

        </Wrapper>
    </>
  );
}
