#!/usr/bin/env node
/**
 * Convenience runner for Impeccable in this workspace.
 * Usage:
 *   node impeccable.mjs context [--target <path>]
 *   node impeccable.mjs detect [--json] <files...>
 *   node impeccable.mjs doctor
 */
import { fileURLToPath } from 'url';
import path from 'path';
import { spawnSync } from 'child_process';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const command = args[0] || 'context';
const restArgs = args.slice(1);

const scriptMap = {
  context: '.gemini/skills/impeccable/scripts/context.mjs',
  detect: '.gemini/skills/impeccable/scripts/detect.mjs',
  doctor: '.gemini/skills/impeccable/scripts/doctor.mjs',
  hook: '.gemini/skills/impeccable/scripts/hook.mjs',
  pin: '.gemini/skills/impeccable/scripts/pin.mjs'
};

const scriptRelPath = scriptMap[command] || `.gemini/skills/impeccable/scripts/${command}.mjs`;
const scriptFullPath = path.resolve(__dirname, scriptRelPath);

if (!fs.existsSync(scriptFullPath)) {
  console.error(`Error: Unknown command "${command}". Available commands: ${Object.keys(scriptMap).join(', ')}`);
  process.exit(1);
}

const res = spawnSync(process.execPath, [scriptFullPath, ...restArgs], {
  stdio: 'inherit',
  cwd: __dirname
});

process.exit(res.status ?? 0);
