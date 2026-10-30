---
title: 'EDAT-Lite: Predictive Difficulty-Aware Training for Neural Networks'
shortTitle: EDAT-Lite
kind: Publication
status: Published
order: 2
summary: A lightweight difficulty-aware training framework that learns and predicts hard examples with an auxiliary head, making training dynamics easier to interpret while preserving accuracy on MNIST.
highlights:
  - Lightweight training framework
  - Improved interpretability of training dynamics
  - Preserved accuracy while enhancing explainability
topics: [Training dynamics, Interpretability, Deep learning]
flow: [Backbone, Auxiliary head, Predict difficulty, Adapt training]
related: []
---

## Research question

Can a network learn, during training, which examples it finds hard, and use that signal without adding real cost or losing accuracy?

## In plain language

Not every training example is equally difficult. EDAT-Lite adds a small auxiliary head that learns to predict how hard each example is. That prediction makes the training process easier to inspect, so you can see which examples the model struggles with and how that changes over time.

## Results

On MNIST, the framework preserved accuracy while making training dynamics more interpretable, with only a lightweight addition to the network.
