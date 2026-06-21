---
type: source
id: "139499"
title: "An Artificial Intelligence Approach in Predicting Water Saturation in Carbonate Reservoirs"
author: "Wael Ateeq Al-Harbi"
year: 2014
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Abdulazeez Abdulraheem"
committee_members: []
source_file: "raw/139499 - An Artificial Intelligence Approach in Predicting Water Saturation in Carbonate .pdf"
url: "https://eprints.kfupm.edu.sa/139499"
study_area: "Carbonate oil reservoir"
keywords:
  - Artificial Intelligence
  - Water Saturation
  - Carbonate Reservoirs
  - Well Logs
  - Core Data
  - Carbonate Reservoir
  - ANN
  - SVM
  - Fuzzy Logic
  - Functional Network
  - T2FLS
  - Prediction
  - Machine Learning
  - Carbonate Formations
  - Archie's Equation
  - Carbonate
  - Support Vector Machine
  - Type-2 Fuzzy Logic
techniques:
  - machine-learning-geoscience
  - neural-networks
  - support-vector-machine
  - matlab
  - petrophysics
  - core-analysis
  - well-log-analysis
  - t2fls
  - fn
  - cross-plot
  - multivariate-linear-regression
  - multi-variant-regression
  - type-2-fuzzy-logic
tags:
  - degree/ms
  - formation/carbonate-reservoirs
  - formation/none
  - location/none
  - technique/machine-learning-geoscience
  - technique/neural-networks
  - technique/support-vector-machine
  - technique/matlab
  - technique/petrophysics
  - technique/core-analysis
  - technique/well-log-analysis
  - technique/multi-variant-regression
  - technique/type-2-fuzzy-logic
  - theme/carbonate-reservoirs
  - theme/petrophysics
  - terminology/water-saturation
  - terminology/petrophysics
  - terminology/carbonate-reservoirs
status: ingested
---

# An Artificial Intelligence Approach in Predicting Water Saturation in Carbonate Reservoirs

**Summary**: The thesis explores the use of four different artificial intelligence (AI) techniques—Artificial Neural Networks (ANN), Support Vector Machines (SVM), Functional Networks, and Type-2 Fuzzy Logic Systems (T2FLS)—to predict water saturation in carbonate reservoirs. The study utilizes a combination of well log data and core analysis data from two carbonate wells to develop and compare these models for industrial application.

---

## Research Problem

Determining water saturation is a challenging petrophysical calculation, especially in carbonate reservoirs which possess complex pore systems (interparticle porosity and varying secondary dissolution voids). Existing methods like Archie's equation often fail in these environments, and direct measurement via sponge cores is expensive and logistically difficult.

## Objectives

- Develop a cost-effective new Artificial Intelligence (AI) model for the prediction of water saturation in carbonate oil reservoirs using well logs data and core analysis data.
- Evaluate and compare different AI techniques (ANN, SVM, T2FLS) for predicting water saturation in carbonate reservoirs.
- Perform parametric analysis to optimize the parameters of each AI model.
- Compare the performance of these models using statistical metrics like Correlation Coefficient (CC), Mean Absolute Error (MAE), Root Mean Square Error (RMSE), and Maximum Absolute Percentage Error (MAPE).
- Perform sensitivity analysis using Multivariate Linear Regression to identify key input features.
- Develop and evaluate hybrid systems combining different AI techniques to improve prediction accuracy.

## Methods

The study utilizes four AI techniques: Artificial Neural Networks (ANN), Support Vector Machines (SVM), Functional Networks, and Type-2 Fuzzy Logic Systems (T2FLS). These models were developed using Matlab software. The input layer consists of variables from well logs (Sonic, Resistivity, Density, PEF, Porosity, Gamma Ray) and core analysis data. A stratification function was used to ensure data randomness and avoid bias during training. Data was split into a 70% training set and a 30% testing/validation set. Hybrid modeling was also employed by using saturation outputs from Archie's equation as additional inputs to the AI models.

## Data and Materials

