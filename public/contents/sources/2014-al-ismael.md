---
type: source
id: "139420"
title: "A MULTI-OBJECTIVE WELL PLACEMENT APPROACH WITH NPV AND REGIONAL PRESSURE BALANCE"
author: "MENHAL ABDULBAQI AL-ISMAEL"
year: 2014
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Abeeb A. Awotunde"
committee_members: []
source_file: "raw/139420 - A MULTI-OBJECTIVE WELL PLACEMENT APPROACH WITH NPV AND REGIONAL PRESSURE BALANCE.pdf"
url: "https://eprints.kfupm.edu.sa/139420"
study_area: "Two synthetic reservoir models: a channeled reservoir and a reservoir with fully distributed permeability."
keywords:
  - Well placement optimization
  - Net Present Value (NPV)
  - Regional pressure balance
  - Voidage Replacement Ratio (VRR)
  - Multi-objective optimization
  - Differential Evolution (DE)
  - Well placement
  - NPV
  - Reservoir simulation
  - Optimization
  - Reservoir management
  - Reservoir average pressure
techniques:
  - reservoir-simulation
  - petrel
  - mathematical-modeling
  - differential-evolution
  - well-log-analysis
  - data-analysis
  - petrophysics
  - differential-evolution-algorithm
tags:
  - degree/ms
  - technique/reservoir-simulation
  - technique/petrel
  - technique/mathematical-modeling
  - technique/differential-evolution
  - technique/well-log-analysis
  - technique/data-analysis
  - technique/petrophysics
  - technique/differentiation-evolution-algorithm
  - theme/reservoir-engineering
  - theme/petroleum-engineering
  - terminology/net-present-value
  - terminology/petrophysics
  - terminology/porosity
  - terminology/permeability
  - terminology/well-placement
  - terminology/pressure-management
  - terminology/multi-objective-optimization
  - terminology/voidage-replacement-ratio
  - terminology/petrophysics
  - terminology/petroleum-engineering
  - terminology/water-saturation
status: ingested
---

# A MULTI-OBJECTIVE WELL PLACEMENT APPROACH WITH NPV AND REGIONAL PRESSURE BALANCE

**Summary**: The thesis investigates a multi-objective optimization approach for well placement in large-scale fields, balancing Net Present Value (NPV) with reservoir pressure constraints. Using the differential evolution algorithm on two synthetic models, it demonstrates that while unconstrained NPV maximization leads to poor pressure balance, a weighted constraint approach allows for optimized locations that maintain both average and regional pressure.

---

## Research Problem

Standard well placement optimization often focuses solely on maximizing Net Present Value (NPV), which can lead to unbalanced reservoir pressure distributions. Traditional environmental metrics like Voidage Replacement Ratio (VRR) may fail to detect localized pressure imbalances that cause geomechanical issues like subsidence, especially in large-scale fields.

## Objectives

- Use the reservoir average pressure instead of VRR as an environmental constraint in the optimization.
- Use regional reservoir average pressure (rP) by dividing the reservoir into four regions to ensure balanced distribution.
- Optimize well placement in all regions while maximizing NPV and maintaining pressure variance within a predefined limit.
- Evaluate two specific reservoir models: a channel reservoir with four facies and a heterogeneous reservoir.
- Construct and successfully code an objective function for various scenarios.
- Convert the constrained problem to an unconstrained one using penalty functions.

## Methods

The study utilizes a multi-objective optimization framework. A cost function is developed that incorporates NPV, regional average pressure balance, and overall reservoir average pressure as key parameters. The constrained problem is converted into an unconstrained one using a penalty approach where violations of constraints (like excessive pressure variance) increase the cost function value. The Differential Evolution (DE) algorithm—a population-based metaheuristic—is used to iterate through candidate solutions to find optimal well locations. Reservoir simulation is performed using ECLIPSE to evaluate different scenarios, including base cases with pre-set patterns and optimized cases using the DE algorithm.

## Data and Materials

Two reservoir models: Model 1 (specific dimensions) and Model 2 (64x64x3 grid, 12,288 cells). Model  parameters included a 30-year simulation period (Oct 2011 to Oct 2041), production rates of 1500 b/d on producers, injection rates of 2500 b/d on injectors, and specific porosity values for three layers (0.23, 0.17, and 0.11).

