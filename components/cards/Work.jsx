import Image from "next/image";
import Link from "next/link";
import { Heading } from "../ui/Typography";
import DefaultButton from "../ui/buttons/DefaultButton";

const Work = ({ text, title, imageSrc, imageAlt, redirectLink }) => {
  return (
    <div className="pt-6 pb-8 xl:pt-32.75 xl:pb-27.5 bg-primary-800 w-full rounded-2xl md:rounded-8 flex-col lg:flex items-center lg:flex-row md:justify-between px-4 xl:px-0 xl:pl-12.75">
      <div className="xl:w-3/5 xl:pl-5 xl:pr-8 md:w-150">
        <Heading className="text-white" type='three'>{title}</Heading>
        <Heading className="w-full mb-6 text-secondary-200" type="four">
          {text}
        </Heading>
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
          className={`hidden lg:flex w-157.5 justify-end lg:h-102 md:mt-10 bg-no-repeat rounded ${title === "Unit 8" ? "bg-unit8" : "bg-lab3"}`}
        />      </Link>

      <div
        className="lg:hidden relative md:mt-10 mt-8 w-full
          rounded lg:mx-10 xl:mx-5 sm:h-115.75 h-55.25"
      >
        <Link href={redirectLink} target="_blank">
          <Image src={imageSrc} alt={imageAlt} fill className="rounded" />
        </Link>
      </div>
    </div>
  );
};

export default Work;
