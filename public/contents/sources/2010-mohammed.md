---
type: source
id: "136420"
title: "IMOROVING WATER FLOODING PERFORMANCE PREDICTION USING STREAMLINE SIMULATION"
author: "Hesham Mohammed"
year: 2010
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Abdul-Aziz Al-Majed"
committee_members: []
source_file: "raw/136420 - Water Flooding Performance Prediction Using Streamline Simulation.pdf"
url: "https://eprints.kfupm.edu.sa/136420"
study_area: "Middle East (specific field names not provided for the study area)"
keywords:
  - Water flooding
  - Streamline simulation
  - Optimization
  - Enhanced oil recovery
  - FrontSim
  - Well Allocation
  - Injection Efficiency
  - Optimization Methods
  - Production rate
techniques:
  - streamline-simulation
  - reservoir-simulation
  - petrel
  - matlab
  - front-tracking
  - frontsim
  - e-plot
  - fortran
  - excel
  - mathematical-modeling
tags:
  - degree/ms
  - location/m3-field
  - location/m4-field
  - location/middle-east-region
  - technique/streamline-simulation
  - technique/reservoir-simulation
  - technique/matlab
  - technique/petrel
  - technique/e-plot
  - technique/frontsim
  - technique/mathematical-modeling
  - theme/water-flooding
  - theme/reservoir-engineering
  - terminology/water-flooding
  - terminology/well-allocation-factors
  - terminology/petrophysics
  - terminology/well-allocation
  - terminology/reservoir-simulation
status: ingested
---

# IMOROVING WATER FLOODING PERFORMANCE PREDICTION USING STREAMLINE SIMULATION

**Summary**: The thesis evaluates three automated optimization methodologies (Huthali, Pamila, and Thiele) for improving water flooding efficiency using streamline simulation. The study compares these methods across four models—two artificial and two real Middle Eastern reservoirs—to determine the best approach for optimizing injection rates and enhancing oil recovery.

---

## Research Problem

Standard finite difference (FD) reservoir simulations are computationally intensive and often fail to provide detailed visualization of fluid movement, making it difficult to identify areas of low sweep or optimize well placement. While streamline simulation offers superior flow visualization and computational efficiency, its predictive capabilities were previously less explored in a comparative context for water flooding optimization.

## Objectives

- Compare three different approaches (Huthali et al., Pamila, and Thiele et al.) for enhancing oil recovery by increasing water flooding efficiency using streamline simulation.
- Evaluate the effectiveness of these methods across both artificial and real reservoir models.
- Identify the best method to improve injection, enhance sweep efficiency, and increase hydrocarbon recovery.
- Evaluate well allocation factors and pore volumes from streamline simulations.
- Compare different optimization methods (E-Plot, Huthali, Pamila, Thiele) for improving injection efficiency.
- Validate grid geometry conversion between ECLIPSE (block-centered) and FrontSim (corner-point).

## Methods

The study utilizes FrontSim, a reservoir simulator based on an IMPES formulation and front-tracking concept. The simulation process involves solving the pressure equation using a control volume finite difference method and then mapping saturations onto streamlines to calculate flow. Four models (M1-M4) were used: M1 is a 50x50x1 homogeneous model; M2 is a 6-layer heterogeneous anticline dome; M3 is a large real reservoir with 130 wells; and M4 is another real reservoir with 97 wells. Optimization methods include the Huthali approach (based on arrival times), Pamila's method (using weighted average of stream efficiencies), and Thiele's method (using well allocation factors).

## Data and Materials

Four simulation models: M1 (2,500 cells), M2 (6,561 cells), M3 (411,237 cells), and M4 (154,699 cells). Data includes relative permeability curves, capillary pressure data, and fluid properties (viscosity, formation volume factors) for both oil and gas phases.

## Key Findings

- The Huthali method was found to have the greatest influence in increasing water flooding efficiency performance compared to the other two methods. ([[2010-mohammed|Mohammed, 2010, p. 12]])
- While the Huthali method showed superior efficiency, it resulted in a lower amount of oil produced compared to the other two methods over the same time scale. ([[2010-mohammed|Mohammed, 2010, p. 12]])
- Streamline simulation is identified as computationally efficient and capable of quantifying flow distribution in injectors/producers and identifying areas of low sweep. ([[2010-mohammed|Mohammed, 2010, p. 15]])
- The Huthali approach (based on arrival times) uses the sensitivity of arrival times to well rates to optimize injection rates via sequential quadratic programming (SQP). ([[2010-mohammed|Mohammed, 2010, p. 20]])
- M3 model dimensions are 100 x 190 x 24 with 411,237 active cells and 130 wells. ([[2010-mohammed|Mohammed, 2010, p. 29]])
- M4 model dimensions are 48 x 118 x 36 with 154,699 active cells and 97 wells. ([[2010-mohammed|Mohammed, 2010, p. 29]])
- The new corner-point geometry in FrontSim was validated against the original block-centered ECLIPSE model, showing excellent agreement in field pressure, oil production, and water cut. ([[2010-mohammed|Mohammed, 2010, p. 55]])
- Well allocation factors allow for the identification of injectors that produce high volumes of oil per barrel of water injected (efficient) versus those with low efficiency. ([[2010-mohammed|Mohammed, 2010, p. 58]])
- The Huthali method utilizes a Sequential Quadratic Programming (SQP) algorithm to minimize arrival time residuals and equalize the water flood front. ([[2010-mohammed|Mohammed, 2010, p. 67]])
- E-Plot software allows for the identification of well pairs that are communicating and the calculation of water lost to aquifers or other areas. ([[2010-mohammed|Mohammed, 2010, p. 66]])
- The Huthali method consistently provided the highest improvement in water flooding efficiency across all tested models compared to Thiele and Pamila methods. ([[2010-mohammed|Mohammed, 2010, p. 83]])
- Thiele and Pamila methods were found to provide better results for increasing oil production rates in the short term (e.g., M2 model showed improvements of 18.3% and 21.9% respectively). ([[2010-mohammed|Mohammed, 2010, p. 91]])
- The Huthali method is superior for long-term performance because it delays water breakthrough by equalizing front arrival times, though this results in lower production rates in the short term. ([[2010-mohammed|Mohammed, 2010, p. 96]])
- In M2 model, the Huthali method showed a 72.0% improvement in efficiency over the original case. ([[2010-mohammed|Mohammed, 2010, p. 91]])
- For M3 segment B at 1 year, the Huthali method achieved an efficiency of 0.561 compared to 0.480 for the original model (a 41.3% improvement). ([[2010-mohammed|Mohammed, 2010, p. 94]])

## Limitations

Streamline simulation has minimal predictive capabilities compared to finite difference methods. Additionally, the study notes that while Huthali's method improves efficiency, it produces less oil over a fixed timeframe than other methods.

## Recommendations and Future Work

- Analyze the economic impact of the optimization methods.
- Incorporate control measures for water loss to aquifers and boundaries.
- Develop new optimization methods using advanced algorithms like genetic algorithms.

## Related Concepts

- [[streamline-simulation]]
- [[reservoir-simulation]]
- [[water-flooding]]
- [[well-allocation-factors]]
- [[petrophysics]]
- [[middle-east-region]]
- [[matlab]]
- [[well-allocation]]
- [[m3-field]]
- [[m4-field]]
- [[reservoir-engineering]]
