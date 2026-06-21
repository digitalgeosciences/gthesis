---
type: source
id: "10579"
title: "DEVELOPMENT AND TESTING OF AN ARTIFICIAL NEURAL NETWORK MODEL FOR PREDICTING BOTTOMHOLE PRESSURE IN VERTICAL MULTIPHASE FLOW"
author: "MOHAMMED ABDALLA AYOUB"
year: 2004
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Prof. Mohamed Ahmed Aggour"
committee_members: []
source_file: "raw/10579 - Development and testing of an artificial neural network model for predicting bot.pdf"
url: "https://eprints.kfupm.edu.sa/10579"
study_area: "Middle East fields"
keywords:
  - Artificial Neural Network
  - Bottomhole Pressure
  - Vertical Multiphase Flow
  - Back-propagation
  - Empirical Correlations
  - Mechanistic Models
  - Multiphase Flow
  - Back-propagation Algorithm
techniques:
  - neural-networks
  - mathematical-modeling
  - statistical-analysis
  - data-analysis
  - matlab
  - back-propagation
tags:
  - degree/ms
  - location/middle-east-region
  - technique/neural-networks
  - technique/mathematical-modeling
  - technique/statistical-analysis
  - technique/data-analysis
  - technique/matlab
  - technique/back-propagation
  - theme/petroleum-engineering
  - theme/reservoir-engineering
  - theme/petrophysics
  - terminology/petrophysics
  - terminology/petrophysics
status: ingested
---

# DEVELOPMENT AND TESTING OF AN ARTIFICIAL NEURAL NETWORK MODEL FOR PREDICTING BOTTOMHOLE PRESSURE IN VERTICAL MULTIPHASE FLOW

**Summary**: The thesis developed and tested an artificial neural network (ANN) model using the back-propagation algorithm to predict flowing bottomhole pressure in vertical multiphase wells. The study compared the ANN's performance against several existing empirical correlations and mechanistic models, concluding that the ANN provided superior accuracy and consistency.

---

## Research Problem

The accurate prediction of flowing bottomhole pressure in vertical multiphase wells is challenging for standard empirical correlations and mechanistic models due to complex fluid behaviors; an automated, robust model is needed to improve estimation reliability.

## Objectives

- To construct an ANN model for predicting pressure drop in vertical multiphase flow.
- To test the constructed model against actual field data.
- To compare the developed model against the best available empirical correlations and mechanistic models.
- Develop an artificial neural network (ANN) model to predict flowing bottomhole pressure.
- Evaluate the performance of the ANN against existing empirical correlations and mechanistic models.
- Perform trend analysis to ensure the model captures physical behavior.

## Methods

The study utilized a back-propagation algorithm for training an ANN with one input layer (9 neurons), three hidden layers (6, 3, and 3 neurons respectively), and one output layer. Data was pre-processed using normalization (mean/standard deviation) and post-processed via denormalization. A dataset of 386 samples from Middle East fields was collected; after filtering for accuracy against known models, 206 data points were used. The model was optimized by testing different hidden layer configurations and evaluated using Average Absolute Percent Error (AAPE), Correlation Coefficient (R), Root Mean Square Error (RMSE), and Standard Deviation (STD). Trend analysis was performed by varying one input parameter at a time to ensure physical consistency.

## Data and Materials

386 initial data sets from Middle East fields; 206 final data sets used for model development after filtering out samples with >15% error in existing models. The training, validation, and testing sets were partitioned using a 4:1:1 ratio.

## Key Findings

- The ANN model outperformed all tested empirical correlations and mechanistic models in terms of highest correlation coefficient, lowest average absolute percent error (AAPE), lowest standard deviation, lowest maximum error, and lowest root mean square error (RMSE). ([[2004-ayoub|AYOUB, 2004, p. 3]])
- The data used for developing the model covers an oil rate from 280 to 19618 BPD, water cut up to 44.8%, and gas-oil ratios up to 675.5 SCF/STB. ([[2004-ayoub|AYOUB, 2004, p. 2]])
- A ratio of 3:1:1 between training, validation, and testing sets yielded the best performance for the developed model. ([[2004-ayoub|AYOUB, 2004, p. 2]])
- The Hagedorn and Brown correlation was found to be better for water cuts greater than 80%. ([[2004-ayoub|AYOUB, 2004, p. 19]])
- The Orkiszewski correlation was found more accurate than other correlations in determining pressure drop especially when three-phase flow is introduced. ([[2004-ayoub|AYOUB, 2004, p. 18]])
- The Hansen and Kabir model was found to be no better than the traditional correlations, while the Ansari et al. model gave reasonable accuracy. ([[2004-ayoub|AYOUB, 2004, p. 20]])
- The ANN model achieved the highest correlation coefficient (0.9735) compared to all other tested models. ([[2004-ayoub|AYOUB, 2004, p. 110]])
- The ANN model achieved the lowest root mean squared error (RMSE) of 2.8013. ([[2004-ayoub|AYOUB, 2004, p. 110]])
- The ANN model showed the lowest standard deviation of errors at 66.2448. ([[2004-ayoub|AYOUB, 2004, p. 110]])
- Gas specific gravity was found to be an insignificant parameter for predicting bottomhole pressure. ([[2004-ayoub|AYOUB, 2004, p. 57]])
- The ANN model outperformed the best available correlation (Mukherjee and Brill) in terms of AAPE (2.16% vs 4.90%). ([[2004-ayoub|AYOUB, 2004, p. 90]])
- The average absolute relative error for the ANN was 2.11654% across various test cases. ([[2004-ayoub|AYOUB, 2004, p. 90]])
- Residual values for the ANN model were between -109 and 159, which are lower than all other models. ([[2004-ayoub|AYOUB, 2004, p. 103]])

## Limitations

The results of the new developed model can only be used within the range of the data used for development; therefore, caution is required when applying the model to data outside this specific range.

## Recommendations and Future Work

- Improve performance by using a larger dataset with a wider range of variables.
- Incorporate horizontal, vertical, and inclined multiphase flow data to develop a universal model.
- Investigate the importance of all input variables further to potentially reduce the number of inputs.

## Related Concepts

- [[neural-networks]]
- [[mathematical-modeling]]
- [[petrophysics]]
- [[petroleum-engineering]]
- [[middle-east-region]]
- [[matlab]]
