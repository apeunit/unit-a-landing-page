import { team } from "../../data/Team";
import { H5 } from "../ui/Headings";
import Title from "../ui/Title";
import Arrow from "../svgs/Arrow";
const OurTeam = () => {
    return ( 
        <section className="py-10 xl:px-[81px]">
            <Title content="Our Team" />

            {team.map((role) => {
                return(
                    <div className="flex items-center justify-between border-b border-primary-800 py-6">
                    <H5  text={role.title}/>
                    <Arrow style="text-white" />
                    


                    </div>
                )
            })}
        </section>
     );
}
 
export default OurTeam;