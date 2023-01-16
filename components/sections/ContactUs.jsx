import { LargeButton } from "../ui/Button";
import { H3 } from "../ui/Headings";

const ContactUs = () => {
    return (
        <section className="bg-primary-800 mx-0.5 rounded-8 px-4  gap-16 xl:px-0 px-5 py-8 flex flex-col items-center">
            <div className="xl:w-3.73/5">
                <H3 text="Ready to talk about your project?" styles="text-center text-white text-11.75" />
                <p className="text-center text-white/90 ">Are you looking for a consultancy partnership to address your blockchain challenges? We{"’"}d love to hear from you.  Let{"’"}s build something <br />
                    amazing together.</p>
            </div>
            <LargeButton text="Schedule a call" styleSpan="mt-0.13" style="text-xl" hasArrow={true} directLink="mailto: u2467@apeunit.com"/>
        </section>
    );
}

export default ContactUs;