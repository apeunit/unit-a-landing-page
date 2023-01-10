import { DefaultButton } from "../ui/Button";
import { H5 } from "../ui/Headings";
import Title from '../ui/Title'
const WhoWeAre = () => {
    return ( 
        <section className="flex gap-5 lg:gap-[35px] xl:gap-[18px] flex-col md:px-[8px]   xl:px-[81px]">
      <Title content='Who we are' />

        <H5 styles="-mt-11.75" text="Ape Unit was founded in 2010 in Berlin. Since 2017 Ape Unit's Unit 8 has been working in the field of blockchain technology. We are working together with web3 protocols such as Ethereum, Tezos, Celo, NEAR,  Algorand, and Cosmos, but also for large international clients such as VW and small African Startups like BitLipa. 
With the new Unit A, we want to shift our focus to African developers and create joint European and African organizations to work in blockchain technology."/>
        <DefaultButton style="w-[258px] gap-[24px] md:w-fit text-2xl" text="Contact us" hasArrow={true} />
        </section>
     );
}
 
export default WhoWeAre;