import offers from "/data/offers";
import WhatWeDoCard from "../cards/WhatWeDoCard";
import { Heading } from "../ui/Typography";
const WhatWeDo = () => {
    return (
        <section className="xl:w-3.7/4 mx-auto md:px-0">
            <Heading type="two" className="mb-1 md:mb-23.25">What we do</Heading>
            {
                offers.map((offer, index) => <WhatWeDoCard {...offer} key={index} index={index} />)
            }
        </section>
    );
}

export default WhatWeDo;