## Key Findings

- The study identifies that using only the total field Voidage Replacement Ratio (VRR) can mask significant regional pressure imbalances, as shown by a case where the maximum difference between regional pressures reached 556 psi. ([[2014-al-ismael|AL-ISMAEL, 2014, p. 16]])
- A multi-objective cost function was developed to balance NPV maximization with two constraints: regional average pressure variance and overall reservoir average pressure maintenance. ([[2014-al-ismael|AL-ISMAEL, 2014, p. 37]])
- The Differential Evolution (DE) algorithm was successfully implemented as a metaheuristic to solve the non-linear, multi-objective well placement problem. ([[2014-al-ismael|AL-ISMAEL, 2014, p. 28]])
- Model 1 (75x75x2) and Model 2 (64x64x3) were used to validate that regional pressure balance provides a more stable reservoir management strategy than VRR-based methods. ([[2014-al-ismael|AL-ISMAEL, 2014, p. 35]])
- The study demonstrates that the penalty approach effectively converts constrained optimization into an unconstrained problem for use with the DE algorithm. ([[2014-al-ismael|AL-ISMAEL, 2014, p. 30]])
- Pattern 2 resulted in an NPV of 9.693 x 10^9 after 30 years with a maximum average pressure drop of 1180 psi. ([[2014-al-ismael|AL-ISMAEL, 2014, p. 44]])
- Case 1 (NPV optimization only) yielded the highest NPV of 7.78 x 10^9 but resulted in a high pressure drop of 1761 psi and significant regional imbalance (338.93 psi difference between Pr2 and Pr3). ([[2014-al-ismael|AL-ISMAEL, 2014, p. 52]])
- Case 2 (NPV with regional pressure constraint) resulted in an NPV of 7.53 x 10^9, which was lower than Case 1 but significantly improved the balance between regions, reducing the difference between Pr2 and Pr3 to 81.85 psi. ([[2014-al-ismael|AL-ISMAEL, 2014, p. 57]])
- In channeled reservoirs, wells located in high permeability and high porosity areas have a more significant effect on sweeping out oil. ([[2014-al-ismael|AL-ISMAEL, 2014, p. 44]])
- Case 1 (NPV optimization only) yielded the highest NPV of 9.78 x 10^9 but resulted in high regional pressure differences (338.93 psig) and large reservoir average pressure drops. ([[2014-al-ismael|AL-ISMAEL, 2014, p. 67]])
- Case 2 (NPV + Regional Pressure Balance) reduced the regional pressure difference to 81.85 psig while maintaining a high NPV of 9.53 x 10^9. ([[2014-al-ismael|AL-ISMAEL, 2014, p. 67]])
- Case 3 (Multi-objective: NPV, Regional Pressure, and Average Reservoir Pressure) resulted in an NPV of 9.25 x 10^9 with a maximum reservoir average pressure drop of only 741 psig. ([[2014-al-ismael|AL-ISMAEL, 2014, p. 62]])
- Pattern 3 in Model 2 yielded an NPV of 9.734 x 10^9 and showed improved pressure distribution compared to some other patterns. ([[2014-al-ismael|AL-ISMAEL, 2014, p. 77]])
- Model 2's heterogeneous reservoir had a porosity of 0.23, 0.17, and 0.11 for layers 1, 2, and 3 respectively. ([[2014-al-ismael|AL-ISMAEL, 2014, p. 68]])
- Case 1 (NPV only) yielded the highest NPV ($7.18 \times 10^9$) but resulted in the largest average pressure drop ($\Delta P = 1150$ psi) and high regional pressure differences of 180 psi. ([[2014-al-ismael|AL-ISMAEL, 2014, p. 81]])

## Limitations

Not stated in source

## Recommendations and Future Work

Not stated in source

## Related Concepts

- [[reservoir-simulation]]
- [[differential-evolution]]
- [[net-present-value]]
- [[petrophysics]]
- [[reservoir-engineering]]
- [[porosity]]
- [[permeability]]
- [[well-placement]]
- [[pressure-management]]
- [[multi-objective-optimization]]
- [[voidage-replacement-ratio]]
- [[mathematical-modeling]]
- [[petroleum-engineering]]
- [[water-saturation]]
- [[differentiation-evolution-algorithm]]
