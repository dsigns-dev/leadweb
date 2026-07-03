#!/usr/bin/env bun
/**
 * Build-time guard: verifies every location × service page has a unique
 * metaTitle and metaDescription, and that the head() output of
 * locationHead() contains all required og tags + a self-referential
 * canonical. Fails the build (exit 1) on any violation.
 */
import { locations } from "../src/content/locations";
import { locationHead } from "../src/components/location-page";

type MetaEntry = Record<string, string | undefined> & {
  title?: string;
  name?: string;
  property?: string;
  content?: string;
};

const REQUIRED_OG = ["og:title", "og:description", "og:type", "og:url"] as const;
const errors: string[] = [];
const titleSeen = new Map<string, string>();
const descSeen = new Map<string, string>();

for (const loc of locations) {
  const path = `/location/${loc.slug}/`;
  const head = locationHead(loc, path) as {
    meta?: MetaEntry[];
    links?: Array<{ rel?: string; href?: string }>;
  };
  const meta = head.meta ?? [];
  const links = head.links ?? [];

  const title = meta.find((m) => m.title)?.title;
  const desc = meta.find((m) => m.name === "description")?.content;

  if (!title) errors.push(`${loc.slug}: missing <title>`);
  if (!desc) errors.push(`${loc.slug}: missing meta description`);

  if (title) {
    const prior = titleSeen.get(title);
    if (prior) errors.push(`${loc.slug}: duplicate metaTitle (also on ${prior}) → "${title}"`);
    else titleSeen.set(title, loc.slug);
  }
  if (desc) {
    const prior = descSeen.get(desc);
    if (prior) errors.push(`${loc.slug}: duplicate metaDescription (also on ${prior})`);
    else descSeen.set(desc, loc.slug);
  }

  for (const prop of REQUIRED_OG) {
    const entry = meta.find((m) => m.property === prop);
    if (!entry || !entry.content) errors.push(`${loc.slug}: missing ${prop}`);
  }

  const ogUrl = meta.find((m) => m.property === "og:url")?.content;
  if (ogUrl && ogUrl !== path) {
    errors.push(`${loc.slug}: og:url "${ogUrl}" should equal "${path}"`);
  }

  const canonicals = links.filter((l) => l.rel === "canonical");
  if (canonicals.length === 0) errors.push(`${loc.slug}: missing rel=canonical`);
  else if (canonicals.length > 1) errors.push(`${loc.slug}: multiple canonical links`);
  else if (canonicals[0].href !== path) {
    errors.push(`${loc.slug}: canonical "${canonicals[0].href}" should equal "${path}"`);
  }
}

if (errors.length > 0) {
  console.error(
    `\n✗ Location meta check failed (${errors.length} issue${errors.length === 1 ? "" : "s"}):`,
  );
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}

console.log(`✓ Location meta check passed for ${locations.length} pages.`);
