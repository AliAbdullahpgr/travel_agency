/**
 * Replace all hardcoded local image paths with UploadThing URLs.
 * Reads mapping from scripts/image-mapping.json.
 */

import fs from "node:fs";
import path from "node:path";

const mapping = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), "scripts", "image-mapping.json"), "utf-8"),
);

// Files to process
const files = [
  "src/content/tours.ts",
  "src/content/homepage.ts",
  "src/content/site.ts",
  "src/server/cms/fallbacks.ts",
  "src/components/public/HeroCinematic.tsx",
  "src/components/public/FeaturedCardSlider.tsx",
  "src/app/(public)/page.tsx",
  "src/app/(public)/layout.tsx",
  "src/app/(public)/hakkimizda/page.tsx",
  "src/app/(public)/iletisim/page.tsx",
];

let totalReplacements = 0;

for (const relPath of files) {
  const absPath = path.join(process.cwd(), relPath);
  if (!fs.existsSync(absPath)) {
    console.log(`SKIP (not found): ${relPath}`);
    continue;
  }

  let content = fs.readFileSync(absPath, "utf-8");
  let fileReplacements = 0;

  // Sort by longest key first to avoid partial matches
  const sortedKeys = Object.keys(mapping).sort((a, b) => b.length - a.length);

  for (const oldPath of sortedKeys) {
    const newUrl = mapping[oldPath];
    // Match the path in quotes (both single and double)
    const escapedPath = oldPath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`"${escapedPath}"`, "g");
    const matches = content.match(regex);
    if (matches) {
      content = content.replace(regex, `"${newUrl}"`);
      fileReplacements += matches.length;
    }
  }

  if (fileReplacements > 0) {
    fs.writeFileSync(absPath, content);
    console.log(`${relPath}: ${fileReplacements} replacement(s)`);
    totalReplacements += fileReplacements;
  } else {
    console.log(`${relPath}: no matches`);
  }
}

console.log(`\nTotal: ${totalReplacements} replacement(s) across all files`);
