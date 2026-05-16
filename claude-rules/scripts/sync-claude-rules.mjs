#!/usr/bin/env node
import { cpSync, mkdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "..", "rules");
const target = join(process.cwd(), ".claude", "rules");

if (!existsSync(source)) {
  console.error(`✗ Source rules directory not found: ${source}`);
  process.exit(1);
}

mkdirSync(target, { recursive: true });
cpSync(source, target, { recursive: true });

console.log(`✓ Synced Claude rules to ${target}`);
