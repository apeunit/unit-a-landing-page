import openings from "/data/openings";
import {Heading2, Heading3} from "../ui/Typography";
import WhiteArrow from "../svgs/WhiteArrow";

const JoinOurTeam = () => {
    return (
        <section className="py-10 md:px-0 xl:w-4.37/5 mx-auto w-full px-6.5">
            <Heading2 className='bg-repeat-x'>Join Our Team</Heading2>
            {openings.map((opening, index) => {
                return (
                    <div key={index} className={`group flex items-center justify-between gap-4.85 border-b-2 border-primary-800 py-6.37 ${opening.id === 1 ? "border-t-2" : ""}`}>
                        <Heading3 className="text-white w-69.25 md:w-auto">{opening.title}</Heading3>
                        <WhiteArrow className="group-hover:rotate-45"/>
                    </div>
                )
            })}
        </section>
    );
}
export default JoinOurTeam;