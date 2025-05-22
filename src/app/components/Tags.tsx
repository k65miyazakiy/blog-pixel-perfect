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
    <span className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className={`font-mono text-xs ${enableLink ? "text-solarized-cyan cursor-pointer hover:text-solarized-blue transition-colors duration-300" : "text-solarized-muted"}`}
          onClick={(e) => {
            if (enableLink) {
              e.stopPropagation();
              router.push(`/tags/${tag}`);
            }
          }}
        >
          #{tag}
        </span>
      ))}
    </span>
  ) : (
    <></>
  );
};
