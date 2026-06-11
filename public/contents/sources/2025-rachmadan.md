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
study_area: "West Java region, Indonesia"
keywords:
  - Ground Motion Prediction
  - Earthquake
  - Machine Learning
  - Indonesia's Earthquake Early Warning System
  - Ground Motion Prediction Models (GMPMs)
  - Earthquake Early Warning System (EEWS)
  - West Java
  - Random Forest
  - Catboost
  - Gradient Boosting
  - Earthquake Early Warning (EEW)
  - PGA
  - Peak Ground Acceleration (PGA)
  - Tectonic Settings
  - Residual Analysis
  - Bayesian Optimization
  - Vs30
  - Indonesia
techniques:
  - machine-learning-geoscience
  - multivariate-regression
  - kriging
  - well-log-analysis
  - ground-penetrating-radar
  - geostatistics
  - ensemble-learning
  - bayesian-optimization
  - kernel-density-estimation
tags:
  - degree/ms
  - location/indonesia
  - technique/machine-learning-geoscience
  - technique/multivariate-regression
  - technique/bayesian-optimization
  - theme/ground-motion-prediction
  - theme/earthquake-seismology
  - theme/natural-hazards
  - terminology/ground-motion-prediction
  - terminology/earthquake-seismology
  - terminology/porosity
  - terminology/petrophysics
  - terminology/multi-variant-regression
status: ingested
---

# MACHINE LEARNING-BASED GROUND MOTION PREDICTION MODELS FOR WEST JAVA, INDONESIA

**Summary**: The thesis investigates the development of Ground Motion Prediction Models (GMPMs) for the West Java region in Indonesia to improve the accuracy and reliability of the local Earthquake Early Warning System (EEWS). It compares traditional linear regression models with three machine learning algorithms—Random Forest, Catboost, and Gradient Boosting—to determine the optimal approach for predicting ground motion parameters like Peak Ground Acceleration (PGA).

---

## Research Problem

There is a lack of region-specific Ground Motion Prediction Models (GMPMs) in West Java, Indonesia, which are essential for accurate early warnings in the country's developing Earthquake Early Warning (EEW) system. Traditional GMPMs rely on linear regression and predefined equations, which may not capture the non-linear behavior of ground motion data.

## Objectives

- Evaluate three machine learning algorithms (Categorical Boosting, Gradient Boosting, and Random Forest) to develop GMPMs for three tectonic categories: Shallow-crustal, Interface, and Intraslab.
- Predict Peak Ground Acceleration (PGA) in West Java using a large dataset of strong ground motion records.
- Develop Ground Motion Prediction Models (GMPMs) for the West Java region using traditional methods and three Machine Learning techniques: Catboost, Random Forest, and Gradient Boosting.
- Identify the optimal hyperparameters for machine learning models to achieve the highest accuracy in GMPMs for West Java.
- Compare the performance of different machine learning techniques (CB, RF, GB) in terms of prediction accuracy and computational efficiency.
- Evaluate how traditional GMPMs compare with machine learning-based models in terms of accuracy and reliability for predicting ground motions in West Java.
- Identify key seismic and geological features influencing the performance of machine learning-based GMPMs in West Java.
- Identify uncertainties and limitations associated with using machine learning techniques for GMPMs to improve model robustness.
- Develop and compare traditional GMPMs with machine learning-based models (Random Forest, Gradient Boosting, and CatBoost).
- Evaluate the impact of different tectonic types (shallow-crustal, interface, and intraslab) on ground motion prediction.
- Identify key variables influencing Peak Ground Acceleration (PGA) using the SHAP method.
- Develop GMPMs using machine learning algorithms (CatBoost, Gradient Boosting, and Random Forest) for three tectonic settings: shallow-crustal, interface, and intraslab.
- Perform hyperparameter tuning using grid search, randomized search, and Bayesian optimization to optimize model performance.
- Evaluate and compare the performance of machine learning models against traditional models (modified existing GMPM and Zhao et al. 2006) using metrics like MSE, R-squared, and residual analysis.
- Analyze feature importance using SHAP values to understand the contribution of parameters such as magnitude, epicentral distance, depth, Vs30, slope, and altitude.
- Develop and evaluate machine learning-based Ground Motion Prediction Models (GMPMs) for West Java, Indonesia.
- Optimize hyperparameter selection using Bayesian optimization for CatBoost, Gradient Boosting, and Random Forest models.
- Identify the most influential variables in predicting Peak Ground Acceleration (PGA).
- Develop machine learning-based GMPMs specifically for the West Java region.
- Improve the accuracy of ground motion predictions compared to traditional linear regression models.

## Methods

