/**
 * @see https://docs.astro.build/en/guides/content-collections/
 */
import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    isDraft: z.boolean(),
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    tags: z.array(z.string()),
    // TODO: OG imageを設定する
    // image: z.object({
    //   url: z.string(),
    //   alt: z.string(),
    // }),
  }),
});

export const collections = {
  posts: postsCollection,
};
