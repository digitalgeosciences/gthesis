---
type: source
id: "143120"
title: "Uncertainty Quantification in Reservoir Simulation with Monte Carlo Simulation and Polynomial Chaos Expansion"
author: "Tengku Muhammad Sofyan Astsauri"
year: 2024
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Yuzhu Wang"
committee_members: []
source_file: "raw/143120 - Uncertainty Quantification in Reservoir Simulation with Monte Carlo Simulation a.pdf"
url: "https://eprints.kfupm.edu.sa/143120"
study_area: "PUNQ S-3 industrial reservoir model"
keywords:
  - Uncertainty Quantification
  - Reservoir Simulation
  - Monte Carlo Simulation
  - Polynomial Chaos Expansion
  - Surrogate Modeling
  - Sobol Analysis
  - Cumulative Oil Production
techniques:
  - stochastic-simulation
  - polynomial-chaos-expansion
  - sobol-analysis
  - latin-hypercube-sampling
  - least-square-minimization
  - mathematical-modeling
tags:
  - degree/ms
  - technique/stochastic-simulation
  - technique/polynomial-chaos-expansion
  - technique/sobol-analysis
  - technique/latin-hypercube-sampling
  - technique/least-square-minimization
  - technique/mathematical-modeling
  - theme/reservoir-simulation
  - theme/uncertainty-quantification
  - terminology/uncertainty-quantification
  - terminology/reservoir-simulation
status: ingested
---

# Uncertainty Quantification in Reservoir Simulation with Monte Carlo Simulation and Polynomial Chaos Expansion

**Summary**: The thesis evaluates the performance of Polynomial Chaos Expansion (PCE) models as an alternative to Monte Carlo Simulation (MCS) for uncertainty quantification in reservoir simulation. It specifically investigates how polynomial degree and sample size affect the accuracy and computational efficiency of PCE in predicting cumulative oil production.

---

## Research Problem

Reservoir simulations face significant input uncertainties from geological and modeling variations; while Monte Carlo Simulation (MCS) is robust, its high computational cost makes it impractical for complex models. Polynomial Chaos Expansion (PCE) offers a faster alternative but requires investigation into how polynomial degree and sample size impact its accuracy.

## Objectives

- Evaluate the performance of Monte Carlo Simulation and Polynomial Chaos Expansion in reservoir simulations.
- Investigate how degree order and sample size impact PCE performance.
- Determine the relationship between polynomial degree and sample size in high-order PCE models.
- Evaluate PCE model performance across various polynomial degrees (3, 5, 7, 9, and 11)
- Determine the minimum sample size required for higher-degree PCE models to avoid overfitting
- Compare the computational efficiency of PCE versus Monte Carlo Simulation (MCS) for cumulative oil production prediction

## Methods

The study utilizes the PUNQ S-3 industrial reservoir model, which includes 10 uncertain parameters (e.g., KRG, KRO, KRW, etc.) following various distributions. Sensitivity analysis is performed using the Sobol method to identify key drivers of cumulative oil production and reduce dimensionality. Two primary methods for uncertainty quantification are compared: Monte Carlo Simulation (MCS), involving 17,000 realizations, and Polynomial Chaos Expansion (PCE). PCE models are constructed using Least Square Minimization with coefficients determined from a set of points generated via Latin Hypercube Sampling (LHS). The study evaluates the impact of varying polynomial degrees (3, 5, 7, 9, 11) and different sample sizes (multipliers of the number of terms) on the accuracy of mean, variance, P10, P50, and P90 values.

## Data and Materials

The study uses the PUNQ S-3 industrial reservoir model consisting of a 19x28x5 grid (2660 total blocks). The simulation involves 17,000 Monte Carlo realizations. Ten input parameters are analyzed: CPOR, KRG, KRO, KRW, NG, NW, MULTIPERMI, MULTIPERMK, MULTIPOR, and SORW.

## Key Findings

- PCE provides an efficient alternative to traditional MCS, achieving over 95% of MCS accuracy while requiring less than 1% of the computational time. ([[2024-astsauri|Astsauri, 2024, p. 13]])
- Monte Carlo simulation results stabilize once the number of realizations exceeds 17,000. ([[2024-astsauri|Astsauri, 2024, p. 44]])
- Sensitivity analysis using the Sobol method identified porosity multiplier (57%), horizontal permeability multiplier (40%), and rock compressibility (2.3%) as the most significant parameters for reducing dimensionality. ([[2024-astsauri|Astsauri, 2024, p. 47]])
- PCE models with degrees 3 and 5 showed high R² values (>0.95) for both training and evaluation datasets, indicating good generalization. ([[2024-astsauri|Astsauri, 2024, p. 50]])
- Higher-order PCE models (degrees 7, 9, and 11) exhibited a significant drop in performance (lower R² values) due to the bias-variance tradeoff where increased complexity leads to overfitting. ([[2024-astsauri|Astsauri, 2024, p. 51]])
- For degree 7, increasing the sample size from 240 points to 336 (multiplier of 3) significantly improved R² values from ~0.75 to over 0.93. ([[2024-astsauri|Astsauri, 2024, p. 58]])
- For degree 9, a sample size of at least 450 points was insufficient; consistent results were only achieved when the multiplier reached 5 (sample size of 1092). ([[2024-astsauri|Astsauri, 2024, p. 60]])
- PCE models offer a highly efficient alternative to MCS, achieving comparable accuracy (R² > 0.9) for cumulative oil production with significantly fewer samples (e.g., 2,548 samples for degree 11 vs. 17,000 for MCS). ([[2024-astsauri|Astsauri, 2024, p. 62]])
- PCE models are computationally superior to MCS; while MCS requires approximately 10,493 seconds (over two hours) to converge, PCE models require less than one second. ([[2024-astsauri|Astsauri, 2024, p. 55]])
- Lower-degree polynomials (degrees 3 and 5) can achieve high accuracy (R² > 0.95, error < 1%) with small sample sizes (50 and 120 samples respectively). ([[2024-astsauri|Astsauri, 2024, p. 62]])
- Higher-degree models require significantly larger datasets to avoid overfitting; degree 7 requires at least 3x $N_t$, while degrees 9 and 11 require 5x and 7x $N_t$ respectively. ([[2024-astsauri|Astsauri, 2024, p. 62]])
- The proposed formula $N_s = (1 + [d/2]) \times \frac{(M+d)!}{M!d!}$ successfully identifies the minimum sample size to ensure robust performance for higher-degree PCE models. ([[2024-astsauri|Astsauri, 2024, p. 57]])
- For degree 9, a sample size of 1,092 (n_p=3) showed significant improvement over 728 samples, but still required more samples to reach R² > 0.9. ([[2024-astsauri|Astsauri, 2024, p. 51]])
- PCE models for degrees 7 and 9 accurately estimate cumulative oil production with residual distributions centered around zero when sample sizes are sufficient. ([[2024-astsauri|Astsauri, 2024, p. 49]])

## Limitations

High-order PCE models are susceptible to overfitting and high variance if sample sizes do not scale appropriately with polynomial degree.

## Recommendations and Future Work

The study suggests that for complex systems, higher-order polynomials require significantly larger sample sizes to balance the trade-off between bias and variance and ensure robust performance.

## Related Concepts

- [[stochastic-simulation]]
- [[polynomial-chaos-expansion]]
- [[sobol-analysis]]
- [[latin-hypercube-sampling]]
- [[uncertainty-quantification]]
- [[reservoir-simulation]]
