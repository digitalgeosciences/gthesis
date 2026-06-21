---
type: source
id: "136144"
title: "Effects of Geometry and Anisotropy on Permeability Measurements from Drill Cuttings"
author: "Sheharyar Mansur"
year: 2009
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Hasan Y. Al-Yousef"
committee_members: []
source_file: "raw/136144 - Effects of Geometry and Anisotropy on Permeability Measurements from Drill Cutti.pdf"
url: "https://eprints.kfupm.edu.sa/136144"
study_area: "Not stated in source"
keywords:
  - drill cuttings
  - permeability measurement
  - pressure diffusion
  - anisotropy
  - geometry
  - geometry effects
  - pulse decay
  - numerical simulation
  - Permeability
  - Darcy Log
techniques:
  - core-analysis
  - matlab
  - finite-difference-modeling
  - mathematical-modeling
  - simulation
tags:
  - degree/ms
  - technique/core-analysis
  - technique/matlab
  - technique/finite-difference-modeling
  - technique/mathematical-modeling
  - technique/simulation
  - theme/petrophysics
  - theme/petroleum-engineering
  - terminology/permeability
  - terminology/anisotropy
  - terminology/petrophysics
  - terminology/petrophysics
status: ingested
---

# Effects of Geometry and Anisotropy on Permeability Measurements from Drill Cuttings

**Summary**: The thesis investigates how the physical shape (geometry) and directional permeability (anisotropy) of drill cuttings affect the accuracy of permeability measurements using the Darcy Log technique. By comparing experimental results from various cut shapes with a finite difference numerical model, it concludes that cutting geometry is a primary driver of measurement error.

---

## Research Problem

Existing direct methods for measuring permeability from drill cuttings often fail to account for the irregular geometry and inherent anisotropy of the cuttings, leading to inaccurate reservoir characterization. This is particularly problematic because most reservoir rocks are sedimentary and naturally exhibit directional differences in flow properties.

## Objectives

- Study the impact of cutting shape on permeability measurements obtained from drill cuttings.
- Study the influence of permeability anisotropy on permeability results obtained from drill cuttings.
- Establish the influence of cutting shape and anisotropy on permeability measurements using Darcy Log equipment.
- Evaluate the accuracy of a numerical model compared to experimental results from Darcy Log equipment.
- Quantify the impact of non-spherical geometry (aspect ratio) on permeability measurements.
- Evaluate the effect of directional anisotropy on permeability interpretation from drill cuttings.

## Methods

The study utilizes a pressure diffusion (pulse decay) technique where a pulse is applied to a chamber containing cuttings. The resulting pressure decline over time is recorded and compared against a numerical model. A finite difference method was used to solve the diffusivity equation for both Cartesian (rectangular cuboid) and spherical geometries. The system was implemented in MATLAB using a ruminant conjugate gradient method to solve the equations simultaneously. Validation was performed by comparing results from different grid sizes (3, 6, 9, 12, 15 nodes) and testing directional consistency where specific axes were set to zero permeability.

## Data and Materials

The study uses a numerical model based on the Egermann [2] approach. Parameters used for validation included: porosity ($\phi$) = 0.2, gas saturation ($S_{gi}$) = 0.2, viscosity ($\mu_o$) = 1000 cp, initial pressure ($P_i$) = 1 atm, and cell pressure ($P_{cell}$) = 10 atm.

## Key Findings

- The study found that the interpretation of permeability is highly sensitive to cutting shape; for a 2 mm cubic cutting, results from different grid sizes (9-15 nodes) showed less than 3% variation in interpreted permeability. ([[2009-mansur|Mansur, 2009, p. 32]])
- The investigation revealed that the interpretation of permeability becomes roughly equivalent to a calculation based on an area-weighted average of individual axial permeabilities for rectangular cuboids. ([[2009-mansur|Mansur, 2009, p. 13]])
- The permeability normal to the largest surface area has the greatest influence on the interpreted permeability in non-spherical cuttings. ([[2009-mansur|Mansur, 2009, p. 13]])
- A three-node system showed a higher degree of variation (up to 9% error) compared to systems with 6 or more nodes, which were found to be sufficient for accurate results. ([[2009-mansur|Mansur, 2009, p. 32]])
- The study confirmed that the pressure diffusion technique is robust enough to distinguish between different directional permeabilities (kx, ky, kz) when they are set to zero in specific axes. ([[2009-mansur|Mansur, 2009, p. 40]])
- For a cutting with E.D. = 2.5 mm and k = 20 mD, an aspect ratio of 1:1 resulted in an interpreted permeability of 25.07 mD (a 25.36% error). ([[2009-mansur|Mansur, 2009, p. 58]])
- Non-spherical geometry leads to a significant overestimation of permeability; for example, a cutting with an aspect ratio of 3 and a true permeability of 50 mD was interpreted as 86.48 mD (a ~73% increase). ([[2009-mansur|Mansur, 2009, p. 72]])
- The percentage error in permeability due to geometry is primarily dependent on the aspect ratio rather than the absolute value of the permeability or the size of the cutting. ([[2009-mansur|Mansur, 2009, p. 74]])
- A reduction in permeability along one axis (anisotropy) results in a larger percentage error when using spherical models compared to an equivalent increase in permeability on that same axis. ([[2009-mansur|Mansur, 2009, p. 87]])
- For multi-axial anisotropy, the interpreted permeability values for anisotropic cuttings are consistently lower than those of isotropic cuttings with the same average permeability. ([[2009-mansur|Mansur, 2009, p. 95]])
- The study found that even when using different cutting sizes (2.5 mm vs 5.0 mm), the percentage error remains consistent, indicating that size-independent geometry is a primary driver of measurement error. ([[2009-mansur|Mansur, 2009, p. 74]])
- The experimental results for Sample A yielded a measured permeability of 55.45 mD compared to a simulated value of 54.74 mD. ([[2009-mansur|Mansur, 2009, p. 101]])
- Sample D, with dimensions 10.6x10.7x24.5 mm, yielded a measured permeability of 72.44 mD and a simulated value of 71.52 mD. ([[2009-mansur|Mansur, 2009, p. 106]])
- The study found that the assumption of a spherical shape during curve fitting leads to higher interpreted permeability values due to increased surface area. ([[2009-mansur|Mansur, 2009, p. 110]])
- A reduction in induced permeability along any axis retards stabilization time and alters the pressure response curve similarly to how an increase would accelerate it. ([[2009-mansur|Mansur, 2009, p. 110]])

## Limitations

The study notes that higher permeability values require smaller time steps in simulations to accurately capture flow rates, which can lead to slight variations in results for high-permeability cases.

## Recommendations and Future Work

- Adopt a flexible grid model for more accurate permeability estimation during curve fitting.
- Use finite element modeling to account for irregular cutting shapes.
- Experimentally test a wider variety of irregular and anisotropic cuttings.

## Related Concepts

- [[core-analysis]]
- [[finite-difference-modeling]]
- [[permeability]]
- [[anisotropy]]
- [[petrophysics]]
- [[mathematical-modeling]]
- [[petroleum-engineering]]
