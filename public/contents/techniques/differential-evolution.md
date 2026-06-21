---
type: technique
title: "Differential Evolution"
aliases:
  - "DE"
canonical: true
equipment: "Not stated in source"
software: "Not stated in source"
output: "optimized reservoir parameters"
tags:
  - technique/differential-evolution
  - theme/reservoir-engineering
sources:
  - "raw/139078 - GLOBAL OPTIMIZATION STRATEGIES FOR WELL TEST IN SINGLE AND DUAL POROSITY RESERVO.pdf"
  - "raw/139154 - Drilling Time Optimization Using differential evolution.pdf"
  - "raw/139309 - A PARETO FRONTIER WELL PLACEMENT AND RATE OPTIMIZATION.pdf"
  - "raw/139420 - A MULTI-OBJECTIVE WELL PLACEMENT APPROACH WITH NPV AND REGIONAL PRESSURE BALANCE.pdf"
  - "raw/139447 - Optimum Damping Factor for Levenberg-Marquardt Algorithm with Application to Res.pdf"
  - "raw/139717 - Optimization of Expanded-Solvent Steam Assisted Gravity Drainage Using Different.pdf"
  - "raw/139831 - STOCHASTIC OPTIMIZATION OF HYDRAULIC FRACTURE AND HORIZONTAL WELL PARAMETERS IN .pdf"
  - "raw/140792 - Numerical Modeling of Flow in Karst Reservoirs.pdf"
  - "raw/141025 - Proxy Model for Reservoir Simulation.pdf"
  - "raw/142454 - OPTIMIZATION OF WELL PLACEMENT AND PATH IN HYDROCARBON RESERVOIRS.pdf"
status: active
last_updated: 2026-06-17
---

# Differential Evolution

**Summary**: A stochastic search algorithm used for global optimization over continuous spaces.

---

## How It Is Used in the Thesis Collection

- [[2013-al-nemer|Al-Nemer, 2013]] used differential-evolution (DE) to optimize the objective function of reservoir parameters in both single and dual porosity models.

- [[2014-ahmed|Ahmed, 2014]] used differential-evolution to optimize drilling parameters (WOB, RPM, flow rate) for minimum time.

- [[2014-ahmed-2|Ahmed, 2014]] used multiobjective differential evolution algorithm to optimize well placement and rates.

- [[2014-al-ismael|AL-ISMAEL, 2014]] applied the Differential Evolution (DE) algorithm to optimize well locations based on NPV and pressure constraints.

- [[2015-zhang|Zhang, 2015]] used Differential Evolution (DE) to estimate the optimum damping factor for the LM algorithm.

- [[2015-moussa|Moussa, 2015]] used differential evolution to optimize the operational parameters of the ES-SAGD process.

- [[2015-rammay|RAMMAY, 2015]] implemented the Differential Evolution algorithm in Matlab to optimize fracture length, conductivity, and spacing.

- [[2018-jamal|Jamal, 2018]] applied differential evolution (DE) as a global optimizer to determine permeability ratios in the DMOPD method.

- [[2018-salih|Salih, 2018]] used to optimize the model coefficients and parameters during the training phase.

- [[2023-alharbi|Alharbi, 2023]] used Differential Evolution (DE) to optimize well placement and path parameters in three different reservoir models.

## Instruments and Software



- [[2014-ahmed|Ahmed, 2014]] used differential-evolution to optimize drilling parameters (WOB, RPM, flow rate) for minimum time.

- [[2014-ahmed-2|Ahmed, 2014]] used multiobjective differential evolution algorithm to optimize well placement and rates.

- [[2014-al-ismael|AL-ISMAEL, 2014]] applied the Differential Evolution (DE) algorithm to optimize well locations based on NPV and pressure constraints.

- [[2015-zhang|Zhang, 2015]] used Differential Evolution (DE) to estimate the optimum damping factor for the LM algorithm.

- [[2015-moussa|Moussa, 2015]] used differential evolution to optimize the operational parameters of the ES-SAGD process.

- [[2015-rammay|RAMMAY, 2015]] implemented the Differential Evolution algorithm in Matlab to optimize fracture length, conductivity, and spacing.

- [[2018-jamal|Jamal, 2018]] applied differential evolution (DE) as a global optimizer to determine permeability ratios in the DMOPD method.

- [[2018-salih|Salih, 2018]] used to optimize the model coefficients and parameters during the training phase.

- [[2023-alharbi|Alharbi, 2023]] used Differential Evolution (DE) to optimize well placement and path parameters in three different reservoir models.

## Typical Workflow



## Key Results and Findings

- The DE algorithm with the DE/best/1 scheme was selected as the primary optimization method. ([[2013-al-nemer|Al-Nemer, 2013, p. 47]])

- The DE algorithm was successfully used to solve the formulated optimization problem for both drilling time and total rig time. ([[2014-ahmed|Ahmed, 2014, p. 20]])

- The integration of the algorithm with Pareto ranking successfully identified a set of optimal solutions for both economic and environmental criteria. ([[2014-ahmed-2|Ahmed, 2014, p. 111]])

- The DE algorithm was used to find optimal solutions in a complex search space where multiple objectives were competing. ([[2014-al-ismael|AL-ISMAEL, 2014, p. 28]])

- The proposed algorithm using DE shows much faster convergence rate due to elimination of uncertainty in estimating the damping factor. ([[2015-zhang|Zhang, 2015, p. 16]])

- Differential Evolution is a robust, easy, requires few control parameters and lends itself very well to parallel computation. ([[2015-moussa|Moussa, 2015, p. 28]])

- The DE algorithm was configured with a mutation factor of 0.85 and crossover factor of 0.95. ([[2015-rammay|RAMMAY, 2015, p. 45]])

- The DE algorithm was used to estimate permeability ratios within different zones in the caves to optimize the Darcy model's performance. ([[2018-jamal|Jamal, 2018, p. 122]])

- Differential Evolution is robust, easy to use, and superior to traditional Genetic Algorithms in finding global minimums for non-differentiable functions. ([[2018-salih|Salih, 2018, p. 24]])

- The DE algorithm was successfully applied to find optimal well locations and trajectories while balancing multiple constraints using a penalty approach. ([[2023-alharbi|Alharbi, 2023, p. 56]])

## Methodological Variations Across Sources


## Technical Limitations and Open Questions


## Related Concepts

**Related Techniques**: 

**Applicable to Terminology**: 

**Used in Themes**: 
