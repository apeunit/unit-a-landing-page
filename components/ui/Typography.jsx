export const Heading1 = ({ children, className }) => {
    return (
        <h1 className={`md:text-23 md:leading-15.33 ${className}`}>{children}</h1>
    )
}

export const Heading2 = ({ children, className }) => {
    return (
        <h2 className={`font-bold md:text-18.25 md:leading-22.75 leading-18.5 text-14.75 ${className}`}>{children}</h2>
    )
}

export const Heading3 = ({ children, className }) => {
    return (
        <h3 className={`font-semibold md:text-14.75 text-9.5 md:leading-22.13 leading-14.25 ${className}`}>{children}</h3>
    )
}

export const Heading4 = ({ children, className }) => {
    return (
        <h4 className={`md:text-11.75 md:leading-17.63 leading-14.25 text-9.5 text-white ${className}`}>{children}</h4>
    )
}

export const Heading5 = ({ children, className }) => {
    return (
        <h5 className={`font-medium md:text-9.5 md:leading-12 leading-7.5 text-2xl ${className}`}>{children}</h5>
    )
}

export const Paragraph = ({ children, className }) => {
    return (
        <p className={`font-normal md:leading-11.25 md:text-3xl ${className}`}>{children}</p>
    )
}
