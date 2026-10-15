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

const candidateBases = [
  path.join(__dirname, '.agents', 'skills', 'impeccable', 'scripts'),
  path.join(__dirname, '.claude', 'skills', 'impeccable', 'scripts'),
  path.join(__dirname, '.gemini', 'skills', 'impeccable', 'scripts'),
];

const scriptsDir = candidateBases.find(p => fs.existsSync(p));

if (!scriptsDir) {
  console.error('Error: Impeccable scripts directory not found in .agents, .claude, or .gemini');
  process.exit(1);
}

const scriptFullPath = path.join(scriptsDir, `${command}.mjs`);

if (!fs.existsSync(scriptFullPath)) {
  console.error(`Error: Script "${command}.mjs" not found at ${scriptFullPath}. Available scripts: context, detect, doctor, hook, pin.`);
  process.exit(1);
}

const res = spawnSync(process.execPath, [scriptFullPath, ...restArgs], {
  stdio: 'inherit',
  cwd: __dirname
});

process.exit(res.status ?? 0);
