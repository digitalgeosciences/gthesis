---
type: technique
title: "Adjoint Method"
aliases:
  - "Adjoint State Method"
canonical: true
equipment: "Not stated in source"
software: "Not stated in source"
output: "sensitivity coefficients (gradients)"
tags:
  - technique/adjoint-method
  - theme/reservoir-simulation
sources:
  - "raw/139084 - Sensitivity-Based Upscaling for Large-Scale Reservoir Model History Matching.pdf"
  - "raw/139447 - Optimum Damping Factor for Levenberg-Marquardt Algorithm with Application to Res.pdf"
status: active
last_updated: 2026-06-15
---

# Adjoint Method

**Summary**: A mathematical technique used to calculate sensitivities of an objective function with respect to many parameters efficiently.

---

## How It Is Used in the Thesis Collection

- [[2013-mehmood|Mehmood, 2013]] implemented the adjoint method for efficient calculation of sensitivity coefficients in large models.

- [[2015-zhang|Zhang, 2015]] used the adjoint method to calculate the sensitivity of data to model parameters within a finite-volume simulator.

## Instruments and Software



- [[2015-zhang|Zhang, 2015]] used the adjoint method to calculate the sensitivity of data to model parameters within a finite-volume simulator.

## Typical Workflow



## Key Results and Findings

- The adjoint-state method is most efficient when only the gradient of the objective function is required, as it avoids calculating full Jacobian matrices. ([[2013-mehmood|Mehmood, 2013, p. 73]])

- The computation time required for the adjoint method doesn't depend on the number of model parameters, but rather on the amount of data to be matched. ([[2015-zhang|Zhang, 2015, p. 32]])

## Methodological Variations Across Sources


## Technical Limitations and Open Questions


## Related Concepts

**Related Techniques**: 

**Applicable to Terminology**: 

**Used in Themes**: 
