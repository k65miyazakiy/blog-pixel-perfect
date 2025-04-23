import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import json from "react-syntax-highlighter/dist/esm/languages/prism/json";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import typescript from "react-syntax-highlighter/dist/esm/languages/prism/typescript";
import yaml from "react-syntax-highlighter/dist/esm/languages/prism/yaml";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("json", json);
SyntaxHighlighter.registerLanguage("yaml", yaml);
SyntaxHighlighter.registerLanguage("typescript", typescript);

type CodeBlockProps = {
  content: string;
  lang: string;
  fileName?: string;
};

// Custom Code Block component
export const CB = ({ content, lang, fileName }: CodeBlockProps) => {
  //   const formattedCode = synchronizedPrettier.format(content, {});
  // TODO filename
  fileName;
  return (
    <pre>
      <code className="text-sm">
        <SyntaxHighlighter
          language={lang}
          style={prism}
          showLineNumbers
          customStyle={{
            backgroundColor: "white",
            border: "solid 1px #e2e8f0",
            borderRadius: "0.5rem",
          }}
        >
          {content}
        </SyntaxHighlighter>
      </code>
    </pre>
  );
};
