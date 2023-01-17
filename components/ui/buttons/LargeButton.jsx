import Link from "next/link";
import Arrow  from "../../svgs/Arrow";


const LargeButton = ({ text, hasArrow, styleSpan, style, hasLink, redirectLink }) => {
    return ( 
        <Link href={redirectLink} tagert="_blank">
            <button
                className={`bg-white h-17.5 rounded-8 py-4 px-12 text-black font-normal tracking-0.6 text-3xl flex justify-between items-center gap-x-9.75 group hover:px-8 duration-500 ${style}`}
            >
                {hasLink ? (
                    <span>{text}</span>
                ) : (
                    <span className={`${styleSpan}`}>{text}</span>
                )}
                {hasArrow && <Arrow style="h-4.16 w-4.07 group-hover:rotate-45" />}
            </button>
        </Link>
    );
}
 
export default LargeButton;