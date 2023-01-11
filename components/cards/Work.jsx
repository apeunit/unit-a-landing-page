import Image from "next/image";
import { H3 } from "../ui/Headings";
import { P } from "../ui/Headings";
import { DefaultButton } from "../ui/Button";

const Work = ({ text, title, imageSrc2 }) => {
  return (
    <div className="bg-primary-800 gap-x-6 lg:max-w-7xl mb-6 lg:mb-8 lg:min-w-min lg:max-h-170 text-white rounded-xl lg:mr-20 lg:pl-10 pt-10 lg:pt-32.75 pb-10 lg:pb-26.5 flex lg:flex-row flex-col items-center">
      <div className="lg:max-w-147.5 lg:min-w-147.5 px-5 md:pl-10 ">
        <H3 text={title}></H3>
        <P text={text} styles="text-secondary-200 leading-11.25 mb-6"></P>
        <DefaultButton text="Visit" hasArrow={true} />
      </div>
      <div
        className={`hidden lg:block md:min-w-147.5 lg:h-102 lg:max-w-147.5 w-full mt-10
        ${title === "Unit 8" ? "bg-unit8" : "bg-lab3"} bg-no-repeat rounded`}
      ></div>
      <div
        className="lg:hidden relative h-77.25 mt-10 w-11/12
          rounded md:mx-10 mx-5"
      >
        <Image src={imageSrc2} alt="our work" fill className="rounded" />
      </div>
    </div>
  );
};

export default Work;
