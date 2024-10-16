import Link from "next/link";
import { ArticleListCard } from "./components/ArticleListCard";
import { getLatestPostsMeta } from "./lib/util";

const HOME_POSTS_COUNT = 5;

export default function Home() {
  const latestPosts = getLatestPostsMeta(HOME_POSTS_COUNT);
  return (
    <div className="flex flex-col items-center">
      <ul className="my-4 flex w-[768px] flex-col items-center gap-4">
        {latestPosts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts${post.slug}`}>
              <ArticleListCard {...post.frontMatter} />
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex w-[768px] justify-end">
        <Link href="/allposts">
          <div className="text-sm text-gray-500">READ MORE...</div>
        </Link>
      </div>
    </div>
  );
}
