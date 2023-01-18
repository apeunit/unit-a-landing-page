import Link from "next/link";
import Arrow from "../../svgs/Arrow";

const DefaultButton = ({ text, hasArrow, className, redirectLink }) => {
  return (
    <Link href={redirectLink} target="_blank">
      <button
        className={`bg-white h-13.5 rounded-8 py-3 px-12 text-black font-normal tracking-0.6 text-2xl flex md:justify-between items-center gap-6 lg:gap-x-9.75 group duration-500 ${className}`}
      >
        <span className="-mt-1">{text}</span>
        {hasArrow && <Arrow className="group-hover:rotate-45" />}
      </button>
    </Link>
  );
}

export default DefaultButton;