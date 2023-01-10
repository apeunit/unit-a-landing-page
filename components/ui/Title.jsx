import {H3} from '../ui/Headings'
const Title = ({content}) => {
    return (
        <div className='bg-center text-white  bg-hero-pattern bg-no-repeat max-w-max'>
            <H3 text={content} styles='pb-11.75 '></H3>
        </div>
    );
}

export default Title;