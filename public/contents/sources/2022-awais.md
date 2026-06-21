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
study_area: "Ithra field, Dammam, eastern Saudi Arabia; Yilmaz dataset (global locations); Synthetic data."
keywords:
  - first arrivals
  - traveltime picking
  - unsupervised machine learning
  - DBSCAN
  - super-virtual refraction interferometry
  - SNR
  - seismic data processing
  - signal-to-noise ratio
techniques:
  - dbscan
  - svi
  - matlab
  - cross-correlation
  - linear-moveout
  - moving-average
  - super-virtual-refraction-interferometry
  - linear-moveout-correction
  - bandpass-filter
  - python
tags:
  - degree/ms
  - location/ithra-field
  - location/saudi-arabia
  - technique/dbscan
  - technique/super-virtual-refraction-interferometry
  - technique/matlab
  - technique/signal-processing
  - technique/linear-moveout-correction
  - technique/cross-correlation
  - technique/bandpass-filter
  - technique/moving-average
  - theme/seismic-processing
  - theme/machine-learning-geoscience
  - terminology/signal-to-noise-ratio
  - terminology/first-arrivals
status: ingested
---

# FIRST ARRIVALS TRAVELTIME PICKING USING UNSUPERVISED MACHINE LEARNING (DBSCAN) AND SUPER-VIRTUAL REFRACTION INTERFEROMETRY TECHNIQUE

**Summary**: The thesis investigates an automated method for picking first arrival traveltimes in seismic data with low signal-to-noise ratios (SNR). It proposes a hybrid workflow combining the unsupervised machine learning algorithm DBSCAN to provide initial muting windows and the Super-Virtual Refraction Interferometry (SVI) technique to enhance SNR, followed by a final DBSCAN pass for accurate picking.

---

## Research Problem

Standard automatic first break picking methods often fail or produce unreliable results when seismic data has low signal-to-noise ratios (SNR), which is critical for subsequent processing steps like static correction and velocity analysis.

## Objectives

- Enhance the signal-to-noise ratio of the first arrivals using super-virtual refraction interferometry (SVI)
- Accurate first arrival travel time picking using unsupervised machine learning technique (DBSCAN)
- Compare the results before and average after applying SVI and picked by DBSCAN both for synthetic and real datasets
- Develop an automated method for first arrival traveltime picking using unsupervised machine learning (DBSCAN).
- Integrate super-virtual refraction interferometry (SVI) to improve SNR in noisy datasets.
- Evaluate the proposed methodology against manual picks and existing methods like cross-correlation on synthetic and field data.

## Methods

The workflow involves: 1. Preprocessing using a bandpass filter (25-35 Hz pass, 80-100 Hz cut) to remove noise. 2. Applying Linear Moveout (LMO) correction to flatten events and determine optimal velocities. 3. Using DBSCAN clustering on LMO images to identify signal clusters; if 1-3 clusters exist, the data is flagged as signal. 4. Implementing SVI to generate super-virtual traces through cross-correlation and stacking to improve SNR of far-offset first breaks. 5. Applying a second pass of DBSCAN on the SVI output for final picking. 6. Using 'restricted scanning windows' and 'extrapolation' to handle cases where initial DBSCAN picks are missing or inaccurate due to noise.

## Data and Materials

1. Synthetic data: A two-layer 2D velocity model (500 m/s and 1500 m/s) with 121 receivers and 121 shots, including a subset of 2500 samples. 2. Ithra field data: Collected near Ithra Dammam, Saudi Arabia, consisting of 120 shot gathers (each with 24 geophones). 3. Yilmaz dataset: Two specific shot gathers (6 and 25) from a global collection used for benchmarking.

## Key Findings

- For synthetic data, DBSCAN picking before SVI was poor, but after applying SVI, 98.4% of the automatic first arrival traveltimes fell within an allowable error of ±8.33 msec. ([[2022-awais|Awais, 2022, p. 17]])
- For Ithra field data, DBSCAN picking before SVI was poor; after applying SVI, 86.4% of the pickings were within the allowed error of ±8.33 msec. ([[2022-awais|Awais, 2022, p. 17]])
- On Yilmaz shot gathers 6 and 25, the proposed method outperformed other methods by picking 91% and 99% of traveltimes within an allowable error of ±20 msec. ([[2022-awais|Awais, 2022, p. 19]])
- DBSCAN's performance is significantly improved when using a restricted scanning window to mitigate the impact of random noise on clustering. ([[2022-awais|Awais, 2022, p. 33]])
- SVI enhances SNR by a factor of √Ns for virtual refractions and √Nsv for super-virtual refractions. ([[2022-awais|Awais, 2022, p. 42]])
- The proposed methodology achieved an accuracy of approximately 98.4% for all 121 synthetic shot gathers when comparing DBSCAN-SVI results to manual picks. ([[2022-awais|Awais, 2022, p. 58]])
- For Ithra field data, the SVI technique improved the number of accurately picked traces by 54% (shot 25) and 62% (shot 100) compared to manual picks. ([[2022-awais|Awais, 2022, p. 61]])
- DBSCAN alone achieved 91% and 99% accuracy on Yilmaz shot gathers 6 and 25, outperforming several other methods including $\tau$-p transform (88%), mixed Coppens' (46-71%), POCS (58-77%), and MDPE (>85%). ([[2022-awais|Awais, 2022, p. 65]])
- The inclusion of a 'restricted scanning window' for DBSCAN reduced the number of outliers and significantly decreased the computation time required to pick first arrivals. ([[2022-awais|Awais, 2022, p. 54]])
- SVI successfully improved the SNR of far-offset first breaks, making them detectable even when they were not visible in the original raw data. ([[2022-awais|Awais, 2022, p. 76]])

## Limitations

The methodology is currently not applicable to data containing coherent noise and has not been tested on mixed-phase wavelets; it is primarily validated for zero or minimum phase wavelets.

## Recommendations and Future Work

Future research should test the method with mixed-phase wavelets and explore using DBSCAN results as training data for supervised machine learning models to further refine first break picking.

## Related Concepts

- [[dbscan]]
- [[super-virtual-refraction-interferometry]]
- [[signal-to-noise-ratio]]
- [[first-arrivals]]
- [[ithra-field]]
- [[seismic-processing]]
- [[machine-learning-geoscience]]
- [[linear-moveout-correction]]
