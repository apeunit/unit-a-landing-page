import Link from "next/link";
import openings from "/data/openings";
import { Heading5 } from "../ui/Typography";
import Title from "../ui/Title";
import WhiteArrow from "../svgs/WhiteArrow";


const JoinOurTeam = () => {
    return (
        <section className="py-10 md:px-0 xl:w-4.37/5 mx-auto w-full px-6.5">
            <Title className='bg-repeat-x mb-5 md:mb-8'>Join Our Team</Title>
            {openings.map((opening, index) => {
                return (
                    <Link href={opening.link} target="_blank" key={index} className={`group flex items-center justify-between gap-4.85 border-b-2 border-primary-800 py-6.37 ${opening.id === 1 ? "border-t-2" : ""}`}>
                        <Heading5 className="text-white w-69.25 md:w-auto">{opening.title}</Heading5>
                        <WhiteArrow className="group-hover:rotate-45"/>
                    </Link>
                )
            })}
        </section>
    );
}
export default JoinOurTeam;