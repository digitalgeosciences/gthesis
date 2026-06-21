---
type: source
id: "139831"
title: "STOCHASTIC OPTIMIZATION OF HYDRAULIC FRACTURE AND HORIZONTAL WELL PARAMETERS IN SHALE GAS SIMULATION MODELS"
author: "MUZAMMIL HUSSAIN RAMMAY"
year: 2015
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Abeeb A. Awotunde"
committee_members: []
source_file: "raw/139831 - STOCHASTIC OPTIMIZATION OF HYDRAULIC FRACTURE AND HORIZONTAL WELL PARAMETERS IN .pdf"
url: "https://eprints.kfupm.edu.sa/139831"
study_area: "Shale gas reservoirs (general study)"
keywords:
  - Stochastic optimization
  - Hydraulic fracturing
  - Horizontal well
  - Shale gas reservoirs
  - Differential Evolution algorithm
  - Net Present Value (NPV)
  - Shale gas reservoir
  - Fracture spacing
  - Fracture conductivity
  - Hydraulic Fracture
  - Net Present Value
techniques:
  - reservoir-simulation
  - mathematical-modeling
  - sequential-gaussian-simulation
  - differential-evolution
  - matlab
  - petrel
  - history-matching
  - differential-evolution-algorithm
  - sensitivity-analysis
tags:
  - degree/ms
  - formation/none
  - location/none
  - technique/reservoir-simulation
  - technique/mathematical-modeling
  - technique/sequential-gaussian-simulation
  - technique/differential-evolution
  - technique/matlab
  - technique/history-matching
  - technique/differential-evolution-algorithm
  - technique/sensitivity-analysis
  - theme/petroleum-engineering
  - theme/hydraulic-fracturing
  - theme/reservoir-engineering
  - terminology/petrophysics
  - terminology/hydraulic-fracturing
  - terminology/petrophysics
  - terminology/net-present-value
  - terminology/adsorption
  - terminology/fracture-characterization
  - terminology/shale-gas-reservoirs
status: ingested
---

# STOCHASTIC OPTIMIZATION OF HYDRAULIC FRACTURE AND HORIZONTAL WELL PARAMETERS IN SHALE GAS SIMULATION MODELS

**Summary**: The thesis investigates the optimization of hydraulic fracture and horizontal well parameters in shale gas reservoirs using a stochastic approach. It evaluates three different cases of parameter selection to maximize Net Present Value (NPV) and concludes that including more variables, such as well length and number of stages, significantly improves optimization results.

---

## Research Problem

Maximizing economic returns (Net Present Value) in shale gas fields is challenging due to the high costs of horizontal well drilling and multistage hydraulic fracturing. Optimization of parameters like fracture length, spacing, number of stages, and proppant mass is required to balance cost and production.

## Objectives

- Optimize hydraulic fracturing parameters (fracture length, spacing, number of stages, conductivity) and horizontal well length to maximize Net Present Value (NPV).
- Implement a stochastic optimization algorithm (Differential Evolution) coupled with an LGR-based gas shale reservoir simulation model.
- Compare automated optimization results with base cases to quantify the impact of using the Differential Evolution algorithm.
- Optimization of Fracture conductivity with amount of Proppant (Fracture Conductivities Patterns).
- Optimization of Fracture Spacings.
- Optimization of Horizontal Well Length (Length of Horizontal Lateral).

## Methods

The study utilizes a reservoir simulation model incorporating dual porosity, Langmuir isotherm for gas desorption, stress-sensitive fracture conductivity, and local grid refinement (LGR) for hydraulic fractures. A cost function based on published data was developed to estimate costs of well length and number of stages. The Net Present Value (NPV) was used as the objective function for optimization. Sensitivity analysis was performed to determine search spaces for fracture spacing and conductivity. The Differential Evolution (DE) algorithm was employed for stochastic optimization across three cases: Case 1 (fracture length, conductivity), Case 2 (length, conductivity, spacing, number of stages), and Case 3 (well length, length, conductivity, spacing, number of stages).

## Data and Materials

