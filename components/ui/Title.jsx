import { Heading2 } from '../ui/Headings'
const Title = ({ children, className }) => {
    return (
        <div className={`bg-center text-white bg-hero-pattern bg-no-repeat max-w-max ${className}`}>
            <Heading2 className='pb-11.75 text-11.75'>{children}</Heading2>
        </div>
    );
}

export default Title;