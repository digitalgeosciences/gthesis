---
type: source
id: "140171"
title: "Top Node Static Bottomhole Pressure Calculation of Single Phase Wet Gas Wells Using Apparent Molecular Weight Profiling"
author: "Nasser Mubarak Saeed Al-Hajri"
year: 2017
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Sidqi A. Abu-Khamsin"
committee_members: []
source_file: "raw/140171 - Top Node Static Bottomhole Pressure Calculation of Single Phase Wet Gas Wells Us.pdf"
url: "https://eprints.kfupm.edu.sa/140171"
study_area: "Not stated in source"
keywords:
  - Top Node
  - Static Bottomhole Pressure
  - Wet Gas Wells
  - Apparent Molecular Weight Profiling
  - Equation of State
  - Z-factor Correlation
  - top node calculation
  - static bottomhole pressure (SBHP)
  - gas gravity
  - Brill & Beggs-Standing combination
  - Single Phase Wet Gas Wells
techniques:
  - mathematical-modeling
  - petrophysics
tags:
  - degree/ms
  - technique/mathematical-modeling
  - technique/petrophysics
  - theme/reservoir-engineering
  - theme/petroleum-engineering
  - terminology/petrophysics
  - terminology/petrophysics
  - terminology/porosity
  - terminology/permeability
  - terminology/gas-in-place
  - terminology/gas-deviation-factor
  - terminology/petroleum-engineering
status: ingested
---

# Top Node Static Bottomhole Pressure Calculation of Single Phase Wet Gas Wells Using Apparent Molecular Weight Profiling

**Summary**: The thesis proposes a new calculation methodology to predict the static bottom-hole pressure (SBHP) for single-phase wet gas wells using apparent molecular weight profiling. The method utilizes pressure and temperature gradient data to create well-specific profiles, which are then used in modified equations of state to calculate SBHP across various correlation combinations.

---

## Research Problem

Standard SBHP calculation methods for wet gas wells often assume a constant specific gravity (typically the well stream gravity), which fails to account for variations in molecular weight and specific gravity caused by the presence of heavier components. This leads to reduced accuracy in predicting bottomhole pressure, especially in wells with significant depth or complex fluid behavior.

## Objectives

- Develop a method of profiling apparent molecular weight changes for single phase wet gas wells, applicable to dry gas wells.
- Perform top node calculations of static bottomhole pressures of single phase wet gas wells on a representative data sample using different z-factor and pseudo-critical pressure and temperature correlations.
- Compare the calculation results with actual field measurements.
- Compare the calculation results with previous methods in the literature.
- Perform sensitivity analysis of apparent molecular weight profiling and top node calculations and identify sources of error.
- Compare the prediction performance of the top node method against four existing methods: Rawlins & Schellhardt, Cullender & Smith, Rzasa & Katz (Average Z & T), and Sukkar & Cornell.

## Methods

The study utilizes a 'top node' method for SBHP prediction which incorporates an apparent molecular weight profile to capture changes in gas gravity with depth. The core calculations use the Brill & Beggs-Standing combination of correlations (specifically, Brill & Beggs for Z-factor and Standing for pseudo-critical pressure and temperature). A comparative analysis was performed using 12 case studies (calibration and time-lapse) across four different fields to compare the top node method against Rawlins & Schellhardt, Cullender & Smith, Rzasa & Katz, and Sukkar & Cornell methods. Sensitivity analyses were conducted on ten parameters: shut-in wellhead pressure, shut-in wellhead temperature, well depth, bottomhole pressure, bottomhole temperature, well gradient, average well Z-factor, average well molecular weight, average well specific gravity, and elapsed time.

## Data and Materials

The study utilized a total of 138 case studies (including calibration and time-lapse data) from four different fields. Specific focus was placed on 12 cases for direct comparison between the top node method and other established methods. Data included shut-in wellhead pressure, well depth, bottomhole pressure/temperature, and composition analysis for non-hydrocarbon components.

