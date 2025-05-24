import type { Meta, StoryObj } from '@storybook/react';
import { BQ } from '../BQ';

const meta: Meta<typeof BQ> = {
  title: 'MDX Components/BQ',
  component: BQ,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: '引用内容',
    },
    source: {
      control: 'text',
      description: '引用元のソース名',
    },
    sourceAddr: {
      control: 'text',
      description: '引用元のURL',
    },
    author: {
      control: 'text',
      description: '著者名',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'これはデフォルトの引用文です。ソース情報なしで表示されます。',
  },
};

export const WithSource: Story = {
  args: {
    children: 'ソース付きの引用文です。',
    source: 'Example Source',
  },
};

export const WithSourceAndURL: Story = {
  args: {
    children: 'ソースとURLが付いた引用文です。リンクをクリックできます。',
    source: 'GitHub Documentation',
    sourceAddr: 'https://docs.github.com',
  },
};

export const WithAllProps: Story = {
  args: {
    children: 'すべての情報が含まれた引用文です。ソース、URL、著者名が表示されます。',
    source: 'React Official Documentation',
    sourceAddr: 'https://react.dev',
    author: 'React Team',
  },
};

export const LongContent: Story = {
  args: {
    children: 'これは長い引用文の例です。複数行にわたって表示される場合のレイアウトを確認できます。長いテキストがどのように表示されるかを確認することで、コンポーネントの挙動を理解できます。',
    source: 'Long Text Example',
    sourceAddr: 'https://example.com',
    author: 'Sample Author',
  },
};
