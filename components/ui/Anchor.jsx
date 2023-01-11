import Link from "next/link";
import { P } from "./Headings";

const Anchor = ({ href, children }) => {
  return (
    <Link href={href}>
      <P text={children} />
    </Link>
  );
};

export default Anchor;
