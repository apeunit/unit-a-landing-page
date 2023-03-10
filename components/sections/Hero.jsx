import Image from "next/image";
import { Heading } from "../ui/Typography";
import heroBall from "/public/assets/images/hero-ball.webp";
import heroPrism from "/public/assets/images/hero-prism.webp";
import downArrow from "/public/assets/images/down-arrow.webp";
import underlineTop from "/public/assets/images/underline-top.webp";

const Hero = () => {
  return (
    <section className="text-white flex flex-col pt-9.25 md:pt-7 mb-10.75 lg:mb-39.25">
      <Heading className="mb-2.99 md:mb-9.5" type="one">Unit A</Heading>
      <div className="self-end w-10.5 h-10.5 lg:w-auto lg:h-auto lg:mr-15.15 lg:flex">
        <Image src={heroBall} alt="Hero Ball" />
      </div>
      <Heading className="lg:mt-4.15 mb-23.5 md:my-23.25 w-full lg:w-239 xl:w-3.7/4 mx-auto" type="one">
        <span>A </span>
        <p className="inline-flex">
          <span className="relative mr-2.5">
            joint-force
            <Image
              src={underlineTop}
              className="absolute bottom-0 left-0"
              alt="Underline Top"
            />
          </span>
        </p>
        <span>
          between African & European developers & organizations working in blockchain technology
        </span>
      </Heading>

      <div className="flex justify-center md:grid md:grid-cols-2 lg:ml-4.75 items-center lg:items-center">
        <div className="w-8 h-8 mb-8 mr-auto md:block md:h-auto md:w-auto md:my-auto">
          <Image src={heroPrism} alt="Prism" />
        </div>
        <Image src={downArrow} alt="Scroll" className="mr-auto" />
      </div>
    </section>
  );
};

export default Hero;
