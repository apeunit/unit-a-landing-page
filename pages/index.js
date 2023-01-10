import OurWork from "../components/sections/OurWork";
import WhatWeDo from "../components/cards/WhatWeDo";
import polygon from "../public/assets/images/polygon.webp";
import Wrapper from "../components/wrapper/Wrapper";

export default function Home() {
  return (
    <Wrapper>
      <OurWork />
      <WhatWeDo
        title="Blockchain is the internet  for cooperation"
        description="We believe that blockchain technology could have the same revolutionary potential as the internet and will change how we cooperate."
        imagePath={polygon}
      />
    </Wrapper>
  );
}
