import { Arrow } from "../../svgs/Arrow";
import Link from "next/link";

const DefaultButton = ({ text, hasArrow, style, hasLink, redirectLink }) => {
    return (
        <button
          className={`bg-white h-13.5 rounded-8 py-3 px-12 text-black font-normal tracking-0.6 text-2xl flex lg:justify-between items-center lg:gap-x-9.75 group hover:px-8 duration-500 ${style}`}
        >
          {hasLink ? (
            <Link href={redirectLink} target='_blank'>
              <span className="-mt-1">{text}</span>
            </Link>
          ) : (
            <span className="-mt-1">{text}</span>
          )}
    
          {hasArrow && <Arrow style="group-hover:rotate-45" />}
        </button>
    );
}
 
export default DefaultButton;