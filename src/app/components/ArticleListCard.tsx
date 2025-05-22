"use client";
import { useRouter } from "next/navigation";
import { ArticleMeta } from "../lib/util";
import { Tags } from "./Tags";

export const ArticleListCard = (props: ArticleMeta) => {
  const router = useRouter();
  return (
    <article
      className={`commit-line w-full bg-solarized-dark p-4 transition-all duration-300 hover:bg-solarized-darker ${props.slug && "cursor-pointer"} ml-6 border-l border-solarized-muted`}
      onClick={() => {
        if (props.slug) router.push(`/posts/${props.slug.replace(/^\//, "")}`);
        return;
      }}
    >
      <div className="font-mono text-sm">
        <span className="text-solarized-yellow">{props.createdAt}</span>
        <span className="mx-2 text-solarized-muted">│</span>
        <span className="text-solarized-blue">feat:</span>
        <span className="ml-2 text-solarized-text hover:text-solarized-light transition-colors">
          {props.title}
        </span>
      </div>
      <div className="mt-1 ml-12 font-mono text-sm">
        <Tags tags={props.tags} enableLink={true} />
      </div>
    </article>
  );
};
