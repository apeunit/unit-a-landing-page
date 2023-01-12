import offers from "../../data/offers";
import WhatWeDoCard from "../cards/WhatWeDoCard";
import Title from "../ui/Title";

const WhatWeDo = () => {
    return ( 
        <section className="px-6.5 md:px-20 mt-7.5 lg:mt-8 mb-5 lg:mb-16.5 ">
            <Title content="What we do" />
            {
                offers.map((offer, index) => <WhatWeDoCard {...offer} key={index} index={index} />)
            }
        </section>
    );
}

export default WhatWeDo;
// mb-12.5 lg:mb-30.75