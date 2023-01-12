import { LargeButton } from "../ui/Button";
import { H3 } from "../ui/Headings";

const ContactUs = () => {
    return (
        <section className="bg-primary-800 mx-0.5 rounded-8xl gap-16 xl:px-0 px-5 py-8 flex flex-col items-center">
            <div className="xl:w-[74.69%]">
                <H3 text="Ready to talk about your project?" styles="text-center text-white" />
                <p className="text-white/90 text-center">Are you looking for a consultancy partnership to address your blockchain challenges? We{"’"}d love to hear from you.  Let{"’"}s build something <br />
                    amazing together.</p>
            </div>
            <LargeButton text="Schedule a call" styleSpan=" mt-[0.5px]" style="text-xl" hasArrow={true} />
        </section>
    );
}

export default ContactUs;