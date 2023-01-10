import WhatWeDo from "../components/cards/WhatWeDo";
import Title from "../components/ui/Title";
import polygon from '../public/assets/images/polygon.webp'
export default function Home() {
  return (
    <>
      <h1 className="text-center font-bold text-3xl text-indigo-700">Unit A landing Page</h1>;
      <Title content='Who we are'></Title>
      <WhatWeDo 
         title="Blockchain is the internet  for cooperation"
         description="We believe that blockchain technology could have the same revolutionary potential as the internet and will change how we cooperate." 
         imagePath={polygon} />
    </>
  )
}
