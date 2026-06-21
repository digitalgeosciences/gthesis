---
type: source
id: "139352"
title: "PRESSURE TRANSIENT TESTING OF U-SHAPED HORIZONTAL WELLS"
author: "Abdallah Mubarak Al-Gahtani"
year: 2014
department: "Petroleum Engineering"
degree: "PhD"
supervisor: "Dr. Hasan Al-Hashim"
committee_members: []
source_file: "raw/139352 - PRESSURE TRANSIENT TESTING OF U-SHAPED HORIZONTAL WELLS.pdf"
url: "https://eprints.kfupm.edu.sa/139352"
study_area: "Not stated in source"
keywords:
  - Pressure Transient Testing
  - Horizontal Wells
  - U-shaped Horizontal Wells
  - Wellbore Hydraulics
  - Formation Damage
  - Finite Conductivity
  - Flow Distribution
  - Petroleum Engineering
  - Green's Function
  - Analytical Solution
  - Dimensionless Flux
  - U-shaped horizontal well
  - skin factor
  - transient productivity index
  - Flow Profile
  - Skin Effect
  - Frictional Pressure Loss
  - Specific Productivity Index
techniques:
  - pressure-transient-analysis
  - mathematical-modeling
  - fortran-programming
  - numerical-analysis
  - mathematical-geology
  - reservoir-simulation
  - well-log-analysis
tags:
  - degree/phd
  - technique/pressure-transient-analysis
  - technique/mathematical-modeling
  - technique/fortran-programming
  - technique/numerical-analysis
  - technique/mathematical-geology
  - technique/reservoir-simulation
  - theme/petroleum-engineering
  - theme/reservoir-engineering
  - theme/well-design
  - terminology/permeability
  - terminology/skin
  - terminology/wellbore-hydraulics
  - terminology/pressure-transient-analysis
  - terminology/finite-conductivity
  - terminology/petrophysics
  - terminology/dimensionless-flux
  - terminology/transient-productivity-index
  - terminology/petroleum-engineering
  - terminology/well-design
status: ingested
---

# PRESSURE TRANSIENT TESTING OF U-SHAPED HORIZONTAL WELLS

**Summary**: The thesis develops a semi-analytical model to evaluate the pressure transient behavior of U-shaped horizontal wells, which are designed to mitigate the impact of wellbore friction and non-uniform formation damage. The study demonstrates that this configuration provides more uniform flux distribution and improved production capacity compared to conventional single horizontal wells.

---

## Research Problem

Long horizontal wells often suffer from significant frictional pressure drops and non-uniform flow profiles due to extensive exposure to drilling fluids (formation damage), leading to underutilized sections of the wellbore. Existing models for standard horizontal, dual lateral, and multilateral wells do not adequately address the two-way flow dynamics and specific hydraulic complexities of U-shaped configurations.

## Objectives

- Develop a semi-analytical model to investigate the pressure transient behavior of a U-shaped horizontal well.
- Provide a viable and cost-effective method to offset frictional pressure losses on long horizontal drain-holes and maximize flow capacity.
- Investigate the impact of production rates from both ends (toe and heel) on flux distribution along the horizontal drain-hole.
- Perform standard well test objectives: characterizing rock/well performance, including permeability, productivity index, and potential skin damage.
- Investigate the impact of potential skin damage and its variation along the horizontal drain-hole.
- Integrate wellbore hydraulics (finite conductivity) into the reservoir response calculation.

## Methods

The study employs a semi-analytical approach combining analytical formulations for reservoir response and numerical methods for wellbore hydraulics. The model utilizes Green's functions to represent point source solutions in 1D and 3D environments. A Newton-Raphson iterative procedure is used to solve the non-linear system of equations arising from the flow split at the junction of the U-shaped well. The calculation involves constructing Jacobian matrices for both the left and right wings of the well, incorporating friction factors and Reynolds numbers to account for finite conductivity.

## Data and Materials

The study uses theoretical models for U-shaped wells, simulation data for two PI cases (1000 and 2000 STB/D/psi), and specific well parameters: API 27, Sol. GOR 300 SCF/STB, Gas gravity 0.78, Bo 1.09 RB/STB, Diameter 5 in, Viscosity 1 cp, Pwf 1960 psi, and Lw 4000 ft.

