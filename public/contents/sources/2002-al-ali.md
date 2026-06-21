---
type: source
id: "9656"
title: "Use of vibrator performance data to improve near-surface velocity determination"
author: "Mustafa Naser Ali Al-Ali"
year: 2002
department: "Geosciences"
degree: "MS"
supervisor: "Gabor Korvin"
committee_members:
  - "Muhammad H. Makkawi"
  - "R. Hastings-James"
source_file: "raw/9656 - Use of vibrator performance data to improve near-surface velocity determination.pdf"
url: "https://eprints.kfupm.edu.sa/id/eprint/9656/"
study_area: "Saudi Arabia (multiple areas including a primary study area and two validation areas)"
keywords:
  - near-surface velocity
  - vibrator performance data
  - geostatistics
  - ground stiffness
  - ground viscosity
  - seismic survey
  - uphole data
  - uphole survey
  - cokriging
  - seismic exploration
  - geostatistical techniques
  - uphole surveys
  - seismic processing
  - statics
  - data integration
techniques:
  - geostatistics
  - kriging
  - cokriging
  - well-log-analysis
  - seismic-interpretation
  - velocity-analysis
  - signal-processing
  - semi-variograms
  - seismic-processing
  - statistical-analysis
tags:
  - degree/ms
  - formation/hadrukh-formation
  - location/ghawar-field
  - location/eastern-province
  - location/saudi-arabia
  - technique/geostatistics
  - technique/kriging
  - technique/cokriging
  - technique/well-log-analysis
  - technique/seismic-interpretation
  - technique/velocity-analysis
  - technique/signal-processing
  - technique/semi-vargram
  - technique/seismic-processing
  - technique/statistical-analysis
  - theme/near-surface-geophysics
  - theme/velocity-analysis
  - theme/seismic-acquisition
  - terminology/ground-stiffness
  - terminology/ground-viscosity
  - terminology/velocity-modeling
  - terminology/static-corrections
status: ingested
---

# Use of vibrator performance data to improve near-surface velocity determination

**Summary**: The thesis investigates the use of vibrator performance data (ground parameters like stiffness and viscosity) to improve near-surface P-wave velocity estimation in land seismic surveys. By integrating these densely sampled measurements with sparse uphole survey data using geostatistical methods, the study aims to create more accurate static corrections for seismic processing.

---

## Research Problem

Reliable estimation of near-surface P-wave velocity is a key challenge in land seismic exploration due to the sparse sampling grid of uphole surveys. This leads to uncertainties in determining accurate static corrections for seismic data processing.

## Objectives

- Determine a relationship between densely sampled vibrator performance control data (ground stiffness, viscosity) and uphole P-wave velocity.
- Integrate these two datasets using geostatistical techniques to provide improved near-surface velocity models.
- Evaluate the impact of integrated velocity models on seismic imaging compared to models based solely on uphole data.
- Integrate vibrator performance parameters with uphole survey data using geostatistical methods (kriging and cokriging).
- Evaluate the effectiveness of integrating these datasets in reducing uncertainty for near-surface velocity estimation.
- Develop an analytical technique to estimate P-wave velocity from vibrator measured ground parameters.

## Methods

The study utilizes a variety of analytical and computational methods. A theoretical model was developed to relate ground parameters (stiffness, viscosity) to P-wave velocity in an elastic half-space. Geostatistical techniques including Kriging (OK) and Co-Kriging (CCK) were used to integrate sparse uphole data with dense vibrator performance data. The study also involved univariate statistics (mean, standard deviation, skewness, kurtosis) for data characterization and semi-variogram analysis for spatial correlation. These integrated models were then applied to calculate static corrections and build 3D velocity models for seismic processing.

## Data and Materials

The study area covers approximately 2,450 km^2 west of the Ghawar field. Data includes 463 upholes providing P-wave velocities down to 50 meters and a large set of vibrator performance control data (average/max phase, force, distortion, stiffness, viscosity) from a 3D seismic survey.

## Key Findings

- A theoretical model successfully related ground parameters (stiffness and viscosity) to P-wave velocity in an elastic half-space using the ratio of P-wave to S-wave velocities. ([[2002-al-ali|Al-Ali, 2002, p. 41]])
- Vibrator performance data showed high correlation with uphole velocities over a large 3D survey area, even when only sparse upholes were available. ([[2002-al-ali|Al-Ali, 2002, p. 19]])
- The integration of vibrator data into the velocity model resulted in better seismic imaging results compared to models using only uphole data. ([[2002-al-ali|Al-Ali, 2002, p. 19]])
- Ground stiffness and viscosity are determined by the Sallas (1984) model, which is widely used for phase control in modern vibrator systems. ([[2002-al-ali|Al-Ali, 2002, p. 28]])
- The study identified that average and maximum phase/force values vary in a narrow range due to the automatic correction of the vibrator's internal control system. ([[2002-al-ali|Al-Ali, 2002, p. 45]])
- Ground stiffness showed high correlation coefficients with uphole velocities (up to 0.64), while ground viscosity showed a negative linear correlation with velocity. ([[2002-al-ali|Al-Ali, 2002, p. 50]])
- The 'estimated Vs' parameter, derived from vibrator performance data, exhibited the highest correlation with uphole P-wave velocities (over 0.65 to a depth of 40m). ([[2002-al-ali|Al-Ali, 2002, p. 76]])
- Note: The study identified a clear drop in correlation at 50m, indicating the limit of influence for surface-derived parameters. ([[2002-al-ali|Al-Ali, 2002]])
- Cokriging (CCK) successfully integrated vibrator data to produce more detailed velocity maps compared to standard kriging of uphole data alone. ([[2002-al-ali|Al-Ali, 2002, p. 102]])
- Integration of uphole and vibrator data reduced the uncertainty of velocity estimation, increasing correlation coefficients from 0.34 (upholes only) to 0.68 for a specific case study at 30m depth. ([[2002-al-ali|Al-Ali, 2002, p. 106]])
- The integrated model showed more improvements than the 2-Layer Model and the 3D kriged model, specifically handling medium and long wavelength statics better. ([[2002-al-ali|Al-Ali, 2002, p. 118]])
- A correlation coefficient of 0.65 was obtained for the cross-correlation of uphole measured velocities and estimated Vp from vibrator data in Area 2. ([[2002-al-ali|Al-Ali, 2002, p. 123]])
- The 3D kriged model produced results comparable with those obtained when using the integrated model in areas with good uphole controls. ([[2002-al-ali|Al-Ali, 2002, p. 118]])

## Limitations

The analytical models for ground parameters assume an elastic half-space, which may not perfectly represent complex near-surface geology; however, the study notes that these are standard in the field. The scope of the geostatistical integration is limited to the 3D survey area and two other regional areas for validation.

## Recommendations and Future Work

The results suggest that integrating vibrator performance data into velocity models provides a more robust method for calculating statics than relying solely on sparse uphole data.

## Related Concepts

- [[kriging]]
- [[cokriging]]
- [[ground-stiffness]]
- [[ground-viscosity]]
- [[velocity-modeling]]
- [[near-surface-geophysics]]
- [[ghawar-field]]
- [[well-log-analysis]]
- [[signal-processing]]
- [[geostatistics]]
- [[static-corrections]]
- [[hadrukh-formation]]
- [[eastern-province]]
