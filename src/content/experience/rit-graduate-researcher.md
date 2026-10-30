---
role: Graduate Researcher
org: Rochester Institute of Technology (RIT)
short: RIT
start: Jan 2026
end: Apr 2026
order: 1
type: Research
location: Rochester, NY
summary: Built a zero-shot multi-agent system for detecting hallucinations in RAG outputs, reaching 0.642 F1 on RAGTruth with no training data and no GPU.
skills: [Multi-agent systems, RAG evaluation, LLMs, Python]
owned:
  - Built a zero-shot multi-agent system for detecting hallucinations in RAG outputs.
  - Designed the pipeline that decomposes responses into factual claims, verifies them against source passages, and flags unsupported spans using task-specific decision rules.
  - Evaluated it on RAGTruth across QA, summarization and data-to-text.
metrics:
  - value: '0.642'
    label: F1 on RAGTruth
  - value: '0'
    label: Training examples
  - value: No GPU
    label: Compute
  - value: ~$0.0003
    label: Cost per record
projects: [ragtruth]
research: [rag-hallucination-detection]
---

Graduate research during the M.S. in Artificial Intelligence at RIT, focused on making retrieval-augmented systems measurably more trustworthy without training data or specialized hardware.
