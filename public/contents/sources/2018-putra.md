---
type: source
id: "140658"
title: "Effects of Element Elevation and Position Errors On the Response of Seismic Arrays"
author: "Ryan Putra"
year: 2018
department: "Geosciences"
degree: "MS"
supervisor: "Abdullatif Al-Shuhail"
committee_members:
  - "Abdulaziz Al-Shaibani"
  - "SanLinn Kaka"
source_file: "raw/140658 - Effects of Element Elevation and Position Errors On the Response of Seismic Arra.pdf"
url: "https://eprints.kfupm.edu.sa/id/eprint/140658/"
study_area: "KFUPM beach, Al-Khobar, Eastern Province, Saudi Arabia"
keywords:
  - Seismic arrays
  - Signal-to-noise ratio
  - Ground roll
  - Trace energy
  - Ricker wavelet
  - Geophone weight
  - Position errors
  - Elevation errors
  - Seismic array
  - Position error
  - Elevation error
  - Weight variation
  - Signal-to-noise ratio (S/N)
  - Surface waves
  - Element elevation
  - Weight errors
  - Synthetic data
  - Real data
techniques:
  - seismic-processing
  - signal-processing
  - ricker-wavelet-generation
  - convolutions
  - statistical-analysis
  - dgps
  - linear-regression
tags:
  - degree/ms
  - location/al-khobar
  - location/saudi-arabia
  - location/eastern-province
  - technique/seismic-processing
  - technique/signal-processing
  - technique/gps
  - technique/mathematical-modeling
  - theme/geophysics-general
  - theme/applied-geophysics
  - theme/seismology
  - theme/seismic-acquisition
  - theme/signal-processing
  - terminology/signal-to-noise-ratio
  - terminology/trace-energy
  - terminology/signal-processing
  - terminology/ground-roll
status: ingested
---

# Effects of Element Elevation and Position Errors On the Response of Seismic Arrays

**Summary**: The thesis investigates the impact of physical errors in seismic array elements—specifically elevation, position, and weight—on the resulting trace energy and signal quality. Using both synthetic models and real data from a beach survey, it quantifies how these imperfections degrade the array's ability to attenuate surface waves.

---

## Research Problem

Real-world seismic acquisition often involves non-ideal conditions such as rugged topography or obstacles, leading to errors in the placement (position and elevation) of geophones. The combined effects of these physical inaccuracies and weight variations on the signal-to-noise ratio (S/N) of seismic arrays using impulsive signals have not been fully quantified.

## Objectives

- Quantify the degradation in the wavelet response of a seismic array caused by combined errors in weight, position, and elevation.
- Model these errors using zero-mean Gaussian random errors with 10% and 20% standard deviations.
- Compare ideal array responses to perturbed responses using trace energy calculations.
- Apply the proposed methodology to real seismic data acquired over a sandstone formation in eastern Saudi Arabia.
- Quantify the degradation in the wavelet response of a seismic array caused by the combination of elements' position and elevation errors.
- Incorporate weight variations into the study to simulate real-world conditions.
- Understand the application of the methodology on real data.
- Investigate the changes in the wavelet response of seismic arrays in the presence of combined errors in elements' elevations, positions, and weights.
- Quantify the percentage of degradation in trace energy for different levels of standard deviation in element parameters.
- Apply the methodology to real-world data acquired at a beach location to validate the theoretical findings.
- Quantify the impact of element position errors on seismic array response.
- Evaluate the effect of element elevation differences on trace energy.
- Compare synthetic data models with real-world seismic data to validate methodology.

## Methods

The study models geophone arrays (specifically a 12-element equally weighted array) and calculates their response to impulsive signals (Ricker wavelets). It introduces three types of errors: weight, position, and elevation. These are modeled as zero-mean Gaussian random errors with 10% and 20% standard deviations. The 'trace energy' is used as the primary metric for comparison between ideal and perturbed responses across various incidence angles (0° to 90°). For real data analysis, the study calculates trace energy degradation by comparing observed waveforms against a predicted model based on measured geophone coordinates and weights.

