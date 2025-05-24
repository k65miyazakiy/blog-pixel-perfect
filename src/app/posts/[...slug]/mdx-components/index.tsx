import { ClassAttributes, HTMLAttributes, JSX } from "react";
import { BQ } from "./BQ";
import { CB } from "./CB";
import { CBE } from "./CBE";
import { 
  Info, 
  Tip, 
  Note, 
  Warning, 
  Caution, 
  Danger, 
  Success, 
  Error 
} from "./Callouts";
import { Img } from "./Image";
import { Test } from "./Test";

export type Attrs = JSX.IntrinsicAttributes &
  ClassAttributes<HTMLHeadingElement> &
  HTMLAttributes<HTMLHeadingElement>;

const MDXComponents = {
  Test,
  BQ, // BlockQuote
  CB, // CodeBlock
  CBE, // CodeBlock External
  // Callouts
  Info,
  Tip,
  Note,
  Warning,
  Caution,
  Danger,
  Success,
  Error,
  Img,
};

export default MDXComponents;
