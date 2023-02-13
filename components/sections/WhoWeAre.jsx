import DefaultButton from "../ui/buttons/DefaultButton";
import { Heading2, Heading3 } from "../ui/Typography";
const WhoWeAre = () => {
  return (
    <section className="flex flex-col md:px-2 xl:px-0 xl:w-3.7/4 mx-auto">
      <Heading2 className='mb-5.75 md:mb-4.5'>Who we are</Heading2>
      <Heading3>Ape Unit was founded in 2010 in Berlin. Since 2017 Ape Unit&apos;s Unit 8 has been working in the field of blockchain technology. We are working together with web3 protocols such as Ethereum, Tezos, Celo, NEAR,  Algorand, and Cosmos, but also for large international clients such as VW and small African Startups like BitLipa.</Heading3>
      <Heading3 className='mt-12 mb-5 md:mb-4.5'>With the new Unit A, we want to shift our focus to African developers and create joint European and African organizations to work in blockchain technology.</Heading3>
      <DefaultButton style="w-64.5 gap-6 md:w-fit text-2xl" text="Contact us" hasArrow={true} hasLink={true} redirectLink="mailto: u2467@apeunit.com" />
    </section>
  );
}

export default WhoWeAre;