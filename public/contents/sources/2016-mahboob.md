---
type: source
id: "140071"
title: "Empirical Correlations for 5-Spot Water Flooding Performance with Different Permeability Sortings"
author: "AHMAD MAHBOOB"
year: 2016
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Sidqi A. Abu-Khamsin"
committee_members: []
source_file: "raw/140071 - Empirical Correlations for 5-Spot Water Flooding Performance with Different Perm.pdf"
url: "https://eprints.kfupm.edu.sa/140071"
study_area: "Not stated in source"
keywords:
  - Water flooding
  - 5-spot pattern
  - Permeability sorting
  - Mobility ratio
  - Artificial neural networks
  - IFT
  - CA
  - KFUPM
techniques:
  - reservoir-simulation
  - neural-networks
  - mathematical-modeling
  - artificial-neural-network
  - petrophysics
  - core-analysis
  - well-log-analysis
  - multi-variant-regression
tags:
  - degree/ms
  - technique/reservoir-simulation
  - technique/neural-networks
  - technique/mathematical-modeling
  - technique/artificial-neural-network
  - technique/petrophysics
  - technique/core-analysis
  - technique/well-log-analysis
  - technique/multi-variant-regression
  - theme/reservoir-engineering
  - theme/petroleum-engineering
  - terminology/mobility-ratio
  - terminology/porosity
  - terminology/permeability
  - terminology/wettibility
  - terminology/petrophysics
  - terminology/petroleum-engineering
status: ingested
---

# Empirical Correlations for 5-Spot Water Flooding Performance with Different Permeability Sortings

**Summary**: The thesis develops empirical correlations using Artificial Neural Networks (ANN) to predict movable oil recovery factor (RFm) in 5-spot water flooding. It evaluates the impact of mobility ratio, permeability heterogeneity, density ratio, and wettability on recovery performance across both ascending and descending permeability arrangements.

---

## Research Problem

Current prediction methods for water flooding in stratified reservoirs rely on simplifying assumptions (like piston-like flow), while commercial simulation is computationally expensive and not accessible to all engineers. There is a need for empirical correlations that provide quick, accurate estimates of movable oil recovery as a function of mobility ratio, permeability variation, and other parameters.

## Objectives

- Develop an empirical correlation that estimates the recovery factor based on movable oil saturation for five-spot pattern flooding in communicating stratified reservoirs without assuming piston-like displacement.
- Develop two specific correlations: one for ascending arrangement of permeability and one for descending arrangement of permeability.
- Introduce a new 'Wettibility Indicator' (WI) as a simple measure of wettibility based on relative permeability curves.
- Verify the developed correlations using both field data and simulated data.
- Incorporate key parameters including permeability variation (V), production watercut (fw), mobility ratio (M), rock wettability, and oil-water density ratio (beta) into the correlation.
- Validate the developed correlation using field data.

## Methods

The study utilized the ECLIPSE 100 simulator to generate a large dataset of simulation runs for various combinations of parameters including mobility ratio (M), permeability variation (V), density ratio ($\beta$), water cut ($f_w$), and wettibility indicator (WI). A feedforward neural network (FFNN) was then used to develop empirical correlations. The training process involved 3,960 data points, with a 70/30 split for training and testing. The model utilized a hidden layer of 10 neurons with a tan-sigmoid activation function and a linear transfer function in the output layer. Levenberg-Marquardt back-propagation was used for optimization.

## Data and Materials

A dataset of 7,920 simulation runs was generated from ECLIPSE 100 simulations for a 5-spot pattern in a stratified reservoir with 10 layers. The study analyzed variations in mobility ratio (0.1 to 4), permeability variation (0.1 to 0.9), oil-to-water density ratio (0.7 to 1.0), and three different wettability systems.

## Key Findings

