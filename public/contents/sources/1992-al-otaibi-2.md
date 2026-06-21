---
type: source
id: "2607"
title: "Factors Affecting Pseudo Relative Permeability Curves"
author: "Saud Sultan Al-Otaibi"
year: 1992
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Abdulaziz A. Al-Majed"
committee_members: []
source_file: "raw/2607 - Factors Affecting Pseudo Relative Permeability Curves.pdf"
url: "https://eprints.kfupm.edu.sa/2607"
study_area: "Saudi Arabia (typical sandstone reservoir)"
keywords:
  - pseudo relative permeability
  - reservoir simulation
  - cross-section model
  - Kyte and Berry method
  - petrophysics
  - PVT data
  - layer thickness
  - dip angle
  - absolute permeability
techniques:
  - reservoir-simulation
  - mathematical-modeling
tags:
  - degree/ms
  - location/saudi-arabia
  - technique/reservoir-simulation
  - technique/mathematical-modeling
  - theme/petrophysics
  - theme/reservoir-engineering
  - terminology/porosity
  - terminology/permeability
  - terminology/petrophysics
  - terminology/petrophysics
status: ingested
---

# Factors Affecting Pseudo Relative Permeability Curves

**Summary**: The thesis investigates the impact of various reservoir parameters, including PVT data, layer thickness, dip angle, and absolute permeability, on the generation of pseudo relative permeability curves in reservoir simulation. It concludes that while factors like vertical permeability ratio and production rates have negligible effects, dip angle and layer thickness significantly influence the resulting curves.

---

## Research Problem

The accuracy of pseudo relative permeability curves in reservoir simulation is affected by various geological and fluid properties (PVT data, layer thickness, dip angle, absolute permeability), which can lead to significant differences in water saturation front predictions when transitioning from fine-gridded cross-sections to coarse-grid models.

## Objectives

- Identify the factors affecting pseudo relative permeability curves in a typical Saudi sandstone reservoir.
- Evaluate the impact of PVT properties, Kv/Kx ratio, layer thickness, production rate, and dip angle on these curves.
- To validate the use of pseudo relative permeability curves in coarse grid models compared to fine grid cross-sectional models.
- To evaluate the effect of PVT data on pseudo relative permeability curves under different reservoir geometries.
- To determine the impact of layer thickness and dip angle on the accuracy of pseudo relative permeability curves.
- To assess the influence of absolute permeability and vertical-to-horizontal permeability ratios on these curves.

## Methods

The study utilized a vertical fine-gridded cross-section model (3000 cells: 100x30) to simulate fluid displacement. The Kyte and Berry method was employed to calculate dynamic pseudo relative permeability curves from these cross-sections. A total of 32 different cross-section models were analyzed, varying parameters such as PVT data (two types), Kv/Kx ratios (0.3 and 0.7), layer thicknesses (50 ft and 110 ft), production rates (standard and 1.5x), and dip angles (1° and 4°). Results were validated by comparing a coarse-grid 2D model using pseudo curves against a fine-grid 2D model using rock relative permeability.

## Data and Materials

The study used two sets of PVT data, multiple layer thickness configurations (50 ft and 110 ft), various dip angles (1° and 4°), and different absolute permeability values (1 and 5 Darcy). Comparison was made between coarse 2-D models and fine grid cross-sectional models.

## Key Findings

- The reservoir dip angle has the most significant influence on pseudo relative permeability curves among all studied factors. ([[1992-al-otaibi|Al-Otaibi, 1992, p. 86]])
- PVT properties have a minimal effect on pseudo relative permeability curves when thickness is large (110 ft) and dip angle is low (1°). ([[1992-al-otaibi|Al-Otaibi, 1992, p. 59]])
- The maximum impact of PVT properties is observed for smaller thicknesses (50 ft) and higher reservoir dip angles (4°). ([[1992-al-otaibi|Al-Otaibi, 1992, p. 59]])
- The ratio of vertical to horizontal permeability (Kv/Kx) did not show a significant effect on the generated pseudo relative permeability curves. ([[1992-al-otaibi|Al-Otaibi, 1992, p. 64]])
- Layer thickness consistently affects the pseudo relative permeability curves, with the most significant impact occurring at the combination of smallest thickness (50 ft) and highest dip angle (4°). ([[1992-al-otaibi|Al-Otaibi, 1992, p. 73]])
- Production rates had no effect on almost all generated pseudo relative permeability curves except for the case with the smallest layer thickness (50 ft) and the highest dip angle (4°). ([[1992-al-otaibi|Al-Otaibi, 1992, p. 86]])
- Higher reservoir dip angles result in better sweep efficiency because the tilt of the water front is lower. ([[1992-al-otaibi|Al-Otaibi, 1992, p. 86]])
- PVT data has a significant effect on pseudo relative permeability curves only when the reservoir dip angle is high and layer thickness is low; for small dip angles, the effect is minimal. ([[1992-al-otaibi|Al-Otaibi, 1992, p. 107]])
- The vertical to horizontal permeability ratio (Kv/Kh) has no effect on pseudo relative permeability curves regardless of reservoir dip angle or layer thickness. ([[1992-al-otaibi|Al-Otaibi, 1992, p. 107]])
- Smaller layer thicknesses result in better sweep and higher oil relative permeability values at the same water saturation reading. ([[1992-al-otaibi|Al-Otaibi, 1992, p. 108]])
- The most pronounced effect on pseudo relative permeability curves is caused by the reservoir dip angle; higher dip angles lead to better sweep and a shift of the intersection point toward higher water saturation values. ([[1992-al-otaibi|Al-Otaibi, 1992, p. 108]])
- Absolute permeability only affects pseudo relative permeability curves in cases where the dip angle is high; for low dip angles, the effect is negligible. ([[1992-al-otaibi|Al-Otaibi, 1992, p. 108]])
- No effect of production rate on pseudo relative permeability curves was observed for the range of data used. ([[1992-al-otaibi|Al-Otaibi, 1992, p. 108]])
- Using pseudo relative permeability in coarse grid models successfully reproduces water saturation movement without requiring a fine-gridded cross-sectional model. ([[1992-al-otaibi|Al-Otaibi, 1992, p. 105]])
- When rock relative permeability is used instead of pseudo relative permeability in coarse models, the water front moves faster, leading to significantly different results. ([[1992-al-otaibi|Al-Otaibi, 1992, p. 105]])

## Limitations

The study notes that the Kyte and Berry method assumes a specific set of conditions for calculating dynamic pseudo permeability, and results are most accurate when these assumptions (like vertical equilibrium or specific flow regimes) are met.

## Recommendations and Future Work

- For reservoirs where PVT data changes with depth, a separate set of pseudo relative permeability curves is needed.
- For reservoir simulation where layer thickness changes, pseudo relative permeability curves for each layer thickness are required.
- For reservoirs where absolute permeability changes, pseudo relative permeability curves should be generated for areas where the reservoir dip angle changes.

## Related Concepts

- [[reservoir-simulation]]
- [[mathematical-modeling]]
- [[porosity]]
- [[permeability]]
- [[petrophysics]]
- [[saudi-arabia]]
- [[petroleum-engineering]]
