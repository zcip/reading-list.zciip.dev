// @ts-check
import fs from "node:fs/promises";
import { format } from "date-fns";

const dateStr = format(new Date(), "yyyy-MM-dd");

const template = `---
isDraft: true
title: TODO
slug: "${dateStr}"
description: TODO
pubDate: ${dateStr}
tags: ["web"]
---

## 読んだ記事


## その他

`;

fs.writeFile(`src/content/posts/${dateStr}.md`, template, {
  encoding: "utf-8",
  flag: "wx", // 存在する場合上書きしない
}).catch((error) => {
  console.log(error.message);
});
