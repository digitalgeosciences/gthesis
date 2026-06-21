---
type: source
id: "138989"
title: "OPTIMIZATION AND SENSITIVITY ANALYSIS OF FOAM ASSISTED WATER ALTERNATING GAS"
author: "Najmudeen Sibaweihi"
year: 2013
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Abeeb A. Awotunde"
committee_members: []
source_file: "raw/138989 - OPTIMIZATION AND SENSITIVITY ANALYSIS OF FOAM ASSISTED WATER ALTERNATING GAS.pdf"
url: "https://eprints.kfupm.edu.sa/138989"
study_area: "Not stated in source"
keywords:
  - Optimization
  - Sensitivity Analysis
  - Foam Assisted Water Alternating Gas
  - CO2 flooding
  - Net Present Value (NPV)
  - CMA-ES
  - Differential Evolution
  - Cycle ratio
  - Surfactant amount
  - Well location optimization
techniques:
  - reservoir-simulation
  - matlab
  - sequential-gaussian-simulation
  - cma-es
  - de
  - petrophysics
tags:
  - degree/ms
  - technique/reservoir-simulation
  - technique/matlab
  - technique/petrel
  - technique/cma-es
  - technique/de
  - technique/petrophysics
  - theme/reservoir-engineering
  - theme/eor
  - terminology/eor
  - terminology/petrophysics
  - terminology/mobility
  - terminology/net-present-value
  - terminology/petrophysics
  - terminology/porosity
  - terminology/permeability
  - terminology/well-placement
  - terminology/cycle-ratio
  - terminology/foam-mobility
  - terminology/well-location-optimization
status: ingested
---

# OPTIMIZATION AND SENSITIVITY ANALYSIS OF FOAM ASSISTED WATER ALTERNATING GAS

**Summary**: The thesis investigates the optimization of CO2 foam assisted water alternating gas (FAWAG) using stochastic algorithms to maximize Net Present Value (NPV). It evaluates two specific algorithms, Covariance Matrix Adaptation-Evolutionary Strategy (CMA-ES) and Differential Evolution (DE), for optimizing parameters like well placement and cycle ratio.

---

## Research Problem

The optimization of foam flooding parameters is complex due1 to the numerous variables involved; traditional manual sensitivity studies are inefficient compared to automated stochastic algorithms. The study specifically addresses the need for efficient, less computationally expensive alternatives to Genetic Algorithms (GA) for optimizing CO2 foam flooding in mature and new reservoirs.

## Objectives

- To conduct sensitivity study and determine the effects of cycle length of FAWAG, cycle ratio of FAWAG, and amount of surfactant on recovery performance.
- To study the performance of two stochastic optimization algorithm on optimizing the parameters of FAWAG such as well placement and ratio of length of time of water injection to length of time of gas injection that maximizes NPV.
- Evaluate the impact of cycle ratio on field pressure, oil recovery efficiency, and NPV.
- Determine the optimal amount of surfactant for foam mobility control versus cost.
- Optimize well locations using CMA-ES and DE algorithms in heterogeneous and homogeneous reservoirs.
- Develop a method to enforce minimum inter-well distances during automated well placement optimization.

## Methods

The research utilizes a dual-approach: sensitivity studies were first conducted to determine optimal ranges for cycle length, cycle ratio, and surfactant amount. Subsequently, two stochastic optimization algorithms—Covariance Matrix Adaptation-Evolutionary Strategy (CMA-ES) and Differential Evolution (DE)—were implemented in MATLAB to optimize well placement and the cycle ratio of water injection to gas injection. The Schlumberger ECLIPSE-100 simulator was used as the objective function evaluator for both cases: a mature field with 21 years of waterflooding and a newly discovered field.

## Data and Materials

