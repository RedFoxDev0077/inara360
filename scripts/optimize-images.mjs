// Crops, resizes, renames and compresses the raw images in /img into src/assets/images (WebP)
// and the social share image into src/app (JPG). Run: npm run images
import sharp from "sharp";
import { mkdir, stat } from "node:fs/promises";
import path from "node:path";

const SRC = "img";
const OUT = "src/assets/images";

// left/top are 0..1 focal points used when the crop is narrower/shorter than the source.
const jobs = [
  { src: "WhatsApp Image 2026-10-06 at 8.51.36 PM.jpg", out: "hero-aerial.webp", w: 1920, h: 1080, fx: 0.5, fy: 0.6, q: 70 },
  { src: "WhatsApp Image 2026-10-06 at 8.52.43 PM.jpg", out: "problem-desk.webp", w: 1600, h: 800, fx: 0.5, fy: 0.55, q: 72 },
  { src: "WhatsApp Image 2026-10-06 at 8.54.08 PM.jpg", out: "copilot-manager.webp", w: 1920, h: 1080, fx: 0.5, fy: 0.4, q: 70 },
  { src: "WhatsApp Image 2026-10-06 at 8.56.17 PM.jpg", out: "client-portal.webp", w: 1600, h: 1000, fx: 0.4, fy: 0.5, q: 74 },
  { src: "WhatsApp Image 2026-10-06 at 8.57.15 PM.jpg", out: "site-mobile.webp", w: 960, h: 1200, fx: 0.53, fy: 0.5, q: 75 },
  { src: "WhatsApp Image 2026-10-06 at 8.58.02 PM.jpg", out: "step-1-plan.webp", w: 800, h: 600, fx: 0.5, fy: 0.5, q: 75 },
  { src: "WhatsApp Image 2026-10-06 at 8.58.02 1PM.jpg", out: "step-2-site.webp", w: 800, h: 600, fx: 0.5, fy: 0.35, q: 75 },
  { src: "WhatsApp Image 2026-10-06 at 8.58.023 PM.jpg", out: "step-3-decide.webp", w: 800, h: 600, fx: 0.5, fy: 0.55, q: 75 },
  { src: "WhatsApp Image 2026-10-06 at 8.59.43 PM.jpg", out: "cta-night.webp", w: 1920, h: 1080, fx: 0.5, fy: 0.5, q: 68 },
  { src: "WhatsApp Image 2026-10-06 at 9.00.29 PM.jpg", out: "../../app/opengraph-image.jpg", w: 1200, h: 630, fx: 0.5, fy: 0.55, q: 82, jpg: true },
];

const kb = (n) => `${(n / 1024).toFixed(0)} KB`;

await mkdir(OUT, { recursive: true });

for (const j of jobs) {
  const input = path.join(SRC, j.src);
  const output = path.join(OUT, j.out);
  const meta = await sharp(input).metadata();

  // Crop to the target aspect ratio around the focal point, then resize.
  const target = j.w / j.h;
  let cw = meta.width;
  let ch = Math.round(cw / target);
  if (ch > meta.height) {
    ch = meta.height;
    cw = Math.round(ch * target);
  }
  const left = Math.min(Math.max(Math.round(meta.width * j.fx - cw / 2), 0), meta.width - cw);
  const top = Math.min(Math.max(Math.round(meta.height * j.fy - ch / 2), 0), meta.height - ch);

  let img = sharp(input)
    .rotate()
    .extract({ left, top, width: cw, height: ch })
    .resize(j.w, j.h, { withoutEnlargement: true })
    .withMetadata({ exif: {} });

  img = j.jpg
    ? img.jpeg({ quality: j.q, mozjpeg: true, progressive: true })
    : img.webp({ quality: j.q, effort: 6, smartSubsample: true });

  await img.toFile(output);
  const [a, b] = await Promise.all([stat(input), stat(output)]);
  console.log(`${path.basename(j.out).padEnd(24)} ${meta.width}x${meta.height} → ${j.w}x${j.h}  ${kb(a.size)} → ${kb(b.size)}`);
}
