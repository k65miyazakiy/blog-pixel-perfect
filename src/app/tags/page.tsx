import { getPostsMeta } from "@/app/lib/util";
import Link from "next/link";
import { DynamicBorder } from "@/app/components/DynamicBorder";

export default function TagsPage() {
  // 全投稿からタグを抽出してカウント
  const posts = getPostsMeta();
  const tagCountMap = new Map<string, number>();

  // 各投稿のタグを集計
  posts.forEach((post) => {
    if (post.frontMatter.tags) {
      post.frontMatter.tags.forEach((tag: string) => {
        const currentCount = tagCountMap.get(tag) || 0;
        tagCountMap.set(tag, currentCount + 1);
      });
    }
  });

  // タグ数でソート（降順）
  const sortedTags = Array.from(tagCountMap.entries()).sort(
    (a, b) => b[1] - a[1],
  );

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-solarized-dark min-h-screen">
      {/* Terminal Header */}
      <div className="py-8 font-mono">
        <div className="border border-solarized-darker bg-solarized-dark p-6" data-dynamic-border-container>
          <DynamicBorder label="Repository: tag index" type="top" />
          <div className="px-4 py-4">
            <h1 className="text-2xl font-medium text-solarized-blue mb-2">
              $ git tag --list
            </h1>
            <p className="text-solarized-text text-sm mb-1">
              登録されているタグ一覧 ({sortedTags.length} tags)
            </p>
            <p className="text-solarized-muted text-xs">
              タグをクリックすると関連記事を表示します
            </p>
          </div>
          <DynamicBorder label="Repository: tag index" type="bottom" />
        </div>
      </div>

      {/* Tags List */}
      <div className="my-8">
        <div className="font-mono text-lg text-solarized-green mb-4">
          <span className="text-solarized-muted">$&nbsp;</span>
          <span className="text-solarized-green">git tag --sort=-version:refname</span>
        </div>
        
        <div className="bg-solarized-darker border border-solarized-muted p-6" data-dynamic-border-container>
          <DynamicBorder label="Available Tags" type="top" />
          <div className="px-4 py-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {sortedTags.map(([tag, count]) => (
                <Link
                  key={tag}
                  href={`/tags/${tag}`}
                  className="group block bg-solarized-dark border border-solarized-muted p-3 transition-all duration-300 hover:bg-solarized-darker hover:border-solarized-blue font-mono"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-solarized-cyan mr-1">#</span>
                      <span className="text-solarized-text group-hover:text-solarized-blue transition-colors">
                        {tag}
                      </span>
                    </div>
                    <div className="flex items-center text-xs">
                      <span className="bg-solarized-muted text-solarized-dark px-2 py-1 rounded">
                        {count}
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-solarized-muted">
                    {count} {count === 1 ? 'post' : 'posts'}
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <DynamicBorder label="Available Tags" type="bottom" />
        </div>
      </div>

      {/* Navigation */}
      <div className="my-8 font-mono">
        <div className="text-solarized-green mb-2">
          <span className="text-solarized-muted">$&nbsp;</span>
          <span>git log --all</span>
        </div>
        <div className="bg-solarized-darker border border-solarized-muted p-4 text-sm">
          <Link
            href="/allposts"
            className="text-solarized-blue hover:text-solarized-cyan transition-colors duration-300"
          >
            すべての記事を表示する →
          </Link>
        </div>
      </div>
    </div>
  );
}
