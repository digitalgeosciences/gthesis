---
type: terminology
title: "Damping Factor"
aliases:
  - "$eta$"
  - "lambda"
canonical: true
definition: "a non-negative value added to the diagonal of the Hessian matrix to ensure it is positive-definite."
units: "not applicable"
related_techniques:
  - "lm"
tags:
  - theme/reservoir-characterization
sources:
  - "raw/139447 - Optimum Damping Factor for Levenberg-Marquardt Algorithm with Application to Res.pdf"
status: active
last_updated: 2026-06-15
---

# Damping Factor

**Summary**: A parameter in the LM algorithm that controls the balance between steepest descent and Gauss-Newton steps.

---

## How It Appears in the Thesis Collection

- [[2015-zhang|Zhang, 2015]] investigated the impact of the damping factor on the convergence and reliability of the LM algorithm.

## Scientific Context

- [[2015-zhang|Zhang, 2015]] It determines whether the algorithm takes a step toward the gradient or towards the Gauss-Newton direction.

## Measurement and Characterization Methods

- [[2015-zhang|Zhang, 2015]] traditionally determined by trial-and-error; proposed to be estimated via DE.

## Key Findings Across Sources

- When damping factor is large, the LM algorithm works as steepest descent; when small, it acts as Gauss-Newton. ([[2015-zhang|Zhang, 2015, p. 38]])


## Contrasting Values and Interpretations


## Open Questions and Research Gaps


## Related Concepts

**Measured By**: 

**Related Phenomena**: 

**Appears in Themes**: 
