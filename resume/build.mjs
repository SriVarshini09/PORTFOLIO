// Builds the resume: resume/resume.md -> resume/resume.html -> public/resume.pdf (one page, Letter).
// Run with: npm run resume
import { readFileSync, writeFileSync, existsSync, mkdtempSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { micromark } from 'micromark';

const here = dirname(fileURLToPath(import.meta.url));
const mdPath = join(here, 'resume.md');
const htmlPath = join(here, 'resume.html');
const pdfPath = join(here, '..', 'public', 'resume.pdf');

// Notes in [square brackets] like "[Venue and year to confirm]" are reminders, not resume text.
const md = readFileSync(mdPath, 'utf8').replace(/\s*\\\[[^\]]*\\\]/g, '');
const lines = md.split('\n');
const title = lines.shift().replace(/^#\s*/, '');
const body = micromark(lines.join('\n'));

const css = `
  @page { size: Letter; margin: 0.42in 0.5in; }
  * { box-sizing: border-box; }
  body { margin: 0; font-family: Calibri, Carlito, "Segoe UI", Arial, sans-serif; font-size: 9.9pt; line-height: 1.25; color: #111; }
  h1 { font-size: 19pt; margin: 0 0 2pt; letter-spacing: 0.02em; text-align: center; }
  h1 + p, h1 + p + p { text-align: center; margin: 0 0 1pt; }
  h1 + p + p { margin-bottom: 6pt; font-size: 9.6pt; }
  h2 { font-size: 10.4pt; text-transform: uppercase; letter-spacing: 0.08em; margin: 7pt 0 3pt; padding-bottom: 2pt; border-bottom: 1px solid #333; }
  p { margin: 0 0 2pt; }
  ul { margin: 1pt 0 4pt; padding-left: 14pt; }
  li { margin: 0 0 1pt; }
  a { color: #111; text-decoration: none; }
`;
writeFileSync(
  htmlPath,
  `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${title} - Resume</title><style>${css}</style></head><body><h1>${title}</h1>${body}</body></html>`,
);
console.log('Wrote', htmlPath);

// Print to PDF with Chrome or Edge, whichever is installed.
const browsers = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
];
const browser = browsers.find((b) => existsSync(b));
if (!browser) {
  console.log('No Chrome or Edge found. Open resume/resume.html in a browser and use Print > Save as PDF.');
  process.exit(0);
}
execFileSync(browser, [
  '--headless=new',
  '--disable-gpu',
  '--no-pdf-header-footer',
  `--user-data-dir=${mkdtempSync(join(tmpdir(), 'resume-'))}`,
  `--print-to-pdf=${pdfPath}`,
  pathToFileURL(htmlPath).href,
], { stdio: 'ignore' });

const pages = (readFileSync(pdfPath, 'latin1').match(/\/Type\s*\/Page(?!s)/g) || []).length;
console.log(`Wrote ${pdfPath} (${pages} page${pages === 1 ? '' : 's'})`);
if (pages > 1) console.log('Heads up: the resume is longer than one page. Shorten a bullet or two and run it again.');
