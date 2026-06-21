---
type: source
id: "142247"
title: "SAND DUNE STATIC DELAY: A DATA DRIVEN APPROACH AND ADJUSTMENT OF THE SAND CURVE"
author: "Ali Al Jishi"
year: 2022
department: "Geosciences"
degree: "MS"
supervisor: "Abdullaif Abdulrahman Al-Shuhail"
committee_members:
  - "Mamadou S. Diallo"
  - "Ismail Ebrahim San Linn Kaka"
source_file: "raw/142247 - SAND DUNE STATIC DELAY A DATA DRIVEN APPROACH AND ADJUSTMENT OF THE SAND CURVE.pdf"
url: "https://eprints.kfupm.edu.sa/id/eprint/142247/"
study_area: "Rub al Khali desert, Saudi Arabia"
keywords:
  - Sand dune
  - Static delay
  - Data-driven approach
  - Sand curve
  - Seismic data
  - Refraction
  - Autocorrelation
  - Signal processing
  - Seismic data processing
  - Sabkha
techniques:
  - autocorrelation
  - finite-difference-modeling
  - signal-processing
  - seismic-interpretation
  - velocity-analysis
  - well-log-analysis
  - petrophysics
  - seismic-processing
  - deconvolution
  - interpolation
  - cross-correlation
  - data-analysis
tags:
  - degree/ms
  - location/rub-al-khali-basin
  - technique/autocorrelation
  - technique/finite-difference-modeling
  - technique/signal-processing
  - technique/seismic-interpretation
  - technique/velocity-analysis
  - technique/seismic-processing
  - technique/deconvolution
  - technique/interpolation
  - technique/cross-correlation
  - technique/petrophysics
  - technique/data-analysis
  - theme/geophysics-general
  - theme/near-surface-geophysics
  - theme/static-corrections
  - terminology/static-corrections
  - terminology/sand-curve
  - terminology/reverberation
status: ingested
---

# SAND DUNE STATIC DELAY: A DATA DRIVEN APPROACH AND ADJUSTMENT OF THE SAND CURVE

**Summary**: The thesis investigates the challenges of seismic data acquisition and processing in sand dune environments, specifically focusing on the Rub al Khali desert. It proposes a new adaptive, data-driven approach to construct and adjust 'sand curves' to accurately calculate static delays caused by varying sand thicknesses.

---

## Research Problem

Sand dune environments cause significant variations in seismic wave velocity and high lateral differences in static delays due to the contrast between unconsolidated sands and compacted sabkhas. Existing empirical methods (like the standard Sand Curve) often fail to provide accurate solutions because they rely on fixed assumptions or limited data ranges.

## Objectives

- Develop a data-driven approach for near-surface static correction in sand dune environments.
- Utilize autocorrelation and stacking of common source/receiver gathers to enhance reverberation signatures.
- Create an adaptive, area-specific sand curve that does not require prior knowledge of sand thickness or porosity.
- Evaluate the effectiveness of the proposed method using both synthetic models and real field data.
- Identify limitations of current Sand Curve approaches for sand dune static delays.
- Develop a more reliable elevation picking strategy for mixed surface geology (sand/sabkha).

## Methods

The methodology involves: 1) Identifying near--surface multiples (reverberations) caused by high impedance contrasts between sand and sabkha. 2) Applying autocorrelation to individual traces to highlight periodic signals. 3) Sorting and stacking autocorrelations in common source and receiver domains to enhance the signal-to-noise ratio of these reverberations. 4) Using finite-difference modeling to create synthetic data for validation. 5) Developing an 'inverse sand curve' by fitting a polynomial to relate travel time to thickness, allowing for accurate elevation determination.

## Data and Materials

The study utilizes: (1) Synthetic models generated via finite-difference methods with five layers including air, sand, and sabkha; (2) Real seismic data acquired in the Rub-AlKhali desert region of Saudi Arabia showing distinct dune reverberations.

## Key Findings

- Autocorrelation effectively isolates periodic signals (reverberations) from random noise, even when the original signal is heavily obscured by noise (e.g., 80% Gaussian noise). ([[2022-aljishi|AlJishi, 2022, p. 34]])
- Stacking autocorrelations in common source and receiver domains significantly enhances the clarity of reverberation signatures while canceling out non-coherent signals. ([[2022-aljishi|AlJishi, 2022, p. 42]])
- The first-order reverberation occurs at twice the travel time of the primary reflection, and subsequent higher-order harmonics appear at regular intervals. ([[2022-aljishi|AlJishi, 2022, p. 51]])
- Finite-difference modeling confirmed that high velocity contrasts between sand and sabkha layers produce distinct reverberations that can be used for static correction. ([[2022-aljishi|AlJishi, 2022, p. 46]])
- The proposed 'inverse sand curve' allows the conversion of picked time values into accurate elevation data, facilitating a more robust two-step static solution. ([[2022-aljishi|AlJishi, 2022, p. 47]])
- Existing Sand Curve models are often limited by inaccurate base-of-sand picking, which leads to long-wavelength static errors. ([[2022-aljishi|AlJishi, 2022, p. 73]])
- The proposed elevation picking method using sabkha boundaries as a reference provides a more robust and smoother surface for the base of sand. ([[2022-aljishi|AlJishi, 2022, p. 73]])
- A 1-meter interval thickness stack significantly improves the coherence of the event signature compared to legacy methods. ([[2022-aljishi|AlJishi, 2022, p. 94]])
- The new adaptive sand curve provides a better match with the actual data and allows for a wider range of usable thicknesses (up to 200m). ([[2022-aljishi|AlJishi, 2022, p. 95]])
- The proposed method results in a more robust, noise-free base-of-sand surface compared to legacy methods. ([[2022-aljishi|AlJishi, 2022, p. 97]])
- Application of the new approach on Rub al Khali data resulted in improved stack response and better focus for subsequent imaging. ([[2022-aljishi|AlJishi, 2022, p. 100]])

## Limitations

Existing Sand Curves are often limited by specific thickness ranges (e.g., 105 meters) and may not account for local variations in sand composition or water saturation; the proposed method's accuracy is dependent on the quality of the initial autocorrelation stacking.

## Recommendations and Future Work

Future work could include using ray-tracing methods to isolate specific reflection/refraction paths, modeling more complex topographies with alternating sand and sabkha units, and incorporating multi-source point data to eliminate receiver-side reverberation effects.

## Related Concepts

- [[autocorrelation]]
- [[finite-difference-modeling]]
- [[static-corrections]]
- [[sand-curve]]
- [[reverberation]]
- [[rub-al-khali-basin]]
- [[near-surface-geophysics]]
- [[seismic-processing]]
- [[signal-processing]]
