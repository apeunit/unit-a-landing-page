import Title from "../ui/Title";
import work from "../../data/ourWork";
import Work from "../cards/Work";

const OurWork = () => {
  return (
    <div className="flex flex-col mt-6 lg:mt-24 mb-7.5 lg:mb-8">
      <Title content="Our Work" styles={'ml-5 md:ml-20'}/>
      <div>
        {work.map((el, index) => (
          <Work
            key={index}
            title={el.title}
            text={el.description}
            imageSrc2={el.image}
          />
        ))}
      </div>
    </div>
  );
};

export default OurWork;
