// @ts-check
import fs from "node:fs/promises";
import { addDays, format, setDay, startOfDay } from "date-fns";

function getNextTuesday(date = new Date()) {
  // 次の週の初めの日付を取得
  const nextWeek = addDays(startOfDay(date), 7);
  // 2は火曜日を表す
  return setDay(nextWeek, 2);
}

const dateStr = format(getNextTuesday(), "yyyy-MM-dd");

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
