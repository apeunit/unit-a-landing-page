import Image from 'next/image'
import { H4 } from '../ui/Headings';
const WhatWeDo = ({datum, index}) => {
    console.log(index);
    
    return (
        <div className='grid grid-col-1 gap-8 md:gap-0 md:grid-cols-2 lg:justify-between'>
            <div className={`min-w-84.5 lg:w-153.5 xl:w-141.25 space-y-4 order-2 ${index % 2 !== 0 ? 'md:order-2' : 'md:order-1'}`}>
                <H4 text={datum.title}/>
                <p className="text-black">{datum.description}</p>
            </div>
            <div className='flex items-center lg:justify-center order-1'>
              <Image className={`w-47.3375 h-44.75 xl:w-66 xl:h-61 lg:w-47.3375 lg:h-43.675 ${index % 2 !== 0 ? 'md:order-1' : 'md:order-2'}`} width={100} height={100} src={datum.imagePath} alt="image" />
            </div>
        </div>
    );
}

export default WhatWeDo;
