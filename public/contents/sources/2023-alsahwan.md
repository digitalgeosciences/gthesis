---
type: source
id: "142466"
title: "ESTIMATION OF WATER SATURATION IN A SAND DUNE FROM DIVING DIRECT SEISMIC P-WAVES"
author: "Abdullah Al Sahwan"
year: 2023
department: "Geosciences"
degree: "MS"
supervisor: "Abdullatif Al-Shuhail"
committee_members:
  - "Sherif Hanafy"
  - "Mohammed Benaafi"
source_file: "raw/142466 - ESTIMATION OF WATER SATURATION IN A SAND DUNE FROM DIVING DIRECT SEISMIC P-WAVES.pdf"
url: "https://eprints.kfupm.edu.sa/id/eprint/142466/"
study_area: "Barchan dune in Dammam, eastern province of Saudi Arabia"
keywords:
  - Seismic P-wave velocity (VP)
  - water saturation (SW)
  - unconsolided sediment
  - diving direct P-waves
  - Gassmann model
  - Hertz-Mindlin theory
techniques:
  - seismic-interpretation
  - velocity-analysis
  - mathematical-modeling
  - petrophysics
  - core-analysis
  - laboratory-analysis
tags:
  - degree/ms
  - formation/quaternary-sediments
  - location/dammam-area
  - location/eastern-province
  - technique/seismic-interpretation
  - technique/velocity-analysis
  - technique/mathematical-modeling
  - technique/petrophysics
  - technique/core-analysis
  - theme/geophysics-general
  - theme/rock-physics-modeling
  - terminology/water-saturation
  - terminology/rock-physics-modeling
  - terminology/diving-direct-waves
status: ingested
---

# ESTIMATION OF WATER SATURATION IN A SAND DUNE FROM DIVING DIRECT SEISMIC P-WAVES

**Summary**: The thesis proposes a method to estimate water saturation (SW) in partially saturated unconsolidated sediments, specifically sand dunes, using diving direct seismic P-waves. By integrating Gassmann and Hertz-Mindlin models with travel-time inversion, the study successfully estimated SW values from synthetic data within 2% error and validated the approach on real samples from a dune near Dammam.

---

## Research Problem

Determining precise water saturation (SW) in unconsolidated sediments is difficult because P-wave velocity (VP) changes only slightly between partial and full saturation. The study addresses this by using diving direct P-waves to estimate SW in sand dunes, where distinguishing between dry and partially saturated states is critical for understanding local hydrology.

## Objectives

- Develop a method to estimate water saturation (SW) in partially saturated unconsolidated sediments using diving direct P-waves.
- Construct a VP(SW) relationship using Gassmann and Hertz-Mindlin models combined with matrix and pore-fluid properties.
- Validate the proposed inversion method using synthetic data for sand dunes with SW ranging from 0 to 0.9.
- Apply the methodology to real field data collected from a sand dune in eastern Saudi Arabia.

## Methods

The study utilizes a multi-step modeling and inversion workflow: (1) Calculation of P-wave velocity (VP) using Gassmann's equations for pore-fluid substitution and Hertz-Mindlin theory for dry sediment properties. (2) Formulation of a VP(z, SW) relationship based on quartz matrix assumptions. (3) Determination of maximum penetration depth (h) from observed offsets (X0). (4) Implementation of a minimization algorithm in Mathematica to minimize the Normalized Squared Error (NSE) between observed and calculated travel times for diving direct waves. (5) Validation using synthetic data with known SW values. (6) Application to real field data consisting of 10 samples from a survey near Dammam.

## Data and Materials

The study utilizes: (1) Synthetic datasets representing sand dunes with varying water saturation levels (SW = 0 to 0.9). (2) Real-world data from a Barchan dune in the Al Jafurah field, including 10 samples taken at various depths (0.1m to 6.45m), and 2D seismic survey data consisting of 73 shot gathers and 31 geophones.

## Key Findings

- The proposed method successfully estimated synthetic water saturation values within a% error for SW ranging from 0 to 0.9. ([[2023-alsahwan|AlSahwan, 2023, p. 43]])
- In the real data, both measured and inverted water content values indicated a dry dune (median measured SW of 0.016; median inferred SW of 0.0027). ([[2023-alsahwan|AlSahwan, 2023, p. 47]])
- The average water content in the sampled sand dunes was found to be between 0.005 and 0.0385 m3/m3. ([[2023-alsahwan|AlSahwan, 2023, p. 47]])
- The study determined that a dry dune's P-wave velocity (VP) shows only slight variation between 0% and 90% saturation, making it difficult to distinguish without specific inversion models. ([[2023-alsahwan|AlSahwan, 2023, p. 29]])
- The average water content of the world dunes sampled in the study was approximately 0.016 m3/m3. ([[2023-alsahwan|AlSahwan, 2023, p. 50]])

## Limitations

The current model assumes a pure quartz matrix and a constant average critical porosity of 35%. The inversion provides an average saturation value along the curved raypath rather than a specific interval value. The method was primarily tested on very dry sand dunes.

## Recommendations and Future Work

- Generalize the method to account for different matrix types (e.g., clay-rich) and higher pore-fluid saturations.
- Improve the model to invert for interval water saturation rather than average saturation along the raypath.
- Test the methodology on highly saturated sand dunes.

## Related Concepts

- [[velocity-analysis]]
- [[mathematical-modeling]]
- [[water-saturation]]
- [[rock-physics-modeling]]
- [[dammam-area]]
- [[quaternary-sediments]]
- [[geophysics-general]]
- [[diving-direct-waves]]
