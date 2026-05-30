#!/usr/bin/env node
import { cpSync, mkdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { spawnSync } from "node:child_process";

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

const skillsResult = spawnSync(
  "npx",
  [
    "--yes",
    "skills",
    "add",
    "vercel-labs/agent-skills",
    "-a",
    "claude-code",
    "-y",
  ],
  { stdio: "inherit" },
);

if (skillsResult.error) {
  console.warn(
    `⚠ vercel-labs/agent-skills 설치 건너뜀 (npx 실행 실패): ${skillsResult.error.message}`,
  );
} else if (skillsResult.status !== 0) {
  console.warn(
    `⚠ vercel-labs/agent-skills 설치가 code ${skillsResult.status} 로 종료되었습니다. rules sync는 정상 완료.`,
  );
} else {
  console.log("✓ Installed vercel-labs/agent-skills to .claude/skills/");
}
