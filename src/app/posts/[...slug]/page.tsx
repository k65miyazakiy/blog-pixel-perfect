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

export default async function Post({ params }: { params: Promise<Slug> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  const toc = getToC2(slug);

  return (
    <main className="bg-solarized-dark min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8 py-8">
          <article className="flex-1 max-w-4xl">
            <div className="border border-solarized-darker bg-solarized-dark p-6 font-mono">
              <div className="mb-2 text-solarized-muted text-sm">
                ┌─ File: {slug.join('/')}.mdx ──────────────────────────────────────────────┐
              </div>
              <div className="px-4 py-4">
                <ArticleHeader
                  title={post.frontMatter.title}
                  createdAt={post.frontMatter.createdAt}
                  updatedAt={post.frontMatter.updatedAt}
                  tags={post.frontMatter.tags}
                />
                <div className="border-t border-solarized-muted my-4"></div>
                <div id="postContent">
                  <MDXRenderer source={post.source} />
                </div>
              </div>
              <div className="text-solarized-muted text-sm">
                └─────────────────────────────────────────────────────────────────────┘
              </div>
            </div>
          </article>
          <nav className="w-64 flex-shrink-0">
            <div className="sticky top-8">
              <ToC toc={toc} />
            </div>
          </nav>
        </div>
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
    <div className="article-meta font-mono">
      <h1 className="mb-4 text-2xl font-medium text-solarized-blue">{title}</h1>
      <div className="mb-4 flex items-center gap-4 text-sm">
        <span className="text-solarized-muted">$&nbsp;</span>
        <span className="text-solarized-yellow">git log --format=fuller</span>
      </div>
      <div className="flex items-center gap-4 text-xs bg-solarized-darker p-3 border border-solarized-muted">
        <div className="flex items-center gap-2">
          <span className="text-solarized-cyan">Author:</span>
          <span className="text-solarized-text">kussaka</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-solarized-cyan">Date:</span>
          <TimeStamp createdAt={createdAt} updatedAt={updatedAt} />
        </div>
        {tags && tags.length > 0 && (
          <div className="flex items-center gap-2">
            <span className="text-solarized-cyan">Tags:</span>
            <Tags tags={tags} enableLink />
          </div>
        )}
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
