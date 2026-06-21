---
type: source
id: "140451"
title: "GEOCHEMICAL MODELING OF CARBONATES ACIDIZING WITH HCL USING TOUGHREACT"
author: "Mohamed Sherif Mustafa Kamal Mahrous"
year: 2017
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Abdullah Sultan"
committee_members: []
source_file: "raw/140451 - GEOCHEMICAL MODELING OF CARBONATES ACIDIZING WITH HCL USING TOUGHREACT.pdf"
url: "https://eprints.kfupm.edu.sa/140451"
study_area: "Not stated in source"
keywords:
  - Carbonate acidizing
  - HCl
  - TOUGHREACT
  - Wormholing
  - Geochemical modeling
  - Multi-phase flow
  - Speciation
  - carbonates acidizing
  - hydrochloric acid
  - aqueous kinetics
  - full speciation
  - acidization curve
  - wormhole dissolution
techniques:
  - toughreact
  - hpc-e1350-cluster
  - matlab
  - aqion
  - phreeqc
tags:
  - degree/ms
  - technique/toughreact
  - technique/matlab
  - technique/phreeqc
  - theme/general-geochemistry
  - theme/reservoir-engineering
  - theme/carbonate-geology
  - terminology/wormhole
  - terminology/general-geochemistry
  - terminology/acidization-curve
  - terminology/aqueous-kinetics
status: ingested
---

# GEOCHEMICAL MODELING OF CARBONATES ACIDIZING WITH HCL USING TOUGHREACT

**Summary**: The thesis investigates the geochemical modeling of carbonate acidizing using HCl by employing the TOUGHREACT simulator. It focuses on accounting for full chemical speciation and the effects of dissolved CO2 to more accurately model wormholing phenomena compared to previous single-phase models.

---

## Research Problem

Previous numerical models of carbonate acidizing often assume all evolved CO2 is dissolved in the acid, failing to account for the impact of dissolved CO2 on rock/acid interactions and the limited solubility of CO2 in acidic solutions. This leads to inaccuracies in predicting wormhole formation and optimal injection parameters.

## Objectives

- To model carbonate acidizing more accurately from a geochemical point of view, using full chemical speciation and thermodynamic data in 2D and 3D linear flow geometries.
- To validate the new model against experimental results.
- To introduce carbonates acidizing as a new application for TOUGHREACT.
- Implement a new application of the TOUGHREACT code to simulate carbonate acidizing with HCl.
- Validate the model against experimental data (Dong & Hill) to ensure accuracy in 3D geometries.
- Compare basic speciation vs. full speciation models to quantify the impact of aqueous kinetics on acidization curves.

## Methods

The study utilizes TOUGHREACT for reactive transport modeling, incorporating both 2D and 3D meshes. A 2D mesh (50x100x1 mm) and a 3D mesh (representing a 1"x4" core) were used to simulate acid injection. The model incorporates aqueous kinetics and full speciation (including CO2 species). Initial conditions for pressure, temperature, and concentration were established using Aqion/PhreeqC. Two types of fluids were modeled: initial water (de-ionized water in equilibrium with calcite) and injection water (15% HCl). The study compares 'Basic Speciation' (H+, Ca2+, HCO3-, H2O) against 'Full Speciation' (including Cl-, OH-, CO2, etc.).

## Data and Materials

The study uses 2D and 3D numerical meshes. Parameters for the 15% HCl solution include a concentration of 4.84 molal/4.42 molar. The model incorporates various physical properties like acid density (from Perry's Chemical Engineers Handbook), diffusion coefficients, and reaction rate constants (based on Schecter and Lund correlations).

## Key Findings

- The full-speciation model captures different dissolution patterns reported experimentally, confirming the complexity of wormholing when accounting for dissolved CO2. ([[2017-mahrous|Mahrous, 2017, p. 12]])
- The study confirms the existence of an optimum injection rate that corresponds to the minimum volume of acid injected to achieve breakthrough. ([[2017-mahrous|Mahrous, 2017, p. 12]])
- Dissolved CO2 and aqueous kinetics significantly affect treatment design parameters, such as optimal injection rates and volumes. ([[2017-mahrous|Mahrous, 2017, p. 12]])
- The assumption that all evolved CO2 is dissolved in the acid may not be true due to limited solubility of CO2 in acidic solutions (e.g., at 60F/10,000 psi, solubility is only ~3.6 mol%). ([[2017-mahrous|Mahrous, 2017, p. 19]])
- Dissolved CO2 changes the hydrogen ion concentration in the solution, which is the primary driving force for the acid/rock reaction. ([[2017-mahrous|Mahrous, 2017, p. 20]])
- The TOUGHREACT V3.0-OMP code successfully replicated results from previous studies (e.g., Xu's CO2 sequestration) with high accuracy, validating its use for carbonate dissolution modeling. ([[2017-mahrous|Mahrous, 2017, p. 48]])
- Large scale heterogeneities like vugs and fractures significantly influence wormhole propagation speed and breakthrough volume compared to chemical interactions alone. ([[2017-mahrous|Mahrous, 2017, p. 30]])
- The maximum difference in pressure between the simplified 1D model and TOUGHREACT was less than 2 psi, representing an error of less than 0.04%. ([[2017-mahrous|Mahrous, 2017, p. 53]])
- Five distinct dissolution patterns were identified based on injection rate: Face Dissolution, Conical Wormhole, Dominant Wormhole, Ramified Wormhole, and Uniform Dissolution. ([[2017-mahrous|Mahrous, 2017, p. 91]])
- The 'Dominant Wormhole' pattern is the most favorable for matrix acidizing as it requires the least amount of acid to achieve breakthrough while preserving rock integrity. ([[2017-mahrous|Mahrous, 2017, p. 93]])
- The acidization curve follows a concave upward shape, where the minimum point identifies the optimum injection rate. ([[2017-mahrous|Mahrous, 2017, p. 95]])
- Full speciation simulations resulted in lower free hydrogen ion concentrations compared to basic speciation because of the formation of aqueous carbonic acid (H2CO3). ([[2017-mahrous|Mahrous, 2017, p. 105]])
- The inclusion of full speciation leads to higher optimum injection rates and larger volumes of acid injected compared to basic speciation models. ([[2017-mahrous|Mahrous, 2017, p. 105]])
- Pressure decline curves show three stages: Initial Plateau (no dissolution), Decline Stage (wormhole competition/dominance), and Final Plateau (breakthrough). ([[2017-mahrous|Mahrous, 2017, p. 107]])

## Limitations

The model overestimates the Pore Volumes of acid injected (PVBT) when compared to experimental data from Dong & Hill, likely due to uncertainties in parameters like reactive surface area or reaction rate constants.

## Recommendations and Future Work

- Perform sensitivity analysis for uncertain input parameters (porosity, permeability, surface area, etc.).
- Extend the study to other acid/rock combinations.
- Include non-isothermal simulations.
- Extend work to radial flow geometry and different aspect ratios.
- Model two-phase systems (acid/CO2) to account for non-dissolved CO2.

## Related Concepts

- [[toughreact]]
- [[wormhole]]
- [[general-geochemistry]]
- [[reservoir-engineering]]
- [[phreeqc]]
- [[acidization-curve]]
- [[aqueous-kinetics]]
- [[carbonate-geology]]
