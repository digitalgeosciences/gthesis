---
type: technique
title: "Velocity Analysis"
aliases:
  - "stacking velocity analysis"
  - "NMO velocity"
canonical: true
equipment: "Not stated in source"
software: "Not stated in source"
output: "stacking velocity profiles and volumes"
tags:
  - technique/velocity-analysis
  - theme/velocity-modeling
sources:
  - "raw/136319 - An Innovative Model-based Velocity Integration Procedure with an Application in .pdf"
  - "raw/140641 - RELATION BETWEEN OFFSET AND VELOCITY DETERMINATION - APPLICATION ON A SYNTHETIC .pdf"
  - "raw/141744 - LINEAR SEMBLANCE VELOCITY ANALYSIS IN THE T2–X2 DOMAIN CONCEPT AND APPLICATIONS .pdf"
  - "raw/142466 - ESTIMATION OF WATER SATURATION IN A SAND DUNE FROM DIVING DIRECT SEISMIC P-WAVES.pdf"
  - "raw/142484 - Velocity Estimation from Surface-Consistent Statics.pdf"
  - "raw/142721 - INVESTIGATION OF TTI ANISOTROPY OF P-WAVE VELOCITIES IN SAND DUNES IN EASTERN SA.pdf"
  - "raw/143131 - Effect of Offset on Time to Depth Conversion.pdf"
status: active
last_updated: 2026-06-20
---

# Velocity Analysis

**Summary**: The process of determining the speed at which seismic waves travel through subsurface layers to correct for moveout.

---

## How It Is Used in the Thesis Collection

- [[2010-al-moqbel|Al-Moqbel, 2010]] used velocity-analysis to determine initial stacking velocities from 2D and 3D survey data.

- [[2018-abdulrahman|Abdulrahman, 2018]] performed velocity analysis using the suvelan script in Seismic Unix to determine stacking velocities.

- [[2020-alzahrani|Alzahrani, 2020]] used velocity-analysis to determine stacking velocities in both t-x and t2-x2 domains.

- [[2023-alsahwan|AlSahwan, 2023]] used velocity-analysis to establish a VP(SW) relationship for sand dunes.

- [[2023-muhammad|Muhammad, 2023]] used velocity-analysis to determine NMO velocities from both synthetic and real datasets.

- [[2024-makki|Makki, 2024]] used velocity-analysis to determine P-wave propagation speeds in the sand dune.

- [[2024-felemban|Felemban, 2024]] used velocity analysis via the semblance method in Seismic Unix to pick velocities for three formations at varying offset limits.

## Instruments and Software



- [[2018-abdulrahman|Abdulrahman, 2018]] performed velocity analysis using the suvelan script in Seismic Unix to determine stacking velocities.

- [[2020-alzahrani|Alzahrani, 2020]] used velocity-analysis to determine stacking velocities in both t-x and t2-x2 domains.

- [[2023-alsahwan|AlSahwan, 2023]] used velocity-analysis to establish a VP(SW) relationship for sand dunes.

- [[2023-muhammad|Muhammad, 2023]] used velocity-analysis to determine NMO velocities from both synthetic and real datasets.

- [[2024-makki|Makki, 2024]] used velocity-analysis to determine P-wave propagation speeds in the sand dune.

- [[2024-felemban|Felemban, 2024]] used velocity analysis via the semblance method in Seismic Unix to pick velocities for three formations at varying offset limits.

## Typical Workflow



## Key Results and Findings

- Integration of multiple data sources into a common model provides better control over velocity values across large areas. ([[2010-al-moqbel|Al-Moqbel, 2010, p. 33]])

- A velocity spectrum was used to pick values at high semblance points, resulting in average errors of 5.116% (long) and 4.968% (short). ([[2018-abdulrahman|Abdulrahman, 2018, p. 39]])

- Linear semblance provided improved vertical resolution compared with conventional semblance but with weaker semblance energy. ([[2020-alzahrani|Alzahrani, 2020, p. 49]])

- The P-wave velocity (VP) in unconsolidated sediment shows a slight decrease with water saturation until full saturation, where it jumps significantly. ([[2023-alsahwan|AlSahwan, 2023, p. 29]])

- The method successfully estimated correct NMO velocities even when starting from incorrect initial values. ([[2023-muhammad|Muhammad, 2023, p. 16]])

- Calculated P-wave velocities showed sinusoidal behavior with maximum values (approx. 285 m/s) along the azimuth parallel to the slip face. ([[2024-makki|Makki, 2024, p. 63]])

- A velocity increment of 50 m/s was found sufficient for picking, as values below 50 m/s did not significantly improve signal sharpness. ([[2024-felemban|Felemban, 2024, p. 36]])

## Methodological Variations Across Sources


## Technical Limitations and Open Questions


## Related Concepts

**Related Techniques**: 

**Applicable to Terminology**: 

**Used in Themes**: 
