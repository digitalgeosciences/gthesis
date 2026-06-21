---
type: source
id: "139648"
title: "PREDICTION OF FLOW ZONE INDICATORS IN CARBONATE RESERVOIRS USING HYBRID MODELING"
author: "Ahmed Yousif Alsahaf"
year: 2015
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Abdulazeez Abdulraheem"
committee_members: []
source_file: "raw/139648 - Prediction of Flow Zone Indicators in Carbonate Reservoirs Using Hybrid Modeling.pdf"
url: "https://eprints.kfupm.edu.sa/139648"
study_area: "a giant carbonate reservoir in the Middle East"
keywords:
  - Flow Zone Indicator (FZI)
  - Carbonate Reservoirs
  - Artificial Intelligence (AI)
  - Hybrid Modeling
  - Petrophysical Data
  - Nuclear Magnetic Resonance (NMR) Logs
  - Permeability Prediction
  - Flow Zone Indicator
  - Artificial Intelligence
  - Neural Networks
  - Fuzzy Logic
  - Support Vector Machines
  - Feature Selection
  - Data Fusion
  - Feedforward Neural Networks
  - Feedforward Neural Network (FFNN)
techniques:
  - nmr
  - machine-learning-geoscience
  - neural-networks
  - support-vector-machine
  - fuzzy-logic
  - feature-selection
  - data-analysis
  - petrophysics
  - matlab
  - core-analysis
  - decision-tree
tags:
  - degree/ms
  - location/middle-east-region
  - technique/nmr
  - technique/machine-learning-geoscience
  - technique/neural-networks
  - technique/support-vector-machine
  - technique/fuzzy-logic
  - technique/feature-selection
  - technique/data-analysis
  - technique/petrophysics
  - technique/matlab
  - theme/carbonate-reservoirs
  - theme/petrophysics
  - terminology/flow-units
  - terminology/petrophysics
  - terminology/carbonate-reservoirs
  - terminology/petrophysics
  - terminology/porosity
  - terminology/permeability
status: ingested
---

# PREDICTION OF FLOW ZONE INDICATORS IN CARBONATE RESERVOIRS USING HYBRID MODELING

**Summary**: The thesis investigates the prediction of Flow Zone Indicators (FZI) in carbonate reservoirs using various artificial intelligence models, including Feedforward Neural Networks (FFNN), Support Vector Machines (SVM), and Type-2 Fuzzy Logic (T2FL). It evaluates both non-hybrid and hybrid models—incorporating feature selection algorithms like Functional Networks (FN), Decision Trees (DT), and Fuzzy Information Entropy (FIE)—to determine the most accurate method for predicting FZI from well log data.

---

## Research Problem

The accurate prediction of flow zone indicators (FZI) and permeability is critical for reservoir characterization in carbonate reservoirs, but traditional methods may not fully capture the complexity of these parameters. The study addresses how hybrid modeling and data fusion can improve predictive accuracy.

## Objectives

- Predict flow zone indicators in carbonate reservoirs using non-hybrid models.
- Utilize feature selection algorithms that produce a best subset of all available features to predict flow zone indicators.
- Use selected subsets to improve the predictions of the flow zone indicator (developing hybrid models).
- Enhance the hybrid models with the fusion of extra data.
- Predict permeability utilizing predicted FZI values as well as other input data.
- Develop and evaluate five non-hybrid AI models (FFNN, RBFNN, GRNN, SVM, T2FL) for FZI prediction.

## Methods

The study utilized 487 data points from a core and log data. Input features included 8 conventional logs (Gamma Ray, Laterolog, Neutron, SP, Acoustic, Bulk Density) and 20 NMR parameters. Feature selection algorithms (Functional Networks, Decision Trees, and Fuzzy Information Entropy) were used in the first stage of hybrid models to select optimal inputs. The second stage employed three AI techniques: Feedforward Neural Networks (FFNN), Support Vector Machines (SVM), and Type-2 Fuzzy Logic (T2FL). Data was pre-processed by removing outliers (3 standard deviations), converting resistivity to log-base, and normalizing Gamma Ray, Neutron, and Acoustic logs. Performance was evaluated using Correlation Coefficient (CC), Root Mean-Squared Error (RMSE), and Mean Absolute Error (MAE).

