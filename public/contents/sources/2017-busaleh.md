---
type: source
id: "140569"
title: "Prediction of Capillary Pressure for Arabian Oil Carbonate Reservoirs using Artificial Intelligence"
author: "Yasser Ridha BuSaleh"
year: 2017
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Abdulazeez Abdulraheem"
committee_members: []
source_file: "raw/140569 - Prediction of Capillary Pressure for Arabian Oil Carbonate Reservoirs using Arti.pdf"
url: "https://eprints.kfupm.edu.sa/140569"
study_area: "Arabian Oil Carbonate Reservoirs"
keywords:
  - Capillary Pressure
  - Artificial Intelligence
  - Carbonate Reservoirs
  - Machine Learning
  - Neural Networks
  - Fuzzy Logic
  - ANN
  - Decision Tree
  - NNCP
  - Carbonate Reservoir
  - Uni-modal
  - Bi-modal
techniques:
  - mercury-injection-capillary-pressure
  - machine-learning-geoscience
  - neural-networks
  - fuzzy-logic
  - decision-tree
  - support-vector-machine
  - matlab
  - nncp
  - saturation-height-modeling
  - core-analysis
  - interpolation
tags:
  - degree/ms
  - formation/arab-c-reservoir
  - formation/arab-d-reservoir
  - location/saudi-arabia
  - location/arabian-basin
  - technique/mercury-injection-capillary-pressure
  - technique/machine-learning-geoscience
  - technique/neural-networks
  - technique/fuzzy-logic
  - technique/decision-tree
  - technique/support-vector-machine
  - technique/matlab
  - technique/core-analysis
  - technique/petrophysics
  - theme/carbonate-reservoirs
  - theme/petrophysics
  - terminology/saturation-height-modeling
  - terminology/petrophysics
  - terminology/petrophysics
status: ingested
---

# Prediction of Capillary Pressure for Arabian Oil Carbonate Reservoirs using Artificial Intelligence

**Summary**: The thesis investigates the use of various Artificial Intelligence (AI) techniques, including Artificial Neural Networks (ANN), Fuzzy Logic, and Support Vector Machines, to predict capillary pressure in Arabian carbonate reservoirs. By utilizing a dataset of 202 core samples from mercury injection tests, the study aims to provide an accurate prediction method that avoids the destruction of physical core samples.

---

## Research Problem

The difficulty of accurately predicting capillary pressure curves for core samples, especially those exhibiting complex bi-modal behavior, using standard mathematical averaging techniques like the J-function.

## Objectives

- Develop a model using artificial intelligence to predict drainage capillary pressure for Arabian carbonate reservoirs from conventional core analysis data.
- Identify rock modality (uni-modal and bi-modal) in the reservoir samples.
- Identify rock types based on flow units using Rock Quality Index (RQI) and Flow Zone Indicator (FZI).
- Evaluate several AI techniques (ANN, Fuzzy Logic, SVM, Decision Tree, etc.) to determine the most accurate method for predicting capillary pressure.
- Evaluate the use of Artificial Neural Networks (ANN) with a trainlm algorithm to predict capillary pressure.
- Develop and evaluate a new technique, Nearest Neighbor Curve Prediction (NNCP), for predicting capillary pressure curves based on similarity analysis.

## Methods

The study utilized a dataset of 202 core samples from mercury injection tests. Data were filtered to include only drainage data and converted to field units (porosity in fraction, permeability in mD, grain density in lb/ft3). Samples were classified into uni-modal and bi-modal categories based on the Thomeer model. Rock types were identified using RQI and FZI calculations. Seven AI techniques were evaluated: Artificial Neural Networks (using algorithms like trainlm, trainbr, trainscg, trainoss, traingd, traingdx), Fuzzy Logic (Grid Partitioning and Cluster Radius), Fuzzy Logic Type-2, Decision Trees, Support Vector Machines, Functional Networks, and Nearest Neighbor Curve Prediction. Performance was assessed using statistical metrics including Standard Deviation (SD), Mean Absolute Error (MAE), Root Mean Square Error (RMSE), and Coefficient of Determination (R2).

## Data and Materials

202 core samples with corresponding capillary pressure vs. saturation curves; 65 uni-modal samples; 137 bi-modal samples; 50-point capillary pressure vs. saturation curves per sample.

## Key Findings

- The study identified 66 uni-modal and 136 bi-modal samples among the 202 core samples analyzed. ([[2017-busaleh|BuSaleh, 2017, p. 47]])
- ANN - trainlm with a 2-layer architecture showed excellent results in training and testing for all three data categories (uni-modal, bi-modal, and combined). ([[2017-busaleh|BuSaleh, 2017, p. 59]])
- The Decision Tree model achieved the highest R2 values in training (1.00 for uni-modal, 0.99 for bi-modal, 1.00 for combined) but was found to be 'memorizing' data as it performed poorly in testing. ([[2017-busaleh|BuSaleh, 2017, p. 53]])
- Support Vector Machine (SVM) failed to complete its run on the combined modal dataset, indicating an inability to find a solution for that specific data configuration. ([[2017-busaleh|BuSaleh, 2017, p. 56]])
- The ANN - trainbr model showed acceptable results with R2 values of 0.90 (uni-modal training), 0.81 (bi-modal training), and 0.78 (combined training). ([[2017-busaleh|BuSaleh, 2017, p. 53]])
- The highest Mean Absolute Error (MAE) in the testing phase for uni-modal data was observed in the trainlm algorithm at 16,291. ([[2017-busaleh|BuSaleh, 2017, p. 52]])
- Decision tree technique showed 81% accuracy in training and 31% in testing for combined models data. ([[2017-busaleh|BuSaleh, 2017, p. 64]])
- The J-function method failed to represent bi-modal behavior when used on averaged data, making it unsuitable for predicting bi-modal curves. ([[2017-busaleh|BuSaleh, 2017, p. 79]])
- NNCP produced the closest curve to target data with an error of 1.77% in uni-modal class #1 samples. ([[2017-busaleh|BuSaleh, 2017, p. 83]])
- NNCP showed excellent results for bi-modal class #3, with errors ranging from 1.45% to 7.6%. ([[2017-busaleh|BuSaleh, 2017, p. 89]])
- NNCP outperformed the J-function method in all tested classes (1, 2, 3, 4, and 5) for both uni-modal and bi-modal systems. ([[2017-busaleh|BuSaleh, 2017, p. 132]])

## Limitations

The study noted that results were not satisfactory when individual curves were plotted using some techniques; the J-function method is limited in its ability to represent bi-modal behavior due to averaging processes that mix different porosity systems.

## Recommendations and Future Work

- Apply different rock classification methods using the NNCP technique.
- Develop a way to statistically compare new techniques to lab data when the number of x-axis points are not similar.
- Explore the strength of different AI techniques with larger datasets.

## Related Concepts

- [[mercury-injection-capillary-pressure]]
- [[machine-learning-geoscience]]
- [[saturation-height-modeling]]
- [[petrophysics]]
- [[arab-c-reservoir]]
- [[saudi-arabia]]
- [[carbonate-reservoirs]]
- [[core-analysis]]
- [[arabian-basin]]
