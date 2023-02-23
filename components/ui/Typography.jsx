<<<<<<< HEAD
import classNames from "classnames";

export const Heading = ({ children, className, type }) => {
  return (
    <div
      className={classNames({
        [`font-medium md:font-normal md:text-14.75 text-7.25 md:leading-22 leading-11 -tracking-0.02 ${className}`]:
          type === "one",
        [`font-normal md:text-11.75 md:leading-14.75 leading-7.15 text-6.5 text-white -tracking-0.015 md:-tracking-0.02 ${className}`]:
          type === "two",
        [`font-normal md:text-9.5 md:leading-12.25 leading-9 text-5.75 -tracking-0.015 ${className}`]:
          type === "three",
        [`font-normal leading-7.5 md:leading-9.5 text-xl md:text-3xl -tracking-0.015 ${className}`]:
          type === "four",
      })}
    >
      {children}
    </div>
  );
};
=======
import classNames from "classnames"

export const Heading = ({ children, className, type}) => {
    return (
        <div className={
            classNames(
                {[`${className} font-medium md:font-normal md:text-14.75 text-7.25 md:leading-22 leading-11 -tracking-0.02`]:type==='one',
                [`font-normal md:text-11.75 md:leading-14.75 leading-7.15 text-6.5 text-white -tracking-0.015 md:-tracking-0.02 ${className}`]:type==='two',
                [`font-normal md:text-9.5 md:leading-12.25 leading-9 text-5.75 -tracking-0.015 ${className}`]:type==='three',
                [`font-normal leading-7.5 md:leading-9.5 text-xl md:text-3xl -tracking-0.015 ${className}`]: type==='four',
            
})}>{children}</div>)
}
>>>>>>> cecdb3255f7d3f6025fc1f7341ba1c2239115ff6

export const Paragraph = ({ children, className }) => {
  return (
    <p
      className={`font-normal leading-6.75 md:leading-7.5 text-4.5 md:text-6 -tracking-0.015 ${className}`}
    >
      {children}
    </p>
  );
};
