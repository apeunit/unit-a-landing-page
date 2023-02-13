import Image from "next/image";
import { Heading4 } from "../ui/Typography";
import heroBall from "/public/assets/images/hero-ball.webp";
import heroPrism from "/public/assets/images/hero-prism.webp";
import downArrow from "/public/assets/images/downArrow.webp";
import underlineTop from "/public/assets/images/underline-top.webp";
import underlineBottom from "/public/assets/images/underline-bottom.webp";

const Hero = () => {
  return (
    <section className="flex flex-col pt-9.25 mb-10.75 lg:mb-39.25">
      <Heading4 className="text-white mb-11.75 font-semibold">Unit A</Heading4>
      <Image
        src={heroBall}
        className="self-end lg:mr-15.15 hidden lg:flex"
        alt="Hero Ball"
      />
      <h3 className="font-semibold md:text-14.75 text-8 lg:leading-22.13 leading-14.25 text-white  mt-12.5 lg:mt-4.15 mb-25.49 w-full lg:w-239 xl:w-295.25 md:w-239 xl:ml-19.75 mx-auto">
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
      </h3>

      <div className="flex justify-center lg:grid lg:grid-cols-2 ml-4.75 items-center">
        <Image src={heroPrism} className="hidden lg:block" alt="Prism" />
        <Image src={downArrow} alt="Scroll" />
      </div>
    </section>
  );
};

export default Hero;
