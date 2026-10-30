---
title: Hallucination Detection in RAG Systems via Multi-Agent Claim Verification
shortTitle: Hallucination Detection in RAG
kind: Graduate research
status: Completed
venue: Rochester Institute of Technology
date: 2026-04-01
order: 3
role: Graduate Researcher
summary: A zero-shot multi-agent pipeline that decomposes RAG outputs into claims, verifies them against sources and flags unsupported spans, evaluated on RAGTruth.
highlights:
  - Overall F1 of 0.642 with reliable claim-level detection
  - High recall of 0.764
  - Task-aware rules drive the largest gains (+0.13 F1)
topics: [Evaluation, RAG, Multi-agent systems, LLMs]
flow: [Response, Extract claims, Verify vs sources, Decide]
links:
  code: https://github.com/SriVarshini09/ragtruth-hallucination-detection
metrics:
  - value: '0.642'
    label: F1
  - value: '0'
    label: Training examples
  - value: No GPU
    label: Compute
  - value: ~$0.0003
    label: Per record
related: [ragtruth]
---

## Research question

Can a team of LLM agents, with no training data and no GPU, reliably detect when a retrieval-augmented system says something its sources don't support?

## In plain language

RAG systems answer questions using retrieved documents, but they still make things up. This work breaks each answer into individual factual claims, checks every claim against the retrieved passages, and marks the parts that aren't supported, all without training a model.

## Method

The pipeline has three stages. A claim-extraction agent decomposes the response into atomic factual claims. A verification agent checks each claim against the source passages. Task-specific decision rules then aggregate the verdicts and flag unsupported spans. It was evaluated zero-shot on RAGTruth across question answering, summarization and data-to-text.

## Results

The system reached **0.642 F1** with no training examples and no GPU, at roughly **$0.0003** of processing cost per record.
