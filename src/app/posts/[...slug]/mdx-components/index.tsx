import { ClassAttributes, HTMLAttributes } from "react";
import { BQ } from "./BQ";
import { CB } from "./CB";
import { Test } from "./Test";

export type Attrs = JSX.IntrinsicAttributes &
  ClassAttributes<HTMLHeadingElement> &
  HTMLAttributes<HTMLHeadingElement>;

const MDXComponents = {
  Test,
  BQ, // BlockQuote
  CB, // CodeBlock
};

export default MDXComponents;