## Key Findings

- U-shaped wells provide a more uniform flux distribution along the entire length of the drain-hole compared to conventional horizontal wells. ([[2014-al-gahtani|Al-Gahtani, 2014, p. 14]])
- The proposed U-shaped configuration is a viable solution for non-contributing sections of long drain-holes caused by friction or damage. ([[2014-al-gahtani|Al-Gahtani, 2014, p. 14]])
- Wellbore pressure drop in horizontal wells can be significant enough to cause premature water/gas breakthrough at the heel and reduce flow from the toe. ([[2014-al-gahtani|Al-Gahtani, 2014, p. 20]])
- page_number_not_applicable_for_this_finding_as_it_is_a_literature_review_point ([[2014-al-gahtani|Al-Gahtani, 2014]])
- The inclusion of wellbore hydraulics in models is critical because the productivity index is not always proportional to well length when friction is significant. ([[2014-al-gahtani|Al-Gahtani, 2014, p. 33]])
- A semi-analytical model for U-shaped wells allows for calculation of flow and pressure profiles under different production rates from both ends (heel and toe). ([[2014-al-gahtani|Al-Gahtani, 2014, p. 13]])
- Standard well-test interpretations using uniform skin assumptions are inaccurate for non-uniform skin distributions in horizontal wells, leading to significant errors in productivity calculations. ([[2014-al-gahtani|Al-Gahtani, 2014, p. 36]])
- The pressure drop caused by skin in a horizontal well depends on the flow regime when the distribution is non-uniform. ([[2014-al-gahtani|Al-Gahtani, 2014, p. 36]])
- A semi-analytical model for U-shaped wells was developed using Green's functions to account for both heel and toe production. ([[2014-al-gahtani|Al-Gahtani, 2014, p. 38]])
- The wellbore hydraulics of horizontal wells are non-linear functions of flow rate, necessitating the use of Newton-Raphson iteration to solve coupled systems. ([[2014-al-gahtani|Al-Gahtani, 2014, p. 51]])
- A dimensionless pressure response for a horizontal well can be expressed using Green's function as shown in equations (13) and (14). ([[2014-al-gahtani|Al-Gahtani, 2014, p. 45]])
- The inclusion of wellbore hydraulics (finite conductivity) causes the dimensionless flux to be lower for longer wells (e.g., 6000 ft vs 2000 ft) due to a higher rate of pressure drop along the section. ([[2014-al-gahtani|Al-Gahtani, 2014, p. 85]])
- The wellbore pressure at the heel (PwD) is higher in shorter wells (2000 ft) compared to longer wells (6000 ft) due to lower productivity in the longer configuration. ([[2014-al-gahtani|Al-Gahtani, 2014, p. 85]])
- The flow split point in U-shaped wells is determined by ensuring continuity of pressure and flux at the junction, where the pressure gradient on both sides must increase toward the points of production. ([[2014-al-gahtani|Al-Gahtani, 2014, p. 79]])
- For finite conductivity cases, the difference between infinite and finite models vanishes when the reservoir response dominates (late time). ([[2014-al-gahtani|Al-Gahtani, 2014, p. 73]])

## Limitations

The model assumes an isothermal, single-phase flow of fluid with constant compressibility and viscosity within a homogeneous but anisotropic reservoir.

## Recommendations and Future Work

- Perform full-field reservoir simulation studies using U-shaped wells as both producers and injectors.
- Extend the existing model to handle multiphase flow.
- Extend the model to predict performance of multi-stage fractured horizontal wells.

## Related Concepts

- [[pressure-transient-analysis]]
- [[mathematical-modeling]]
- [[permeability]]
- [[skin]]
- [[wellbore-hydraulics]]
- [[reservoir-engineering]]
- [[saudi-arabia]]
- [[numerical-analysis]]
- [[finite-conductivity]]
- [[petroleum-engineering]]
- [[petrophysics]]
- [[dimensionless-flux]]
- [[transient-productivity-index]]
- [[reservoir-simulation]]
- [[well-design]]
