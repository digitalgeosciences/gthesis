---
type: source
id: "141512"
title: "Rate of Penetration Optimization for Multiple Well Profiles Using Artificial Intelligence Techniques"
author: "Ahmad Mohammad Al-AbdulJabbar"
year: 2020
department: "Petroleum Engineering"
degree: "PhD"
supervisor: "Dr. Salaheldin Elkatatny"
committee_members: []
source_file: "raw/141512 - Rate of Penetration Optimization for Multiple Well Profiles Using Artificial Int.pdf"
url: "https://eprints.kfupm.edu.sa/141512"
study_area: "Field A (specific location not defined)"
keywords:
  - Rate of Penetration
  - Artificial Intelligence
  - Machine Learning
  - Well Profiles
  - Optimization
  - Neural Networks
  - Support Vector Machines
  - ANN
  - Mechanical Specific Energy
techniques:
  - neural-networks
  - machine-learning-geoscience
  - anfis
  - fn
  - least-square-method
  - non-linear-regression
  - data-analysis
  - rbf
  - fuzzy-logic
  - correlation-coefficient
  - tornado-chart
  - functional-networks
  - levenberg-marquardt
  - taylor-series-expansion
  - data-analytics
  - qaqc
tags:
  - degree/phd
  - formation/carbonates
  - formation/siliciclastic-sedimentology
  - location/field-a
  - location/saudi-arabia
  - technique/neural-networks
  - technique/machine-learning-geoscience
  - technique/mathematical-modeling
  - technique/data-analysis
  - theme/petroleum-engineering
  - theme/reservoir-engineering
  - terminology/rate-of-penetration
  - terminology/mechanical-specific-energy
  - terminology/white-box-model
  - terminology/petroleum-engineering
  - terminology/reservoir-engineering
status: ingested
---

# Rate of Penetration Optimization for Multiple Well Profiles Using Artificial Intelligence Techniques

**Summary**: The thesis investigates the optimization of Rate of Penetration (ROP) for various well profiles (vertical, horizontal, and S-shaped) in carbonate and sandstone formations using Artificial Intelligence (AI). It develops and validates several AI models, primarily Artificial Neural Networks (ANN), and converts 'black box' models into 'white box' empirical equations to facilitate real-time prediction.

---

## Research Problem

The complexity of the drilling process makes it difficult to accurately predict and optimize the Rate of Penetration (ROP) using standard mathematical or physical equations alone. There is a need for robust models that can incorporate multiple parameters (mechanical, fluid, and petrophysical) across different well profiles while providing interpretable results.

## Objectives

- Identify important drilling parameters affecting the rate of penetration.
- Develop ROP models using AI techniques (ANN, SVM, ANFIS, FN) for vertical, deviated, S-shape, and horizontal well profiles.
- Convert 'black box' AI models into 'white box' empirical correlations based on weights and biases.
- Validate the developed correlations using unseen well data.
- Develop and compare multiple AI techniques (ANN, GRNN, RBF, Fuzzy Logic, SVM, FN) for ROP prediction.
- Evaluate the impact of different well profiles (Horizontal, S-Shape, Vertical) on drilling performance.

## Methods

The study utilizes several AI models: Artificial Neural Networks (ANN), Generalized Regression Neural Networks (GRNN), Radial Basis Function (RBF) networks, Fuzzy Logic (including SC and FCM), Support Vector Machines (SVM), and Functional Networks (FN). Data preparation involved filtering out noise, removing duplicates, and calculating Mechanical Specific Energy (MSE) to identify efficient drilling windows. Sensitivity analysis was performed on the number of neurons, layers, training functions (e.g., Levenberg-Marquardt), and transfer functions (e.g., tansig, logsig). A 'white box' approach was used to extract linear equations from the ANN models for practical application.

## Data and Materials

The study utilized extensive field data including: over 1,500 data points for vertical wells; over 4,500 data points for horizontal carbonate wells; nearly 1,800 data points for horizontal sandstone wells; and over 7,900 data points for S-shaped well profiles. Parameters included GPM, RPM, SPP, Torque, WOB, MSE, and LWD/MWD logs.

## Key Findings

