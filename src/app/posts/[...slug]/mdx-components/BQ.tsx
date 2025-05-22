export type BlockQuoteProps = {
  children: React.ReactNode;
  source?: string;
  sourceAddr?: string;
  author?: string;
};

// Custom BlockQuote component
export const BQ = ({
  children,
  source,
  sourceAddr,
  author,
}: BlockQuoteProps) => {
  let SourceBlock = () => <></>;
  if (source) {
    SourceBlock = function SourceOnly() {
      return <span className="italic text-solarized-light">- {source}</span>;
    };
  }
  if (source && sourceAddr) {
    SourceBlock = function WithSourceAddr() {
      return (
        <span className="italic text-solarized-light">
          -{" "}
          <a href={sourceAddr} className="underline text-solarized-blue hover:text-solarized-cyan transition-colors">
            {source}
          </a>
        </span>
      );
    };
  }
  if (source && sourceAddr && author) {
    SourceBlock = function WithAuthor() {
      return (
        <span className="italic text-solarized-light">
          -{" "}
          <a href={sourceAddr} className="underline text-solarized-blue hover:text-solarized-cyan transition-colors">
            {source}
          </a>{" "}
          , {author}
        </span>
      );
    };
  }
  return (
    <blockquote className="my-4 border-l-4 border-solarized-cyan pl-4 bg-solarized-darker p-3 font-mono">
      <div className="text-sm italic text-solarized-text leading-relaxed">{children}</div>
      <div className="mt-2">
        <SourceBlock />
      </div>
    </blockquote>
  );
};
