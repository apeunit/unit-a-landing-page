import Link from "next/link";
import Anchor from "../ui/Anchor";
import anchors from "../../data/footerAnchor";

export default function Footer() {
  return (
    <footer className="flex xl:mx-10 text-white flex-col md:flex-row  md:justify-between  mb-12 mt-17.25  md:mt-31.75 xl:mt-33.75">
      <div className="space-y-2">
        <p>Ape Unit GmbH </p>
        <p> Waldemarstraße 38,</p>
        <p> 10999 Berlin</p>
      </div>
      <div className="flex flex-col pt-12 md:pt-0 ">
        {anchors.map((anchor, anchorkey) => (
          <Anchor key={anchorkey} href={anchor.link} style="after:hidden">
            {anchor.content}
          </Anchor>
        ))}
      </div>
      <Link href="https://apeunit.com/impressum.txt">
        <p className="pt-10 md:pt-0">Impressum / Privacy</p>
      </Link>
    </footer>
  );
}