The study uses two reservoir models: Case 1 (a mature field) and Case 2 (a new field). Both models consist of four layers in a 50x50x4 grid. Reservoir properties like porosity and permeability were generated using sequential Gaussian simulation via Stanford Geostatistical Modeling Software (SGEMS). Simulation parameters included a 13,000x13,000x120 ft reservoir dimension and specific fluid properties for oil, gas (CO2), and water.

## Key Findings

- The optimal ratio of length of time for water injection to length of time for gas injection is between 0.5 and 1 at constant injection rate; ratios below 0.5 result in higher early-stage recovery but lower long-term efficiency. ([[2013-sibaweihi|Sibaweihi, 2013, p. 15]])
- A ratio of 0.1 between the water injection period and gas injection period was found to have a higher NPV for all cycle lengths compared to a ratio of 2.0 in a 10-year forward model. ([[2013-sibaweihi|Sibaweihi, 2013, p. 40]])
- The study identified that longer gas injection periods lead to more pore volumes injected, increasing average reservoir pressure and improving oil mobility by reducing viscosity and density. ([[2013-sibaweihi|Sibaweihi, 2013, p. 40]])
- CMA-ES and DE were found to be less computationally expensive than Genetic Algorithms (GA) while still providing effective optimization for CO2 foam flooding parameters. ([[2013-sibaweihi|Sibaweihi, 2013, p. 14]])
- Lower cycle ratios (e.g., 0.3) resulted in higher field oil production rates and higher NPV compared to higher cycle ratios due to increased gas injection and better mobility control. ([[2013-sibaweihi|Sibaweihi, 2013, p. 57]])
- The optimum cycle ratio for maximizing recovery was found to be between 0.5 and 1.0. ([[2013-sibaweihi|Sibaweihi, 2013, p. 100]])
- A surfactant amount of 0.005 lb/stb provided the highest NPV because it balanced mobility control without incurring excessive costs, whereas higher amounts (e.g., 0.5 lb/stb) reduced profitability due to high costs. ([[2013-sibaweihi|Sibaweihi, 2013, p. 67]])
- Continuous foam injection (CFI) is more profitable at early stages but loses economic advantage over WAGS in long-term projects. ([[2013-sibaweihi|Sibaweihi, 2013, p. 100]])
- Cycle length had no significant effect on the profitability of the foam flooding project across the tested durations (3 months, 6 months, 1 year, and 2 years). ([[2013-sibaweihi|Sibaweihi, 2013, p. 57]])
- CMA-ES performed more consistently than DE in optimization trials, yielding higher NPVs in several realizations for Case I. ([[2013-sibaweihi|Sibaweihi, 2013, p. 76]])
- Well location optimization without distance constraints led to 'crowded' wells (e.g., producers 5 and 8 being too close), necessitating a modified search space approach. ([[2013-sibaweihi|Sibaweihi, 2013, p. 83]])
- Enforcing a minimum inter-well distance of 1000 ft resulted in mean NPVs ($7.6E9 to $7.8E9) comparable to the unconstrained cases, while ensuring practical well spacing. ([[2013-sibaweihi|Sibaweihi, 2013, p. 91]])

## Limitations

The study notes that high pressure resulting from certain cycle ratios might reduce foam effectiveness (Schlumberger, 2010). Additionally, optimization algorithms like DE can produce non-physical solutions (wells too close) without specific constraints.

## Recommendations and Future Work

The results suggest that WAGS is a favorable long-term strategy due to lower operational costs compared to continuous injection methods. The study recommends using optimized cycle ratios and well placement techniques that incorporate minimum distance constraints for practical field development.

## Related Concepts

- [[reservoir-simulation]]
- [[matlab]]
- [[eor]]
- [[petrophysics]]
- [[reservoir-engineering]]
- [[mobility]]
- [[net-present-value]]
- [[porosity]]
- [[permeability]]
- [[well-placement]]
- [[cycle-ratio]]
- [[cma-es]]
- [[de]]
- [[foam-mobility]]
- [[well-location-optimization]]
