---
type: source
id: "140949"
title: "Prediction of Lost Circulation Zones Using Artificial Intelligence Techniques"
author: "Abdulmalek Ahmed Saif Ahmed"
year: 2019
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Salaheldin Elkatatny"
committee_members: []
source_file: "raw/140949 - Prediction of Lost Circulation Zones Using Artificial Intelligence Techniques.pdf"
url: "https://eprints.kfupm.edu.sa/140949"
study_area: "onshore field"
keywords:
  - Lost Circulation
  - Artificial Intelligence
  - Neural Networks
  - Support Vector Machine
  - Fuzzy Logic
  - Functional Networks
  - Prediction
  - Radial Basis Function
  - Drilling Parameters
techniques:
  - neural-networks
  - radial-basis-function
  - fuzzy-logic
  - support-vector-machine
  - functional-networks
  - petrophysics
  - mathematical-modeling
  - machine-learning-geoscience
  - matlab
  - rbf
  - fl
  - fn
tags:
  - degree/ms
  - location/onshore-field
  - technique/artificial-neural-network
  - technique/support-vector-machine
  - technique/fuzzy-logic
  - technique/function-analysis
  - technique/neural-networks
  - technique/functional-networks
  - technique/machine-learning-geoscience
  - technique/matlab
  - theme/reservoir-engineering
  - theme/petroleum-engineering
  - theme/petrophysics
  - terminology/lost-circulation
  - terminology/petrophysics
  - terminology/petrophysics
  - terminology/mechanical-parameters
  - terminology/wellbore-integrity
status: ingested
---

# Prediction of Lost Circulation Zones Using Artificial Intelligence Techniques

**Summary**: The thesis explores the application of various Artificial Intelligence (AI) techniques, including Artificial Neural Networks (ANN), Support Vector Machines (SVM), Fuzzy Logic (FL), and Functional Networks (FN), to predict lost circulation zones in drilling operations. It reviews existing literature on how these models can identify thief zones and mitigate non-productive time caused by fluid loss.

---

## Research Problem

The identification of lost circulation zones during drilling operations is critical for managing drilling fluids; however, manual detection can be delayed by human error or lack of real-time indicators. This study addresses the need for automated prediction using AI techniques based on mechanical surface drilling parameters.

## Objectives

- Apply five different AI techniques (ANN, RBF, FL, SVM, FN) to predict lost circulation zones.
- Utilize mechanical surface drilling parameters (FLWPMP, ROP, RPM, SPP, TORQUE, WOB) as input features for prediction.
- Train and test the models using data from Well A (1417 points).
- Validate the models against two unseen wells (Well B and Well C).
- Compare the performance of all five AI techniques to identify the optimal prediction method.
- Identify the problem of identifying thief zones with higher accuracy

## Methods

The study follows a multi-step workflow: 1. Data Acquisition: Collecting well logs, surface drilling parameters (depth, hook height, flow pump, ROP, RPM, standpipe pressure, torque, and WOB), and mud properties. 2. Data Preparation: Removing outliers/noise using filters like Movmean, Gaussian, and Sgolay; selecting the 'drilling' phase only. 3. Statistical Analysis: Calculating mean, standard deviation, skewness, etc., to understand data distribution. 4. Data Division: Splitting data into 75% training and 25% testing sets. 5. AI Implementation: Implementing ANN (testing various neurons/functions), RBF (varying spread/neurons), Fuzzy Logic (Genfis 1 & 2), SVM (adjusting C, Lambda, Epsilon), and Functional Networks (evaluating multiple methods like FNBFM, FNFBM, etc.). 6. Evaluation: Comparing models using Correlation Coefficient (R) and Root Mean Squared Error (RMSE).

## Data and Materials

The study utilized more than 4500 real field data points from three wells. Specifically: Well A contained 1417 points for training/testing; Well B contained 2872 points (or 2067 in loss zones + 745 non-loss); and Well C contained 1295 points (or 863 in loss zones + 400 non-loss). The input features were six mechanical surface drilling parameters: flow pump (FLWPMP), rate of penetration (ROP), string rotary speed (RPM), standpipe pressure (SPP), drilling torque (TORQUE), and weight on bit (WOB).

