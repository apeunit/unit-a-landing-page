import Image from "next/image";
import logos from "/data/logos";
import Link from "next/link";
import { Heading2 } from "../ui/Typography";

const Partners = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:mt-12.5 md:mt-3.5 mt-5 mb-7.5 lg:mb-15.25">
      <Heading2>Partners</Heading2>
      <p className="-mt-12 text-center text-secondary-200">
        We partner with the leading brands
      </p>
      <div className="md:flex flex-wrap justify-center items-center hidden lg:mx-59.5">
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
      <div className="flex flex-wrap justify-center w-full md:hidden">
        {logos.map((logo, index) => {
          return (
            <div className="relative w-18.75 h-8.25 mx-1.5 my-2" key={index}>
              <Link href={logo.link} target='_blank'><Image src={logo.source} priority fill alt="logo" /></Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Partners;
