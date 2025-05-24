import type { Meta, StoryObj } from "@storybook/react";
import { CBE } from "../CBE";

const meta: Meta<typeof CBE> = {
  title: "MDX Components/CBE",
  component: CBE,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    url: {
      control: "text",
      description: "GitHubファイルのURL（blob URLでもraw URLでも対応）",
    },
    lang: {
      control: { type: "select" },
      options: [
        "javascript",
        "typescript",
        "jsx",
        "python",
        "bash",
        "css",
        "json",
        "yaml",
      ],
      description: "プログラミング言語（シンタックスハイライト用）",
    },
    startLine: {
      control: "number",
      description: "開始行番号（1から開始、省略時は1行目から）",
    },
    endLine: {
      control: "number",
      description: "終了行番号（省略時は最終行まで）",
    },
    fileName: {
      control: "text",
      description: "カスタムファイル名（省略時はURLから自動抽出）",
    },
    showLineNumbers: {
      control: "boolean",
      description: "行番号の表示",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 実際のGitHubファイルを使用した例
export const TypeScriptFile: Story = {
  args: {
    url: "https://github.com/microsoft/TypeScript/blob/main/src/compiler/types.ts",
    lang: "typescript",
    startLine: 1,
    endLine: 50,
  },
};

export const JavaScriptFile: Story = {
  args: {
    url: "https://github.com/facebook/react/blob/main/packages/react/src/ReactServer.js",
    lang: "javascript",
    startLine: 1,
    endLine: 30,
  },
};

export const PythonFile: Story = {
  args: {
    url: "https://raw.githubusercontent.com/python/cpython/main/Lib/os.py",
    lang: "python",
    startLine: 1,
    endLine: 25,
  },
};

export const ConfigFile: Story = {
  args: {
    url: "https://github.com/vercel/next.js/blob/canary/package.json",
    lang: "json",
    startLine: 1,
    endLine: 20,
  },
};

// 行範囲指定のバリエーション
export const SpecificLines: Story = {
  args: {
    url: "https://github.com/microsoft/TypeScript/blob/main/src/compiler/types.ts",
    lang: "typescript",
    startLine: 100,
    endLine: 120,
    fileName: "types.ts (lines 100-120)",
  },
};

export const FromMiddle: Story = {
  args: {
    url: "https://github.com/facebook/react/blob/main/packages/react/src/ReactServer.js",
    lang: "javascript",
    startLine: 50,
    // endLineを指定しない場合は最後まで
  },
};

export const FullFile: Story = {
  args: {
    url: "https://raw.githubusercontent.com/octocat/Hello-World/master/README",
    lang: "text",
    // startLine, endLineを指定しない場合は全体
  },
};

export const WithCustomFileName: Story = {
  args: {
    url: "https://github.com/microsoft/TypeScript/blob/main/src/compiler/types.ts",
    lang: "typescript",
    startLine: 1,
    endLine: 30,
    fileName: "TypeScript Compiler Types",
  },
};

export const WithoutLineNumbers: Story = {
  args: {
    url: "https://github.com/facebook/react/blob/main/packages/react/src/ReactServer.js",
    lang: "javascript",
    startLine: 1,
    endLine: 20,
    showLineNumbers: false,
  },
};

// エラーケース
export const InvalidURL: Story = {
  args: {
    url: "https://github.com/nonexistent/repo/blob/main/file.js",
    lang: "javascript",
    startLine: 1,
    endLine: 10,
  },
};

export const NetworkError: Story = {
  args: {
    url: "https://invalid-domain-that-does-not-exist.com/file.js",
    lang: "javascript",
    startLine: 1,
    endLine: 10,
  },
};

// 実際のブログ用途の例
export const BlogSnippetExample: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="mb-2 text-lg font-bold">
          実際のファイルから特定の関数を抜粋
        </h3>
        <CBE
          url="https://github.com/microsoft/TypeScript/blob/main/src/compiler/types.ts"
          lang="typescript"
          startLine={1}
          endLine={30}
          fileName="TypeScript types.ts (抜粋)"
        />
      </div>

      <div>
        <h3 className="mb-2 text-lg font-bold">設定ファイルの一部</h3>
        <CBE
          url="https://github.com/vercel/next.js/blob/canary/package.json"
          lang="json"
          startLine={1}
          endLine={15}
          fileName="Next.js package.json"
        />
      </div>
    </div>
  ),
};