## Key Findings

- The top node calculation method was accurate in predicting the static bottom-hole pressures, outperforming four previous methods (Rawlins & Schellhardt, Cullender & Smith, Average Z & T, and Sukkar & Cornell). ([[2017-al-hajri|Al-Hajri, 2017, p. 13]])
- Apparent molecular weight profiling revealed changes in gas molecular weight and specific gravity in wet gas wells that were not captured by well stream gas gravity. ([[2017-al-hajri|Al-Hajri, 2017, p. 13]])
- The Brill & Beggs z-factor correlation combined with Standing pseudo-critical properties was the best performing combination for time-lapse prediction, with an average absolute pressure difference of 78.78 psi and a relative error of 1.71%. ([[2017-al-hajri|Al-Hajri, 2017, p. 50]])
- The Mahmoud-Standing combination produced similar performance to Brill & Beggs-Sutton, with an average absolute pressure difference of 86.37 psi (1.86% relative error). ([[2017-al-hajri|Al-Hajri, 2017, p. 50]])
- Calibration models showed lower errors than time-lapse models because they used the same gradient survey for both profile building and calculation, avoiding issues from temperature fluctuations over time. ([[2017-al-hajri|Al-Hajri, 2017, p. 50]])
- The top node method outperformed all four compared methods (Rawlins & Schellhardt, Cullender & Smith, Rzasa & Katz, and Sukkar & Cornell) in terms of both absolute pressure difference (psi) and absolute relative error (%) across 12 case studies. ([[2017-al-hajri|Al-Hajri, 2017, p. 53]])
- The average prediction errors for the top node method were 19.78 psi and 0.38% respectively, significantly lower than the averages of the other four methods (ranging from ~280 to ~364 psi and ~5.3% to ~6.7%). ([[2017-al-hajri|Al-Hajri, 2017, p. 56]])
- The Brill & Beggs-Standing combination was identified as the best performing correlation, with a mean absolute pressure difference of 78.78 psi (1.71%) and a standard deviation of 7.60 psi. ([[2017-al-hajri|Al-Hajri, 2017, p. 58]])
- More than 90.67% of the data points using the top node method were within 200 psi of the actual value, while only approximately 10-30% of other methods fell into this range. ([[2017-al-hajri|Al-Hajri, 2017, p. 61]])
- The study confirmed that field and reservoir properties do not significantly influence the accuracy of the top node SBHP calculation, as errors were randomly distributed across different fields (A, B, C, D, F, G, H) and reservoirs (RA, RB, RC, RD, RE, RF, RG, RH). ([[2017-al-hajri|Al-Hajri, 2017]])
- page ([[2017-al-hajri|Al-Hajri, 2017]])
- The universal gas constant is defined as R = 10.732 psia.cu ft/lb mole. ([[2017-al-hajri|Al-Hajri, 2017, p. 108]])
- Molecular weight of air (Mair) is established at 28.96 lb/lb-mole. ([[2017-al-hajri|Al-Hajri, 2017, p. 108]])
- The calculation for pseudocritical pressure ($Ppc$) and temperature ($Tpc$) are defined as critical parameters for hydrocarbon components in gas mixtures. ([[2017-al-hajri|Al-Hajri, 2017, p. 108]])

## Limitations

The inclusion of non-hydrocarbon components (H2S, CO2, N2) in the calculation requires detailed laboratory composition analysis, which may limit the applicability of the method for wells without such data. Additionally, water vapor content corrections were found to increase error in most cases.

## Recommendations and Future Work

Further research is suggested regarding the impact of water vapor content on top node calculations as it did not improve accuracy and often increased error.

## Related Concepts

- [[mathematical-modeling]]
- [[petrophysics]]
- [[reservoir-engineering]]
- [[porosity]]
- [[permeability]]
- [[gas-in-place]]
- [[gas-deviation-factor]]
- [[petroleum-engineering]]
