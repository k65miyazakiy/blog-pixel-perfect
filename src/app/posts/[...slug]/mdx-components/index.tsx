import { ClassAttributes, HTMLAttributes } from "react";
import { BQ } from "./BQ";
import { CB } from "./CB";
import { Info } from "./Callouts";
import { Test } from "./Test";

export type Attrs = JSX.IntrinsicAttributes &
  ClassAttributes<HTMLHeadingElement> &
  HTMLAttributes<HTMLHeadingElement>;

const MDXComponents = {
  Test,
  BQ, // BlockQuote
  CB, // CodeBlock
  Info,
};

export default MDXComponents;
