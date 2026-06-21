---
type: technique
title: "History Matching"
aliases:
  - "inverse modeling"
  - "parameter estimation"
canonical: true
equipment: "Not stated in source"
software: "Not stated in source"
output: "calibrated reservoir parameters (permeability, porosity)"
tags:
  - technique/history-matching
  - theme/reservoir-engineering
sources:
  - "raw/139084 - Sensitivity-Based Upscaling for Large-Scale Reservoir Model History Matching.pdf"
  - "raw/139138 - Optimization of Vertical Placement of Horizontal Wells in Mature Carbonate Reser.pdf"
  - "raw/139447 - Optimum Damping Factor for Levenberg-Marquardt Algorithm with Application to Res.pdf"
  - "raw/139694 - A Global Optimization Approach to the Gradual Deformation Method of History Matc.pdf"
  - "raw/141371 - BASIC RESERVOIR HISTORY MATCHING BY REINFORCEMENT LEARNING FUNDAMENTALS.pdf"
status: active
last_updated: 2026-06-17
---

# History Matching

**Summary**: The process of adjusting reservoir model parameters to match observed production data.

---

## How It Is Used in the Thesis Collection

- [[2013-mehmood|Mehmood, 2013]] applied history matching using both fine-scale and coarse-scale models to validate the upscaling technique.

- [[2014-al-julaih|Al-Julaih, 2014]] performed history-matching to ensure the accuracy of the model before running predictions.

- [[2015-zhang|Zhang, 2015]] applied history matching to estimate reservoir parameters like permeability and porosity.

- [[2015-adeniji|Adeniji, 2015]] applied history matching to estimate the reservoir permeability distribution using water cut data.

- [[2019-alsamadony|Alsamadony, 2019]] used history matching as the primary problem domain for evaluating reinforcement learning algorithms.

## Instruments and Software



- [[2014-al-julaih|Al-Julaih, 2014]] performed history-matching to ensure the accuracy of the model before running predictions.

- [[2015-zhang|Zhang, 2015]] applied history matching to estimate reservoir parameters like permeability and porosity.

- [[2015-adeniji|Adeniji, 2015]] applied history matching to estimate the reservoir permeability distribution using water cut data.

- [[2019-alsamadony|Alsamadony, 2019]] used history matching as the primary problem domain for evaluating reinforcement learning algorithms.

## Typical Workflow



## Key Results and Findings

- Results from sensitivity-based upscaling were in very close agreement with results from fine-scale inverse analysis. ([[2013-mehmood|Mehmood, 2013, p. 23]])

- History matching was used to adjust the model to closely reproduce historical fluids production and pressures. ([[2014-al-julaih|Al-Julaih, 2014, p. 37]])

- Not stated in source ([[2015-zhang|Zhang, 2015]])

- History matching is a type of ill-posed inverse problem because it is strongly under-determined due to many unknown parameters compared to few measured data. ([[2015-adeniji|Adeniji, 2015, p. 25]])

- History Matching is the main step in any reservoir simulation study to get reliable predictions from simulation models. ([[2019-alsamadony|Alsamadony, 2019, p. 13]])

## Methodological Variations Across Sources


## Technical Limitations and Open Questions


## Related Concepts

**Related Techniques**: 

**Applicable to Terminology**: 

**Used in Themes**: 
