import { Arrow } from "../svgs/Arrow";
import Link from "next/link";
export const DefaultButton = ({ text, hasArrow, style, hasLink, directLink }) => {
  return (
    <button
      className={`bg-white rounded-8 py-3 px-12 text-black font-normal tracking-tightest text-2xl flex lg:justify-between items-center lg:gap-x-9.75 group hover:px-8 duration-500 ${style}`}
    >
      {hasLink ? (
        <Link href={directLink} target='_blank'>
          <span className="-mt-1">{text}</span>
        </Link>
      ) : (
        <span className="-mt-1">{text}</span>
      )}

      {hasArrow && <Arrow style="group-hover:rotate-45" />}
    </button>
  );
};

export const LargeButton = ({ text, hasArrow, styleSpan, style, hasLink }) => {
  return (
    <button
      className={`bg-white rounded-8 py-4 px-12 text-black font-normal tracking-tightest text-3xl flex justify-between items-center gap-x-9.75 group hover:px-8 duration-500 ${style}`}
    >
      {hasLink ? (
        <Link href={directLink} tagert='_blank'>
          <span className="-mt-2">{text}</span>
        </Link>
      ) : (
        <span className={`-mt-2 ${styleSpan}`}>{text}</span>
      )}
      {hasArrow && <Arrow style="h-4.1575 w-4.0725 group-hover:rotate-45" />}
    </button>
  );
};
