"use client";
import { useRouter } from "next/navigation";

export const Tags = ({
  tags,
  enableLink = false,
}: {
  tags?: string[];
  enableLink?: boolean;
}) => {
  const router = useRouter();
  return tags ? (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className={`inline-flex items-center rounded-full px-3 py-0.5 text-xs font-medium ${enableLink ? "bg-indigo-100 text-indigo-700 transition-colors duration-300 hover:bg-indigo-200" : "bg-gray-100 text-gray-700"}`}
          onClick={(e) => {
            e.stopPropagation();
            router.push(`/tags/${tag}`);
          }}
        >
          {enableLink ? (
            <div className="flex cursor-pointer items-center">
              <span className="mr-1 text-indigo-500">#</span>
              {tag}
            </div>
          ) : (
            <span>
              <span className="mr-1 text-gray-500">#</span>
              {tag}
            </span>
          )}
        </li>
      ))}
    </ul>
  ) : (
    <></>
  );
};
