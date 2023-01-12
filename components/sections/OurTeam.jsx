import { team } from "../../data/Team";
import { H5 } from "../ui/Headings";
import Title from "../ui/Title";
import { WhiteArrow } from "../svgs/Arrow";
const OurTeam = () => {
    return (
        <section className="py-10 xl:px-20.25 lg:mt-11 mt-2.5 lg:mb-7">
            <Title content="Our Team" />
            {team.map((role, index) => {
                return (
                    <div key={index} className={`group flex items-center justify-between border-b-2 border-primary-800 py-6 ${role.id === 1 ? "border-t-2" : ""}`}>
                        <H5 text={role.title} styles="text-white" />
                        <WhiteArrow style="group-hover:rotate-45" />
                    </div>
                )
            })}
        </section>
    );
}
export default OurTeam;