import { Tags } from "@/app/components/Tags";
import { TimeStamp } from "@/app/components/TimeStamp";
import { getPost, getToC2 } from "@/app/lib/util";
import fs from "fs";
import path from "path";
import { MDXRenderer } from "./mdx-components/MDXRenderer";
import ToC from "./ToC";

const postsDirectory = path.join(process.cwd(), "content/posts");

type Slug = {
  slug: string[];
};

export default async function Post({ params }: { params: { slug: string[] } }) {
  const { slug } = params;
  const post = await getPost(slug);
  const toc = getToC2(slug);

  return (
    <main className="flex justify-center">
      <div id="centered-container" className="flex gap-8">
        <article className="w-[768px] p-4">
          <ArticleHeader
            title={post.frontMatter.title}
            createdAt={post.frontMatter.createdAt}
            updatedAt={post.frontMatter.updatedAt}
            tags={post.frontMatter.tags}
          />
          <hr className="mb-2" />
          <div id="postContent">
            <MDXRenderer source={post.source} />
          </div>
        </article>
        <nav className="mt-[100px] w-[200px]">
          <div id="sticky-container" className="sticky" style={{ top: "20px" }}>
            <ToC toc={toc} />
          </div>
        </nav>
      </div>
    </main>
  );
}

const ArticleHeader = ({
  title,
  createdAt,
  updatedAt,
  tags,
}: {
  title: string;
  createdAt: string;
  updatedAt?: string;
  tags?: string[];
}) => {
  return (
    <div className="article-meta">
      <h1 className="mb-2 text-xl">{title}</h1>
      <div className="mb-4 flex items-center gap-3">
        <TimeStamp createdAt={createdAt} updatedAt={updatedAt} />
        <Tags tags={tags} enableLink />
      </div>
    </div>
  );
};

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
