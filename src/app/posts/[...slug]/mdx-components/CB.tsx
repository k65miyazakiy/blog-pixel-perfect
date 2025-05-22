import { DynamicBorder } from "@/app/components/DynamicBorder";
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

type CodeBlockProps = {
  content: string;
  lang: string;
  fileName?: string;
};

// Custom Code Block component
export const CB = ({ content, lang, fileName }: CodeBlockProps) => {
  const displayFileName = fileName || `code.${lang}`;

  return (
    <div
      className="bg-solarized-darker border-solarized-muted my-4 border font-mono"
      data-dynamic-border-container
    >
      <div className="p-4">
        <DynamicBorder label={`File: ${displayFileName}`} type="top" />
        <div className="px-4 py-2">
          <div className="text-solarized-cyan mb-3 text-xs">
            <span className="text-solarized-muted">$&nbsp;</span>
            <span>cat {displayFileName}</span>
          </div>
          <div className="overflow-x-auto">
            <SyntaxHighlighter
              language={lang}
              style={solarizedDarkAtom}
              showLineNumbers
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
              {content}
            </SyntaxHighlighter>
          </div>
        </div>
        <DynamicBorder label={`File: ${displayFileName}`} type="bottom" />
      </div>
    </div>
  );
};
