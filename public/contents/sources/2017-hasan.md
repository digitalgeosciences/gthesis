---
type: source
id: "140616"
title: "An Empirical Correlation of Permeability for the Khuff formation"
author: "Muhammad Hasan"
year: 2017
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Sidqi A. Abu-Khamsin"
committee_members: []
source_file: "raw/140616 - An Empirical Correlation of Permeability for the Khuff formation..pdf"
url: "https://eprints.kfupm.edu.sa/140616"
study_area: "Saudi Arabia (specifically Khuff-B and Khuff-C strata)"
keywords:
  - Khuff formation
  - permeability correlation
  - mineral content
  - petrophysical parameters
  - neural networks
  - non-linear regression
  - Permeability
  - Artificial Neural Network
  - Symbolic Regression
  - Data Filtering
  - Clustering
  - porosity
  - bulk density
  - neural network
techniques:
  - well-log-analysis
  - core-analysis
  - multivariate-regression
  - neural-networks
  - clustering
  - symbolic-regression
  - k-means
  - fuzzy-c-means
  - em-algorithm
  - non-linear-regression
  - petrophysics
tags:
  - degree/ms
  - formation/khuff-formation
  - formation/arab-d-reservoir
  - location/saudi-arabia
  - location/eastern-province
  - technique/well-log-analysis
  - technique/core-analysis
  - technique/multivariate-regression
  - technique/neural-networks
  - technique/clustering
  - technique/symbolic-regression
  - technique/k-means
  - technique/fuzzy-c-means
  - technique/non-linear-regression
  - technique/petrophysics
  - theme/petrophysics
  - terminology/permeability
  - terminology/porosity
  - terminology/diagenesis
  - terminology/petrophysics
status: ingested
---

# An Empirical Correlation of Permeability for the Khuff formation

**Summary**: The thesis investigates the development of an empirical correlation for predicting permeability in the Khuff formation based on mineral content (dolomite, limestone, and anhydrite) and petrophysical parameters. Using a dataset of 537 points from core samples and well logs, the study employs clustering, non-linear regression, and neural networks to model the complex heterogeneity of carbonate rocks.

---

## Research Problem

Standard well log evaluation techniques for sandstone reservoirs often fail in carbonate reservoirs like the Khuff formation due to high heterogeneity and complex mineralogical impacts on porosity and permeability. There is a lack of specific correlations that incorporate mineral content into permeability prediction for this formation.

## Objectives

- Develop a correlation for the prediction of permeability of the Khuff formation based on petrophysical and mineralogical data obtained from well logs.
- Identify the impact of mineralogy and porosity on the permeability of the Khuff formation.
- Identify patterns in permeability data using clustering algorithms (FCM, K-means, EM).
- Develop mathematical models for different lithological subsets using symbolic regression.
- Implement an Artificial Neural Network (ANN) to predict permeability based on core data and mineral content.
- Develop a correlation to estimate matrix permeability from porosity, bulk density, and mineral content provided by well logs.

## Methods

The study involved a multi-stage approach: 1. Data Filtering: Removing 'klinkers' (e.g., values of 0.1 mD or >1 mD), excluding washout zones, and filtering by density-to-porosity consistency. 2. Clustering: Applying Fuzzy C-Means (FCM), K-means, and Expectation-Maximization (EM) to identify distinct lithological populations. 3. Symbolic Regression: Using the Eureqa engine to find non-linear mathematical expressions for specific clusters. 4. Non-linear Regression: Utilizing MATLAB and SPSS to fit models based on mineral ratios. 5. Artificial Neural Networks: Developing a back-propagation ANN with one hidden layer (20 neurons) using Levenberg-Marquardt training.

## Data and Materials

The study utilized core data (permeability, porosity, grain density) and well log data (gamma ray, neutron porosity, bulk density, resistivity) from the Khuff formation in eastern Saudi Arabia. Validation datasets included a specific section of Khuff-C and data from the Arab-D formation.

## Key Findings

- The dataset showed a strong correlation between permeability and porosity with a coefficient of 0.7. ([[2017-hasan|Hasan, 2017, p. 76]])
- Permeability data was found to be highly skewed (skewness = 4.27) and peaked (kurtosis = 19.03), with many values below 10 mD. ([[2017-hasan|Hasan, 2017, p. 66]])
- The non-linear regression model produced a correlation coefficient (R^2) of 0.6 for the filtered data. ([[2017-hasan|Hasan, 2017, p. 21]])
- Neural networks provided higher accuracy with R^2 values of 0.73 for training and 0.71 for testing. ([[2017-hasan|Hasan, 2017, p. 21]])
- The developed mathematical model showed a good match when applied to an independent set of Arab-D data. ([[2017-hasan|Hasan, 2017, p. 21]])
- Porosity data was found to be fairly symmetrical (skewness = 0.06) with a kurtosis of -1.14, suggesting a dual porosity system. ([[2017-hasan|Hasan, 2017, p. 68]])
- Bulk density showed high skewness in the positive direction and high kurtosis, indicating concentration in the dolomitic range (2.87 g/cc). ([[2017-hasan|Hasan, 2017, p. 69]])
- Data filtering based on the difference between calculated grain density and measured bulk density reduced the usable dataset to 226 points, which significantly improved subsequent correlation results. ([[2017-hasan|Hasan, 2017, p. 89]])
- Fuzzy C-Means (FCM) identified three distinct clusters; Cluster A (high dolomite), Cluster B (no limestone), and Cluster C (high limestone). ([[2017-hasan|Hasan, 2017, p. 94]])
- K-means algorithm produced similar results to FCM, identifying three clusters with varying mineral concentrations. ([[2017-hasan|Hasan, 2017, p. 98]])
- Symbolic regression via Eureqa for Cluster C yielded an R2 of 0.48, but the resulting equations were deemed too complex for practical use. ([[2017-hasan|Hasan, 2017, p. 116]])
- A non-linear regression model based on a mineral ratio (MD/MA) and porosity provided a high correlation (R2 = 0.72). ([[2017-hasan|Hasan, 2017, p. 133]])
- The proposed ANN model achieved an R2 of 0.7308 for the training set and 0.72 for the test set, with a Root Mean Square Error (RMSE) of 0.40 in the testing phase. ([[2017-hasan|Hasan, 2017, p. 141]])
- Anhydrite content showed a direct relationship with permeability (R2 = 0.33), contrary to typical literature where it is viewed as a plugging material. ([[2017-hasan|Hasan, 2017, p. 125]])
- A new empirical correlation was developed to predict permeability for the Khuff formation based on core and log data from eastern Saudi Arabia. ([[2017-hasan|Hasan, 2017, p. 149]])

## Limitations

The R2 for the developed correlation is low because carbonate formations are influenced by factors like texture, rock fabric, and pore size distribution which were not fully captured. Additionally, NMR logs were unavailable to provide pore-size distribution data.

## Recommendations and Future Work

- Incorporate a parameter that defines diagenesis to improve accuracy in carbonate permeability determination.
- Include NMR log data to capture rock texture through pore-size distribution.
- Perform an in-depth analysis of deviations and include them within the mathematical model.
- Test and tune the new correlation for more fields.

## Related Concepts

- [[well-log-analysis]]
- [[neural-networks]]
- [[multivariate-regression]]
- [[khuff-formation]]
- [[saudi-arabia]]
- [[permeability]]
- [[porosity]]
- [[petrophysics]]
- [[diagenesis]]
- [[symbolic-regression]]
- [[k-means]]
- [[fuzzy-c-means]]
- [[non-linear-regression]]
- [[arab-d-reservoir]]
- [[eastern-province]]
