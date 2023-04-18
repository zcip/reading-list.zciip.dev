import { getCollection } from "astro:content";

/**
 * Prod環境かつisDraftがfalseの公開済みの投稿を取得
 */
export async function getPublishedPosts() {
  const posts = await getCollection("posts");
  return posts.filter((post) => {
    return !(post.data.isDraft && import.meta.env.PROD);
  });
}
