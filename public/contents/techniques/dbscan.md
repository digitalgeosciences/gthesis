---
type: technique
title: "DBSCAN Clustering"
aliases:
  - "DBSCAN"
  - "density-based spatial clustering of applications with noise"
canonical: true
equipment: "Not stated in source"
software: "Not stated in source"
output: "cluster identification and centroid calculation"
tags:
  - technique/dbscan
  - theme/machine-learning-geoscience
sources:
  - "raw/141782 - FIRST ARRIVAL PICKING USING TWO DIFFERENT METHODS MDPE AND DBSCAN.pdf"
  - "raw/142265 - FIRST ARRIVALS TRAVELTIME PICKING USING UNSUPERVISED MACHINE LEARNING (DBSCAN) A.pdf"
status: active
last_updated: 2026-06-17
---

# DBSCAN Clustering

**Summary**: An unsupervised machine learning algorithm that groups data points based on density connectivity.

---

## How It Is Used in the Thesis Collection

- [[2021-almashhor|AlMashhor, 2021]] applied DBSCAN to identify the number of clusters within a sliding window to determine optimal velocity and first arrival traveltime.

- [[2022-awais|Awais, 2022]] used DBSCAN to provide initial muting windows and final traveltime picking.

## Instruments and Software



- [[2022-awais|Awais, 2022]] used DBSCAN to provide initial muting windows and final traveltime picking.

## Typical Workflow



## Key Results and Findings

- DBSCAN showed an average error of 9% and median error of 6% on synthetic datasets. ([[2021-almashhor|AlMashhor, 2021, p. 58]])

- DBSCAN's performance was improved by using a restricted scanning window, allowing it to identify accurate picks even in noisy environments when combined with SVI. ([[2022-awais|Awais, 2022, p. 33]])

## Methodological Variations Across Sources


## Technical Limitations and Open Questions


## Related Concepts

**Related Techniques**: 

**Applicable to Terminology**: 

**Used in Themes**: 
