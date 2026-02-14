/**
 * Upload all public images to UploadThing and output a JSON mapping.
 *
 * Usage:
 *   node scripts/upload-images.mjs
 *
 * Requires UPLOADTHING_TOKEN in .env
 */

import fs from "node:fs";
import path from "node:path";
import { UTApi, UTFile } from "uploadthing/server";
import "dotenv/config";

const utapi = new UTApi();

const PUBLIC_DIR = path.join(process.cwd(), "public");

// All images to upload
const IMAGE_FILES = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "8.jpg",
  "kabbah1.jpg",
  "kabbah2.jpg",
  "kabbah3.jpg",
  "logo.png",
  "CHat.png",
  "cultural/2025-Site-visit-images-18.jpg",
  "cultural/central-anatolia-region.jpg",
];

async function main() {
  /** @type {Record<string, string>} */
  const mapping = {};

  for (const relPath of IMAGE_FILES) {
    const absPath = path.join(PUBLIC_DIR, relPath);
    if (!fs.existsSync(absPath)) {
      console.log(`SKIP (not found): ${relPath}`);
      continue;
    }

    const buffer = fs.readFileSync(absPath);
    const fileName = relPath.replace(/\//g, "-"); // flatten path for UT name
    const file = new UTFile([buffer], fileName);

    console.log(`Uploading ${relPath} ...`);
    try {
      const result = await utapi.uploadFiles(file);
      if (result.error) {
        console.error(`  ERROR: ${result.error.message}`);
        continue;
      }
      const url = result.data.ufsUrl;
      // Map both `/relPath` and `relPath` forms
      mapping[`/${relPath}`] = url;
      console.log(`  OK -> ${url}`);
    } catch (err) {
      console.error(`  FAILED: ${err.message}`);
    }
  }

  const outPath = path.join(process.cwd(), "scripts", "image-mapping.json");
  fs.writeFileSync(outPath, JSON.stringify(mapping, null, 2));
  console.log(`\nMapping saved to ${outPath}`);
  console.log(JSON.stringify(mapping, null, 2));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
