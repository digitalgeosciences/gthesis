---
type: technique
title: "Leavenberg Marquard"
aliases:
  - "nonlinear regression"
  - "LM algorithm"
canonical: true
equipment: "Not stated in source"
software: "Not stated in source"
output: "optimized reservoir parameters (k, s, C)"
tags:
  - technique/leavenberg-marquard
sources:
  - "raw/139041 - Models of Fractional Diffusion for Radial-Composite Reservoirs.pdf"
  - "raw/139078 - GLOBAL OPTIMIZATION STRATEGIES FOR WELL TEST IN SINGLE AND DUAL POROSITY RESERVO.pdf"
  - "raw/139084 - Sensitivity-Based Upscaling for Large-Scale Reservoir Model History Matching.pdf"
status: active
last_updated: 2026-06-14
---

# Leavenberg Marquard

**Summary**: An iterative optimization algorithm used to find the minimum of functions by solving non-linear least squares problems.

---

## How It Is Used in the Thesis Collection

- [[2013-khan-2|Khan, 2013]] applied Levenberg-Marquardt algorithm to estimate reservoir and wellbore parameters from pressure transient data.

- [[2013-al-nemer|Al-Nemer, 2013]] used Levenberg-Marquard to evaluate performance in both dual porosity and horizontal well models.

- [[2013-mehmood|Mehmood, 2013]] used Levenberg-Marquard as the primary inverse analysis algorithm for history matching.

## Instruments and Software



- [[2013-al-nemer|Al-Nemer, 2013]] used Levenberg-Marquard to evaluate performance in both dual porosity and horizontal well models.

- [[2013-mehmood|Mehmood, 2013]] used Levenberg-Marquard as the primary inverse analysis algorithm for history matching.

## Typical Workflow



## Key Results and Findings

- Successfully matched 1500 data points for three synthetic cases with low error rates when including the memory parameter alpha. ([[2013-khan-2|Khan, 2013, p. 93]])

- LM showed significant improvement early but was prone to getting stuck in local minima in complex solution spaces. ([[2013-al-nemer|Al-Nemer, 2013, p. 103]])

- The LM algorithm was used to calculate gradients and Hessians to update model parameters during iterative history matching. ([[2013-mehmood|Mehmood, 2013, p. 70]])

## Methodological Variations Across Sources


## Technical Limitations and Open Questions


## Related Concepts

**Related Techniques**: 

**Applicable to Terminology**: 

**Used in Themes**: 
