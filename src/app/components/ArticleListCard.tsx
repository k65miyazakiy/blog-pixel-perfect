"use client";
import { useRouter } from "next/navigation";
import { ArticleMeta } from "../lib/util";
import { Tags } from "./Tags";

export const ArticleListCard = (props: ArticleMeta) => {
  const router = useRouter();
  return (
    <article
      className={`commit-line bg-solarized-dark p-4 transition-all duration-300 hover:bg-solarized-darker ${props.slug && "cursor-pointer"} ml-6 border-l border-solarized-muted max-w-full overflow-hidden`}
      onClick={() => {
        if (props.slug) router.push(`/posts/${props.slug.replace(/^\//, "")}`);
        return;
      }}
    >
      <div className="font-mono text-sm flex flex-wrap items-start gap-x-2">
        <span className="text-solarized-yellow whitespace-nowrap">{props.createdAt}</span>
        <span className="text-solarized-muted">│</span>
        <span className="text-solarized-blue whitespace-nowrap">feat:</span>
        <span className="text-solarized-text hover:text-solarized-light transition-colors break-words min-w-0 flex-1">
          {props.title}
        </span>
      </div>
      <div className="mt-1 ml-12 font-mono text-sm max-w-full overflow-hidden">
        <Tags tags={props.tags} enableLink={true} />
      </div>
    </article>
  );
};
