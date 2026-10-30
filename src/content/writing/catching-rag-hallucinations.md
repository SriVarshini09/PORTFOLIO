---
title: Catching RAG hallucinations with no training data and no GPU
description: What I learned building a zero-shot, multi-agent hallucination detector for RAG, and why simple task-aware rules beat clever prompting.
date: 2026-10-30
tags: [Evaluation, RAG, Agents]
draft: false
projects: [ragtruth]
research: [rag-hallucination-detection]
---

Retrieval-augmented generation is supposed to keep a model honest: give it the right documents and it should answer from them. In practice, RAG systems still say things their sources don't support. The answer reads fluently, cites the right documents, and is quietly wrong in one sentence.

During my graduate research at RIT I wanted to know whether you could catch those sentences **without** training a classifier, without labelled data, and without a GPU. The result was a zero-shot, multi-agent pipeline that reached **0.642 F1** on RAGTruth at roughly **$0.0003 per record**.

## Why this is hard

Most hallucination detectors treat a response as a single unit: hallucinated or not. That is too coarse to be useful. A five-sentence answer with one unsupported claim is mostly correct, and the person reading it needs to know *which* sentence to distrust.

The usual fix is a trained model that labels spans. That works, but it needs labelled data for every domain you care about, and a GPU to train and serve it. I wanted something a team could drop into an existing RAG system on day one.

## The setup

I evaluated on **RAGTruth**, a benchmark of RAG outputs annotated for hallucinations. It covers three quite different tasks:

- **Question answering**: answer a question from retrieved passages.
- **Summarization**: condense a document.
- **Data-to-text**: turn structured data into prose.

The evaluation set had 600 records, and the pipeline saw **zero** training examples.

## The pipeline

Instead of one big prompt, the work is split across three agents, each with one job.

1. **Claim extraction.** The first agent breaks the response into atomic factual claims: small statements that are each either supported or not. "The bridge opened in 1937 and spans 1.7 miles" becomes two claims.
2. **Verification.** The second agent checks every claim against the source passages and decides whether the sources support it, contradict it, or say nothing about it.
3. **Decision.** The last step aggregates the claim-level verdicts into a final call and flags the unsupported spans, using a hallucination taxonomy and decision rules tuned to each task.

Splitting the work this way makes every decision inspectable. When the system flags a sentence, you can see which claim failed and against which passage.

## Results

| Metric | Value |
| --- | --- |
| Overall F1 | 0.642 |
| Recall | 0.764 |
| Training examples | 0 |
| GPU | None |
| Cost per record | ~$0.0003 |

Recall is the number I care about most for this use case. A detector that misses hallucinations gives false confidence, while a detector that over-flags costs a human a few seconds of checking. With recall at 0.764 and F1 at 0.642, precision sits around 0.55, so roughly half of the flags are real problems. For a reviewer working through outputs, that is a reasonable trade.

## The surprise: rules beat prompting

I expected the gains to come from better prompts. They didn't. The single largest improvement, **+0.13 F1**, came from simple **task-aware decision rules** in the final step.

The reason is that "hallucination" means different things in different tasks. In summarization, leaving something out is fine but adding a fact is not. In data-to-text, every number has to match the input exactly. In question answering, a claim can be true in the world and still unsupported by the retrieved passages. One generic prompt can't hold all three definitions at once, but a few explicit rules can.

> The lesson I keep coming back to: let the model do what it's good at (reading and comparing text), and put the policy in code where you can see it and change it.

## What I'd tell someone building this

- **Work at the claim level.** Response-level labels hide exactly the information a reviewer needs.
- **Split the job into agents with one responsibility each.** It's easier to debug a bad verification than a bad everything.
- **Encode task definitions as rules, not prompt prose.** They're cheaper, more predictable, and they moved the score more than anything else.
- **Pick the metric that matches the cost of mistakes.** For a safety net, recall comes first.

The same idea shows up in everything I build now: agents propose and verify, and explicit rules decide. It's how [Kerna](/work/kerna) handles tool permissions and how [SHAPI](/work/shapi) decides whether a fix is real.

The code is on [GitHub](https://github.com/SriVarshini09/ragtruth-hallucination-detection), and the full write-up is on the [research page](/research/rag-hallucination-detection).
