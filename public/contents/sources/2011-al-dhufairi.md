---
type: source
id: "138433"
title: "Prediction of Mobility Profile with Minimum Real Time Measurements using Artificial Intelligence"
author: "MUBARAK AOUDAH AL-DHUFAIRI"
year: 2011
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Abdulaziz A. Al-Majed"
committee_members: []
source_file: "raw/138433 - Prediction of Mobility Profile with Minimum Real Time Measurements using Artific.pdf"
url: "https://eprints.kfupm.edu.sa/138433"
study_area: "Middle East"
keywords:
  - Artificial Intelligence
  - Artificial Neural Networks (ANN)
  - Functional network (FunNet)
  - Support vector machine (SVM)
  - Mobility Profile
  - Formation Testing Tools
  - Geosteering
  - Drawdown Analysis
  - Well Logging
  - Machine Learning
  - Neural Networks
  - Real-time Measurement
  - Well Placement
  - Real Time Measurements
  - Prediction
  - Well Log Analysis
  - Prediction Model
  - Well Data
techniques:
  - artificial-neural-network
  - functional-network
  - support-vector-machine
  - matlab
  - formation-testing-tool
  - well-log-analysis
  - pressure-transient-analysis
  - neural-networks
  - machine-learning-geoscience
  - funnet
  - mwd
  - lwd
  - petrophysics
  - linear-regression
tags:
  - degree/ms
  - location/middle-east-region
  - technique/artificial-neural-network
  - technique/functional-network
  - technique/support-vector-machine
  - technique/matlab
  - technique/formation-testing-tool
  - technique/well-log-analysis
  - technique/pressure-transient-analysis
  - technique/neural-networks
  - technique/mathematical-modeling
  - technique/machine-learning-geoscience
  - technique/petrophysics
  - technique/linear-regression
  - theme/reservoir-engineering
  - theme/petroleum-engineering
  - theme/petrophysics
  - terminology/mobility
  - terminology/geosteering
  - terminology/tar-mat
  - terminology/porosity
  - terminology/permeability
  - terminology/water-saturation
  - terminology/gamma-ray
  - terminology/petrophysics
status: ingested
---

# Prediction of Mobility Profile with Minimum Real Time Measurements using Artificial Intelligence

**Summary**: The thesis investigates the use of Artificial Intelligence (AI) tools—specifically Artificial Neural Networks (ANN), Functional Networks (FunNet), and Support Vector Machines (SVM)—to predict mobility profiles in horizontal wells using a minimal number of real-time sampling data points. The study aims to reduce the high costs and risks associated with extensive formation testing while improving geosteering accuracy in complex reservoirs containing features like tar mats.

---

## Research Problem

The high cost and risk associated with frequent real-time mobility measurements during horizontal well drilling. The thesis addresses how to optimize these measurements using machine learning to maintain accurate geosteering while reducing operational costs and rig time.

## Objectives

- Predict the mobility profile using AI tools while employing only a minimum number of sampling data points.
- Develop an AI model to establish a relationship between input parameters and mobility to optimize sampling requirements.
- Evaluate different artificial intelligence algorithms (ANN, SVM, FunNet) for predicting mobility profiles.
- Identify the most effective training functions and preprocessing techniques to improve prediction accuracy.
- Demonstrate the application of AI-based mobility prediction to optimize geosteering with minimal real-time data.
- Optimize the number of mobility measurements in horizontal wells using artificial intelligence.

## Methods

The study utilizes three AI models: Artificial Neural Networks (ANN) using various backpropagation functions, Functional Networks (FunNet) with different selection methods, and Support Vector Machines (SVM) with various kernels. These were implemented using Matlab code. The methodology involves collecting mobility data from two different fields (5 wells each), preparing the data for training, and performing statistical error analysis including Regression Value, Average Absolute Percent Relative Error (AAPE), Root Mean Square Error (RMSE), and Correlation Coefficient (R).

## Data and Materials

Data were extracted from MWD logs and formation testing data from 10 wells located in two different fields in the Middle East. Each well provided approximately 12,000 data points across four parameters: Transformed Permeability (PERM), Porosity Log (PHIE), Water Saturation Log (SWE), and Gamma Ray Log (GR).

## Key Findings

