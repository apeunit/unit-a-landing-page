import { DefaultButton, LargeButton } from "../components/ui/Button";
import Title from "../components/ui/Title";
import Wrapper from "../components/wrapper/Wrapper";

export default function Home() {
  return (
    <>
    <section className="mx-auto container max-w-[70%]">
        <h1 className="text-center font-bold text-3xl text-indigo-700">Unit A landing Page</h1>;
        <DefaultButton text="Learn more" hasArrow={true} />
        <LargeButton text="Learn more" hasArrow={true} />
        <Title content='Who we are'></Title>
        </section>
    </>
  )
}
