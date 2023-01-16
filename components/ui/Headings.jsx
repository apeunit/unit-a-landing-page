export const H1 = ({text, styles}) => {
    return (
        <h1 className={`md:text-23 md:leading-15.33 ${styles}`}>{text}</h1>
    )
}

export const H2 = ({text, styles}) => {
    return (
        <h2 className={`font-medium md:text-18.25 md:leading-27.34 leading-22.13 text-11.75 ${styles}`}>{text}</h2>
    )
}

export const H3 = ({text, styles}) => {
    return (
        <h3 className={`font-semibold md:text-14.75 text-9.5 md:leading-22.13 leading-14.25 ${styles}`}>{text}</h3>
    )
}

export const H4 = ({text, styles}) => {
    return (
        <h4 className={`md:text-11.75 md:leading-17.63 leading-14.25 text-9.5 text-white ${styles}`}>{text}</h4>
    )
}

export const H5 = ({text, styles}) => {
    return (
        <h5 className={`font-medium md:text-9.5 md:leading-14.25 leading-11.25 text-2xl ${styles}`}>{text}</h5>
    )
}

export const P = ({text, styles}) => {
    return (
        <p className={`font-normal md:leading-11.25 md:text-3xl ${styles}`}>{text}</p>
    )
}
