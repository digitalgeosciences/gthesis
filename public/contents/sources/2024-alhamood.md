---
type: source
id: "143058"
title: "MACHINE LEARNING PREDICTION OF NMR POROSITY IN CARBONATE RESERVOIRS"
author: "HUSSAIN ALI ALHAMOOD"
year: 2024
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Mohammed Naser-Aldeen Mahmoud"
committee_members: []
source_file: "raw/143058 - MACHINE LEARNING PREDICTION OF NMR POROSITY IN CARBONATE RESERVOIRS.pdf"
url: "https://eprints.kfupm.edu.sa/143058"
study_area: "Middle East carbonate reservoir"
keywords:
  - Machine Learning
  - NMR Porosity
  - Carbonate Reservoirs
  - Well Logs
  - Petrophysics
  - Data Analysis
  - Random Forest Regressor
  - Gradient Boosting Regressor
techniques:
  - nmr
  - well-log-analysis
  - machine-learning-geoscience
  - k-means-clustering
  - dbscan
  - ensemble-learning
  - python
  - statistical-analysis
  - clustering
  - cross-validation
tags:
  - degree/ms
  - formation/carbonate-reservoirs
  - location/middle-east-region
  - technique/nmr
  - technique/well-log-analysis
  - technique/machine-learning-geoscience
  - technique/k-means-clustering
  - technique/dbscan
  - technique/python
  - technique/statistical-analysis
  - technique/clustering
  - technique/cross-validation
  - theme/petrophysics
  - theme/carbonate-reservoirs
  - terminology/porosity
  - terminology/carbonate-reservoirs
status: ingested
---

# MACHINE LEARNING PREDICTION OF NMR POROSITY IN CARBONATE RESERVOIRS

**Summary**: The thesis investigates the use of machine learning algorithms to predict total NMR porosity in carbonate reservoirs using conventional well log data. It evaluates ten different machine learning models, concluding that Random Forest and Gradient Boosting provide high accuracy (up to 97%) as cost-effective alternatives to expensive NMR logging.

---

## Research Problem

The prediction of porosity in carbonate reservoirs is challenging due to complex pore systems and varying rock geometries. While NMR logs are highly accurate and lithology-independent, their high cost and time requirements often necessitate the development of more cost-effective methods using conventional well log data (gamma ray, neutron, density, etc.).

## Objectives

- Develop a machine learning model to predict NMR porosity in carbonate reservoirs from conventional well logs.
- Provide an alternative, cost--effective, and time-efficient method for porosity prediction to eliminate the need for NMR logging.
- Evaluate and compare various machine learning models for predicting total NMR porosity.
- Perform exploratory data analysis (EDA) including statistical analysis and correlation studies on multiple datasets.
- Optimize machine learning models through hyperparameter tuning to improve prediction accuracy.
- Evaluate different machine learning algorithms (Random Forest, Gradient Boosting, etc.) for predicting total NMR porosity.

## Methods

The study utilizes 19,735 data points from conventional well logs (Gamma Ray, Caliper, Neutron Porosity, Density, Resistivity, and Sonic) in a carbonate reservoir. The methodology includes: 1) Data collection and preparation into a unified tabular format; 2) Exploratory data analysis; 3) Feature engineering; 4) Application of ten machine learning algorithms including Artificial Neural Networks (ANN), Multi-Layer Perceptron (MLP), Decision Trees, Random Forest, Support Vector Machine (SVM), Gradient Boosting, XGBoost, XGBRFRegressor, and Light Gradient Boosting Machine (LGBMRegressor); 5) Clustering analysis using K-means, DBSCAN, and Affinity Propagation to improve model performance; 6) Evaluation of models based on correlation coefficient (R), average absolute percentage error (AAPE), and root mean square error (RMSE).

## Data and Materials

