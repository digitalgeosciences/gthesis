---
type: technique
title: "Dbscan"
aliases:
  - "DBSCAN"
  - "density-based spatial clustering of applications with noise"
canonical: true
equipment: "Not stated in source"
software: "Not stated in source"
output: "clusters of data points based on density connectivity"
tags:
  - technique/dbscan
  - theme/machine-learning-geoscience
sources:
  - "raw/141782 - FIRST ARRIVAL PICKING USING TWO DIFFERENT METHODS MDPE AND DBSCAN.pdf"
  - "raw/142265 - FIRST ARRIVALS TRAVELTIME PICKING USING UNSUPERVISED MACHINE LEARNING (DBSCAN) A.pdf"
status: active
last_updated: 2026-06-10
---

# Dbscan

**Summary**: An unsupervised machine learning algorithm that groups data points based on density connectivity.

---

## How It Is Used in the Thesis Collection

- [[2021-almashhor|AlMashhor, 2021]] applied DBSCAN clustering to identify the optimum apparent velocity and first arrival traveltime from stacked gathers.

- [[2022-awais|Awais, 2022]] used DBSCAN to provide an initial guess for muting windows and as a final picking step in low SNR seismic data.

## Instruments and Software



- [[2022-awais|Awais, 2022]] used DBSCAN to provide an initial guess for muting windows and as a final picking step in low SNR seismic data.

## Typical Workflow



## Key Results and Findings

- DBSCAN is preferred in many cases because it does not require a training data set compared to supervised methods like CNN. ([[2021-almashhor|AlMashhor, 2021, p. 34]])

- DBSCAN allows for the identification of arbitrary sized and shaped clusters (circular, rectangular, etc.) and distinguishes noise from signal. ([[2022-awais|Awais, 2022, p. 38]])

## Methodological Variations Across Sources


## Technical Limitations and Open Questions


## Related Concepts

**Related Techniques**: 

**Applicable to Terminology**: 

**Used in Themes**: 
