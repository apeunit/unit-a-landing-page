import Work from "../components/cards/Work";
import image from '../public/assets/images/unit8.svg'
import {DefaultButton, LargeButton} from "../components/ui/Button";

export default function Home() {
  return (
    <>
      <h1 className="text-center font-bold text-3xl text-indigo-700">
        Unit A landing Page
      </h1>
      <Work
        text="A pioneering technology company specializing in decentralized technologies that creates end-to-end digital experiences for protocols including Ethereum, Tezos, Near, Algorand, Celo and more. "
        title="Unit 8"
        imageSrc={image}
      ></Work>
      <DefaultButton text="Learn more" hasArrow={true} />

      <LargeButton text="Learn more" hasArrow={true} />
    </>
  );
}
