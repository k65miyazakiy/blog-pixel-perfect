import type { Meta, StoryObj } from '@storybook/react';
import { Img } from '../Image';

const meta: Meta<typeof Img> = {
  title: 'MDX Components/Img',
  component: Img,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: '画像のURL',
    },
    alt: {
      control: 'text',
      description: '代替テキスト',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://via.placeholder.com/600x400/6366f1/ffffff?text=Sample+Image',
    alt: 'サンプル画像',
  },
};

export const SmallImage: Story = {
  args: {
    src: 'https://via.placeholder.com/300x200/10b981/ffffff?text=Small+Image',
    alt: '小さな画像',
  },
};

export const LargeImage: Story = {
  args: {
    src: 'https://via.placeholder.com/1200x800/ef4444/ffffff?text=Large+Image',
    alt: '大きな画像',
  },
};

export const LandscapeImage: Story = {
  args: {
    src: 'https://via.placeholder.com/800x400/f59e0b/ffffff?text=Landscape+Image',
    alt: '横長の画像',
  },
};

export const PortraitImage: Story = {
  args: {
    src: 'https://via.placeholder.com/400x600/8b5cf6/ffffff?text=Portrait+Image',
    alt: '縦長の画像',
  },
};

export const WithLongAltText: Story = {
  args: {
    src: 'https://via.placeholder.com/600x400/06b6d4/ffffff?text=Description+Example',
    alt: 'これは非常に長い代替テキストの例です。スクリーンリーダーを使用するユーザーや、画像が読み込まれない場合に、この詳細な説明が表示されます。アクセシビリティの観点から重要な要素です。',
  },
};

// ブログで実際に使用される可能性のある画像パターン
export const TechnicalDiagram: Story = {
  args: {
    src: 'https://via.placeholder.com/800x500/1e293b/ffffff?text=Technical+Diagram',
    alt: 'システム構成図：Next.jsアプリケーションのアーキテクチャを示すダイアグラム',
  },
};

export const Screenshot: Story = {
  args: {
    src: 'https://via.placeholder.com/1024x768/374151/ffffff?text=Application+Screenshot',
    alt: 'アプリケーションのスクリーンショット：ダッシュボードのUI画面',
  },
};

export const CodeExample: Story = {
  args: {
    src: 'https://via.placeholder.com/700x400/111827/22c55e?text=Code+Example',
    alt: 'コード例：React Hookの実装パターンを示すサンプルコード',
  },
};
