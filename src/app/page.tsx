import Link from "next/link";
import { ArticleListCard } from "./components/ArticleListCard";
import { getLatestPostsMeta } from "./lib/util";

const HOME_POSTS_COUNT = 5;

export default function Home() {
  const latestPosts = getLatestPostsMeta(HOME_POSTS_COUNT);
  return (
    <div className="bg-solarized-dark mx-auto min-h-screen max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Terminal Header */}
      <div className="py-8 font-mono">
        <div className="border-solarized-darker bg-solarized-dark border p-6">
          <div className="text-solarized-muted mb-2 text-sm">
            ┌─ Repository: pixel-perfect
            ─────────────────────────────────────────┐
          </div>
          <div className="px-4 py-4">
            <h1 className="text-solarized-blue mb-2 text-3xl font-medium">
              /pixel-perfect
            </h1>
            <p className="text-solarized-text mb-1 text-sm">
              $ git log --oneline --all --graph
            </p>
          </div>
          <div className="text-solarized-muted text-sm">
            └─────────────────────────────────────────────────────────────────────┘
          </div>
        </div>
      </div>

      {/* Recent Commits Section */}
      <div className="my-8">
        <div className="text-solarized-green mb-4 font-mono text-lg">
          <span className="text-solarized-muted">$&nbsp;</span>
          <span className="text-solarized-green">
            git log --oneline -n {HOME_POSTS_COUNT}
          </span>
        </div>

        <div className="bg-solarized-darker border-solarized-muted border p-4">
          <div className="space-y-0">
            {latestPosts.map((post, index) => (
              <ArticleListCard
                key={post.slug}
                {...post.frontMatter}
                slug={post.slug}
              />
            ))}
          </div>
        </div>

        <div className="mt-6 font-mono">
          <Link
            href="/allposts"
            className="text-solarized-blue hover:text-solarized-cyan inline-flex items-center transition-colors duration-300"
          >
            <span className="text-solarized-muted">$&nbsp;</span>
            <span>git log --all</span>
            <span className="text-solarized-muted ml-2">
              // すべてのcommitを表示
            </span>
          </Link>
        </div>
      </div>

      {/* Status Section */}
      <div className="my-8 font-mono">
        <div className="text-solarized-green mb-2">
          <span className="text-solarized-muted">$&nbsp;</span>
          <span>git status</span>
        </div>
        <div className="bg-solarized-darker border-solarized-muted border p-4 text-sm">
          <div className="text-solarized-text mb-2">On branch main</div>
          <div className="text-solarized-text mb-2">
            Your branch is up to date with 'origin/main'.
          </div>
          <div className="text-solarized-green">
            nothing to commit, working tree clean
          </div>
        </div>
      </div>
    </div>
  );
}
