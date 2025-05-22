import { DynamicBorder } from "../components/DynamicBorder";
import Link from "next/link";

export default function About() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-solarized-dark min-h-screen">
      {/* Terminal Header */}
      <div className="py-8 font-mono">
        <div className="border border-solarized-darker bg-solarized-dark p-6" data-dynamic-border-container>
          <DynamicBorder label="File: README.md" type="top" />
          <div className="px-4 py-4">
            <h1 className="text-2xl font-medium text-solarized-blue mb-2">
              $ cat README.md
            </h1>
            <p className="text-solarized-text text-sm mb-1">
              このブログとその管理者について
            </p>
            <p className="text-solarized-muted text-xs">
              プロジェクトの概要、開発者情報、技術スタックなど
            </p>
          </div>
          <DynamicBorder label="File: README.md" type="bottom" />
        </div>
      </div>

      <div className="my-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Profile Section */}
        <div className="bg-solarized-darker border border-solarized-muted p-6 font-mono" data-dynamic-border-container>
          <DynamicBorder label="Profile" type="top" />
          <div className="px-4 py-4">
            <div className="mb-4 text-solarized-green text-sm">
              <span className="text-solarized-muted">$&nbsp;</span>
              <span>whoami</span>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
              <div className="relative h-24 w-24 flex-shrink-0">
                <div className="border border-solarized-muted rounded p-1">
                  <img
                    src="/avator_rm.png"
                    alt="プロフィール画像"
                    width={88}
                    height={88}
                    className="h-full w-full rounded object-cover"
                  />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-lg font-medium text-solarized-blue mb-2">
                  kussaka
                </h2>
                <p className="text-solarized-text text-sm mb-2">ソフトウェアエンジニア</p>
                <p className="text-solarized-muted text-xs leading-relaxed">
                  バックエンド、フロントエンド、クラウドインフラなどWebアプリの実現に必要なもろもろの業務に携わってきました。
                </p>
              </div>
            </div>

            <div className="mb-4 text-solarized-green text-sm">
              <span className="text-solarized-muted">$&nbsp;</span>
              <span>git remote -v</span>
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex items-center">
                <span className="text-solarized-cyan mr-2">github</span>
                <a
                  href="https://github.com/k65miyazakiy"
                  className="text-solarized-blue hover:text-solarized-cyan transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/k65miyazakiy
                </a>
              </div>
              <div className="flex items-center">
                <span className="text-solarized-cyan mr-2">twitter</span>
                <a
                  href="https://twitter.com/kussattenai"
                  className="text-solarized-blue hover:text-solarized-cyan transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @kussattenai
                </a>
              </div>
            </div>
          </div>
          <DynamicBorder label="Profile" type="bottom" />
        </div>

        {/* Project Info Section */}
        <div className="bg-solarized-darker border border-solarized-muted p-6 font-mono" data-dynamic-border-container>
          <DynamicBorder label="Project Info" type="top" />
          <div className="px-4 py-4">
            <div className="mb-4 text-solarized-green text-sm">
              <span className="text-solarized-muted">$&nbsp;</span>
              <span>cat package.json | jq '.description'</span>
            </div>
            
            <h3 className="text-solarized-blue font-medium mb-3">Pixel Perfect</h3>
            <p className="text-solarized-text text-sm leading-relaxed mb-4">
              業務やその他の開発で得た知見や、このような説明が欲しかったな...という内容を中心に、技術的なトピックを扱ったブログです。
            </p>
            <p className="text-solarized-muted text-xs leading-relaxed mb-4">
              主にWeb技術を中心に取り扱っていると思いますが、その他の技術やトピックについても触れているかもしれません。
            </p>
            
            <div className="mb-4 text-solarized-green text-sm">
              <span className="text-solarized-muted">$&nbsp;</span>
              <span>npm ls --depth=0</span>
            </div>
            
            <div className="text-xs text-solarized-muted">
              <div>├── next.js@15.x</div>
              <div>├── tailwindcss@4.x</div>
              <div>├── typescript@5.x</div>
              <div>├── mdx@latest</div>
              <div>└── react@19.x</div>
            </div>
          </div>
          <DynamicBorder label="Project Info" type="bottom" />
        </div>
      </div>

      {/* Skills Section */}
      <div className="my-8">
        <div className="font-mono text-lg text-solarized-green mb-4">
          <span className="text-solarized-muted">$&nbsp;</span>
          <span className="text-solarized-green">cat skills.json</span>
        </div>
        
        <div className="bg-solarized-darker border border-solarized-muted p-6" data-dynamic-border-container>
          <DynamicBorder label="Technical Skills" type="top" />
          <div className="px-4 py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Backend */}
            <div>
              <h3 className="text-solarized-blue font-medium mb-3 text-sm">Backend</h3>
              <div className="space-y-2">
                <div className="bg-solarized-dark border border-solarized-muted px-3 py-1 text-xs">
                  <span className="text-solarized-text">Java</span>
                </div>
                <div className="bg-solarized-dark border border-solarized-muted px-3 py-1 text-xs">
                  <span className="text-solarized-text">Go</span>
                </div>
              </div>
            </div>

            {/* Frontend */}
            <div>
              <h3 className="text-solarized-blue font-medium mb-3 text-sm">Frontend</h3>
              <div className="space-y-2">
                <div className="bg-solarized-dark border border-solarized-muted px-3 py-1 text-xs">
                  <span className="text-solarized-text">TypeScript</span>
                </div>
                <div className="bg-solarized-dark border border-solarized-muted px-3 py-1 text-xs">
                  <span className="text-solarized-text">React</span>
                </div>
              </div>
            </div>

            {/* Cloud */}
            <div>
              <h3 className="text-solarized-blue font-medium mb-3 text-sm">Cloud</h3>
              <div className="space-y-2">
                <div className="bg-solarized-dark border border-solarized-muted px-3 py-1 text-xs">
                  <span className="text-solarized-text">AWS</span>
                </div>
                <div className="bg-solarized-dark border border-solarized-muted px-3 py-1 text-xs">
                  <span className="text-solarized-text">Google Cloud</span>
                </div>
              </div>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-solarized-blue font-medium mb-3 text-sm">Tools</h3>
              <div className="space-y-2">
                <div className="bg-solarized-dark border border-solarized-muted px-3 py-1 text-xs">
                  <span className="text-solarized-text">Docker</span>
                </div>
                <div className="bg-solarized-dark border border-solarized-muted px-3 py-1 text-xs">
                  <span className="text-solarized-text">Git</span>
                </div>
                <div className="bg-solarized-dark border border-solarized-muted px-3 py-1 text-xs">
                  <span className="text-solarized-text">DevContainer</span>
                </div>
              </div>
            </div>
          </div>
          <DynamicBorder label="Technical Skills" type="bottom" />
        </div>
      </div>

      {/* Contact Section */}
      <div className="my-8">
        <div className="font-mono text-lg text-solarized-green mb-4">
          <span className="text-solarized-muted">$&nbsp;</span>
          <span className="text-solarized-green">echo "Contact Information"</span>
        </div>
        
        <div className="bg-solarized-darker border border-solarized-muted p-6 font-mono" data-dynamic-border-container>
          <DynamicBorder label="Contact" type="top" />
          <div className="px-4 py-4">
            <p className="text-solarized-text text-sm mb-4 leading-relaxed">
              ブログの内容に関するご質問や、お仕事のご依頼などは以下の方法でご連絡ください。
            </p>
            
            <div className="mb-4 text-solarized-green text-sm">
              <span className="text-solarized-muted">$&nbsp;</span>
              <span>curl -s https://api.github.com/users/k65miyazakiy</span>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <span className="text-solarized-cyan mr-3 w-16">GitHub:</span>
                <a
                  href="https://github.com/k65miyazakiy"
                  className="text-solarized-blue hover:text-solarized-cyan transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/k65miyazakiy
                </a>
              </div>
              <div className="flex items-center">
                <span className="text-solarized-cyan mr-3 w-16">Twitter:</span>
                <a
                  href="https://twitter.com/kussattenai"
                  className="text-solarized-blue hover:text-solarized-cyan transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @kussattenai
                </a>
              </div>
            </div>
          </div>
          <DynamicBorder label="Contact" type="bottom" />
        </div>
      </div>

      {/* Navigation */}
      <div className="my-8 font-mono">
        <div className="text-solarized-green mb-2">
          <span className="text-solarized-muted">$&nbsp;</span>
          <span>ls -la</span>
        </div>
        <div className="bg-solarized-darker border border-solarized-muted p-4 text-sm space-y-2">
          <Link
            href="/"
            className="block text-solarized-blue hover:text-solarized-cyan transition-colors duration-300"
          >
            ← ホームに戻る
          </Link>
          <Link
            href="/allposts"
            className="block text-solarized-blue hover:text-solarized-cyan transition-colors duration-300"
          >
            全記事を表示する →
          </Link>
        </div>
      </div>
    </div>
  );
}
