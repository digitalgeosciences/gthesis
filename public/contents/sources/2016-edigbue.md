---
type: source
id: "139824"
title: "THREE-DIMENSIONAL SUPERVIRTUAL SEISMIC REFRACTION INTERFEROMETRY"
author: "Paul Irikefe Edigbue"
year: 2016
department: "Geosciences"
degree: "MS"
supervisor: "Al-Shuhail A. Abdullatif"
committee_members:
  - "Al-Shuhail A. Abdullatif"
  - "Kaka I. SanLinn"
  - "Al-Ramadan A. Khalid"
source_file: "raw/139824 - THREE-DIMENSIONAL SUPERVIRTUAL SEISMIC REFRACTION INTERFEROMETRY.pdf"
url: "https://eprints.kfupm.edu.sa/id/eprint/139824/"
study_area: "Not stated in source"
keywords:
  - Supervirtual interferometry
  - Seismic refraction
  - Signal-to-noise ratio (SNR)
  - First arrival calculation
  - 3D seismic data
techniques:
  - supervirtual-refraction-interferometry
  - signal-processing
  - crosscorrelation
  - mathematical-modeling
tags:
  - degree/ms
  - technique/supervirtual-refraction-interferometry
  - technique/signal-processing
  - theme/seismology
  - theme/applied-geophysics
  - terminology/signal-to-noise-ratio
  - terminology/refraction-seismics
status: ingested
---

# THREE-DIMENSIONAL SUPERVIRTUAL SEISMIC REFRACTION INTERFEROMETRY

**Summary**: The thesis investigates the extension of supervirtual interferometry (SVI) to 3D seismic refraction data to improve signal-to-noise ratio (SNR) and first arrival picking. Using synthetic 3D data, the study demonstrates that a modified 3D SVI algorithm involving crosscorrelation, alignment, summation, and semi-automatic calculation effectively enhances first arrivals in noisy environments.

---

## Research Problem

Near-surface seismic data often suffer from low signal-to-noise ratio (SNR) due to complex geology, cultural noise, and far offset problems, making automatic first arrival picking difficult. Existing 2D SVI methods cannot be directly applied to 3D cases due to the ray-path problem.

## Objectives

- Extending the supervirtual refraction interferometry method to operate on 3D active seismic data.
- Generating low profile synthetic 3D seismic data to test the enhanced first arrival picking algorithm, using orthogonal survey method.
- Estimiting the SNR of the enhanced data and postulating the basis for comparison of the noisy and enhanced first arrivals.

## Methods

The study utilizes a 3D supervirtual refraction interferometry (SVI) workflow. Synthetic 3D seismic data were generated using a single patch orthogonal geometry with 5 receiver lines and 5 source lines, each containing 21 receivers/sources. A two-layer velocity model (V1=1500m/s, V2=2500m/s) was used to calculate travel times, which were then convolved with a zero-phase wavelet (25Hz). Gaussian noise (standard deviation of 0.25) was added to simulate moderate ambient noise. The SVI algorithm consists of four main steps: crosscorrelation of trace pairs from the same source, alignment of correlograms to common time, summation of aligned traces to improve SNR, and a semi-automatic first-arrival calculation method to shift enhanced traces back to their correct timing.

## Data and Materials

Synthetic 3D seismic refraction data generated using an orthogonal survey geometry with 5 receiver lines (21 receivers each) and 5 source lines (21 sources each). A two-layer velocity model was used for the simulation. Gaussian noise with a standard deviation of 0.25 was added to simulate real-world conditions.

## Key Findings

- The supervirtual algorithm improved SNR from approximately 4 in raw traces to about 20 in summed traces. ([[2016-edigbue|Edigbue, 2016, p. 60]])
- The proposed 3D SVI method resulted in first arrival errors of less than 5% compared to noiseless data. ([[2016-edigbue|Edigbue, 2016, p. 51]])
- Summation of aligned correlograms reduced noise to an average of 0.05 while enhancing the signal to an average of 1. ([[2016-edigbue|Edigbue, 2016, p. 60]])
- The semi-automatic method successfully addressed the issue of re-introducing noise and side lobes caused by convolution in the supervirtual process. ([[2016-edigbue|Edigbue, 2016, p. 69]])

## Limitations

The current study uses synthetic data from a single patch geometry; real-world application requires expansion to multiple patches, salves, and swath grids. The semi-automatic method is not fully automated and would be time-consuming for large datasets in industrial applications.

## Recommendations and Future Work

The semi-automatic method should be fully automated to handle large volumes of data efficiently. The study should be expanded from a single patch geometry to multiple patches and swath acquisition grids. The algorithm should be tested using real 3D seismic refraction data.

## Related Concepts

- [[supervirtual-refraction-interferometry]]
- [[signal-processing]]
- [[signal-to-noise-ratio]]
- [[refraction-seismics]]
- [[seismology]]
- [[applied-geophysics]]