## Key Findings

- All five AI methods (ANN, RBF, FL, SVM, FN) were found to predict lost circulation zones with high accuracy, achieving correlation coefficients (R) > 0.980 and RMSE < 0.088. ([[2019-ahmed|Ahmed, 2019, p. 20]])
- ANN successfully predicted loss zones in unseen Well B with R = 0.958 and RMSE = 0.145. ([[2019-ahmed|Ahmed, 2019, p. 20]])
- Functional Networks (FN) and Support Vector Machine (SVM) were identified as the best tools among the tested methods, achieving high performance with R = 0.997 and RMSE = 0.0376. ([[2019-ahmed|Ahmed, 2019, p. 20]])
- The FN method was noted for its advantage of having a shorter prediction time compared to other AI techniques. ([[2019-ahmed|Ahmed, 2019, p. 20]])
- Artificial Neural Networks (ANN) can estimate the number of fluid losses with a correlation coefficient of 0.95 in training and 0.82 in validation for the Maroun oil field. ([[2019-ahmed|Ahmed, 2019, p. 66]])
- A second ANN model for determining the type of losses in the Maroun oil field achieved a correlation coefficient of 0.99 for training and 0.98 for testing. ([[2019-ahmed|Ahmed, 2019, p. 66]])
- Fuzzy logic was used to determine the severity of the losses based on permeability and porosity, identifying different levels of loss (minor, intensive, partial, catastrophic, serious). ([[2019-ahmed|Ahmed, 2019]])
- page_num_ref_in_text_not_found_but_context_is_67 ([[2019-ahmed|Ahmed, 2019]])
- The Movmean filter was identified as the best technique for smoothing data while preserving structure, specifically with a span of 5. ([[2019-ahmed|Ahmed, 2019, p. 100]])
- A training/testing split of 75%/25% yielded the highest correlation coefficient (R=0.987) and lowest RMSE (0.081) for ANN. ([[2019-ahmed|Ahmed, 2019, p. 105]])
- The selection of six specific parameters (FLWPMP, ROP, RPM, SPP, TORQUE, WOB) provided the most consistent results across all AI models. ([[2019-ahmed|Ahmed, 2019, p. 107]])
- ANN with a one-layer configuration and five neurons achieved high accuracy (R=0.987, RMSE=0.081) on training data. ([[2019-ahmed|Ahmed, 2019, p. 111]])
- The RBF model using the Newrb function with 11 neurons and a spread of 0.8 achieved high accuracy (R=0.981, RMSE=0.097) on training data. ([[2019-ahmed|Ahmed, 2019, p. 125]])
- Fuzzy Logic using Genfis 2 (Sugeno fis) with a cluster radius of 0.5 and epoch size of 70 achieved R=0.993 and RMSE=0.053. ([[2019-ahmed|Ahmed, 2019, p. 130]])
- SVM using a Gaussian Kernel, Kernel Option of 30, and Regularization of 400 achieved perfect results on training data (R=1, RMSE=0). ([[2019-ahmed|Ahmed, 2019, p. 139]])

## Limitations

The study notes that while mechanical parameters are sufficient for prediction, formation properties are also major factors; however, their effects were included indirectly through the mechanical parameters. The author suggests more wells' data is required to further build and validate the models.

## Recommendations and Future Work

The author recommends obtaining more well data to improve model robustness and suggests further work on 'black box' techniques (FL, SVM, and FN) to extract their internal models for better interpretability in predicting lost circulation zones.

## Related Concepts

- [[artificial-neural-network]]
- [[support-vector-machine]]
- [[lost-circulation]]
- [[petroleum-engineering]]
- [[petrophysics]]
- [[fuzzy-logic]]
- [[radial-basis-function]]
- [[functional-networks]]
- [[mechanical-parameters]]
- [[wellbore-integrity]]
- [[machine-learning-geoscience]]
- [[neural-networks]]
- [[onshore-field]]
- [[saudi-arabia]]
