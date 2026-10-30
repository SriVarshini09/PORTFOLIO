---
title: Document Intelligence
summary: A multi-agent system that reads, extracts and answers questions over business documents.
highlights:
  - "82% accuracy on a 150-document test set, under 5 s per document"
  - "85% top-3 relevance across 50 semantic search queries"
  - "84% reduction in manual entry time"
theme: evaluation-ml
tag: Document AI
order: 10
stack: [LangChain, Qdrant, FastAPI, RAG, Python, LLMs]
flow: [Ingest, Extract, Embed, Qdrant, Answer]
links:
  repo: https://github.com/SriVarshini09/Multi-Agent-Document-Intelligence-System
metrics:
  - value: 82%
    label: Accuracy (150 docs)
  - value: < 5 s
    label: Per document
  - value: 85%
    label: Top-3 relevance
  - value: 84%
    label: Less manual entry
related: [ragtruth]
---

## The problem

Teams still copy fields out of documents by hand and search them by keyword. Both are slow, and both miss what a document actually says.

## How it works

Specialized agents split the work: extracting structured fields, chunking and embedding content, and answering questions with retrieval-augmented generation. Chunks are indexed in Qdrant (500+ in the evaluation set), and a production FastAPI service exposes extraction and semantic search.
