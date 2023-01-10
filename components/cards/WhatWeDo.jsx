import Image from "next/image";
import { H4 } from "../ui/Headings";

const WhatWeDo = ({ title, description, imagePath }) => {
  return (
    <div className="grid grid-col-1 gap-8 md:gap-0 md:grid-cols-2 lg:justify-between">
      <div className="w-auto lg:w-153.5 xl:w-141.25 space-y-4 order-2 lg:order-none">
        <H4 text={title} />
        <p>{description}</p>
      </div>
      <div className="flex items-center lg:justify-center order-1 lg:order-none">
        <Image
          className="w-47.3375 h-44.75 xl:w-66 xl:h-61 lg:w-47.3375 lg:h-43.675"
          alt="what we do"
          src={imagePath}
        />
      </div>
    </div>
  );
};

export default WhatWeDo;
