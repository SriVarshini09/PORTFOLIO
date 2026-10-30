---
title: Kerna
summary: A local-first trust layer for AI agents.
highlights:
  - "Fail-closed permissions for every MCP tool"
  - "Hard budgets on calls, runtime, cost and output"
  - "A local receipt for every agent run"
theme: agent-infra
tag: Agent infra
order: 5
featured: true
stack: [Rust, MCP, SQLite]
flow: [Goal, Policy + budgets, Approval, MCP tool, Receipt]
links:
  live: https://kerna.run
  repo: https://github.com/SriVarshini09/kerna
metrics:
  - value: Fail-closed
    label: Permissions
  - value: Hard
    label: Budgets
  - value: Local
    label: Run receipts
decisions:
  - title: Not an agent framework
    text: Kerna owns no domain logic. It sits between the model and the tools, so models and capabilities stay replaceable.
  - title: Tools run as isolated plugins
    text: Every capability is an external MCP plugin run as its own child process over stdio, so a tool only touches what it was granted.
  - title: Deny by default
    text: A tool receives no capability unless it is explicitly granted in kerna.toml.
related: [shapi, agentops]
---

## The problem

Agents can now edit files, call services and change external systems. Most stacks give the model a tool and hope. There is rarely a hard limit on what a run may touch, how much it may spend, or a record of what it actually did.

## How it works

Kerna is a local-first Rust runtime that sits between a model and the MCP tools that can affect the world. Before a tool runs, it evaluates explicit permissions, policy and budgets. Consequential actions can pause for a human decision. Afterwards, it writes a structured receipt to local SQLite.

Budgets are hard limits on tool calls, model calls, runtime, cost, output and memory writes. When one is hit, the run stops.
