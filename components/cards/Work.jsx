import Image from "next/image";
import { H3 } from "../ui/Headings";
import { P } from "../ui/Headings";

const Work = ({ text, title, imageSrc }) => {
  return (
    <div className="bg-primary-800 gap-x-[23px] max-w-[1280px] max-h-[680px] text-white rounded-xl ml-28 pl-10 pt-[131px] pb-[106px] flex">
      <div className="max-w-[590px]">
        <H3 text={title}></H3>
        <P text={text} styles="text-secondary-200 leading-[45px] mb-6"></P>
        <button className="py-5 bg-red-200">testing</button>
      </div>
      <div
        className="relative max-w-[630px] w-full h-[430px] mt-10
          rounded"
      >
        <Image
          src={imageSrc}
          alt="our work"
          fill
          className="rounded object-cover"
        />
      </div>
    </div>
  );
};

export default Work;
