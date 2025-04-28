import Link from "next/link";

export const Header = () => {
  return (
    <header className="border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div>
          <span className="text-2xl font-bold tracking-tight text-indigo-600 hover:text-indigo-800 transition-colors duration-300">
            <Link href="/">/Pixel/Perfect</Link>
          </span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link className="text-gray-600 hover:text-indigo-600 transition-colors duration-300" href="/allposts">記事一覧</Link>
            </li>
            <li>
              <Link className="text-gray-600 hover:text-indigo-600 transition-colors duration-300" href="/tags">タグ</Link>
            </li>
            <li>
              <Link className="text-gray-600 hover:text-indigo-600 transition-colors duration-300" href="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
