---
type: source
id: "138603"
title: "PREDICTION OF PRESSURE DROP FOR TWO-PHASE FLOW IN VERTICAL PIPES USING ARTIFICIAL INTELLIGENCE"
author: "Ahmad Tariq Al-Shammari"
year: 2011
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Muhammad A. Al-Marhoun"
committee_members: []
source_file: "raw/138603 - PREDICTION OF PRESSURE DROP FOR TWO-PHASE FLOW IN VERTICAL PIPES USING ARTIFICIA.pdf"
url: "https://eprints.kfupm.edu.sa/138603"
study_area: "Middle East"
keywords:
  - Two-phase flow
  - Pressure drop
  - Artificial Intelligence
  - Fuzzy Logic
  - ANFIS
  - Well testing
  - Bottom-hole pressure
  - vertical pipes
  - ANFIS model
  - empirical correlations
techniques:
  - fuzzy-logic
  - anfis
  - matlab
  - petrophysics
  - well-testing
  - machine-learning-geoscience
  - neural-networks
  - mathematical-modeling
  - statistical-analysis
tags:
  - degree/ms
  - location/middle-east-region
  - technique/fuzzy-logic
  - technique/anfis
  - technique/matlab
  - technique/well-log-analysis
  - technique/machine-learning-geoscience
  - technique/neural-networks
  - technique/mathematical-modeling
  - technique/statistical-analysis
  - theme/reservoir-engineering
  - theme/petroleum-engineering
  - terminology/multi-phase-flow
  - terminology/petrophysics
  - terminology/petroleum-engineering
  - terminology/pressure-transient-analysis
status: ingested
---

# PREDICTION OF PRESSURE DROP FOR TWO-PHASE FLOW IN VERTICAL PIPES USING ARTIFICIAL INTELLIGENCE

**Summary**: The thesis investigates the prediction of pressure drop in vertical pipes carrying two-phase flow (oil and gas) using an Artificial Neural Network Fuzzy Inference System (ANFIS). It compares the performance of the developed ANFIS model against several established empirical correlations to determine the most accurate method for predicting Bottom Hole Pressure (BHP).

---

## Research Problem

Calculating pressure drop in two-phase flow systems is complex due to varying gas and liquid flow rates as pressure drops along the wellbore. Existing empirical correlations and mechanistic models often have limited applicability outside their specific design boundaries (e.g., variations in GOR, liquid rate, tubing size).

## Objectives

- To construct an Adaptive Neuro-Fuzzy Inference System (ANFIS) to predict flowing bottom-hole pressure in vertical multiphase flow
- To test the developed model against actual field data
- Compare the performance of the developed ANFIS model against established empirical correlations (e.g., Fancher-Brown, Mukherjee-Brill, Beggs-Brill, Orkiszewski).
- Evaluate the accuracy of various empirical correlations (Duns & Ros, Hagedorn-Brown, Beggs & Brill, etc.) for predicting Bottom Hole Pressure (BHP).
- Develop an ANFIS model to predict pressure drop in vertical pipes with two-phase flow.
- Perform a statistical and graphical comparison between the developed ANFIS model and existing empirical models.

## Methods

The study utilizes a dataset of 1207 well testing samples from Middle Eastern fields. Data preprocessing involved filtering out outliers where average error across multiple correlations exceeded 15%, resulting in 796 usable data points. The ANFIS model was developed using Matlab's 'genfis2' function, which employs subtractive clustering to define membership functions and rules. A trend analysis was conducted by varying one input parameter at a time (GOR, oil rate, water cut, tubing ID, depth) while keeping others constant to verify physical behavior. Group error analysis was performed to evaluate model robustness across different ranges of input parameters.

## Data and Materials

The study utilizes a dataset of measurements for two-phase flow in vertical pipes to train the ANFIS model and validate it against empirical correlations. Specific data points include relative error percentages for various models: Orkiszewski (51.14%), Fancher-Brown (37.89%), Hag-Brill (35.46%), PETEX II (32.77%), Beggs-Brill (32.21%), Duns-Ros (31.72%), Mukherjee-Brill (29.72%), and ANFIS (26.66%).

