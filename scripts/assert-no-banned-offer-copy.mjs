#!/usr/bin/env node

import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const thisFile = fileURLToPath(import.meta.url);

const ignoredDirectories = new Set([
  '.git',
  '.next',
  '.vercel',
  'node_modules',
]);

const scannedExtensions = new Set([
  '.css',
  '.html',
  '.js',
  '.json',
  '.jsx',
  '.md',
  '.mjs',
  '.ts',
  '.tsx',
  '.txt',
  '.yml',
  '.yaml',
]);

const ordinal = String.raw`(?:fir` + `st|1` + `st)`;
const adjustment = 'adjust' + 'ment';

const bannedPatterns = [
  {
    label: 'ordinal adjustment offer language',
    pattern: new RegExp(String.raw`\b${ordinal}\s+(?:chiropractic\s+|webster\s+)?${adjustment}\b`, 'i'),
  },
];

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      if (!ignoredDirectories.has(entry.name)) {
        files.push(...await walk(entryPath));
      }
      continue;
    }

    if (entry.isFile() && entryPath !== thisFile && scannedExtensions.has(path.extname(entry.name))) {
      files.push(entryPath);
    }
  }

  return files;
}

function findBannedCopy(filePath, text) {
  const relativePath = path.relative(root, filePath);
  const findings = [];

  text.split(/\r?\n/).forEach((line, index) => {
    for (const banned of bannedPatterns) {
      const match = line.match(banned.pattern);
      if (match) {
        findings.push({
          path: relativePath,
          line: index + 1,
          label: banned.label,
          excerpt: match[0],
        });
      }
    }
  });

  return findings;
}

const files = await walk(root);
const findings = [];

for (const filePath of files) {
  const text = await readFile(filePath, 'utf8');
  findings.push(...findBannedCopy(filePath, text));
}

if (findings.length > 0) {
  console.error('Banned Elise offer copy found. Replace the new-patient offer with exam, X-rays, sEMG nerve scan, posture analysis, or doctor recommendations.');
  for (const finding of findings) {
    console.error(`${finding.path}:${finding.line}: ${finding.label}: ${finding.excerpt}`);
  }
  process.exit(1);
}

console.log(`Offer copy guard passed: scanned ${files.length} files.`);
