// Resize/compress images in public/assets/* using sharp
// Run: node scripts/optimize-images.mjs
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(process.cwd(), "public", "assets");

const targets = [
  // [globDir, maxWidth, maxHeight, quality]
  ["badges", 240, 96, 80],    // width<=240, height<=96
  ["logos", 64, 64, 82],      // square 64x64 (issuers/companies); schools get tweaked below
  ["", 320, 320, 85],         // profile.jpg at root of /assets
];

const isImage = (f) => /\.(png|jpg|jpeg|webp)$/i.test(f);
const walk = (dir) =>
  fs.readdirSync(dir).flatMap((name) => {
    const full = path.join(dir, name);
    return fs.statSync(full).isDirectory() ? walk(full) : [full];
  });

const clamp = async (file, maxW, maxH, quality) => {
  const ext = path.extname(file).toLowerCase();
  if (ext === ".svg") return; // leave svgs alone
  const img = sharp(file, { failOn: "none" });
  const meta = await img.metadata().catch(() => null);
  if (!meta || !meta.width || !meta.height) return;

  const width = Math.min(meta.width, maxW);
  const height = Math.min(meta.height, maxH);

  let pipeline = img.resize({ width, height, fit: "inside", withoutEnlargement: true });
  if (ext === ".png") pipeline = pipeline.png({ compressionLevel: 9, quality });
  if (ext === ".jpg" || ext === ".jpeg") pipeline = pipeline.jpeg({ quality, mozjpeg: true });
  if (ext === ".webp") pipeline = pipeline.webp({ quality });

  await pipeline.toFile(file + ".tmp");
  fs.renameSync(file + ".tmp", file);
  console.log("✓", path.relative(process.cwd(), file), `→ ≤${maxW}x${maxH}`);
};

const run = async () => {
  // Generic targets
  for (const [subdir, maxW, maxH, quality] of targets) {
    const dir = path.join(root, subdir);
    if (!fs.existsSync(dir)) continue;
    const files = walk(dir).filter(isImage);
    for (const f of files) {
      await clamp(f, maxW, maxH, quality);
    }
  }

  // Special-case school logos for 56×56 if present
  const schoolFiles = ["asu.png", "ucberkeley.png", "uci.png"]
    .map((n) => path.join(root, "logos", n))
    .filter((p) => fs.existsSync(p));
  for (const f of schoolFiles) await clamp(f, 56, 56, 82);

  console.log("Image optimization complete.");
};

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
