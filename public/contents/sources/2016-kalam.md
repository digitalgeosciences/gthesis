---
type: source
id: "140113"
title: "AN EMPIRICAL CORRELATION FOR WATER FLOODING PERFORMANCE IN A LAYERED RESERVOIR"
author: "Shams Kalam"
year: 2016
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Sidqi A. Abu-Khamsin"
committee_members: []
source_file: "raw/140113 - AN EMPIRICAL CORRELATION FOR WATER FLOODING PERFORMANCE IN A LAYERED RESERVOIR.pdf"
url: "https://eprints.kfupm.edu.sa/140113"
study_area: "Not stated in source"
keywords:
  - Water flooding
  - Layered reservoir
  - Empirical correlation
  - Artificial neural networks
  - Mobility ratio
  - Dykstra-Parsons coefficient
  - Wettability indicator
  - permeability variation
  - anisotropy
  - stratified reservoir
techniques:
  - reservoir-simulation
  - neural-networks
  - core-analysis
  - petrophysics
  - mathematical-modeling
tags:
  - degree/ms
  - technique/eclipe
  - technique/machine-learning-geoscience
  - technique/reservoir-simulation
  - technique/petrophysics
  - technique/neural-networks
  - technique/mathematical-modeling
  - theme/reservoir-engineering
  - theme/petroleum-engineering
  - theme/water-flooding
  - terminology/mobility-ratio
  - terminology/petrophysics
  - terminology/water-flooding
  - terminology/petrophysics
  - terminology/porosity
  - terminology/wettability
status: ingested
---

# AN EMPIRICAL CORRELATION FOR WATER FLOODING PERFORMANCE IN A LAYERED RESERVOIR

**Summary**: The thesis develops a new empirical correlation to predict the performance of a five-spot water flood in both communicating and non-communicating stratified reservoirs. The study utilizes artificial neural networks (ANN) with optimized weights and biases to incorporate factors like mobility ratio, permeability anisotropy, and a newly introduced 'wettibility indicator'.

---

## Research Problem

Existing methods for predicting water-flood performance in heterogeneous reservoirs often rely on simplifying assumptions or expensive, time-consuming commercial simulations. There is a need for a rapid, accurate correlation that can account for complex factors like rock wettability and permeability anisotropy in layered systems.

## Objectives

- Develop a correlation to predict movable oil recovery for a 5-spot pattern flood.
- Incorporate the effects of reservoir heterogeneity (Dykstra-Parsons coefficient), mobility ratio, permeability anisotropy (kz/kx), rock wettibility, and water cut into the model.
- Provide an estimation method that works for both communicating and non-communicating stratified reservoirs at and beyond water breakthrough.
- Develop an empirical correlation to estimate the movable oil recovery factor (RFM).
- Incorporate key reservoir parameters: permeability variation (V), mobility ratio (M), anisotropy ratio (kz/kx), water cut (fw), and a wettability indicator (WI).
- Utilize Artificial Neural Networks (ANN) to train and validate the correlation against simulation data.

## Methods

The study utilized reservoir simulation (ECLIPSE) to generate a large dataset of 3,500 points for training an Artificial Neural Network. The ANN was a feedforward neural network (FFNN) with one hidden layer containing 14 neurons. Input parameters were normalized before being fed into the network and then de-normalized to provide the final RFM value. Sensitivity analyses were conducted on pattern area, reservoir thickness, and layer sorting. The correlation was validated against simulation cases not included in the training set and compared against field data from two specific fields (Field A and Field B).

## Data and Materials

The study utilized 5,000 simulated output points derived from a simulation model of a 132.23-acre reservoir with 64,000 grid cells and 10 layers. The input parameters included mobility ratios (M), Dykstra-Parsons coefficients (V), permeability anisotropy (kz/kx), wettability indicators (WI), and producing water cuts (fw).

## Key Findings

- The new correlation developed using artificial neural networks matches all simulator results with high accuracy. ([[2016-kalam|Kalam, 2016, p. 25]])
- The correlation successfully predicts the performance of simulation runs that were not used in its development (validation). ([[2016-kalam|Kalam, 2016, p. 25]])
- The correlation accurately predicts the performance of two different field projects. ([[2016-kalam|Kalam, 2016, p. 25]])
- A new wettability indicator (WI) was introduced as a simple measure of wettibility based on relative permeability curves, where WI < 1 indicates oil-wet and WI > 1 indicates water-wet systems. ([[2016-kalam|Kalam, 2016, p. 29]])
- The mobility ratio (M) is defined in this study using the average water saturation behind the flood front (Swf) to better represent frontal displacement. ([[2016-kalam|Kalam, 2016, p. 30]])
- Dykstra-Parsons coefficient (V) values between 0.5 and 0.9 are typical for most reservoirs, with V=0 representing a perfectly homogeneous reservoir. ([[2016-kalam|Kalam, 2016, p. 32]])
- The study determined that crossflow between layers improves oil recovery for systems with mobility ratios less than 1 and retards it for systems with mobility ratios greater than 1. ([[2016-kalam|Kalam, 2016, p. 41]])
- The Artificial Neural Network (ANN) model achieved a high accuracy with an R-squared value of 0.9973 for training data and 0.997 for testing data. ([[2016-kalam|Kalam, 2016, p. 97]])
- Mean Absolute Percentage Error (MAPE) was recorded at 6.75% for training data and 7.08% for testing data, indicating a strong correlation. ([[2016-kalam|Kalam, 2016, p. 97]])
- Oil recovery is independent of pattern size and reservoir thickness in the tested scenarios. ([[2016-kalam|Kalam, 2016, p. 68]])
- A larger permeability variation (V) results in poorer oil recovery at both water breakthrough and beyond breakthrough. ([[2016-kalam|Kalam, 2016, p. 77]])
- Crossflow increases oil recovery at breakthrough for favorable mobility ratios but leads to poorer recovery for unfavorable mobility ratios. ([[2016-kalam|Kalam, 2016, p. 78]])
- Beyond water breakthrough, crossflow improves oil recovery for all mobility ratios, especially in highly heterogeneous reservoirs. ([[2016-kalam|Kalam, 2016, p. 79]])
- The best recovery is obtained with the neutral-wettability system (WI=1) in both low and high heterogeneity scenarios. ([[2016-kalam|Kalam, 2016, p. 81]])
- The new correlation matched Field A data perfectly up to an RFM of 82%. ([[2016-kalam|Kalam, 2016, p. 106]])

## Limitations

Initial deviations in field data (Field A and Field B) up to a water cut of 0.2 are attributed to real-world factors like formation water or aquifer contribution, which may cause earlier breakthrough than predicted by the simulation model.

## Recommendations and Future Work

- Extend the study to include various density ratios to account for gravity-induced crossflows.
- Incorporate capillary pressure effects, especially for low permeability reservoirs.
- Conduct experiments using rock blocks of varying wettibilities to test the correlation.
- Use the Lorenz coefficient (L) instead of the Dykstra-Parsons coefficient for reservoir heterogeneity quantification.
- Test the new correlation with a larger volume of field data.

## Related Concepts

- [[neural-networks]]
- [[reservoir-simulation]]
- [[mobility-ratio]]
- [[petrophysics]]
- [[water-flooding]]
- [[reservoir-engineering]]
- [[petroleum-engineering]]
- [[porosity]]
- [[wettability]]
- [[artificial-neural-network]]
