---
type: source
id: "142243"
title: "Numerical Investigation of Rock and Acid Properties Impacting Matrix Acidizing Efficiency"
author: "Murtadha Ali Alkathim"
year: 2022
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Murtada Al-Jawad"
committee_members: []
source_file: "raw/142243 - Numerical Investigation of Rock and Acid Properties Impacting Matrix Acidizing E.pdf"
url: "https://eprints.kfupm.edu.sa/142243"
study_area: "Not stated in source"
keywords:
  - Matrix acidizing
  - Carbonate formation
  - Wormhole propagation
  - Two-scale continuum model
  - Machine learning
  - Fuzzy Logic
  - Artificial Neural Network
  - Support Vector Machine
  - acidizing efficiency
  - artificial intelligence
  - neural networks
  - PVBT
  - Artificial Neural Network (ANN)
  - Fuzzy Logic (FL)
  - Support Vector Machine (SVM)
  - Acid concentration
  - Reaction kinetics
  - Wormhole patterns
techniques:
  - machine-learning-geoscience
  - fuzzy-logic
  - artificial-neural-network
  - support-vector-machine
  - two-scale-continuum-model
  - ct-scanning
  - matlab
  - neural-networks
  - fl
  - reservoir-simulation
tags:
  - degree/ms
  - technique/machine-learning-geoscience
  - technique/fuzzy-logic
  - technique/artificial-neural-network
  - technique/support-vector-machine
  - technique/two-scale-continuum-model
  - technique/ct-scanning
  - technique/matlab
  - technique/neural-networks
  - technique/fl
  - technique/reservoir-simulation
  - theme/reservoir-engineering
  - theme/petroleum-engineering
  - terminology/pore-volume-to-breakthrough
  - terminology/wormhole
  - terminology/skin
  - terminology/porosity
  - terminology/permeability
  - terminology/pore-size-distribution
  - terminology/pore-volume-barrel-treated
  - terminology/pore-radius
  - terminology/diffusion-coefficient
  - terminology/reaction-rate-constant
status: ingested
---

# Numerical Investigation of Rock and Acid Properties Impacting Matrix Acidizing Efficiency

**Summary**: The thesis investigates the impact of rock and acid properties (such as concentration, diffusion coefficient, and reaction rate) on matrix acidizing efficiency, specifically focusing on predicting the Pore Volume to Breakthrough (PVBT). The study utilizes numerical simulations to generate data for training three machine learning models (ANN, FL, and SVM), ultimately developing an empirical correlation to estimate required acid volume.

---

## Research Problem

The high computational cost and complexity of using two-scale continuum models to simulate acid/rock reactions makes it difficult to perform large-scale sensitivity analyses on personal computers. Additionally, limited access to physical core samples and expensive lab equipment poses a challenge for many researchers in optimizing matrix acidizing designs.

## Objectives

- Utilize the two-scale continuum model to investigate the impact of several individual and a combination of rock properties, acid properties, and reaction kinetics on wormhole propagation.
- Use machine learning algorithms (Fuzzy Logic, Artificial Neural Network, and Support Vector Machine) to predict the optimum pore volume to breakthrough in carbonate matrix acidizing using a database generated from the two-scale continuum model.
- Explore the influence of multiple parameters on the acidizing efficiency curve using a two-scale continuum simulation model.
- Perform exploratory data analysis to define model limitations and clean data from redundancy.
- Implement three different AI techniques (ANN, Fuzzy Logic, SVM) to predict PVBT by optimizing each model for best performance.
- Compare the developed AI models based on mathematical error metrics to identify the most accurate prediction model.

## Methods

A two-scale continuum model was implemented in MATLAB to simulate acid/rock reactions at both Darcy and pore scales. The simulation generated a dataset of over 1000 scenarios varying parameters like core length, diameter, acid concentration, diffusion coefficient, reaction rate constant, and surface area. Exploratory Data Analysis (EDA) included data cleaning and statistical analysis (mean, standard deviation, skewness). Three AI models—Artificial Neural Network (ANN), Fuzzy Logic (FL), and Support Vector Machine (SVM)—were implemented to predict PVBT. Models were optimized using trial-and-error for hidden layers/neurons and evaluated using AAPE, AAD, R2, and Correlation Coefficient (CC).

## Data and Materials

