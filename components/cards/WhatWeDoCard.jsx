import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Image from 'next/image'
import { Heading, Paragraph } from '../ui/Typography';

const WhatWeDoCard = ({ index, title, description, image }) => {
    const [screenSize, setScreenSize] = useState(typeof window !== "undefined" && window.innerWidth);
    const boxVariants = {
        visible: { opacity: 1, x: 0, transition: { duration: 0.9 } },
        hidden: { opacity: 0, x: screenSize > 640 ? (index % 2 == 0 ? 150 : -150) : 0 },
    };

    useEffect(() => {
        const setter = () => setScreenSize(window.innerWidth);
        (() => {
            if (window) {
                setter()
                window.addEventListener('resize', setter)
            }
        })();
        return () => window?.removeEventListener('resize', setter)
    }, []);

    const control = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        inView ? control.start("visible") : control.start("hidden");
    }, [control, inView]);

    return (
        <div className='flex flex-col gap-8 py-8 overflow-x-hidden md:flex md:flex-row md:justify-between md:grid-cols-2 md:py-0 md:mb-45'>
            <div className={`md:w-3/4 lg:w-153.5 xl:w-141.25 space-y-4 self-center order-2 ${index % 2 !== 0 ? 'md:order-2' : 'md:order-1'}`}>
                <Heading className="text-white xl:w-141.25" type="three">{title}</Heading>
                <Paragraph>{description}</Paragraph>
            </div>
            <motion.div
                ref={ref}
                variants={boxVariants}
                initial="hidden"
                animate={control}
                className="flex items-center order-1 w-1/2 md:justify-center">
                <Image className={`${index % 2 !== 0 ? 'md:order-1' : 'md:order-2'}`} src={image} alt="image" />
            </motion.div>
        </div>
    );
}

export default WhatWeDoCard;
