---
type: source
id: "142176"
title: "DATA MINING APPLICATIONS OF NMR DATA FOR PETROPHYSICAL DATA PREDICTION"
author: "Muhammad Aliyu Suleiman"
year: 2022
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Prof. Mohamed Mahmoud"
committee_members: []
source_file: "raw/142176 - DATA MINING APPLICATIONS OF NMR DATA FOR PETROPHYSICAL DATA PREDICTION.pdf"
url: "https://eprints.kfupm.edu.sa/142176"
study_area: "Not stated in source"
keywords:
  - Nuclear Magnetic Resonance (NMR)
  - T2 relaxation time
  - permeability
  - rock type
  - pore throat size
  - machine learning
  - Artificial Neural Networks
  - petrophysical properties
  - NMR data
  - petrophysical data prediction
  - artificial intelligence
  - neural networks
techniques:
  - nmr
  - capillary-pressure
  - well-log-analysis
  - matlab
  - neural-networks
  - machine-learning-geoscience
  - petrophysics
  - core-analysis
tags:
  - degree/ms
  - technique/nmr
  - technique/capillary-pressure
  - technique/well-log-analysis
  - technique/matlab
  - technique/neural-networks
  - technique/machine-learning-geoscience
  - technique/petrophysics
  - technique/core-analysis
  - theme/petrophysics
  - terminology/porosity
  - terminology/permeability
  - terminology/lithofacies
  - terminology/pore-throat-size
  - terminology/petrophysics
  - terminology/rock-types
status: ingested
---

# DATA MINING APPLICATIONS OF NMR DATA FOR PETROPHYSICAL DATA PREDICTION

**Summary**: The thesis explores the application of artificial intelligence, specifically various neural network architectures (FFNN, CFNN, ELMNN), to predict petrophysical properties including permeability, rock type, and pore throat size from NMR data. The study concludes that machine learning models, particularly those incorporating calculated variables and ensemble approaches, significantly outperform traditional empirical correlations like SDR and Timur-Coates.

---

## Research Problem

Predicting petrophysical parameters such as permeability, pore throat size, and rock types is challenging in the field, especially for carbonates where properties vary significantly with depth. Traditional laboratory tests are expensive and time-consuming, necessitating more efficient methods like NMR data analysis combined with machine learning to provide accurate predictions from well logs.

## Objectives

- Use artificial intelligence techniques (Regression and Clustering) specifically Artificial Neural Networks (ANN) to predict permeability, pore throat size, and identify rock type based on NMR T2 relaxation times.
- Develop a mathematical model derived from the trained AI models that can be used independently.
- Establish a workflow for estimating rock and fluid petrophysical properties using integrated analysis of NMR T2 distribution curves and laboratory data.
- Develop and compare different neural network architectures (FFNN, CFNN, ELMNN) for permeability prediction.
- Implement an ensemble model to improve permeability prediction by first classifying samples into sandstone or carbonate.
- Predict rock types using the Flow Zone Indicator (FZI) method as a target for classification models.

## Methods

The study utilizes a dataset of 186 core samples (sandstone, limestone, dolomite, chalk) with measured permeability, porosity, and T2 relaxation times. Data preprocessing included selecting features like the full T2 distribution, T2LM, T2 peak, T2 range, and T2RI. Three ANN architectures were compared: Feed Forward Neural Network (FFNN), Cascade-forward (CFNN), and Elman (ELMNN). The models were optimized using Bayesian regularization back-propagation (Trainbr) in MATLAB. Performance was evaluated using Correlation Coefficient (CC), Coefficient of Determination (R2), and Root Mean Square Error (RMSE). A two-step ensemble model was also explored to improve accuracy.

## Data and Materials

186 core samples consisting of sandstone (clean, shaly) and carbonate rocks (limestone, dolomite, chalk). Data included T2 relaxation time distributions (121 pins), gas porosity, permeability measurements, and MICP data for pore throat size determination.

## Key Findings

- The Elman type neural network with Bayesian regularization back-propagation (ELMNN) outperformed other models, achieving a CC of 0.904 and an R2 of 0.82 for permeability prediction using the full T2 distribution. ([[2022-suleiman|Suleiman, 2022, p. 51]])
- The two-step ensemble permeability prediction model achieved high accuracy with 0.97 CC, 0.94 R2, and 0.92 RMSE. ([[2022-suleiman|Suleiman, 2022, p. 17]])
- The rock typing model reached an accuracy of 90% for identifying petrophysical rock types. ([[2022-suleiman|Suleiman, 2022, p. 17]])
- The pore throat size prediction model achieved a high accuracy of 0.985 CC, 0.97 R2, and 0.016 RMSE. ([[2022-suleiman|Suleiman, 2022, p. 17]])
- A full T2 distribution was used for the first time to benefit from all information associated with the data, leading to improved model accuracy compared to using single parameters like T2LM. ([[2022-suleiman|Suleiman, 2022, p. 16]])
- The study identified that the correlation coefficient (CC) increases when predicting log permeability (log K) rather than raw permeability values. ([[2022-suleiman|Suleiman, 2022, p. 49]])
- Sensitivity analysis for the full T2 range model determined that a structure of 121 inputs, 8 hidden neurons, and 1 output was optimal for the ELMNN architecture. ([[2022-suleiman|Suleiman, 2022, p. 53]])
- The ensemble model for permeability prediction achieved a Correlation Coefficient (CC) of 0.97 and an RMSE of less than 0.92. ([[2022-suleiman|Suleiman, 2022, p. 68]])
- The classification model for sandstone/carbonate identification achieved an accuracy of 99.5% with only 2 misclassified samples out of 186. ([[2022-suleiman|Suleiman, 2022, p. 66]])
- For pore throat size prediction, the ELMAN network achieved a CC of 0.98543 and an RMSE of 0.016. ([[2022-suleiman|Suleiman, 2022, p. 87]])
- The inclusion of calculated variables (T2 mean log, peak value, range, area) significantly improved the accuracy of permeability prediction compared to raw T2 data. ([[2022-suleiman|Suleiman, 2022, p. 73]])
- The ANN models outperformed traditional empirical correlations; for example, the optimized ANN model achieved an R² of 0.8815 compared to 0.4145 for the SDR model and 0.4514 for the Timur-Coates model. ([[2022-suleiman|Suleiman, 2022, p. 81]])
- The addition of NMR porosity as an input variable to the calculated variables model improved the CC from 0.89 to 0.94 and reduced RMSE from 1.42 to 1.08. ([[2022-suleiman|Suleiman, 2022, p. 75]])

## Limitations

The prediction of permeability at lower values using the standard full T2 range model was noted as not sufficiently accurate, necessitating further investigation into input parameter sensitivity and the proposal of calculated variables to address non-linearity.

## Recommendations and Future Work

The study recommends the use of the Elman neural network with Bayesian regularization for predicting permeability from NMR data due to its superior performance over FFNN and CFNN. It also suggests that the derived models can be used independently as mathematical expressions for future field applications.

## Related Concepts

- [[nmr]]
- [[capillary-pressure]]
- [[neural-networks]]
- [[porosity]]
- [[permeability]]
- [[lithofacies]]
- [[pore-throat-size]]
- [[petrophysics]]
- [[machine-learning-geoscience]]
- [[rock-types]]
