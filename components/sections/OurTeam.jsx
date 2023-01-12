import { team } from "../../data/Team";
import { H5 } from "../ui/Headings";
import Title from "../ui/Title";
import { WhiteArrow } from "../svgs/Arrow";
const OurTeam = () => {
    return (
        <section className="py-10 md:px-0 xl:w-87.38 mx-auto w-full  px-6.5">
            <Title content="Join Our Team" />
            {team.map((role, index) => {
                return (
                    <div key={index} className={`group flex items-center justify-between  gap-4.85 border-b-2 border-primary-800 py-6 ${role.id === 1 ? "border-t-2" : ""}`}>
                        <H5 text={role.title} styles="text-white w-69.25 md:w-auto" />
                        <WhiteArrow style="group-hover:rotate-45" />
                    </div>
                )
            })}
        </section>
    );
}
export default OurTeam;