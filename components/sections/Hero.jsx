import Image from "next/image";
import Link from "next/link";
import { H4 } from "../ui/Headings";
import HeroBall from "../../public/assets/images/hero-ball.webp";
import HeroPrism from "../../public/assets/images/hero-prism.webp";
import Scroll from "../../public/assets/images/scroll.webp";
import UnderlineTop from "../../public/assets/images/underline-top.webp";
import UnderlineBottom from "../../public/assets/images/underline-bottom.webp";

const Hero = () => {
    return ( 
        <section className="flex flex-col pt-9.25">
            <H4 text="Unit A" styles="text-white mb-11.75" />
            <Image src={HeroBall} className="self-end lg:mr-15.15 hidden lg:flex" />
            <h3 className={`font-semibold md:text-14.75xl text-3xl lg:leading-22.125 leading-14.25 text-white  mt-12.5 lg:mt-4.15 mb-23 w-full lg:w-239 xl:w-295.25 md:w-239 xl:ml-19.75 mx-auto`}>
                <span>A </span> 
                <p className="inline-flex">
                     <span className="relative">
                        joint-force b
                        <Image src={UnderlineTop} className="absolute bottom-0 left-0" />
                     </span>
                </p>
                <span>etween African & European developers & organizations working in </span> 
                <p className="inline-flex">
                     <span className="relative">
                        blockchain technology
                        <Image src={UnderlineBottom} className="absolute bottom-0 left-0" />
                     </span>
                </p>
            </h3>

            <div className="flex justify-center lg:grid lg:grid-cols-2 ml-4.75">
                <Image src={HeroPrism} className="hidden lg:block" />
                <Link href="#">
                    <Image src={Scroll} />
                </Link>
            </div>
        </section>
    );
}
 
export default Hero;