import Link from "next/link";
import Anchor from "../ui/Anchor";
import socialMedias from "/data/socialMedias";
import { Paragraph } from "../ui/Typography";

const Footer = () => {
  return (
    <footer className="flex text-3xl text-white flex-col md:flex-row md:justify-between md:mb-26 mb-8 mt-10.5 md:mt-36.25">
      <div className="space-y-2">
        <Paragraph>Ape Unit GmbH</Paragraph>
        <Paragraph>Waldemarstraße 38,</Paragraph>
        <Paragraph>10999 Berlin</Paragraph>
      </div>
      <div className="flex flex-col pt-12 md:pt-0">
        {socialMedias.map((socialMedia, index) => (
          <Anchor key={index} href={socialMedia.link}>
            {socialMedia.content}
          </Anchor>
        ))}
      </div>
      <Link href="https://apeunit.com/impressum.txt" target='_blank'>
        <Paragraph className="pt-10 md:pt-0">Impressum/Privacy</Paragraph>
      </Link>
    </footer>
  );
};

export default Footer;
