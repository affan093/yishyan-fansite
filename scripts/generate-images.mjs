import { writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "images");

function svg(title, c1, c2, sub) {
  const subEl = sub
    ? `<text x="200" y="175" text-anchor="middle" fill="rgba(255,255,255,0.85)" font-size="14" font-family="system-ui,sans-serif">${sub}</text>`
    : "";
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${c1}"/><stop offset="100%" stop-color="${c2}"/></linearGradient></defs><rect width="400" height="300" fill="url(#g)"/><text x="200" y="140" text-anchor="middle" fill="white" font-size="22" font-weight="bold" font-family="system-ui,sans-serif">${title}</text>${subEl}</svg>`;
}

function write(rel, content) {
  const path = join(root, rel);
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, content, "utf8");
}

const outfits = [
  ["outfits/heavy-rotation.svg", "Heavy Rotation", "#10b981", "#059669", "Uniform"],
  ["outfits/alasanku-maybe.svg", "Alasanku Maybe", "#38bdf8", "#0284c7", "Uniform"],
  ["outfits/green-flash.svg", "Green Flash", "#a3e635", "#16a34a", "Uniform"],
  ["outfits/oh-my-pumpkin.svg", "Oh My Pumpkin", "#fb923c", "#d97706", "Uniform"],
  ["outfits/street-style.svg", "Street Style", "#64748b", "#475569", "Casual"],
  ["outfits/fan-meeting.svg", "Fan Meeting", "#818cf8", "#4f46e5", "Casual"],
  ["outfits/travel-day.svg", "Travel Day", "#2dd4bf", "#0d9488", "Casual"],
  ["outfits/festival-stage.svg", "Festival Stage", "#fb7185", "#e11d48", "Event"],
  ["outfits/collaboration.svg", "Collaboration", "#a78bfa", "#7c3aed", "Event"],
  ["outfits/special-mc.svg", "Special MC", "#fbbf24", "#d97706", "Event"],
];

const eventList = [
  ["events/cosmic-spring.svg", "Cos-mic Spring", "#2563eb", "#1d4ed8"],
  ["events/deruan-kasih.svg", "Deruan Kasih", "#0ea5e9", "#0369a1"],
  ["events/xuan-fan-party.svg", "XUAN Fan Party", "#f43f5e", "#be123c"],
  ["events/anime-fantasia.svg", "Anime Fantasia", "#8b5cf6", "#6d28d9"],
  ["events/klp-debut.svg", "Debut Showcase", "#2563eb", "#1e40af"],
  ["events/fan-meet-kl.svg", "Fan Meeting KL", "#14b8a6", "#0f766e"],
  ["events/anniversary-live.svg", "1st Anniversary", "#ec4899", "#be185d"],
];

const merch = [
  ["merch/photocard-set.svg", "Photocard Set", "#64748b", "#334155"],
  ["merch/keychain.svg", "Keychain", "#f472b6", "#db2777"],
  ["merch/tshirt.svg", "Member T-Shirt", "#3b82f6", "#1d4ed8"],
  ["merch/towel.svg", "Mini Live Towel", "#84cc16", "#4d7c0f"],
  ["merch/badge-set.svg", "Badge Set", "#f59e0b", "#b45309"],
  ["merch/lightstick.svg", "Lightstick", "#7c3aed", "#5b21b6"],
];

for (const [file, title, c1, c2, sub] of outfits) write(file, svg(title, c1, c2, sub));
for (const [file, title, c1, c2] of eventList) write(file, svg(title, c1, c2, "Event"));
for (const [file, title, c1, c2] of merch) write(file, svg(title, c1, c2, "Merch"));

console.log("Generated placeholder images in public/images/");
