import Image from "next/image";
import { H3 } from "../ui/Headings";
import { P } from "../ui/Headings";
import { DefaultButton } from "../ui/Button";

const Work = ({ text, title, imageSrc1, imageSrc2 }) => {
  return (
    <div className="bg-primary-800 gap-x-6 max-w-7xl mb-6 lg:mb-8 min-w-min lg:max-h-170 text-white rounded-xl lg:mx-20 lg:pl-10 pt-32.75 pb-26.5 flex lg:flex-row flex-col">
      <div className="max-w-147.5 px-5 md:pl-10 ">
        <H3 text={title}></H3>
        <P text={text} styles="text-secondary-200 leading-11.25 mb-6"></P>
        <DefaultButton text="Visit" hasArrow={true} />
      </div>
      <div
        className="hidden lg:block relative max-w-157.5 w-full h-107.5 mt-10
          rounded"
      >
        <Image
          src={imageSrc1}
          alt="our work"
          fill
          className="rounded object-cover"
        />
      </div>
      <div
        className="lg:hidden relative h-48.25 md:h-115.75 mt-10 w-[90%] md:w-auto
          rounded md:mx-10 mx-5"
      >
        <Image src={imageSrc2} alt="our work" fill className="rounded" />
      </div>
    </div>
  );
};

export default Work;
