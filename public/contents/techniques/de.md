---
type: technique
title: "De"
aliases:
  - "Differential Evolution"
canonical: true
equipment: "Not stated in source"
software: "Not stated in source"
output: "optimized parameters for well locations and injection timing."
tags:
  - technique/de
  - theme/reservoir-engineering
sources:
  - "raw/138989 - OPTIMIZATION AND SENSITIVITY ANALYSIS OF FOAM ASSISTED WATER ALTERNATING GAS.pdf"
  - "raw/139083 - STOCHASTIC METHODS FOR SURFACTANT-POLYMER FLOODING AND WELL PLACEMENT OPTIMIZATI.pdf"
  - "raw/139447 - Optimum Damping Factor for Levenberg-Marquardt Algorithm with Application to Res.pdf"
  - "raw/139694 - A Global Optimization Approach to the Gradual Deformation Method of History Matc.pdf"
status: active
last_updated: 2026-06-15
---

# De

**Summary**: A population-based stochastic optimization algorithm.

---

## How It Is Used in the Thesis Collection

- [[2013-sibaweihi|Sibaweihi, 2013]] utilized DE to compare against CMA-ES for optimizing well placement and injection cycles.

- [[2013-ahmed|AHMED, 2013]] applied DE to optimize well placement and chemical concentrations in two reservoir models.

- [[2015-zhang|Zhang, 2015]] applied DE to find optimal damping factors for the LM algorithm.

- [[2015-adeniji|Adeniji, 2015]] used DE to estimate deformation parameters in GDM.

## Instruments and Software



- [[2013-ahmed|AHMED, 2013]] applied DE to optimize well placement and chemical concentrations in two reservoir models.

- [[2015-zhang|Zhang, 2015]] applied DE to find optimal damping factors for the LM algorithm.

- [[2015-adeniji|Adeniji, 2015]] used DE to estimate deformation parameters in GDM.

## Typical Workflow



## Key Results and Findings

- DE produced varying NPV results across realizations, sometimes failing to outperform the sensitivity study's baseline. ([[2013-sibaweihi|Sibaweihi, 2013, p. 76]])

- DE showed earlier convergence than CMAES and IWO but often resulted in lower NPV values in certain realizations. ([[2013-ahmed|AHMED, 2013, p. 101]])

- DE successfully eliminated the need for line search by providing an optimal damping factor that determines both direction and step length simultaneously. ([[2015-zhang|Zhang, 2015, p. 73]])

- DE was more effective and reliable than LM but less consistent than PSO. ([[2015-adeniji|Adeniji, 2015, p. 141]])

## Methodological Variations Across Sources


## Technical Limitations and Open Questions


## Related Concepts

**Related Techniques**: 

**Applicable to Terminology**: 

**Used in Themes**: 
