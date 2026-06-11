---
type: source
id: "142807"
title: "Estimation of Water Content Using GPR and Seismic Data in a Sand Dune in Eastern Saudi Arabia"
author: "Ali Alkhunaizi"
year: 2024
department: "Geosciences"
degree: "MS"
supervisor: "Abdullatif Al-Shuhail"
committee_members:
  - "Abdullatif Al-Shuhail"
  - "Sherif Hanafy"
  - "Mohammed Benaafi"
source_file: "raw/142807 - Estimation of Water Content Using GPR and Seismic Data in a Sand Dune in Eastern.pdf"
url: "https://eprints.kfupm.edu.sa/id/eprint/142807/"
study_area: "Sand dune near Dammam Airport, Eastern Province, Saudi Arabia"
keywords:
  - Water content estimation
  - Ground Penetrating Radar (GPR)
  - Seismic data
  - Sand dunes
  - Eastern Saudi Arabia
  - Gassmann model
  - Hertz-Mindlin model
  - CRIM model
  - Water saturation
  - GPR velocity
  - Seismic P-wave velocity
  - Dammam Airport
  - Quartz matrix
  - Hertz-Mindlin theory
  - water saturation (SW)
  - porosity (\u03c6)
  - seismic P-wave velocities
  - GPR velocities
  - inversion algorithm
techniques:
  - ground-penetrating-radar
  - seismic-interpretation
  - well-log-analysis
  - xrd
  - petrophysics
  - multivariate-regression
  - mathematical-modeling
  - velocity-analysis
  - core-analysis
tags:
  - degree/ms
  - location/eastern-province
  - location/saudi-arabia
  - technique/ground-penetrating-radar
  - technique/seismic-interpretation
  - technique/xrd
  - technique/well-log-analysis
  - technique/multivariate-regression
  - technique/petrophysics
  - technique/mathematical-modeling
  - technique/velocity-analysis
  - theme/near-surface-geophysics
  - theme/petrophysics
  - terminology/water-saturation
  - terminology/porosity
  - terminology/hertz-mindlin
  - terminology/crim-model
status: ingested
---

# Estimation of Water Content Using GPR and Seismic Data in a Sand Dune in Eastern Saudi Arabia

**Summary**: The thesis proposes a method to estimate water saturation (SW) in partially saturated unconsolidated sediments using a combination of seismic P-wave velocities and GPR velocities. By integrating the Gassmann/Hertz-Mindlin models for seismic data and the CRIM model for GPR, the author developed a joint inversion approach validated against laboratory measurements from sand samples.

---

## Research Problem

Determining water saturation (SW) in unconsolidated sediments like sand dunes is critical for environmental and engineering applications. The study addresses the need for a reliable method to estimate SW using combined seismic and GPR data, specifically focusing on how different mineralogical assumptions affect inversion results.

## Objectives

- Develop a method to estimate SW in partially saturated unconsolidated sediments using both seismic P-wave and GPR velocities.
- Construct VP (z, SW) and VG (phi, SW) relations using Gassmann/Hertz-Mindlin and CRIM models.
- Validate the proposed inversion method against laboratory measurements of sand samples.
- Estimate water saturation (Sw) in partially saturated unconsolidated sediments.
- Construct a P-wave velocity function in terms of water saturation and GPR velocity, VP(VG, Sw).
- Jointly invert the new VP(VG, Sw) relation to determine Sw using available mineralogy and pore-fluid properties.
- Propose a method to estimate SW in partially saturated unconsolidated sediments using seismic P-wave velocities alongside GPR velocities.
- Construct VP (z, SW) & VG (φ, SW) relations using Gassmann and Hertz-Mindlin models for P-waves and the CRIM model for GPR.
- Validate the inversion algorithm by comparing estimated values with laboratory-measured water content and saturation.
- Perform a sensitivity analysis on mineralogy (quartz percentage), porosity, and sphericity factors to assess their impact on the inversion results.

## Methods

The study employs a joint inversion workflow: 1. GPR data is processed using bandpass filtering (100-600 MHz), Automatic Gain Control (AGC), 2D running average, moving-average subtraction, and topographic correction. 2. GPR velocity (Vg) is determined from CMP gathers using the back-shifting method. 3. Seismic P-wave velocities (Vp) are derived from diving direct arrivals in both standard 2D seismic data and high-resolution 1D/2D profiles. 4. The Hertz-Mindlin theory is used to calculate dry sediment properties (Kd, Gd). 5. The CRIM model relates GPR velocity to porosity and water saturation. 6. A joint inversion algorithm (using the FindMinimum function in Mathematica) minimizes the normalized squared error between measured Vp and a calculated Vp(Vg, Sw) function to solve for Sw.

