---
type: source
id: "141744"
title: "LINEAR SEMBLANCE VELOCITY ANALYSIS IN THE T2–X2 DOMAIN: CONCEPT AND APPLICATIONS TO SYNTHETIC AND REAL SEISMIC DATA"
author: "Saleh Alzahrani"
year: 2020
department: "Geosciences"
degree: "MS"
supervisor: "Abdullatif Al-Shuhail"
committee_members:
  - "Abdulaziz Al-Shaibani"
  - "SanLinn Kaka"
source_file: "raw/141744 - LINEAR SEMBLANCE VELOCITY ANALYSIS IN THE T2–X2 DOMAIN CONCEPT AND APPLICATIONS .pdf"
url: "https://eprints.kfupm.edu.sa/id/eprint/141744/"
study_area: "Not stated in source"
keywords:
  - NMO
  - stacking velocity
  - common midpoint (CMP)
  - squaring technique
  - t2–x2 domain
  - velocity semblance
  - linear events
techniques:
  - signal-processing
  - velocity-analysis
  - seismic-processing
tags:
  - degree/ms
  - technique/velocity-analysis
  - technique/signal-processing
  - technique/seismic-processing
  - theme/geophysics-general
  - theme/seismic-imaging
  - terminology/nmo
  - terminology/semblance
  - terminology/velocity-analysis
  - terminology/signal-to-noise-ratio
  - terminology/multiples
status: ingested
---

# LINEAR SEMBLANCE VELOCITY ANALYSIS IN THE T2–X2 DOMAIN: CONCEPT AND APPLICATIONS TO SYNTHETIC AND REAL SEISMIC DATA

**Summary**: The thesis investigates the use of a squaring technique (t2–x2 domain) to analyze stacking velocities in seismic reflection data. By transforming hyperbolic events into linear ones, the study compares the resolution and noise reduction of linear semblance versus conventional velocity semblance across four synthetic and real datasets.

---

## Research Problem

Standard hyperbolic-based velocity analysis can be hindered by noise or human error during picking; the t2–x2 domain offers a more robust way to identify linear events for accurate stacking velocity estimation.

## Objectives

- Apply the squaring (t2–x2) method directly to seismic data rather than to manually picked t-x pairs.
- Develop a method to square both time and offset of a CMP gather.
- Compute the velocity spectrum to find the velocity of seismic reflections in the squared domain.
- Compare the performance of the squaring technique against conventional methods across multiple datasets.

## Methods

The study utilizes four 2D seismic datasets (synthetic and real). The workflow includes: 1) CMP sorting based on geometry; 2) application of spherical divergence correction to amplitudes; 3) band-pass filtering to remove coherent noise; 4) transformation of the data into the t2–x2 domain by squaring both time and offset; 5) calculation of velocity semblance in both conventional (t-x) and linear (t2-x2) domains using a selected operating window (50ms); 6) manual velocity picking on both types of semblance to perform NMO correction.

## Data and Materials

Four seismic datasets from SEG Open Data: 1. 2007 BP anisotropic velocity benchmark (synthetic), 2. KFUPM-KAUST Red Sea model (synthetic), 3. Mobil AVO Viking Graben line 12 (real marine), and 4. Poland 2D Vibroseis line 001 (real land).

## Key Findings

- The squaring technique transforms hyperbolic reflection events into linear ones, making it easier to identify and isolate linear noise. ([[2020-alzahrani|Alzahrani, 2020, p. 59]])
- Linear semblance provides improved vertical resolution compared to conventional semblance, though with weaker semblance energy. ([[2020-alzahrani|Alzahrani, 2020, p. 49]])
- In the Mobil dataset (marine), linear semblance successfully reduced/removed noise at 0.1s to 0.5s and improved imaging of events at ~0.8s. ([[2020-alzahrani|Alzahrani, 2020, p. 51]])
- The squaring technique is comparable and compatible with conventional methods, as NMO corrected gathers from both semblance types were nearly identical across all datasets. ([[2020-alzahrani|Alzahrani, 2020, p. 57]])
- A window length of 50 ms was determined to be the optimal operating window for both conventional and linear velocity semblance. ([[2020-alzahrani|Alzahrani, 2020, p. 47]])

## Limitations

Noisy datasets remain challenging for picking regardless of the technique used; results are dependent on the quality of the initial signal-to-noise ratio.

## Recommendations and Future Work

Test and apply linear filters (e.g., Frequency–Wavenumber, F–K) on the squared gather to further refine velocity estimation; use the squaring technique as a preferred method for obtaining velocity due to improved vertical resolution.

## Related Concepts

- [[velocity-analysis]]
- [[signal-processing]]
- [[nmo]]
- [[semblance]]
- [[seismic-imaging]]
- [[signal-to-noise-ratio]]
- [[multiples]]
