---
type: source
id: "9621"
title: "EVALUATION OF EMPIRICALLY DERIVED PVT PROPERTIES FOR NIGERIAN CRUDE OILS"
author: "ADEEYO YISA ADEMOLA"
year: 2005
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Muhammad Ali Al-Marhoun"
committee_members: []
source_file: "raw/9621 - Evaluation of empirically derived PVT properties for Nigerian crude oils.pdf"
url: "https://eprints.kfupm.edu.sa/9621"
study_area: "Niger Delta, Nigeria"
keywords:
  - PVT properties
  - Nigerian crude oils
  - bubblepoint pressure
  - solution gas-oil ratio
  - oil formation volume factor
  - oil viscosity
  - neural network models
  - regression analysis
  - dead-oil viscosity
  - artificial neural networks
  - non-linear regression
  - solution gas oil ratio
techniques:
  - regression-analysis
  - neural-networks
  - statistical-analysis
  - graphical-analysis
  - non-linear-regression
  - matlab
  - mathematical-modeling
  - data-analysis
tags:
  - degree/ms
  - location/niger-delta
  - technique/regression-analysis
  - technique/neural-networks
  - technique/statistical-analysis
  - technique/mathematical-modeling
  - technique/data-analysis
  - theme/petroleum-engineering
  - theme/petrophysics
  - terminology/petrophysics
  - terminology/petroleum-engineering
  - terminology/viscosity
  - terminology/bubblepoint-pressure
  - terminology/solution-gas-oil-ratio
  - terminology/oil-formation-volume-factor
  - terminology/petrophysics
status: ingested
---

# EVALUATION OF EMPIRICALLY DERIVED PVT PROPERTIES FOR NIGERIAN CRUDE OILS

**Summary**: The thesis evaluates and tunes several empirical correlations for predicting PVT properties (bubblepoint pressure, solution GOR, oil FVF at bubblepoint, and both gas-saturated and dead-oil viscosity) using a dataset of 500 samples from the Niger Delta. It concludes that while some existing correlations are useful, neural network models provide superior accuracy for all studied parameters.

---

## Research Problem

The use of standard global correlations (like Standing or Vasquez & Beggs) for Nigerian crude oils often leads to inaccuracies because these correlations were developed using data from different geographic regions with different chemical and physical properties. There is a lack of specific, high-accuracy correlation models tailored specifically for the Niger Delta's unique oil profiles.

## Objectives

- To evaluate the most popular PVT correlations against a set of Nigerian PVT data and to recommend the best correlations for Nigeria crude oils.
- To improve the performance of the most popular correlations by recalculating their coefficients using regression analysis.
- To develop new correlations using neural network models for PVT properties using Nigerian data.
- Evaluate existing empirical correlations (Standing, Glaso, Vasquez & Beggs, Al-Marhoun) for predicting PVT properties using Nigerian crude oil data.
- Recalculate coefficients of these correlations using non-linear regression to tune them specifically for Nigerian crudes.
- Develop and evaluate artificial neural network (ANN) models for the prediction of bubblepoint pressure, solution GOR, oil FVF at bubblepoint, oil viscosity at bubblepoint, and dead-oil viscosity.

## Methods

The study utilizes non-linear regression analysis to recalculate coefficients for several established empirical correlations (Standing, Glaso, Vasquez & Beggs, Al-Marhoun) using a dataset of Nigerian crude oils. These modified correlations are then compared against the original versions and artificial neural network (ANN) models. The ANN models were developed using the Matlab software environment with the Levenberg-Marquardt optimization procedure. Data used for training the neural networks were normalized to a range of -1 to 1. A split ratio of 2:1:1 was used for training, cross-validation, and testing sets respectively.

## Data and Materials

The study utilized large datasets for each PVT property: 1959 data points for bubblepoint pressure (Pb), 1772 for solution Gas-Oil Ratio (GOR), 2043 for oil Formation Volume Factor at bubblepoint (FVF), 1750 for oil viscosity at bubblepoint, and 1809 for dead-oil viscosity. The study also compared these against several established correlations.

## Key Findings

