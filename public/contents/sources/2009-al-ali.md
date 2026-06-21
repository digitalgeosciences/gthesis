---
type: source
id: "136178"
title: "LWD POROSITY PREDICTION FOR WELL PLACEMENT USING NEURAL NETWORK"
author: "Ahmed Zaki Al-Ali"
year: 2009
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Muhammad A. Al-Marhoun"
committee_members: []
source_file: "raw/136178 - LWD POROSITY PREDICTION FOR WELL PLACEMENT USING NEURAL NETWORK.pdf"
url: "https://eprints.kfupm.edu.sa/136178"
study_area: "Not stated in source"
keywords:
  - LWD
  - Porosity Prediction
  - Neural Network
  - Well Placement
  - Geosteering
  - LWD density log
  - Sensor Failure
  - Artificial Neural Network (ANN)
  - formation evaluation
techniques:
  - neural-networks
  - well-log-analysis
  - petrophysics
  - matlab
tags:
  - degree/ms
  - technique/neural-networks
  - technique/well-log-analysis
  - technique/petrophysics
  - theme/petrophysics
  - terminology/porosity
  - terminology/petrophysics
status: ingested
---

# LWD POROSITY PREDICTION FOR WELL PLACEMENT USING NEURAL NETWORK

**Summary**: The thesis investigates the use of Artificial Neural Networks (ANN) to predict LWD density logs in scenarios involving sensor failure, environmental artifacts, and well placement. It evaluates three methods for correcting data: averaging, neutron-density correlation (NDCM), and ANN, concluding that ANN provides a more robust solution by incorporating multiple parameters like Gamma Ray and Resistivity.

---

## Research Problem

LWD density tools often fail or cannot be used in certain drilling scenarios (e.g., small hole sizes due, to gas kicks) leading to missing data for formation evaluation. This thesis addresses how to accurately predict these missing logs using machine learning techniques.

## Objectives

- Correct environmental and drilling artifacts in LWD density data.
- Develop an Artificial Neural Network (ANN) model to predict missing LWD density log data due to sensor failure.
- Compare ANN results with other methods like the averaging method and neutron-density correlation.
- Evaluate the effectiveness of different methods for correcting environmental and drilling artifacts in LWD data.
- Assess the ability of ANN to provide consistent porosity measurements across multiple wells.
- Compare predicted results against actual measurements across different scenarios (training, testing, and target wells).

## Methods

The study utilizes Artificial Neural Networks (ANN) to predict LWD density data. The model is trained using a combination of other available log data including Gamma Ray (GR), Resistivity, and Neutron porosity. Four scenarios were analyzed: training sets, testing sets for nearby laterals, and target wells in the same formation but at different distances. Statistical error analysis was performed using metrics such as correlation coefficient (R), Root Mean Square Error (RMSE), and Average Absolute Percent Error (AAPE) to validate the model's performance.

## Data and Materials

The study utilizes LWD log data including density, Gamma Ray (GR), Resistivity, and Neutron logs. Data from multiple wells were used across four scenarios: training sets (Case B, Case C), testing cases for nearby laterals (Case C), and a target well in the same formation but at a distance (Case D).

## Key Findings

- LWD density is a shallow measurement with a depth of investigation (DOI) of approximately 0.5 feet, making it highly susceptible to borehole wash-out. ([[2009-al-ali|Al-Ali, 2009, p. 3]])
- Neutron logs have a DOI of about one foot and are significantly affected by borehole size because washed-out zones appear as high porosity. ([[2009-al-ali|Al-Ali, 2009, p. 4]])
- Borehole wash-out impacts density readings, while sliding during drilling affects data quality based on the tool face angle (TFA). ([[2009-al-ali|Al-Ali, 2009, p. 6]])
- A 4-3/4" LWD density-neutron logging tool in a 5 1/2" hole showed no significant sliding effects due to small stand-off. ([[2009-al-ali|Al-Ali, 2009, p. 8]])
- When the LWD density tool is run without a stabilizer, its effective diameter increases (e.g., from 4 3/4" to 5 1/8"), which can lead to unreliable readings. ([[2009-al-ali|Al-Ali, 2009, p. 11]])
- ANN models with hidden layers of sigmoid neurons and a linear output layer are effective for learning both non-linear and linear relationships in petrophysical data. ([[2009-al-ali|Al-Ali, 2009, p. 20]])
- The backpropagation algorithm was used to adjust weights until the network reached convergence during the training phase. ([[2009-al-ali|Al-Ali, 2009, p. 33]])
- The Levenberg-Marquardt (trainlm) algorithm was identified as the fastest and most effective method for training moderate-sized feed-forward neural networks in a MATLAB environment. ([[2009-al-ali|Al-Ali, 2009, p. 39]])
- A hidden layer of 10 neurons provided the optimal balance between accuracy and avoiding memorization (overtraining) for the density prediction model. ([[2009-al-ali|Al-Ali, 2009, p. 50]])
- The 'tansig' transfer function was found to be the most effective activation function for the hidden layer in the neural network. ([[2009-al-ali|Al-Ali, 2009, p. 54]])
- Resistivity measurements (specifically Rs) showed high correlation with density, making them suitable inputs for training the model compared to P and T which are functions of depth. ([[2009-al-ali|Al-Ali, 2009, p. 45]])
- The ANN model successfully predicted missing data in a scenario where the density tool failed near the total depth (TD) of a horizontal well. ([[2009-al-ali|Al-Ali, 2009, p. 82]])
- The average method for correcting artifacts is simple but can lead to inaccurate porosity calculations if the raw data is significantly compromised. ([[2009-al-ali|Al-Ali, 2009, p. 54]])
- The ANN model successfully predicted missing density data with high accuracy, allowing for consistent formation evaluation across the reservoir. ([[2009-al-ali|Al-Ali, 2009, p. 86]])
- Scenario C, involving a nearby lateral, achieved a high correlation coefficient (R) of 0.98 and an RMSE of 2.07. ([[2009-al-ali|Al-Ali, 2009, p. 90]])

## Limitations

The study notes that while ROP has a high correlation with density, it is also influenced by weight on bit and tool wear; therefore, it was excluded from the primary ANN model to avoid noise.

## Recommendations and Future Work

- ANN techniques can be applied to other porosity logs, such as neutron logs, to ensure consistent measurements across the reservoir.
- Trial and error analysis is required to optimize neural network models.

## Related Concepts

- [[neural-networks]]
- [[well-log-analysis]]
- [[porosity]]
- [[petrophysics]]
- [[saudi-arabia]]
