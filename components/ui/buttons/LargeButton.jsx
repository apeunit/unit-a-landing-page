import Link from "next/link";
import Arrow from "../../svgs/Arrow";
import { Heading } from "../Typography";

const LargeButton = ({ text, hasArrow, styleSpan, className, hasLink, redirectLink }) => {
    return (
        <Link href={redirectLink} target="_blank"
            className={`bg-white w-58.75 md:w-95.5 mx-auto h-17.5 rounded-11.25 py-3 px-6.5 gap-x-7.5 md:px-12 text-black font-normal tracking-0.6 flex justify-between items-center group duration-500 ${className}`}
        >
            {hasLink ? (
                <Heading type="three">{text}</Heading>
            ) : (
                <Heading type="three" className={styleSpan}>{text}</Heading>
            )}
            {hasArrow && <Arrow className="h-4.16 w-4.07 group-hover:rotate-45" />}
        </Link>
    );
}

export default LargeButton;