import OurWork from "../components/sections/OurWork";
import image1 from "../public/assets/images/unit8.svg";
import image2 from "../public/assets/images/Unit8.jpg";
import { DefaultButton, LargeButton } from "../components/ui/Button";
import WhatWeDo from "../components/cards/WhatWeDo";


import Title from "../components/ui/Title";
import polygon from '../public/assets/images/polygon.webp'
import Wrapper from "../components/wrapper/Wrapper";
export default function Home() {
  return (
    <>
    <h1 className="text-center font-bold text-3xl text-indigo-700">Unit A landing Page</h1>;
      <OurWork
        text="A pioneering technology company specializing in decentralized technologies that creates end-to-end digital experiences for protocols including Ethereum, Tezos, Near, Algorand, Celo and more. "
        title="Unit 8"
        imageSrc1={image1}
        imageSrc2={image2}
      />
      <Wrapper >
     
      <DefaultButton text="Learn more" hasArrow={true} />
      <LargeButton text="Learn more" hasArrow={true} />
      <Title content='Who we are'></Title>
      <WhatWeDo 
         title="Blockchain is the internet  for cooperation"
         description="We believe that blockchain technology could have the same revolutionary potential as the internet and will change how we cooperate." 
         imagePath={polygon} />
        </Wrapper>
    </>
  );
}