## Key Findings

- The ANFIS model successfully predicted flowing bottom-hole pressure at 199 test samples with an average absolute error of 4.9%. ([[2011-al-shammari|Al-Shammari, 2011, p. 11]])
- A total of 1207 well productivity testing data sets were initially collected, reduced to 796 after filtering out outliers (average error > 15%). ([[2011-al-shammari|Al-Shammari, 2011, p. 32]])
- The ANFIS model predicted BHP values with lower average absolute error compared to all empirical correlations across almost all input parameter ranges. ([[2011-al-shammari|Al-Shammari, 2011, p. 40]])
- A cluster radius of 0.6 was identified as the most optimized value for the ANFIS model, yielding an average absolute error of 4.33% on training data and 4.92% on testing data. ([[2011-al-shammari|Al-Shammari, 2011, p. 35]])
- The ANFIS model successfully captured expected physical trends for GOR (decreasing BHP), oil rate (increasing BHP), water cut (increasing BHP), and tubing ID (lower BHP as size increases). ([[2011-al-shammari|Al-Shammari, 2011, p. 37]])
- The ANFIS model achieved the lowest Average Absolute Error (Ea) of 4.93% compared to empirical models ranging from 6.06% (Mukherjee-Brill) to 8.94% (Duns & Ros). ([[2011-al-shammari|Al-Shammari, 2011, p. 46]])
- The ANFIS model produced the highest Correlation Coefficient (CC) of 0.93, outperforming all empirical models (ranging from 0.89 to 0.92). ([[2011-al-shammari|Al-Shammari, 2011, p. 46]])
- The maximum absolute percentage error (EMax) for the ANFIS model was 14.91%, which was lower than all other models, including Duns & Ros (19.31%) and Fancher-Brown (23.62%). ([[2011-al-shammari|Al-Shammari, 2011, p. 46]])
- The root mean square error (RMSE) for the ANFIS model was 6.03%, the lowest among all tested models. ([[2011-al-shammari|Al-Shammari, 2011, p. 46]])
- The standard deviation of errors for the ANFIS model was 3.48, significantly lower than the empirical correlations (ranging from 4.14 to 5.37). ([[2011-al-shammari|Al-Shammari, 2011, p. 46]])
- The Duns & Ros model showed a tendency toward under-predicting BHP as values increased, with an R value of 0.89. ([[2011-al-shammari|Al-Shammari, 2011, p. 50]])
- The Beggs & Brill model provided the best empirical result among those tested, with a correlation coefficient of 0.92. ([[2011-al-shammari|Al-Shammari, 2011, p. 54]])
- Analysis of Figure 5.8 shows that as Gas Oil Ratio (GOR) increases, Bottom Hole Pressure (BHP) decreases across all tubing sizes. ([[2011-al-shammari|Al-Shammari, 2011, p. 41]])
- Figure 5.7 indicates that smaller tubing IDs result in higher BHP for a given oil rate compared to larger tubing IDs. ([[2011-al-shammari|Al-Shammari, 2011, p. 41]])
- The Duns & Ros model showed the worst distribution of errors, with a clear shift toward an average error of +7. ([[2011-al-shammari|Al-Shammari, 2011, p. 56]])

## Limitations

The ANFIS model showed higher absolute error at specific points, such as an API value of 44 and a tubing ID of 2.441 inches, due to the small number of training data samples available for those specific conditions.

## Recommendations and Future Work

- Improve model accuracy by adding more training data samples covering wider ranges.
- Incorporate new combinations of variables to improve the ANFIS rules.

## Related Concepts

- [[fuzzy-logic]]
- [[anfis]]
- [[multi-phase-flow]]
- [[petrophysics]]
- [[reservoir-engineering]]
- [[middle-east-region]]
- [[machine-learning-geoscience]]
- [[statistical-analysis]]
- [[petroleum-engineering]]
- [[pressure-transient-analysis]]
- [[mathematical-modeling]]