## Data and Materials

The study utilizes a dataset of petrophysical logs (including NMR) from carbonate reservoirs to predict FZI and permeability. Specific quantities of samples are not listed in the summary text provided, but the data includes GHE numerical classifications and FZI components as additional inputs for fusion.

## Key Findings

- The study utilized 28 different log types as inputs (8 conventional and 20 NMR) to improve the prediction of Flow Zone Indicator (FZI). ([[2015-alsahaf|Alsahaf, 2015, p. 48]])
- Hybrid models incorporating feature selection and data fusion were found to provide more accurate predictions for both FZI and permeability compared to non-hybrid models. ([[2015-alsahaf|Alsahaf, 2015, p. 19]])
- The optimal number of hidden neurons for the Feedforward Neural Network (FFNN) was determined to be 13 based on the highest correlation coefficient (CC). ([[2015-alsahaf|Alsahaf, 2015, p. 33]])
- For the Radial Basis Function Neural Network (RBFNN), a spread parameter of 3.0 and a goal value of 0.1 were identified as optimal. ([[2015-alsahaf|Alsahaf, 2015, p. 34]])
- The inclusion of NMR logs provided lithology independence to conventional logs, contributing to improved FZI prediction. ([[2015-alsahaf|Alsahaf, 2015, p. 50]])
- FFNN outperformed RBFNN and GRNN, providing the best results for prediction in terms of CC, RMSE, and MAE among non-hybrid models. ([[2015-alsahaf|Alsahaf, 2015, p. 59]])
- RBFNN showed the lowest correlation coefficient (CC) due to poor training performance. ([[2015-alsahaf|Alsahaf, 2015, p. 59]])
- The optimal learning rate for Type-2 Fuzzy Logic (T2FL) was determined to be 1.75, providing the highest CC and smallest difference between training/testing. ([[2015-alsahaf|Alsahaf, 2015, p. 56]])
- Hybridization significantly improved the prediction performance of SVM models; specifically, DT-SVM and FIE-SVM showed marked improvements over standard SVM. ([[2015-alsahaf|Alsahaf, 2015, p. 78]])
- The DT-FFNN hybrid model yielded the highest correlation coefficient (0.64) among all nine hybrid models tested. ([[2015-alsahaf|Alsahaf, 2015, p. 74]])
- FIE-T2FL produced the lowest correlation coefficient among the hybrid models. ([[2015-alsahaf|Alsahaf, 2015, p. 84]])
- All models, including FFNN and GRNN, showed good correlation for FZI values below 4 but tended to underestimate values above 4. ([[2015-alsahaf|Alsahaf, 2015, p. 60]])
- Data fusion using GHE classification improved correlation coefficients across all hybrid models, with the most significant improvements seen in models utilizing Functional Networks (FN) and Decision Trees (DT). ([[2015-alsahaf|Alsahaf, 2015, p. 87]])
- The inclusion of FZI components (RQI and pore volume to solid volume ratio) further improved correlation coefficients for all models. ([[2015-alsahaf|Alsahaf, 2015, p. 93]])
- The FFNN hybrid model with Functional Networks (FN-FFNN) achieved the highest correlation coefficient of 0.971 when using both GHE and FZI components as input. ([[2015-alsahaf|Alsahaf, 2015, p. 99]])

## Limitations

Hybridization did not yield successful results with Type-2 Fuzzy Logic (T2FL) models; training performance was poor and prediction was unsatisfactory.

## Recommendations and Future Work

Not stated in source

## Related Concepts

- [[nmr]]
- [[machine-learning-geoscience]]
- [[flow-units]]
- [[petrophysics]]
- [[carbonate-reservoirs]]
- [[middle-east-region]]
- [[neural-networks]]
- [[support-vector-machine]]
- [[feature-selection]]
- [[porosity]]
- [[permeability]]
