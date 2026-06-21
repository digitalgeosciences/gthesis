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
study_area: "Cultivated area in Saudi Arabia (specific location not named)"
keywords:
  - InSAR
  - GRACE
  - Groundwater Storage Variation
  - Geostatistics
  - Remote Sensing
  - Saudi Arabia
  - GRACE satellite data
  - Hydraulic head
techniques:
  - insar
  - grace
  - gis
  - kriging
  - sequential-gaussian-simulation
  - snap
  - r
  - gstat
  - spcosa
  - stratified-random-sampling
  - exploratory-data-analysis
  - d-insar
  - tws-calculation
  - normal-score-transform
  - bivariate-analysis
  - interpolation
  - gslib
tags:
  - degree/ms
  - formation/saq-formation
  - location/al-jawf-area
  - location/saudi-arabia
  - technique/in-sar
  - technique/geostatistics
  - technique/remote-sensing
  - technique/gis
  - technique/kriging
  - technique/sequential-gaussian-simulation
  - technique/stratified-random-sampling
  - technique/data-analysis
  - technique/grace
  - technique/interpolation
  - theme/hydrogeology
  - theme/groundwater-modeling
  - theme/remote-sensing
  - terminology/hydrogeology
  - terminology/groundwater-modeling
  - terminology/geostatistics
status: ingested
---

# Geostatistical Modelling of Groundwater Storage Variations Using InSAR Remote Sensing Data

**Summary**: The thesis investigates the use of InSAR and GRACE satellite data to monitor groundwater storage variations in the Wadi Al Sirhan Basin, Saudi Arabia. By integrating high-resolution InSAR surface displacement with low-resolution GRACE gravity measurements through geostatistical modeling (Kriging and SGS), the study aims to provide a tool for monitoring hydraulic head changes and aquifer depletion in agricultural areas.

---

## Research Problem

The lack of sufficient in-situ groundwater data in Saudi Arabia makes it difficult to monitor groundwater abstraction and storage variations, particularly in large-scale aquifers like the Saq and Tawil-Quarternary systems. Existing remote sensing tools like GRACE have low spatial resolution (50km), while InSAR provides high resolution but is often limited by atmospheric noise and lack of coherence in agricultural zones.

## Objectives

- Monitor groundwater-related subsidence in the agricultural areas of the selected study area.
- Analyze the spatial behavior of ground surface displacement data and generate the most appropriate geostatistical models and simulations.
- Explore the applicability of geostatistics and sampling analysis to improve mapping the hydraulic head and predicting groundwater storage variations.
- Use InSAR and GRACE satellite data to remotely assess groundwater storage changes in a cultivated area.
- Develop a geostatistical model to provide high-resolution spatial mapping of hydraulic head and groundwater storage variation.

## Methods

The study utilizes D-InSAR processing for ground surface displacement (∆d). Geostatistical analysis is applied to fill gaps caused by coherence filtering. The data undergoes a Normal-Gaussian Distribution Transformation using R to prepare it for Sequential Gaussian Simulation (SGS). Variogram analysis determines anisotropy and sill values for both sampled and transformed datasets. Ordinary Kriging is used for interpolation of the sampled data, while SGS provides multiple realizations for the transformed data. These results are then converted into hydraulic head changes (∆h) and groundwater storage variation (∆GWS) models using parameters like skeletal storage (Ske) and storativity. Finally, the InSAR-derived model is validated against GRACE-derived GWS models through bivariate analysis and Pearson correlation.

## Data and Materials

The study utilized Sentinel-1 SAR images (5m x 20m resolution), GRACE Mascon RL06 data (0.1 to 0.5 degree resolution), and GLDAS simulation products (Noah, VIC, CLSM). Data were collected from three time periods: Jan-Feb 2019, Jan-Feb 2020, and Feb-March 2021.

## Key Findings

- The study area includes the Saq Aquifer (primary) and the overlying Tawil-Quarternary Aquifer system, with a high rate of groundwater extraction in Wadi Al Sirhan Basin. ([[2022-karami|Karami, 2022, p. 18]])
- GRACE data provided an estimation of 443.68 MCM for the total affected aquifer area (including all overlying aquifers), while InSAR estimated 113.68 MCM specifically for the Tawil Aquifer. ([[2022-karami|Karami, 2022, p. 13]])
- InSAR-derived $\Delta d$ values were successfully extracted using D-InSAR, showing that the Jan-Feb 2019 data contained significant atmospheric noise compared to later years. ([[2022-karami|Karami, 2022, p. 54]])
- Stratified random sampling reduced the dataset from approximately 40 million points to a manageable sample of 3555 valid data points while maintaining the original distribution. ([[2022-karami|Karami, 2022, p. 56]])
- Outlier removal using the IQR method (1.5 * IQR) successfully transformed the skewed InSAR data into a more normal distribution for geostatistical modeling. ([[2022-karami|Karami, 2022, p. 58]])
- A positive correlation was found between groundwater storage changes derived from GRACE and those derived from InSAR, confirming the validity of the integrated model. ([[2022-karami|Karami, 2022, p. 14]])
- The transformation of sampled InSAR data into a Gaussian distribution resulted in a shift from negative to positive skewness and more normal kurtosis values. ([[2022-karami|Karami, 2022, p. 60]])
- Variogram analysis identified the major direction of continuity at approximately 165 degrees and the minor direction at 105 degrees. ([[2022-karami|Karami, 2022, p. 62]])
- The spherical model was determined as the best fit for both sampled and transformed data sets in variogram modeling. ([[2022-karami|Karami, 2022, p. 64]])
- Ordinary Kriging produced a smoothed distribution of ∆d, while SGS generated multiple realizations showing higher spatial variability than kriging but similar distributions to original data. ([[2022-karami|Karami, 2022, p. 49]])
- The study identified two zones: high-rate extraction (water thickness -1.5 to -1) in the West and low-rate extraction (-0.5 to -0.1) in the East. ([[2022-karami|Karami, 2022, p. 57]])
- A significant difference was noted where GRACE reported total groundwater extraction of 443.68 MCM, while InSAR showed 113.68 MCM, attributed to different measurement scales (regional vs local). ([[2022-karami|Karami, 2022, p. 57]])
- The correlation between the InSAR-derived GWS model and the GRACE-GLAS Average was 0.41, while the correlation with GRACE-CLSM was 0.67. ([[2022-karami|Karami, 2022, p. 70]])

## Limitations

The study notes that InSAR is limited by atmospheric noise and lack of coherence in areas with high vegetation (common in agricultural zones). Additionally, GRACE data has a very low spatial resolution (50km), necessitating geostatistical interpolation to bridge the gap between local-scale monitoring and regional-scale measurements.

## Recommendations and Future Work

The study suggests that this integrated approach can provide planners with a tool to remotely monitor hydraulic head variations and estimate groundwater storage changes without heavy reliance on in-situ data, potentially reducing costs and helping sustain aquifers.

## Related Concepts

- [[in-sar]]
- [[geostatistics]]
- [[remote-sensing]]
- [[hydrogeology]]
- [[groundwater-modeling]]
- [[saudi-arabia]]
- [[al-jawf-area]]
- [[kriging]]
- [[sequential-gaussian-simulation]]
- [[grace]]
