---
type: source
id: "140792"
title: "Numerical Modeling of Flow in Karst Reservoirs"
author: "Md Sarim Jamal"
year: 2018
department: "Petroleum Engineering"
degree: "PhD"
supervisor: "Dr. Abeeb A. Awotunde"
committee_members: []
source_file: "raw/140792 - Numerical Modeling of Flow in Karst Reservoirs.pdf"
url: "https://eprints.kfupm.edu.sa/140792"
study_area: "Not stated in source"
keywords:
  - Karst Reservoirs
  - Brinkman's equation
  - Darcy's model
  - tracer transport
  - multi-phase flow
  - porous media
  - free flow region
  - finite volume method
  - Darcy's equation
  - unsteady flow
  - sector modeling
  - permeability distribution
  - Brinkman's model
  - DMOPD
  - Two-phase flow
techniques:
  - finite-volume-method
  - mathematical-modeling
  - reservoir-simulation
  - petrophysics
  - finite-difference-modeling
  - matlab
  - differential-evolution
  - differential-evolution-algorithm
tags:
  - degree/phd
  - technique/finite-volume-method
  - technique/mathematical-modeling
  - technique/reservoir-simulation
  - technique/petrophysics
  - technique/finite-difference-modeling
  - technique/matlab
  - technique/differential-evolution
  - technique/differentiation-evolution-algorithm
  - theme/hydrogeology
  - theme/reservoir-engineering
  - theme/karst-hazards
  - terminology/porosity
  - terminology/permeability
  - terminology/karst-hazards
  - terminology/porous-media
  - terminology/fractured-reservoirs
  - terminology/petrophysics
status: ingested
---

# Numerical Modeling of Flow in Karst Reservoirs

**Summary**: The thesis investigates numerical modeling techniques for fluid flow and tracer transport in karst reservoirs, comparing the Brinkman, Darcy, and sector modeling approaches. It concludes that while the Brinkman model is accurate but computationally expensive, the sector modeling and DMOPD (Darcy Model with Optimized Permeability Distribution) provide efficient alternatives that maintain accuracy in free-flow regions.

---

## Research Problem

Modeling fluid flow in karst reservoirs is challenging due to the presence of large-scale features like caves. While the Brinkman's model is accurate for these regions, it is computationally expensive; conversely, the Darcy's model is efficient but fails to accurately represent velocity profiles within cave systems.

## Objectives

- To use Brinkman’s model to simulate flow and tracer transport on a field scale within karst reservoirs and to study the effect of Peclet number on the tracer profile.
- To modify Brinkman’s equation to account for unsteady flow conditions existing in the reservoir by adding a parameter that accounts for the unsteady flow.
- To develop new, computationally cheap and accurate models of flow to numerically simulate flow and contaminant transport within karst reservoirs.
- To modify the Brinkman’s equation to allow the modelling of two phase flow within karst reservoirs.
- Evaluate the impact of unsteady flow terms on tracer transport in karst aquifers using the Brinkman equation.
- Develop a sector modeling approach to balance computational efficiency and accuracy in large karst systems.

## Methods

The research utilizes the Brinkman's equation as a primary model for coupled systems because it simplifies modeling by using one equation for both free flow and porous regions. The study employs a cell-centered finite volume method to solve the governing equations (continuity, Brinkman, and advection-diffusion-adsorption). Two alternative models are developed: the Sector Modeling Approach and the Darcy Model with Optimized Permeability Distribution (DMOPD), which aim to provide accuracy similar to Brinkman's while being computationally cheaper. The study also incorporates unsteady flow terms into the Brinkman equation and modifies it for two-phase flow simulation.

## Data and Materials

The thesis uses mathematical models and numerical simulations rather than physical samples. Specific parameters used in Example 1 include a porosity of 25% for porous regions, 100% for conduits (caves), a rock compressibility of 2.2 x 10^-3 MPa^-1, water compressibility of 4.35 x 10^-4 MPa^-1, and a viscosity of 1 MPa-s.

## Key Findings

