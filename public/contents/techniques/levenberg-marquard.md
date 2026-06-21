---
type: technique
title: "Levenberg Marquard"
aliases:
  - "LM"
canonical: true
equipment: "Not stated in source"
software: "Not stated in source"
output: "minimized error between measured and modeled data"
tags:
  - technique/levenberg-marquard
  - theme/reservoir-engineering
sources:
  - "raw/139078 - GLOBAL OPTIMIZATION STRATEGIES FOR WELL TEST IN SINGLE AND DUAL POROSITY RESERVO.pdf"
  - "raw/139084 - Sensitivity-Based Upscaling for Large-Scale Reservoir Model History Matching.pdf"
status: active
last_updated: 2026-06-14
---

# Levenberg Marquard

**Summary**: A standard iterative method for solving non-linear least squares problems.

---

## How It Is Used in the Thesis Collection

- [[2013-al-nemer|Al-Nemer, 2013]] used Levenberg-Marquard as a baseline comparison for the stochastic algorithms.

- [[2013-mehmood|Mehmood, 2013]] used Levenberg-Marquardt to solve the non-linear inverse problem of history matching.

## Instruments and Software



- [[2013-mehmood|Mehmood, 2013]] used Levenberg-Marquardt to solve the non-linear inverse problem of history matching.

## Typical Workflow



## Key Results and Findings

- Levenberg-Marquard performed better than PSO, LUS, and MOL in horizontal well models. ([[2013-al-nemer|Al-Nemer, 2013, p. 14]])

- The LM method ensures a positive-definite Hessian matrix by adding a diagonal term (lambda * I). ([[2013-mehmood|Mehmood, 2013, p. 39]])

## Methodological Variations Across Sources


## Technical Limitations and Open Questions


## Related Concepts

**Related Techniques**: 

**Applicable to Terminology**: 

**Used in Themes**: 
