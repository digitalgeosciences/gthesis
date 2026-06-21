---
type: source
id: "138740"
title: "Estimating Deliverability in Multi-Layered Gas Reservoirs Using Artificial Intelligence"
author: "Malik Khalid Al-Arfaj"
year: 2012
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Abdulazeez Abdulraheem"
committee_members: []
source_file: "raw/138740 - Estimating Deliverability in Multi-Layered Gas Reservoirs Using Artificial Intel.pdf"
url: "https://eprints.kfupm.edu.sa/138740"
study_area: "Not stated in source"
keywords:
  - Artificial Intelligence
  - Multi-layered gas reservoir
  - Production rate
  - Well logging
  - Dynamic properties
  - ANFIS
  - MLP
  - RBF
  - SVM
  - GRNN
  - Multi-Layered Gas Reservoirs
  - Production Rate Estimation
  - Machine Learning
  - Well Performance
techniques:
  - well-log-analysis
  - petrophysics
  - machine-learning-geoscience
  - neural-networks
  - support-vector-machine
  - multivariate-regression
  - production-logging
  - anfis
  - rbf
  - pvt-analysis
  - well-testing
  - statistical-analysis
  - mathematical-modeling
tags:
  - degree/ms
  - technique/well-log-analysis
  - technique/petrophysics
  - technique/machine-learning-geoscience
  - technique/neural-networks
  - technique/support-vector-machine
  - technique/multivariate-regression
  - technique/production-logging
  - technique/anfis
  - technique/rbf
  - technique/mathematical-modeling
  - theme/petrophysics
  - theme/petroleum-engineering
  - theme/reservoir-engineering
  - theme/machine-learning-geoscience
  - terminology/petrophysics
  - terminology/petrophysics
  - terminology/porosity
  - terminology/permeability
  - terminology/gas-in-place
  - terminology/non-darcy-flow
status: ingested
---

# Estimating Deliverability in Multi-Layered Gas Reservoirs Using Artificial Intelligence

**Summary**: The thesis develops an artificial intelligence (AI) model to estimate the production rate of each layer in a multi-layered gas reservoir using static well log data and dynamic properties like pressure. The study compares five AI methods—ANFIS, MLP, RBF, SVM, and GRNN—concluding that SVM and GRNN provide the highest accuracy for estimating individual layer contributions.

---

## Research Problem

Estimating the deliverability of gas reservoirs is complicated by non-Darcy flow, which becomes even more complex when trying to determine the specific contribution of each layer in a multi-layered reservoir. Current methods often lack a way to correlate production logging (PLT) data with well and reservoir properties effectively.

## Objectives

- Estimate the production ratio from each flow zone in a gas well using readily available data from well logs and well tests within an acceptable accuracy range.
- Create a model that can estimate the production ratio of each layer in a well to create a 'virtual PLT curve'.
- Evaluate and compare different AI models (SVM, GRNN, MLP, RBF, ANFIS) for predicting gas production rates.
- Assess the impact of data normalization on the accuracy and reliability of machine learning models.
- Compare the accuracy of AI-based estimation methods against standard empirical equations (Darcys and Forchheimer).
- Evaluate the performance of SVM and GRNN models for estimating production rates from individual layers in a multi-layered gas reservoir.

## Methods

The study utilized a variety of AI algorithms including Support Vector Machines (SVM), Generalized Regression Neural Networks (GRNN), Multi-Layer Perceptrons (MLP), Radial Basis Functions (RBF), and Adaptive Neuro-Fuzzy Inference Systems (ANFIS). Data acquisition included production logs, well logs (porosity, permeability, water saturation), PVT data (viscosity, z-factor), and well test results. Statistical analysis was performed to identify outliers and determine the range of input parameters (e.g., reservoir pressure 2298-6960 psi, porosity 3.74%-23.03%, permeability 0.1034-99.69 mD). Data normalization was applied to several models to improve performance.

## Data and Materials

