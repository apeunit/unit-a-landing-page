import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import { Heading4 } from '../ui/Typography';
import polygon from '../../public/assets/images/polygon.webp'
import ballImage from "/public/assets/images/ball.webp";
import arcImage from "/public/assets/images/arc.webp";
import diamondImage from "/public/assets/images/diamond.webp";

 


const WhatWeDoCard = ({ title, image }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      });
  
      const target = document.querySelector('.anim1');
      console.log(target)
      observer.observe(target);
  
      return () => {
        observer.disconnect();
      };
    }, []);
  

    return (
        <div className='flex flex-col'>
        <div className='flex flex-col md:flex md:flex-row md:justify-between  gap-8 md:grid-cols-2 py-8 md:py-14.25 md:mt-12.5'>
        <div className='md:w-3/4 lg:w-153.5 xl:w-141.25 space-y-4 order-2'>
            <Heading4 text={title}/>
            <p>We believe that blockchain technology could have the same revolutionary potential as the internet and will change how we cooperate.</p>
        </div>
        <div className={`flex w-1/2 items-center md:justify-center order-1`}>
          {/* <Image className={` anim1 ${index % 2 !== 0 && isVisible ? 'md:order-1 anim' : 'md:order-2'}`} src={image} alt="image" /> */}
          <Image className={`anim1 ${isVisible? 'anim': ''}`} src={polygon} alt="image" /> 
        </div>
        
    </div>
    <div className='flex flex-col md:flex md:flex-row md:justify-between  gap-8 md:grid-cols-2 py-8 md:py-14.25 md:mt-12.5'>
        <div className='md:w-3/4 lg:w-153.5 xl:w-141.25 space-y-4 order-1'>
            <Heading4 text={title}/>
            <p>We believe that blockchain technology could have the same revolutionary potential as the internet and will change how we cooperate.</p>
        </div>
        <div className={`flex w-1/2 items-center md:justify-center order-1`}>
          {/* <Image className={` anim1 ${index % 2 !== 0 && isVisible ? 'md:order-1 anim' : 'md:order-2'}`} src={image} alt="image" /> */}
          <Image className={`anim1 ${isVisible? 'anim3': ''}`} src={ballImage} alt="image" /> 
        </div>
        
    </div>
    <div className='flex flex-col md:flex md:flex-row md:justify-between  gap-8 md:grid-cols-2 py-8 md:py-14.25 md:mt-12.5'>
        <div className='md:w-3/4 lg:w-153.5 xl:w-141.25 space-y-4 order-2'>
            <Heading4 text={title}/>
            <p>We believe that blockchain technology could have the same revolutionary potential as the internet and will change how we cooperate.</p>
        </div>
        <div className={`flex w-1/2 items-center md:justify-center order-1`}>
          {/* <Image className={` anim1 ${index % 2 !== 0 && isVisible ? 'md:order-1 anim' : 'md:order-2'}`} src={image} alt="image" /> */}
          <Image className={`anim1 ${isVisible? 'anim': ''}`} src={arcImage} alt="image" /> 
        </div>
        
    </div>
    <div className='flex flex-col md:flex md:flex-row md:justify-between  gap-8 md:grid-cols-2 py-8 md:py-14.25 md:mt-12.5'>
        <div className='md:w-3/4 lg:w-153.5 xl:w-141.25 space-y-4 order-1'>
            <Heading4 text={title}/>
            <p>We believe that blockchain technology could have the same revolutionary potential as the internet and will change how we cooperate.</p>
        </div>
        <div className={`flex w-1/2 items-center md:justify-center order-1`}>
          {/* <Image className={` anim1 ${index % 2 !== 0 && isVisible ? 'md:order-1 anim' : 'md:order-2'}`} src={image} alt="image" /> */}
          <Image className={`anim1 ${isVisible? 'anim3': ''}`} src={diamondImage} alt="image" /> 
        </div>
        
    </div>
    </div>
    );
}

export default WhatWeDoCard;
