import Link from "next/link";

export default function Anchor({ href, children, style }) {
  return (
    <Link
      href={href}
      className="inline-flex gap-1 md:leading-relaxed leading-loose font-normal md:text-2xl text-xl tracking-normal md:tracking-wide group"
    >
      <span
        className={`relative after:absolute after:bottom-0.5 after:left-0.5 after:right-0 after:w-auto after:h-[1px] group-hover:after:bg-transparent after:bg-black inline-block ${style}`}
      >
        {children}
      </span>
    </Link>
  );
}
