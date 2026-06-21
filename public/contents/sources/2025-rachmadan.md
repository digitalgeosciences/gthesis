---
type: source
id: "143218"
title: "MACHINE LEARNING-BASED GROUND MOTION PREDICTION MODELS FOR WEST JAVA, INDONESIA"
author: "Andy Rachmadan"
year: 2025
department: "Geosciences"
degree: "MS"
supervisor: "SanLinn Kaka"
committee_members:
  - "Ardiansyah Koeshidayatullah"
  - "Ben Mansour Dia"
source_file: "raw/143218 - MACHINE LEARNING-BASED GROUND MOTION PREDICTION MODELS FOR WEST JAVA, INDONESIA.pdf"
url: "https://eprints.kfupm.edu.sa/id/eprint/143218/"
study_area: "West Java, Indonesia"
keywords:
  - Ground Motion Prediction
  - Earthquake
  - Machine Learning
  - Indonesia's Earthquake Early Warning System
  - Ground Motion Prediction Models (GMPMs)
  - Earthquake Early Warning (EEW)
  - West Java
  - Peak Ground Acceleration (PGA)
  - CatBoost
  - Gradient Boosting
  - Random Forest
  - Bayesian Optimization
techniques:
  - machine-learning-geoscience
  - neural-networks
  - support-vector-machine
  - multivariate-regression
  - regression-analysis
  - least-squares-fitting
  - bayesian-optimization
  - cross-validation
  - feature-selection
  - data-analysis
  - signal-processing
  - mathematical-modeling
  - ensemble-learning
  - statistical-analysis
  - residual-analysis
  - kernel-density-estimation
  - shap-analysis
  - multi-variable-regression
tags:
  - degree/ms
  - location/indonesia
  - location/java-island
  - technique/machine-learning-geoscience
  - technique/regression-analysis
  - technique/least-squares-fitting
  - technique/bayesian-optimization
  - technique/cross-validation
  - technique/data-analysis
  - technique/ensemble-learning
  - technique/statistical-analysis
  - technique/residual-analysis
  - technique/kernel-density-estimation
  - technique/multi-variable-regression
  - theme/earthquake-seismology
  - theme/ground-motion-prediction
  - terminology/ground-motion-prediction
  - terminology/earthquake-seismology
  - terminology/peak-ground-acceleration
  - terminology/residual-analysis
status: ingested
---

# MACHINE LEARNING-BASED GROUND MOTION PREDICTION MODELS FOR WEST JAVA, INDONESIA

**Summary**: The thesis develops and evaluates machine learning-based Ground Motion Prediction Models (GMPMs) for three types of earthquake sources (shallow-crustal, interface, and intraslab) in West Java, Indonesia. By comparing CatBoost, Gradient Boosting, and Random Forest models against traditional regression methods, the study concludes that the CatBoost model provides the most accurate and consistent predictions for Peak Ground Acceleration (PGA).

---

## Research Problem

There is a lack of region-specific Ground Motion Prediction Models (GMPMs) in West Java, Indonesia, which are essential for an accurate Earthquake Early Warning (EEW) system. Traditional models often rely on complex, predefined mathematical formulas that may not capture the specific complexities of local tectonic settings.

## Objectives

- Determine optimal hyperparameters for machine learning models (Random Forest, CatBoost, and Gradient Boosting) to achieve high accuracy in GMPMs for West Java.
- Identify which machine learning technique (CB, RF, GB) provides the best performance in terms of prediction accuracy and computational efficiency.
- Compare traditional GMPMs with machine learning-based models regarding accuracy and reliability for predicting ground motions in West Java.
- Identify key seismic and geological features influencing the performance of machine learning-based GMPMs in West Java.
- Identify uncertainties and limitations associated with using machine learning techniques for GMPMs to improve model robustness.
- Develop GMPMs for three types of earthquake sources: shallow-crustal, interface, and intraslab in West Java.

## Methods

The study utilizes 3561 strong ground motion records from 383 earthquakes (2010–2023) and local site data from 60 sensors. Data preparation includes converting various magnitude types into a single moment magnitude (Mw) using linear regression, calculating epicentral distances, and classifying sites based on Vs30 (NEHRP classification). Earthquakes are categorized into three tectonic settings: Shallow-crustal, Interface, and Intraslab. The traditional approach uses least-squares fitting for coefficient modification of selected functional forms. The machine learning approach involves hyperparameter tuning via Grid Search, Randomized Search, and Bayesian Optimization with 5-fold cross-validation to optimize CatBoost (CB), Random Forest (RF), and Gradient Boosting (GB) models. Model performance is evaluated using Pearson Correlation Coefficient (R), Coefficient of Determination (R2), Mean Squared Error (MSE), and Standard Deviation of Residuals. The best performing model's features are analyzed via the Shapley Additive Explanation (SHAP) method.

