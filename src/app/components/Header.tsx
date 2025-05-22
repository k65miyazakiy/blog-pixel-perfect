import Link from "next/link";

export const Header = () => {
  return (
    <header className="border-b border-solarized-darker bg-solarized-dark">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="font-mono">
          <span className="text-xl font-medium text-solarized-green hover:text-solarized-blue transition-colors duration-300">
            <Link href="/">$ /pixel-perfect</Link>
          </span>
        </div>
        <nav className="font-mono">
          <ul className="flex space-x-6">
            <li>
              <Link className="text-solarized-light hover:text-solarized-blue transition-colors duration-300" href="/allposts">git log</Link>
            </li>
            <li>
              <Link className="text-solarized-light hover:text-solarized-blue transition-colors duration-300" href="/tags">git tag</Link>
            </li>
            <li>
              <Link className="text-solarized-light hover:text-solarized-blue transition-colors duration-300" href="/about">git config</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
