---
title: Feature Platform
summary: Real-time feature computation and multi-model serving.
highlights:
  - "Kafka → Feast → Redis streaming feature pipeline"
  - "Fraud, recommendation and forecasting models share features"
  - "A/B testing with Ray Serve, monitoring with MLflow"
theme: evaluation-ml
tag: ML systems
order: 9
featured: true
stack: [Kafka, Feast, Redis, Ray Serve, MLflow, FastAPI]
flow: [Kafka, Feast, Redis, Ray Serve]
links:
  repo: https://github.com/SriVarshini09/Real-Time-Feature-Store-ML-Serving-Platform
metrics:
  - value: 10K
    label: Events / sec
  - value: 5–10 ms
    label: Feature lookup
  - value: 20–50 ms
    label: Inference
decisions:
  - title: One feature store, many models
    text: Fraud detection, recommendation and forecasting models share the same feature infrastructure instead of each computing their own.
  - title: A/B testing in the serving layer
    text: Ray Serve splits traffic between model versions, with Prometheus metrics and MLflow experiment tracking.
related: [video-search]
---

## The problem

Every model team ends up rebuilding the same features, with different freshness and different bugs, and serving each model on its own stack.

## How it works

Kafka streams transaction events to feature processors that compute real-time features and store them in Redis through Feast, with online and offline serving. Multiple models share those features. Ray Serve handles deployment with A/B testing and traffic splitting, Prometheus monitors it, and MLflow tracks experiments. A FastAPI service sits in front.
