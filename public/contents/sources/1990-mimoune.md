---
type: source
id: "10169"
title: "The Effect of Multiple Fractures on the Performance of Gas Wells"
author: "Kissami Mimoune"
year: 1990
department: "Petroleum Engineering"
degree: "PhD"
supervisor: "Dr. Hassan S. Al-Hashim"
committee_members: []
source_file: "raw/10169 - The Effect of multiple fractures on the performance of gas wells.pdf"
url: "https://eprints.kfupm.edu.sa/10169"
study_area: "Not stated in source"
keywords:
  - multiple fractures
  - gas wells
  - hydraulic fracturing
  - tailored-pulse loading
  - pressure transient behavior
  - finite conductivity
  - infinite conductivity
  - gas well
  - linear flow
  - bilinear flow
  - pseudoradial flow
  - low permeability reservoirs
  - transient flow behavior
techniques:
  - mathematical-geology
  - groundwater-modeling
  - reservoir-simulation
  - well-log-analysis
  - mathematical-modeling
  - pressure-transient-analysis
tags:
  - degree/phd
  - technique/mathematical-geology
  - technique/groundwater-modeling
  - technique/reservoir-simulation
  - technique/mathematical-modeling
  - technique/pressure-transient-analysis
  - theme/petroleum-engineering
  - theme/fractured-reservoirs
  - theme/reservoir-engineering
  - terminology/fractured-reservoirs
  - terminology/petrophysics
  - terminology/permeability
  - terminology/fracture-characterization
  - terminology/porosity
  - terminology/gas-in-place
  - terminology/non-darcy-flow
  - terminology/petroleum-engineering
status: ingested
---

# The Effect of Multiple Fractures on the Performance of Gas Wells

**Summary**: The thesis investigates the transient flow behavior and performance of gas wells in low permeability reservoirs intersected by two perpendicular fractures with varying conductivities. It uses mathematical modeling and simulation to determine how fracture geometry and conductivity affect pressure drop, production rates, and the identification of flow regimes.

---

## Research Problem

Existing analysis methods for single-fracture systems are not clearly applicable to wells intersected by multiple fractures resulting from techniques like Tailored-Pulse Loading, especially when dealing with varying fracture lengths and conductivities in gas reservoirs.

## Objectives

- Investigate the effects of induced vertical fractures of different fracture length ratios (y/x) and conductivities on well performance and pressure transient behavior.
- Evaluate the applicability of existing methods for analyzing single vertical fracture systems to multi-fracture systems.
- To evaluate the impact of multiple perpendicular fractures on the pressure transient behavior of a gas well.
- To validate a numerical model against analytical solutions for both infinite and finite conductivity cases.
- To determine the effect of the fracture length ratio (y/x) on the flow period durations.
- Evaluate and predict the performance of gas wells in low permeability reservoirs intersected by two perpendicular fractures.

## Methods

The study utilizes a finite difference simulator to model gas wells with two perpendicular fractures. It compares results against semi-analytical solutions from Cinco et al. and analytical models by Gringarten et al. The research evaluates three distinct flow regimes: fracture linear flow, formation linear flow (bilinear), and pseudoradial flow. Parameters such as dimensionless time, fracture conductivity (F_c), and the ratio of fracture lengths (y/x) are varied to assess their impact on well performance.

## Data and Materials

The study uses a set of standardized reservoir and fluid properties: initial pressure 5000 psia, formation permeability 1.0 md-ft, gas gravity 0.70, and fracture width of 0.3 inches. Multiple simulation runs were performed for various y/x ratios (0.0, 0.25, 0.5, 0.8, 1.0) and different conductivity values (F_c = 0.2, 1.0, 10).

## Key Findings

