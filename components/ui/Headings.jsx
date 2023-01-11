export const H1 = ({text, styles}) => {
    return (
        <h1 className={`lg:text-23xl lg:leading-15.332 ${styles}`}>{text}</h1>
    )
}

export const H2 = ({text, styles}) => {
    return (
        <h2 className={`font-medium lg:text-18.25xl lg:leading-27.3375 leading-22.125 text-14.75xl ${styles}`}>{text}</h2>
    )
}

export const H3 = ({text, styles}) => {
    return (
        <h3 className={`font-semibold lg:text-14.75xl text-9.5xl lg:leading-22.125 leading-14.25 ${styles}`}>{text}</h3>
    )
}

export const H4 = ({text, styles}) => {
    return (
        <h4 className={`font-medium lg:text-11.75xl lg:leading-17.625 leading-14.25 text-9.5xl text-white ${styles}`}>{text}</h4>
    )
}

export const H5 = ({text, styles}) => {
    return (
        <h5 className={`font-medium xl:text-9.5xl lg:leading-14.25 leading-11.25 text-3xl text-white ${styles}`}>{text}</h5>
    )
}

export const P = ({text, styles}) => {
    return (
        <p className={`font-normal lg:text-3xl leading-11.25  ${styles}`}>{text}</p>
    )
}
