/**
 * MDX Components Type Definitions
 *
 * このファイルは、MDXファイル内でカスタムコンポーネントを型安全に使用するための
 * グローバル型定義を提供します。
 */

import type { BQ } from "./BQ";
import type { CB } from "./CB";
import type {
  Caution,
  Danger,
  Error,
  Info,
  Note,
  Success,
  Tip,
  Warning,
} from "./Callouts";
import type { Img } from "./Image";
import type { Test } from "./Test";

declare global {
  /**
   * MDXファイル内で利用可能なカスタムコンポーネントの型定義
   *
   * 使用例:
   * ```mdx
   * <BQ source="Example Source" author="John Doe">
   *   This is a custom blockquote
   * </BQ>
   *
   * <CB content="console.log('Hello World')" lang="javascript" fileName="example.js" />
   *
   * <Info message="This is an informational callout" />
   *
   * <Img src="/path/to/image.jpg" alt="Description" />
   * ```
   */
  interface MDXProvidedComponents {
    /**
     * テスト用コンポーネント
     */
    Test: typeof Test;

    /**
     * カスタムブロッククォートコンポーネント
     * @param children - 引用内容
     * @param source - 引用元のソース名（オプション）
     * @param sourceAddr - 引用元のURL（オプション）
     * @param author - 著者名（オプション）
     */
    BQ: typeof BQ;

    /**
     * カスタムコードブロックコンポーネント
     * @param content - 表示するコード内容
     * @param lang - プログラミング言語（シンタックスハイライト用）
     * @param fileName - ファイル名（オプション、表示用）
     */
    CB: typeof CB;

    /**
     * 情報用コールアウト（青色）
     * @param message - 表示するメッセージ
     */
    Info: typeof Info;

    /**
     * ヒント用コールアウト（緑色）
     * @param message - 表示するメッセージ
     */
    Tip: typeof Tip;

    /**
     * ノート用コールアウト（シアン色）
     * @param message - 表示するメッセージ
     */
    Note: typeof Note;

    /**
     * 警告用コールアウト（黄色）
     * @param message - 表示するメッセージ
     */
    Warning: typeof Warning;

    /**
     * 注意用コールアウト（オレンジ色）
     * @param message - 表示するメッセージ
     */
    Caution: typeof Caution;

    /**
     * 危険用コールアウト（赤色）
     * @param message - 表示するメッセージ
     */
    Danger: typeof Danger;

    /**
     * 成功用コールアウト（緑色）
     * @param message - 表示するメッセージ
     */
    Success: typeof Success;

    /**
     * エラー用コールアウト（赤色）
     * @param message - 表示するメッセージ
     */
    Error: typeof Error;

    /**
     * カスタム画像コンポーネント
     * @param src - 画像のURL
     * @param alt - 代替テキスト
     */
    Img: typeof Img;
  }
}

// この export {} によってこのファイルがモジュールとして扱われ、
// declare global が正しく動作します
export {};
