import Image from "next/image";
import Link from "next/link";
import { Heading3, Heading4 } from "../ui/Typography";
import DefaultButton from "../ui/buttons/DefaultButton";

const Work = ({ text, title, imageSrc, redirectLink }) => {
  return (
    <div className="pt-6 pb-8 xl:pt-32.75 xl:pb-27.5 bg-primary-800 w-full xl:w-320 rounded-8 flex-col lg:flex items-center lg:flex-row md:justify-between px-4 xl:px-0 xl:pl-12.75">
      <div className="xl:w-3/5 xl:pl-5 xl:pr-8 md:w-150">
        <Heading3 className="text-white">{title}</Heading3>
        <Heading4 className="w-full mb-6 text-secondary-200">
          {text}
        </Heading4>
        <div className="w-44.75">
          <DefaultButton
            text="Visit"
            hasArrow={true}
            style="gap-x-3 w-full"
            redirectLink={redirectLink}
          />
        </div>
      </div>
      <Link href={redirectLink} target="_blank">
        <div
          className={`hidden lg:flex w-157.5 justify-end lg:h-102 md:mt-10
        ${title === "Unit 8" ? "bg-unit8" : "bg-lab3"} bg-no-repeat rounded`}
        />
      </Link>

      <div
        className="lg:hidden relative md:mt-10 mt-8 w-full
          rounded lg:mx-10 xl:mx-5 sm:h-115.75 h-55.25"
      >
        <Link href={redirectLink} target="_blank">
          <Image src={imageSrc} alt="our work" fill className="rounded" />
        </Link>
      </div>
    </div>
  );
};

export default Work;
