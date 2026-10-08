// Fails if any internal link in src/ points at a path that has no <Route> in AppRoutes.jsx.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const SRC = new URL("../src", import.meta.url).pathname;

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

const files = walk(SRC).filter((f) => [".jsx", ".js"].includes(extname(f)) && !/backup/i.test(f));

const routesSrc = readFileSync(join(SRC, "routes/AppRoutes.jsx"), "utf8");
const routePaths = [...routesSrc.matchAll(/<Route\s+path="([^"]+)"/g)].map((m) => m[1]);
const routeRegexes = routePaths
  .filter((p) => p !== "*")
  .map((p) => new RegExp(`^${p.replace(/:[^/]+/g, "[^/]+")}$`));

const isRoute = (path) => routeRegexes.some((re) => re.test(path));

// to="/x", to={"/x"}, href="/x", navigate("/x"), and data objects: to/path/link/href/cta: "/x"
const patterns = [
  /\bto=(?:\{)?["'`](\/[^"'`$]*)["'`]/g,
  /\bhref=(?:\{)?["'`](\/[^"'`$]*)["'`]/g,
  /\bnavigate\(\s*["'`](\/[^"'`$]*)["'`]/g,
  /\b(?:to|path|link|href|cta|url)\s*:\s*["'`](\/[^"'`$]*)["'`]/g,
  /window\.location\.(?:href|assign)\s*=\s*["'`](\/[^"'`$]*)["'`]/g,
];

const bad = [];
let checked = 0;
for (const file of files) {
  if (file.endsWith("AppRoutes.jsx")) continue;
  const text = readFileSync(file, "utf8");
  for (const re of patterns) {
    for (const m of text.matchAll(re)) {
      const raw = m[1];
      if (raw.startsWith("//") || raw.startsWith("/api/") || raw.startsWith("/assets/")) continue;
      const path = raw.split(/[?#]/)[0].replace(/\/+$/, "") || "/";
      checked += 1;
      if (!isRoute(path)) bad.push(`${file.replace(SRC + "/", "src/")}: ${raw}`);
    }
  }
}

console.log(`Checked ${checked} internal links against ${routePaths.length} routes.`);
if (bad.length) {
  console.error(`\n${bad.length} broken internal link(s):\n` + [...new Set(bad)].join("\n"));
  process.exit(1);
}
console.log("All internal links resolve.");
