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
  - first arrival travel time
  - zero-phase seismic data
  - Hilbert transform
  - envelope extraction
  - empirical rule
  - outlier detection
techniques:
  - hilbert-transform
  - signal-processing
  - mathematical-modeling
  - synthetic-data-generation
tags:
  - degree/ms
  - technique/hilbert-transform
  - technique/signal-processing
  - technique/mathematical-modeling
  - theme/seismology
  - theme/applied-geophysics
  - terminology/refraction-seismics
  - terminology/signal-to-noise-ratio
status: ingested
---

# First Arrival Picking of Zero-phase Seismic Data by Hilbert Envelope Empirical Half Window (HEEH) Method

**Summary**: The thesis proposes the HEEH method, a four-step automatic algorithm for picking first arrival travel times in zero-phase seismic data. The method utilizes Hilbert transform, envelope extraction, empirical rule outlier detection, and a half-window selection step to identify arrivals without manual intervention or preprocessing.

---

## Research Problem

The accurate determination of first arrival travel time is critical for near-surface modeling but is often hindered by complex geology, low signal-to-noise ratios (SNR), and the limitations of existing automatic picking methods which are primarily designed for minimum-phase data.

## Objectives

- Propose a new method capable of automatically picking first arrival travel times of zero-phase seismic shot records.
- Develop an automated workflow using Hilbert transform, trace envelope, and empirical rule outlier detection.
- Test the accuracy of the HEEH method on synthetic datasets with varying levels of Gaussian noise (0% to 50%).
- Validate the HEEH method on real Vibroseis seismic shot records from the Yilmaz worldwide assortment.

## Methods

The HEEH algorithm follows a four-step workflow: 1) Hilbert transform to convert the real trace into a complex trace; 2) Envelope extraction to highlight amplitude jumps; 3) Empirical rule (three-sigma rule) to identify outlier windows of 'ones' representing potential first arrivals; 4) Half-window selection, where the center sample of the first continuous window of at least four outliers is selected as the pick. The method was tested on synthetic data generated from a four-layer acoustic model convolved with a Klauder wavelet and on two real Vibroseis records (Yilmaz 22 and 23).

## Data and Materials

Synthetic dataset: 101 traces across 5 noise levels (0%, 10%, 20%, 30%, 40%, 50%). Real data: Two Vibroseis shot records (Yilmaz 22 and 13) containing 48 traces each, sampled at 2 ms.

## Key Findings

- The HEEH method achieved 100% accuracy on all tested synthetic datasets across all noise levels (0-50%), with median absolute errors of 0-7 ms. ([[2023-bargees|Bargees, 2023, p. 59]])
- On real Vibroseis record 22, the HEEH method determined first arrivals with a median absolute error of 10 ms (5 samples). ([[2023-bargees|Bargees, 2023, p. 68]])
- On real Vibroseis record 23, which contained high noise and complex near-surface features, the HEEH method produced a median absolute error of 18 ms. ([[2023-bargees|Bargees, 2023, p. 68]])
- The HEEH method successfully differentiated between first and later arrivals in synthetic data across multiple layers (direct and three head waves). ([[2023-bargees|Bargees, 2023, p. 51]])
- The accuracy of the HEEH method on real record 22 was 56% within a 10 ms threshold, while record 23 achieved 33% accuracy. ([[2023-bargees|Bargees, 2023, p. 69]])

## Limitations

Performance deteriorates with decreasing signal-to-noise ratio (SNR). The method is currently optimized for zero-phase data but could be adapted for minimum-phase data by selecting an earlier sample of the first logical window.

## Recommendations and Future Work

The HEEH method can be used to pick later arrivals. It can also be applied to minimum-phase data by adjusting the selection step from the center of the window to a preceding sample.

## Related Concepts

- [[hilbert-transform]]
- [[signal-processing]]
- [[refraction-seismics]]
- [[signal-to-noise-ratio]]
- [[seismology]]
- [[applied-geophysics]]
