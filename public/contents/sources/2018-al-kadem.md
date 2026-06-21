---
type: source
id: "140847"
title: "Water Cut Estimation in High GOR Wells"
author: "Mohammad Saeed Al-Kadem"
year: 2018
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Dhafer A. Al-Shehri"
committee_members: []
source_file: "raw/140847 - WATER CUT ESTIMATION IN HIGH GOR WELLS.pdf"
url: "https://eprints.kfupm.edu.sa/140847"
study_area: "Not stated in source"
keywords:
  - Water-cut estimation
  - High GOR wells
  - Multiphase flow meters
  - Nonlinear multiple regression
  - Artificial neural network
  - Water cut estimation
  - Multiphase flow correlations
  - Artificial Neural Network (ANN)
  - Non-linear regression
techniques:
  - multiphase-flow-meter
  - nonlinear-multiple-regression
  - artificial-neural-network
  - test-separator
  - prosper
  - machine-learning-geoscience
  - neural-networks
tags:
  - degree/ms
  - technique/multiphase-flow-meter
  - technique/non-linear-multiple-regression
  - technique/artificial-neural-network
  - technique/test-separator
  - technique/neural-networks
  - technique/petrophysics
  - technique/machine-learning-geoscience
  - theme/petroleum-engineering
  - theme/petrophysics
  - theme/reservoir-engineering
  - terminology/water-cut
  - terminology/gas-oil-ratio
  - terminology/water-saturation
  - terminology/petrophysics
  - terminology/petroleum-engineering
status: ingested
---

# Water Cut Estimation in High GOR Wells

**Summary**: The thesis investigates the challenge of accurately measuring water cut in wells with high Gas-Oil Ratio (GOR) where standard multiphase flow meters (MPFMs) often fail due to high gas volume fractions. The author develops and compares two models—one based on nonlinear multiple regression and another using an Artificial Neural Network (ANN)—to estimate water cut using a combination of surface and subsurface data.

---

## Research Problem

Standard multiphase flow meters (MPFM) and common multipurpose flow correlations are often inaccurate or fail when the Gas Volume Fraction (GVF) exceeds 90% in high GOR wells (>2,000 scf/STB), leading to incorrect reservoir management decisions.

## Objectives

- Develop a model to estimate water cut better in wells with GOR values higher than 2,000 scf/STB.
- Reduce dependency on physical hardware like portable test separators and MPFMs for estimation.
- Provide an alternative means to measure water cut when standard equipment is unavailable or out of service.
- Save the cost of trial testing various metering technologies.
- Evaluate the applicability of five existing multiphase flow correlations (Guo Ghalambor, Gray, Hagedorn Brown, Duns & Ros, and Beggs & Brill) for high GOR wells.
- Develop a new empirical correlation using non-linear regression to estimate water cut.

## Methods

The study utilized 1,210 data points from 100 wells. Data were cleaned by removing outliers, duplicates, and non-normal distributions. A Random Forest (RF) technique was used to identify key input parameters (Qo, Pds, GOR, Pwh, Pwf). Five multiphase flow correlations were tested against actual water cut data. Two new models were developed: a non-linear regression model using grouped inputs and an ANN model with 1 hidden layer and 20 neurons, optimized using the Levenberg-Marquardt training function.

## Data and Materials

The study utilizes real-time data from both surface and subsurface sections of wells, including: flow rates (oil, gas, water), wellhead pressures (upstream/downstream), bottomhole pressure (Pwf), and temperature. It compares these against actual measurements from test separators.

## Key Findings

- Existing multiphase flow correlations are generally unreliable for high GOR wells; for example, Hagedorn & Brown and Beggs & Brill over-estimate pressure drop when the gas-liquid ratio exceeds 5,000 scf/STB. ([[2018-al-kadem|Al-Kadem, 2018, p. 37]])
- Standard multiphase flow meters (MPFM) are unable to measure all fluid phases accurately when Gas Volume Fraction (GVF) exceeds 90%. ([[2018-al-kadem|Al-Kadem, 2018, p. 27]])
- A nonlinear multiple regression model showed a correlation more reliable at low GOR with an average absolute relative percentage error of 8.32%. ([[2018-al-kadem|Al-Kadem, 2018, p. 14]])
- The Artificial Neural Network (ANN) model demonstrated more reliable results across a wide range of GOR, with an average absolute relative percentage error of 8.13% compared to actual water cut from test separators. ([[2018-al-kadem|Al-Kadem, 2018, p. 14]])
- A variance in measurement was observed where MPFMs failed to accurately measure water cut at high GOR (>=2,000 scf/STB), leading to incorrect identification of wet producers. ([[2018-al-kadem|Al-Kadem, 2018, p. 43]])
- Existing multiphase flow correlations (Guo Ghalambor, Gray, Hagedorn Brown, Duns & Ros, and Beggs & Brill) showed high errors (Exceeding 30%) for wells with high GOR (≥ 2,000 scf/STB). ([[2018-al-kadem|Al-Kadem, 2018, p. 90]])
- The Gray correlation was the most accurate of the five standard correlations but still yielded a 29% error for high GOR wells. ([[2018-al-kadem|Al-Kadem, 2018, p. 84]])
- A non-linear regression model developed using three grouped parameters achieved an average absolute relative error (Ear%) of 8.32% and an average absolute error (Eaa%) of 2.96% for wells with GOR < 2,000 scf/STB. ([[2018-al-kadem|Al-Kadem, 2018, p. 93]])
- The non-linear regression model failed to accurately estimate water cut for high GOR wells (Ear% = 25.1%). ([[2018-al-kadem|Al-Kadem, 2018, p. 93]])
- The ANN model with five inputs achieved an average Ear% of 8.13% and Eaa% of 2.93% for all wells, including high GOR cases. ([[2018-al-kadem|Al-Kadem, 2018, p. 104]])
- The ANN model with nine inputs yielded a similar accuracy (Ear% = 8.18%) as the five-input model, indicating that the extra four parameters did not significantly improve results. ([[2018-al-kadem|Al-Kadem, 2018, p. 109]])
- The ANN model was validated against an independent set of 430 data points, yielding an Ear% of 7.72% and a correlation coefficient (R²) of 0.92. ([[2018-al-kadem|Al-Kadem, 2018, p. 113]])

## Limitations

Several multiphase flow correlations are limited to specific ranges (e.g., Poettmann-Carpenter for <800 scf/STB; Fancher & Brown for specific tubing sizes). Some models, like those by Ghareeb or Camilleri et al., are restricted to artificially lifted wells (ESP) or black oil reservoirs.

## Recommendations and Future Work

- Validate the developed ANN model against different datasets from other fields with high GOR.
- Evaluate the model against different types of wells (vertical/deviated/horizontal and multilateral wells).
- Assess the impact of cost reduction on field operations by reducing the dependency on metering technologies.

## Related Concepts

- [[artificial-neural-network]]
- [[non-ler-multiple-regression]]
- [[water-cut]]
- [[gas-oil-ratio]]
- [[petrophysics]]
- [[petroleum-engineering]]
- [[neural-networks]]
- [[machine-learning-geoscience]]
- [[water-saturation]]
