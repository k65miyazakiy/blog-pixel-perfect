# Storybook 再有効化手順

このプロジェクトでは、Next.js 16との互換性の問題により、Storybookを一時的に無効化しています。
将来Storybookが Next.js 16 に対応したら、以下の手順で再有効化できます。

## 前提条件

- Storybook 9以降が Next.js 16 に対応していることを確認
- または、Next.js のバージョンをStorybookがサポートするバージョンにダウングレード

## 再有効化手順

### 1. package.json に Storybook パッケージを追加

```json
"devDependencies": {
  "@storybook/addon-essentials": "^9.x.x",
  "@storybook/addon-interactions": "^9.x.x",
  "@storybook/addon-onboarding": "^9.x.x",
  "@storybook/blocks": "^9.x.x",
  "@storybook/nextjs": "^9.x.x",
  "@storybook/react": "^9.x.x",
  "@storybook/test": "^9.x.x",
  "eslint-plugin-storybook": "^0.x.x",
  "storybook": "^9.x.x"
}
```

注: バージョン番号は最新の安定版に置き換えてください。

### 2. tsconfig.json の除外設定を削除

`tsconfig.json` の `exclude` セクションから以下を削除:

```json
"exclude": [
  "node_modules",
  "public",
  "out"
  // 以下の3行を削除
  // "**/*.stories.ts",
  // "**/*.stories.tsx",
  // ".storybook"
]
```

### 3. eslint.config.mjs に Storybook プラグインを追加

```javascript
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...nextCoreWebVitals,
  ...nextTypescript,
  ...compat.extends("plugin:storybook/recommended"),
  {
    rules: {
      "@next/next/no-img-element": "off",
    },
  },
];
```

注: Storybook 9 以降で Flat Config をネイティブサポートしている場合は、`FlatCompat` は不要かもしれません。

### 4. 依存関係をインストール

```bash
npm install
```

### 5. Storybook の動作確認

```bash
npm run storybook
```

ブラウザで http://localhost:6006 にアクセスして、Storybookが正常に起動することを確認します。

### 6. Next.js ビルドの確認

```bash
npm run build
```

Next.js のビルドが正常に完了することを確認します。

## 保持されているファイル

以下のファイルは無効化中も保持されているため、再設定は不要です:

- `.storybook/main.ts` - Storybook のメイン設定
- `.storybook/preview.ts` - Storybook のプレビュー設定
- `src/**/*.stories.ts` - すべてのストーリーファイル
- `src/**/*.stories.tsx` - すべてのストーリーファイル
- `package.json` の `storybook` と `build-storybook` スクリプト

## トラブルシューティング

### peer dependency の警告が出る場合

```bash
npm install --legacy-peer-deps
```

その後、`.npmrc` ファイルを作成して以下を追加:

```
legacy-peer-deps=true
```

### Storybook が起動しない場合

1. Storybook と Next.js のバージョン互換性を確認
2. [Storybook の公式ドキュメント](https://storybook.js.org/docs/get-started/frameworks/nextjs) で最新情報を確認
3. GitHub Issues で既知の問題を検索: https://github.com/storybookjs/storybook/issues

## 参考リンク

- [Storybook for Next.js](https://storybook.js.org/docs/get-started/frameworks/nextjs)
- [Next.js 16 compatibility issue](https://github.com/storybookjs/storybook/issues/32710)
- [Storybook Releases](https://github.com/storybookjs/storybook/releases)
