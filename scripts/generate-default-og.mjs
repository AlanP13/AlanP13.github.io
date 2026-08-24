// Regenerates public/og-image.png (the site-wide default OG/social-preview
// card) from the same renderer used for per-research-page dynamic cards.
// Run manually with `node scripts/generate-default-og.mjs` whenever the
// name, title, or featured-topics copy on this card needs to change --
// it is a static public/ asset, not generated at build time.
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import sharp from "sharp";

const WIDTH = 1200;
const HEIGHT = 630;
const BG = "#030b14";
const ACCENT = "#a855f7";
const TEXT = "#ececf4";
const MUTED = "#b4bcc8";
const BORDER = "#242a36";

function escapeXml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

const chips = ["Data Engineering", "Financial Systems", "AI & Data Science"];
const chipsSvg = chips
  .map((chip, i) => {
    const x = 120 + i * 210;
    const w = Math.min(200, 30 + chip.length * 9);
    return `
      <rect x="${x}" y="358" width="${w}" height="36" rx="18" fill="${ACCENT}" fill-opacity="0.12" stroke="${ACCENT}" stroke-opacity="0.4" />
      <text x="${x + w / 2}" y="382" font-family="Arial, sans-serif" font-size="15" fill="${ACCENT}" text-anchor="middle">${escapeXml(chip)}</text>
    `;
  })
  .join("");

const svg = `
<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="82%" cy="18%" r="55%">
      <stop offset="0%" stop-color="${ACCENT}" stop-opacity="0.30" />
      <stop offset="100%" stop-color="${ACCENT}" stop-opacity="0" />
    </radialGradient>
  </defs>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="${BG}" />
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#glow)" />

  <rect x="72" y="188" width="6" height="90" rx="3" fill="${ACCENT}" fill-opacity="0.85" />

  <text x="120" y="260" font-family="Arial, sans-serif" font-size="64" font-weight="800" fill="${TEXT}" letter-spacing="-1">Alan Palayil</text>
  <text x="120" y="310" font-family="Arial, sans-serif" font-size="26" fill="${MUTED}">Data Engineer &#183; Ph.D. Student</text>

  ${chipsSvg}

  <line x1="120" y1="470" x2="${WIDTH - 120}" y2="470" stroke="${BORDER}" stroke-width="1" />
  <text x="120" y="510" font-family="Arial, sans-serif" font-size="22" fill="${MUTED}">alanp13.github.io</text>
</svg>`.trim();

const png = await sharp(Buffer.from(svg)).png().toBuffer();
const outPath = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "public", "og-image.png");
await writeFile(outPath, png);
console.log(`Wrote ${outPath} (${png.length} bytes)`);
