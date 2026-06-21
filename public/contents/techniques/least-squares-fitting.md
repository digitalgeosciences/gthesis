---
type: technique
title: "Least-Squares Fitting"
aliases:
  - "nonlinear regression"
  - "Levenberg-Marquardt"
canonical: true
equipment: "Not stated in source"
software: "Not stated in source"
output: "optimized parameter values (k, s, α)"
tags:
  - technique/least-squares-fitting
sources:
  - "raw/139041 - Models of Fractional Diffusion for Radial-Composite Reservoirs.pdf"
  - "raw/139522 - GROUND MOTION PREDICTION EQUATIONS (GMPES) FOR SUBDUCTION-ZONE EARTHQUAKES IN JA.pdf"
status: active
last_updated: 2026-06-15
---

# Least-Squares Fitting

**Summary**: A mathematical method to find the best fit for a set of data points by minimizing the sum of squared differences.

---

## How It Is Used in the Thesis Collection

- [[2013-khan-2|Khan, 2013]] used least-squares-fitting via the Levenberg-Marquardt algorithm to estimate reservoir parameters.

- [[2015-latif|Latif, 2015]] used least-squares-fitting to determine the coefficients of the GMPEs for both interface and in-slab events.

## Instruments and Software



- [[2015-latif|Latif, 2015]] used least-squares-fitting to determine the coefficients of the GMPEs for both interface and in-slab events.

## Typical Workflow



## Key Results and Findings

- The LM algorithm avoids getting trapped in local minima compared to standard Newton methods. ([[2013-khan-2|Khan, 2013, p. 39]])

- The regression analysis was performed using the least square method to fit the data to various forms of GMPEs. ([[2015-latif|Latif, 2015, p. 63]])

## Methodological Variations Across Sources


## Technical Limitations and Open Questions


## Related Concepts

**Related Techniques**: 

**Applicable to Terminology**: 

**Used in Themes**: 
