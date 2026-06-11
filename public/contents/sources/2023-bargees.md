---
type: source
id: "142448"
title: "First Arrival Picking of Zero-phase Seismic Data by Hilbert Envelope Empirical Half Window (HEEH) Method"
author: "Amen Bargees"
year: 2023
department: "Geosciences"
degree: "MS"
supervisor: "Abdullatif A. Al-Shuhail"
committee_members:
  - "Sherif Hanafy"
  - "Umair bin Waheed"
source_file: "raw/142448 - First Arrival Picking of Zero-phase Seismic Data by Hilbert Envelope Empirical H.pdf"
url: "https://eprints.kfupm.edu.sa/id/eprint/142448/"
study_area: "Not stated in source"
keywords:
  - First arrival travel time
  - Zero-phase seismic data
  - Hilbert transform
  - Envelope extraction
  - Empirical rule
  - Outlier detection
  - envelope
  - automatic picking
  - First arrival picking
  - Hilbert Envelope Empirical Half Window (HEEH)
  - Seismic data processing
techniques:
  - hilbert-transform
  - envelope-calculation
  - outlier-detection
  - synthetic-data-generation
  - signal-processing
  - matlab
tags:
  - degree/ms
  - technique/hilbert-transform
  - technique/signal-processing
  - technique/matlab
  - theme/seismology
  - theme/applied-geophysics
  - terminology/first-arrival
  - terminology/zero-phase
  - terminology/signal-to-noise-ratio
status: ingested
---

# First Arrival Picking of Zero-phase Seismic Data by Hilbert Envelope Empirical Half Window (HEEH) Method

**Summary**: The thesis proposes and evaluates the HEEH method, an automated trace-by-trace first arrival picking technique for zero-phase seismic data. The method utilizes a four-step workflow involving Hilbert transform, envelope calculation, empirical rule outlier detection, and half-window selection to identify travel times in both synthetic and real datasets.

---

## Research Problem

Manual first arrival picking is labor-intensive, time-consuming, and subjective, especially when dealing with complex near-surface conditions or low signal-to-noise ratios (SNR). Existing automatic methods often have limitations regarding specific source types (e.g., minimum-phase) or require extensive parameter tuning.

## Objectives

- Develop a new method capable of automatically picking the first arrival travel times of zero-phase seismic shot records.
- Implement a four-step algorithm: Hilbert transform, envelope extraction, outlier detection (empirical rule), and half-window selection.
- Develop a novel automated method for picking first arrival travel times in zero-phase seismic data.
- Evaluate the HEEH method's performance on synthetic datasets with varying levels of Gaussian noise.
- Validate the HEEH method using real-world seismic shot records (Yilmaz 22 and 23).
- Develop a novel method (HEEH) to pick first arrivals in zero-phase seismic data.
- Improve the accuracy of first arrival travel time identification compared to existing methods.

## Methods

The HEEH workflow consists of four steps: 1) Hilbert transform to extract instantaneous amplitude/phase; 2) Envelope calculation to emphasize amplitude jumps; 3) Empirical rule application to identify outliers (values > 3 standard deviations from the mean); 4) Half-window selection, where only windows with $\geq$ 4 consecutive outliers are kept, and the center of the first such window is taken as the pick. Synthetic data was generated using a four-layer acoustic model convolved with a Klauder wavelet (10-80 Hz). Real data consisted of Yilmaz shot records 22 and 23.

## Data and Materials

The method was tested on synthetic datasets with added Gaussian noise at levels of 0%, 10%, 20%, 30%, 40%, and 50% of the signal's peak. Additionally, it was tested on two real Vibroseis datasets from the Yilmaz worldwide assortment.

## Key Findings

- The HEEH method successfully detected true first arrivals in all tested synthetic datasets with varying levels of Gaussian noise (0% to 50%). ([[2023-bargees|Bargees, 2023, p. 13]])
- On real Vibroseis data, the HEEH method achieved 56% accuracy within 10 milliseconds of manually picked arrival times. ([[2023-bargees|Bargees, 2023, p. 14]])
- The empirical rule accurately captures zero-phase wavelets as windows of ones (outliers) and zeros elsewhere. ([[2023-bargees|Bargees, 2023, p. 13]])
- The HEEH method achieved 100% accuracy on all synthetic data types, with median absolute errors of 0-7 ms across all noise levels. ([[2023-bargees|Bargees, 2023, p. 59]])
- On real shot record 22, the HEEH method produced a median absolute error of 10 ms (five samples). ([[2023-bargees|Bargees, 2023, p. 60]])
- On real shot record 23, which contained higher noise and complexity, the HEEH method yielded a median absolute error of 18 ms. ([[2023-bargees|Bargees, 2023, p. 60]])
- The HEEH method successfully differentiated between first and later arrivals in synthetic data. ([[2023-bargees|Bargees, 2023, p. 51]])
- For shot record 23, the accuracy of picks within 10 ms was 33%, compared to 56% for shot record 22. ([[2023-bargees|Bargees, 2023, p. 69]])
- The proposed HEEH method provides a robust way to pick first arrivals in zero-phase seismic data by utilizing the Hilbert envelope. ([[2023-bargees|Bargees, 2023, p. 13]])

## Limitations

The performance of the HEEH method degrades as signal-to-noise ratio (SNR) decreases, particularly in complex environments like those found in Yilmaz record 23. The current study only tested the method on zero-phase data.

## Recommendations and Future Work

The HEEH method can be adapted for minimum-phase data by selecting an earlier sample of the first logical window rather than the center. It also has potential applications for picking later arrivals.

## Related Concepts

- [[hilbert-transform]]
- [[signal-processing]]
- [[first-arrival]]
- [[zero-phase]]
- [[seismology]]
- [[applied-geophysics]]
- [[signal-to-noise-ratio]]