- For wells with finite conductivity (Fy < 500), the transient flow behavior does not exhibit either bilinear or formation linear flow when y/x > 0; instead, log-log plots of pp vs ty show slopes higher than characteristic values. ([[1990-mimoune|Mimoune, 1990, p. 15]])
- When fracture conductivities are equal to or greater than 500, the formation linear flow period is observed. ([[1990-mimoune|Mimoune, 1990, p. 15]])
- The square-root method for determining fracture half length from the formation linear flow period was found to give a value equal to the sum of the fracture half lengths (y + x). ([[1990-mimoune|Mimoune, 1990, p. 15]])
- At early times and for fracture conductivities up to 0.2, pressure drops (pp) for cases where y/x > 0 were lower than those for single fracture cases. ([[1990-mimoune|Mimoune, 1990, p. 15]])
- As fracture conductivity increased, calculated pressure drops increased to values higher than single fracture cases after a specific time point that is a function of fracture conductivity. ([[1990-mimoune|Mimoune, 1990, p. 15]])
- For both infinite and finite conductivity perpendicular vertical fractures, the results plotted as pp vs log(ty) gave a 1.151-slope straight line for large ty, allowing semilogarithmic pressure analysis methods to be applied. ([[1990-mimoune|Mimoune, 1990, p. 15]])
- The study confirmed that non-Darcy flow effects in the fracture can cause the apparent fracture conductivity to be significantly lower than the true value (up to 85% difference). ([[1990-mimoune|Mimoune, 1990, p. 26]])
- A minimum of 2929 grids are necessary to reproduce the analytical solution for a well with a fracture width of 0.5 inches. ([[1990-mimoune|Mimoune, 1990, p. 46]])
- The numerical model showed excellent agreement with Cinco et al.'s semianalytical solutions for both infinite and finite conductivity cases across all tested y/x ratios. ([[1990-mimoune|Mimoune, 1990, p. 47]])
- A (29 x 29) grid system was found to be appropriate for accurate results for both infinite and finite conductivity vertical fractures based on Bennett et al. guidelines. ([[1990-mimoune|Mimoune, 1990, p. 47]])
- The duration of the linear flow period increases as the y/x ratio increases, because higher y/x ratios result in a larger portion of the total flow coming from the further parts of the fracture. ([[1990-mimoune|Mimoune, 1990, p. 77]])
- For cases with finite conductivity (F_c < 500), the well exhibits three distinct periods: fracture linear flow, bilinear flow, and pseudoradial flow. ([[1990-mimoune|Mimoune, 1990, p. 92]])
- The calculation of fracture half-length for each y/x ratio was found to be approximately 100 feet (the input value), confirming the accuracy of the model in identifying fracture dimensions. ([[1990-mimoune|Mimoune, 1990, p. 77]])
- The transient flow behavior of a gas well intersected by finite conductivity perpendicular fractures does not exhibit the standard bilinear flow (0.25 slope) or formation linear flow (0.50 slope) for all $y_f/x_f$ ratios. ([[1990-mimoune|Mimoune, 1990, p. 111]])
- Formation linear flow was observed at early times for all $y_f/x_f$ ratios when the fracture conductivity is infinite ($F_{cd} = \infty$). ([[1990-mimoune|Mimoune, 1990, p. 111]])

## Limitations

The study does not consider factors such as wellbore storage, fracture storage, closure pressure, and reservoir heterogeneity.

## Recommendations and Future Work

- Investigate the impact of turbulent flow into or around fractures for both infinite and finite conductivity cases.
- Investigate systems with one fracture of finite conductivity and another of infinite conductivity.
- Incorporate factors such as wellbore storage, fracture storage, closure pressure, and reservoir heterogeneity in future studies.

## Related Concepts

- [[mathematical-geology]]
- [[groundwater-modeling]]
- [[fractured-reservoirs]]
- [[petrophysics]]
- [[reservoir-engineering]]
- [[petroleum-engineering]]
- [[permeability]]
- [[fracture-characterization]]
- [[porosity]]
- [[gas-in-place]]
- [[non-darcy-flow]]
- [[reservoir-simulation]]
- [[mathematical-modeling]]
- [[pressure-transient-analysis]]
