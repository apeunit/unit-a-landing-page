import DefaultButton from "../ui/buttons/DefaultButton";
import { Heading5 } from "../ui/Typography";
import Title from '../ui/Title'
const WhoWeAre = () => {
  return (
    <section className="flex gap-5 lg:gap-8.75 xl:gap-4.5 flex-col md:px-2 xl:px-0 xl:w-4.38/5 mx-auto">
      <Title>Who we are</Title>
      <Heading5 className="-mt-11.75">Ape Unit was founded in 2010 in Berlin. Since 2017 Ape Unit{"'"}s Unit 8 has been working in the field of blockchain technology. We are working together with web3 protocols such as Ethereum, Tezos, Celo, NEAR,  Algorand, and Cosmos, but also for large international clients such as VW and small African Startups like BitLipa.</Heading5>
      <Heading5 className="mt-5">With the new Unit A, we want to shift our focus to African developers and create joint European and African organizations to work in blockchain technology.</Heading5>
      <DefaultButton style="w-64.5 gap-6 md:w-fit text-2xl" text="Contact us" hasArrow={true} hasLink={true} redirectLink="mailto: u2467@apeunit.com" />
    </section>
  );
}

export default WhoWeAre;