- The ANN model performed the best among the three AI tools tested for predicting the mobility profile. ([[2011-al-dhufairi|AL-DHUFAIRI, 2011, p. 11]])
- A mobility profile is defined as the ratio of permeability to the flow of the liquid to the dynamic viscosity of that liquid (M = k/μ). ([[2011-al-dhufairi|AL-DHUFAIRI, 2011, p. 28]])
- The average number of sampling points required for a comprehensive mobility profile using traditional tools is between 60 and 80. ([[2011-al-dhufairi|AL-DHUFAIRI, 2011, p. 24]])
- Mobility profiles are essential for identifying in-situ reservoir fluids, evaluating near wellbore properties, determining well productivity, and characterizing features like tar mats. ([[2011-al-dhufairi|AL-DHUFAIRI, 2011, p. 15]])
- The mobility ratio (Mr) is a critical factor affecting displacement efficiency; reducing the mobility ratio or the mobility of the wetting phase improves recovery. ([[2011-al-dhufairi|AL-DHUFAIRI, 2011, p. 29]])
- The ANN model using the 'trainlm' function with two layers and preprocessing (mapstd, processpca) achieved a perfect correlation coefficient (R=1.0) and zero bias for several wells (e.g., Wells 1, 2, 4, 6, 7, 8, 9, 10). ([[2011-al-dhufairi|AL-DHUFAIRI, 2011, p. 63]])
- The 'trainlm' function outperformed other ANN training functions like traingd and traincgf in terms of prediction accuracy for mobility. ([[2011-al-dhufairi|AL-DHUFAIRI, 2011, p. 70]])
- Among the FunNet models, the Non-Linear variants (e.g., FNBEM, FNBFM) consistently outperformed Linear versions, with some achieving a correlation coefficient (CC) of 1.00. ([[2011-al-dhufairi|AL-DHUFAIRI, 2011, p. 70]])
- The Polynomial kernel in SVM provided the best performance among tested kernels, often yielding CC values of 0.99 and lower RMSE compared to Gaussian or JCB kernels. ([[2011-al-dhufairi|AL-DHUFAIRI, 2011, p. 77]])
- ANN models generally outperformed both FunNet and SVM models in terms of prediction accuracy for mobility profiles. ([[2011-al-dhufairi|AL-DHUFAIRI, 2011, p. 82]])
- The ANN model using the Trainlm function provided the highest accuracy in predicting mobility across all tested wells. ([[2011-al-dhufairi|AL-DHUFAIRI, 2011, p. 80]])
- In Well 1, it was determined that 45% of real-time measurements of mobility could be dropped and replaced by ANN predictions without affecting geosteering quality. ([[2011-al-dhufairi|AL-DHUFAIRI, 2011, p. 86]])
- For Well 2, the model successfully allowed for the omission of approximately 50% of real-time sampling points, equating to a reduction of 13 hours of rig time. ([[2011-al-dhufairi|AL-DHUFAIRI, 2011, p. 88]])
- In Well 3, the ANN model allowed for the removal of nearly 60% of real-time sampling requirements with an accuracy of approximately 96%. ([[2011-al-dhufairi|AL-DHUFAIRI, 2011, p. 90]])
- The study confirmed that significant changes in permeability values are ideal locations to include physical mobility sampling points to anchor and strengthen the prediction model. ([[2011-al-dhufairi|AL-DHUFAIRI, 2011, p. 86]])

## Limitations

The study notes that high-permeability formations may result in insufficient pressure gauge resolution, while very low permeability can lead to long times required to reach final pressure, affecting mobility results. Additionally, drilling and invasion effects can damage the formation or alter its permeability.

## Recommendations and Future Work

- Test the model performance using different datasets from various fields with a wider range of variables.
- Investigate the importance of all input variables to determine and potentially reduce the number of required inputs for mobility estimation.
- Integrate the model into horizontal well geosteering software to provide real-time prediction of mobility as a tool for guiding sampling points.

## Related Concepts

- [[artificial-neural-network]]
- [[functional-network]]
- [[support-vector-machine]]
- [[mobility]]
- [[geosteering]]
- [[reservoir-engineering]]
- [[matlab]]
- [[tar-mat]]
- [[neural-networks]]
- [[mathematical-modeling]]
- [[middle-east-region]]
- [[petroleum-engineering]]
- [[porosity]]
- [[permeability]]
- [[water-saturation]]
- [[gamma-ray]]
- [[petrophysics]]
- [[machine-learning-geoscience]]
- [[well-log-analysis]]
