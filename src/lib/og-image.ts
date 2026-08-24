import sharp from "sharp";

// Dark-card OG image renderer, matching the site's existing static
// og-image.png (dark background, purple accent bar + glow, muted footer).
// Renders an SVG string to PNG via sharp. No external font/image assets
// are loaded — text uses SVG's built-in sans-serif fallback so this works
// identically in any build environment.

const WIDTH = 1200;
const HEIGHT = 630;

// Theme colors (matching theme.css defaults: pluto accent, dark mode).
const BG = "#030b14";
const ACCENT = "#a855f7";
const TEXT = "#ececf4";
const MUTED = "#b4bcc8";
const BORDER = "#242a36";

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Naive greedy word-wrap based on an average-character-width estimate.
// Good enough for a fixed-size OG card; not a general-purpose text layout engine.
// Builds every line first, then truncates to maxLines with an ellipsis if
// the full text didn't fit.
function wrapText(text: string, maxCharsPerLine: number, maxLines: number): string[] {
  const words = text.split(/\s+/);
  const allLines: string[] = [];
  let current = "";
  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxCharsPerLine && current) {
      allLines.push(current);
      current = word;
    } else {
      current = next;
    }
  }
  if (current) allLines.push(current);

  if (allLines.length <= maxLines) return allLines;

  const truncated = allLines.slice(0, maxLines);
  const last = truncated[maxLines - 1].replace(/[.,;:]?$/, "");
  truncated[maxLines - 1] = `${last}…`;
  return truncated;
}

export interface OgCardOptions {
  /** Large headline (auto-wrapped, up to 3 lines). */
  title: string;
  /** Accent-colored line below the title (e.g. series + volume, or role line). */
  subtitle: string;
  /** Small muted chips/tags shown below the subtitle (optional, max 3). */
  chips?: string[];
  /** Bottom-left small text. */
  footerLeft: string;
  /** Bottom-right small text. */
  footerRight?: string;
}

export async function renderOgCard(opts: OgCardOptions): Promise<Buffer> {
  const { title, subtitle, chips = [], footerLeft, footerRight = "" } = opts;

  const titleLines = wrapText(title, 34, 3);
  const titleFontSize = titleLines.length > 2 ? 48 : 56;
  const titleLineHeight = titleFontSize * 1.15;
  const titleStartY = 240;

  const titleTspans = titleLines
    .map((line, i) => `<tspan x="120" dy="${i === 0 ? 0 : titleLineHeight}">${escapeXml(line)}</tspan>`)
    .join("");

  const subtitleY = titleStartY + titleLines.length * titleLineHeight + 36;

  const chipsSvg = chips
    .slice(0, 3)
    .map((chip, i) => {
      const x = 120 + i * 190;
      const w = Math.min(180, 24 + chip.length * 9);
      return `
        <rect x="${x}" y="${subtitleY + 34}" width="${w}" height="36" rx="18" fill="${ACCENT}" fill-opacity="0.12" stroke="${ACCENT}" stroke-opacity="0.4" />
        <text x="${x + w / 2}" y="${subtitleY + 58}" font-family="Arial, sans-serif" font-size="15" fill="${ACCENT}" text-anchor="middle">${escapeXml(chip)}</text>
      `;
    })
    .join("");

  const footerY = HEIGHT - 100;

  const svg = `
<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="18%" cy="22%" r="55%">
      <stop offset="0%" stop-color="${ACCENT}" stop-opacity="0.35" />
      <stop offset="100%" stop-color="${ACCENT}" stop-opacity="0" />
    </radialGradient>
  </defs>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="${BG}" />
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#glow)" />

  <rect x="72" y="${titleStartY - titleFontSize + 8}" width="6" height="${Math.max(64, titleFontSize + 16)}" rx="3" fill="${ACCENT}" fill-opacity="0.85" />

  <text x="120" y="${titleStartY}" font-family="Arial, sans-serif" font-size="${titleFontSize}" font-weight="700" fill="${TEXT}" letter-spacing="-1">${titleTspans}</text>

  <text x="120" y="${subtitleY}" font-family="Arial, sans-serif" font-size="24" font-weight="500" fill="${ACCENT}">${escapeXml(subtitle)}</text>

  ${chipsSvg}

  <line x1="120" y1="${footerY - 30}" x2="${WIDTH - 120}" y2="${footerY - 30}" stroke="${BORDER}" stroke-width="1" />
  <text x="120" y="${footerY}" font-family="Arial, sans-serif" font-size="20" fill="${MUTED}">${escapeXml(footerLeft)}</text>
  ${footerRight ? `<text x="${WIDTH - 120}" y="${footerY}" font-family="Arial, sans-serif" font-size="20" fill="${MUTED}" text-anchor="end">${escapeXml(footerRight)}</text>` : ""}
</svg>`.trim();

  return sharp(Buffer.from(svg)).png().toBuffer();
}
