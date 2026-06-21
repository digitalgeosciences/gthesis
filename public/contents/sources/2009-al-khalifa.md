---
type: source
id: "136177"
title: "Application of Neural Network for Two Phase Flow Through Chokes"
author: "Mohammed Abdul Jaleel Al-Khalifa"
year: 2009
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Muhammad Al-Marhoun"
committee_members: []
source_file: "raw/136177 - Application of Neural Network for Two Phase Flow Through Chokes.pdf"
url: "https://eprints.kfupm.edu.sa/136177"
study_area: "Middle East (various fields)"
keywords:
  - Neural Network
  - Two Phase Flow
  - Chokes
  - Artificial Neural Network (ANN)
  - Flow Rate Estimation
  - Choke Size Prediction
  - Artificial Neural Network
  - Choke
  - Flow Prediction
  - Wellhead Pressure
  - Gas-Liquid Ratio
  - Production Data
  - Choke Size
  - Flow Rate
  - Empirical Correlation
  - Regression Analysis
  - Robust Fit
techniques:
  - neural-networks
  - matlab
  - statistical-analysis
  - graphical-analysis
  - regression-analysis
  - data-analysis
  - robust-fit
  - mathematical-modeling
tags:
  - degree/ms
  - location/middle-east-region
  - technique/neural-networks
  - technique/matlab
  - technique/statistical-analysis
  - technique/graphical-analysis
  - technique/regression-analysis
  - technique/data-analysis
  - technique/robust-fit
  - technique/mathematical-modeling
  - theme/petroleum-engineering
  - theme/reservoir-engineering
  - terminology/multiphase-flow
  - terminology/petroleum-engineering
  - terminology/petrophysics
  - terminology/multi-phase-flow
  - terminology/reservoir-engineering
status: ingested
---

# Application of Neural Network for Two Phase Flow Through Chokes

**Summary**: The thesis explores the application of artificial neural networks (ANN) to predict two-phase flow rates through wellhead chokes. It evaluates various existing empirical correlations and utilizes a large dataset from 27 different fields in the Middle East to train and validate an ANN model for predicting oil and gas flow based on choke size, pressure, and gas-liquid ratio.

---

## Research Problem

The accurate prediction of flow rates in two-phase flow systems through chokes is a complex problem due to the non-linear nature of multiphase flow. Existing empirical models often have varying degrees of accuracy, necessitating the evaluation of different modeling techniques (regression, robust fit) and machine learning approaches.

## Objectives

- Review theories and correlations available in the literature for two-phase flow through chokes.
- Develop new Artificial Neural Network (ANN) models for two-phase flow through chokes using data from several fields and reservoirs.
- Optimize ANN model topology to determine the best architecture (number of hidden layers and neurons).
- Evaluate and compare the newly developed ANN models against existing empirical correlations using statistical and graphical analysis.
- Evaluate existing empirical correlations for multi-phase flow through chokes.
- Collect and preprocess large-scale production data from various Middle East fields.

## Methods

The study utilizes Artificial Neural Networks (ANN) implemented in Matlab software. Two specific models were developed: one for flow rate estimation and one for choke size prediction. The methodology involved data acquisition from Middle East oil wells, including parameters such as flow rates, wellhead pressure, temperature, choke sizes, and fluid properties. Data was split into a ratio of 80% for training, 10% for validation, and 10% for testing. The ANN architectures were optimized by varying the number of neurons in multiple hidden layers. Comparison with existing literature correlations (e.g., Gilbert, Omana, Fortunati, Ashford & Peirce) was performed using statistical analysis (Average Absolute Percent Error, Root Mean Square Error) and graphical analysis (cross plots, scatter/overlay plots).

## Data and Materials

The study utilizes a large dataset of flow rate measurements (up to 6000 samples) and corresponding choke sizes. Data are categorized into training, validation, and testing sets for the neural network model. Multiple empirical models are compared against these datasets across various flow rates (measured in BPD).

## Key Findings

- The ANN models were found to outperform all existing correlations in the literature for both choke size prediction and flow rate estimation. ([[2009-al-khalifa|Al-Khalifa, 2009, p. 6]])
- The ANN model for choke size prediction achieved an average absolute percent error (AAPE) of 3.70% and a correlation coefficient (R) of 0.991. ([[2009-al-khalifa|Al-Khalifa, 2009, p. 118]])
- A total of 4031 data points were used to develop the models, with a distribution of 80% training, 10% validation, and 10% testing. ([[2009-al-khalifa|Al-Khalifa, 2009, p. 6]])
- The study identified that existing correlations like Gilbert (1954) are highly sensitive to choke diameter, where errors of 1/128th of an inch can cause 5-20% error in wellhead pressure estimates. ([[2009-al-khalifa|Al-Khalifa, 2009, p. 33]])
- The Omana correlation (1968) is limited to upstream pressures of 400-1000 psig, maximum flow rates of 800 bbl/day, and choke sizes from 4/64 to 14/64. ([[2009-al-khalifa|Al-Khalifa, 2009, p. 39]])
- The study identified several empirical correlations for choke flow, including the Omar & Dokla models which are more accurate when using pressure drop instead of upstream pressure. ([[2009-al-khalifa|Al-Khalifa, 2009, p. 47]])
- A dataset of 4031 points remained after screening and filtration to remove outliers from the initial collection of over 5,000 data points. ([[2009-al-khalifa|Al-Khalifa, 2009, p. 46]])
- The range of oil flow rates in the analyzed dataset was between 268 and 26,400 STBD. ([[2009-al-khalifa|Al-Khalifa, 2009, p. 47]])
- The gas-liquid ratio (GLR) in the study ranged from 10 to 5,812 SCF/STB. ([[2009-al-khalifa|Al-Khalifa, 2009, p. 47]])
- Upstream tubing pressure values varied significantly across the dataset, ranging from 38 to 3,141 psia. ([[2009-al-khalifa|Al-Khalifa, 2009, p. 47]])
- The study utilized a variety of activation functions for the ANN, including sigmoid (tanh and log-sigmoid) and threshold functions. ([[2009-al-khalifa|Al-Khalifa, 2009, p. 54]])
- The ANN model for flow rate estimation achieved an AAPE of 6.7% and a correlation coefficient (R) of 0.986. ([[2009-al-khalifa|Al-Khalifa, 2009, p. 118]])
- Several empirical correlations, such as the 'Omana' correlation, showed high errors in flow rate estimation (up to 4242.2% maximum error). ([[2009-al-khalifa|Al-Khalifa, 2009, p. 114]])
- The 'Ros' correlation was found to be the most accurate among empirical correlations for choke size prediction with an AAPE of 8.53%. ([[2009-al-khalifa|Al-Khalifa, 2009, p. 110]])
- Robust fit and regression analysis significantly improved the accuracy of existing empirical correlations, reducing some AAPE values from over 20% to under 10%. ([[2009-al-khalifa|Al-Khalifa, 2009, p. 112]])

## Limitations

The reliability of the new models is highest within the specific range of the data used during development.

## Recommendations and Future Work

The model with the lowest average absolute percent error (the ANN models) is recommended for future industry utilization.

## Related Concepts

- [[neural-networks]]
- [[matlab]]
- [[multiphase-flow]]
- [[petroleum-engineering]]
- [[middle-east-region]]
- [[petrophysics]]
- [[regression-analysis]]
- [[reservoir-engineering]]
- [[multi-phase-flow]]
