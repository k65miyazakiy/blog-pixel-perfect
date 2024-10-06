import { Tags } from "@/app/components/Tags";
import { TimeStamp } from "@/app/components/TimeStamp";
import { getPost } from "@/app/lib/util";
import fs from "fs";
import path from "path";
import { MDXRenderer } from "./MDXRenderer";

export const dynamic = "force-static";
const postsDirectory = path.join(process.cwd(), "content/posts");

export default async function Post({ params }: { params: { slug: string[] } }) {
  const { slug } = params;
  const post = await getPost(slug);

  return (
    <article className="p-4">
      <div className="article-meta">
        <h1 className="mb-2 text-xl">{post.frontMatter.title}</h1>
        <div className="mb-4 flex items-center gap-3">
          <TimeStamp
            createdAt={post.frontMatter.createdAt}
            updatedAt={post.frontMatter.updatedAt}
          />
          <Tags tags={post.frontMatter.tags} />
        </div>
      </div>
      <hr className="mb-2" />
      <div id="postContent">
        <MDXRenderer source={post.source} />
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  const fileNames = fs.readdirSync(postsDirectory, {
    recursive: true,
    withFileTypes: true,
  });

  return fileNames.map((fileName) => {
    const slugs = fileName
      .toString()
      .replace(/\.mdx$/, "")
      .split("/");
    return {
      params: {
        slug: slugs,
      },
    };
  });
}
