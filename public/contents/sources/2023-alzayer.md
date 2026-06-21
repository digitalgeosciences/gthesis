---
type: source
id: "142331"
title: "PREDICTION OF FORMATION PRESSURE FROM WELL LOGS USING ARTIFICIAL INTELLIGENCE TECHNIQUES"
author: "Bassam Alzayer"
year: 2023
department: "Geosciences"
degree: "MS"
supervisor: "Pantelis Soupios"
committee_members:
  - "Salaheldin Elkatatny"
  - "Umair Waheed"
source_file: "raw/142331 - PREDICTION OF FORMATION PRESSURE FROM WELL LOGS USING ARTIFICIAL INTELLIGENCE TE.pdf"
url: "https://eprints.kfupm.edu.sa/id/eprint/142331/"
study_area: "Epsilon oil field, Prinos Basin, North Aegean Sea, Greece"
keywords:
  - pore pressure prediction
  - artificial intelligence
  - neural networks
  - well logs
  - real-time monitoring
techniques:
  - machine-learning-geoscience
  - neural-networks
  - data-analysis
tags:
  - degree/ms
  - location/prinos-basin
  - technique/machine-learning-geoscience
  - technique/neural-networks
  - theme/petrophysics
  - theme/well-log-analysis
  - terminology/in-situ-stress
  - terminology/petrophysics
status: ingested
---

# PREDICTION OF FORMATION PRESSURE FROM WELL LOGS USING ARTIFICIAL INTELLIGENCE TECHNIQUES

**Summary**: The thesis investigates the use of artificial intelligence, specifically Artificial Neural Networks (ANN), to predict formation pore pressure in real-time using well log data and core measurements. The study concludes that an ANN model utilizing temperature, porosity, and water saturation as inputs provides a highly accurate prediction with low average absolute percentage error (AAPE).

---

## Research Problem

The difficulty of obtaining real-time pore pressure data due to the high cost and limited availability of Pressure While Drilling (PWD) equipment in certain fields like the Epsilon oil field in the Prinos Basin.

## Objectives

- Develop models for real-time pore pressure gradient prediction using available logs and core data.
- Compare different artificial intelligence techniques: Artificial Neural Networks (ANN), Radial Basis Function (RBF) model, and General Regression Neural Network (GRN).
- Extract a usable mathematical equation from the optimized ANN model to predict pore pressure.

## Methods

The study involved data collection of 48 points for temperature, porosity, water saturation, and pore pressure from Well-3. Data preprocessing included removing non-real values (e.g., Sw < 0 or > 1) and outliers beyond ±3 standard deviations. Three models were tested: ANN, RBF, and GRN. The ANN model was optimized by testing various training functions (Levenberg-Marquardt, resilient backpropagation, Bayesian regularization), activation functions (tangential sigmoidal, logarithmic sigmoidal, linear), and network architectures (1 to 3 layers, 4 to 30 neurons). The final optimized model used a single layer with 5 neurons, Bayesian regularization, and a logarithmic sigmoidal function. A mathematical equation was derived from the weights and biases of this ANN to allow for direct calculation.

## Data and Materials

Data collected from Well-3 in the Epsilon oil field (Prinous Basin) included 48 data points initially; after preprocessing, 42 datasets were used for training and testing. Parameters included formation temperature (°C), porosity (fraction), water saturation (fraction), and pore pressure (psi).

## Key Findings

- The Artificial Neural Network (ANN) was identified as the most accurate method among the three tested models (ANN, RBF, and GRN) for predicting pore pressure. ([[2023-alzayer|Alzayer, 2023, p. 11]])
- The optimized ANN model achieved a high correlation coefficient (R) of 0.875 and an Average Absolute Percentage Error (AAPE) of 4.22% during the training phase. ([[2023-alzayer|Alzayer, 2023, p. 27]])
- The derived equation for pore pressure estimation, tested on remaining data points from Well-3, yielded a correlation coefficient (R) of 0.957 and an AAPE of 5.44%. ([[2023-alzayer|Alzayer, 2023, p. 29]])
- Input parameters included formation temperature (range: 137.3 to 149.2 °C), porosity (range: 0.037 to 0.182), and water saturation (range: 0.001 to 0.999). ([[2023-alzayer|Alzayer, 2023, p. 23]])

## Limitations

Not stated in source

## Recommendations and Future Work

Not stated in source

## Related Concepts

- [[machine-learning-geoscience]]
- [[neural-networks]]
- [[in-situ-stress]]
- [[petrophysics]]
- [[prinos-basin]]