Three datasets were used: Dataset 1 (14,045 points), Dataset 2 (5,802 points including lithology volumes like CALC, QRTZ, and ILLITE), and a Compiled Dataset (19,735 points). Logs included Depth, Gamma Ray, Caliper, Neutron Porosity, Photoelectric Factor, Density, NMR Porosity, and additional logs such as POTA, URAN, THOR, DTC, and DTS.

## Key Findings

- The Random Forest Regressor and Gradient Boosting Regressor delivered high accuracy results for predicting NMR porosity, reaching up to 97% accuracy with minor prediction error values. ([[2024-alhamood|ALHAMOOD, 2024, p. 19]])
- NMR porosity is independent of the lithology of the rock formation, providing a clear advantage over other tools like density and neutron logs which are affected by mineralogy. ([[2024-alhamood|ALHAMOOD, 2024, p. 18]])
- The study identified that standard methods for predicting porosity in carbonate rocks often struggle due to complex pore systems (fractures, vugs, and varying sizes). ([[2024-alhamood|ALHAMOOD, 2024, p. 28]])
- K-means clustering was used as a pre-processing step to group similar data points, which simplifies the learning process for machine learning models. ([[2024-alhamood|ALHAMOOD, 2024, p. 53]])
- DBSCAN is advantageous over K-means for outlier removal because it identifies noise points based on density rather than arbitrary cluster numbers. ([[2024-alhamood|ALHAMOOD, 2024, p. 54]])
- The total NMR porosity in the studied carbonate reservoir ranged from 0.20% to 14.11%. ([[2024-alhamood|ALHAMOOD, 2024, p. 63]])
- Null hypothesis testing confirmed a statistical relationship between total NMR porosity and most input variables (Gamma Ray, Caliper, Neutron Porosity, Photoelectric, Density) across all datasets. ([[2024-alhamood|ALHAMOOD, 2024, p. 72]])
- Positive correlations were found between NMR porosity and Gamma Ray, Caliper, and Neutron Porosity; negative correlations were found with Photoelectric Factor and Bulk Density. ([[2024-alhamood|ALHAMOOD, 2024, p. 76]])
- The Random Forest Regressor provided the best results for the testing group in Dataset 1 (R2 = 68%). ([[2024-alhamood|ALHAMOOD, 2024, p. 101]])
- In the compiled dataset, the Random Forest Regressor achieved a high R2 of 80% for the testing group. ([[2024-alhamood|ALHAMOOD, 2024, p. 108]])
- The Keras ANN model produced negative R2 values in several tests, indicating poor performance or lack of fit. ([[2024-alhamood|ALHAMOOD, 2024, p. 104]])
- Removing lithology variables did not significantly change the results for Dataset 2, confirming that NMR porosity is largely lithology-independent. ([[2024-alhamood|ALHAMOOD, 2024, p. 106]])
- The inclusion of more data points in the compiled dataset improved the performance of several models compared to individual datasets. ([[2024-alhamood|ALHAMOOD, 2024, p. 108]])
- Gradient Boosting Regressor achieved high accuracy for the compiled data set with an R2 of 100% (training) and 97% (testing), AAPE of 0.1157, and RMSE of 0.2177. ([[2024-alhamood|ALHAMOOD, 2024, p. 129]])
- The Mean Shift algorithm provided the best Silhouette score for clustering in both Data Set 1 and Data Set 2. ([[2024-alhamood|ALHAMOOD, 2024, p. 119]])

## Limitations

The study notes that some methods, like the Timur empirical correlation, fail to accurately predict porosity in very small pores (less than 15ms T2), and others, like the Prammer method, cannot be used in carbonate reservoirs due to complex pore systems.

## Recommendations and Future Work

Future improvements should focus on increasing model complexity and applying more rigorous regularization techniques to overcome issues of underfitting and overfitting identified in the primary models.

## Related Concepts

- [[nmr]]
- [[machine-learning-geoscience]]
- [[well-log-analysis]]
- [[porosity]]
- [[carbonate-reservoirs]]
- [[petrophysics]]
- [[middle-east-region]]
