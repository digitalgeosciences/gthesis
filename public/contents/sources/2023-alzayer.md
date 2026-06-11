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
  - well logs
  - machine learning
  - neural networks
  - Formation Pressure
techniques:
  - neural-networks
  - machine-learning-geoscience
  - well-log-analysis
tags:
  - degree/ms
  - location/prinos-basin
  - technique/machine-learning-geoscience
  - technique/well-log-analysis
  - technique/neural-networks
  - theme/petrophysics
  - theme/reservoir-engineering
  - theme/petroleum-engineering
  - terminology/pore-pressure
status: ingested
---

# PREDICTION OF FORMATION PRESSURE FROM WELL LOGS USING ARTIFICIAL INTELLIGENCE TECHNIQUES

**Summary**: The thesis investigates the use of artificial intelligence, specifically Artificial Neural Networks (ANN), to predict pore pressure from well log data in the Epsilon oil field within the Prinos Basin. The study concludes that ANN models provide high accuracy for real-time prediction compared to other methods.

---

## Research Problem

Predicting formation pressure in real-time is critical for drilling safety and economics, but Pressure While Drilling (PWD) equipment is costly and not always available; therefore, accurate prediction using standard well logs (resistivity, GR, density, sonic) is needed.

## Objectives

- Create models for real-time pore pressure gradient prediction using available logs and core data.
- Evaluate different artificial intelligence techniques including ANN, radial basis function model, and general regression neural network.
- Develop an empirical equation based on the optimized ANN model to predict pore pressure.
- Evaluate the effectiveness of artificial intelligence techniques for predicting formation pressure from well log data.
- Compare AI-based models with traditional geopressure prediction equations.
- Develop a robust method to predict pore pressure gradients using integrated well log parameters.

## Methods

The study utilized 48 data points from Well-3 (temperature, porosity, water saturation, and pore pressure). Data were preprocessed by removing non-real values and outliers (outside ±3.0 standard deviations). Three models were compared: ANN, radial basis function, and general regression neural network. The optimal ANN configuration included a single learning layer with 23 neurons, using the Bayesian regularization backpropagation training function and a logarithmic sigmoidal transfer function. An empirical equation was derived from the weights and biases of the optimized ANN to allow for direct calculation of pore pressure.

## Data and Materials

48 data points (initial) reduced to 46 valid datasets from Well-3 in the Epsilon oil field, including formation temperature, porosity, water saturation, and pore pressure. A subset of 42 points was used for training, while others were used for testing/validation.

## Key Findings

- The ANN model showed high accuracy during the training phase with a correlation coefficient (R) of 0.875 and an average absolute percentage error (AAPE) of 4.22%. ([[2023-alzayer|Alzayer, 2023, p. 15]])
- The derived empirical equation for pore pressure prediction showed high accuracy on test data with a correlation coefficient (R) of 0.957 and an AAPE of 5.44%. ([[2023-alzayer|Alzayer, 2023, p. 17]])
- Of the three methods tested (ANN, radial basis function, and general regression neural network), the ANN was found to be the most accurate for prediction. ([[2023-alzayer|Alzayer, 2023, p. 11]])
- The optimal ANN configuration used a single learning layer with 23 neurons, Bayesian regularization backpropagation, and a logarithmic sigmoidal transfer function. ([[2023-alzayer|Alzayer, 2023, p. 10]])
- Artificial Neural Networks (ANNs) are identified as effective tools for various applications including flood forecasting, lithology identification, and predicting wellbore instability. ([[2023-alzayer|Alzayer, 2023, p. 33]])
- Machine learning and data analytics can be used to detect downhole abnormalities while drilling horizontal wells. ([[2023-alzayer|Alzayer, 2023, p. 34]])

## Limitations

Not stated in source

## Recommendations and Future Work

Not stated in source

## Related Concepts

- [[machine-learning]]
- [[well-log-analysis]]
- [[pore-pressure]]
- [[prinos-basin]]
- [[petrophysics]]
- [[neural-networks]]
- [[petroleum-engineering]]
