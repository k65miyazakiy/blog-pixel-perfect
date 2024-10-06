import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

SyntaxHighlighter.registerLanguage("jsx", jsx);

type CodeBlockProps = {
  content: string;
  lang: string;
  fileName?: string;
};

// Custom Code Block component
export const CB = async ({ content, lang, fileName }: CodeBlockProps) => {
  //   const formattedCode = synchronizedPrettier.format(content, {});
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
