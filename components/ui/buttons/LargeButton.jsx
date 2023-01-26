import Link from "next/link";
import Arrow from "../../svgs/Arrow";

const LargeButton = ({ text, hasArrow, styleSpan, className, hasLink, redirectLink }) => {
    return (
        <Link href={redirectLink} tagert="_blank">
            <button
                className={`bg-white w-75 md:w-95.5 mx-auto h-17.5 rounded-11.25 py-4 px-6.5 gap-x-4 md:px-12 text-black font-normal tracking-0.6 text-3xl flex justify-between items-center group duration-500 ${className}`}
            >
                {hasLink ? (
                    <span>{text}</span>
                ) : (
                    <span className={styleSpan}>{text}</span>
                )}
                {hasArrow && <Arrow className="h-4.16 w-4.07 group-hover:rotate-45" />}
            </button>
        </Link>
    );
}

export default LargeButton;