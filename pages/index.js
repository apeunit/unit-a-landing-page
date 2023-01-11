import WhatWeDo from "../components/cards/WhatWeDo";
import {DefaultButton, LargeButton} from "../components/ui/Button";
import Title from "../components/ui/Title";
import polygon from '../public/assets/images/polygon.webp'
import Wrapper from "../components/wrapper/Wrapper";
import Hero from "../components/sections/Hero";
export default function Home() {
  return (
    <>
      <Wrapper >
        <Hero />
      <h1 className="text-3xl font-bold text-center text-indigo-700">Unit A landing Page</h1>;
      <DefaultButton text="Learn more" hasArrow={true} />
      <LargeButton text="Learn more" hasArrow={true} />
      <Title content='Who we are'></Title>
      <WhatWeDo 
         title="Blockchain is the internet  for cooperation"
         description="We believe that blockchain technology could have the same revolutionary potential as the internet and will change how we cooperate." 
         imagePath={polygon} />
        </Wrapper>
    </>
  )
}
