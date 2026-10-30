// Skills, each mapped to where it was actually used. Built from the projects' dependency files
// (package.json, requirements.txt, Cargo.toml, docker-compose) and the role descriptions.
// `uses` entries: 'project:<file name in src/content/projects>' or 'role:<file name in src/content/experience>'.

export interface Skill {
  name: string;
  uses: string[];
  note?: string;
}

export const skillGroups: { label: string; skills: Skill[] }[] = [
  {
    label: 'Languages',
    skills: [
      { name: 'Python', uses: ['project:ragtruth', 'project:agentops', 'project:chief', 'project:video-search', 'project:feature-platform', 'project:document-intelligence', 'role:rit-graduate-researcher'] },
      { name: 'TypeScript', uses: ['project:shapi', 'project:nori', 'project:mothertongue', 'project:kerna'] },
      { name: 'Rust', uses: ['project:kerna'] },
      { name: 'SQL', uses: ['project:shapi', 'project:nori', 'project:agentops'] },
    ],
  },
  {
    label: 'LLMs & agents',
    skills: [
      { name: 'Claude API', uses: ['project:shapi', 'project:nori', 'project:kerna', 'role:novacis-ml-engineer'] },
      { name: 'OpenAI API', uses: ['project:ragtruth', 'project:document-intelligence', 'project:mothertongue', 'role:novacis-ml-engineer'] },
      { name: 'Model Context Protocol', uses: ['project:shapi', 'project:nori', 'project:kerna'] },
      { name: 'Multi-agent systems', uses: ['project:ragtruth', 'project:document-intelligence', 'project:agentops', 'role:rit-graduate-researcher'] },
      { name: 'Human-in-the-loop agents', uses: ['project:chief', 'project:kerna', 'project:agentops', 'project:nori'] },
      { name: 'RAG', uses: ['project:ragtruth', 'project:document-intelligence', 'role:rit-graduate-researcher'] },
      { name: 'LangChain', uses: ['project:document-intelligence'] },
      { name: 'LangGraph', uses: ['project:document-intelligence'] },
      { name: 'LLM evaluation', uses: ['project:ragtruth', 'project:kerna', 'role:rit-graduate-researcher', 'role:novacis-ml-engineer'] },
      { name: 'Composio', uses: ['project:nori'] },
    ],
  },
  {
    label: 'Machine learning',
    skills: [
      { name: 'PyTorch', uses: ['project:ragtruth', 'project:video-search'] },
      { name: 'Hugging Face Transformers', uses: ['project:ragtruth', 'project:video-search', 'project:mothertongue'] },
      { name: 'LayoutLM / BERT', uses: ['role:novacis-ml-engineer'] },
      { name: 'CLIP', uses: ['project:video-search'] },
      { name: 'OCR', uses: ['project:document-intelligence', 'project:mothertongue', 'role:novacis-ml-engineer'] },
      { name: 'Scikit-learn', uses: ['project:ragtruth', 'project:feature-platform'] },
      { name: 'Pandas & NumPy', uses: ['project:ragtruth', 'project:feature-platform'] },
    ],
  },
  {
    label: 'Search & data',
    skills: [
      { name: 'Qdrant', uses: ['project:video-search', 'project:document-intelligence'] },
      { name: 'FAISS', uses: ['role:novacis-ml-engineer'] },
      { name: 'pgvector', uses: ['project:nori'] },
      { name: 'PostgreSQL', uses: ['project:shapi', 'project:nori', 'project:agentops'] },
      { name: 'SQLite', uses: ['project:kerna'] },
      { name: 'Redis', uses: ['project:feature-platform', 'project:mothertongue'] },
      { name: 'Kafka', uses: ['project:feature-platform'] },
      { name: 'Feast', uses: ['project:feature-platform'] },
    ],
  },
  {
    label: 'MLOps & cloud',
    skills: [
      { name: 'Docker', uses: ['project:shapi', 'project:nori', 'project:agentops', 'project:feature-platform', 'project:video-search', 'project:document-intelligence'] },
      { name: 'AWS SageMaker', uses: ['role:novacis-ml-engineer'] },
      { name: 'Kubernetes (EKS)', uses: ['role:novacis-ml-engineer'] },
      { name: 'Ray Serve', uses: ['project:feature-platform'] },
      { name: 'MLflow', uses: ['project:feature-platform'] },
      { name: 'Prometheus', uses: ['project:feature-platform'] },
      { name: 'Sentry', uses: ['project:shapi', 'project:nori'] },
    ],
  },
  {
    label: 'Backend & web',
    skills: [
      { name: 'FastAPI', uses: ['project:agentops', 'project:feature-platform', 'project:video-search', 'project:document-intelligence'] },
      { name: 'Node.js', uses: ['project:shapi', 'project:nori'] },
      { name: 'React', uses: ['project:nori', 'project:mothertongue', 'project:agentops', 'project:video-search', 'project:kerna'] },
      { name: 'Next.js', uses: ['project:nori', 'project:mothertongue'] },
      { name: 'Tailwind CSS', uses: ['project:nori', 'project:mothertongue'] },
      { name: 'Playwright', uses: ['project:nori'] },
      { name: 'Static analysis (tree-sitter, ts-morph)', uses: ['project:shapi'] },
      { name: 'Testing (pytest, Vitest)', uses: ['project:shapi', 'project:nori', 'project:agentops', 'project:feature-platform', 'project:video-search', 'project:document-intelligence'] },
    ],
  },
];

// Shown as a plain row at the bottom: tools you know but that no project or role on this site shows yet.
export const basicSkills = [
  'Git', 'GitHub Actions', 'TensorFlow', 'XGBoost', 'LIME', 'PySpark', 'MongoDB', 'DynamoDB',
  'AWS Lambda', 'AWS Bedrock', 'CloudWatch', 'Terraform', 'Snowflake', 'Palantir Foundry',
];
