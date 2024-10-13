import { Tags } from "@/app/components/Tags";
import { TimeStamp } from "@/app/components/TimeStamp";
import { getPost } from "@/app/lib/util";
import fs from "fs";
import path from "path";
import { MDXRenderer } from "./mdx-components/MDXRenderer";

const postsDirectory = path.join(process.cwd(), "content/posts");

type Slug = {
  slug: string[];
};

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

export function generateStaticParams() {
  const candidates = fs.readdirSync(postsDirectory, {
    recursive: true,
    withFileTypes: true,
  });

  const slugs: Slug[] = candidates
    .filter((cand) => cand.isFile())
    .map((cand) => {
      const slugs = `${cand.parentPath}/${cand.name}`
        .replace(postsDirectory, "")
        .replace(/\.mdx$/, "")
        .split("/")
        .filter((s) => s !== "");
      return {
        slug: slugs,
      };
    })
    .filter((slug) =>
      // content/posts/(develop|wip)は開発中の記事なのでビルドの対象にはしない
      process.env.NODE_ENV === "production"
        ? ["develop", "wip"].includes(slug.slug[0])
          ? false
          : true
        : true,
    );
  return slugs;
}
