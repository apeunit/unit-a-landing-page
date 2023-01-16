import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from 'next/image'
import { Heading4 } from '../ui/Headings';

const WhatWeDo = ({index, title, description, image}) => {
    const boxVariant = {
        visible: { opacity: 1, scale: 1, x: 0 , transition: {duration: 0.5} },
        hidden: { opacity: 0, scale: 0, x: index % 2 == 0 ? 100 : -100 },
    }
    
    const control = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
          control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);
    
    return (
        <div className='flex flex-col md:flex md:flex-row md:justify-between gap-8 md:grid-cols-2 py-8 md:py-14.25 md:mt-12.5'>
            <div className={`md:w-3/4 lg:w-153.5 xl:w-141.25 space-y-4 order-2 ${index % 2 !== 0 ? 'md:order-2' : 'md:order-1'}`}>
                <Heading4 className="xl:w-141.25">{title}</Heading4> 
                <p>{description}</p>
            </div>
            <motion.div 
                ref={ref}
                variants={boxVariant}
                initial="hidden"
                animate={control}
                className={`flex w-1/2  items-center md:justify-center order-1`}>
              <Image className={`${index % 2 !== 0 ? 'md:order-1' : 'md:order-2'}`} src={image} alt="image" />
            </motion.div>
        </div>
    );
}

export default WhatWeDo;
