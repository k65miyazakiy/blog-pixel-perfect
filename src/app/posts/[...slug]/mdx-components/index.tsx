import { ClassAttributes, HTMLAttributes, JSX } from "react";
import { BQ } from "./BQ";
import { CB } from "./CB";
import { Caution, Info } from "./Callouts";
import { Img } from "./Image";
import { Test } from "./Test";

export type Attrs = JSX.IntrinsicAttributes &
  ClassAttributes<HTMLHeadingElement> &
  HTMLAttributes<HTMLHeadingElement>;

const MDXComponents = {
  Test,
  BQ, // BlockQuote
  CB, // CodeBlock
  Info,
  Caution,
  Img,
};

export default MDXComponents;
