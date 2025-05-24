import type { Meta, StoryObj } from '@storybook/react';
import { 
  Info, 
  Tip, 
  Note, 
  Warning, 
  Caution, 
  Danger, 
  Success, 
  Error,
  Callout 
} from '../Callouts';

const meta: Meta<typeof Callout> = {
  title: 'MDX Components/Callouts',
  component: Callout,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['info', 'tip', 'note', 'warning', 'caution', 'danger', 'success', 'error'],
      description: 'コールアウトの種類',
    },
    message: {
      control: 'text',
      description: '表示するメッセージ',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 基本的なCalloutコンポーネント
export const Default: Story = {
  args: {
    type: 'info',
    message: 'これは情報コールアウトです。',
  },
};

export const AllTypes: Story = {
  render: () => (
    <div className="space-y-4">
      <Info message="これは情報（Info）コールアウトです。一般的な情報を表示する際に使用します。" />
      <Tip message="これはヒント（Tip）コールアウトです。有用なアドバイスやコツを表示する際に使用します。" />
      <Note message="これはノート（Note）コールアウトです。注釈や補足情報を表示する際に使用します。" />
      <Warning message="これは警告（Warning）コールアウトです。注意が必要な情報を表示する際に使用します。" />
      <Caution message="これは注意（Caution）コールアウトです。慎重な対応が必要な場合に使用します。" />
      <Danger message="これは危険（Danger）コールアウトです。危険な操作や重大な問題について警告する際に使用します。" />
      <Success message="これは成功（Success）コールアウトです。正常に完了した操作や成功状態を表示する際に使用します。" />
      <Error message="これはエラー（Error）コールアウトです。エラーや失敗した操作について表示する際に使用します。" />
    </div>
  ),
};

// 個別コンポーネントのストーリー
export const InfoExample: Story = {
  render: () => <Info message="プロジェクトのセットアップが完了しました。開発を開始できます。" />,
};

export const TipExample: Story = {
  render: () => <Tip message="パフォーマンスを向上させるために、画像を最適化することをお勧めします。" />,
};

export const NoteExample: Story = {
  render: () => <Note message="この機能はNext.js 14以降でのみ利用可能です。" />,
};

export const WarningExample: Story = {
  render: () => <Warning message="この操作を実行すると、既存のデータが変更される可能性があります。" />,
};

export const CautionExample: Story = {
  render: () => <Caution message="本番環境での実行前に、必ずテスト環境で動作確認を行ってください。" />,
};

export const DangerExample: Story = {
  render: () => <Danger message="この操作は取り消すことができません。実行前に十分に確認してください。" />,
};

export const SuccessExample: Story = {
  render: () => <Success message="デプロイが正常に完了しました。アプリケーションが利用可能です。" />,
};

export const ErrorExample: Story = {
  render: () => <Error message="API接続に失敗しました。ネットワーク設定を確認してください。" />,
};

export const LongMessage: Story = {
  args: {
    type: 'info',
    message: 'これは長いメッセージの例です。コールアウトコンポーネントが長文をどのように表示するかを確認できます。改行やワードラップが適切に機能し、可読性が保たれることが重要です。また、レスポンシブデザインにおいても適切に表示されることを確認する必要があります。',
  },
};
