import Image from "next/image";
import { Heading1 } from "../ui/Typography";
import heroBall from "/public/assets/images/hero-ball.webp";
import heroPrism from "/public/assets/images/hero-prism.webp";
import downArrow from "/public/assets/images/downArrow.webp";
import underlineTop from "/public/assets/images/underline-top.webp";

const Hero = () => {
  return (
    <section className="text-white flex flex-col pt-7 mb-10.75 lg:mb-39.25">
      <Heading1 className="mb-11.75">Unit A</Heading1>
      <div className="self-end w-10.5 h-10.5 lg:w-auto lg:h-auto lg:mr-15.15 lg:flex">
        <Image src={heroBall} alt="Hero Ball" />
      </div>
      <Heading1 className="lg:mt-4.15 mb-25.49 w-full lg:w-239 xl:w-3.7/4   mx-auto">
        <span>A </span>
        <p className="inline-flex">
          <span className="relative pr-2">
            joint-force
            <Image
              src={underlineTop}
              className="absolute bottom-0 left-0"
              alt="Underline Top"
            />
          </span>
        </p>
        <span>
          between African & European developers & organizations working in
        </span>
        <p className="inline-flex">
          <span className="relative">blockchain technology</span>
        </p>
      </Heading1>

      <div className="flex justify-center lg:grid lg:grid-cols-2 lg:ml-4.75 items-center">
        <div className="w-8 h-8 mb-8 mr-auto lg:h-auto lg:w-auto">
          <Image src={heroPrism} className="lg:block" alt="Prism" />
        </div>
        <Image src={downArrow} alt="Scroll" className="mr-auto" />
      </div>
    </section>
  );
};

export default Hero;
