---
type: source
id: "136378"
title: "NEW MODELS FOR ESTIMATING THE DEW-POINT PRESSURE OF GAS CONDENSATE RESERVOIRS"
author: "Mohammed Abdullah Al-Dhamen"
year: 2010
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Prof. Muhammad A. Al-Marhoun"
committee_members: []
source_file: "raw/136378 - NEW MODELS FOR ESTIMATING THE DEW-POINT PRESSURE OF GAS CONDENSATE RESERVOIRS.pdf"
url: "https://eprints.kfupm.edu.sa/136378"
study_area: "Middle East fields"
keywords:
  - Dew-point pressure
  - Gas condensate reservoirs
  - Artificial Neural Networks
  - Nonparametric models
  - Correlation models
  - artificial neural network
  - ACE algorithm
  - nonparametric model
techniques:
  - artificial-neural-network
  - regression-analysis
  - cme-experiment
  - mathematical-modeling
  - machine-learning-geoscience
  - neural-networks
tags:
  - degree/ms
  - location/middle-east-region
  - technique/artificial-neural-network
  - technique/regression-analysis
  - technique/mathematical-modeling
  - technique/machine-learning-geoscience
  - technique/neural-networks
  - theme/reservoir-engineering
  - theme/petroleum-engineering
  - terminology/dew-point
  - terminology/petrophysics
  - terminology/dew-point-pressure
status: ingested
---

# NEW MODELS FOR ESTIMATING THE DEW-POINT PRESSURE OF GAS CONDENSATE RESERVOIRS

**Summary**: The thesis develops three new models—traditional correlations, nonparametric (ACE) models, and artificial neurons networks—to predict dew-point pressure in gas condensate reservoirs. The study utilizes 113 data sets from Constant Mass Expansion (CME) experiments to evaluate these methods against existing empirical correlations.

---

## Research Problem

The accurate prediction of dew-point pressure is essential for fluid characterization and production system design, but laboratory measurements (CME/CVD) are often expensive or unavailable. Existing models frequently rely on complex gas compositions rather than easily obtained parameters like reservoir temperature and specific gravity.

## Objectives

- Evaluate the most commonly used models to estimate the dew-point pressure of condensate gas.
- Develop new models utilizing three approaches: traditional correlation, nonparametric approach, and artificial neural networks.
- Predict dew-point pressure as a function of easily obtained parameters (gas-oil ratio, reservoir temperature, gas specific gravity, and heptanes plus gravity).
- Perform error analysis and graphical analyses to compare the performance of new models against existing empirical ones.
- Develop a traditional correlation model to estimate dew-point pressure based on reservoir temperature, gas-oil ratio, gas specific gravity, and C7+ specific gravity.
- Develop a nonparametric model using the ACE algorithm to determine optimal transformation functions for prediction.

## Methods

The study utilizes a dataset of 113 data points. The traditional correlation was developed using non-linear multiple least square regression analysis. The nonparametric model (ACE) involved creating transformation functions for independent variables (reservoir temperature, gas-oil ratio, gas specific gravity, and condensate specific gravity). The ANN model utilized a three-layer architecture (input, two hidden layers with 5 and 8 neurons respectively, and one output layer), trained using the backpropagation algorithm and Levenberg-Marquardt training algorithm. Data were normalized between 0.2 and 0.8 to prevent ill-conditioning.

## Data and Materials

A total of 113 data sets obtained from Constant Mass Expansion (CME) experiments from Middle East fields were used. The dataset included reservoir temperatures ranging from 100 to 309 °F, gas-oil ratios from 103.536 to 3,321 SCF/STB, gas specific gravity from 0.64 to 0.82, and condensate specific gravity from 0.73 to 0.81.

## Key Findings

- The artificial neural network developed in this study showed the best results among all other models compared during evaluation. ([[2010-al-dhamen|Al-Dhamen, 2010, p. 10]])
- The data used for developing the models covers a reservoir temperature from 100 to 309 °F, gas oil ratios from 103.536 to 3,321 SCF/STB, gas specific gravity from 0.64 to 0.82 and condensate specific gravity from 0.73 to 0.81. ([[2010-al-dhamen|Al-Dhamen, 2010, p. 10]])
- The ACE (Alternating Conditional Expectations) algorithm provides a method for estimating optimal transformation for multiple regression that results in maximum correlation between a dependent variable and multiple independent variables. ([[2010-al-dhamen|Al-Dhamen, 2010, p. 23]])
- The artificial neural network (ANN) model produced the best results among all models, with an average absolute error of 6.5% and a skewness of -0.5. ([[2010-al-dhamen|Al-Dhamen, 2010, p. 68]])
- The traditional correlation model had an average absolute error of 9.6% and a skewness of -1.9. ([[2010-al-dhamen|Al-Dhamen, 2010, p. 67]])
- The ACE model (nonparametric) showed an average absolute error of 9.5% with a skewness of -0.5. ([[2010-al-dhamen|Al-Dhamen, 2010, p. 67]])
- Conventional correlations depending on fluid properties failed to predict dew-point pressure below 4000 psia. ([[2010-al-dhamen|Al-Dhamen, 2010, p. 89]])
- The new correlation and the ACE model both showed an exponential relationship between dew-point pressure and gas-oil ratio. ([[2010-al-dhamen|Al-Dhamen, 2010, p. 68]])
- The ANN model showed a sigmoid function relationship between dew-point pressure and gas-oil ratio. ([[2010-al-dhamen|Al-Dhamen, 2010, p. 68]])
- Nemeth and Kennedy correlation had an average absolute error of 13.3% with original coefficients, reduced to 6.7% with new coefficients. ([[2010-al-dhamen|Al-Dhamen, 2010, p. 65]])
- Elsharkawy correlation showed average absolute errors of 16% (original) and 10.7% (new). ([[2010-al-dhamen|Al-Dhamen, 2010, p. 65]])
- Marruffo, Maita, Him and Rojas model showed a reduction in average absolute error from 23% (original) to 9.8% (new). ([[2010-al-dhamen|Al-Dhamen, 2010, p. 66]])

## Limitations

The nonparametric ACE model was not fully successful due to difficulties in fitting the transformation parameters.

## Recommendations and Future Work

Not stated in source

## Related Concepts

- [[artificial-neural-network]]
- [[regression-analysis]]
- [[dew-point]]
- [[petrophysics]]
- [[middle-east-region]]
- [[reservoir-engineering]]
- [[neural-networks]]
- [[mathematical-modeling]]
- [[dew-point-pressure]]
