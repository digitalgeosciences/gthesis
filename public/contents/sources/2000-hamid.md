---
type: source
id: "9956"
title: "Application of Pulse-Decay Technique to Characterize Whole Cores"
author: "Jalal Hamid"
year: 2000
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Hasan Y. Al-Yousef"
committee_members: []
source_file: "raw/9956 - Application of pulse-decay technique to characterize whole cores..pdf"
url: "https://eprints.kfupm.edu.sa/9956"
study_area: "Not stated in source"
keywords:
  - Pulse-Decay Technique
  - Whole Cores
  - Permeability
  - Klinkenberg Factor
  - Gas Slippage
  - Non-linear Regression
  - Curvilinear Grid
  - Finite Difference Method
  - non-Darcy flow
techniques:
  - pulse-decay
  - steady-state-method
  - groundwater-modeling
  - non-linear-regression
  - conformal-mapping
  - core-analysis
  - numerical-simulator
  - nonlinear-regression
tags:
  - degree/ms
  - technique/pulse-decay
  - technique/steady-state
  - technique/groundwater-modeling
  - technique/nonlinear-regression
  - technique/core-analysis
  - technique/petrophysics
  - technique/reservoir-modeling
  - theme/petroleum-engineering
  - theme/petrophysics
  - terminology/permeability
  - terminology/klinkenberg-factor
  - terminology/gas-slippage
  - terminology/core-heterogeneity
  - terminology/petrophysics
  - terminology/non-darcy-flow
status: ingested
---

# Application of Pulse-Decay Technique to Characterize Whole Cores

**Summary**: The thesis investigates the application of the pulse-decay technique to determine permeability and Klinkenberg factors in whole core samples, moving beyond traditional linear core plugs. It develops a mathematical model using curvilinear grids and finite difference methods to account for gas slippage and non-linear flow in large-diameter cores.

---

## Research Problem

Standard core plug analysis often fails to represent the heterogeneity of larger formations, while steady-state measurements on whole cores are time-consuming and difficult to perform due to slow flow rates. There is a need for an efficient, accurate method (pulse-decay) adapted specifically for large-diameter whole cores.

## Objectives

- Apply the pulse-decay technique for the permeability determination of tight whole core samples.
- Develop a procedure to analyze the test data to obtain permeability using non-linear regression techniques.
- Develop a mathematical model incorporating slippage effects for unsteady transverse flow through whole cores.
- Develop a numerical simulator to solve the 2D, single-phase, transient compressible fluid flow equation with gas-slippage effects.
- Develop a computer program using non-linear regression to estimate permeability and Klinkenberg factor from pulse-decay data.
- Evaluate the impact of experimental errors (initial pressure measurement and porosity) on parameter estimation.

## Methods

The study utilizes a custom-built experimental setup featuring a core holder, piston pump, and pressure transducers. A mathematical model was developed based on the principle of conservation of mass, Darcy's law, Klinkenberg equation, and equations of state for gas flow in porous media. To handle complex geometry, a curvilinear grid system was generated using conformal mapping. The governing non-linear partial differential equations were solved using the finite difference method. Data analysis involved a two-parameter non-linear regression (using the least squares method) to determine permeability (k) and the Klinkenberg factor (b). Comparison of results was made against traditional steady-state measurements.

## Data and Materials

Two sandstone whole core samples (CS-1 and CS-2) with dimensions, porosity, and other properties recorded in Table 5.1. Experimental runs included varying pulse sizes (20, 30, 100 psi), mean pore pressures (25 to 250 psi), and different flow directions (0, 45, 90 degrees).

## Key Findings

- A mathematical model incorporating slippage effects was developed to solve the problem of transverse, unsteady compressible fluid flow through whole cores. ([[2000-hamid|Hamid, 2000, p. 16]])
- The pulse-decay method is much faster and easier to perform as compared to the conventional steady-state method and can also help detect core heterogeneity. ([[2000-hamid|Hamid, 2000, p. 16]])
- A curvilinear grid system was developed using conformal mapping to represent the flow geometry more accurately than standard Cartesian or radial coordinates. ([[2000-hamid|Hamid, 2000, p. 45]])
- The non-linear regression technique (using least squares) successfully determined permeability and Klinkenberg factors from both single and multiple test data. ([[2000-hamid|Hamid, 2000, p. 52]])
- A correlation for the Klinkenberg factor was established: b = 6.9 for 0.01 md < k < 1000 md. ([[2000-hamid|Hamid, 2000, p. 55]])
- The study confirmed that the pulse-decay method provides results comparable to steady-state measurements while being more efficient for low-permeability samples. ([[2000-hamid|Hamid, 2000, p. 16]])
- Gas slippage causes faster pressure decay compared to no-slippage cases, leading to higher apparent permeability values in the absence of correction. ([[2000-hamid|Hamid, 2000, p. 73]])
- For very low permeability samples (0.01 md), neglecting gas slippage can lead to an error of up to 155% in permeability estimation. ([[2000-hamid|Hamid, 2000, p. 82]])
- The use of larger pressure pulses (e.g., 100 psi) tends to increase mean pore pressure, reducing the impact of slippage but potentially introducing non-Darcy flow effects which lead to underestimation. ([[2000-hamid|Hamid, 2000, p. 82]])
- The two-parameter analysis program provided accurate estimates for permeability and Klinkenberg factor when used on synthetic data where slippage was included. ([[2000-hamid|Hamid, 2000, p. 83]])
- Klinkenberg factors are highly sensitive to errors in initial upstream pressure measurement and porosity measurements in the two-parameter analysis program. ([[2000-hamid|Hamid, 2000, p. 91]])
- The NLR-Graphical method successfully determined permeability and Klinkenberg factor from synthetic data with high accuracy (e.g., -3% for k and +2.07% for b). ([[2000-hamid|Hamid, 2000, p. 95]])
- Pulse-decay experiments showed no permeability anisotropy for sample CS-1, while sample CS-2 exhibited heterogeneity across different flow directions. ([[2000-hamid|Hamid, 2000, p. 99]])
- Permeability values obtained via pulse-decay were 12% to 20% lower than those from steady-state measurements. ([[2000-hamid|Hamid, 2000, p. 114]])

## Limitations

Standard core plug analysis is limited by inadequate sample size and lack of vertical continuity. Standard steady-state methods are not feasible for very low permeability rocks due to long stabilization times and sensitivity to flow rates.

## Recommendations and Future Work

- Introduce pulse-decay as a standard lab permeability measurement due to its speed and ease of use.
- Incorporate non-Darcy flow effects into the governing flow equations.

## Related Concepts

- [[pulse-decay]]
- [[groundwater-modeling]]
- [[permeability]]
- [[klinkenberg-factor]]
- [[petrophysics]]
- [[non-linear-regression]]
- [[gas-slippage]]
- [[core-heterogeneity]]
- [[core-analysis]]
- [[conformal-mapping]]
- [[non-darcy-flow]]
- [[saudi-arabia]]
