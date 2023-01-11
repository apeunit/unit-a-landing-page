import { data } from "/data/whatWeDo.js";
import WhatWeDoCard from "../cards/WhatWeDoCard";
import Title from "../ui/Title";

const WhatWeDo = () => {
    return ( 
        <section className="px-6.5 md:px-20">
            <Title content="What we do" />
            {
                data.map((datum, index) => <WhatWeDoCard {...datum} key={index} index={index} />)
            }
        </section>
    );
}

export default WhatWeDo;