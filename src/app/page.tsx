import Link from "next/link";
import { ArticleListCard } from "./components/ArticleListCard";
import { getLatestPostsMeta } from "./lib/util";

const HOME_POSTS_COUNT = 5;

export default async function Home() {
  const latestPosts = await getLatestPostsMeta(HOME_POSTS_COUNT);
  return (
    <div>
      <ul className="mt-4 flex flex-col items-center gap-4">
        {latestPosts.map((post) => (
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
