---
title: Nori
summary: Job search infrastructure built around a career graph.
highlights:
  - "Career graph: every resume bullet traces to a fact"
  - "Fills ATS forms with review-before-submit"
  - "Drive it from Slack, Telegram, WhatsApp, email or MCP"
theme: agent-product
tag: Agent product
order: 2
featured: true
timeline: Oct 2026
stack: [TypeScript, Agents, MCP, Composio, Parallel]
flow: [Your history, Career graph, Match, Tailor, Apply]
links:
  live: https://jobs.norinote.xyz
metrics:
  - value: 35K+
    label: ATS sources
  - value: Graph
    label: Fact-backed tailoring
  - value: Local
    label: Optional local mode
decisions:
  - title: Tailoring is retrieval, not generation
    text: The job description is matched against your subgraph, and bullets are rewritten only from evidence nodes. Nothing is ever invented.
  - title: Review before submit
    text: Nori fills ATS forms but waits for approval, and the diff you approve shows which node each change came from.
  - title: The model is part of the product
    text: The operator sets one model endpoint for everyone, so there are no keys to paste. Self-hosting can run on a local Ollama, or on rules alone.
related: [chief]
---

## The problem

Most auto-apply tools hold a flat resume and a prompt. They rewrite your history to fit each job, and nobody can tell which claims are real.

## How it works

Nori turns your history into a graph: roles, projects, skills, metrics and education as nodes, with edges like *used in*, *achieved at* and *worked at*. It finds roles across Greenhouse, Lever, Ashby and SmartRecruiters boards, researches each company with citations, tailors a one-page resume where every bullet traces back to a fact about you, fills ATS forms with review-before-submit, reads verification codes from your mail and tracks replies.

"What am I missing for this role?" becomes a graph diff. You can drive it from Slack, Telegram, WhatsApp, email, a dashboard or MCP.

Built at the Cline × Composio × Parallel hackathon during Open Source AI Week in San Francisco, October 2026.
