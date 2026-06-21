---
type: source
id: "140856"
title: "HORIZONTAL & MULTILATERAL WELLS' PERFORMANCE PREDICTION IN UNDERSATURATED RESERVOIRS"
author: "Ali Salman Al-Mashhad"
year: 2018
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Dhafer Al-Shehri"
committee_members: []
source_file: "raw/140856 - HORIZONTAL &amp; MULTILATERAL WELLS' PERFORMANCE PREDICTION IN UNDERSATURATED RE.pdf"
url: "https://eprints.kfupm.edu.sa/140856"
study_area: "Multiple under-saturated reservoirs in nine fields (specific field names not listed in the text provided)."
keywords:
  - Horizontal wells
  - Multilateral wells
  - Undersaturated reservoirs
  - Artificial Intelligence
  - Neural Networks
  - Oil flow rates
  - Production prediction
  - ANN
  - Oil Flow Rate Prediction
  - Empirical Correlations
techniques:
  - neural-networks
  - fuzzy-logic
  - decision-tree
  - machine-learning-geoscience
  - matlab
  - correlation-analysis
  - support-vector-machine
  - statistical-analysis
tags:
  - degree/ms
  - location/saudi-arabia
  - technique/neural-networks
  - technique/fuzzy-logic
  - technique/decision-tree
  - technique/support-vector-machine
  - technique/matlab
  - technique/petrophysics
  - technique/statistical-analysis
  - theme/reservoir-engineering
  - theme/petroleum-engineering
  - terminology/petrophysics
  - terminology/petrophysics
status: ingested
---

# HORIZONTAL & MULTILATERAL WELLS' PERFORMANCE PREDICTION IN UNDERSATURATED RESERVOIRS

**Summary**: The thesis investigates the prediction of oil flow rates in horizontal and multilateral wells within undersaturated reservoirs using various artificial intelligence (AI) models. It compares these AI models against existing empirical correlations, concluding that ANN-based models provide significantly higher accuracy with lower Average Absolute Percentage Error (AAPE).

---

## Research Problem

Standard productivity correlations often yield high uncertainties when applied to complex H & ML well geometries due1 to their intricate flow patterns. While reservoir simulation is a robust tool, it is computationally intensive and requires specialized expertise, creating a need for faster, more accurate predictive models using AI.

## Objectives

- Forecast production performance in terms of oil flow rates in H & ML wells with high accuracy using different AI models.
- Collect actual data including reservoir parameters, well configurations, fluid properties, and rate test measurements from various under-saturated reservoirs.
- Compare results from AI models against established analytical correlations to determine the most accurate prediction method.
- Perform rigorous statistical and graphical error analyses on the comparison results.
- Derive new empirical correlations from ANN modeling for future industry use.
- Evaluate the performance of existing empirical correlations for estimating oil flow rates in horizontal and multilateral wells.

## Methods

The study follows a multi-step workflow: (1) Data collection of surface/subsurface parameters (oil rate, water cut, gas-oil ratio, wellhead pressures, ESP frequency, choke size) and reservoir properties (viscosity, formation volume factor, pressure, thickness, skin factor, permeability). (2) Selection of independent variables based on inflow performance equations. (3) Data preparation for a database of 180 H wells and 50 ML wells across nine fields. (4) Estimation of oil flow rates using eight analytical correlations (e.g., Borisov, Joshi, Renard, Economides, Butler, Furui, Escobar). (5) Development of AI models using Matlab, including ANN (with various training functions like trainlm, traingd, traingdx, trainbfg, trainscg, trainoss, trainrp), Fuzzy Logic (using Cluster Radius method), Decision Tree, and SVM (using Gaussian Kernel). (6) Statistical and graphical comparison of AI results vs. correlations against actual field data.

## Data and Materials

Data from 230 wells in total: 180 H wells and 50 ML wells across nine different under-saturated reservoirs/fields. Parameters include surface measurements (wellhead pressure, ESP frequency, choke size), reservoir properties (viscosity, formation factor, pressure, thickness, skin, permeability), and well geometry (number of laterals, horizontal length, hole diameter).

## Key Findings

- All AI models were capable to predict oil rates with errors lower than the existing analytical correlations. ([[2018-al-mashhad|Al-Mashhad, 2018, p. 18]])
- Artificial Neural Network (ANN) models provided the highest accuracy among all tested AI techniques. ([[2018-al-mashhad|Al-Mashhad, 2018, p. 18]])
- The lowest Average Absolute Percentage Error (AAPE) for ANN was 6.9%, compared to a minimum of 38% in existing correlations. ([[2018-al-mashhad|Al-Mashhad, 2018, p. 18]])
- The Arabic summary noted an AAPE of 9.6% for ANN models, while the corresponding lowest error for mathematical formulas was 83%. ([[2018-al-mashhad|Al-Mashhad, 2018, p. 20]])
- The 'trainlm' and 'trainscg' functions were identified as providing the best results in the study. ([[2018-al-mashhad|Al-Mashhad, 2018, p. 43]])
- Hyperbolic Tangent Sigmoidal (tansig) was found to provide lower error than other activation functions for ANN. ([[2018-al-mashhad|Al-Mashhad, 2018, p. 39]])
- Existing correlations showed high error rates, with the Butler correlation yielding the highest AAPE of 61.4% and the Furui method showing the lowest R2 of 0.1. ([[2018-al-mashhad|Al-Mashhad, 2018, p. 50]])
- ANN models outperformed all other AI techniques for H wells, achieving an AAPE of 6.9% on testing data. ([[2018-al-mashhad|Al-Mashhad, 2018, p. 76]])
- SVM provided the best estimation for ML wells among AI models, with an R2 of 0.83 and AAPE of 11.7%. ([[2018-al-mashhad|Al-Mashhad, 2018, p. 63]])
- The proposed ANN-based empirical correlation achieved a low AAPE of 8.3% for H wells and 8.9% for the combined dataset. ([[2018-al-mashhad|Al-Mashhad, 2018, p. 106]])
- A total of 1840 points were utilized from seven input parameters to predict one target: oil flow rate (Qo). ([[2018-al-mashhad|Al-Mashhad, 2018, p. 52]])

## Limitations

The study was conducted on undersaturated reservoirs; the author recommends future validation on saturated reservoirs with two-phase conditions.

## Recommendations and Future Work

- Test the new models in other fields with different well types.
- Validate the developed model on saturated reservoirs with two phase condition.
- Predict flow rate and contribution from each lateral in multilateral wells using surface and downhole data.

## Related Concepts

- [[neural-networks]]
- [[fuzzy-logic]]
- [[support-vector-machine]]
- [[petrophysics]]
- [[reservoir-engineering]]
- [[saudi-arabia]]
- [[petroleum-engineering]]
