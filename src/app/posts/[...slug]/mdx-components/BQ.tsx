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
      return <span className="italic text-gray-600">- {source}</span>;
    };
  }
  if (source && sourceAddr) {
    SourceBlock = function WithSourceAddr() {
      return (
        <span className="italic text-gray-600">
          -{" "}
          <a href={sourceAddr} className="underline">
            {source}
          </a>
        </span>
      );
    };
  }
  if (source && sourceAddr && author) {
    SourceBlock = function WithAuthor() {
      return (
        <span className="italic text-gray-600">
          -{" "}
          <a href={sourceAddr} className="underline">
            {source}
          </a>{" "}
          , {author}
        </span>
      );
    };
  }
  return (
    <blockquote className="my-4 border-l-4 border-gray-200 pl-4">
      <div className="text-sm italic text-gray-600">{children}</div>
      <SourceBlock />
    </blockquote>
  );
};
