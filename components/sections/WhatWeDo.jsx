import { data } from "../../data/whatWeDo";
import WhatWeDoCard from "../cards/WhatWeDoCard";

const WhatWeDo = () => {

    return ( 
        <section className="bg-sky-900">
            {
                data.map((datum, index) => 
                    <WhatWeDoCard datum={datum} key={index} index={index} />
                )
            }
        </section>
    );
}
 
export default WhatWeDo;