---
type: source
id: "9940"
title: "Pressure Transient Behavior of a Well in Anisotropic Reservoir Intersected by Multiple Fractures"
author: "Ali Ahmed Al-Hajji"
year: 1996
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Hasan Y. Al-Yousef"
committee_members: []
source_file: "raw/9940 - Pressure transient behavior of a well in anisotropic reservoir intersected by mu.pdf"
url: "https://eprints.kfupm.edu.sa/9940"
study_area: "Not stated in source"
keywords:
  - Pressure Transient Behavior
  - Anisotropic Reservoir
  - Multiple Fractures
  - Finite Conductivity
  - Dimensionless Pressure
  - Dimensionless Time
  - Fracture Ratio
  - Permeability Anisotropy
  - finite conductivity fracture
  - linear flow
  - bilinear flow
  - pseudo-radial flow
techniques:
  - mathematical-geology
  - pressure-transient-analysis
  - finite-difference-modeling
  - mathematical-modeling
  - numerical-model
  - petrophysics
tags:
  - degree/ms
  - technique/pressure-transient-analysis
  - technique/finite-difference-modeling
  - technique/mathematical-modeling
  - technique/numerical-model
  - theme/reservoir-engineering
  - theme/petroleum-engineering
  - terminology/anisotropy
  - terminology/fracture-conductivity
  - terminology/porosity
  - terminology/permeability
  - terminology/petrophysics
status: ingested
---

# Pressure Transient Behavior of a Well in Anisotropic Reservoir Intersected by Multiple Fractures

**Summary**: The thesis investigates the pressure transient behavior of a well in an anisotropic reservoir intersected by multiple fractures using a 2D numerical model. It evaluates how permeability anisotropy and fracture geometry affect performance, concluding that single fractures are often superior to multiple fractures when high permeability anisotropy is present.

---

## Research Problem

Determining the optimal configuration (single vs. multiple) of hydraulic fractures in reservoirs characterized by significant permeability anisotropy, as standard analysis methods may fail to accurately account for these complexities.

## Objectives

- Investigate the performance of a well intersected by multiple fractures of different lengths and various conductivities in anisotropic reservoirs using a numerical reservoir simulator.
- Evaluate the effect of permeability anisotropy on the pressure transient behavior of infinite conductivity multiple fractures.
- Analyze the impact of finite conductivity and multi-fracture configurations on well performance in anisotropic reservoirs.
- Identify conditions where multiple fractures provide superior productivity compared to a single fracture of equivalent total length.
- Determine the start and end points of linear, bilinear, and pseudo-radial flow periods under various conditions.
- Develop a new definition for dimensionless fracture conductivity (Fco) specifically for anisotropic reservoirs.

## Methods

A 2D, single-phase finite difference numerical model was used to simulate pressure transient behavior. The study utilized dimensionless parameters (dimensionless pressure drop and dimensionless time) to compare different cases. Various scenarios were modeled including: 1) Infinite conductivity fractures; 2) Finite conductivity fractures with varying dimensions; 3) Different permeability anisotropy ratios (0.25, 0.75, 1.0, 2.0, 10.0); and 4) Different fracture ratios (0.1, 0.5, 1.0). The model was validated against established solutions by Gringarten et al. (infinite conductivity) and Cinco-Ley et al. (finite conductivity).

## Data and Materials

The study utilized a numerical simulation grid of 30x30 for single fracture cases and specific grids tailored to different fracture ratios (e.g., Table 5.1, 5.2, 5.3). Dimensionless fracture conductivities (F_c) were tested at values of 1000 (infinite) and 0.2, 1.0, and 10 for finite cases.

## Key Findings

- Multiple infinite conductivity fractures are not recommended over a single fracture having the same total length when permeability anisotropy is high; specifically, at k_y/k_x = 0.75, a single fracture performs better by 10% at large times. ([[1996-al-hajji|Al-Hajji, 1996, p. 15]])
- For low values of dimensionless fracture conductivity (F_c < 10), finite conductivity multiple fractures are preferred over a finite conductivity single fracture, providing up to 20% improvement in performance if permeability anisotropy exists. ([[1996-al-hajji|Al-Hajji, 1996, p. 15]])
- For a fracture ratio of 0.1, the performance for various anisotropic ratios can be represented by a single curve for values of dimensionless time (t_D) > 2x10^3. ([[1996-al-hajji|Al-Hajji, 1996, p. 50]])
- When the fracture conductivity is infinite, the formation linear flow period was observed for all various permeability anisotropic ratios considered. ([[1996-al-hajji|Al-Hajji, 1996, p. 15]])
- The start of the linear flow period is influenced by anisotropy; for a ratio of 0.1, the higher the anisotropic ratio, the earlier the start of the linear flow period. ([[1996-al-hajji|Al-Hajji, 1996, p. 63]])
- For infinite conductivity fractures, permeability anisotropy affects the transient pressure behavior only at early times, especially for low anisotropic ratios (ky/kx = 0.25). ([[1996-al-hajji|Al-Hajji, 1996, p. 106]])
- A new definition of dimensionless fracture conductivity (Fco) was introduced to account for anisotropy: Fco = (ky/k_x) * (y/x) * (k_y / k_x). ([[1996-al-hajji|Al-Hajji, 1996, p. 67]])
- For finite conductivity fractures with Fco = 0.2, multiple fractures are preferred over single fractures when the anisotropic ratio is < 1 and fracture ratios are between 0.5 and 1.0. ([[1996-al-hajji|Al-Hajji, 1996, p. 107]])
- For high fracture conductivity (Fco = 10^3), it is not recommended to have multiple fractures regardless of the existence of permeability anisotropy. ([[1996-al-hajji|Al-Hajji, 1996, p. 107]])
- For finite conductivity fractures, both the linear and bilinear flow periods were not observed in most cases, except for Fco = 10^3 where a linear flow period occurred for fracture ratios of 0.5 and 1.0. ([[1996-al-hajji|Al-Hajji, 1996, p. 107]])
- The start of the pseudo-radial flow period is not significantly affected by anisotropy when the two fractures are equal in length (y/x = 1.0). ([[1996-al-hajji|Al-Hajji, 1996, p. 107]])

## Limitations

Not stated in source

## Recommendations and Future Work

For finite conductivity fractures with Fco = 0.2, multiple fractures with ratios of 0.5 to 1.0 are preferred when anisotropy is < 1. For cases where anisotropy > 1, a single fracture is recommended.

## Related Concepts

- [[pressure-transient-analysis]]
- [[finite-difference-modeling]]
- [[anisotropy]]
- [[fracture-conductivity]]
- [[reservoir-engineering]]
- [[saudi-arabia]]
- [[mathematical-modeling]]
- [[porosity]]
- [[permeability]]
- [[petrophysics]]
