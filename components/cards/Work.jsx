import Image from "next/image";
import Link from "next/link";
import { Heading3, Paragraph } from "../ui/Typography";
import DefaultButton from "../ui/buttons/DefaultButton";

const Work = ({ text, title, imageSrc, redirectLink }) => {
  return (
    <div className="pt-6 pb-8 xl:pt-32.75 xl:pb-27.5 bg-primary-800 w-full xl:w-320 rounded-8 flex-col lg:flex items-center lg:flex-row md:justify-between px-4 xl:px-0 xl:pl-12.75">
      <div className="xl:w-3/5 xl:pl-5 xl:pr-8 md:w-150">
        <Heading3 className="text-white">{title}</Heading3>
        <Paragraph className="text-secondary-200 leading-11.25 mb-6 w-full">
          {text}
        </Paragraph>
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
          className={`lg:block w-157.5 flex justify-end lg:h-102 mt-10
        ${title === "Unit 8" ? "bg-unit8" : "bg-lab3"} bg-no-repeat rounded`}
        />
      </Link>

      <div
        className="lg:hidden relative h-48.5 mt-10 w-auto
          rounded lg:mx-10 xl:mx-5 md:w-212.5 md:h-115.75"
      >
        <Link href={redirectLink} target="_blank">
          <Image src={imageSrc} alt="our work" fill className="rounded" />
        </Link>
      </div>
    </div>
  );
};

export default Work;
