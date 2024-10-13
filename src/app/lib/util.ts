import fs from "fs";
import matter from "gray-matter";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import remarkGfm from "remark-gfm";

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

export const getLatestPostsMeta = (count: number) => {
  const allPostsMeta = getPostsMeta();
  const latestPostsMeta = allPostsMeta
    .sort((a, b) => {
      return (
        new Date(b.frontMatter.createdAt).getTime() -
        new Date(a.frontMatter.createdAt).getTime()
      );
    })
    .slice(0, count);
  return latestPostsMeta;
};

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

export const getPost = async (slug: string[]) => {
  const fullPath = path.join(postsDirectory, `${slug.join("/")}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { content, data: frontMatter } = matter(fileContents);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
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
