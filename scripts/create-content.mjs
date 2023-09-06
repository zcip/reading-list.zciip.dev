// @ts-check
import fs from "node:fs/promises";
import { addDays, format, setDay, startOfDay } from "date-fns";

function getNextTuesday(date = new Date()) {
  // 次の週の初めの日付を取得
  const nextWeek = addDays(startOfDay(date), 7);
  // 2は火曜日を表す
  return setDay(nextWeek, 2);
}

async function main() {
  const dateStr = format(getNextTuesday(), "yyyy-MM-dd");

  const template = `---
isDraft: true
title: TODO
description: TODO
pubDate: ${dateStr}
tags: ["web"]
---

## 読んだ記事


## その他

`;

  const filePath = `src/content/posts/${dateStr}.md`;

  try {
    await fs.writeFile(filePath, template, {
      encoding: "utf-8",
      flag: "wx", // 存在する場合上書きしない
    });
    console.log("⚡️ ", filePath);
  } catch (error) {
    console.log(error.message);
  }
}

main();