- The Standing (1947) correlation outperformed other models for bubblepoint pressure with an average relative error of 5.67% and absolute error of 14.24%. ([[2005-ademola|ADEMOLA, 2005, p. 58]])
- The Vasquez and Beggs (1980) correlation was the best performing for solution GOR, with average relative errors of 3.959% and absolute errors of 18.6%. ([[2005-ademola|ADEMOLA, 2005, p. 64]])
- The Al-Marhoun (1992) correlation showed the highest accuracy for oil FVF at bubblepoint, with an average relative error of 0.59% and a high kurtosis of 9.65. ([[2005-ademola|ADEMOLA, 2005, p. 72]])
- The Beggs and Robinson (1975) correlation was the best for oil viscosity at bubblepoint, with an average relative error of -23.04% and absolute error of 31.15%. ([[2005-ademola|ADEMOLA, 2005, p. 80]])
- The Glaso (1980) correlation was identified as the best for dead-oil viscosity when oil gravity is higher than 34°API. ([[2005-ademola|ADEMOLA, 2005, p. 85]])
- Neural Network models provided better predictions for all five PVT properties compared to standard empirical correlations. ([[2005-ademola|ADEMOLA, 2005, p. 3]])
- The Glaso correlation, after being tuned with recalculated coefficients, was found to be the most accurate for predicting bubblepoint pressure (Pb) in Nigerian crude oils, with an average absolute relative error of 11.19%. ([[2005-ademola|ADEMOLA, 2005, p. 150]])
- The Vasquez and Beggs correlation performed best for estimating solution Gas-Oil Ratio (GOR), showing the lowest error among standard correlations. ([[2005-ademola|ADEMOLA, 2005, p. 148]])
- The Al-Marhoun (1992) correlation was identified as the most accurate for predicting oil Formation Volume Factor at bubblepoint (FVF). ([[2005-ademola|ADEMOLA, 2005, p. 149]])
- The Beggs and Robinson correlation remained the most accurate method for predicting both oil viscosity at bubblepoint and dead-oil viscosity. ([[2005-ademola|ADEMOLA, 2005, p. 150]])
- Artificial neural network (ANN) models outperformed all evaluated empirical correlations for every PVT property studied, including bubblepoint pressure (Ea = 7.62%), solution GOR (Ea = 12.63%), oil FVF at bubblepoint (Ea = 1.64%), oil viscosity at bubblepoint (Ea = 14.69%), and dead-oil viscosity (Ea = 30.82%). ([[2005-ademola|ADEMOLA, 2005, p. 150]])
- The study found that the current practice in Nigeria of using only Standing and Vasquez & Beggs correlations for Pb, Rs, and Bob estimation is not optimal. ([[2005-ademola|ADEMOLA, 2005, p. 152]])
- Modified coefficients for the Standing (1947) GOR correlation were determined as a1=0.024297, a2=1.164019, a3=-0.0010122, and a4=0.041036. ([[2005-ademola|ADEMOLA, 2005, p. 158]])
- For the Glaso (1980) GOR correlation, modified coefficients for Nigerian data are a1=2.876, a2=14.935, a3=-2.7823, a4=0.57979, and a5=0.07.182. ([[2005-ademola|ADEMOLA, 2005, p. 159]])
- Vasquez & Beggs (1980) GOR coefficients for API > 30 were modified to a1=0.023212, a2=1.2608, and a3=13.266. ([[2005-ademola|ADEMOLA, 2005, p. 159]])

## Limitations

Several existing correlations (Standing, Glaso, Al-Marhoun) were found to perform poorly or fail to predict accurately when values exceeded certain thresholds (e.g., bubblepoint pressure above 4500 psi or GOR above 600 scf/stb).

## Recommendations and Future Work

- Study should be conducted on other PVT properties such as compressibility, Bt, and Viscosity below bubblepoint.
- The results indicate that a substantial better accuracy could be achieved by using the recommended correlations to predict PVT properties in Nigeria oil industry.

## Related Concepts

- [[regression-analysis]]
- [[neural-networks]]
- [[petrophysics]]
- [[petroleum-engineering]]
- [[niger-delta]]
- [[viscosity]]
- [[bubblepoint-pressure]]
- [[solution-gas-oil-ratio]]
- [[oil-formation-volume-factor]]
- [[mathematical-modeling]]
- [[data-analysis]]
