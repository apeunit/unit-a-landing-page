import Title from '../ui/Title'
import Image from 'next/image';
import logo from '../../data/logos'
const Partners = () => {
    return (
        < div className='flex flex-col items-center  justify-center '>
            <Title content='Partners'/>
           <p className='text-secondary-200 -mt-12  text-center'>We partner with the  leading brands</p> 
            <div className='md:flex flex-wrap justify-center items-center hidden lg:mx-60'>
            {
                logo.map((el, index)=>{return <Image priority width={el.Width} height={el.Height} src={el.source} alt='logo' id={index} className='mx-3 my-2'/>
                })
            }
            </div>
            <div className='flex flex-wrap md:hidden justify-center w-full '>
                {
                    logo.map((el, index)=>{
                       return <div className='relative w-18.75 h-8.25 mx-1.5 my-2'> <Image id={index} src={el.source} priority fill alt='logo'/></div>


                    })
                    
                }

            </div>
            
        </div>
        
    );
}

export default Partners;