A dataset of 1000+ simulation scenarios was generated from a two-scale continuum model. The data included 11 parameters: injection rate (0.1 to 10 cc/min), acid concentration (3% to 28%), diffusion coefficient (4.5E-6 to 3E-5 cm^2/s), core length (3 to 16.5 in), core diameter (1 to 3.25 in), reaction rate constant (1.5E-5 to 1.5E-2 m/s), pore radius (1E-8 to 1E-3 m), specific surface area (250 to 3500 m^2/m^3), porosity (6% to 25%), permeability (0.8 to 250 mD), and acid dissolving power (0.3 to 1.37 kg mineral/kg rock).

## Key Findings

- In carbonate formations, approximately 60% of world reserves are trapped, making matrix acidizing a critical technique for enhancing well performance. ([[2022-alkathim|Alkathim, 2022, p. 16]])
- The two-scale continuum model is computationally expensive and requires high-end processors to simulate large numbers of fine mesh grids or 3D simulations. ([[2022-alkathim|Alkathim, 2022, p. 17]])
- A positive skin factor indicates a damaged well, while a negative value implies enhanced permeability (e.g., through stimulation). ([[2022-alkathim|Alkathim, 2022]])
- page_num_ref": 22 ([[2022-alkathim|Alkathim, 2022]])
- Longer cores correspond to higher PVBT of acid, especially at flow velocities lower than optimum, due to larger cumulative volume of pore spaces. ([[2022-alkathim|Alkathim, 2022, p. 48]])
- Increasing core diameter led to lower optimum PVBT and a lower interstitial velocity because larger cores have larger PVBT and lower wormhole density. ([[2022-alkathim|Alkathim, 2022, p. 52]])
- PVBT values significantly decrease as the acid concentration increases; concentrations higher than 20% do not result in substantial volume optimization. ([[2022-alkathim|Alkathim, 2022, p. 54]])
- Lower porosity results in better acidizing performance (higher PVBT) compared to higher porosity, but requires more acid due to higher mineral/bulk density. ([[2022-alkathim|Alkathim, 2022, p. 57]])
- Permeability has a negligible influence at very low injection rates; however, lower permeability leads to lower PVBT and lower optimum injection velocities in the mid-range. ([[2022-alkathim|Alkathim, 2022, p. 59]])
- Optimum interstitial velocity decreases as pore radius size increases; larger pore radii result in thicker and less branched wormholes. ([[2022-alkathim|Alkathim, 2022, p. 61]])
- Higher specific surface area leads to more efficient acidizing (lower PVBT) because it maximizes acid/rock mineral contact, leading to faster porosity evolution. ([[2022-alkathim|Alkathim, 2022, p. 63]])
- Lower diffusion coefficient values at low injection rates lead to lower PVBT; however, higher diffusion coefficients result in more acid consumption and thicker wormholes. ([[2022-alkathim|Alkathim, 2022, p. 65]])
- There is an inverse relationship between the PVBT and reaction rate constant (kr); higher kr leads to a transition toward mass-transfer limited regimes with lower PVBT. ([[2022-alkathim|Alkathim, 2022, p. 67]])
- Higher acid dissolving power leads to lower acid consumption to reach breakthrough, but results in fewer, thicker wormholes compared to lower dissolving powers. ([[2022-alkathim|Alkathim, 2022, p. 70]])
- The ANN model with two hidden layers and a (10-5) configuration outperformed other models for the 11 input parameters, achieving an R2 of 0.97 and CC of 0.99. ([[2022-alkathim|Alkathim, 2022, p. 98]])

## Limitations

The thesis notes that the two-scale continuum model is computationally expensive and requires high-end processors for quick simulation, which necessitates the use of machine learning as a faster, more affordable alternative.

## Recommendations and Future Work

Expand simulations to 3-D radial flow, incorporate two-phase flow, and include a thermal model to account for temperature effects on acidizing efficiency.

## Related Concepts

- [[machine-learning-geoscience]]
- [[two-scale-continuum-model]]
- [[pore-volume-to-breakthrough]]
- [[wormhole]]
- [[skin]]
- [[reservoir-engineering]]
- [[artificial-neural-network]]
- [[fuzzy-logic]]
- [[support-vector-machine]]
- [[matlab]]
- [[porosity]]
- [[permeability]]
- [[pore-size-distribution]]
- [[pore-volume-barrel-treated]]
- [[neural-networks]]
- [[fl]]
- [[pore-radius]]
- [[diffusion-coefficient]]
- [[reaction-rate-constant]]
