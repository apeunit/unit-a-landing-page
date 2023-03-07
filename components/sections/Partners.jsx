import Image from "next/image";
import logos from "/data/logos";
import Link from "next/link";
import { Heading, Paragraph } from "../ui/Typography";

const Partners = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-13.5 md:mb-35">
      <Heading type="two">Partners</Heading>
      <Paragraph className="text-center text-secondary-200">
        We partner with the leading brands
      </Paragraph>
      <div className="md:flex flex-wrap justify-center mt-4.75 items-center hidden lg:mx-57.75 gap-x-6 gap-y-4">
        {logos.map((logo, index) => {
          return (
            <Link href={logo.link} key={index} target='_blank'>
              <Image
                priority
                width={logo.Width}
                height={logo.Height}
                src={logo.source}
                alt={logo.alt}
                className="mx-3 my-2"
              />
            </Link>
          );
        })}
      </div>
      <div className="flex flex-wrap justify-center w-full mt-6 md:hidden gap-y-4 gap-x-3">
        {logos.map((logo, index) => {
          return (
            <div className="relative w-11.25 h-8.25 mx-1.5 my-2" key={index}>
              <Link href={logo.link} target='_blank'><Image src={logo.source} priority fill alt={logo.alt} /></Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Partners;
