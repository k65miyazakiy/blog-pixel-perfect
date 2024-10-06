import Link from "next/link";

export const Tags = ({ tags }: { tags?: string[] }) => {
  return tags ? (
    <ul className="flex gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-2xl border border-gray-400 px-2 py-0.5 font-mono text-xs text-gray-400 before:pr-1 before:content-['#']"
        >
          <Link href={`/tags/${tag}`}>{tag}</Link>
        </li>
      ))}
    </ul>
  ) : (
    <></>
  );
};
