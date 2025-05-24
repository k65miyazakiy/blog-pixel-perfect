import type { Meta, StoryObj } from '@storybook/react';
import { CB } from '../CB';

const meta: Meta<typeof CB> = {
  title: 'MDX Components/CB/External Files',
  component: CB,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    lang: {
      control: { type: 'select' },
      options: ['javascript', 'typescript', 'jsx', 'python', 'bash', 'css', 'json', 'yaml'],
      description: 'プログラミング言語（シンタックスハイライト用）',
    },
    fileName: {
      control: 'text',
      description: 'カスタムファイル名（オプション、表示用）',
    },
    filePath: {
      control: 'text',
      description: 'publicディレクトリからの相対パス',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FactorialJavaScript: Story = {
  args: {
    lang: 'javascript',
    filePath: 'assets/code/snippets/factorial.js',
  },
};

export const UserServiceTypeScript: Story = {
  args: {
    lang: 'typescript',
    filePath: 'assets/code/snippets/user-service.ts',
  },
};

export const TodoListReact: Story = {
  args: {
    lang: 'jsx',
    filePath: 'assets/code/snippets/todo-list.tsx',
    fileName: 'TodoList.tsx',
  },
};

export const WithCustomFileName: Story = {
  args: {
    lang: 'typescript',
    filePath: 'assets/code/snippets/user-service.ts',
    fileName: 'CustomUserService.ts',
  },
};

// エラーケースのテスト
export const FileNotFound: Story = {
  args: {
    lang: 'javascript',
    filePath: 'assets/code/snippets/non-existent-file.js',
  },
};

export const InvalidPath: Story = {
  args: {
    lang: 'javascript',
    filePath: '../../../etc/passwd',
  },
};

export const EmptyPath: Story = {
  args: {
    lang: 'javascript',
    filePath: '',
  },
};

// 比較用ストーリー
export const ComparisonWithInline: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-bold mb-2">インラインコンテンツ</h3>
        <CB 
          content={`function simpleExample() {
  console.log('This is inline content');
  // インデントが保持されにくい
    if (true) {
      console.log('nested content');
    }
}`}
          lang="javascript"
          fileName="inline-example.js"
        />
      </div>
      
      <div>
        <h3 className="text-lg font-bold mb-2">外部ファイルから読み込み</h3>
        <CB 
          lang="javascript"
          filePath="assets/code/snippets/factorial.js"
        />
      </div>
    </div>
  ),
};

export const AllExternalFiles: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-bold">利用可能な外部ファイル</h3>
      
      <div>
        <h4 className="font-semibold">JavaScript</h4>
        <CB lang="javascript" filePath="assets/code/snippets/factorial.js" />
      </div>
      
      <div>
        <h4 className="font-semibold">TypeScript</h4>
        <CB lang="typescript" filePath="assets/code/snippets/user-service.ts" />
      </div>
      
      <div>
        <h4 className="font-semibold">React Component</h4>
        <CB lang="jsx" filePath="assets/code/snippets/todo-list.tsx" fileName="TodoList.tsx" />
      </div>
    </div>
  ),
};