The study utilized well log data and core analysis data from two specific wells (well#1 and well#2) within a carbonate reservoir. The dataset included measurements of water saturation (Sw), depth, and various petrophysical logs such as Gamma Ray (GR), Resistivity (RT), Bulk Density (RHOB), and Porosity (PHIE).

## Key Findings

- The study identified four specific AI techniques for prediction: Artificial Neural Networks (ANN), Support Vector Machines (SVM), Functional Networks, and Type-2 Fuzzy Logic Systems (T2FLS). ([[2014-al-harbi|Al-Harbi, 2014, p. 25]])
- Artificial Neural Networks (ANN) are capable of constructing a solid relationship between input data and output data regardless of whether the relationship is linear or non-linear. ([[2014-al-harbi|Al-Harbi, 2014, p. 26]])
- Support Vector Machines (SVM) are noted for their ability to handle non-linear problems, ease of training, simple architecture, and stability to converge. ([[2014-al-harbi|Al-Harbi, 2014, p. 28]])
- Functional Networks use the MDL algorithm (minimum description length) to select the best subset from input data based on the strongest non-linear relationship. ([[2014-al-harbi|Al-Harbi, 2014, p. 29]])
- Type-2 Fuzzy Logic Systems (T2FLS) are described as a more advanced version of fuzzy logic, providing a new degree of dealing with uncertainties by allowing membership grades to be themselves fuzzy. ([[2014-al-harbi|Al-Harbi, 2014, p. 30]])
- The study utilized 198 data points from core analysis for the development and validation of the AI models. ([[2014-al-harbi|Al-Harbi, 2014, p. 36]])
- Well log parameters used as inputs included DT, RT, RHOB, PEF, PHIE, and GR. ([[2014-al-harbi|Al-Harbi, 2014, p. 37]])
- ANN outperformed all other AI techniques in terms of Correlation Coefficient (CC) and had the lowest values for RMSE, MAE, and MAPE. ([[2014-al-harbi|Al-Harbi, 2014, p. 47]])
- T2FLS was identified as the most underperforming model among the four tested techniques. ([[2014-al-harbi|Al-Harbi, 2014, p. 48]])
- Functional networks (FN) performed significantly better than T2FLS but were still less robust than ANN. ([[2014-al-harbi|Al-Harbi, 2014, p. 47]])
- Well#2 showed a higher degree of agreement with the AI models compared to well#1 across most techniques. ([[2014-al-harbi|Al-Harbi, 2014, p. 47]])
- The optimal number of hidden neurons for the ANN model was determined to be 6. ([[2014-al-harbi|Al-Harbi, 2014, p. 59]])
- The optimized parameters for T2FLS included a learning rate (alpha) of 0.048. ([[2014-al-harbi|Al-Harbi, 2014, p. 58]])
- The optimal SVM parameters were identified as C=14000, Lambda=0.0011, and epsilon=0.0007 with a polynomial kernel. ([[2014-al-harbi|Al-Harbi, 2014, p. 58]])
- T2FLS model consistently predicted water saturation values above 0.7, showing a gap in predicting lower saturation levels. ([[2014-al-harbi|Al-Harbi, 2014, p. 73]])

## Limitations

The thesis notes that direct measurement of water saturation from sponge cores is expensive and requires extensive monitoring. It also mentions that many existing petrophysical models (like Archie's) are primarily based on sandstone reservoirs, making them less reliable for carbonate systems.

## Recommendations and Future Work

- Incorporate NMR log parameters as additional input data to better characterize pore size distribution.
- Select specific wells within the field location that possess high-quality core data for training AI models to improve prediction accuracy.
- Explore additional hybrid optimization techniques to enhance the AI model.

## Related Concepts

- [[machine-learning-geoscience]]
- [[neural-networks]]
- [[support-vector-machine]]
- [[fuzzy-logic]]
- [[water-saturation]]
- [[petrophysics]]
- [[carbonate-reservoirs]]
- [[saudi-arabia]]
- [[type-2-fuzzy-logic]]
- [[matlab]]
