import Image from "next/image";
import logos from "/data/logos";
import Link from "next/link";
import { Heading2, Paragraph } from "../ui/Typography";

const Partners = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-13.5 md:mb-35">
      <Heading2>Partners</Heading2>
      <Paragraph className="text-center text-secondary-200">
        We partner with the leading brands
      </Paragraph>
      <div className="md:flex flex-wrap justify-center md:mt-4.75 items-center hidden lg:mx-57.75">
        {logos.map((logo, index) => {
          return (
            <Link href={logo.link} key={index} target='_blank'>
              <Image
                priority
                width={logo.Width}
                height={logo.Height}
                src={logo.source}
                alt="logo"
                className="mx-3 my-2"
              />
            </Link>
          );
        })}
      </div>
      <div className="flex flex-wrap justify-center mt-6 w-full md:hidden">
        {logos.map((logo, index) => {
          return (
            <div className="relative w-11.25 h-8.25 mx-1.5 my-2" key={index}>
              <Link href={logo.link} target='_blank'><Image src={logo.source} priority fill alt="logo" /></Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Partners;
