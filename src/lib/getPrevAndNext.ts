import type { AstroGlobal } from "astro";
import { getPublishedPosts } from "./getPublishedPosts";

const linkToPostPath = (path: string) => `/posts/${path}`;

export async function getPrevAndNext(Astro: Readonly<AstroGlobal>) {
  const posts = await getPublishedPosts();
  const links = posts.map((post) => ({
    text: post.data.title,
    pubDate: post.data.pubDate,
    link: linkToPostPath(post.slug),
  }));

  const index = links.findIndex((x) =>
    Astro.url.pathname.replace(/\/$/, "").endsWith(x.link)
  );

  return {
    previous: index > 0 ? links[index - 1] : undefined,
    next:
      index !== -1 && index < links.length - 1 ? links[index + 1] : undefined,
  };
}
