---
type: source
id: "136092"
title: "DATA DRIVEN MAPPING AND ATTENUATION OF NEAR-SURFACE DIFFRACTORS"
author: "Ayman Fazea Al-Lehyani"
year: 2009
department: "Geosciences"
degree: "MS"
supervisor: "Abdullatif Al-Shuhail"
committee_members:
  - "Gabor Korvin"
  - "Cesar Barajas-Olalde"
source_file: "raw/136092 - DATA DRIVEN MAPPING AND ATTENUATION OF NEAR-SURFACE DIFFRACTORS.pdf"
url: "https://eprints.kfupm.edu.sa/id/eprint/136092/"
study_area: "Not stated in source"
keywords:
  - near-surface diffractors
  - surface waves
  - seismic shot gathers
  - mapping algorithm
  - attenuation algorithm
  - semblance measurement
  - Ricker wavelet
  - least mean square estimation
techniques:
  - matlab
  - semblance-measurement
  - signal-processing
  - mathematical-modeling
  - least-mean-square-estimation
tags:
  - degree/ms
  - technique/matlab
  - technique/semblance-measurement
  - technique/signal-processing
  - technique/mathematical-modeling
  - technique/least-mean-square-estimation
  - theme/geophysics-general
  - theme/seismic-imaging
  - theme/near-surface-geophysics
  - terminology/near-surface-diffractors
  - terminology/surface-wave
  - terminology/near-surface-diffractors
  - terminology/signal-processing
status: ingested
---

# DATA DRIVEN MAPPING AND ATTENUATION OF NEAR-SURFACE DIFFRACTORS

**Summary**: The thesis develops and evaluates two processing algorithms to address the problem of near-surface diffractions in land seismic exploration. The mapping algorithm uses semblance measurements to locate diffractors, while the attenuation algorithm employs a least-squares fit of Ricker wavelets to remove their energy from seismic shot gathers.

---

## Research Problem

Near-surface diffractors are a significant problem in land seismic exploration as they scatter surface wave energy and mask weak reflected body waves. These diffractions complicate standard surface wave suppression schemes due to their complex geometry on shot gathers.

## Objectives

- Develop a data-driven mapping algorithm to locate near-surface diffractors of surface waves in the x-y plane.
- Develop an attenuation algorithm using least mean square estimation to remove diffracted energy from seismic shot gathers.
- Develop a data-driven mapping algorithm based on the T-X relation of side-scattered surface waves and semblance measurements.
- Evaluate the performance of these algorithms using synthetic models (Model A and Model B) with varying diffractor spacing and source locations.

## Methods

The study utilizes two primary algorithms. The Mapping Code, implemented in MATLAB, identifies diffractor locations by calculating a grid of potential coordinates and evaluating them using semblance measurements within a window sized by the surface wave's dominant period across a range of trial velocities. The Attenuation Code removes these features by identifying the specific hyperbola corresponding to each located diffractor and performing a least-squares fit of Ricker wavelets to estimate and subtract the diffracted signal from the original shot gather.

## Data and Materials

The study utilized synthetic seismic data generated from two distinct earth models (Model A and Model B). Data included multiple shot gathers (Line-1 and Line-2) for each model, tested against various surface wave velocities (e.g., 900 m/s, 950 m/s, 850 m/s) and frequencies (15 Hz).

## Key Findings

- The Mapping Code successfully identified the correct surface wave velocity for both models; for Model A, the highest semblance values were achieved at the true velocity of 1000 m/s (Max = 0.57154). ([[2009-al-lehyani|Al-Lehyani, 2009, p. 40]])
- Model B was designed to test spatial resolution; it included three clusters where some diffractors were separated by as little as 10m and 20m. ([[2009-al-lehyani|Al-Lehyani, 2009, p. 34]])
- The attenuation algorithm uses a least-squares fit of Ricker wavelets to minimize the error between the raw signal and the estimated diffracted signal. ([[2009-al-lehyani|Al-Lehyani, 2009, p. 24]])
- The mapping process involves iterating through a range of velocities [Vmin - Vmax] with an increment dV to find the best-fit semblance map. ([[2009-al-lehyani|Al-Lehyani, 2009, p. 21]])
- The mapping algorithm successfully identified the correct locations of diffractors in Model A for both Line-1 and Line-2. ([[2009-al-lehyani|Al-Lehyani, 2009, p. 47]])
- In Line-1 (Model A), where the source was in the line of receivers, a mirror image ambiguity occurred because the T-X curve was identical for diffractors on either side of the axis; this was resolved by using data from Line-2. ([[2009-al-lehyani|Al-Lehyani, 2009, p. 46]])
- The mapping algorithm successfully identified three clusters of diffractors in Model B, with resolution success depending on the distance between diffractors relative to the surface wave wavelength (e.g., cluster c was easily resolved as distances were 111-206 m, while cluster a was not resolved due to small spacing of 10-22 m). ([[2009-al-lehyani|Al-Lehyani, 2009, p. 57]])
- The attenuation algorithm successfully removed diffracted energy from shot gathers in Model A even when diffractors had minor overlap. ([[2009-al-lehyani|Al-Lehyani, 2009, p. 64]])
- For Model B, the attenuation of cluster (a) was significantly improved by using true modeled locations instead of the single-point location identified on semblance maps. ([[2009-al-lehyani|Al-Lehyani, 2009, p. 74]])

## Limitations

The study notes that while algorithms were robust on synthetic data, real-world data is required to confirm performance. Additionally, the ambiguity of mirror images occurs when the source is located directly in the line of receivers.

## Recommendations and Future Work

- Investigate better estimation methods for closely spaced diffractors, such as simultaneous estimation of interfering diffractions.
- Carefully estimate the frequency of the diffracted surface wave, as it is a critical parameter in the attenuation algorithm.
- Avoid using shot gathers with the seismic source located within the line of receivers to minimize mirror image ambiguity.

## Related Concepts

- [[matlab]]
- [[semblance-measurement]]
- [[signal-processing]]
- [[near-surface-diffractors]]
- [[surface-wave]]
- [[seismic-imaging]]
- [[least-mean-square-estimation]]
- [[near-surface-geophysics]]
