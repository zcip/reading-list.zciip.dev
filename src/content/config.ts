/**
 * @see https://docs.astro.build/en/guides/content-collections/
 */
import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  schema: z.object({
    isDraft: z.boolean(),
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
  }),
});

export const collections = {
  posts: postsCollection,
};
