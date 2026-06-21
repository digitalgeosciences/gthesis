---
type: source
id: "140658"
title: "Effects of Element Elevation and Position Errors On the Response of Seismic Arra."
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
  - Signal-to-noise ratio (S/N)
  - Ground roll
  - Trace energy
  - Ricker wavelet
  - Position errors
  - Elevation errors
  - Weight variations
  - Signal-to-noise ratio
  - Wavelet response
  - Weight errors
techniques:
  - signal-processing
  - mathematical-modeling
  - linear-regression
  - dgps
  - time-power-gain
tags:
  - degree/ms
  - location/al-khobararea
  - technique/signal-processing
  - technique/mathematical-modeling
  - technique/linear-regression
  - technique/gps
  - theme/seismic-acquisition
  - theme/geophysics-general
  - terminology/signal-to-noise-ratio
  - terminology/trace-energy
  - terminology/ground-roll
  - terminology/wavelet-response
status: ingested
---

# Effects of Element Elevation and Position Errors On the Response of Seismic Arra.

**Summary**: The thesis investigates how errors in geophone position, elevation, and weight within a seismic array affect the resulting wavelet response and trace energy. Using both synthetic models and real data from a beach site in eastern Saudi Arabia, it quantifies degradation levels to provide guidance for optimal survey design.

---

## Research Problem

Seismic arrays are used to improve signal-to-noise ratios by attenuating surface waves (ground roll), but physical inaccuracies during deployment—such as incorrect element elevation, positioning, or weight variations—can degrade the array's performance. The study quantifies these impacts on trace energy.

## Objectives

- Quantify the degradation in the wavelet response of a seismic array caused by the combination of position, elevation, and weight errors.
- Evaluate the impact of these errors on trace energy across various incidence angles and element spacings.
- Apply the proposed methodology to real-world seismic data to validate the model's predictive capabilities.
- Investigate the changes in the wavelet response of seismic arrays under combined errors in elements' elevations, positions, and weights.
- Quantify the degradation of trace energy due to individual and combined errors.
- Compare predicted degradation from a mathematical model against actual measurements from real-world seismic data.

## Methods

The study uses mathematical modeling to calculate the impact of position (Ex), elevation (Ez), and weight (Ew) errors on wavelet response. Position errors were calculated by comparing DGPS coordinates with ideal distances. Elevation errors were determined using a datum calculation based on dipping angles and distance measurements. Weight errors were assessed by applying a time-power gain method to normalize trace amplitudes before calculating the percentage of error between individual traces and an absolute mean trace.

## Data and Materials

The study utilizes synthetic data for modeling (calculating response at 45° incidence) and real seismic data acquired using a hammer in a sand dune environment. Data includes 24 elements with specific coordinates, distances, and signal amplitudes.

## Key Findings

- Position errors of 10% standard deviation caused a 13% degradation in minimum trace energy; 20% errors led to a 24% degradation. ([[2018-putra|Putra, 2018, p. 42]])
- Elevation errors of 10% standard deviation resulted in a 13% degradation, while 20% errors caused a 23% degradation. ([[2018-putra|Putra, 2018, p. 45]])
- Weight errors had the least impact; 10% error led to only 2% degradation, and 20% error led to 6% degradation. ([[2018-putra|Putra, 2018, p. 48]])
- Combined position and elevation errors of 10% each resulted in a 17% degradation; 20% combined errors caused a 28% degradation. ([[2018-putra|Putra, 2018, p. 51]])
- Combined position and weight errors of 10% led to 12% degradation, while 20% led to 26% degradation. ([[2018-putra|Putra, 2018, p. 54]])
- The most severe degradation occurred with combined position, elevation, and weight errors (up to 30% for 20% standard deviation). ([[2018-putra|Putra, 2018, p. 60]])
- Application of the methodology to real data from a beach site showed only a 1.29% degradation in trace energy. ([[2018-putra|Putra, 2018, p. 70]])
- At a 45° incidence angle, the ideal case has a trace energy of -43 dB at a temporal element spacing of 0.054 s. ([[2018-putra|Putra, 2018, p. 81]])
- A 10% single error in position, elevation, or weight caused the global minima of array responses to degrade by 13%, 13%, and 2% respectively. ([[2018-putra|Putra, 2018, p. 81]])
- Combining three types of errors (position, elevation, and weight) resulted in a degradation of 17% from the ideal response. ([[2018-putra|Putra, 2018, p. 81]])
- A 20% standard deviation error for position, elevation, and weight separately degraded global minima by 24%, 23%, and 6% respectively. ([[2018-putra|Putra, 2018, p. 81]])
- The predicted degradation of trace energy for the perturbed wavelet response was -31.99 dB, while the ideal was -51.80 dB (a difference of 38.24%). ([[2018-putra|Putra, 2018, p. 80]])
- The actual measured degradation on real data was only 1.29%, significantly lower than the predicted 38.24% due to assumptions like zero-phase Ricker wavelets and lack of noise in the model. ([[2018-putra|Putra, 2018, p. 80]])
- To maintain trace energy degradation below 10%, errors in elements' positions and elevations must not exceed 7% from ideal conditions. ([[2018-putra|Putra, 2018, p. 82]])

## Limitations

The discrepancy between predicted (38.24%) and actual (1.29%) degradation is attributed to the assumption of a zero-phase Ricker wavelet, potential multi-phase wavelets in real data, presence of noise in field data, and limitations of the 2-squared time-power gain method in loose sand dunes.

## Recommendations and Future Work

- Acquire seismic data in three configurations: ideal, applied-error, and zero-time-difference (Δt = 0) to better isolate effects.
- Include intra-array heterogeneities in the near surface for more realistic modeling.
- Extend research to include 2D array geometries instead of single-line arrays.

## Related Concepts

- [[signal-processing]]
- [[mathematical-modeling]]
- [[linear-regression]]
- [[signal-to-noise-ratio]]
- [[trace-energy]]
- [[ground-roll]]
- [[seismic-acquisition]]
- [[geophysics-general]]
- [[al-khobararea]]
- [[wavelet-response]]
- [[saudi-arabia]]
