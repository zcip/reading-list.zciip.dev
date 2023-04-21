import type { CollectionEntry } from "astro:content";

export function getSortedUniqTag(posts: CollectionEntry<"posts">[]) {
  const allTags = posts.map((post) => post.data.tags).flat();
  const tags = Object.entries(
    allTags.reduce((count: { [key: string]: number }, item: string) => {
      count[item] = (count[item] || 0) + 1;
      return count;
    }, {})
  )
    .sort((a, b) => b[1] - a[1])
    .map(([item, _]) => item);
  return tags;
}
