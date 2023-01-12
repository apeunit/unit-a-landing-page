import Image from "next/image";
import { H3 } from "../ui/Headings";
import { P } from "../ui/Headings";
import { DefaultButton } from "../ui/Button";

const Work = ({ text, title, imageSrc2 }) => {
  return (
    <div className="pt-[24px] pb-[32px] xl:pt-[131px] xl:pb-[110px] bg-primary-800 w-full xl:w-[1280px] rounded-xl  flex-col lg:flex lg:flex-row md:justify-between px-[16px] xl:px-0 xl:pl-[51px] ">
        <div className="  xl:w-[650px]  xl:px-5 xl:px-0 md:w-[600px]">
      <H3 styles="text-white" text={title}></H3>
      <P text={text} styles="text-secondary-200 leading-11.25 mb-6 w-full"></P>
      <DefaultButton text="Visit" hasArrow={true} style='gap-x-3' />
    </div>
      <div
        className={`hidden lg:block  w-[630px] flex justify-end lg:h-102   mt-10
        ${title === "Unit 8" ? "bg-unit8" : "bg-lab3"} bg-no-repeat rounded`}
      ></div>
      <div
        className="lg:hidden relative h-48.5 mt-10 w-11/12 h-[160px] w-auto
          rounded lg:mx-10 xl:mx-5 md:w-[850px] md:h-[463px]"
      >
        <Image src={imageSrc2} alt="our work" fill className="rounded" />
      </div>
    </div>

  //   <div className="bg-primary-800 w-full w-[1280px] rounded-xl flex justify-between pl-[51px]">
    // <div className="lg:max-w-147.5 lg:min-w-147.5 px-5 xl:px-0 md:pl-10 ">
    //   <H3 styles="text-white" text={title}></H3>
    //   <P text={text} styles="text-secondary-200 leading-11.25 mb-6 w-[567px]"></P>
    //   <DefaultButton text="Visit" hasArrow={true} style='gap-x-3' />
    // </div>
  //   <div
  //       className={`hidden lg:block lg:min-w-147.5 lg:h-102 lg:max-w-147.5 w-full mt-10
  //       ${title === "Unit 8" ? "bg-unit8" : "bg-lab3"} bg-no-repeat rounded`}
  //     ></div>
  //     <div
  //       className="lg:hidden relative h-48.5 mt-10 w-11/12
  //         rounded md:mx-10 mx-5"
  //     >
  //       <Image src={imageSrc2} alt="our work" fill className="rounded" />
  //     </div>
  // </div>
  );
};

export default Work;
