---
title: Video Search
summary: Semantic search across video scenes using natural language.
highlights:
  - "Automatic scene detection with CLIP embeddings"
  - "Natural-language search over scenes in Qdrant"
  - "Full-stack app with a FastAPI backend and React frontend"
theme: evaluation-ml
tag: Computer vision
order: 7
featured: true
stack: [CLIP, Qdrant, FastAPI]
flow: [Scenes, CLIP embed, Qdrant, Search]
links:
  repo: https://github.com/SriVarshini09/Real-Time-Video-Search-Platform
metrics:
  - value: 200–500 ms
    label: Search latency
related: [feature-platform]
---

## The problem

Finding a moment in hours of video means scrubbing. Filenames and tags don't describe what's on screen.

## How it works

The pipeline detects scene boundaries, embeds each scene with CLIP and indexes the vectors in Qdrant. A FastAPI service and web interface take a natural-language query, embed it the same way and return the matching scenes with timestamps.
