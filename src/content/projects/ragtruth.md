---
title: RAGTruth
summary: Can multiple AI agents detect when RAG systems hallucinate?
highlights:
  - "Overall F1 of 0.642 with no training data and no GPU"
  - "High recall of 0.764 on claim-level hallucinations"
  - "Task-aware rules drive the largest gain (+0.13 F1)"
theme: evaluation-ml
tag: Evaluation
order: 6
featured: true
timeline: Jan — Apr 2026
role: Graduate Researcher, RIT
stack: [Python, LLMs, Multi-agent]
flow: [Extract claims, Verify, Decide]
links:
  repo: https://github.com/SriVarshini09/ragtruth-hallucination-detection
metrics:
  - value: '0.642'
    label: F1
  - value: '600'
    label: Records
  - value: '0'
    label: Training examples
  - value: ~$0.0003
    label: Per record
decisions:
  - title: Zero-shot on purpose
    text: No fine-tuning and no GPU, so the pipeline can be dropped into any RAG system without labelled data.
  - title: Rules decide, agents verify
    text: Agents extract and check claims; task-specific rules aggregate their verdicts into the final decision.
related: [agentops]
---

## The problem

Retrieval-augmented systems still produce claims their sources don't support. Detecting those hallucinations usually needs a trained classifier and labelled data.

## How it works

A three-agent pipeline decomposes each response into factual claims, verifies every claim against the source passages, and flags unsupported spans using task-specific decision rules. It was evaluated on RAGTruth across QA, summarization and data-to-text.

The full write-up is on the [research page](/research/rag-hallucination-detection).
