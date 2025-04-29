import { faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold text-gray-600">About</h3>
            <p className="mt-2 text-sm text-gray-500">
              日々の技術的な知見を共有するブログです。主にWeb開発に関連する技術について書いています。
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-600">
              主なカテゴリー
            </h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  href="/tags/tech"
                  className="text-sm text-gray-500 transition-colors duration-300 hover:text-indigo-600"
                >
                  #tech
                </Link>
              </li>
              <li>
                <Link
                  href="/tags/ai"
                  className="text-sm text-gray-500 transition-colors duration-300 hover:text-indigo-600"
                >
                  #ai
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-600">Follow</h3>
            <div className="mt-2 flex space-x-4">
              <a
                href="https://github.com/k65miyazakiy"
                className="text-gray-500 transition-colors duration-300 hover:text-gray-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <a
                href="https://twitter.com/kussattenai"
                className="text-gray-500 transition-colors duration-300 hover:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faXTwitter} size="lg" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-4">
          <p className="text-center text-xs text-gray-500">
            &copy; {year} kussaka - All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