The dataset included production logs (pressure, temperature), well log data (porosity, permeability, water saturation), PVT reports, and well test results for multiple flow zones in a multi-layered gas reservoir. Specific ranges: Reservoir Pressure (2298-6960 psi), Flowing Temperature (238.4-292.03 F), Porosity (3.74%-23.03%), Permeability (0.1035-99.69 mD).

## Key Findings

- SVM and GRNN performed best among the tested AI methods, exhibiting low mean absolute percentage error and high correlation coefficients. ([[2012-al-arfaj|Al-Arfaj, 2012, p. 50]])
- The study identifies that non-Darcy flow significantly complicates the estimation of gas reservoir deliverability. ([[2012-al-arfaj|Al-Arfaj, 2012, p. 14]])
- A 'virtual PLT curve' can be created by using AI to estimate production ratios from each layer, potentially reducing the need for physical PLT runs. ([[2012-al-arfaj|Al-Arfaj, 2012, p. 14]])
- The research confirms that both static (well logs) and dynamic (pressure) properties are necessary for accurate estimation of multi-layered flow. ([[2012-al-arfaj|Al-Arfaj, 2012, p. 12]])
- The normalized SVM model achieved a mean absolute error of 77 MSCF and a mean absolute percentage error of 2.25%. ([[2012-al-arfaj|Al-Arfaj, 2012, p. 50]])
- Normalized data sets showed significant improvement in performance for MLP and SVM models compared to original datasets. ([[2012-al-arfaj|Al-Arfaj, 2012, p. 50]])
- AI methods outperformed empirical methods (Darcy and Forchheimer) in terms of correlation coefficients, with SVM reaching 99.59% and GRNN reaching 99.57%. ([[2012-al-arfaj|Al-Arfaj, 2012, p. 54]])
- The Darcy equation showed a mean absolute error of 2,484 MSCF compared to the much lower errors of SVM (77 MSCF) and GRNN (114 MSCF). ([[2012-al-arfaj|Al-Arfaj, 2012, p. 53]])
- The Forchheimer equation had a mean absolute error of 752 MSCF, which was still higher than the AI models. ([[2012-al-arfaj|Al-Arfaj, 2012, p. 53]])
- ANFIS runs did not meet the required accuracy (80%) or correlation coefficient (80%) and were excluded from final results. ([[2012-al-arfaj|Al-Arfaj, 2012, p. 57]])
- The average porosity of the reservoir was 10.67% with a range of 3.74% to 23.03%. ([[2012-al-arfaj|Al-Arfaj, 2012, p. 49]])
- Permeability values ranged from 0.1035 mD to 99.69 mD, with an average of 12.78 mD. ([[2012-al-arfaj|Al-Arfaj, 2012, p. 49]])
- Gas flow rates in the study covered a range from 104 MSCF to 25,385 MSCF. ([[2012-al-arfaj|Al-Arfaj, 2012, p. 49]])
- SVM models showed higher correlation coefficients (99.13% for original, 99.59% for normalized) compared to GRNN models (99.51% for original, 99.57% for normalized). ([[2012-al-arfaj|Al-Arfaj, 2012, p. 69]])
- Normalized data sets significantly improved results, with SVM MAPE dropping from 11.44% to 2.25% and GRNN MAPE dropping from 9.40% to 3.65%. ([[2012-al-arfaj|Al-Arfaj, 2012, p. 69]])

## Limitations

The accuracy of both SVM and GRNN models is limited to the range of the training data; results outside this range are not reliable without retraining with a wider dataset.

## Recommendations and Future Work

- Improve model accuracy by performing quality checks and adding new data samples covering wider ranges and different combinations.
- Retrain models with new data points if usage is required outside the original training range.

## Related Concepts

- [[well-log-analysis]]
- [[machine-learning-geoscience]]
- [[petrophysics]]
- [[production-logging]]
- [[porosity]]
- [[permeability]]
- [[gas-in-place]]
- [[petroleum-engineering]]
- [[non-darcy-flow]]
- [[neural-networks]]
- [[reservoir-engineering]]
