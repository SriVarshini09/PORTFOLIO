---
title: Lightweight Channel Attention for Efficient CNNs
shortTitle: Lightweight Channel Attention
kind: Publication
venue: arXiv
date: 2026-01-02
order: 1
role: Co-author
authors: [Prem Babu Kanaparthi, Tulasi Venkata Sri Varshini Padamata]
summary: An empirical study of SE, ECA and a proposed Lite Channel Attention module across ResNet-18 and MobileNetV2 on CIFAR-10, measuring accuracy, parameters, FLOPs and latency.
highlights:
  - Negligible parameter and latency overhead
  - Competitive accuracy (94.68% on ResNet-18, 93.10% on MobileNetV2)
  - Tested on ResNet-18 and MobileNetV2
topics: [Efficient deep learning, Attention, CNNs]
flow: [SE, ECA, LCA (proposed)]
links:
  paper: https://arxiv.org/abs/2601.01002
  pdf: https://arxiv.org/pdf/2601.01002
metrics:
  - value: 94.68%
    label: ResNet-18 accuracy
  - value: 93.10%
    label: MobileNetV2 accuracy
citation: |
  @article{kanaparthi2026lightweight,
    title   = {Lightweight Channel Attention for Efficient CNNs},
    author  = {Kanaparthi, Prem Babu and Padamata, Tulasi Venkata Sri Varshini},
    journal = {arXiv preprint arXiv:2601.01002},
    year    = {2026}
  }
related: []
---

## Research question

Channel attention gives CNNs a meaningful accuracy boost for very little compute. But how do different attention designs actually trade accuracy against efficiency, and can a lighter module keep the gains?

## In plain language

Attention modules help a network decide which feature channels matter. Squeeze-and-Excitation (SE) and Efficient Channel Attention (ECA) are two popular designs. This study compares them with a new, lighter module, Lite Channel Attention (LCA), on two common architectures, measuring not just accuracy but parameters, FLOPs and real GPU latency.

## Method

LCA uses adaptive one-dimensional convolutions with grouped operations to reduce parameter usage while preserving effective attention behavior. All three modules were added to ResNet-18 and MobileNetV2 and trained on CIFAR-10 under the same setup.

## Results

LCA reaches competitive accuracy, **94.68%** on ResNet-18 and **93.10%** on MobileNetV2, while matching ECA in parameter efficiency and keeping favorable inference latency. The paper includes full benchmarks of FLOPs, parameter counts and GPU latency, with practical guidance for deploying attention-enhanced CNNs in resource-constrained environments.
