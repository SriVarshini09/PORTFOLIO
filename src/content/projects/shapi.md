---
title: SHAPI
summary: Self-maintaining APIs for teams and AI agents.
highlights:
  - "Maps every third-party call site into an api.lock"
  - "Fixes kept only when a contract test proves them"
  - "Opens a pull request with the fix, test and evidence"
theme: agent-infra
tag: Agent infra
order: 1
featured: true
building: true
timeline: 2026 — present
stack: [TypeScript, Node, MCP, Claude]
flow: [Scan, Match, Prove, Fix]
links:
  live: https://shapi.dev
decisions:
  - title: Keep a fix only if a test proves it
    text: Every fix starts as a contract test that fails against the broken call site. The change is kept only when that test passes, so a fix PR always arrives with its evidence.
  - title: Recipes first, the model second
    text: Known breaking changes ship with deterministic fix recipes. Claude is called (with --llm) only when no recipe fits, which keeps most fixes reproducible.
  - title: Meet developers in their editor
    text: SHAPI ships an MCP server and an agent skill, so Claude Code and Cursor can scan and fix a repo without anyone learning a new CLI.
next: "Python is scan-only today; fixes for Python call sites are next, along with more providers in the advisory database."
related: [kerna, agentops]
---

## The problem

Business-critical integrations break when a third-party API changes behavior: a status code moves from 204 to 200, an enum gains a value, a version is retired on a deadline. Nothing in the codebase changes, so nothing in CI catches it. AI agents that call these APIs fail the same way, just more quietly.

## How it works

SHAPI maps every third-party API a codebase depends on into an `api.lock`: each call site, and the status codes, fields, enums, headers and query params it relies on. It checks that lock against an open database of provider behavior changes and flags the call sites a known breaking change actually hits.

```bash
npx shapi-cli scan ./my-service
npx shapi-cli fix ./my-service --pr
```

For each affected TypeScript or JavaScript call site, `shapi fix` generates a contract test, confirms it fails, applies the fix recipe, and keeps the change only if the test then passes. With `--pr` it opens a pull request containing the fix, the test and the evidence. Canary probes watch provider APIs and record response shapes, so new changes are caught as they ship.
