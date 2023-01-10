import Work from "../components/cards/Work";
import image1 from "../public/assets/images/unit8.svg";
import image2 from "../public/assets/images/Unit8.jpg";
import { DefaultButton, LargeButton } from "../components/ui/Button";
import Title from "../components/ui/Title";

export default function Home() {
  return (
    <>
      <h1 className="text-center font-bold text-3xl text-indigo-700">
        Unit A landing Page
      </h1>
      <Work
        text="A pioneering technology company specializing in decentralized technologies that creates end-to-end digital experiences for protocols including Ethereum, Tezos, Near, Algorand, Celo and more. "
        title="Unit 8"
        imageSrc1={image1}
        imageSrc2={image2}
      />
      <DefaultButton text="Learn more" hasArrow={true} />
      <LargeButton text="Learn more" hasArrow={true} />
      <Title content="Who we are"></Title>
    </>
  );
}
