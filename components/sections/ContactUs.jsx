import LargeButton from "../ui/buttons/LargeButton";
import { Heading1 } from "../ui/Typography";

const ContactUs = () => {
    return (
        <section className="bg-primary-800 mx-0.5 rounded-8 gap-16 xl:px-0 px-5 py-5.5 md:py-16 flex flex-col items-center">
            <div className="xl:w-3.73/5">
                <Heading1 className="text-center text-white text-11.75">Ready to talk about your project?</Heading1>
                <div>
                    <p className="text-center text-white/90">Are you looking for a consultancy partnership to address your blockchain challenges? We&apos;d love to hear from you.  Let&apos;s build something</p>
                    <p className="text-center text-white/90">amazing together.</p>
                </div>
            </div>
            <LargeButton text="Schedule a call" styleSpan="mt-0.13" hasArrow={true} redirectLink="mailto:u2467@apeunit.com" />
        </section>
    );
}

export default ContactUs;