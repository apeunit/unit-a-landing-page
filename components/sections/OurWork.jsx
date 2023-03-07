import projects from "/data/projects";
import Work from "../cards/Work";
import { Heading } from "../ui/Typography";

const OurWork = () => {
  return (
    <div className="flex flex-col w-full mt-9.75 md:mt-30.25 mb-2.75 md:mb-16">
      <div>
        <Heading className="xl:ml-11.25 ml-0" type="two">Our work</Heading>
      </div>
      <div className="space-y-6 md:mt-8.25 mt-4">
        {projects.map((project, index) => (
          <Work
            key={index}
            title={project.title}
            text={project.description}
            imageSrc={project.image}
            imageAlt={project.imageAlt}
            redirectLink={project.visitLink}
          />
        ))}
      </div>
    </div>
  );
};

export default OurWork;