- Two artificial neural network correlations were developed to estimate movable oil recovery factor as a function of mobility ratio (M), oil-water density ratio (beta), permeability variation coefficient (V), producing water cut (fw), and wettibility indicator (WI). ([[2016-mahboob|MAHBOOB, 2016, p. 20]])
- The Wettibility Indicator (WI) is a new parameter introduced as a simple measure of wettibility based solely on features of the relative permeability curves, where WI < 1 indicates oil-wet systems and WI > 1 indicates water-wet systems. ([[2016-mahboob|MAHBOOB, 2016, p. 21]])
- The correlation for ascending arrangement of permeability and the correlation for descending arrangement of permeability both matched all simulator results with high accuracy. ([[2016-mahboob|MAHBOOB, 2016, p. 21]])
- The developed correlations also matched the performance of two different field projects with reasonable accuracy. ([[2016-mahboob|MAHBOOB, 2016, p. 23]])
- Mobility ratio (M) is a key factor that influences water flood performance and dictates the choice of flood pattern; it is defined as the ratio of the mobility of the displacing phase to that of the displaced phase. ([[2016-mahboob|MAHBOOB, 2016, p. 25]])
- The Dykstra-Parsons coefficient (V) measures reservoir heterogeneity, ranging from 0 (homogeneous) to 1 (completely heterogeneous). ([[2016-mahboob|MAHBOOB, 2016, p. 28]])
- A correlation by DeSouza and Brigham (1995) showed that for a range of permeability variations (0.3 to 0.8) and mobility ratios (0.1 to 10), errors in predicting coverage were less than 2% for higher water-oil ratios. ([[2016-mahboob|MAHBOOB, 2016, p. 45]])
- The Dykstra-Parsons method significantly overestimates the amount of movable oil behind the front at the moment of breakthrough compared to numerical simulation. ([[2016-mahboob|MAHBOOB, 2016, p. 49]])
- Simulation results showed that crossflows due to gravitational effects (positive gravity number) delayed water breakthrough and increased fractional oil recovery in heterogeneous reservoirs. ([[2016-mahboob|MAHBOOB, 2016, p. 47]])
- The study identified five key parameters for the correlation: Mobility Ratio (M), Coefficient of Permeability Variation (V), Oil to Water Density Ratio (beta), Rock Wettability, and Production Watercut (fw). ([[2016-mahboob|MAHBOOB, 2016, p. 51]])
- A total of 7,920 simulation data points were obtained for the correlation development. ([[2016-mahboob|MAHBOOB, 2016, p. 68]])
- The study confirmed that the recovery factor is independent of the pattern size (area) and the specific arrangement of layers (random vs. descending). ([[2016-mahboob|MAHBOOB, 2016, p. 75]])
- Oil recovery factor is independent of reservoir thickness in both ascending and descending permeability arrangements. ([[2016-mahboob|MAHBOOB, 2016, p. 77]])
- Reservoirs with favorable mobility ratios (M < 1) yield higher oil recovery compared to unfavorable mobility ratios (M > 1). ([[2016-mahboob|MAHBOOB, 2016, p. 79]])
- As reservoirs become more heterogeneous (higher permeability variation), less oil is recovered. ([[2016-mahboob|MAHBOOB, 2016, p. 85]])

## Limitations

Capillary pressure effects were neglected; Dykstra-Parsons coefficient used instead of Lorenz coefficient; limited field data for validation; lower values for anisotropic ratios; fixed flood pattern (5-spot).

## Recommendations and Future Work

- Include capillary pressure effects for extreme wettibility systems at higher anisotropic ratios.
- Use the Lorenz coefficient (L) to quantify reservoir heterogeneity as it accounts for porosity variation.
- Test correlations with more field data.
- Consider higher values of anisotropic ratios.
- Investigate the effect of mean permeability on oil recovery factor.
- Investigate the effect of injection rate at low density ratios and significant anisotropic ratios.
- Extend study to other flood patterns like line drive or seven-spot.

## Related Concepts

- [[neural-networks]]
- [[reservoir-simulation]]
- [[mobility-ratio]]
- [[porosity]]
- [[permeability]]
- [[wettibility]]
- [[reservoir-engineering]]
- [[petroleum-engineering]]
- [[artificial-neural-network]]
- [[petrophysics]]
