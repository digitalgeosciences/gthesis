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
  - land seismic exploration
  - surface waves
  - shot gathers
  - diffraction mapping
  - attenuation
  - surface wave energy
  - seismic shot gathers
  - mapping algorithm
  - attenuation algorithm
  - least mean square estimation
techniques:
  - semblance-measurement
  - ricker-wavelet
  - matlab
  - least-squares-fitting
  - least-mean-square-estimation
tags:
  - degree/ms
  - technique/semmeasurement
  - technique/well-log-analysis
  - technique/seismic-processing
  - technique/matlab
  - technique/least-squares-fitting
  - technique/semblance-measurement
  - technique/least-mean-square-estimation
  - theme/geophysics-general
  - theme/applied-geophysics
  - theme/seismology
  - theme/seismic-processing
  - theme/seismic-imaging
  - theme/land-seismic
  - terminology/porosity
  - terminology/signal-to-noise-ratio
  - terminology/diffraction
  - terminology/shot-gather
  - terminology/surface-wave
  - terminology/ricker-wavelet
  - terminology/semblance
  - terminology/near-surface-diffraction
  - terminology/near-surface-diffractors
  - terminology/surface-waves
status: ingested
---

# DATA DRIVEN MAPPING AND ATTENUATION OF NEAR-SURFACE DIFFRACTORS

**Summary**: The thesis presents data-driven processing algorithms to map and attenuate near-surface diffractor energy in seismic shot gathers. The mapping algorithm uses the time-offset (T-X) relation of side-scattered surface waves and semblance measurements, while the attenuation method employs least mean square estimation.

---

## Research Problem

Near-surface diffractors scatter surface wave energy, creating strong hyperbolic events (diffractions) on seismic shot gathers that mask the weak reflected body waves from deeper targets. Existing methods like dip filtering or geophone arrays have limitations in handling these side-scattered signals.

## Objectives

- Build a data driven processing algorithm to map near-surface diffractors of surface waves (in the x-y plane)
- Attenuate their diffracted energy in seismic shot gathers
- Develop a Mapping Code to identify near-surface diffractor locations and associated surface-wave velocities from seismic shot gathers.
- Develop an Attenuation Code to remove (attenuate) these diffractions from the seismic data.
- Evaluate the performance of both codes using synthetic models with varying complexity.
- Develop a mapping algorithm based on T-X relations and semblance measurements to identify near-surface diffractor locations.
- Develop an attenuation algorithm using least mean square estimation to remove diffracted energy from seismic data.

## Methods

The methodology consists of two main steps: 1) Mapping: Identifying the location of near-surface diffractors on the x-y plane using a semblance measurement and time-offset relation. 2) Attenuation: Removing the diffracted energy by modeling it as a best-fit Ricker wavelet based on the shot gather data and subtracting it from the original signal. The algorithms were tested on synthetic data from two models (Model A with three diffractors; Model B with three clusters of three diffractors).

## Data and Materials

The study utilized two synthetic models: Model A (a simple homogeneous/isotropic half space with three isolated diffractors) and Model B (a five-layer earth model with three clusters of three diffractors). Synthetic shot gathers were generated for both models using specific receiver counts (101 for Model A, 201 for Model B) and sampling rates.

## Key Findings

- The mapping algorithm based on semblance measurement and time-offset relation successfully identified diffractor locations in both models. ([[2009-al-lehyani|Al-Lehyani, 2009, p. 10]])
- The attenuation algorithm using a best-fit Ricker wavelet was effective at removing diffracted energy from the shot gathers. ([[2009-al-lehyani|Al-Lehyani, 2009, p. 10]])
- Both mapping and attenuation algorithms performed well in most cases, except when the separation between individual diffractors was less than the expected wavelength of the surface wave. ([[2009-al-lehyani|Al-Lehyani, 2009, p. 10]])
- Model A included three near-surface diffractors to test the basic mapping and attenuation capabilities. ([[2009-al-lehyani|Al-Lehyani, 2009, p. 10]])
- Model B included three clusters of three diffractors, with varying distances between them, to test performance in complex scenarios. ([[2009-al-lehyani|Al-Lehyani, 2009, p. 10]])
- The Mapping Code successfully identified all three diffractor locations in Model A with high semblance values when the correct surface wave velocity (V=1000 m/s) was used. ([[2009-al-lehyani|Al-Lehyani, 2009, p. 40]])
- In Model A, Line-1 produced a mirror image of diffractors because the source was located on the receiver line, creating ambiguity in the x-y plane. ([[2009-al-lehyani|Al-Lehyani, 2009, p. 46]])
- The Mapping Code successfully identified all three diffractor clusters in Model B using the correct surface wave velocity (V=900 m/s). ([[2009-al-lehyani|Al-Lehyani, 2009, p. 50]])
- The resolution of the Mapping Code is dependent on the distance between diffractors relative to the surface wave wavelength; for cluster (a) in Model B, where distances were <60m, individual diffractors could not be resolved. ([[2009-al-lehyani|Al-Lehyani, 2009, p. 57]])
- The Attenuation Code successfully removed diffraction events from both Model A and Model B shot gathers, even when diffractions had minor overlap. ([[2009-al-lehyani|Al-Lehyani, 2009, p. 64]])
- The mapping algorithm successfully identified clusters of diffractors in both Model A and Model B. ([[2009-al-lehyani|Al-Lehyani, 2009, p. 73]])
- The attenuation algorithm performed well for clusters (b & c) where the separation between diffractors was sufficient. ([[2009-al-lehyani|Al-Lehyani, 2009, p. 74]])
- Careful picking of diffraction locations from semblance maps is critical; using true modeled locations improved the attenuation of cluster (a) diffractors and others. ([[2009-al-lehyani|Al-Lehyani, 2009, p. 74]])
- The mapping algorithm successfully identified three clusters of diffractors in Model B. ([[2009-al-lehyani|Al-Lehyani, 2009, p. 76]])
- The attenuation algorithm was applied to synthetic data from two different models, demonstrating the robustness of the algorithms. ([[2009-al-lehyani|Al-Lehyani, 2009, p. 83]])

## Limitations

Ambiguity in mapping occurs when the seismic source is located directly on the line of receivers (as seen in Line-1), resulting in mirror images of diffractors across the receiver axis. Additionally, the resolution of the Mapping Code is limited by the surface wave wavelength; diffactors separated by less than one wavelength cannot be resolved as individual points.

## Recommendations and Future Work

- Investigate better estimation methods (e.g., simultaneous estimation) for closely spaced diffractors with overlapping energy.
- Carefully estimate the frequency of the diffracted surface wave as it is a critical parameter in attenuation.
- Avoid shot gathers with seismic sources located within the line of receivers to minimize mirror image map ambiguity.

## Related Concepts

- [[semmeasurement]]
- [[seismic-processing]]
- [[porosity]]
- [[signal-to-noise-ratio]]
- [[seismic-imaging]]
- [[applied-geophysics]]
- [[saudi-arabia]]
- [[diffraction]]
- [[shot-gather]]
- [[surface-wave]]
- [[ricker-wavelet]]
- [[matlab]]
- [[least-squares-fitting]]
- [[semblance]]
- [[near-surface-diffraction]]
- [[semblance-measurement]]
- [[least-mean-square-estimation]]
- [[near-surface-diffractors]]
- [[surface-waves]]