The study utilized a dataset of 3561 Peak Ground Acceleration (PGA) recordings from 381 earthquakes between 2010-2023. Three machine learning models (CatBoost, Gradient Boosting, Random Forest) were developed and compared against two traditional models (a modified existing GMPM and the Zhao et al. 2006 model). Hyperparameter tuning was conducted using grid search, randomized search, and Bayesian optimization; Bayesian optimization was selected as the most efficient method for CatBoost. Model performance was evaluated using Pearson correlation coefficient (R), Coefficient of Determination (R²), Mean Squared Error (MSE), standard deviation, and residual analysis. SHAP (SHapley Additive exPlanations) values were used to interpret the 'black-box' nature of the machine learning models by quantifying the contribution of each feature.

## Data and Materials

The study utilizes a historical earthquake catalog for the West Java region, including data from the United States Geological Survey (USGS) since 1913. It incorporates ground motion parameters such as magnitude (Mw), epicentral distance (Repi), depth, Vs30, slope angle, and site altitude.

## Key Findings

- The Categorical Boosting (CB) model outperformed other models across all three tectonic categories (Shallow-crustal, Interface, and Intraslab). ([[2025-rachmadan|Rachmadan, 2025, p. 14]])
- The CB model achieved the lowest Mean Squared Error values of 0.72, 0.48, and 0.69 for Shallow-crustal, Interface, and Intraslab events respectively. ([[2025-rachmadan|Rachmadan, 2025, p. 14]])
- The CB model achieved the highest Pearson correlation coefficient values of 0.86, 0.90, and 0.91 for Shallow-crustal, Interface, and Intraslab events respectively. ([[2025-rachmadan|Rachmadan, 2025, p. 14]])
- The CB model achieved the highest Coefficient of Determination values of 0.75, 0.81, and 0.82 for Shallow-crustal, Interface, and just Intraslab events respectively. ([[2025-rachmadan|Rachmadan, 2025, p. 14]])
- Epicentral Distance and Moment Magnitude were identified as the most influential factors among the six explanatory variables used in predicting Peak Ground Acceleration (PGA). ([[2025-rachmadan|Rachmadan, 2025, p. 15]])
- The model was validated with recent earthquake data from 2024, showing good agreement and confirming its robustness. ([[2025-rachmadan|Rachmadan, 2025, p. 15]])
- Machine learning models can effectively capture the non-linear behavior of ground motion data compared to traditional linear regression models. ([[2025-rachmadan|Rachmadan, 2025, p. 20]])
- Random Forest emerged as particularly effective in studies with adequate data availability for predicting ground motion intensity. ([[2025-rachmadan|Rachmadan, 2025, p. 30]])
- Gradient Boosting (GB) outperformed other models based on multiple evaluation metrics including R², RMSE, MAE, and standard deviation of residuals in a study in South Korea. ([[2025-rachmadan|Rachmadan, 2025]])
- page_number_not_specified ([[2025-rachmadan|Rachmadan, 2025]])
- The selection of Moment Magnitude (Mw) as the consistent magnitude type is justified by its lack of saturation effects at high values compared to other types like mb or mB. ([[2025-rachmadan|Rachmadan, 2025, p. 33]])
- Topographic amplification effects are most apparent for slopes steeper than 60 degrees, where waves tend to reflect and focus energy near the slope crest. ([[2025-rachmadan|Rachmadan, 2025, p. 36]])
- The study identified 92 shallow-crustal earthquakes with 936 PGA recordings, where focal depths were under 25 km and epicentral distances ranged from 5 to 326 km. ([[2025-rachmadan|Rachmadan, 2025, p. 40]])
- Interface earthquakes (188 events) showed a high correlation between epicentral distance (Repi) and ln(PGA), followed by slope angle and magnitude. ([[2025-rachmadan|Rachmadan, 2025, p. 58]])
- Intraslab earthquakes (103 events) exhibited the highest correlation with ln(PGA) from moment magnitude (Mw), followed by Repi and slope angle. ([[2025-rachmadan|Rachmadan, 2025, p. 59]])

## Limitations

The performance of the CatBoost model is weaker for mid and high PGA values (above 100 gal) due to a smaller amount of available training data in those ranges. Additionally, the lack of direct measurements for Vs30 (e.g., MASW or borehole data) may limit the accuracy of site effect predictions.

## Recommendations and Future Work

- Update GMPMs by increasing the size and diversity of training datasets, especially for underrepresented magnitude ranges.
- Incorporate more geophysical variables, such as fault mechanism and directivity, to improve model accuracy for shallow crustal models.
- Conduct research in Indonesia to obtain accurate Vs30 values through direct measurements.
- Develop additional ground motion parameters like Peak Ground Velocity (PGV) and Spectral Acceleration before wider EEW implementation.

## Related Concepts

- [[machine-learning]]
- [[multivariate-regression]]
- [[ground-motion-prediction]]
- [[earthquake-seismology]]
- [[indonesia]]
- [[natural-hazards]]
- [[bayesian-optimization]]
- [[porosity]]
- [[petrophysics]]
- [[multi-variant-regression]]
