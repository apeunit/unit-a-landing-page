import offers from "../../data/offers";
import WhatWeDoCard from "../cards/WhatWeDoCard";
import Title from "../ui/Title";

const WhatWeDo = () => {
    return ( 
        <section className="px-6.5 md:px-20">
            <Title content="What we do" />
            {
                offers.map((offer, index) => <WhatWeDoCard {...offer} key={index} index={index} />)
            }
        </section>
    );
}

export default WhatWeDo;