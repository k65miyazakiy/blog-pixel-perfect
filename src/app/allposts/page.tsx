import { ArticleListCard } from "../components/ArticleListCard";
import { getLatestPostsMeta } from "../lib/util";

export default function AllPosts() {
  const allPosts = getLatestPostsMeta(-1);
  const postCount = allPosts.length;
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mt-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900">
          All Posts{" "}
          <span className="text-sm text-gray-500">（{postCount}）</span>
        </h1>
      </div>
      <ul className="my-8 space-y-6">
        {allPosts.map((post) => (
          <li key={post.slug} className="flex justify-center">
            <div className="w-full max-w-2xl">
              <ArticleListCard {...post.frontMatter} slug={post.slug} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
