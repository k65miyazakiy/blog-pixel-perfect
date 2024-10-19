import Link from "next/link";

export const Tags = ({
  tags,
  enableLink = false,
}: {
  tags?: string[];
  enableLink?: boolean;
}) => {
  const enableLinkStyle = enableLink
    ? "hover:border-sky-700 hover:bg-sky-50 hover:text-sky-700 transition-colors duration-300 ease-in"
    : "";
  return tags ? (
    <ul className="flex gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className={`rounded-2xl border border-gray-400 px-2 py-0.5 font-mono text-xs text-gray-500 duration-300 ease-in before:pr-1 before:content-['#'] ${enableLinkStyle}`}
        >
          {enableLink ? <Link href={`/tags/${tag}`}>{tag}</Link> : <>{tag}</>}
        </li>
      ))}
    </ul>
  ) : (
    <></>
  );
};
