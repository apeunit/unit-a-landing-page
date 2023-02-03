import Image from "next/image";
import { Heading4 } from "../ui/Typography";
import heroBall from "/public/assets/images/hero-ball.webp";
import heroPrism from "/public/assets/images/hero-prism.webp";
import downArrow from "/public/assets/images/downArrow.webp";
import underlineTop from "/public/assets/images/underline-top.webp";

const Hero = () => {
  return (
    <section className="flex flex-col pt-9.25 mb-10.75 lg:mb-39.25">
      <Heading4 className="text-white mb-11.75 font-semibold">Unit A</Heading4>
      <div className="self-end w-10.5 h-10.5 lg:w-auto lg:h-auto lg:mr-15.15 lg:flex">
        <Image src={heroBall} alt="Hero Ball" />
      </div>
      <h3 className="font- md:text-14.75 text-3xl lg:text-6xl lg:leading-22.13 leading-14.25 text-white  mt-12.5 lg:mt-4.15 mb-25.49 w-full lg:w-239 xl:w-295.25 md:w-239 xl:ml-19.75 mx-auto">
        <span>A </span>
        <p className="inline-flex">
          <span className="relative">
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
      </h3>

      <div className="flex lg:justify-center lg:grid lg:grid-cols-2 lg:ml-4.75 items-center">
        <div className="h-8 w-8 lg:h-auto lg:w-auto mb-8">
          <Image src={heroPrism} className="lg:block" alt="Prism" />
        </div>
        <Image src={downArrow} alt="Scroll" className="ml-24 lg:ml-0" />
      </div>
    </section>
  );
};

export default Hero;
