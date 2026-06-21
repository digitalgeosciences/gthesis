---
type: source
id: "138820"
title: "Permeability Prediction using Mercury Injection Capillary Pressure Data"
author: "Hasan Abdul-Elah Nooruddin"
year: 2013
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. M. Enamul Hossain"
committee_members: []
source_file: "raw/138820 - PERMEABILITY PREDICTION USING MERCURY INJECTION CAPILLARY PRESSURE DATA.pdf"
url: "https://eprints.kfupm.edu.sa/138820"
study_area: "Not stated in source"
keywords:
  - Permeability Prediction
  - Mercury Injection Capillary Pressure (MICP)
  - Carbonate Rock Samples
  - Porosity Cross-plot
  - Numerical Pressure Derivatives
  - Purcell Model
  - Thomeer Model
  - Winland Model
  - Swanson Model
  - Pittman Model
  - Huet-Blasingame Model
  - Dastidar Model
  - Buiting-Clerke Model
  - mercury injection capillary pressure
  - micp data
  - nonlinear regression
  - robust fitting
techniques:
  - mercury-injection-capillary-pressure
  - petrophysics
  - statistical-analysis
  - mathematical-modeling
  - matlab
tags:
  - degree/ms
  - technique/mercury-injection-capillary-pressure
  - technique/petrophysics
  - technique/statistical-analysis
  - technique/mathematical-modeling
  - technique/matlab
  - theme/petrophysics
  - terminology/permeability
  - terminology/porosity
  - terminology/petrophysics
status: ingested
---

# Permeability Prediction using Mercury Injection Capillary Pressure Data

**Summary**: The thesis investigates the prediction of permeability in carbonate rock samples using mercury injection capillary pressure (MICP) data. It compares nine different permeability models, evaluating their performance using various regression techniques to determine optimal coefficients for a wide range of permeability values.

---

## Research Problem

Predicting permeability from MICP data is challenging due to the log-normal distribution of permeability and the large ranges encountered in carbonate reservoirs; many standard models fail to accurately predict low permeability values (under 1.0 mD).

## Objectives

- Evaluate a large dataset of 225 carbonate rock samples to determine capillary pressure profiles using MICP technique.
- Implement a screening and validation process for MICP data (porosity cross-plots and numerical pressure derivatives).
- Compare nine different permeability models that utilize mercury injection capillary data.
- Determine the best-fitting coefficients for these models based on the study's specific dataset.
- Determine new sets of coefficients for generalized permeability models using three fitting methods: nonlinear regression, robust fitting, and multiple regressions after linearization.
- Evaluate the performance of these models in predicting both high and low permeability values.

## Methods

The study utilized 225 carbonate rock samples to generate MICP profiles. A two-step validation process was used: (1) a porosity cross-plot between mercury and air porosity, where samples with a difference of >1 unit were removed; and (2) a numerical pressure derivative analysis to assess data quality based on the degree of dispersion. Nine models (Purcell, Thomeer, Winland, Swanson, Pittman, Huet-Blasingame, Dastidar, Buiting-Clerke [two versions]) were compared using statistical and graphical analysis. The study also included a 'modified' version for several models where coefficients were re-optimized to the specific dataset using three fitting methods: ordinary nonlinear least-squares regression, robust fitting (weighted nonlinear), and multiple regressions of linearized models.

## Data and Materials

A total of 225 carbonate rock samples were initially used for mercury porosimetry; 19 samples were discarded during validation, leaving a final dataset of 206 validated samples.

## Key Findings

- The initial dataset of 225 carbonate samples was reduced to 206 after removing 19 samples that failed the porosity cross-plot or numerical derivative tests. ([[2013-nooruddin|Nooruddin, 2013, p. 14]])
- Swanson and Winland permeability models outperformed all other models in the analysis. ([[2013-nooruddin|Nooruddin, 2013, p. 15]])
- The generalized form of the Purcell model also showed good results after being updated with new coefficients. ([[2013-nooruddin|Nooruddin, 2013, p. 15]])
- Correlation matrix analysis in the logarithmic domain showed that all parameters except for 'm' and 'n' (from specific models) had strong relations to air permeability. ([[2013-nooruddin|Nooruddin, 2013, p. 43]])
- The Swanson parameter (S) exhibited the highest correlation with core permeability, reaching a value of 0.97 in the logarithmic domain. ([[2013-nooruddin|Nooruddin, 2013, p. 43]])
- The Swanson model ranked first among models using published constants with an R of 0.947 and AARE of 67.0%. ([[2013-nooruddin|Nooruddin, 2013, p. 67]])
- Dastidar model performed significantly better in estimating low permeability values (less than 1 mD) compared to other models. ([[2013-nooruddin|Nooruddin, 2013, p. 63]])
- Modified Winland and Swanson models showed the best results after calibration, surpassing all other models with similar performance. ([[2013-nooruddin|Nooruddin, 2013, p. 68]])
- Nonlinear regression and robust fitting performed better in predicting high permeability values (>1.0 mD), while multiple regressions after linearization were more effective for low permeability values. ([[2013-nooruddin|Nooruddin, 2013, p. 57]])
- The Dastidar model showed a noticeable improvement in R, s, and RMS when using the three regression methods, despite an increase in AARE by approximately 10%. ([[2013-nooruddin|Nooruddin, 2013, p. 63]])
- Modified Thomeer model results improved significantly with generalized forms; AARE dropped from 142% to 70-80% for all three fitting methods. ([[2013-nooruddin|Nooruddin, 2013, p. 57]])
- The Buiting-Clerke model showed a substantial decrease in AARE from 168% to 70-80% when using the modified approach. ([[2013-nooruddin|Nooruddin, 2013, p. 60]])

## Limitations

The study notes that uncorrected air permeability was used, which leads to higher measured values in low permeability rocks due to the slippage effect; Klinkenberg correction was not applied. Additionally, the lack of time information at each pressure step during MICP is noted as a limitation for building even more robust models.

## Recommendations and Future Work

Future studies should incorporate time information taken at each pressure step as a primary parameter in MICP data to build more robust permeability models. It is also recommended to use corrected air permeability (Klinkenberg) to mitigate the slippage effect in low-permeability rocks.

## Related Concepts

- [[mercury-injection-capillary-pressure]]
- [[petrophysics]]
- [[permeability]]
- [[porosity]]
- [[saudi-arabia]]
- [[mathematical-modeling]]
- [[none]]
