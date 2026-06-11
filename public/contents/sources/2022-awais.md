---
type: source
id: "142265"
title: "FIRST ARRIVALS TRAVELTIME PICKING USING UNSUPERVISED MACHINE LEARNING (DBSCAN) AND SUPER-VIRTUAL REFRACTION INTERFEROMETRY TECHNIQUE"
author: "Muhammad Awais"
year: 2022
department: "Geosciences"
degree: "MS"
supervisor: "Mahmoud Hanafy Sherif"
committee_members:
  - "Abdulrahman Alshuhail Abdullatif"
  - "Bin Waheed Umair"
source_file: "raw/142265 - FIRST ARRIVALS TRAVELTIME PICKING USING UNSUPERVISED MACHINE LEARNING (DBSCAN) A.pdf"
url: "https://eprints.kfupm.edu.sa/id/eprint/142265/"
study_area: "Ithra field, Dammam, eastern Saudi Arabia; Yilmaz dataset (Far East and Alberta)"
keywords:
  - first break picking
  - traveltime
  - unsupervised machine learning
  - DBSCAN
  - super-virtual refraction interferometry
  - SVI
  - signal-to-noise ratio
  - seismic data processing
  - first arrivals
  - traveltime picking
  - SNR
techniques:
  - dbscan
  - svi
  - matlab
  - cross-correlation
  - hilbert-transform
  - fourier-transform
  - fractal-dimension-analysis
  - lmo
  - deconvolution
  - bandpass-filter
  - moving-average
  - super-virtual-refraction-interferometry
  - lmo-image
  - tau-p-transform
  - pocs
  - mdpe
tags:
  - degree/ms
  - location/dammam-area
  - location/saudi-arabia
  - location/ithra-field
  - location/yaz-field
  - technique/machine-learning-geoscience
  - technique/seismic-processing
  - technique/velocity-analysis
  - technique/dbscan
  - technique/super-virtual-refraction-interferometry
  - technique/well-log-analysis
  - technique/signal-processing
  - technique/refraction-seismics
  - theme/geophysics-general
  - theme/seismology
  - theme/machine-learning-geoscience
  - theme/applied-geophysics
  - theme/signal-processing
  - terminology/first-arrivals
  - terminology/signal-to-noise-ratio
status: ingested
---

# FIRST ARRIVALS TRAVELTIME PICKING USING UNSUPERVISED MACHINE LEARNING (DBSCAN) AND SUPER-VIRTUAL REFRACTION INTERFEROMETRY TECHNIQUE

**Summary**: The thesis investigates automated first break traveltime picking in seismic data using a combination of the DBSCAN unsupervised machine learning algorithm and super-virtual refraction interferometry (SVI). The study demonstrates that while DBSCAN performs well on clean data, its integration with SVI significantly improves picking accuracy in low signal-to-noise ratio (SNR) environments, such as those found in the Ithra field.

---

## Research Problem

Accurate first break picking is critical for seismic processing, but traditional and automated methods often fail or produce unreliable results when the signal--to-noise ratio (SNR) is low. The study addresses this by combining DBSCAN's clustering capabilities with SVI's ability to enhance SNR in noisy data.

## Objectives

- Develop an automated method for first arrival traveltime picking using unsupervised machine learning (DBSCAN).
- Integrate Super-Virtual Refraction Interferometry (SVI) to improve the SNR of raw data before applying DBSCAN.
- Evaluate the proposed methodology on synthetic and field datasets (Ithra and Yilmaz fields).
- Enhance the signal-to-noise ratio of the first arrivals using super-virtual refraction interferometry (SVI)
- Accurate first arrival travel time picking using unsupervised machine learning technique (DBSCAN)
- Compare the results before and after applying SVI and picked by DBSCAN both for synthetic and real datasets
- Improve the signal-to-noise ratio (SNR) of far-offset arrivals using Super-Virtual Refraction Interferometry (SVI).
- Integrate DBSCAN and SVI to provide a robust solution for first break picking in noisy seismic data.
- Develop an automated first arrival traveltime picking method using unsupervised machine learning (DBSCAN).
- Integrate super-virtual refraction interferometry (SVI) to improve the signal-to-noise ratio of first breaks before applying DBSCAN.
- Evaluate the performance of the proposed hybrid method against manual pickings and other established methods like cross-correlation.
- Evaluate the performance of the DBSCAN unsupervised machine learning algorithm for automatic first arrival traveltime picking.
- Integrate DBSCAN with super-virtual refraction interferometry (SVI) to improve results in low SNR environments.
- Compare the proposed methodology against existing methods like τ-p transform, mixed Coppens, POCS, and MDPE.
- Evaluate the accuracy of DBSCAN in picking first arrival traveltimes.
- Enhance the accuracy of DBSCAN's first arrival traveltime picking using super-virtual refraction interferometry.

## Methods

