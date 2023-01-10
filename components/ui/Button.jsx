import Arrow from "../svgs/Arrow";

export const DefaultButton = ({text, hasArrow, style}) => {
    return ( 
        <button className={`bg-white rounded-8xl py-3 px-12 text-black font-normal tracking-tightest text-2xl flex justify-between items-center gap-x-9.75 group hover:px-8 duration-500 ${style}`}>
            <span className="-mt-1">{text}</span>
            {hasArrow && <Arrow  style="group-hover:rotate-45" />}
        </button>
    );
}

export const LargeButton = ({text, hasArrow, style}) => {
    return ( 
        <button className={`bg-white rounded-8xl py-4 px-12 text-black font-normal tracking-tightest text-3xl flex justify-between items-center gap-x-9.75 group hover:px-8 duration-500 ${style}`}>
            <span className="-mt-2">{text}</span>
            {hasArrow && <Arrow  style="h-4.1575 w-4.0725 group-hover:rotate-45" />}
        </button>
    );
}