## Data and Materials

The study uses four GPR profiles (P1-P4) of approximately 38-40m length. Seismic data includes a standard 2D dataset (73 shots) and a high-resolution 2D dataset (9 shots). Laboratory analysis was performed on four sand samples extracted from the dune at known depths, including XRD mineralogy and petrophysical measurements.

## Key Findings

- The average water saturation (SW) for the sand samples was found to be approximately 0.07, indicating a dry dune environment. ([[2024-alkhunaizi|Alkhunaizi, 2024, p. 12]])
- The error between individual inverted and measured SW values ranged from 26.8% to 131.813%. ([[2024-alkhunaizi|Alkhunaizi, 2024, p. 12]])
- Despite high individual errors, the mean value of both measured and inverted sets was nearly identical (difference < 1%), confirming the reliability of the collective estimation. ([[2024-alkhunaizi|Alkhunaizi, 2024, p. 12]])
- The average water content in dry sand dunes globally is approximately 0.06, which closely matches the results obtained from both measured and inverted data in this study. ([[2024-alkhunaizi|Alkhunaizi, 2024, p. 13]])
- GPR velocity was calculated as 0.1629 m/ns for the sand-sabkha contact area. ([[2024-alkhunaizi|Alkhunaizi, 2024, p. 8]])
- GPR velocity for the study area was calculated to be 0.1629 m/ns based on a CMP gather analysis. ([[2024-alkhunaizi|Alkhunaizi, 2024, p. 45]])
- The high-resolution seismic data showed P-wave velocities ranging from 48 m/s at the top of the dune to 425 m/s at a depth of approximately 7 m. ([[2024-alkhunaizi|Alkhunaizi, 2024, p. 49]])
- Laboratory analysis of sand samples revealed porosity values between 0.304 and 0.359 and water saturation (Sw) values between 0.05 and 0.11. ([[2024-alkhunaizi|Alkhunaizi, 2024, p. 50]])
- The inverted water saturation (Sw) values ranged from 2.35787e-6 to 0.115907, with a mean of 0.0704241. ([[2024-alkhunaizi|Alkhunaizi, 2024, p. 54]])
- The average absolute error between the measured and inverted Sw values was only 0.605793% (less than 1%). ([[2024-alkhunaizi|Alkhunaizi, 2024, p. 54]])
- The inversion algorithm produced mean water saturation values with an error of less than 1% compared to laboratory measurements. ([[2024-alkhunaizi|Alkhunaizi, 2024, p. 58]])
- The study concluded that the sand dune in Dammam is very dry, with a mean water saturation of approximately 0.07%. ([[2024-alkhunaizi|Alkhunaizi, 2024, p. 58]])
- Sensitivity analysis showed that varying quartz content from 90% to 100% had negligible effects on inverted SW values. ([[2024-alkhunaizi|Alkhunaizi, 2024, p. 61]])
- Inverted water content values for the four samples were: 2.35e-6, 0.1159, 0.0634, and 0.1024 m3/m3. ([[2024-alkhunaizi|Alkhunaizi, 2024, p. 57]])
- The average P-wave velocity (Vp) for the sampled interval was 264.25 m/s. ([[2024-alkhunaizi|Alkhunaizi, 2024, p. 57]])

## Limitations

The study notes that because P-wave and GPR velocities are averaged over an interval, the resulting inverted SW is also an average value, which may differ from point-specific laboratory measurements taken at exact depths.

## Recommendations and Future Work

- Expand the method to account for different mineral types and pore fluid properties.
- Develop a way to invert for both water saturation and porosity simultaneously.
- Improve the resolution of the inversion to provide interval-specific SW rather than average values.
- Test the methodology on saturated dunes to confirm its robustness across different moisture levels.

## Related Concepts

- [[ground-penetrating-radar]]
- [[seismic-interpretation]]
- [[water-saturation]]
- [[porosity]]
- [[near-surface-geophysics]]
- [[eastern-province]]
- [[xrd]]
- [[petrophysical-analysis]]
- [[mathematical-modeling]]
- [[hertz-mindlin]]
- [[crim-model]]
- [[velocity-analysis]]
- [[saudi-arabia]]
- [[quaternary-sediments]]
