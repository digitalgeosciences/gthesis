---
type: source
id: "9939"
title: "A Parametric study of water-coning in horizontal wells"
author: "Ali Abbas Hakim"
year: 1994
department: "Petroleum Engineering"
degree: "PhD"
supervisor: "Dr. Habib Menouar"
committee_members: []
source_file: "raw/9939 - A Parametric study of water-coning in horizontal wells.pdf"
url: "https://eprints.kfupm.edu.sa/9939"
study_area: "Wafra Ratawi Oolite reservoir (based on published literature)"
keywords:
  - water-coning
  - horizontal wells
  - critical rate
  - reservoir simulation
  - anisotropy ratio
  - well length
  - mobility ratio
  - reservoir anisotropy
  - dimensionless parameters
techniques:
  - reservoir-simulation
  - petrophysics
  - mathematical-modeling
tags:
  - degree/phd
  - location/saudi-arabia
  - technique/reservoir-simulation
  - technique/petrophysics
  - technique/mathematical-modeling
  - theme/reservoir-engineering
  - theme/petroleum-engineering
  - terminology/critical-rate
  - terminology/water-coning
  - terminology/anisotropy-ratio
  - terminology/anisotropy
  - terminology/mobility-ratio
  - terminology/petrophysics
status: ingested
---

# A Parametric study of water-coning in horizontal wells

**Summary**: The thesis investigates water-coning behavior in horizontal wells by performing a parametric study on the effects of well length, anisotropy ratio, reservoir geometry, and mobility ratio. Using the ECLIPSE simulator, the author proposes a new 'Method of Saturation Function' to determine critical rates based on tracking the water/oil interface.

---

## Research Problem

The determination of accurate critical rates for horizontal wells is complicated by various factors such as anisotropy, well length, and mobility ratios. Existing analytical models often fail to account for complex reservoir geometries or specific fluid properties, necessitating a more robust method derived from numerical simulation.

## Objectives

- Develop a method to determine the critical rate based on the observation of the water/oil interface (Method of Saturation Function).
- Evaluate the impact of well length on water-coning behavior in horizontal wells.
- Analyze the effect of anisotropy ratio on critical rates for both vertical and horizontal wells.
- Investigate the influence of reservoir geometry (area and shape) on water coning behavior.
- Evaluate the effect of well length on the critical rate in both stratified and homogeneous reservoirs.
- Analyze the impact of reservoir anisotropy (k_h/k_v) on critical rates for various well positions.

## Methods

The study utilizes numerical simulation via the ECLIPSE simulator to model a prototype reservoir. The 'Method of Saturation Function' (Sf) is used to identify critical rates by tracking water saturation at two specific points in vertical planes perpendicular to the horizontal well. This method calculates a dimensionless saturation function based on the difference in water saturation between these points, the initial oil zone thickness, and the reservoir length. A series of parametric runs are conducted to vary well length (e.g., 500ft, 1000ft, 2000ft, 3000ft), anisotropy ratios (ranging from 0.01 to 1.0), mobility ratios, and reservoir geometries.

## Data and Materials

The study uses a prototype reservoir model with specific parameters: a stratified reservoir system, various well lengths (500, 1000, 2000, 3000 ft), anisotropy ratios (k_y/k_x), and mobility ratios. Data includes production schedules, PVT data, and relative permeability curves for both oil and gas.

## Key Findings

- A horizontal well of 1500ft length produces the same amount of oil as two vertical wells in a typical sector pattern, while a 2000ft well performs better than three vertical wells (Page 36). ([[1994-hakim|Hakim, 1994, p. 36]])
- A 500ft horizontal well recovers 18% more oil than a vertical well; increasing length to 1500ft increases incremental recovery to 33%. Beyond 1500ft, benefits diminish as the non-penetrated section of the reservoir decreases (Page 38). ([[1994-hakim|Hakim, 1994, p. 38]])
- For a 300ft bottom water drive reservoir, increasing well length from 200ft to 4000ft increases breakthrough time from 5 days to 229 days (Page 39). ([[1994-hakim|Hakim, 1994, p. 39]])
- The critical rate for horizontal wells is found to be directly proportional to the horizontal permeability (k_x) and inversely proportional to the square root of the vertical permeability (k_y) (Page 60). ([[1994-hakim|Hakim, 1994, p. 60]])
- In cases with high anisotropy, a higher k_y results in later water breakthrough, but it also reduces well productivity (Page 57). ([[1994-hakim|Hakim, 1994, p. 57]])
- The critical rate is found to be insensitive to vertical permeability (k_y) but directly proportional to horizontal permeability (k_x) in certain models (Page 58). ([[1994-hakim|Hakim, 1994, p. 58]])
- For a 300ft bottom water drive reservoir, the critical rate is only significantly affected by production rates when dealing with low viscosity oil and limited aquifers (Page 47). ([[1994-hakim|Hakim, 1994, p. 47]])
- The critical rate for the longest horizontal well (3000') was found to be as high as 8 times the critical rate for a vertical well in a stratified reservoir. ([[1994-hakim|Hakim, 1994, p. 69]])
- In homogeneous reservoirs, the critical rate for a 3000' horizontal well can be up to 27 times higher than that of a vertical well at the same position. ([[1994-hakim|Hakim, 1994, p. 72]])
- For horizontal wells, the critical rate is only an increasing function of the anisotropy ratio for values between 0.5 and 1.0; for lower ratios (0.01 to 0.1), it is a strongly decreasing function of anisotropy. ([[1994-hakim|Hakim, 1994, p. 150]])
- The critical rate for vertical wells behaves oppositely to horizontal wells regarding anisotropy, showing a decrease as the anisotropy ratio increases. ([[1994-hakim|Hakim, 1994, p. 150]])
- Increasing the reservoir area (from 2250x4500 to 4500x4500 sq.ft.) results in an increase in the critical rate for horizontal wells. ([[1994-hakim|Hakim, 1994, p. 97]])
- For horizontal wells, as the mobility ratio (M_p) increases from 0.2 to 1.0, the critical rate rises; however, for M_p > 1, it decreases regardless of well position. ([[1994-hakim|Hakim, 1994, p. 134]])
- The study successfully validated the simulation model by matching both reservoir pressure and cumulative production against field data. ([[1994-hakim|Hakim, 1994, p. 61]])

## Limitations

The 'Method of Saturation Function' is noted to be most accurate for mobility ratios less than 5 or where viscous forces are not dominant. Additionally, the study notes that some analytical models are only valid for specific dimensions (e.g., when well length is more than one-quarter of the drainage volume).

## Recommendations and Future Work

The thesis suggests using numerical simulation to account for complex factors like permeability variations, relative permeability, and capillary pressure which are often ignored in simpler analytical models.

## Related Concepts

- [[reservoir-simulation]]
- [[critical-rate]]
- [[water-coning]]
- [[anisotropy-ratio]]
- [[reservoir-engineering]]
- [[anisotropy]]
- [[mobility-ratio]]
- [[petrophysics]]
- [[petroleum-engineering]]
