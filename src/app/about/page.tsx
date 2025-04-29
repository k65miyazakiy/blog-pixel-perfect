export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
        <h1 className="mb-6 text-3xl font-bold text-gray-900">About</h1>

        <div className="mb-8 flex flex-col items-center gap-6 md:flex-row">
          <div className="relative h-32 w-32 flex-shrink-0">
            <div className="absolute inset-0 rounded-full border-2 border-indigo-200">
              <img
                src="/avator_rm.png"
                alt="プロフィール画像"
                width={128}
                height={128}
                className="h-full w-full overflow-clip rounded-full object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="mb-2 text-xl font-semibold text-gray-900">
              kussaka
            </h2>
            <p className="text-gray-600">ソフトウェアエンジニア。</p>
            <p className="text-gray-600">
              バックエンド、フロントエンド、クラウドインフラなどWebアプリの実現に必要なもろもろの業務に携わってきました。分野を問わず、よいモノづくりに役立つ技術に関心を持っています。
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="mb-4 text-xl font-semibold text-gray-900">
            このブログについて
          </h2>
          <p className="mb-4 text-gray-600">
            「PixelPerfect」は、業務やその他の開発で得た知見や、このような説明が欲しかったな...という内容を中心に、技術的なトピックを扱ったブログです。
          </p>
          <p className="text-gray-600">
            主にWeb技術を中心に取り扱っていると思いますが、その他の技術やトピックについても触れているかもしれません。
          </p>
        </div>

        <div className="mb-8">
          <h2 className="mb-4 text-xl font-semibold text-gray-900">
            スキル・技術
          </h2>

          {/* バックエンド */}
          <div className="mb-6">
            <h3 className="mb-3 text-lg font-medium text-gray-800">
              バックエンド
            </h3>
            <div className="flex flex-wrap gap-3">
              <div className="rounded-md bg-blue-50 px-4 py-2 text-center">
                <span className="text-sm font-medium text-blue-700">Java</span>
              </div>
              <div className="rounded-md bg-blue-50 px-4 py-2 text-center">
                <span className="text-sm font-medium text-blue-700">Go</span>
              </div>
            </div>
          </div>

          {/* フロントエンド */}
          <div className="mb-6">
            <h3 className="mb-3 text-lg font-medium text-gray-800">
              フロントエンド
            </h3>
            <div className="flex flex-wrap gap-3">
              <div className="rounded-md bg-indigo-50 px-4 py-2 text-center">
                <span className="text-sm font-medium text-indigo-700">
                  JavaScript/TypeScript
                </span>
              </div>
            </div>
          </div>

          {/* クラウド */}
          <div className="mb-6">
            <h3 className="mb-3 text-lg font-medium text-gray-800">クラウド</h3>
            <div className="flex flex-wrap gap-3">
              <div className="rounded-md bg-yellow-50 px-4 py-2 text-center">
                <span className="text-sm font-medium text-yellow-700">AWS</span>
              </div>
              <div className="rounded-md bg-yellow-50 px-4 py-2 text-center">
                <span className="text-sm font-medium text-yellow-700">
                  Google Cloud
                </span>
              </div>
            </div>
          </div>

          {/* その他 */}
          <div>
            <h3 className="mb-3 text-lg font-medium text-gray-800">
              その他の技術
            </h3>
            <div className="flex flex-wrap gap-3">
              <div className="rounded-md bg-gray-50 px-4 py-2 text-center">
                <span className="text-sm font-medium text-gray-700">
                  Docker
                </span>
              </div>
              <div className="rounded-md bg-gray-50 px-4 py-2 text-center">
                <span className="text-sm font-medium text-gray-700">Git</span>
              </div>
              <div className="rounded-md bg-gray-50 px-4 py-2 text-center">
                <span className="text-sm font-medium text-gray-700">
                  DevContainer
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-semibold text-gray-900">
            お問い合わせ
          </h2>
          <p className="text-gray-600">
            ブログの内容に関するご質問や、お仕事のご依頼などは以下の方法でご連絡ください。
          </p>
          <div className="mt-4 flex flex-col space-y-2">
            {/* <div className="flex items-center">
              <span className="mr-2 font-medium text-gray-700">Email:</span>
              <a
                href="mailto:your-email@example.com"
                className="text-indigo-600 hover:text-indigo-800"
              >
                your-email@example.com
              </a>
            </div> */}
            <div className="flex items-center">
              <span className="mr-2 font-medium text-gray-700">GitHub:</span>
              <a
                href="https://github.com/k65miyazakiy"
                className="text-indigo-600 hover:text-indigo-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/k65miyazakiy
              </a>
            </div>
            <div className="flex items-center">
              <span className="mr-2 font-medium text-gray-700">Twitter:</span>
              <a
                href="https://twitter.com/kussattenai"
                className="text-indigo-600 hover:text-indigo-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                @kussattenai
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
