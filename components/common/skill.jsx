import Link from "next/link";

export default function Skill({ name, href, children }) {
  return (
    <Link
      href={href ?? ""}
      target="_blank"
      className="
        skill-inner-shadow
        inline-flex
        items-center
        self-end
        rounded-md
        border
        border-border
        bg-card
        px-2
        py-1
        text-sm
        text-foreground
      "
    >
      <div className="size-4 shrink-0">
        {children}
      </div>

      <p className="ml-1 text-sm font-bold">
        {name}
      </p>
    </Link>
  );
}