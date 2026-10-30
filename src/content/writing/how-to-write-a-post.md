---
title: How to write a post (example draft)
description: A template showing every block a post can use. It stays a draft, so it never appears on the live site.
date: 2026-10-01
tags: [Notes]
draft: true
projects: [shapi]
---

This file is a **draft**, so it only shows up when you run the site locally (`npm run dev`). Copy it, rename it (the file name becomes the URL, e.g. `my-first-post.md` → `/writing/my-first-post`), change the details at the top, and write.

When the post is ready, change `draft: true` to `draft: false`.

## Section headings

Use `##` for sections. They also build the "On this page" list beside the post.

### Smaller headings

Use `###` inside a section.

## Code

Inline code looks like `npm run dev`. Blocks get syntax highlighting:

```ts
const answer = await agent.run({ goal: 'summarize the incident' });
console.log(answer.receipt);
```

## Callouts and lists

> A blockquote works as a callout: a caveat, a tip or a number worth pulling out.

- Bullet lists
- work like this

1. Numbered lists
2. too

## Tables

| Model | Accuracy | Latency |
| --- | --- | --- |
| Baseline | 91.2% | 4.1 ms |
| Yours | 94.7% | 3.8 ms |

## Images

Put images in `public/writing/` and link them like `![Alt text](/writing/diagram.png)`.

## Linking to your work

Add project or research IDs to `projects:` or `research:` at the top, and they appear under "Related" at the end of the post.
