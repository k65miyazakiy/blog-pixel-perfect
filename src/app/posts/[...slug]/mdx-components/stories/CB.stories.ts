import type { Meta, StoryObj } from '@storybook/react';
import { CB } from '../CB';

const meta: Meta<typeof CB> = {
  title: 'MDX Components/CB',
  component: CB,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: 'text',
      description: '表示するコード内容',
    },
    lang: {
      control: { type: 'select' },
      options: ['javascript', 'typescript', 'jsx', 'python', 'bash', 'css', 'json', 'yaml'],
      description: 'プログラミング言語（シンタックスハイライト用）',
    },
    fileName: {
      control: 'text',
      description: 'ファイル名（オプション、表示用）',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const JavaScript: Story = {
  args: {
    content: `function greet(name) {
  console.log(\`Hello, \${name}!\`);
}

greet('World');`,
    lang: 'javascript',
    fileName: 'example.js',
  },
};

export const TypeScript: Story = {
  args: {
    content: `interface User {
  id: number;
  name: string;
  email: string;
}

const user: User = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com'
};

function getUserInfo(user: User): string {
  return \`\${user.name} (\${user.email})\`;
}`,
    lang: 'typescript',
    fileName: 'user.ts',
  },
};

export const React: Story = {
  args: {
    content: `import React from 'react';

interface Props {
  title: string;
  children: React.ReactNode;
}

export const Card: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="content">
        {children}
      </div>
    </div>
  );
};`,
    lang: 'jsx',
    fileName: 'Card.tsx',
  },
};

export const Python: Story = {
  args: {
    content: `def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

# 使用例
result = factorial(5)
print(f"5の階乗は {result} です")`,
    lang: 'python',
    fileName: 'factorial.py',
  },
};

export const Bash: Story = {
  args: {
    content: `#!/bin/bash

echo "Building project..."
npm install
npm run build

if [ $? -eq 0 ]; then
    echo "Build successful!"
else
    echo "Build failed!"
    exit 1
fi`,
    lang: 'bash',
    fileName: 'build.sh',
  },
};

export const CSS: Story = {
  args: {
    content: `.card {
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 24px;
  margin: 16px 0;
}

.card h2 {
  color: #333;
  margin: 0 0 16px 0;
  font-size: 1.5rem;
}

.card .content {
  color: #666;
  line-height: 1.6;
}`,
    lang: 'css',
    fileName: 'card.css',
  },
};

export const JSON: Story = {
  args: {
    content: `{
  "name": "blog-pixel-perfect",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0"
  }
}`,
    lang: 'json',
    fileName: 'package.json',
  },
};

export const YAML: Story = {
  args: {
    content: `name: Deploy Blog
on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build`,
    lang: 'yaml',
    fileName: '.github/workflows/deploy.yml',
  },
};

export const WithoutFileName: Story = {
  args: {
    content: `console.log('ファイル名なしのコードブロック');`,
    lang: 'javascript',
  },
};