## Data and Materials

3561 Peak Ground Acceleration (PGA) recordings from 381 earthquakes recorded between 2010 and 2023 by 60 BMKG accelerometer stations in West Java. The dataset includes six explanatory variables: moment magnitude (Mw), epicentral distance (Repi), focal depth (D), Vs30, slope angle, and site altitude.

## Key Findings

- The CatBoost model outperformed other models across all three tectonic categories (Shallow-crustal, Interface, and Intraslab) with the lowest Mean Squared Error values of 0.72, 0.48, and 0.69 respectively. ([[2025-rachmadan|Rachmadan, 2025, p. 14]])
- The CatBoost model achieved the highest Pearson correlation coefficients (0.86, 0.90, 0.91) and Coefficients of Determination (0.75, 0.81, 0.82) for Shallow-crustal, Interface, and Intraslab events. ([[2025-rachmadan|Rachmadan, 2025, p. 14]])
- Epicentral Distance and Moment Magnitude were identified as the most influential of the six explanatory variables in predicting Peak Ground Acceleration (PGA). ([[2025-rachmadan|Rachmadan, 2025, p. 15]])
- The study utilized a dataset of 3561 records from 383 earthquakes with moment magnitudes ranging from 2.4 to 7 and epicentral distances between 5.5 to 867 km. ([[2025-rachmadan|Rachmadan, 2025, p. 14]])
- The model was validated against a 2024 earthquake event, showing good agreement and confirming its robustness for the region. ([[2025-rachmadan|Rachmadan, 2025, p. 15]])
- The CatBoost model consistently outperformed other machine learning models (GB, RF) and traditional models across all three tectonic types in terms of R-values, R², MSE, and standard deviation. ([[2025-rachmadan|Rachmadan, 2025, p. 70]])
- For the shallow-crustal events, the CatBoost model achieved an R-value of 0.87, while the traditional models were 0.80 and 0.74 respectively. ([[2025-rachmadan|Rachmadan, 2025, p. 71]])
- The CatBoost model for interface events yielded an R-value of 0.90, significantly higher than the modified traditional approach (0.59) and Zhao-06 (0.61). ([[2025-rachmadan|Rachmadan, 2025, p. 71]])
- For intraslab events, the CatBoost model achieved an R-value of 0.91, outperforming the next best machine learning model (GB) at 0.90. ([[2025-rachmadan|Rachmadan, 2025, p. 71]])
- The Zhao-06 model exhibited an asymmetrical residual distribution, predominantly in the negative range, indicating it tends to overpredict observed values. ([[2025-rachmadan|Rachmadan, 2025, p. 50]])
- Bayesian optimization was found to be more efficient and accurate than grid search or randomized search for hyperparameter tuning across all tectonic types. ([[2025-rachmadan|Rachmadan, 2025, p. 46]])
- The SHAP analysis revealed that epicentral distance (Repi) and Moment Magnitude (Mw) were the most influential variables in predicting PGA, while Vs30 had the least influence among the six independent variables. ([[2025-rachmadan|Rachmadan, 2025, p. 59]])
- The CatBoost model was validated against three earthquakes from 2024, showing high correlation (R > 0.8) between observed and predicted values. ([[2025-rachmadan|Rachmadan, 2025, p. 63]])

## Limitations

The study notes that the performance of models for mid-to-high PGA values is weaker due to a smaller amount of data in those ranges. Additionally, the lack of direct measurements (e.g., MASW or borehole) for Vs30 may limit its predictive impact.

## Recommendations and Future Work

- Update GMPMs by increasing the size and diversity of training datasets, especially for underrepresented magnitude ranges.
- Incorporate more geophysical variables such as fault mechanism and directivity to improve model accuracy.
- Conduct research in Indonesia to obtain accurate Vs30 values through direct measurements.
- Develop additional ground motion parameters like Peak Ground Velocity (PGV) and Spectral Acceleration.
- Optimize sensor locations to reduce uncertainty in predictions.

## Related Concepts

- [[machine-learning-geoscience]]
- [[regression-analysis]]
- [[ground-motion-prediction]]
- [[earthquake-seismology]]
- [[indonesia]]
- [[java-island]]
- [[bayesian-optimization]]
- [[peak-ground-acceleration]]
- [[residual-analysis]]
- [[statistical-analysis]]
- [[kernel-density-estimation]]
- [[multi-variable-regression]]
