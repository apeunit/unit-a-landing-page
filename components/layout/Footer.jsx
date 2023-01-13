import Link from "next/link";
import Anchor from "../ui/Anchor";
import anchors from "../../data/footerAnchor";
import { P } from "../ui/Headings";

const Footer = () => {
  return (
    <footer className="flex text-3xl text-white flex-col md:flex-row md:justify-between mb-12 mt-10.5 md:mt-26">
      <div className="space-y-2">
        <P text="Ape Unit GmbH" />
        <P text="Waldemarstraße 38," />
        <P text="10999 Berlin" />
      </div>
      <div className="flex flex-col pt-12 md:pt-0 ">
        {anchors.map((anchor, anchorkey) => (
          <Anchor key={anchorkey} href={anchor.link}>
            {anchor.content}
          </Anchor>
        ))}
      </div>
      <Link href="https://apeunit.com/impressum.txt" target='_blank'>
        <P styles="pt-10 md:pt-0" text="Impressum/Privacy" />
      </Link>
    </footer>
  );
};

export default Footer;
