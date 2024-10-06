"use client";

import MDXComponents from "@/app/posts/[...slug]/mdx-components";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

export const MDXRenderer = ({
  source,
}: {
  source: MDXRemoteSerializeResult;
}) => <MDXRemote {...source} components={MDXComponents} />;
