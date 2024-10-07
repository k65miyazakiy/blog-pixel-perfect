"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import MDXComponents from ".";

export const MDXRenderer = ({
  source,
}: {
  source: MDXRemoteSerializeResult;
}) => <MDXRemote {...source} components={MDXComponents} />;
