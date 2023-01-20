import Link from "next/link";
import { Paragraph } from "./Typography";

const Anchor = ({ href, children }) => {
  return (
    <Link href={href} target='_blank'>
      <Paragraph>{children}</Paragraph>
    </Link>
  );
};

export default Anchor;
