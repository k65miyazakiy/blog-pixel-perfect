import { ArticleMeta } from "../lib/util";

export const ArticleListCard = (props: ArticleMeta) => {
  return (
    <article className="w-[768px] rounded-lg border p-4">
      <h1 className="mb-2 text-xl">{props.title}</h1>
      <div className="mb-4 flex items-center gap-3">
        <span className="text-sm text-gray-600">{props.createdAt}</span>
        <span className="text-sm text-gray-600">{props.tags}</span>
      </div>
    </article>
  );
};
