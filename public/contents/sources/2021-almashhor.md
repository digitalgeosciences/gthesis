---
type: source
id: "141782"
title: "FIRST ARRIVAL PICKING USING TWO DIFFERENT METHODS: MDPE AND DBSCAN"
author: "Abdullah Al Mashhor"
year: 2021
department: "Geosciences"
degree: "MS"
supervisor: "ABD-UL-LATIF AL-SHUHAIL"
committee_members:
  - "SHERIF MAHMOUD"
  - "Bo Liu"
source_file: "raw/141782 - FIRST ARRIVAL PICKING USING TWO DIFFERENT METHODS MDPE AND DBSCAN.pdf"
url: "https://eprints.kfupm.edu.sa/id/eprint/141782/"
study_area: "northeast Saudi Arabia (synthetic data) and Southeast Texas (real data)"
keywords:
  - first arrival traveltime
  - MDPE method
  - DBSCAN algorithm
  - complex seismic trace
  - Hilbert transform
  - signal processing
  - synthetic data
  - real seismic data
  - seismic trace
  - linear moveout
  - unsupervised machine learning
techniques:
  - hilbert-transform
  - median-smoothing
  - dbscan
  - linear-moveout-lmo
  - signal-processing
  - mathematical-modeling
  - median-filter
  - machine-learning-geoscience
tags:
  - degree/ms
  - location/southeast-texas
  - location/northeast-saudi-arabia
  - technique/dbscan
  - technique/signal-processing
  - technique/mathematical-modeling
  - technique/machine-learning-geoscience
  - theme/geophysics-general
  - theme/seismic-processing
  - terminology/refraction-seismics
  - terminology/static-corrections
status: ingested
---

# FIRST ARRIVAL PICKING USING TWO DIFFERENT METHODS: MDPE AND DBSCAN

**Summary**: The thesis evaluates two automated methods for picking first arrival traveltimes in seismic data: the Maximum Difference between adjacent points of the envelope (MDPE) and the Density-Based Spatial Clustering of Applications with Noise (DBSCAN). The study compares these methods against manual picking and a P-phase picker method using both synthetic and real seismic datasets from southeast Texas.

---

## Research Problem

Accurate first arrival traveltime picking is essential for effective static correction in reflection and refraction data processing, but manual picking is time-consuming. There is a need for automated techniques that can handle different noise levels and wavelets effectively.

## Objectives

- Develop a new method based on the maximum difference between adjacent points of the envelope (MDPE) of a seismic trace to pick first arrival traveltimes.
- Test MDPE method on both synthetic and real datasets.
- Compare MDPE method with P-phase picker method and manual picking to test its picking accuracy.
- Apply linear-moveout (LMO) shift and DBSCAN clustering algorithm on synthetic data to locate first arrival traveltime.
- Implement the DBSCAN algorithm as an unsupervised machine learning technique to identify first arrivals via linear moveout (LMO) stacking.
- Evaluate and compare the advantages and limitations of both methods using synthetic and real seismic data.

## Methods

The MDPE method involves applying a Hilbert transform to create a complex trace, calculating the envelope as the magnitude, converting it to a decibel scale, applying a sliding median filter for smoothing, and identifying the first arrival at the point of maximum difference between adjacent points. The DBSCAN method utilizes a sliding window (10 traces wide, 30 samples long), applies LMO shifts across a range of velocities (200-800 m/s), stacks the results to create a stacked gather, and uses the DBSCAN algorithm (parameters ε=5, MinPts=10) to identify clusters; the centroid of the first cluster is taken as the pick. Both methods were tested on synthetic data and real datasets from Yilmaz's records and Southeast Texas.

## Data and Materials

The study used: 1. A synthetic dataset generated from a 3-layer 2D velocity model (2400m wide, 200m deep) with varying velocities (400 to 2800 m/s). 2. A real 2D land seismic data set from southeast Texas (18 shot gathers, 33 traces per shot, dynamite source). 3. Two specific real shot records (6 and 25) from Yilmaz's worldwide assortment of real seismic data.

## Key Findings

- The MDPE method achieved a picking accuracy of 94% for synthetic shot gather 1 and 75% for shot gather 56 (within 20 ms of manual picks). ([[2021-almashhor|AlMashhor, 2021, p. 53]])
- Adding random Gaussian noise with 0.01 standard deviation to synthetic shot gather 1 reduced MDPE picking accuracy from 94% to 69%. ([[2021-almashhor|AlMashhor, 2021, p. 53]])
- MDPE method showed higher agreement with manual picking than the P-phase picker method on trace 29 of shot 2 (low SNR) in the southeast Texas dataset. ([[2021-almashhor|AlMashhor, 2021, p. 60]])
- DBSCAN algorithm showed an average error of 9% on the synthetic dataset, with a median error of 6%. ([[2021-almashhor|AlMashhor, 2021, p. 58]])
- The MDPE method successfully identified first arrivals in cases where the P-phase picker failed due to noise before the main event. ([[2021-almashhor|AlMashhor, 2021, p. 73]])
- The MDPE method achieved a picking accuracy of more than 83% on Yilmaz's real seismic shot gathers (6 and 25). ([[2021-almashhor|AlMashhor, 2021, p. 89]])
- The MDPE method performed better than the P-phase picker method in most cases for the Southeast Texas dataset. ([[2021-almashhor|AlMashhor, 2021, p. 89]])
- The DBSCAN method showed an error between -1.16 and 7 ms with an average value of 1.98 ms compared to manual picking on synthetic data. ([[2021-almashhor|AlMashhor, 2021, p. 76]])
- The median error for the DBSCAN method on synthetic data was 6% relative to the period of the first arrival traveltime wavelet (10 ms). ([[2021-almashhor|AlMashhor, 2021, p. 76]])
- MDPE is sensitive to noise because it processes traces individually; stacking within a window can improve its performance in low SNR environments. ([[2021-almashhor|AlMashhor, 2021, p. 90]])
- DBSCAN's advantage over supervised learning is that it does not require prior labels or training, making it suitable for both small and large datasets. ([[2021-almashhor|AlMashhor, 2021, p. 91]])
- DBSCAN is less effective on data with coherent noise because SNR decreases after LMO shift and stacking. ([[2021-almashhor|AlMashhor, 2021, p. 92]])

## Limitations

MDPE requires a minimum-phase wavelet; non-minimum phase wavelets require conversion before processing. DBSCAN's performance degrades in the presence of coherent noise. Both methods were primarily tested on first arrivals, not later reflections.

## Recommendations and Future Work

1. Test MDPE on different wavelets (zero or mixed phase) and marine data. 2. Test DBSCAN with various noise levels and on real datasets with different sources. 3. Adapt both methods to pick later arrivals like reflections.

## Related Concepts

- [[dbscan]]
- [[signal-processing]]
- [[refraction-seismics]]
- [[static-corrections]]
- [[seismic-processing]]
- [[southeast-texas]]
- [[northeast-saudi-arabia]]
