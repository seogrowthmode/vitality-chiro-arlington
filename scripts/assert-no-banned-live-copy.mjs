#!/usr/bin/env node

const urls = process.argv.slice(2);

if (urls.length === 0) {
  console.error('Usage: node scripts/assert-no-banned-live-copy.mjs <url> [url...]');
  process.exit(2);
}

const ordinal = String.raw`(?:fir` + `st|1` + `st)`;
const adjustment = 'adjust' + 'ment';

const bannedPatterns = [
  {
    label: 'ordinal adjustment offer language',
    pattern: new RegExp(String.raw`\b${ordinal}\s+(?:chiropractic\s+|webster\s+)?${adjustment}\b`, 'i'),
  },
];

const findings = [];

for (const url of urls) {
  const response = await fetch(url, {
    redirect: 'follow',
    headers: {
      'user-agent': 'ChiroFlowOfferCopyGuard/1.0',
    },
  });

  if (!response.ok) {
    findings.push(`${url}: HTTP ${response.status}`);
    continue;
  }

  const body = await response.text();
  const lines = body.split(/\r?\n/);

  lines.forEach((line, index) => {
    for (const banned of bannedPatterns) {
      const match = line.match(banned.pattern);
      if (match) {
        findings.push(`${url}:${index + 1}: ${banned.label}: ${match[0]}`);
      }
    }
  });
}

if (findings.length > 0) {
  console.error('Banned Elise offer copy found on the live site.');
  for (const finding of findings) {
    console.error(finding);
  }
  process.exit(1);
}

console.log(`Live offer copy guard passed: checked ${urls.length} URL(s).`);
