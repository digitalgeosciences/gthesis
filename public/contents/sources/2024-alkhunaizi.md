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
study_area: "Sand dune near Dammam International Airport, Eastern Province, Saudi Arabia"
keywords:
  - Water saturation (SW)
  - Porosity (phi)
  - Seismic P-wave velocity
  - GPR velocity
  - Gassmann model
  - Hertz-Mindlin theory
  - CRIM model
  - Joint inversion
techniques:
  - xrd
  - ground-penetrating-radar
  - seismic-interpretation
  - mathematical-modeling
  - petrophysics
tags:
  - degree/ms
  - formation/quaternary-sediments
  - location/eastern-province
  - location/damman-area
  - technique/ground-penetrating-radar
  - technique/seismic-interpretation
  - technique/xrd
  - technique/mathematical-modeling
  - theme/near-surface-geophysics
  - theme/petrophysics
  - terminology/water-saturation
  - terminology/porosity
  - terminology/gassmann-modeling
  - terminology/crim-model
status: ingested
---

# Estimation of Water Content Using GPR and Seismic Data in a Sand Dune in Eastern Saudi Arabia

**Summary**: The thesis proposes a joint inversion method to estimate water saturation (SW) in partially saturated unconsolidated sediments using both seismic P-wave velocities and GPR velocities. By integrating the Gassmann/Hertz-Mindlin models for seismic data and the CRIM model for GPR data, the study successfully estimated SW in a sand dune in eastern Saudi Arabia with an average error of less than 1% compared to laboratory measurements.

---

## Research Problem

Determining water saturation (SW) in partially saturated unconsolidated sediments is difficult using only seismic P-wave velocity because the change in velocity is minimal until full saturation is reached. A multi-modal approach combining GPR and seismic data is required for high-resolution characterization of dry to partially saturated environments.

## Objectives

- Develop a method to estimate water saturation (SW) in partially saturated unconsolidated sediments using seismic P-wave velocities and GPR velocities.
- Construct a P-wave velocity function in terms of water saturation and GPR velocity, VP(VG, SW).
- Validate the proposed inversion method using real data from a sand dune in eastern Saudi Arabia.

## Methods

The study utilizes a joint inversion workflow: 1) GPR velocities (VG) are derived from field profiles and CMP gathers. 2) Seismic P-wave velocities (VP) are obtained from high-resolution and conventional survey data. 3) The CRIM model is used to relate VG to porosity and SW. 4) The Gassmann and Hertz-Mindlin models are used to calculate VP based on mineralogy, porosity, and fluid properties. 5) A mathematical inversion using the 'FindMinimum' function in Mathematica is employed to minimize the normalized squared error (NSE) between measured VP and a calculated model of VP(VG, SW).

## Data and Materials

The study utilized four GPR profiles (P1-P4), one high-resolution 2D seismic dataset (30 receivers), and one conventional 2D seismic dataset (73 shots). Laboratory analysis was performed on 4 sand samples extracted from a borehole at depths of 0.35m, 2.0m, 3.25m, and 6.4m.

## Key Findings

- The average water saturation (SW) for the studied sand dune was determined to be approximately 0.07, consistent with global averages for dry dunes (~0.06). ([[2024-alkhunaizi|Alkhunaizi, 2024, p. 12]])
- The inversion method yielded a mean SW of 0.070424189, resulting in an error of less than 1% (specifically 0.605793%) compared to the laboratory-measured mean of 0.07. ([[2024-alkhunaizi|Alkhunaizi, 2024, p. 54]])
- Individual inverted SW values showed a high variance (2.35e-6 to 0.1159), but the collective average accurately reflected the dry dune environment. ([[2024-alkhunaizi|Alkhunaizi, 2024, p. 54]])
- The GPR velocity was calculated as 0.1629 m/ns for the study area. ([[2024-alkhunaizi|Alkhunaizi, 2024, p. 45]])
- Sensitivity analysis showed that assuming a pure quartz matrix and constant porosity of 35% resulted in results nearly identical to using true mineralogical parameters (difference <0.1%). ([[2024-alkhunaizi|Alkhunaizi, 2024, p. 63]])

## Limitations

The study notes that seismic methods alone fail to distinguish partial saturation until it reaches near-full levels; also, the inversion relies on average velocities over intervals, which may differ from point-specific lab measurements.

## Recommendations and Future Work

- Expand the method to account for varying mineralogy and pore fluid properties beyond pure quartz.
- Improve the resolution of the inversion by calculating interval-specific SW rather than averaged values.
- Test the methodology on saturated dunes to verify robustness across different saturation ranges.

## Related Concepts

- [[ground-penetrating-radar]]
- [[seismic-interpretation]]
- [[mathematical-modeling]]
- [[water-saturation]]
- [[porosity]]
- [[gassmann-modeling]]
- [[crim-model]]
- [[near-surface-geophysics]]
- [[eastern-province]]
- [[quaternary-sediments]]
