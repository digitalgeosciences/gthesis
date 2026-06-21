---
type: source
id: "141025"
title: "Proxy Model for Reservoir Simulation"
author: "Mohamed Abdelwahab Abdalla Salih"
year: 2018
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Abeeb A. Awotunde"
committee_members: []
source_file: "raw/141025 - Proxy Model for Reservoir Simulation.pdf"
url: "https://eprints.kfupm.edu.sa/141025"
study_area: "Not stated in source"
keywords:
  - Proxy Model
  - Reservoir Simulation
  - Development Planning
  - Optimization
  - History Matching
  - Probabilistic Forecasting
  - Differential Evolution
  - single phase flow
  - two phase flow
  - diffusivity equation
  - developmental study
techniques:
  - reservoir-simulation
  - mathematical-modeling
  - differential-evolution
  - petrophysics
tags:
  - degree/ms
  - technique/reservoir-simulation
  - technique/mathematical-modeling
  - technique/differential-evolution
  - technique/petrophysics
  - theme/reservoir-simulation
  - theme/petroleum-engineering
  - terminology/petrophysics
  - terminology/petrophysics
  - terminology/porosity
  - terminology/two-phase-flow
  - terminology/material-balance
status: ingested
---

# Proxy Model for Reservoir Simulation

**Summary**: The thesis proposes a new proxy model as a computationally inexpensive alternative to traditional numerical reservoir simulation. The model incorporates rock and fluid properties along with operational conditions to provide accurate results in a fraction of a second, making it suitable for history matching, sensitivity analysis, and development optimization.

---

## Research Problem

Traditional numerical reservoir simulations are computationally intensive and time-consuming, especially for tasks like history matching, sensitivity analysis, and developmental optimization. There is a need for faster, accurate models that can provide reliable estimates of well pressures and production rates in both single and two-phase flow systems.

## Objectives

- Develop a simple proxy model for reservoir simulation that can describe the performance of the wells at any point in time during the simulation period.
- Evaluate the proposed proxy model in terms of accuracy relative to conventional numerical reservoir simulation.
- Evaluate the proposed proxy model in terms of computational cost and speed.
- Develop a proxy model based on the diffusivity equation to estimate reservoir performance.
- Test the proxy model's ability to handle different boundary conditions (constant head, flow, no-flow).
- Assess the proxy model's capability in two-phase flow systems including oil and water production.

## Methods

The study develops a mathematical model based on the diffusivity equation incorporating reservoir static/dynamic parameters (rock properties, fluid properties) and operational conditions. The methodology involves comparing the proxy model's results for single-phase flow (well pressure estimation) and two-phase flow (oil/water production rates) against numerical simulation data. Two specific cases were analyzed: a single phase 3D flow with multiple wells and a two-phase 'Egg Model' representing a channelized reservoir. The study also includes a material balance check to ensure the proxy model honors physical constraints.

## Data and Materials

The study uses synthetic and/or simulation data from three specific test cases: a 1D single-phase flow (4 grid blocks), a 2D single-phase flow (9 grid blocks), and a 3D single-phase flow (16x16x3 grid blocks). Training for the proxy models was conducted using 10% of the simulation results.

## Key Findings

- The proposed proxy model successfully replicated numerical simulation results in a 1D case with a maximum error of only 5.06% at the producer well during transition periods and nearly identical results at the injector. ([[2018-salih|Salih, 2018, p. 43]])
- In a 2D single-phase flow, the proxy model produced results almost identical to numerical simulations with a maximum error of only 0.24% in the well. ([[2018-salih|Salih, 2018, p. 47]])
- The 3D single-phase flow case demonstrated that the proxy model could handle complex boundary conditions (sealed, constant pressure, and leakage) while maintaining results nearly identical to numerical simulations across six wells. ([[2018-salih|Salih, 2018, p. 48]])
- A black-oil proxy model for SAGD was shown in literature to run up to 10 times faster than a thermal model with similar performance. ([[2018-salih|Salih, 2018, p. 20]])
- The proposed model requires only one training session to adjust to changes in reservoir or operational conditions, unlike some AI-based models that require frequent retraining. ([[2018-salih|Salih, 2018, p. 35]])
- The proxy model estimated well pressures in a single-phase flow case with an average maximum error of approximately 4.78% across six wells. ([[2018-salih|Salih, 2018, p. 53]])
- In the two-phase 'Egg Model' (Case 1), the proxy model results for oil and water production were very close to numerical simulation, with errors of 13.6%, 3.6%, and 4.7% for cumulative oil, water, and injected volume respectively. ([[2018-salih|Salih, 2018, p. 67]])
- The proxy model's calculation time was approximately 32 times faster than the numerical reservoir simulation. ([[2018-salih|Salih, 2018, p. 67]])
- In Case 2 of the two-phase study, the proxy model showed even closer agreement with numerical simulations, with errors of 2.9%, 1.6%, and 0.5% for cumulative oil, water, and injected volumes. ([[2018-salih|Salih, 2018, p. 76]])
- The proxy model successfully captured the impact of varying flow rates (multi-rate cases) as seen in both single and two-phase flows. ([[2018-salih|Salih, 2018, p. 54]])
- The proxy model outperformed both INSIM and INSIM 2 models in estimating field oil production, water production, and water injection rates for Case 2. ([[2018-salih|Salih, 2018, p. 83]])
- The proxy model successfully maintained material balance (mass_in - mass_out ≈ 0) across different time steps. ([[2018-salih|Salih, 2018, p. 78]])

## Limitations

The two-phase flow example did not include capillary pressure effects. The study used a specific 'Egg Model' which may not represent all reservoir types, and the author recommends testing more complex scenarios like capillary pressure and different reservoir types to generalize the model.

## Recommendations and Future Work

- Expand the proxy model to include three-phase flow (oil, water, and gas).
- Incorporate capillary pressure effects into the simulation.
- Test the model on a wider variety of reservoir types to ensure general applicability.
- Conduct more developmental studies, such as well placement optimization.

## Related Concepts

- [[reservoir-simulation]]
- [[differential-evolution]]
- [[petrophysics]]
- [[mathematical-modeling]]
- [[porosity]]
- [[two-phase-flow]]
- [[material-balance]]
