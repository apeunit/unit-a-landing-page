import Title from "../ui/Title";
import projects from "../../data/projects";
import Work from "../cards/Work";

const OurWork = () => {
  return (
    <div className="flex flex-col mt-6 lg:mt-24 mb-7.5 lg:mb-8 ">
      <div>
      <Title className={'lg:ml-24 ml-0'}>Our Work</Title>
      </div>
      <div className="flex flex-col w-full gap-8">
        {projects.map((el, index) => (
          <Work
            key={index}
            title={el.title}
            text={el.description}
            imageSrc={el.image}
            redirectLink={el.visitLink}
          />
        ))}
      </div>
    </div>
  );
};

export default OurWork;
