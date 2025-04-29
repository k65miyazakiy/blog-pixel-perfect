import Link from "next/link";
import { ArticleListCard } from "./components/ArticleListCard";
import { getLatestPostsMeta } from "./lib/util";

const HOME_POSTS_COUNT = 5;

export default function Home() {
  const latestPosts = getLatestPostsMeta(HOME_POSTS_COUNT);
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="my-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Pixel Perfect
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          日々のエンジニアリングで得た知見や技術をシェアするブログです。
        </p>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Webアプリケーションに関連するトピックを主に扱っています。
        </p>
      </div>

      {/* Latest Posts */}
      <div className="my-12">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-900">
          最新の記事
        </h2>
        <ul className="space-y-6">
          {latestPosts.map((post) => (
            <li key={post.slug} className="flex justify-center">
              <div className="w-full max-w-2xl">
                <ArticleListCard {...post.frontMatter} slug={post.slug} />
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-8 text-center">
          <Link
            href="/allposts"
            className="inline-flex items-center rounded-md border border-indigo-600 px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm transition-colors duration-300 hover:bg-indigo-600 hover:text-white"
          >
            すべての記事を見る
          </Link>
        </div>
      </div>

      {/* Featured Content */}
      {/* <div className="my-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-xl font-bold text-gray-900">ノート・スニペット</h3>
          <p className="mb-4 text-gray-600">便利なコード片や小技のコレクションです。</p>
          <Link href="/snippets" className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors duration-300">
            スニペットを見る →
          </Link>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-xl font-bold text-gray-900">プロジェクト</h3>
          <p className="mb-4 text-gray-600">過去のプロジェクトや制作物のショーケースです。</p>
          <Link href="/projects" className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors duration-300">
            プロジェクトを見る →
          </Link>
        </div>
      </div> */}
    </div>
  );
}
