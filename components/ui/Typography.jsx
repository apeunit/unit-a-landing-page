export const Heading = ({ children, className, type = "default" }) => {

  const classes = {
    one:`font-medium md:font-normal md:text-14.75 text-7.25 md:leading-22 leading-11 -tracking-0.02 ${className}`,
    two:`font-normal md:text-11.75 md:leading-14.75 leading-7.15 text-6.5 text-white -tracking-0.015 md:-tracking-0.02 ${className}`,
    three:`font-normal md:text-9.5 md:leading-12.25 leading-9 text-5.75 -tracking-0.015 ${className}`,
    four: `font-normal leading-7.5 md:leading-9.5 text-xl md:text-3xl -tracking-0.015 ${className}`,
    default:`font-normal text-white text-6.5 md:text-11.75 ${className}`
  }[type]

  return (
    <div
      className={classes}
    >
      {children}
    </div>
  );
};

export const Paragraph = ({ children, className }) => {
  return (
    <p
      className={`font-normal leading-6.75 md:leading-7.5 text-4.5 md:text-6 -tracking-0.015 ${className}`}
    >
      {children}
    </p>
  );
};
