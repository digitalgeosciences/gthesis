---
type: source
id: "139677"
title: "NUMERICAL MODELING OF TURBULENT GAS FLOW IN POROUS MEDIA: A FRACTIONAL DIFFUSION APPROACH"
author: "Rami M. Alloush"
year: 2015
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Abeeb A. Awotunde"
committee_members: []
source_file: "raw/139677 - NUMERICAL MODELING OF TURBULENT GAS FLOW IN POROUS MEDIA A FRACTIONAL DIFFUSION .pdf"
url: "https://eprints.kfupm.edu.sa/139677"
study_area: "Not stated in source"
keywords:
  - Turbulent gas flow
  - Porous media
  - Fractional diffusion
  - Anomalous diffusion
  - Forchheimer's Equation
  - Memory effect
  - Numerical modeling
  - anomalous flow
  - Levenberg-Marquardt Algorithm
  - history matching
  - pressure drop
techniques:
  - mathematical-modeling
  - finite-difference-modeling
  - non-linear-regression
  - levenberg-marquardt
  - reservoir-simulation
  - leavenberg-marquardt-algorithm
  - mathematical-geology
tags:
  - degree/ms
  - technique/mathematical-modeling
  - technique/finite-difference-modeling
  - technique/non-linear-regression
  - technique/reservoir-simulation
  - technique/leavenberg-marquard-algorithm
  - technique/mathematical-geology
  - theme/petroleum-engineering
  - theme/reservoir-engineering
  - terminology/porous-media
  - terminology/anomalous-diffusion
  - terminology/petrophysics
status: ingested
---

# NUMERICAL MODELING OF TURBULENT GAS FLOW IN POROUS MEDIA: A FRACTIONAL DIFFUSION APPROACH

**Summary**: The thesis investigates the modeling of turbulent gas flow in porous media by incorporating memory effects into the Forchheimer equation using fractional diffusion. It develops a modified diffusivity equation and uses numerical methods to demonstrate that ignoring anomalous diffusion leads to inaccurate pressure and permeability estimations.

---

## Research Problem

Standard models like Darcy's Law and its modification for gas (Forchheimer's Equation) do not fully capture the physics of anomalous diffusion in porous media, leading to potential errors in reservoir characterization when high-velocity or complex flow paths are present.

## Objectives

- Implement the memory effect formalism into the flow equation of turbulent gas flow using fractional diffusion equations.
- Develop a modified diffusivity equation for gas flow that accounts for non-linear relationships between pressure gradient and flow rate.
- Validate the model by comparing it against a standard model in a history matching scenario to evaluate the impact on parameter estimation (permeability and beta).
- Provide a method for calculating wellbore pressure from gridblock pressure in the presence of memory effects.
- Derive a modified model based on Forchheimer’s equation accounting for anomalous flow of turbulent gas.
- Solve the model numerically to predict behavior of turbulent gas flow while taking memory effect into account.

## Methods

The study utilizes mathematical modeling to derive a modified diffusivity equation by integrating Caputo's definition of fractional derivatives into the Forchheimer Equation. The model is discretized using the L1 formula (a finite difference method) for an implicit and heterogeneous system. A non-linear regression approach, specifically the Levenberg-Marquardt algorithm, is used for history matching to estimate permeability and the beta coefficient from synthetic data. The simulation evaluates pressure distribution over a 10-day period across three wells in a grid of 16x16x1.

## Data and Materials

Synthetic datasets were generated for two distinct reservoir models: Example 1 used a 16x16x1 grid system with alpha = 0.2, and Example 2 used a 48x48x1 grid system with alpha = 0.2. Both cases included three wells with specific production rates (10, 7, and 8 MMscf) at defined coordinates.

## Key Findings

- The inclusion of the memory parameter (alpha) significantly affects the calculation of permeability values during graphical analysis. ([[2015-alloush|Alloush, 2015, p. 13]])
- Pressure data obtained from normal diffusion models are found to be erroneous if the actual fluid follows an anomalous flow path. ([[2015-alloush|Alloush, 2015, p. 13]])
- The non-Darcy term (beta) significantly impacts pressure drop calculations; results show that ignoring this term leads to inaccurate wellbore pressure profiles. ([[2015-alloush|Alloush, 2015, p. 38]])
- A modified flow model for the transition between gridblock and wellbore was developed, successfully calculating wellbore pressure from gridblock pressure in a non-Darcy system. ([[2015-alloush|Alloush, 2015, p. 49]])
- The model is independent of the grid size used, as variations in pressure drop across different grids were within a range of +/- 2 psi, suggesting they are rounding errors. ([[2015-alloush|Alloush, 2015, p. 43]])
- Pressure drops in wells increase with the increase of alpha (α) value, confirming that higher alpha values represent more pronounced turbulent effects. ([[2015-alloush|Alloush, 2015, p. 45]])
- At very early times, alpha has an inverse effect on pressure, as confirmed by existing literature. ([[2015-alloush|Alloush, 2015, p. 58]])
- In Example 1 (Case 1), including the memory effect (alpha = 0.2) resulted in a match with alpha = 0.17 and significantly reduced calculation time compared to the non-alpha model. ([[2015-alloush|Alloush, 2015, p. 51]])
- In Example 2 (Case 2), even when initial data had an alpha of 0, the inclusion of the memory parameter in the estimation process yielded a value of 0.07, improving the match. ([[2015-alloush|Alloush, 2015, p. 50]])
- Neglecting the effect of anomalous diffusion leads to non-accurate results and poor estimations in history matching. ([[2015-alloush|Alloush, 2015, p. 45]])

## Limitations

The study notes that while measurement errors are reduced by modern electronics, modeling errors remain due to the simplified nature and assumptions inherent in mathematical models.

## Recommendations and Future Work

The inclusion of memory effects (anomalous diffusion) should be integrated into simulators used for gas reservoirs where turbulent flow is encountered to improve history matching accuracy and performance.

## Related Concepts

- [[mathematical-modeling]]
- [[finite-difference-modeling]]
- [[non-linear-regression]]
- [[porous-media]]
- [[anomalous-diffusion]]
- [[petrophysics]]
- [[reservoir-engineering]]
- [[leavenberg-marquard-algorithm]]
