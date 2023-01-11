import {DefaultButton, LargeButton} from "../components/ui/Button";
import Wrapper from "../components/wrapper/Wrapper";
import WhatWeDo from "../components/sections/WhatWeDo";
import ContactUs from "../components/sections/ContactUs";
export default function Home() {
  return (
    <>
      <Wrapper >
        <h1 className="text-3xl font-bold text-center text-indigo-700">Unit A landing Page</h1>;
        <DefaultButton text="Learn more" hasArrow={true} />
        <LargeButton text="Learn more" hasArrow={true} />
        <WhatWeDo />
         <ContactUs />
      </Wrapper>
    </>
  )
}