The study utilizes LGR-based simulation models for shale gas reservoirs (specifically mentioning the Barnett Shale and Marcellus Shale in literature review). It evaluates parameters such as fracture conductivity, spacing, number of stages, proppant mass, and horizontal well length. The research references various datasets including Langmuir isotherm data for gas desorption and geomechanics data for stress-sensitive fracture conductivity.

## Key Findings

- The use of the coupled Differential Evolution algorithm resulted in a significant profit increase compared to base case results. ([[2015-rammay|RAMMAY, 2015, p. 16]])
- Stimulated fracture network permeability was found to have the most influence (36%) on cumulative gas production among reservoir parameters. ([[2015-rammay|RAMMAY, 2015, p. 30]])
- Fracture half-length was identified as the most influential hydraulic fracture parameter on cumulative gas production (33%). ([[2015-rammay|RAMMAY, 2015, p. 31]])
- In the Middle Bakken, optimal fracture conductivities were found to be 4 md-ft and 6 md-ft for cases without and with geomechanics effects respectively. ([[2015-rammay|RAMMAY, 2015, p. 40]])
- Optimal horizontal well numbers were determined to be 6 for both cases with and without geomechanics considerations. ([[2015-rammay|RAMMAY, 2015, p. 40]])
- Well spacing of 330 ft and 400 ft maximized the NPV in a black oil Eagle Ford reservoir under specific conditions (50 mD permeability, fracture half-lengths of 100 and 150 ft). ([[2015-rammay|RAMMAY, 2015, p. 40]])
- Critical conductivity for proppant was found to be inversely correlated with flowing bottomhole pressure. ([[2015-rammay|RAMMAY, 2015, p. 41]])
- The reservoir simulation model successfully matched real field data from the Barnett Shale, validating the inclusion of gas desorption (Langmuir isotherm) and geomechanics. ([[2015-rammay|RAMMAY, 2015, p. 53]])
- Sensitivity analysis showed that production interference between fracture stages is high at 50 ft spacing but becomes negligible beyond 150 ft. ([[2015-rammay|RAMMAY, 2015, p. 74]])
- Cumulative gas production increases significantly as fracture conductivity increases from 1 to 5 md-ft. ([[2015-rammay|RAMMAY, 2015, p. 74]])
- At a fracture conductivity of 200 md-ft, the NPV is lower than at other higher conductivities because the rate of increase in cost for high proppant volume exceeds the rate of increase in revenue. ([[2015-rammay|RAMMAY, 2015, p. 76]])
- The Differential Evolution algorithm was implemented with a mutation factor (F) of 0.85 and a crossover factor (CR) of 0.95. ([[2015-rammay|RAMMAY, 2015, p. 45]])
- Case 3 optimization resulted in a 199.5% profit increase from initial value, outperforming Case 2 and Case 1. ([[2015-rammay|RAMMAY, 2015, p. 95]])
- Sensitivity analysis determined that the search space for fracture spacing should be between 50 and 200 ft to avoid production interference. ([[2015-rammay|RAMMAY, 2015, p. 79]])
- Sensitivity analysis determined that the search space for fracture conductivity should be between 1 and 2000 md-ft, as values above 2000 md-ft showed negligible gains in cumulative production but significant increases in cost. ([[2015-rammay|RAMMAY, 2015, p. 84]])

## Limitations

The study notes that specific results are highly dependent on current market prices for proppants and fluids; if these costs change, the optimal values will shift even though the methodology remains valid.

## Recommendations and Future Work

The findings suggest that the oil and gas industry can maximize profits (NPV) from shale gas reservoirs by adopting these computational algorithms and optimization frameworks to handle heterogeneity.

## Related Concepts

- [[reservoir-simulation]]
- [[sequential-gaussian-simulation]]
- [[petrophysics]]
- [[hydraulic-fracturing]]
- [[petroleum-engineering]]
- [[differential-evolution]]
- [[net-present-value]]
- [[adsorption]]
- [[reservoir-engineering]]
- [[none]]
- [[differential-evolution-algorithm]]
- [[sensitivity-analysis]]
- [[fracture-characterization]]
- [[shale-gas-reservoirs]]
