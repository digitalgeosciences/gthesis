---
type: source
id: "142690"
title: "Temperature and Pressure Transients in Linear Hot Water Flooded Heavy Oil Reservoirs"
author: "Muhammad Aliyu Suleiman"
year: 2023
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Abeeb Awotunde"
committee_members: []
source_file: "raw/142690 - Temperature and Pressure Transients in Linear Hot Water Flooded Heavy Oil Reserv.pdf"
url: "https://eprints.kfupm.edu.sa/142690"
study_area: "Not stated in source"
keywords:
  - Temperature and Pressure Transients
  - Linear Hot Water Flooding
  - Heavy Oil Reservoirs
  - Heat Flow Equation
  - Fluid Flow Model
  - Inverse Modeling
  - Gaver-Stehfest Method
  - Laplace Transform
  - Heavy oil
  - Hot water injection
  - Temperature transients
  - Pressure transients
  - Thermal EOR
techniques:
  - matlab
  - cmg-cmost
  - differential-evolution
  - laplace-transform
  - mathematical-geology
  - gaver-stehfest-method
  - inverse-modeling
tags:
  - degree/ms
  - technique/matlab
  - technique/differentiation-evolution
  - technique/laplace-transform
  - technique/reservoir-simulation
  - technique/mathematical-modeling
  - theme/reservoir-engineering
  - theme/petroleum-engineering
  - theme/eor
  - terminology/petrophysics
  - terminology/porosity
  - terminology/permeability
  - terminology/viscosity
  - terminology/heat-flow
  - terminology/inverse-modeling
  - terminology/petrophysics
  - terminology/eor
status: ingested
---

# Temperature and Pressure Transients in Linear Hot Water Flooded Heavy Oil Reservoirs

**Summary**: The thesis models pressure and temperature transients in heavy oil reservoirs during hot water injection by coupling heat flow and fluid flow equations. It utilizes a composite reservoir model with moving boundaries, Laplace transforms, and the Gaver-Stehfest method to solve for non-isothermal conditions.

---

## Research Problem

Heavy oil is difficult to extract due to high viscosity, which is strongly temperature-dependent; therefore, standard isothermal assumptions in fluid flow equations are often insufficient during thermal EOR processes like hot water injection.

## Objectives

- Perform transient analysis for temperature and pressure in heavy oil reservoirs injected with hot water.
- Integrate both heat flow and fluid flow models including conduction and advection mechanisms.
- Conduct sensitivity analysis to observe responses to various reservoir parameters.
- Estimate reservoir parameters (permeability, pay thickness) using inverse modeling.
- Account for the moving boundary between injector and producer
- Integrate heat flow equations with fluid flow models to improve accuracy in non-isothermal conditions

## Methods

The study uses mathematical tools and MATLAB to model transient behavior. The system is treated as a composite reservoir with two regions (injector and producer) involving moving boundaries. Fluid properties (density, viscosity, specific heat capacity, thermal conductivity, and compressibility) are modeled as zone-dependent variables. Equations for fluid flow and heat transfer are converted into dimensionless forms and solved using Laplace transforms. The Gaver-Stehfest method is applied to numerically invert the Laplace transform from solution space to real space. Inverse modeling is used to estimate reservoir parameters.

## Data and Materials

The study utilizes a set of 10 parameters including permeability (k), pay thickness (h), minimum area factor (fAmin), maximum area factor (fAmax), and decline coefficient (Di). Data for inverse modeling was generated using CMG STARS software with added Gaussian white noise.

## Key Findings

- Integrating both fluid flow and heat flow models yields more accurate results for non-isothermal reservoirs undergoing hot water injection compared to standard isothermal assumptions. ([[2023-suleiman|Suleiman, 2023, p. 73]])
- The temperature difference between reservoir rock and fluid was found to be insignificant by using simultaneous iteration because fluid velocity in porous media is very small. ([[2023-suleiman|Suleiman, 2023, p. 22]])
- Higher injection rates result in higher temperatures at various distances from the well, with a significant divergence in temperature profiles observed at 25 ft compared to 5 and 15 ft. ([[2023-suleiman|Suleiman, 2023, p. 48]])
- A shorter reservoir length leads to significantly higher pressure at both injection and production wells because the production well 'feels' the injection well sooner. ([[2023-suleiman|Suleiman, 2023, p. 53]])
- Higher initial temperatures result in lower pressure profiles due to increased mobility from reduced viscosity, while lower initial temperatures lead to higher pressure profiles. ([[2023-suleiman|Suleiman, 2023, p. 54]])
- A larger pay thickness results in a reduction in the pressure profile because of the increased cross-sectional area allowing for more fluid movement. ([[2023-suleiman|Suleiman, 2023, p. 54]])
- The model including moving boundaries and heat flow (Case 3) achieved an error of only 1.75% for kh compared to 4.08% in the fixed interface model (Case 6). ([[2023-suleiman|Suleiman, 2023, p. 70]])
- The viscosity of heavy oil is strongly temperature dependent, necessitating the inclusion of heat flow equations in thermal EOR processes. ([[2023-suleiman|Suleiman, 2023, p. 72]])

## Limitations

The study is limited to a 1D linear flow model and assumes an isotropic, homogeneous reservoir where oil and water remain in the liquid phase.

## Recommendations and Future Work

Not stated in source

## Related Concepts

- [[differentiation-evolution]]
- [[laplace-transform]]
- [[petrophysics]]
- [[porosity]]
- [[reservoir-engineering]]
- [[permeability]]
- [[viscosity]]
- [[heat-flow]]
- [[inverse-modeling]]
- [[mathematical-modeling]]
- [[reservoir-simulation]]
- [[eor]]
