---
title: Chief
summary: A personal agent that notices, proposes, and acts only after you approve.
highlights:
  - "Notices problems across calendar, email and sleep"
  - "Every write waits for an Approve tap"
  - "New skills are single files of about 20 lines"
theme: agent-product
tag: Agent product
order: 4
featured: true
timeline: Oct 2026
stack: [Python, Agents, Composio]
flow: [Notice, Propose, Approve, Act]
links:
  repo: https://github.com/SriVarshini09/chief
decisions:
  - title: Every write waits for a tap
    text: Calendar edits and sent emails are proposals until you press Approve. Read-only work, like an inbox brief, runs freely.
  - title: Skills are single files
    text: A new skill is one file of about twenty lines, so the agent grows without a framework.
  - title: Suspicious mail is ignored
    text: Email that reads like instructions to an assistant is flagged and never acted on.
next: "Everything runs end to end on seeded mock data today. Next is running the real-service paths (calendar, Gmail, search, speech-to-text) against live accounts."
related: [nori, agentops]
---

## The problem

Assistants either do nothing until asked or act without asking. Neither is how a good chief of staff works.

## How it works

Chief runs a quiet heartbeat over your week. When it finds something worth your attention, like three short nights in a row after packed meeting days with another packed day coming, it proposes a specific fix and waits.

You can also just talk to it from your phone: "What's in my inbox?", "Reply to Sam and say Friday works". A large Stage screen shows its work as it happens: the inbox filling in, the calendar jumping to the day it will change, the sources it read.

Built for the Cline × Composio × Parallel hackathon during Open Source AI Week in San Francisco, October 2026. Released under the MIT license.
