import { DefaultButton } from "../ui/Button";
import { H5 } from "../ui/Headings";
import Title from '../ui/Title'
const WhoWeAre = () => {
    return ( 
        <section className="flex gap-5 lg:gap-8.75 xl:gap-4.5 flex-col md:px-2 xl:px-0 xl:w-87.65 mx-auto">
          <Title content='Who we are' />
          <H5 styles="-mt-11.75" text="Ape Unit was founded in 2010 in Berlin. Since 2017 Ape Unit's Unit 8 has been working in the field of blockchain technology. We are working together with web3 protocols such as Ethereum, Tezos, Celo, NEAR,  Algorand, and Cosmos, but also for large international clients such as VW and small African Startups like BitLipa. 
          "/>
          <H5 text="With the new Unit A, we want to shift our focus to African developers and create joint European and African organizations to work in blockchain technology."/>
          <DefaultButton style="w-64.5 gap-6 md:w-fit text-2xl" text="Contact us" hasArrow={true} hasLink={true}/>
        </section>
     );
}
 
export default WhoWeAre;