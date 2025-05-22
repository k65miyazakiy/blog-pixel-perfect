import { faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-solarized-darker bg-solarized-dark">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold text-solarized-text font-mono">$ cat README.md</h3>
            <p className="mt-2 text-sm text-solarized-muted">
              日々の技術的な知見を共有するリポジトリです。主にWeb開発に関連する技術について書いています。
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-solarized-text font-mono">
              $ git tag --list
            </h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  href="/tags/tech"
                  className="text-sm text-solarized-cyan transition-colors duration-300 hover:text-solarized-blue font-mono"
                >
                  #tech
                </Link>
              </li>
              <li>
                <Link
                  href="/tags/ai"
                  className="text-sm text-solarized-cyan transition-colors duration-300 hover:text-solarized-blue font-mono"
                >
                  #ai
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-solarized-text font-mono">$ git remote -v</h3>
            <div className="mt-2 flex space-x-4">
              <a
                href="https://github.com/k65miyazakiy"
                className="text-solarized-light transition-colors duration-300 hover:text-solarized-blue"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <a
                href="https://twitter.com/kussattenai"
                className="text-solarized-light transition-colors duration-300 hover:text-solarized-cyan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faXTwitter} size="lg" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-solarized-darker pt-4">
          <p className="text-center text-xs text-solarized-muted font-mono">
            &copy; {year} kussaka - All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
