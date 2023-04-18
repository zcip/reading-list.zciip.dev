import { getCollection } from "astro:content";
import { isAfter } from "date-fns";

/**
 * Prod環境かつisDraftがfalseの公開済みの投稿を取得
 * 結果は新着公開順で整列
 */
export async function getPublishedPosts() {
  const posts = await getCollection("posts");
  return posts
    .filter((post) => {
      return !(post.data.isDraft && import.meta.env.PROD);
    })
    .sort((a, b) => (isAfter(b.data.pubDate, a.data.pubDate) ? 1 : -1));
}
