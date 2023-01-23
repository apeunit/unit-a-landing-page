import Title from "../ui/Title";
import projects from "/data/projects";
import Work from "../cards/Work";

const OurWork = () => {
  return (
    <div className="flex flex-col mt-6 lg:mt-36 mb-7.5 lg:mb-16">
      <div>
        <Title className="lg:ml-24 ml-0">Our Work</Title>
      </div>
      <div className="flex flex-col w-full gap-8 xl:mt-17">
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
