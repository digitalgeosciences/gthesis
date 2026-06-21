---
type: source
id: "142848"
title: "Predicting Rate of Penetration (ROP) for Horizontal Wells in Unconventional Reservoirs Using Artificial Intelligence"
author: "Hassan Mohammed Almomen"
year: 2024
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Prof. Salaheldin Elkatatny"
committee_members: []
source_file: "raw/142848 - Predicting Rate of Penetration (ROP) for Horizontal Wells in Unconventional Rese.pdf"
url: "https://eprints.kfupm.edu.sa/142848"
study_area: "Unconventional reservoir field (specific location not named)"
keywords:
  - Rate of Penetration (ROP)
  - Horizontal Wells
  - Unconventional Reservoirs
  - Artificial Intelligence
  - Artificial Neural Network (ANN)
  - Fuzzy Logic (FL)
  - Functional Neural Network (FNN)
  - Drilling Parameters
techniques:
  - artificial-neural-network
  - fuzzy-logic
  - functional-neural-network
  - least-squares-fitting
  - data-smoothing
  - statistical-analysis
tags:
  - degree/ms
  - location/saudi-arabia
  - technique/machine-learning-geoscience
  - technique/artificial-neural-network
  - technique/fuzzy-logic
  - technique/data-analysis
  - theme/petroleum-engineering
  - theme/unconventional-resources
  - terminology/petrophysics
  - terminology/unconventional-resources
  - terminology/lithofacies-analysis
  - terminology/petrophysics
  - terminology/petroleum-engineering
status: ingested
---

# Predicting Rate of Penetration (ROP) for Horizontal Wells in Unconventional Reservoirs Using Artificial Intelligence

**Summary**: The thesis investigates the prediction of Rate of Penetration (ROP) for horizontal wells in unconventional reservoirs using three artificial intelligence models: Artificial Neural Networks (ANN), Fuzzy Logic (FL), and Functional Neural Networks (FNN). The study evaluates these models based on correlation coefficients and Average Absolute Percentage Error (AAPE) to determine the most effective method for predicting ROP from mechanical surface drilling parameters.

---

## Research Problem

The prediction of ROP is challenging in unconventional reservoirs due to the high heterogeneity and non-linearity of formations. Accurate ROP estimation is critical for well planning, cost reduction, and operational safety in complex horizontal well designs.

## Objectives

- Study the impact of surface drilling parameters on ROP in horizontal unconventional reservoirs.
- Develop a rate of penetration model that captures the effect of drilling parameters using AI tools.
- Use and Evaluate the performance of developed model with different AI techniques in predicting ROP using unseen data.
- Evaluate the impact of various drilling parameters (WOB, RPM, Torque, Hookload, SPP, and Mud Weight) on ROP.
- Develop and compare three AI-based models (ANN, FL, and FNN) for predicting R10 prediction accuracy.
- Perform data smoothing to improve model reliability.

## Methods

The study utilized six mechanical surface drilling parameters as inputs: Weight on Bit (WOB), Revolutions Per Minute (RPM), Torque, Hookload, Standpipe Pressure (SPP), and Mud Weight (MW). Data smoothing was performed by averaging every 10 points to reduce noise. Three AI models were implemented: Artificial Neural Network (ANN) using the 'newpr' network function with 'trainlm' algorithm; Fuzzy Logic (FL) using Gaussian membership functions; and Functional Neural Network (FNN). Model performance was evaluated using Correlation Coefficient (R) and Average Absolute Percentage Error (AAPE).

## Data and Materials

Real-time drilling data from 6 wells in an unconventional reservoir. Initial raw dataset contained 59,726 points; after cleaning, the sample size was reduced to approximately 58,115 data points.

## Key Findings

- The initial results confirmed the robustness of ML models (ANN, FL, FNN) in predicting ROP for unconventional fields using only drilling parameters. ([[2024-almomen|Almomen, 2024, p. 14]])
- Well 1 correlation analysis showed a high correlation between WOB and ROP (0.6648) and Torque and ROP (0.5948). ([[2024-almomen|Almomen, 2024, p. 51]])
- The study identified that parameters like WOB, RPM, Torque, and SPP are critical for predicting ROP in complex lithologies. ([[2024-almomen|Almomen, 2024, p. 17]])
- WOB is directly related to ROP performance; ROP values increase as WOB increases across all six wells. ([[2024-almomen|Almomen, 2024, p. 47]])
- RPM and Torque show a direct relationship with ROP, where ROP increases as these parameters increase. ([[2024-almomen|Almomen, 2024, p. 47]])
- Hookload is inversely proportional to ROP; ROP values decrease as hook-load values increase. ([[2024-almomen|Almomen, 2024, p. 47]])
- SPP shows a direct relationship with ROP, increasing as SPP increases across all wells. ([[2024-almomen|Almomen, 2024, p. 47]])
- Mud weight showed no clear trend but was correlated with ROP in terms of correlation coefficient. ([[2024-almomen|Almomen, 2024, p. 47]])
- The ANN model achieved a correlation coefficient (R) of 0.96 and an AAPE of approximately 5% for training, testing, and validation data. ([[2024-almomen|Almomen, 2024, p. 78]])
- The Fuzzy Logic (FL) model achieved R values of 0.95, 0.96, and 0.94 for training, testing, and validation respectively, with AAPE values between 5.48% and 6.21%. ([[2024-almomen|Almomen, 2024, p. 85]])
- The Functional Neural Network (FNN) model achieved R values of 0.94, 0.95, and 0.94 for training, testing, and validation, with AAPE between 5.75% and 6.53%. ([[2024-almomen|Almomen, 2024, p. 88]])

## Limitations

One major challenge/limitation of AI tools is the availability of sufficient data and inputs required for accurate model training; however, performance is maximized when drilling in areas with similar lithological properties.

## Recommendations and Future Work

- Incorporate downhole drilling parameters and downhole vibration data to further enhance model accuracy.
- Include formation characteristics and mud properties in the models as they directly affect drilling operations.
- Apply studies across different formation lithologies and bit types for better optimization.

## Related Concepts

- [[artificial-neural-network]]
- [[fuzzy-logic]]
- [[functional-neural-network]]
- [[petrophysics]]
- [[unconventional-resources]]
- [[petroleum-engineering]]
- [[lithofacies-analysis]]
- [[machine-learning-geoscience]]
- [[neural-networks]]
- [[saudi-arabia]]
