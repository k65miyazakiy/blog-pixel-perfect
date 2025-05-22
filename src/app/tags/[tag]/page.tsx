import { ArticleListCard } from "@/app/components/ArticleListCard";
import { DynamicBorder } from "@/app/components/DynamicBorder";
import { getPostsMeta } from "@/app/lib/util";
import Link from "next/link";

type Tag = {
  tag: string;
};

// 各タグに対して記事一覧を表示する
export default async function Post({ params }: { params: Promise<Tag> }) {
  const { tag } = await params;
  const metas = getPostsMeta();
  const posts = metas.filter((meta) => {
    return meta.frontMatter.tags.includes(tag);
  });

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-solarized-dark min-h-screen">
      {/* Terminal Header */}
      <div className="py-8 font-mono">
        <div className="border border-solarized-darker bg-solarized-dark p-6" data-dynamic-border-container>
          <DynamicBorder label={`Tag: ${tag}`} type="top" />
          <div className="px-4 py-4">
            <h1 className="text-2xl font-medium text-solarized-blue mb-2">
              $ git log --grep="#{tag}"
            </h1>
            <p className="text-solarized-text text-sm mb-1">
              Tag: <span className="text-solarized-cyan">#{tag}</span> に関連する記事 ({posts.length} posts)
            </p>
            <p className="text-solarized-muted text-xs">
              このタグが付いたすべての記事を表示しています
            </p>
          </div>
          <DynamicBorder label={`Tag: ${tag}`} type="bottom" />
        </div>
      </div>

      {/* Posts List */}
      <div className="my-8">
        <div className="font-mono text-lg text-solarized-green mb-4">
          <span className="text-solarized-muted">$&nbsp;</span>
          <span className="text-solarized-green">git log --oneline --grep="#{tag}"</span>
        </div>
        
        <div className="bg-solarized-darker border border-solarized-muted p-4">
          <div className="space-y-0">
            {posts.map((post) => (
              <ArticleListCard key={post.slug} {...post.frontMatter} slug={post.slug} />
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="my-8 font-mono">
        <div className="text-solarized-green mb-2">
          <span className="text-solarized-muted">$&nbsp;</span>
          <span>cd ..</span>
        </div>
        <div className="bg-solarized-darker border border-solarized-muted p-4 text-sm space-y-2">
          <Link
            href="/tags"
            className="block text-solarized-blue hover:text-solarized-cyan transition-colors duration-300"
          >
            ← タグ一覧に戻る
          </Link>
          <Link
            href="/allposts"
            className="block text-solarized-blue hover:text-solarized-cyan transition-colors duration-300"
          >
            すべての記事を表示する →
          </Link>
        </div>
      </div>
    </div>
  );
}

// 各タグに対して静的なページを生成する
export function generateStaticParams() {
  const metas = getPostsMeta();
  const tags = new Set();
  for (const meta of metas) {
    for (const tag of meta.frontMatter.tags) {
      tags.add(tag);
    }
  }
  const paths: { tag: string }[] = [];
  for (const tag of Array.from(tags)) {
    paths.push({
      tag: tag as string,
    });
  }

  return paths;
}
