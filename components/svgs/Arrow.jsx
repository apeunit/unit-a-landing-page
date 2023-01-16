export const Arrow = ({ style }) => {
    return (
        <svg className={`w-2.79 h-2.79 duration-500  ${style}`} width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.86365 1.13672L14 1.13672V12.2731" stroke="black" strokeWidth="1.5" />
            <line x1="13.894" y1="1.03033" x2="0.530341" y2="14.394" stroke="black" strokeWidth="1.5" />
        </svg>
    );
}

export const WhiteArrow = ({ style }) => {
    return (
        <svg className={`w-8.72 h-8.68 duration-500 text-black ${style}`} width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.36368 1.13623L36 1.13623V29.7726" stroke="white" strokeWidth="2" />
            <path d="M35.5 1.50049L1.13637 35.8641" stroke="white" strokeWidth="2" />
        </svg>

    )
};

