---
title: MotherTongue
summary: Translate text, photos and documents into the language you understand best.
highlights:
  - "Text, photo or document in; your language and audio out"
  - "150+ language interface, installable PWA"
  - "Keys stay server-side; routes are rate-limited"
theme: agent-product
tag: Multilingual AI
order: 3
featured: true
stack: [Next.js, TypeScript, OCR, Speech]
flow: [Source, Extract text, Translate, Listen]
links:
  repo: https://github.com/SriVarshini09/mothertongue
metrics:
  - value: 150+
    label: Language UI
  - value: PWA
    label: Installable
  - value: Offline
    label: Execution paths
decisions:
  - title: One flow, nothing else
    text: No chatbot and no quizzes. Source to text to translation to audio, and reading in the language you understand best.
  - title: Keys never reach the browser
    text: The model key is used only by server-side routes. Expensive routes are rate-limited, reject oversized bodies and refuse cross-origin requests.
related: []
---

## The problem

Study material is mostly written in a handful of languages. Students who think in another language spend their energy translating instead of learning.

## How it works

Paste text, take a photo or upload your notes. MotherTongue extracts the text, translates it into your mother tongue and reads it aloud. The whole product is that one flow, with privacy controls and online and offline execution paths.
