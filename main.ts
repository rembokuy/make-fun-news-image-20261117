// The World in One Page — 17 November 2026 (make.fun news-image-20261117).
//
// This program writes the entry image to the output directory.
// The image itself is produced by rendering render.html in a headless
// browser; this script only copies the finished file, so running it
// twice always produces a byte-identical result with no network use.

import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
const target = join(outputDir, "entry.png");

if (!existsSync(source)) {
  throw new Error(`entry.png not found next to main.ts (${source})`);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);
const bytes = statSync(target).size;
console.log(`Wrote ${target} (${bytes} bytes)`);
