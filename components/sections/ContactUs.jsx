import LargeButton from "../ui/buttons/LargeButton";
import { Heading2, Paragraph } from "../ui/Typography";

const ContactUs = () => {
    return (
        <section className="bg-primary-800 mx-0.5 rounded-8 gap-8 md:gap-16 xl:px-0 px-4 py-12 md:py-16 flex flex-col items-center">
            <div className="xl:w-3.73/5">
                <Heading2 className="text-center">Ready to talk about your project?</Heading2>
                <Paragraph className="mt-3 text-center text-white">
                    Are you looking for a consultancy partnership to address your blockchain challenges?
                    <br className="hidden md:block" />We&apos;d love to hear from you. Let&apos;s build something amazing together.
                </Paragraph>
            </div>
            <LargeButton text="Schedule a call" styleSpan="mt-0.13" hasArrow={true} redirectLink="mailto:u2467@apeunit.com" />
        </section>
    );
}

export default ContactUs;