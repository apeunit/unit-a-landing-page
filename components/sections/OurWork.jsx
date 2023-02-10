import projects from "/data/projects";
import Work from "../cards/Work";
import { Heading2 } from "../ui/Typography";

const OurWork = () => {
  return (
    <div className="flex flex-col mt-9.75 md:mt-30.25 mb-2.75 md:mb-16">
      <div>
        <Heading2 className="lg:ml-24 ml-0">Our Work</Heading2>
      </div>
      <div className="space-y-6 md:mt-8.25 mt-4">
        {projects.map((project, index) => (
          <Work
            key={index}
            title={project.title}
            text={project.description}
            imageSrc={project.image}
            redirectLink={project.visitLink}
          />
        ))}
      </div>
    </div>
  );
};

export default OurWork;
