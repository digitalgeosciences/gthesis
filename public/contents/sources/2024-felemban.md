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
study_area: "Ghawar field, Eastern Province, Saudi Arabia"
keywords:
  - time-to-depth conversion
  - seismic velocity
  - offset range
  - semblance
  - critical angle
  - short-offset assumption
  - synthetic seismic data
techniques:
  - velocity-analysis
  - seismic-processing
  - ray-tracing
  - finite-difference-modeling
  - signal-processing
tags:
  - degree/ms
  - formation/shuaiba-formation
  - formation/arab-formation
  - formation/qusaiba-formation
  - location/ghawar-field
  - location/eastern-province
  - technique/velocity-analysis
  - technique/seismic-processing
  - technique/ray-tracing
  - technique/finite-difference-modeling
  - technique/signal-processing
  - theme/geophysics-general
  - theme/velocity-modeling
  - terminology/time-to-depth-conversion
  - terminology/critical-angle
  - terminology/short-offset-assumption
status: ingested
---

# Effect of Offset on Time to Depth Conversion

**Summary**: The thesis investigates the impact of offset range on time-to-depth conversion accuracy using a 2D synthetic viscoelastic model of the Ghawar field. It concludes that limiting offsets to avoid phase changes near critical angles significantly reduces depth estimation errors.

---

## Research Problem

Seismic velocity used for time-to-depth conversion can lead to significant errors if large offsets are included in analysis, as phase changes beyond critical angles weaken semblance energy and complicate accurate velocity picking.

## Objectives

- Investigate the relationship between offset range during velocity analysis and the accuracy of time-to-depth conversion.
- Generate 2D synthetic seismic data using a viscoelastic model of the Ghawar field to test three different offset scenarios (equal to depth, double the depth, and maximum available offset).
- Compare the resulting depth values from these three offset scenarios against the actual model depths at specific CDPs to quantify estimation errors.

## Methods

The study utilized a 2D viscoelastic model of the Ghawar field (6000m deep, 38400m long) with 23 layers. Synthetic seismic data were generated using the finite-difference method via '2D Finite-Difference Wavefield Modelling' software. Data processing included T2 gain application and conversion to CDP domain using Seismic Unix. Velocity analysis was performed using the velocity spectrum (semblance) method in Seismic Unix. Three offset scenarios were tested for three formations (Shuaiba, Arab, Qusaiba). Ray-tracing was used to calculate critical angles and maximum allowable offsets to avoid phase changes.

## Data and Materials

A 2D synthetic seismic dataset consisting of 768 shot records, 1535 receivers, and 1,178,880 traces. The model included 23 layers with specific P-wave velocities (ranging from 850 to 6380 m/s) and densities.

## Key Findings

- The amount of error in depth calculation decreases as the offset is limited, supporting the short-offset assumption where restricted offsets increase the likelihood of picking correct velocities. ([[2024-felemban|Felemban, 2024, p. 11]])
- Two-way travel time (TWT) values obtained from velocity analysis were consistently lower than those calculated from the model. ([[2024-felemban|Felemban, 2024, p. 11]])
- Phase changes occurring beyond critical angles for large offsets weaken semblance energy, leading to difficulties in picking correct velocities and increasing depth estimation errors. ([[2024-felemban|Felemban, 2024, p. 11]])
- The study identified that the difference between NMO and stacking velocities is often ignored but can impact accuracy. ([[2024-felemban|Felemban, 2024, p. 24]])
- A velocity increment (dv) of 50 m/s was found to be sufficient for picking, as values below 50 m/s did not significantly improve signal sharpness. ([[2024-felemban|Felemban, 2024, p. 36]])
- At CDP 1760, the Qusaiba formation showed a significant increase in error (up to 20.9%) when using large offsets compared to limited offsets. ([[2024-felemban|Felemban, 2024, p. 53]])
- The critical angle for the Shuaiba formation was calculated at 48.08 degrees, with a maximum safe offset of 2,235 m (or double depth if smaller). ([[2024-felemban|Felemban, 2024, p. 58]])
- For the Arab formation, the critical angle was 71.36 degrees, and the maximum allowable offset to avoid phase change was 2,090 m. ([[2024-felemban|Felemban, 2024, p. 59]])
- For the Qusaiba formation, no critical angle existed because the velocity ratio exceeded 1; a maximum offset of 7,080 m (double depth) was recommended. ([[2024-felemban|Felemban, 2024, p. 61]])

## Limitations

The study was conducted on synthetic data rather than real field data due to the difficulty in obtaining real data with accurate known depths for validation.

## Recommendations and Future Work

Future studies should perform the same analysis using real seismic and well data from the Ghawar field or similar structures to validate the findings of the synthetic model.

## Related Concepts

- [[velocity-analysis]]
- [[ray-tracing]]
- [[time-to-depth-conversion]]
- [[critical-angle]]
- [[short-offset-assumption]]
- [[geophysics-general]]
- [[ghawar-field]]
- [[shuaiba-formation]]
- [[arab-formation]]
- [[qusaiba-formation]]
