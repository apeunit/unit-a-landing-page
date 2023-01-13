import Image from 'next/image'
import { H4 } from '../ui/Headings';

const WhatWeDo = ({index, title, description, image}) => {
    return (
        <div className='flex flex-col md:flex md:flex-row md:justify-between gap-8 md:grid-cols-2 py-8 md:py-14.25 md:mt-12.5'>
            <div className={`md:w-3/4 lg:w-153.5 xl:w-141.25 space-y-4 order-2 ${index % 2 !== 0 ? 'md:order-2' : 'md:order-1'}`}>
                <H4 styles="xl:w-141.25" text={title}/>
                <p>{description}</p>
            </div>
            <div className={`flex w-1/2 items-center md:justify-center order-1`}>
              <Image className={`${index % 2 !== 0 ? 'md:order-1' : 'md:order-2'}`} src={image} alt="image" />
            </div>
        </div>
    );
}

export default WhatWeDo;
