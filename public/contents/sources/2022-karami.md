---
type: source
id: "142041"
title: "Geostatistical Modelling of Groundwater Storage Variations Using InSAR Remote Sensing Data"
author: "Ghozian Karami"
year: 2022
department: "Geosciences"
degree: "MS"
supervisor: "Mohammad Hussain Makkawi"
committee_members:
  - "Hassan Eltom"
  - "Mohammed Alfarhan"
source_file: "raw/142041 - Geostatistical Modelling Of Groundwater Storage Variations Using Insar Remote Se.pdf"
url: "https://eprints.kfupm.edu.sa/id/eprint/142041/"
study_area: "Cultivated area in Saudi Arabia (specifically mentioned as Eastern Province in related publications)"
keywords:
  - Groundwater storage variation
  - InSAR
  - GRACE satellite
  - Geostatistics
  - Remote sensing
  - Saudi Arabia
  - GRACE
  - groundwater storage variations
  - hydraulic head
  - Groundwater storage
techniques:
  - insar
  - grace
  - gldas
  - snap
  - kriging
  - geostatistics
  - variogram-analysis
  - sequential-gaussian-simulation
  - remote-sensing
  - gis
  - petrel
  - matlab
  - sieve-analysis
  - well-log-analysis
  - r-programming
  - snaphu
  - d-insar
  - normal-score-transform
  - r
  - bilinear-interpolation
  - k-means-clustering
tags:
  - degree/ms
  - formation/quaternary-sediments
  - location/al-jawf-basin
  - location/saudi-arabia
  - location/eastern-province
  - technique/in-sar
  - technique/geostatistics
  - technique/variogram-analysis
  - technique/sequential-gaussian-simulation
  - technique/remote-sensing
  - technique/gis
  - technique/kriging
  - theme/hydrogeology
  - theme/groundwater-modeling
  - theme/remote-sensing
  - theme/water-resources-management
  - theme/environmental-geoscience
  - terminology/groundwater-flow
  - terminology/groundwater-modeling
  - terminology/aquifer-characterization
  - terminology/variogram-analysis
status: ingested
---

# Geostatistical Modelling of Groundwater Storage Variations Using InSAR Remote Sensing Data

**Summary**: The thesis investigates the use of InSAR and GRACE satellite data to estimate groundwater storage variations in a cultivated area in Saudi Arabia where in-situ data is limited. It employs geostatistical modeling (kriging and sequential Gaussian simulation) to upscale high-resolution InSAR data for comparison with lower-resolution GRACE data, finding a moderate positive correlation between the two models.

---

## Research Problem

Limited in-situ groundwater data in Saudi Arabia makes it difficult for water planners to monitor groundwater abstraction and storage variations, especially in cultivated areas where remote sensing can provide a large-scale overview.

## Objectives

- Monitor the groundwater-related subsidence in the agricultural areas of the selected study area.
- Analyze the spatial behavior of the ground surface displacement data and generate the most appropriate geostatistical models and simulations.
- Explore the applicability of geostatistics and spatial analysis to improve mapping the hydraulic head and predicting groundwater storage variations.
- Use InSAR and GRACE satellite data to remotely assess groundwater storage changes in a cultivated area.
- Integrate high-resolution InSAR surface displacement with low-resolution GRACE TWS data using geostatistical methods.
- Validate the high-resolution InSAR-derived groundwater model against GRACE-derived models.
- Develop high-resolution hydraulic head models from InSAR data.
- Validate the InSAR-derived groundwater storage variation model using GRACE-derived data.
- Apply geostatistics to estimate groundwater storage variations.

## Methods

The study employs an integrated approach: 1) Data acquisition of Sentinel-1 SAR images (5x20m), GRACE Mascon data (0.5 deg), and GLDAS land surface models. 2) Processing InSAR data using SNAP to generate ground displacement ($\Delta d$) and SNAPHU for phase unwrapping. 3) Spatial sampling of high-density InSAR points using stratified random sampling in QGIS/R. 4) Geostatistical analysis (variogram modeling, Ordinary Kriging, and Sequential Gaussian Simulation) via the gstat package in R to fill gaps and model spatial behavior. 5) Conversion of $\Delta d$ to groundwater storage variation ($\Delta GWS$) using aquifer parameters like skeletal storage coefficient ($Ske$). 6) Validation through bivariate analysis comparing InSAR-derived models with GRACE-derived models.

