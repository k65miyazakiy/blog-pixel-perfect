import { ArticleListCard } from "@/app/components/ArticleListCard";
import { getPostsMeta } from "@/app/lib/util";

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
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mt-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900">
          Tag: <span className="font-mono text-indigo-600">{tag}</span>{" "}
          <span className="text-sm text-gray-500">（{posts.length}）</span>
        </h1>
      </div>
      <div>
        <ul className="my-8 space-y-6">
          {posts.map((post) => (
            <li key={post.slug} className="flex justify-center">
              <div className="w-full max-w-2xl">
                <ArticleListCard {...post.frontMatter} slug={post.slug} />
              </div>
            </li>
          ))}
        </ul>
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
