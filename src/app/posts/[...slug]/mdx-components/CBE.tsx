import { DynamicBorder } from "@/app/components/DynamicBorder";
import { useEffect, useState } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import bash from "react-syntax-highlighter/dist/esm/languages/prism/bash";
import css from "react-syntax-highlighter/dist/esm/languages/prism/css";
import javascript from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import json from "react-syntax-highlighter/dist/esm/languages/prism/json";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import python from "react-syntax-highlighter/dist/esm/languages/prism/python";
import typescript from "react-syntax-highlighter/dist/esm/languages/prism/typescript";
import yaml from "react-syntax-highlighter/dist/esm/languages/prism/yaml";
import { solarizedDarkAtom } from "react-syntax-highlighter/dist/esm/styles/prism";

SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("json", json);
SyntaxHighlighter.registerLanguage("yaml", yaml);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("python", python);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("css", css);

type CodeBlockExternalProps = {
  url: string;
  lang: string;
  startLine?: number;
  endLine?: number;
  fileName?: string;
  showLineNumbers?: boolean;
};

// GitHub URLをraw URLに変換する関数
const convertToRawUrl = (url: string): string => {
  if (url.includes("github.com") && url.includes("/blob/")) {
    return url
      .replace("github.com", "raw.githubusercontent.com")
      .replace("/blob/", "/");
  }
  return url;
};

// URLからファイル名を抽出する関数
const extractFileName = (url: string): string => {
  try {
    const urlObj = new URL(url);
    const pathSegments = urlObj.pathname.split("/");
    return pathSegments[pathSegments.length - 1] || "external-file";
  } catch {
    return "external-file";
  }
};

// 行を抽出する関数
const extractLines = (
  content: string,
  startLine?: number,
  endLine?: number,
): string => {
  const lines = content.split("\n");

  if (startLine === undefined && endLine === undefined) {
    return content;
  }

  const start = Math.max(0, (startLine || 1) - 1); // 1-based to 0-based
  const end = endLine ? Math.min(lines.length, endLine) : lines.length;

  return lines.slice(start, end).join("\n");
};

// Custom Code Block External component
export const CBE = ({
  url,
  lang,
  startLine,
  endLine,
  fileName,
  showLineNumbers = true,
}: CodeBlockExternalProps) => {
  const [fileContent, setFileContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (!url) return;

    setLoading(true);
    setError("");

    const fetchUrl = convertToRawUrl(url);

    fetch(fetchUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Failed to fetch: ${response.status} ${response.statusText}`,
          );
        }
        return response.text();
      })
      .then((text) => {
        const extractedContent = extractLines(text, startLine, endLine);
        setFileContent(extractedContent);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [url, startLine, endLine]);

  // ファイル名を決定
  const displayFileName = fileName || extractFileName(url);

  // 行範囲の表示用テキスト
  const lineRangeText =
    startLine || endLine ? `L${startLine || 1}-${endLine || "end"}` : "";

  // エラー状態の表示
  if (error) {
    return (
      <div className="bg-solarized-darker border-solarized-red my-4 border font-mono">
        <div className="p-4">
          <div className="text-solarized-red text-sm">
            <strong>Error fetching external file:</strong> {error}
          </div>
          <div className="text-solarized-muted mt-2 text-xs">URL: {url}</div>
          {lineRangeText && (
            <div className="text-solarized-muted text-xs">
              Lines: {lineRangeText}
            </div>
          )}
        </div>
      </div>
    );
  }

  // ローディング状態の表示
  if (loading) {
    return (
      <div className="bg-solarized-darker border-solarized-muted my-4 border font-mono">
        <div className="p-4">
          <div className="text-solarized-cyan text-sm">
            Fetching external file: {displayFileName}...
          </div>
          {lineRangeText && (
            <div className="text-solarized-muted mt-1 text-xs">
              Lines: {lineRangeText}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className="bg-solarized-darker border-solarized-muted my-4 border font-mono"
      data-dynamic-border-container
    >
      <div className="p-4">
        <DynamicBorder label={`External: ${displayFileName}`} type="top" />
        <div className="px-4 py-2 pr-12">
          <div className="text-solarized-cyan mb-3 text-xs">
            <span className="text-solarized-muted">$&nbsp;</span>
            <span>curl -s {url}</span>
            {lineRangeText && (
              <span className="text-solarized-muted ml-2">
                | sed -n &apos;{startLine || 1},{endLine || "$"}p&apos;
              </span>
            )}
          </div>
          <div className="overflow-x-auto">
            <SyntaxHighlighter
              language={lang}
              style={solarizedDarkAtom}
              showLineNumbers={showLineNumbers}
              startingLineNumber={startLine || 1}
              lineNumberStyle={{
                color: "#586e75",
                backgroundColor: "transparent",
                borderRight: "1px solid #073642",
                paddingRight: "1em",
                marginRight: "1em",
                minWidth: "2em",
                textAlign: "right",
              }}
              customStyle={{
                background: "transparent",
                padding: 0,
                margin: 0,
                fontSize: "0.875rem",
                lineHeight: "1.5",
                fontFamily:
                  "JetBrains Mono, Fira Code, Monaco, Consolas, monospace",
              }}
              codeTagProps={{
                style: {
                  background: "transparent",
                  fontFamily: "inherit",
                },
              }}
            >
              {fileContent}
            </SyntaxHighlighter>
          </div>
        </div>
        <DynamicBorder label={`External: ${displayFileName}`} type="bottom" />
      </div>
    </div>
  );
};
