import offers from "/data/offers";
import WhatWeDoCard from "../cards/WhatWeDoCard";
import { Heading2 } from "../ui/Typography";
const WhatWeDo = () => {
    return (
        <section className="xl:w-3.7/4 mx-auto md:px-0">
            <Heading2>What we do </Heading2>
            {
                offers.map((offer, index) => <WhatWeDoCard {...offer} key={index} index={index} />)
            }

        </section>
    );
}

export default WhatWeDo;
