import { Heading2 } from '../ui/Typography'
const Title = ({ children, className }) => {
    return (
        <div className={`text-white ${className}`}>
            <Heading2 className='text-11.75'>{children}</Heading2>
        </div>
    );
}

export default Title;