The methodology involves a multi-step workflow: 1. Preprocessing including clipping to enhance weak amplitudes. 2. Selecting a sliding window of traces and samples. 3. Applying Linear Moveout (LMO) at various velocities and stacking the results. 4. Using DBSCAN clustering on the stacked LMO images to identify signal clusters vs noise. 5. Using the identified cluster centers as initial picks to define muting windows for SVI. 6. Applying SVI (including optional deconvolution) to enhance SNR of far-offset arrivals. 7. Final automatic picking using DBSCAN on the enhanced data. 8. Post-processing with moving average smoothing and constant shifts.

## Data and Materials

1. Synthetic dataset: 2D velocity model (600m x 80m) with two layers (500 m/s and 1500 m/s), 121 receivers, 121 shots, 30 Hz Ricker wavelet. 2. Ithra field data: Dammam, Saudi Arabia; 600m profile, 120 geophones, 120 shot gathers. 3. Yilmaz dataset: Two specific shot gathers (6 and 25) from global locations (Far East and Alberta).

## Key Findings

- For synthetic data, the accuracy of DBSCAN-only picking was poor before SVI, but after applying SVI, 98.4% of pickings fell within an allowable error of ±8.33 msec. ([[2022-awais|Awais, 2022, p. 17]])
- For Ithra field data, DBSCAN-only picking was poor before SVI; after applying SVI, 86.4% of pickings were within the allowable error of ±8.33 msec. ([[2022-awais|Awais, 2022, p. 17]])
- On Yilmaz shot gather 6, the proposed method outperformed other methods by picking 91% of traveltimes within an allowable error of ±20 msec. ([[2022-awais|Awais, 2022, p. 17]])
- On Yilmaz shot gather 25, the proposed method picked 99% of traveltimes within an allowable error of ±20 msec. ([[2022-awais|Awais, 2022, p. 17]])
- DBSCAN-only picking results were poor when using a restricted scanning window in high-level random noise without SVI (Figure 7.3). ([[2022-awais|Awais, 2022, p. 13]])
- DBSCAN is an unsupervised machine learning method that identifies outliers as noise, unlike k-mean or mean-shift algorithms. ([[2022-awais|Awais, 2022, p. 38]])
- The MDPE method (based on Hilbert transform) achieved over 88% accuracy on synthetic gathers and over 85% on real seismic data with high SNR. ([[2022-awais|Awais, 2022, p. 32]])
- SVI is a robust and effective SNR enhancer for far-offset head waves, successfully applied to both land and marine surveys. ([[2022-awais|Awais, 2022, p. 34]])
- CNN-based methods are computationally expensive, time-consuming, and require intensive data labeling compared to unsupervised methods like DBSCAN. ([[2022-awais|Awais, 2022, p. 31]])
- DBSCAN successfully identified two clusters in the test data with epsilon=1 and minPts=10, where blue/magenta points were clusters and red points were noise. ([[2022-awais|Awais, 2022, p. 40]])
- SVI improves SNR of far-offset arrivals by a factor of √Ns (post-critical source positions) and √Nsv (coincident receiver positions). ([[2022-awais|Awais, 2022, p. 43]])
- DBSCAN's performance is significantly improved when the search window is restricted to the center/bottom of the window, where first arrivals typically follow a time-offset slope. ([[2022-awais|Awais, 2022, p. 50]])
- LMO stacking at multiple velocities allows for the identification of signal vs. noise; signals form clear clusters in the LMO image while noise results in dispersed values. ([[2022-awais|Awais, 2022, p. 52]])
- The clipping method can effectively increase the amplitudes of weak first arrivals by a factor determined by the ratio of high to low values (e.g., multiplying by 50 and dividing by 5). ([[2022-awais|Awais, 2022, p. 63]])
- For synthetic data with high noise (50%), the initial DBSCAN picking was inaccurate due to low SNR, but applying SVI improved accuracy such that all picks fell within the ±8.33 msec threshold. ([[2022-awais|Awais, 2022, p. 56]])

## Limitations

Existing automatic methods (e.g., those based on Fourier transforms or fractal dimensions) struggle in low SNR environments; specifically, the MDPE method requires more testing with various datasets to understand its limitations.

## Recommendations and Future Work

Future research should test the method with mixed-phase wavelets and explore using DBSCAN to generate training datasets for supervised machine learning models.

## Related Concepts

- [[machine-learning]]
- [[seismic-processing]]
- [[first-arrivals]]
- [[signal-to-noise-ratio]]
- [[seismology]]
- [[saudi-arabia]]
- [[dbscan]]
- [[super-virtual-refraction-interferometry]]
- [[machine-learning-geoscience]]
- [[velocity-analysis]]
- [[dammam-area]]
- [[ithra-field]]
- [[refraction-seismics]]
- [[signal-processing]]
- [[ithar-field]]
- [[geophysics-general]]
- [[applied-geophysics]]
