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
  - Seismic Reflection Method
  - Seismic Velocities
  - Normal Moveout (NMO)
  - Stacking Velocity
  - Hyperbolic Assumption
  - t2–x2 domain
  - Velocity Semblance
  - velocity analysis
  - semblance
  - seismic data
  - synthetic seismic data
  - real seismic data
techniques:
  - velocity-analysis
  - seismic-processing
  - matlab
tags:
  - degree/ms
  - location/red-sea
  - technique/velocity-analysis
  - technique/seismic-processing
  - technique/matlab
  - theme/geophysics-general
  - theme/seismology
  - theme/applied-geophysics
  - theme/velocity-analysis
  - terminology/nmo
  - terminology/stacking-velocity
  - terminology/hyperbolic-assumption
  - terminology/velocity-semblance
status: ingested
---

# LINEAR SEMBLANCE VELOCITY ANALYSIS IN THE T2–X2 DOMAIN: CONCEPT AND APPLICATIONS TO SYNTHETIC AND REAL SEISMIC DATA

**Summary**: The thesis investigates the application of the t2–x2 squaring technique to common midpoint (CMP) gathers to improve velocity analysis. By transforming hyperbolic reflection events into linear ones, the study demonstrates that this method enhances vertical resolution and simplifies the identification of linear noise in both synthetic and real seismic datasets.

---

## Research Problem

Determining accurate stacking velocities from seismic data can be challenging due to signal-to-noise issues and the complexity of interpreting hyperbolic reflections. The thesis addresses how the t2–x2 domain transformation can simplify velocity estimation and improve the identification of non-reflective linear events in various seismic environments.

## Objectives

- Apply the squaring (t2–x2) method to seismic data directly as opposed to applying it to arbitrarily picked t–x pairs.
- Develop a method to square the time and offset of a CMP gather.
- Compute the velocity spectrum to find the velocity of seismic reflections in the squaring domain.
- Provide a comprehensive comparison of the squaring technique compared with the conventional velocity method on several seismic data.
- Apply the squaring technique to common midpoint (CMP) gathers.
- Analyze the effects of the t2–x2 transformation on both synthetic and real 2D seismic datasets.
- Compare conventional velocity semblance with linear velocity semblance in the t2–x2 domain.
- Evaluate the impact of the squaring technique on identifying linear noise and improving vertical resolution.

## Methods

The study utilizes a workflow involving: 1) Selection of four diverse seismic datasets (synthetic and real). 2) CMP sorting based on geometric factors. 3) Application of spherical divergence correction to enhance events. 4) Band-pass filtering to remove undesirable frequencies and noise. 5) Squaring of the time (t) and offset (x) domains to transform hyperbolic reflections into linear ones in the t2–x2 plane. 6) Calculation of both conventional and linear velocity semblance using specific operating windows (e.g., 50ms). 7) Manual velocity picking on both types of semblance maps to perform NMO corrections.

## Data and Materials

Four seismic datasets were used: 1) 2007 BP anisotropic velocity benchmark (synthetic), 2) KFUPM-KAUST Red Sea model (synthetic), 3) Mobil AVO Viking Graben line 12 (real marine), and 4) Poland 2D Vibroseis line 001 (real land).

## Key Findings

- Stacking velocities picked using the squaring technique are similar or better than those selected conventionally using the hyperbolic technique. ([[2020-alzahrani|Alzahrani, 2020, p. 17]])
- Squaring techniques often provide a better vertical velocity resolution compared to conventional methods. ([[2020-alzahrani|Alzahrani, 2020, p. 17]])
- The t2–x2 method is more dependable for obtaining the stacking velocity than the constant velocity stacking method (CVS). ([[2020-alzahrani|Alzahrani, 2020, p. 21]])
- In the t2–x2 plane, reflections appear linearly, allowing for easier determination of velocity from the reciprocal of the square root of the slope. ([[2020-alzahrani|Alzahrani, 2020, p. 21]])
- The error from dropping the x4 term in the calculation of Vrms using the slope curve of t2–x2 is less than 2%. ([[2020-alzahrani|Alzahrani, 2020, p. 26]])
- The t2–x2 technique transforms hyperbolic reflection events into linear ones, making the detection of linear noise easier. ([[2020-alzahrani|Alzahrani, 2020, p. 30]])
- Squaring the time domain results in event compression at early times and stretching at later times, while squaring the offset domain increases spacing between traces. ([[2020-alzahrani|Alzahrani, 2020, p. 34]])
- The linear semblance provides improved vertical resolution compared to conventional semblance but with weaker semblance energy. ([[2020-alzahrani|Alzahrani, 2020]])
- page_num_ref_not_found_in_text_but_implied_by_context_of_section_5.3 ([[2020-alzahrani|Alzahrani, 2020]])

## Limitations

Not stated in source

## Recommendations and Future Work

The study suggests that the squaring technique provides a viable, comparable, and compatible alternative to conventional methods for picking stacking velocities.

## Related Concepts

- [[velocity-analysis]]
- [[seismic-processing]]
- [[nmo]]
- [[stacking-velocity]]
- [[seismology]]
- [[hyperbolic-assumption]]
- [[velocity-semblance]]
- [[applied-geophysics]]
