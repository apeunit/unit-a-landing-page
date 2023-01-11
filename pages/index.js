import WhatWeDo from "../components/cards/WhatWeDo";
import {DefaultButton, LargeButton} from "../components/ui/Button";
import Title from "../components/ui/Title";
import polygon from '../public/assets/images/polygon.webp'
import OurTeam from "../components/sections/OurTeam";
import Wrapper from "../components/wrapper/Wrapper";
export default function Home() {
  return (
    <>
      <Wrapper >
      <Title content='Who we are'></Title>
      <WhatWeDo 
         title="Blockchain is the internet  for cooperation"
         description="We believe that blockchain technology could have the same revolutionary potential as the internet and will change how we cooperate." 
         imagePath={polygon} />

         <OurTeam />
        </Wrapper>
    </>
  )
}
