import Link from "next/link";
import { ArticleListCard } from "../components/ArticleListCard";
import { getLatestPostsMeta } from "../lib/util";

export default function AllPosts() {
  const allPosts = getLatestPostsMeta(-1);
  const postCount = allPosts.length;
  return (
    <div className="flex flex-col items-center">
      <div className="mt-4 flex items-end">
        <h1 className="pl-4 text-lg">All Posts</h1>
        <div className="pb-[5px] text-xs">（{postCount}）</div>
      </div>
      <ul className="my-4 flex w-[768px] flex-col items-center gap-4">
        {allPosts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts${post.slug}`}>
              <ArticleListCard {...post.frontMatter} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
