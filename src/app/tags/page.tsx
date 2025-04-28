import { getPostsMeta } from "@/app/lib/util";
import Link from "next/link";

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
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mt-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900">
          タグ一覧{" "}
          <span className="text-sm text-gray-500">（{sortedTags.length}）</span>
        </h1>
      </div>

      <div className="mx-auto my-8 max-w-4xl rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <ul className="flex flex-wrap justify-center gap-4">
          {sortedTags.map(([tag, count]) => (
            <li key={tag}>
              <Link
                href={`/tags/${tag}`}
                className="flex items-center rounded-full bg-indigo-50 px-4 py-2 text-indigo-700 transition-colors duration-300 hover:bg-indigo-100"
              >
                <span className="mr-1 text-indigo-500">#</span>
                <span>{tag}</span>
                <span className="ml-2 rounded-full bg-indigo-100 px-2 py-0.5 text-xs text-indigo-800">
                  {count}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/allposts"
          className="inline-flex items-center rounded-md border border-indigo-600 px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm transition-colors duration-300 hover:bg-indigo-600 hover:text-white"
        >
          すべての記事を見る
        </Link>
      </div>
    </div>
  );
}
