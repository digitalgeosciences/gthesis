---
type: source
id: "141867"
title: "Oil Flow Rate Estimation for High GOR Producers Using Artificial Intelligence Techniques"
author: "Redha Ali Hassan Al Dhaif"
year: 2021
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Salaheldin Elkatatny"
committee_members: []
source_file: "raw/141867 - Oil Flow Rate Estimation for High GOR Producers Using Artificial Intelligence Te.pdf"
url: "https://eprints.kfupm.edu.sa/141867"
study_area: "Not stated in source"
keywords:
  - Oil Flow Rate Estimation
  - High GOR Producers
  - Artificial Intelligence
  - Artificial Neural Network (ANN)
  - Support Vector Machine (SVM)
  - Functional Network (FN)
  - Adaptive Neuro Fuzzy Inference System (ANFIS)
techniques:
  - matlab
  - machine-learning-geoscience
  - neural-networks
  - support-vector-machine
  - multi-variant-regression
tags:
  - degree/ms
  - technique/machine-learning-geoscience
  - technique/neural-networks
  - technique/support-vector-machine
  - technique/matlab
  - technique/multi-variant-regression
  - theme/petroleum-engineering
  - theme/reservoir-engineering
  - terminology/petrophysics
  - terminology/petrophysics
  - terminology/petroleum-engineering
status: ingested
---

# Oil Flow Rate Estimation for High GOR Producers Using Artificial Intelligence Techniques

**Summary**: The thesis investigates the use of four artificial intelligence techniques (ANN, SVM, FN, and ANFIS) to estimate surface oil flow rates for high GOR producers where multiphase flow meters (MPFM) lose accuracy. The study concludes that AI models can provide robust estimations with an average absolute percentage error (AAPE) of approximately 1%.

---

## Research Problem

The accuracy of surface oil flow rate measurement for high GOR producers is a significant challenge in the oil and gas industry. Existing empirical correlations (Gilbert, Baxendell, Rose, and Achong) often show high errors when applied to these specific conditions.

## Objectives

- Estimate in-line (surface) oil flow rate of high GOR producers for well testing using artificial intelligence techniques.
- Evaluate four AI techniques (ANN, SVM, FN, and ANFIS) for estimating surface oil flow rates in high GOR producers.
- Support the oil and gas industry in reducing operational costs while maintaining quality by minimizing separator test frequency and resolving MPFM reading accuracy.
- Compare the performance of AI models against established empirical correlations (Gilbert, Baxendell, Rose, and Achong).
- Identify the most accurate model for specific flow regimes: subcritical (WC=0), subcritical (WC≠0), and critical.

## Methods

The study utilized 1640 real field portable testing separator data points from one field/reservoir. Data was cleaned to remove non-representative values and filtered for GOR > 1000 SCF/STB. The data were categorized into three cases: Subcritical (WC=0), Subcritical (WC≠0), and Critical flow based on the downstream-to-upstream pressure ratio. Four AI models (ANN, SVM, FN, ANFIS) were developed for each case using MATLAB software. Models were optimized by adjusting parameters such as number of neurons, kernel types, and membership functions. Performance was evaluated using Average Absolute Percentage Error (AAPE), Root Mean Square Error (RMSE), and Coefficient of Determination (R2).

## Data and Materials

The study utilizes well testing data for high GOR producers. Specific quantities of wells or samples are not detailed in the provided text, but the models were tested against actual flow rates from well tests.

## Key Findings

- The study confirmed AI capabilities to estimate surface oil flow rate with an AAPE of approximately ± 1% and a goodness of fit (R2) of 0.95-0.98. ([[2021-aldhaif|AlDhaif, 2021, p. 15]])
- For Case II (subcritical flow, WC≠0), the FN model was identified as the best performer with an R2 of .9511 and AAPE of 0.9524% for GOR up to 5,800 SCF/STB. ([[2021-aldhaif|AlDhaif, 2021, p. 85]])
- The ANFIS model for Case I showed a high R2 of 0.97737 and low AAPE of 0.88265%. ([[2021-aldhaif|AlDhaif, 2021, p. 56]])
- The SVM model for Case II yielded an R2 of 0.89304 and AAPE of 1.40466%. ([[2021-aldhaif|AlDhaif, 2021, p. 63]])
- For Case I (subcritical flow, WC=0), the ANN model achieved an R2 of 0.979 and AAPE of 0.9241% for GOR up to 9,200 SCF/STB. ([[2021-aldhaif|AlDhaif, 2021, p. 85]])
- The ANN model outperformed all four existing empirical correlations (Gilbert, Baxendell, Rose, and Achong) in both subcritical (WC=0) and critical flow cases, with AAPE values for the correlations exceeding 34% while the ANN remained near 1%. ([[2021-aldhaif|AlDhaif, 2021, p. 78]])
- All AI models demonstrated high accuracy (R2 of 0.95-0.98 and AAPE of approximately ±1%) across all three studied cases. ([[2021-aldhaif|AlDhaif, 2021, p. 86]])

## Limitations

MPFM accuracy is limited in high GOR/GVF environments (specifically GVF > 85%).

## Recommendations and Future Work

Not stated in source

## Related Concepts

- [[neural-networks]]
- [[support-vector-machine]]
- [[matlab]]
- [[petrophysics]]
- [[petroleum-engineering]]
- [[reservoir-engineering]]
- [[multi-variant-regression]]
- [[saudi-arabia]]
