import { ArticleListCard } from "@/app/components/ArticleListCard";
import { getPostsMeta } from "@/app/lib/util";
import Link from "next/link";

// 各タグに対して記事一覧を表示する
export default function Post({ params }: { params: { tag: string } }) {
  const metas = getPostsMeta();
  const posts = metas.filter((meta) => {
    return meta.frontMatter.tags.includes(params.tag);
  });

  return (
    <>
      <div className="mt-4 flex items-end">
        <h1 className="pl-4 text-lg">
          Tag :<span className="font-mono"> {params.tag}</span>
        </h1>
        <div className="pb-[5px] text-xs">（{posts.length}）</div>
      </div>
      <div>
        <ul className="mt-4 flex flex-col items-center gap-4">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/posts${post.slug}`}>
                <ArticleListCard {...post.frontMatter} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
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
