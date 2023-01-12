import offers from "../../data/offers";
import WhatWeDoCard from "../cards/WhatWeDoCard";
import Title from "../ui/Title";
import { motion } from "framer-motion";
const WhatWeDo = () => {
    return ( 
        <section className="px-6.5 xl:w-87.38 mx-auto md:px-0">
            <Title content="What we do" />
            {
                offers.map((offer, index) => <WhatWeDoCard {...offer} key={index} index={index} />)
            }

        </section>
    );
}

export default WhatWeDo;
// mb-12.5 lg:mb-30.75