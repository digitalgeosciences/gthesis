---
type: technique
title: "LM"
aliases:
  - "Levenberg-Marquardt"
  - "LM"
canonical: true
equipment: "Not stated in source"
software: "Not stated in source"
output: "optimized model parameters (e.g., permeability)"
tags:
  - technique/lm
  - theme/reservoir-characterization
sources:
  - "raw/139447 - Optimum Damping Factor for Levenberg-Marquardt Algorithm with Application to Res.pdf"
  - "raw/139694 - A Global Optimization Approach to the Gradual Deformation Method of History Matc.pdf"
status: active
last_updated: 2026-06-15
---

# LM

**Summary**: A gradient-based optimization algorithm that combines steepest descent and Gauss-Newton methods by using a damping factor to ensure the Hessian matrix remains positive-definite.

---

## How It Is Used in the Thesis Collection

- [[2015-zhang|Zhang, 2015]] used LM to optimize reservoir parameters while investigating more efficient ways to determine the damping factor for large-scale problems.

- [[2015-adeniji|Adeniji, 2015]] used LM to estimate deformation parameters in GDM.

## Instruments and Software



- [[2015-adeniji|Adeniji, 2015]] used LM to estimate deformation parameters in GDM.

## Typical Workflow



## Key Results and Findings

- The proposed DE-based method yields smaller residuals of the objective function compared to traditional LM. ([[2015-zhang|Zhang, 2015, p. 16]])

- LM was less reliable than global algorithms, only reducing the OF below 0.5 in one out of seven realizations. ([[2015-adeniji|Adeniji, 2015, p. 139]])

## Methodological Variations Across Sources


## Technical Limitations and Open Questions


## Related Concepts

**Related Techniques**: 

**Applicable to Terminology**: 

**Used in Themes**: 
