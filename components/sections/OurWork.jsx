import Title from "../ui/Title";
import work from "../../data/ourWork";
import Work from "../cards/Work";

const OurWork = () => {
  return (
    <div className="flex flex-col ">
      <div>
      <Title content="Our Work" styles={'lg:ml-24  ml-0'}/>

      </div>
      <div className="w-full flex flex-col gap-[32px]">
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
