---
title: AgentOps
summary: A control tower for tracing, debugging and auditing agent runs.
highlights:
  - "Every agent run recorded as a replayable trace"
  - "Risk classification and human approval for risky steps"
  - "Demo agent writes a safe runbook for a failed API incident"
theme: agent-infra
tag: Agent infra
order: 8
featured: true
stack: [FastAPI, React, PostgreSQL, SQLAlchemy]
flow: [Plan, Analyze, Root cause, Runbook, Risk, Approval, Audit]
links:
  repo: https://github.com/SriVarshini09/agentops
decisions:
  - title: A small graph runtime instead of LangGraph
    text: Nodes are pure state-to-state functions over a typed state object. The demo stays deterministic and easy to explain, and swapping in LangGraph later is straightforward.
  - title: Every step is a typed record
    text: Each node logs an AgentStep, so a run can be replayed, costed and audited after the fact.
related: [kerna, chief]
---

## The problem

AI agents are hard to trust in production because teams can't see plans, tool calls, failures, retries, costs or approval decisions. When an agent produces a wrong or risky answer, there's rarely a way to inspect how it got there.

## How it works

Every run is recorded as a trace of typed steps. A dashboard shows metric cards, a runs table, run details and a trace replay, so you can see which tool failed and retried, estimate cost, classify risk and hold risky actions for human approval.

The demo agent solves a realistic SRE task end to end: analyze a failed API incident and write a safe runbook. A typed state flows through nine nodes: planner, log analyzer, metrics analyzer, root cause, runbook, risk classifier, approval, critic and audit.

Traces are stored in SQLite by default, or PostgreSQL via `docker-compose`.
