import type { RSSOptions } from "@astrojs/rss";
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function get(context: RSSOptions) {
  const blog = await getCollection("posts");
  const filterdBlog = blog.filter((post) => !post.data.isDraft);

  return rss({
    title: "zcip's reading list",
    description: "zcipが興味を持ったコンテンツをだいたい毎週まとめます",
    site: context.site,
    items: filterdBlog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.slug}`,
    })),
    customData: `<language>ja</language>`,
  });
}