## Data and Materials

Synthetic data models with varying standard deviation errors (10% and 20%) for position, elevation, and weight. Real-world data: 2D seismic line consisting of 1 source point and 22 receiver points recorded at KFUPM beach, Al-Khobar.

## Key Findings

- The combination of errors degrades the array response more than individual errors alone, but not as a simple sum of each single error's degradation. ([[2018-putra|Putra, 2018, p. 16]])
- At a 45° incidence angle, an ideal array has a minimum response with trace energy of -43 dB at a temporal spacing of 0.054 s. ([[2018-putra|Putra, 2018, p. 17]])
- The addition of 10% combined errors degrades the minimum array response by approximately 17% at a 45° incidence angle. ([[2018-putra|Putra, 2018, p. 17]])
- The addition of 20% combined errors degrades the minimum array response by 30% at a 45° incidence angle. ([[2018-putra|Putra, 2018, p. 17]])
- Application to real data from eastern Saudi Arabia showed only 1.29% degradation in trace energy, compared to a predicted 38.24% degradation using the proposed model. ([[2018-putra|Putra, 2018, p. 17]])
- The discrepancy between predicted and actual degradation (1.29% vs 38.24%) is attributed to noise, statics, and wavelet issues in the real data. ([[2018-putra|Putra, 2018, p. 17]])
- Position errors of 10% standard deviation resulted in a 13% degradation of minimum trace energy, while 20% error led to a 24% degradation. ([[2018-putra|Putra, 2018, p. 23]])
- A position error of less than 7% from the ideal condition is required for the degradation to be considered acceptable (less than 10%). ([[2018-putra|Putra, 2018, p. 23]])
- Elevation errors of 10% standard deviation caused a 13% degradation in minimum trace energy, and 20% error caused a 23% degradation. ([[2018-putra|Putra, 2018, p. 26]])
- An elevation error of less than 7% is required to keep the trace energy degradation under 10%. ([[2018-putra|Putra, 2018, p. 26]])
- Weight errors are relatively robust; a 10% standard deviation error resulted in only 2% degradation, and 20% error led to only 6% degradation. ([[2018-putra|Putra, 2018, p. 29]])
- Combined position and elevation errors of 10% each caused a 13% degradation; however, the combined effect was not simply additive, resulting in 17% degradation for 10% error in both. ([[2018-putra|Putra, 2018, p. 32]])
- For combined position and elevation errors, an accuracy of better than 3% for each parameter is required to maintain a degradation under 10%. ([[2018-putra|Putra, 2018, p. 32]])
- 10% standard deviation errors in element position and weight led to a 12% degradation in minimum trace energy. ([[2018-putra|Putra, 2018, p. 54]])
- Adding 20% standard deviation of combined errors (position and weight) resulted in a 26% degradation of trace energy. ([[2018-putra|Putra, 2018, p. 54]])

## Limitations

The prediction model assumed a zero-phase Ricker wavelet, whereas real data from a hammer source may have mixed-phase characteristics. The presence of noise in real data was not accounted for in the prediction calculations. Additionally, the 2-squared method used to gain the data might not fully account for attenuation in loose sand dunes.

## Recommendations and Future Work

- Future research should use three configurations: ideal, applied-error, and zero-difference (delta t = 0) to better isolate variables.
- Incorporate intra-array heterogeneities in the near surface into future models.
- Explore the study of array response using 2D arrays instead of single-line geometries.

## Related Concepts

- [[seismic-processing]]
- [[signal-to-noise-ratio]]
- [[trace-energy]]
- [[applied-geophysics]]
- [[al-khobar]]
- [[signal-processing]]
- [[seismology]]
- [[geophysics-general]]
- [[gps]]
- [[mathematical-modeling]]
- [[seismic-acquisition]]
- [[ground-roll]]