- Torque showed a high correlation coefficient of 0.88 with Rate of Penetration (ROP) in the analyzed vertical well section. ([[2020-al-abduljabbar|Al-AbdulJabbar, 2020, p. 71]])
- Weight on Bit (WOB) demonstrated a correlation coefficient of 0.78 with ROP. ([[2020-al-abduljabbar|Al-AbdulJabbar, 2020, p. 71]])
- Stand Pipe Pressure (SPP) showed a correlation coefficient of 0.55 with ROP. ([[2020-al-abduljabbar|Al-AbdulJabbar, 2020, p. 71]])
- Pumping Rate (GPM) showed a correlation coefficient of 0.53 with ROP. ([[2020-al-abduljabbar|Al-AbdulJabbar, 2020, p. 71]])
- Unconfined Compressive Strength (UCS) showed a negligible/negative correlation (-0.09) with ROP in the specific vertical well data set analyzed. ([[2020-al-abduljabbar|Al-AbdulJabbar, 2020, p. 71]])
- The ANN model with Levenberg-Marquardt (trainlm) training function and tan-sigmoid transfer function achieved a correlation coefficient of 0.945 and an average absolute percentage error (AAPE) of 4.5. ([[2020-al-abduljabbar|Al-AbdulJabbar, 2020, p. 146]])
- For the horizontal carbonate reservoir, the ANN model with 30 neurons per layer achieved a correlation coefficient of 0.96 and an AAPE of 5.4. ([[2020-al-abduljabbar|Al-AbdulJabbar, 2020, p. 84]])
- The ROP-WOB relationship was found to be negative in several cases (e.g., -0.643 for Well-A), indicating inefficient drilling due to stick and slip or bit whirl. ([[2020-al-abduljabbar|Al-AbdulJabbar, 2020, p. 113]])
- Filtering data based on a target MSE range of 25,000–35,000 psi (near the formation UCS) significantly improved the correlation between ROP and WOB. ([[2020-al-abduljabbar|Al-AbdulJabbar, 2020, p. 114]])
- The ANN model successfully predicted ROP for a vertical well in a sandstone formation with a correlation coefficient of 0.934 and an average absolute percentage error (AAPE) of 7.5. ([[2020-al-abduljabbar|Al-AbdulJabbar, 2020, p. 121]])
- The final 'white box' model extracted as a linear equation for the vertical well was: ROP = 0.001499*GPM + 0.3886*RPM - 0.00025*SPP + 5.91*Torque + 0.0888*WOB - 39.49. ([[2020-al-abduljabbar|Al-AbdulJabbar, 2020, p. 133]])
- The ROP prediction model for vertical wells was validated on well-A with R = 0.92 and tested on wells B and C with R values of 0.95 and 0.94 respectively. ([[2020-al-abduljabbar|Al-AbdulJabbar, 2020, p. 161]])
- The horizontal carbonate well model achieved a correlation coefficient of R = 0.96 during training and R = 0.94 during testing on unseen data. ([[2020-al-abduljabbar|Al-AbdulJabbar, 2020, p. 162]])
- For horizontal sandstone wells, the inclusion of a new unique combination of RPM & WOB equation improved model results significantly, achieving R = 0.98 in training and R = 0.95 in testing. ([[2020-al-abduljabbar|Al-AbdulJabbar, 2020, p. 163]])
- The S-shape well profile prediction achieved a correlation coefficient of R = 0.93 during training and R = 0.92 on unseen data. ([[2020-al-abduljabbar|Al-AbdulJabbar, 2020, p. 164]])

## Limitations

Accuracy is reduced when data is outside the defined range, involves different bit types, experiences loss circulation, or has partial returns. The Taylor series expansion accuracy drops in the last quarter of the input range (beyond 0.5 normalized).

## Recommendations and Future Work

The study suggests that training more wells will significantly improve prediction accuracy and allow for better mapping of entire fields. It also highlights that converting black-box models to white-box equations is essential for use outside specialized modeling software.

## Related Concepts

- [[neural-networks]]
- [[machine-learning-geoscience]]
- [[rate-of-penetration]]
- [[mechanical-specific-energy]]
- [[white-box-model]]
- [[petroleum-engineering]]
- [[field-a]]
- [[reservoir-engineering]]
- [[saudi-arabia]]
