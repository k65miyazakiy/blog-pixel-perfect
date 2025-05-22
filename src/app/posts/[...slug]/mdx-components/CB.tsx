import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import json from "react-syntax-highlighter/dist/esm/languages/prism/json";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import typescript from "react-syntax-highlighter/dist/esm/languages/prism/typescript";
import yaml from "react-syntax-highlighter/dist/esm/languages/prism/yaml";
import javascript from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import python from "react-syntax-highlighter/dist/esm/languages/prism/python";
import bash from "react-syntax-highlighter/dist/esm/languages/prism/bash";
import css from "react-syntax-highlighter/dist/esm/languages/prism/css";
import { solarizedDarkAtom } from "react-syntax-highlighter/dist/esm/styles/prism";
import { DynamicBorder } from "@/app/components/DynamicBorder";

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
    <div className="my-4 bg-solarized-darker border border-solarized-muted font-mono" data-dynamic-border-container>
      <DynamicBorder label={`File: ${displayFileName}`} type="top" />
      <div className="px-4 py-2">
        <div className="mb-2 text-xs text-solarized-cyan">
          <span className="text-solarized-muted">$&nbsp;</span>
          <span>cat {displayFileName}</span>
        </div>
        <div className="overflow-x-auto">
          <SyntaxHighlighter
            language={lang}
            style={solarizedDarkAtom}
            showLineNumbers
            lineNumberStyle={{
              color: '#586e75',
              backgroundColor: 'transparent',
              borderRight: '1px solid #073642',
              paddingRight: '1em',
              marginRight: '1em',
              minWidth: '2em',
              textAlign: 'right'
            }}
            customStyle={{
              background: 'transparent',
              padding: 0,
              margin: 0,
              fontSize: '0.875rem',
              lineHeight: '1.5',
              fontFamily: 'JetBrains Mono, Fira Code, Monaco, Consolas, monospace'
            }}
            codeTagProps={{
              style: {
                background: 'transparent',
                fontFamily: 'inherit'
              }
            }}
          >
            {content}
          </SyntaxHighlighter>
        </div>
      </div>
      <DynamicBorder label={`File: ${displayFileName}`} type="bottom" />
    </div>
  );
};