## Data and Materials

The study utilized 3 InSAR observations from 2019 to 2021, initially containing approximately 40 million data points. After sampling and outlier removal, a dataset of 3555 points was used for geostatistical modeling. GRACE satellite data combined with GLDAS simulation models (VIC, Noah, CLSM, and average) were used as the validation benchmark.

## Key Findings

- GRACE data indicated a groundwater extraction of 443.68 MCM in the affected area (including all overlying aquifers), while InSAR specifically estimated the Tawil Aquifer at 113.68 MCM. ([[2022-karami|Karami, 2022, p. 13]])
- A positive correlation was found between groundwater storage changes derived from GRACE and those derived from InSAR, confirming the model's validity. ([[2022-karami|Karami, 2022, p. 14]])
- The study area includes two main aquifers: the Saq Aquifer (primary) and the Tawil-Quaternary Aquifer system (local). ([[2022-karami|Karami, 2022, p. 23]])
- Saq Sandstone is a primary aquifer with excellent porosity and permeability, but shows higher salinities in certain areas due to irrigation. ([[2022-karami|Karami, 2022, p. 26]])
- The Tawil-Quaternary Aquifer system consists of Devonian sandstone (Tawil formation), Wasia-Aruma limestone, Mira Formation, and Quaternary sediments. ([[2022-karami|Karami, 2022, p. 24]])
- InSAR can detect ground surface displacement with accuracy reaching a few mm per year, making it suitable for monitoring aquifer compaction. ([[2022-karami|Karami, 2022, p. 30]])
- The study utilizes the D-InSAR technique specifically because of its advantages in spatial analysis over large displacement areas and agricultural zones. ([[2022-karami|Karami, 2022, p. 32]])
- GRACE data, while having low resolution (0.5 degrees), provides a reliable measurement of total water storage changes at a broad scale. ([[2022-karami|Karami, 2022, p. 38]])
- The integration of InSAR and GRACE allows for the improvement of GRACE's low resolution when aquifer compaction is present. ([[2022-karami|Karami, 2022, p. 34]])
- Geostatistical methods like Sequential Gaussian Simulation (SGS) are used to generate realistic, equally probable realizations of unmeasured phenomena in remote sensing data. ([[2022-karami|Karami, 2022, p. 48]])
- The D-InSAR technique successfully identified ground surface displacement (∆d) in a cultivated area, where vegetation typically limits signal coherence. ([[2022-karami|Karami, 2022, p. 52]])
- Outlier removal using the IQR approach significantly improved the distribution of both original and sampled InSAR data toward a more normal distribution. ([[2022-karami|Karami, 2022, p. 42]])
- The average value for aquifer storativity was used to estimate high-resolution groundwater storage variation, with values derived from UN-ESCWA and BRGM sources. ([[2022-karami|Karami, 2022, p. 68]])
- A moderate positive correlation of 0.41 was found between InSAR-derived GWS and GRACE-GLDAS Average models. ([[2022-karami|Karami, 2022, p. 70]])
- A higher correlation of 0.67 was observed between the InSAR-GWS and GRACE-CLSM model. ([[2022-karami|Karami, 2022, p. 70]])

## Limitations

The study notes that InSAR alone cannot predict water storage for the entire aquifer system and that coherence is often low in cultivated areas due to vegetation; however, this can be mitigated by geostatistical analysis and filtering.

## Recommendations and Future Work

Future research should integrate geostatistical methods with machine learning to improve modeling. The use of PSI or SBAS techniques could be applied for future temporal analyses using different SAR acquisition baselines.

## Related Concepts

- [[in-sar]]
- [[geostatistics]]
- [[variogram-analysis]]
- [[sequential-gaussian-simulation]]
- [[groundwater-flow]]
- [[groundwater-modeling]]
- [[hydrogeology]]
- [[remote-sensing]]
- [[al-jawf-basin]]
- [[quaternary-sediments]]
- [[aquifer-characterization]]
- [[saudi-arabia]]
- [[kriging]]
- [[water-resources-management]]
