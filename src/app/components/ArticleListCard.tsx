"use client";
import { useRouter } from "next/navigation";
import { ArticleMeta } from "../lib/util";
import { Tags } from "./Tags";

export const ArticleListCard = (props: ArticleMeta) => {
  const router = useRouter();
  return (
    <article
      className={`w-full max-w-2xl rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md ${props.slug && "cursor-pointer"}`}
      onClick={() => {
        if (props.slug) router.push(`/posts/${props.slug.replace(/^\//, "")}`);
        return;
      }}
    >
      <h1 className="mb-3 text-xl font-bold text-gray-900 transition-colors duration-300 hover:text-indigo-600">
        {props.title}
      </h1>
      <div className="mb-4 flex items-center gap-4">
        <span className="text-sm font-medium text-gray-500">
          <time dateTime={props.createdAt}>{props.createdAt}</time>
        </span>
        {props.updatedAt && props.updatedAt !== props.createdAt && (
          <span className="text-sm text-gray-500">
            <span className="font-medium">更新日:</span> {props.updatedAt}
          </span>
        )}
        <span className="text-sm text-gray-600">
          <Tags tags={props.tags} enableLink={true} />
        </span>
      </div>
    </article>
  );
};
