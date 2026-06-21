---
type: source
id: "143053"
title: "DETECTION OF DRILLING VIBRATIONS IN CURVE & HORIZONTAL SECTIONS"
author: "RAMY MAHMOUD SAADELDIN"
year: 2023
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Salaheldin M. Elkatatny"
committee_members: []
source_file: "raw/143053 - DETECTION OF DRILLING VIBRATIONS IN CURVE &amp; HORIZONTAL SECTIONS.pdf"
url: "https://eprints.kfupm.edu.sa/143053"
study_area: "Not stated in source"
keywords:
  - drilling vibrations
  - curve section
  - horizontal section
  - machine learning
  - artificial neural network
  - surface drilling data
  - artificial neural networks
  - real-time monitoring
techniques:
  - neural-networks
  - rbf
  - machine-learning-geoscience
  - anfis
  - fn
  - statistical-analysis
tags:
  - degree/ms
  - technique/neural-networks
  - technique/machine-learning-geoscience
  - technique/statistical-analysis
  - technique/rbf
  - technique/anfis
  - theme/petroleum-engineering
  - theme/drilling-engineering
  - terminology/petroleum-engineering
  - terminology/drilling-engineering
  - terminology/statistical-analysis
  - terminology/signal-processing
  - terminology/petrophysics
  - terminology/drilling-dynamics
  - terminology/non-productive-time
status: ingested
---

# DETECTION OF DRILLING VIBRATIONS IN CURVE & HORIZONTAL SECTIONS

**Summary**: The thesis investigates the detection of three types of downhole vibrations (axial, torsional, and lateral) during drilling operations in curve and horizontal sections using surface drilling data. By applying machine learning techniques, specifically Artificial Neural Networks (ANN), the study aims to provide a cost-effective method for monitoring drillstring health and optimizing performance without requiring expensive downhole sensors.

---

## Research Problem

Downhole vibrations (axial, lateral, and torsional) cause significant wear on the bottom hole assembly (BHA) and increase non-productive time. There is a need for reliable methods to predict these vibrations in real-time using only surface parameters (ROP, Torque, DSR, Mud Rate, SPP, WOB) to allow for proactive mitigation during complex drilling operations like horizontal and curve sections.

## Objectives

- Detect three types of downhole vibrations (axial, torsional, and lateral) during drilling operations.
- Utilize surface drilling data to automatically detect downhole vibrations in curve and horizontal sections.
- Evaluate the performance of multiple machine learning techniques (ANN, RBF, SVM, ANFIS, FN) for vibration prediction.
- Develop an ANN-based equation for detecting downhole vibrations from surface parameters.
- Develop machine learning models to detect downhole vibrations from surface drilling data.
- Evaluate the performance of different ML techniques (RBF, SVM, ANFIS, FN) in predicting vibration modes.

## Methods

The study utilizes surface rig sensor data (ROP, T, DSR, Q, SPP, WOB) as input features and downhole vibration measurements as target parameters. Data preprocessing includes removing outliers/zeros, noise reduction, and statistical analysis (correlation coefficients). Four ML models are compared: Radial Basis Function (RBF), Support Vector Machines (SVM), Adaptive Neuro-Fuzzy Inference System (ANFIS), and Functional Networks (FN). Models are optimized through sensitivity analysis of hyperparameters (e.g., number of neurons, kernel types, membership functions). Performance is evaluated using the coefficient of correlation (R) and Average Absolute Percentage Error (AAPE). A white-box equation is derived from ANN weights/biases for real-time implementation.

## Data and Materials

Horizontal section data: 5750 points for training, 3950 points for validation. Curve section data: 2730 points for training, 1810 points for validation (unseen well). Total of 13,927 field data points were used to build the ANN model.

## Key Findings

- The three types of downhole vibrations (axial, torsional, and lateral) were successfully detected using five ML techniques: ANN, RBF, SVM, ANFIS, and FN. ([[2023-saadeldin|SAADELDIN, 2023, p. 15]])
- Developed models showed a high correlation coefficient (higher than 0.9) and an average absolute percentage error (below 7.5%) between actual readings and predictions. ([[2023-saadeldin|SAADELDIN, 2023, p. 15]])
- The ANN model trained on 9,750 data points achieved R values of 0.99 for axial and lateral vibrations and 0.96 for torsional vibrations, with AAPE below 2.4% for all three modes. ([[2023-saadeldin|SAADELDIN, 2023, p. 38]])
- The validation model using an unseen dataset of 9,284 measurements showed R values of 0.99, 0.98, and 0.95 for lateral, axial, and torsional vibrations respectively, with AAPE values of 3.5%, 3.0%, and 1.89%. ([[2023-saadeldin|SAADELDIN, 2023, p. 39]])
- The inclusion of all six surface parameters (Q, SPP, DSR, T, WOB, ROP) was found to enhance model accuracy compared to excluding any parameter. ([[2023-saadeldin|SAADELDIN, 2023, p. 37]])
- The RBF model showed a correlation coefficient (R) between 0.91 and 0.98 with an AAPE ranging from 1.1% to 7.3% for predicting vibrations in horizontal sections. ([[2023-saadeldin|SAADELDIN, 2023, p. 53]])
- The ANFIS model provided the highest accuracy among iterations, with R > 0.99 and AAPE < 2.2% for axial and lateral predictions during training. ([[2023-saadeldin|SAADELDIN, 2023, p. 57]])
- Torsional vibration prediction is more challenging due to the presence of a downhole mud motor in the BHA, which complicates the relationship between surface parameters and torsional vibrations. ([[2023-saadeldin|SAADELDIN, 2023, p. 67]])
- The ANN model for curve sections achieved R > 0.95 and AAPE < 3.5% across all three vibration modes during validation on unseen data. ([[2023-saadeldin|SAADELDIN, 2023, p. 87]])
- A white-box equation was successfully extracted from the ANN weights/biases to allow for real-time estimation of vibrations without using complex code. ([[2023-saadeldin|SAADELDIN, 2023, p. 87]])

## Limitations

The study's scope is limited by the specific data base used, which focused on drilling through a limestone formation and a specific range of data points.

## Recommendations and Future Work

Develop physical and cloud platforms to receive, sort, analyze, and optimize drilling parameters in real-time. Specifically: 1) Develop a local data processing system at the wellsite to reduce latency; 2) Create an intermediate real-time platform using cloud computers to provide live recommendations for drilling operations.

## Related Concepts

- [[neural-networks]]
- [[machine-learning-geoscience]]
- [[petroleum-engineering]]
- [[drilling-engineering]]
- [[statistical-analysis]]
- [[signal-processing]]
- [[anfis]]
- [[rbf]]
- [[petrophysics]]
- [[drilling-dynamics]]
- [[non-productive-time]]
