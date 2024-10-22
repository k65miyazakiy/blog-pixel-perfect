import fs from "fs";
import matter from "gray-matter";
import lunr from "lunr";
import path from "path";

// exlint-disable-next-line @typescript-eslint/no-explicit-any
const generateSearchIndex = (posts) => {
  const index = lunr(function () {
    this.field("title");
    this.field("content");
    this.ref("slug");

    // exlint-disable-next-line @typescript-eslint/no-explicit-any
    posts.forEach((post) => {
      this.add(post);
    });
  });

  return index;
};

const getAllPosts = async () => {
  console.log(process.cwd());
  const postsDirectory = path.join(process.cwd(), "content/posts");
  const posts = fs
    .readdirSync(postsDirectory, { withFileTypes: true, recursive: true })
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
        content: fileContents,
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

const main = async () => {
  const posts = await getAllPosts();
  const index = generateSearchIndex(posts);
  fs.writeFileSync(
    path.join(process.cwd(), "out/searchIndex.json"),
    JSON.stringify(index),
  );
};

main();
