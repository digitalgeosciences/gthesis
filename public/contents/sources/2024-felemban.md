---
type: source
id: "143131"
title: "Effect of Offset on Time to Depth Conversion"
author: "Jamal Felemban"
year: 2024
department: "Geosciences"
degree: "MS"
supervisor: "Abdullatif Al-Shuhail"
committee_members:
  - "Abdullah Alshuhail"
  - "Wei Zhou"
source_file: "raw/143131 - Effect of Offset on Time to Depth Conversion.pdf"
url: "https://eprints.kfupm.edu.sa/id/eprint/143131/"
study_area: "Ghawar structure, eastern region of Saudi Arabia"
keywords:
  - Time to depth conversion
  - Seismic velocity
  - Offset range
  - Short-offset assumption
  - Phase change
  - Critical angle
  - Semblance
  - time-to-depth conversion
  - offset
techniques:
  - velocity-analysis
  - seismic-interpretation
  - seismic-processing
  - well-log-analysis
  - ray-tracing
tags:
  - degree/ms
  - formation/shuaiba-formation
  - formation/arab-d-reservoir
  - formation/qusaiba-member
  - formation/arab-formation
  - location/ghawar-field
  - location/saudi-arabia
  - location/eastern-province
  - technique/velocity-analysis
  - technique/seismic-interpretation
  - technique/seismic-processing
  - technique/well-log-analysis
  - technique/ray-tracing
  - theme/geophysics-general
  - theme/petrophysics
  - theme/velocity-analysis
  - terminology/critical-angle
  - terminology/semblance
  - terminology/short-offset-assumption
status: ingested
---

# Effect of Offset on Time to Depth Conversion

**Summary**: The thesis investigates the relationship between seismic offset and time-to-depth conversion accuracy using a synthetic viscoelastic model of the Ghawar field. It concludes that utilizing the 'short-offset assumption' or limiting offsets to those before the critical angle is essential to avoid phase changes that lead to significant depth estimation errors.

---

## Research Problem

Seismic velocity used for time-to-depth conversion can lead to significant errors because it depends on parameters like offset; specifically, large offsets may cause phase reversals (beyond the critical angle) that degrade signal coherence (semblance), making accurate depth calculation difficult in complex geological settings like the Ghawar field.

## Objectives

- Investigate the error in depth when the offset is limited at three different levels: equal to formation depth, double the formation depth, and maximum available offset.
- Test the methodology on synthetic data from a Saudi Arabian model using three different reflectors (Shuaiba, Arab, and Qusaiba) at different depths.
- Compare the depth values obtained from these three offset ranges against the actual model depth to quantify estimation errors.
- Investigate the relationship between seismic offset and time--to-depth conversion accuracy.
- Evaluate the impact of different offset ranges on semblance energy for specific formations (Shuaiba, Arab, and Qusaiba).
- Determine the maximum allowable offset to avoid phase changes caused by critical angles in the Ghawar field.
- Investigate the relationship between seismic offset and time-to-depth conversion accuracy.
- Evaluate the impact of phase change on semblance energy and velocity selection.
- Determine optimal offset limits for different formations (Shuaiba, Arab, Qusaiba) to minimize depth errors.

## Methods

The study utilized a 2D viscoelastic model of the Ghawar structure (6000m deep, 38,400m long) with 23 layers. Synthetic seismic data were generated using the finite-difference (FD) method via '2D Finite-Difference Wavefield Modelling' software. Data processing was performed in Seismic Unix, including t^2 gain application and sorting to Common Depth Point (CDP). Velocity analysis was conducted using the semblance method with varying velocity increments (5m/s to 100m/s). Three specific offset scenarios were tested: equal to formation depth, double the formation depth, and maximum available offset. Ray tracing was used to calculate critical angles and maximum allowable offsets to avoid phase changes.

## Data and Materials

A 2D synthetic seismic dataset derived from a model of the northern Ghawar field, including three specific formations: Shuaiba, Arab, and Qusaiba. The study analyzes data at multiple CMP locations (e.g., CDP 1760, CDP 2080) with varying offset ranges.

## Key Findings

- The amount of error in depth calculation decreases as the maximum allowed offset is reduced toward the formation depth. ([[2024-felemban|Felemban, 2024, p. 11]])
- Estimated two-way travel time values typically showed lower values than those calculated from the model when using limited offsets. ([[2024-felemban|Felemban, 2024, p. 11]])
- Phase changes (often in polarity) occur beyond the critical angle when large offsets are used, which weakens semblance energy and complicates accurate velocity picking. ([[2024-felemban|Felemban, 2024, p. 11]])
- The study confirms that limiting offset to the depth of the formation increases the likelihood of picking the correct velocity compared to using all available offsets. ([[2024-felemban|Felemban, 2024, p. 11]])
- A specific recommendation is made to restrict maximum offset during velocity analysis to the distance corresponding to the critical angle between a target formation and its underlying formation. ([[2024-felemban|Felemban, 2024, p. 12]])
- The depth error increases as the offset increases for all studied formations, except for a minor exception in the Arab formation at CDP 1760. ([[2024-felemban|Felemban, 2024, p. 52]])
- A maximum of 38,350 m was used for the range of offsets to ensure suitability for standard processing and velocity analysis. ([[2024-felemban|Felemban, 2024, p. 34]])
- The inclusion of a 10% standard deviation Gaussian random noise was used to simulate ambient noise effects in the synthetic data. ([[2024-felemban|Felemban, 2024]])
- page_num_placeholder_for_finding_2_actually_35 ([[2024-felemban|Felemban, 2024]])
- A velocity increment (dv) below 50 m/s did not significantly improve signal sharpness, making 50 m/s an effective threshold for picking. ([[2024-felemban|Felemban, 2024, p. 46]])
- The average depth error for the Qusaiba formation at CDP 1760 with a maximum offset (32,700m) was 4.1% compared to only 2.5% when limited to its own depth. ([[2024-felemban|Felemban, 2024, p. 53]])
- The critical angle for the Shuaiba formation at CDP 1760 was calculated as 43.0 degrees, with a maximum allowable angle of 38.7 degrees (90% of critical). ([[2024-felemban|Felemban, 2024, p. 58]])
- To avoid phase changes for the Shuaiba formation, traces with offsets exceeding 2235.69 m in the first layer were identified as problematic. ([[2024-felemban|Felemban, 2024, p. 58]])
- As the seismic offset decreased, the amount of depth conversion error also decreased, supporting the short-offset assumption. ([[2024-felemban|Felemban, 2024, p. 62]])
- Phase change near or beyond the critical angle weakens semblance energy, making it difficult to pick correct velocities and leading to larger depth errors. ([[2024-felemban|Felemban, 2024, p. 62]])

## Limitations

The study was not conducted on real data due to the difficulty of obtaining real data with accurate depth values; it relied entirely on a synthetic viscoelastic model.

## Recommendations and Future Work

To obtain more precise depth estimates, it is advisable to reduce the offset and follow the short-offset assumption (limiting offset to a maximum of double the depth of the reflector).

## Related Concepts

- [[velocity-analysis]]
- [[seismic-interpretation]]
- [[critical-angle]]
- [[semblance]]
- [[ghawar-field]]
- [[arab-d-reservoir]]
- [[qusaiba-member]]
- [[shuaiba-formation]]
- [[geophysics-general]]
- [[petrophysics]]
- [[seismic-processing]]
- [[arab-formation]]
- [[ray-tracing]]
- [[short-offset-assumption]]
