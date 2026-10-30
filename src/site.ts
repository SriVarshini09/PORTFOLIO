import { existsSync } from 'node:fs';
import { join } from 'node:path';

// Everything personal that appears on more than one page lives here.
export const site = {
  name: 'Sri Varshini',
  // Shown in the menu, the footer and browser tab titles.
  fullName: 'Tulasi Venkata Sri Varshini Padamata',
  title: 'Tulasi Venkata Sri Varshini Padamata — AI Engineer / Researcher / Builder',
  role: 'AI engineer / researcher / builder',
  description:
    'Sri Varshini is an AI engineer and researcher in the San Francisco Bay Area, building agents, retrieval, evaluation and ML infrastructure.',
  location: 'San Francisco Bay Area',
  degree: 'M.S. Artificial Intelligence, RIT',
  // Leave empty to hide every email link on the site.
  email: 'srivarshini09.edu@gmail.com',
  // Leave empty to hide the phone number.
  phone: '585-623-7981',
  // Optional form service URL (e.g. https://formspree.io/f/xxxx). Empty: the contact form opens the visitor's email app.
  formEndpoint: 'https://formspree.io/f/xjyyeedo',
  // Drop the PDF at public/resume.pdf; the Resume buttons appear once it exists.
  resume: '/resume.pdf',
  socials: [
    { label: 'GitHub', short: 'GH', href: 'https://github.com/SriVarshini09' },
    { label: 'LinkedIn', short: 'in', href: 'https://www.linkedin.com/in/ptvsv/' },
    { label: 'X', short: 'X', href: 'https://x.com/Sri_Padamata_' },
  ],
};

// Drop a photo in public/ named photo.jpg, photo.png or photo.webp; it appears as the framed portrait on Home and About.
export const photo = ['photo.jpg', 'photo.jpeg', 'photo.png', 'photo.webp']
  .filter((f) => existsSync(join(process.cwd(), 'public', f)))
  .map((f) => `/${f}`)[0];

export const hasResume =
  import.meta.env.DEV || existsSync(join(process.cwd(), 'public', site.resume.replace(/^\//, '')));

// Menu links jump to sections of the home page; Writing has its own page.
export const nav = [
  { id: 'about', label: 'About', href: '/#about' },
  { id: 'work', label: 'Projects', href: '/#projects' },
  { id: 'experience', label: 'Experience', href: '/#experience' },
  { id: 'research', label: 'Research', href: '/#research' },
  { id: 'writing', label: 'Writing', href: '/writing' },
  { id: 'contact', label: 'Contact', href: '/#contact' },
];

export const themes = {
  'agent-infra': 'Agent infrastructure',
  'agent-product': 'Agent products',
  'evaluation-ml': 'Evaluation & ML systems',
} as const;

// Smaller repos that link straight to GitHub instead of getting a page.
export const archive = [
  { name: 'Ticket Master', line: 'Intelligent support ticket router', lang: 'Python', href: 'https://github.com/SriVarshini09/Ticket_Master' },
  { name: 'SHAPI Advisories', line: 'Open database of third-party API behavior changes', lang: 'JavaScript', href: 'https://github.com/SriVarshini09/shapi-advisories' },
  { name: 'SHAPI Demo', line: 'A service broken by GitHub’s 204→200 change, fixed by SHAPI', lang: 'TypeScript', href: 'https://github.com/SriVarshini09/shapi-demo' },
  { name: 'FitMate AI', line: 'Fitness companion web app', lang: 'TypeScript', href: 'https://github.com/SriVarshini09/fitmate-ai' },
  { name: 'IDAI-720', line: 'Course work', lang: 'Python', href: 'https://github.com/SriVarshini09/IDAI-720' },
];

export const hackathons = [
  {
    date: 'Oct 2026 · San Francisco',
    name: 'Cline × Composio × Parallel hackathon, Open Source AI Week',
    built: ['nori', 'chief'],
  },
];

export const education = [
  {
    school: 'Rochester Institute of Technology',
    degree: 'M.S. in Artificial Intelligence',
    dates: 'Aug 2024 — May 2026',
    location: 'Rochester, NY',
    focus: ['Machine Learning Applications', 'Distributed Systems', 'Engineering Scalable Systems'],
  },
  {
    school: 'R.M.K. Engineering College',
    degree: 'Bachelor’s in Computer Science and Engineering',
    dates: 'Aug 2019 — May 2023',
    location: 'India',
    focus: ['Computer Science Fundamentals', 'Software Engineering', 'AI/ML Research'],
  },
];

export const certifications = [
  { title: 'Edge AI Specialization', issuer: 'NVIDIA', text: 'Edge AI deployment, model optimization and real-time inference.' },
  { title: 'Machine Learning Specialization', issuer: 'Stanford University', text: 'Machine learning algorithms, theory and practical applications.' },
];

// The three headline numbers in the About section on Home.
export const highlights = [
  { value: '18%', label: 'F1 improvement', context: 'Legal document processing' },
  { value: '60%', label: 'Faster lookups', context: 'Analyst search time' },
  { value: '35%', label: 'Lower cost', context: 'LLM inference' },
];

export function readingTime(body = '') {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

export function formatMonth(date?: Date) {
  if (!date) return '';
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' });
}
