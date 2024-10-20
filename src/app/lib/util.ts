import fs from "fs";
import matter from "gray-matter";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import { unified } from "unified";
import { visit } from "unist-util-visit";

const postsDirectory = path.join(process.cwd(), "content/posts");

export type Post = {
  slug: string[];
  frontMatter: ArticleMeta;
  source: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >;
};

export type ArticleMeta = {
  title: string;
  // author: string;
  createdAt: string;
  updatedAt?: string;
  tags?: string[];
};

// H2タグのToC
export type ToC2 = {
  value: string;
  id: string;
};

// 最新のN件のポストメタデータを取得
export const getLatestPostsMeta = (count: number) => {
  const allPostsMeta = getPostsMeta();
  const latestPostsMeta = allPostsMeta.sort((a, b) => {
    return (
      new Date(b.frontMatter.createdAt).getTime() -
      new Date(a.frontMatter.createdAt).getTime()
    );
  });
  return count === -1 ? latestPostsMeta : latestPostsMeta.slice(0, count);
};

// ポストメタデータを取得
export const getPostsMeta = () => {
  const dirEnts = fs.readdirSync(postsDirectory, {
    recursive: true,
    withFileTypes: true,
  });
  const posts = dirEnts
    .filter((dirEnt) => dirEnt.isFile())
    .map((dirEnt) => {
      const fullPath = `${dirEnt.parentPath}/${dirEnt.name}`;
      const slug = fullPath.replace(postsDirectory, "").replace(/\.mdx$/, "");
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data: frontMatter } = matter(fileContents);
      return {
        slug: slug,
        frontMatter: {
          title: frontMatter.title,
          createdAt: frontMatter.createdAt,
          updatedAt: frontMatter.updatedAt,
          tags: frontMatter.tags,
        },
      };
    })
    .filter((post) => {
      return process.env.NODE_ENV === "production"
        ? post.slug.startsWith("/develop") || post.slug.startsWith("/wip")
          ? false
          : true
        : true;
    });
  return posts;
};

// ポストを取得
export const getPost = async (slug: string[]) => {
  const fullPath = path.join(postsDirectory, `${slug.join("/")}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { content, data: frontMatter } = matter(fileContents);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug],
    },
  });
  const aPost: Post = {
    slug: slug,
    frontMatter: {
      title: frontMatter.title,
      // author: frontMatter.author,
      createdAt: frontMatter.createdAt,
      updatedAt: frontMatter.updatedAt,
      tags: frontMatter.tags,
    },
    source: mdxSource,
  };
  return aPost;
};

// H2タグを基にToCを取得
export const getToC2 = (slug: string[]) => {
  const fullPath = path.join(postsDirectory, `${slug.join("/")}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const processor = unified().use(remarkParse);
  const tree = processor.parse(fileContents);
  const toc: ToC2[] = [];

  visit(tree, "heading", (node: any) => {
    if (node.depth === 2) {
      const textNode = node.children.find(
        (child: any) => child.type === "text",
      );
      if (textNode) {
        const value = textNode.value;
        const id = value.toLowerCase().replace(/\.?\s+/g, "-");
        toc.push({ value, id });
      }
    }
  });

  return toc;
};
