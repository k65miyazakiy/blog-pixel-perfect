import { ArticleMeta } from "../lib/util";
import { Tags } from "./Tags";

export const ArticleListCard = (props: ArticleMeta) => {
  return (
    <article className="w-[768px] rounded-lg border px-4 pt-4">
      <h1 className="mb-2 text-xl">{props.title}</h1>
      <div className="mb-4 flex items-center gap-3">
        <span className="text-sm text-gray-600">{props.createdAt}</span>
        <span className="text-sm text-gray-600">
          <Tags tags={props.tags} />
        </span>
      </div>
    </article>
  );
};
