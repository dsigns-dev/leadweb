/**
 * Batch-convert all JPG / PNG images under src/assets/ and public/ to WebP.
 *
 * Usage:  npx tsx scripts/convert-to-webp.ts
 *
 * - Quality 80 (good balance of size vs. clarity)
 * - Max dimension 1600px (no image on the site needs to be larger)
 * - Originals are deleted after successful conversion
 */

import sharp from "sharp";
import { readdir, unlink } from "node:fs/promises";
import { join, extname, basename } from "node:path";

const QUALITY = 80;
const MAX_DIM = 1600;

const DIRS = [
  "src/assets",
  "src/assets/blog",
  "src/assets/blog/covers",
  "src/assets/industries",
  "public/pay-per-lead",
];

const SINGLE_FILES = ["public/opengraph.png"];

async function convertFile(filePath: string): Promise<void> {
  const ext = extname(filePath).toLowerCase();
  if (![".jpg", ".jpeg", ".png"].includes(ext)) return;

  const outPath = filePath.replace(/\.(jpg|jpeg|png)$/i, ".webp");
  const name = basename(filePath);

  try {
    await sharp(filePath)
      .resize({ width: MAX_DIM, height: MAX_DIM, fit: "inside", withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(outPath);

    // Delete original
    await unlink(filePath);
    const origSize = (await import("node:fs")).statSync(outPath).size;
    console.log(`  ✓ ${name} → ${basename(outPath)}  (${(origSize / 1024).toFixed(0)} KB)`);
  } catch (err) {
    console.error(`  ✗ ${name}: ${err}`);
  }
}

async function convertDir(dir: string): Promise<void> {
  let entries;
  try {
    entries = await readdir(dir);
  } catch {
    console.log(`  ⊘ Skipping ${dir} (not found)`);
    return;
  }

  for (const entry of entries) {
    const full = join(dir, entry);
    await convertFile(full);
  }
}

async function main() {
  console.log("🖼  Converting images to WebP…\n");

  for (const dir of DIRS) {
    console.log(`📂 ${dir}`);
    await convertDir(dir);
    console.log();
  }

  for (const f of SINGLE_FILES) {
    console.log(`📄 ${f}`);
    await convertFile(f);
  }

  console.log("\n✅ Done!");
}

main();
