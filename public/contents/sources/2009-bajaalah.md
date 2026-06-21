---
type: source
id: "136249"
title: "DETERMINATION OF MATRIX AND FRACTURE PERMEABILITIES IN WHOLE CORES USING PRESSURE PULSE DECAY"
author: "KHALED SAEED BAJAALAH"
year: 2009
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Hasan Y. Al-Yousef"
committee_members: []
source_file: "raw/136249 - DETERMINATION OF MATRIX AND FRACTURE PERMEABILITIES IN WHOLE CORES USING PRESSUR.pdf"
url: "https://eprints.kfupm.edu.sa/136249"
study_area: "Not stated in source"
keywords:
  - pressure pulse decay
  - matrix permeability
  - fracture permeability
  - whole cores
  - transient flow
  - non-linear regression
  - gas slippage
  - interporosity flow
  - whole core samples
techniques:
  - pressure-pulse-decay
  - non-linear-regression
  - finite-difference-modeling
  - core-analysis
  - nonlinear-regression
  - petrophysics
  - mathematical-modeling
tags:
  - degree/ms
  - technique/pressure-pulse-decay
  - technique/non-linear-regression
  - technique/finite-difference-modeling
  - technique/core-analysis
  - technique/nonlinear-regression
  - technique/petrophysics
  - technique/mathematical-modeling
  - theme/petrophysics
  - theme/fracture-characterization
  - theme/reservoir-engineering
  - terminology/permeability
  - terminology/fractured-reservoirs
  - terminology/fracture-characterization
status: ingested
---

# DETERMINATION OF MATRIX AND FRACTURE PERMEABILITIES IN WHOLE CORES USING PRESSURE PULSE DECAY

**Summary**: The thesis investigates the determination of matrix and fracture permeabilities in whole cores using a pressure pulse decay (PPD) technique. It develops a numerical model and a non-linear regression computer program to analyze experimental data, specifically focusing on how parameters like gas slippage, interporosity flow, and fracture area affect the resulting permeability estimates.

---

## Research Problem

Conventional laboratory methods cannot distinguish between matrix and fracture permeabilities in naturally fractured core samples; they only provide the effective permeability of the entire sample. There is a need for a method that can differentiate these two components using transient flow techniques like pressure pulse decay.

## Objectives

- To develop a mathematical model and obtain solution to describe the pressure pulse behaviours in a fractured core sample.
- To construct a laboratory experimental setup with appropriate upstream and downstream volumes.
- To validate the mathematical model results.
- Develop a numerical solution to simulate pressure pulse decay experiments.
- Develop a computer program to analyze pressure pulse decay data to estimate matrix and fracture permeabilities using non-linear regression.
- Evaluate the effects of various parameters (gas slippage, interporosity flow, fracture area) on PPD curves.

## Methods

The study utilizes the pressure pulse decay technique, which is a transient method for measuring permeability. A mathematical model was developed based on the principle of conservation of mass, the Klinkenberg equation, Darcy's law, and the equation of state to describe flow in both fracture and matrix systems. The model accounts for gas slippage (b) and deviation factors (z). To solve the non-linear governing equations, a finite difference method was employed using a curvilinear coordinate system (conformal mapping) to handle complex geometries. A data analysis computer program was developed to calculate matrix and fracture permeabilities from experimental pressure pulse decay data using non-linear regression.

## Data and Materials

Two whole core samples (CS 1 and CS 2) from a low permeability reservoir. Core dimensions: CS 1 (11.92 cm length, 10.05 cm diameter, 13.56% porosity); CS 2 (11.58 cm length, 10.58 cm diameter, 12.7% porosity). Experimental data includes pressure readings from upstream and downstream vessels over time.

## Key Findings

- The pressure pulse decay technique is superior to conventional steady-state methods for tight rocks as it is faster and easier to perform. ([[2009-bajaalah|BAJAALAH, 2009, p. 13]])
- Fracture permeability is much higher than matrix permeability, leading to different flow behaviors in fractured reservoirs. ([[2009-bajaalah|BAJAALAH, 2009, p. 17]])
- The use of the 'zero-porosity' approximation for permeability calculation by the transient technique can lead to substantial errors. ([[2009-bajaalah|BAJAALAH, 2009, p. 22]])
- A mathematical model was developed where the pressure gradient decays exponentially to zero in a simplified system (Brace et al. solution). ([[2009-bajaalah|BAJAALAH, 2009, p. 18]])
- The inclusion of gas slippage and non-Darcy flow effects can lead to significant differences in permeability calculations if not accounted for separately. ([[2009-bajaalah|BAJAALAH, 2009, p. 27]])
- Conformal mapping was used to transform the core geometry into a simpler coordinate system (curvilinear) to solve the governing equations. ([[2009-bajaalah|BAJAALAH, 2009, p. 48]])
- The finite difference method successfully provided numerical solutions for both one-dimensional and two-dimensional flow in fractured cores. ([[2009-bajaalah|BAJAALAH, 2009, p. 54]])
- The developed numerical solution showed very small differences compared to the analytical solutions for PPD curves. ([[2009-bajaalah|BAJAALAH, 2009, p. 72]])
- When the matrix permeability/fracture permeability ratio decreases below 0.01, the effect of fracture on PPD curves becomes clearly visible. ([[2009-bajaalah|BAJAALAH, 2009, p. 103]])
- Gas slippage causes faster pressure pulse decay compared to cases without slippage; as rock permeability increases, the gas slippage effect becomes less significant. ([[2009-bajaalah|BAJAALAH, 2009, p. 106]])
- An increase in the interporosity flow parameter leads to increased gas flow from fracture through the matrix, enhancing the impact of fractures on PPD curves. ([[2009-bajaalah|BAJAALAH, 2009, p. 110]])
- The fracture area significantly affects both upstream and downstream pressure pulse decay curves. ([[2009-bajaalah|BAJAALAH, 2009, p. 113]])
- The non-linear regression program showed close agreement with the Jones method for estimating permeability (e.g., Core A: Program 8.8377 md vs. Jones 11.57 md; Core B: Program 0.94571 md vs. Jones 1.0746 md). ([[2009-bajaalah|BAJAALAH, 2009, p. 115]])
- The mathematical model successfully solved the transient, compressible fluid flow equation to describe pressure pulse decay in fractured whole core samples. ([[2009-bajaalah|BAJAALAH, 2009, p. 127]])
- A computer program was developed that analyzes pressure pulse decay data to estimate matrix and fracture permeabilities using non-linear regression. ([[2009-bajaalah|BAJAALAH, 2009, p. 127]])

## Limitations

Standard laboratory methods cannot distinguish between matrix and fracture properties; they only measure the effective permeability of a core sample if it contains fractures.

## Recommendations and Future Work

Not stated in source

## Related Concepts

- [[pressure-pulse-decay]]
- [[finite-difference-modeling]]
- [[permeability]]
- [[fractured-reservoirs]]
- [[petrophysics]]
- [[fracture-characterization]]
- [[core-analysis]]
- [[nonlinear-regression]]
- [[non-linear-regression]]
- [[reservoir-engineering]]
- [[saudi-arabia]]
