import {H2} from '../ui/Headings'
const Title = ({content, styles}) => {
    return (
        <div className={`bg-center text-white  bg-hero-pattern bg-no-repeat max-w-max ${styles}`}>
            <H2 text={content} styles='pb-11.75 '></H2>
        </div>
    );
}

export default Title;