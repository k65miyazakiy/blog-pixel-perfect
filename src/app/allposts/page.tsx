import { ArticleListCard } from "../components/ArticleListCard";
import { DynamicBorder } from "../components/DynamicBorder";
import { getLatestPostsMeta } from "../lib/util";
import Link from "next/link";

export default function AllPosts() {
  const allPosts = getLatestPostsMeta(-1);
  const postCount = allPosts.length;
  
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-solarized-dark min-h-screen">
      {/* Terminal Header */}
      <div className="py-8 font-mono">
        <div className="border border-solarized-darker bg-solarized-dark p-6" data-dynamic-border-container>
          <DynamicBorder label="Repository: all commits" type="top" />
          <div className="px-4 py-4">
            <h1 className="text-2xl font-medium text-solarized-blue mb-2">
              $ git log --all --oneline
            </h1>
            <p className="text-solarized-text text-sm mb-1">
              公開されているすべての記事 ({postCount} commits)
            </p>
            <p className="text-solarized-muted text-xs">
              最新の記事から時系列順で表示しています
            </p>
          </div>
          <DynamicBorder label="Repository: all commits" type="bottom" />
        </div>
      </div>

      {/* Posts List */}
      <div className="my-8">
        <div className="font-mono text-lg text-solarized-green mb-4">
          <span className="text-solarized-muted">$&nbsp;</span>
          <span className="text-solarized-green">git log --all --oneline --graph</span>
        </div>
        
        <div className="bg-solarized-darker border border-solarized-muted p-4">
          <div className="space-y-0">
            {allPosts.map((post, index) => (
              <ArticleListCard key={post.slug} {...post.frontMatter} slug={post.slug} />
            ))}
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="my-8 font-mono">
        <div className="text-solarized-green mb-2">
          <span className="text-solarized-muted">$&nbsp;</span>
          <span>git rev-list --count HEAD</span>
        </div>
        <div className="bg-solarized-darker border border-solarized-muted p-4 text-sm">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-solarized-blue font-medium">{postCount}</div>
              <div className="text-solarized-muted text-xs">Total Commits</div>
            </div>
            <div className="text-center">
              <div className="text-solarized-green font-medium">
                {new Set(allPosts.flatMap(post => post.frontMatter.tags || [])).size}
              </div>
              <div className="text-solarized-muted text-xs">Unique Tags</div>
            </div>
            <div className="text-center">
              <div className="text-solarized-yellow font-medium">
                {allPosts[0]?.frontMatter.createdAt.split('-')[0] || 'N/A'}
              </div>
              <div className="text-solarized-muted text-xs">Latest Year</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="my-8 font-mono">
        <div className="text-solarized-green mb-2">
          <span className="text-solarized-muted">$&nbsp;</span>
          <span>git checkout main</span>
        </div>
        <div className="bg-solarized-darker border border-solarized-muted p-4 text-sm space-y-2">
          <Link
            href="/"
            className="block text-solarized-blue hover:text-solarized-cyan transition-colors duration-300"
          >
            ← ホームに戻る
          </Link>
          <Link
            href="/tags"
            className="block text-solarized-blue hover:text-solarized-cyan transition-colors duration-300"
          >
            タグ一覧を表示する →
          </Link>
        </div>
      </div>
    </div>
  );
}
