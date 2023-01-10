import Title from "../ui/Title";
import work from '../../data/ourWork'
import Work from '../cards/Work'

const OurWork = () => {

    return (
        <div className="flex flex-col ">
            <Title content='Our Work'/>
            <div>
            {
                work.map((el, index) => (
                    <Work key={index} title={el.title} text={el.description} imageSrc1={el.image1} imageSrc2={el.image2} />
                ))
            }
            </div>
        </div>
    );
}

export default OurWork;