- The Brinkman equation is shown to be superior to the Darcy model for modeling flow in free-flow regions because it accounts for viscous shear effects that are ignored by the Darcy equation. ([[2018-jamal|Jamal, 2018, p. 40]])
- The Brinkman's equation can successfully transition between the Stokes equation (for free flow) and the Darcy equation (for porous media) depending on permeability and viscosity values. ([[2018-jamal|Jamal, 2018, p. 40]])
- Two computationally efficient models, Sector Modeling Approach and DMOPD, were developed to provide results matching Brinkman's model while significantly reducing computation time. ([[2018-jamal|Jamal, 2018, p. 17]])
- For high Peclet numbers, the Brinkman model produces a sharp parabolic concentration profile in caves, whereas the Darcy model yields a flattened, piston-like flow profile. ([[2018-jamal|Jamal, 2018, p. 58]])
- The inclusion of an unsteady flow term in the Brinkman equation allows for modeling transient conditions in karst aquifers. ([[2018-jamal|Jamal, 2018, p. 17]])
- At high Peclet numbers, the Darcy model significantly underestimates tracer transport within free-flow regions (caves), while at low Peclet numbers, both Brinkman and Darcy models yield similar results. ([[2018-jamal|Jamal, 2018, p. 59]])
- The inclusion of an unsteady flow term in the Brinkman equation leads to a more realistic representation of velocity profiles during early stages of flow compared to steady-state models. ([[2018-jamal|Jamal, 2018, p. 71]])
- In Example 2, the Darcy model underestimated tracer concentration at wells located within caves (P1-P4) due to its failure to capture the faster moving front in free-flow zones. ([[2018-jamal|Jamal, 2018, p. 114]])
- The sector modeling approach achieved a computational speed-up of approximately 3.77x over the Brinkman model in Example 1 and 13x in Example 2, while maintaining high accuracy. ([[2018-jamal|Jamal, 2018, p. 111]])
- The DMOPD technique successfully mimicked the velocity profiles of the Brinkman model by optimizing permeability ratios using a global optimization algorithm (Differential Evolution). ([[2018-jamal|Jamal, 2018, p. 104]])
- At high Peclet numbers, the results from the Brinkman's model and Darcy's model are significantly different, with transport being faster in the Brinkman's model. ([[2018-jamal|Jamal, 2018, p. 181]])
- The unsteady flow Brinkman's model yields different tracer concentrations in free-flow regions but nearly equal values in porous media compared to steady flow models. ([[2018-jamal|Jamal, 2018, p. 181]])
- The DMOPD model was found to be 24 times faster than the Brinkman's model for a system with 40,000 grids. ([[2018-jamal|Jamal, 2018, p. 156]])
- page_number_not_applicable_for_this_finding_as_it_is_a_summary_point_in_the_conclusion_section ([[2018-jamal|Jamal, 2018]])
- In Example 1, the DMOPD model was 1.1 times faster than the Brinkman's model while providing a match to its velocity profiles. ([[2018-jamal|Jamal, 2018, p. 156]])

## Limitations

The study notes that while Darcy's model is computationally cheap, it provides inaccurate results in free-flow regions because it lacks a macroscopic shear term. The Brinkman model is accurate but can be computationally expensive for large-scale simulations.

## Recommendations and Future Work

- Model reactive transport within karst caves by coupling advection-diffusion-adsorption-reaction equations with the Brinkman's model.
- Apply the Sector Modeling and DMOPD approaches to irregularly shaped grids using different discretization techniques.
- Study the correlation between cave dimensions and permeability ratios in the DMOPD model.
- Develop codes for the modified Brinkman's model for two-phase flow and compare them with the DMOPD model.

## Related Concepts

- [[finite-volume-method]]
- [[mathematical-modeling]]
- [[porosity]]
- [[permeability]]
- [[karst-hazards]]
- [[hydrogeology]]
- [[reservoir-engineering]]
- [[saudi-arabia]]
- [[differential-evolution]]
- [[porous-media]]
- [[fractured-reservoirs]]
- [[differentiation-evolution-algorithm]]
- [[petrophysics]]
