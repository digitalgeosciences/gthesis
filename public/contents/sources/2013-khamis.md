---
type: source
id: "138990"
title: "OPTIMIZATION OF DRILLING PARAMETERS USING SPECIFIC ENERGY IN REAL TIME"
author: "Mohammed Ali Nasser Khamis"
year: 2013
department: "Petroleum Engineering"
degree: "PhD"
supervisor: "Dr. Abdulaziz A. Al-Majed"
committee_members: []
source_file: "raw/138990 - OPTIMIZATION OF DRILLING PARAMETERS USING SPECIFIC ENERGY IN REAL TIME.pdf"
url: "https://eprints.kfupm.edu.sa/138990"
study_area: "Middle East region"
keywords:
  - Optimization of Drilling Parameters
  - Specific Energy
  - Real Time Data
  - Rate of Penetration (ROP)
  - Weight on Bit (WOB)
  - Rotation per Minute (RPM)
  - Particle Swarm Optimization (PSO)
  - Drilling parameters
  - Real-time optimization
  - Mechanical Specific Energy (MSE)
  - Artificial Intelligence
  - Neural Networks
  - Fuzzy Logic
  - Optimization
  - Real Time
  - Support Vector Machines
  - Particle Swarm Optimization
  - well logging
  - lithology
techniques:
  - particle-swarm-optimization
  - multivariableanalysis
  - regression-analysis
  - data-analysis
  - machine-learning-geoscience
  - neural-networks
  - fuzzy-logic
  - non-linear-regression
  - fn
  - pso
  - matlab
  - well-log-analysis
  - petrophysics
tags:
  - degree/phd
  - location/middle-east-region
  - technique/particle-swarm-optimization
  - technique/regression-analysis
  - technique/data-analysis
  - technique/machine-learning-geoscience
  - technique/neural-networks
  - technique/fuzzy-logic
  - technique/non-linear-regression
  - technique/petrel
  - technique/matlab
  - technique/well-log-analysis
  - technique/petrophysics
  - theme/petroleum-engineering
  - theme/drilling-engineering
  - theme/reservoir-engineering
  - terminology/petroleum-engineering
  - terminology/drilling-engineering
  - terminology/mechanical-specific-energy
  - terminology/drilling-specific-energy
  - terminology/rate-of-penetration
  - terminology/weight-on-bit
  - terminology/reservoir-engineering
  - terminology/petrophysics
  - terminology/porosity
  - terminology/petrophysics
status: ingested
---

# OPTIMIZATION OF DRILLING PARAMETERS USING SPECIFIC ENERGY IN REAL TIME

**Summary**: The thesis investigates the optimization of drilling parameters (RPM, WOB, and Qm) to maximize the Rate of Penetration (ROP) using the Drilling Specific Energy (DSE) equation. It proposes a real-time application methodology utilizing Particle Swarm Optimization (PSO) and various artificial intelligence models like Support Vector Machines (SVM) and Functional Networks (FN).

---

## Research Problem

The primary problem is the inefficiency of manual drilling parameter selection, which can lead to suboptimal Rate of Penetration (ROP), increased drilling time, and accelerated bit wear. The study addresses this by developing a model to optimize parameters in real-time based on the DSE equation.

## Objectives

- Optimize Rate of Penetration (ROP) using Drilling Specific Energy (DSE) based on real-time and rig-site data.
- Develop a correlation between ROP and influencing parameters such as WOB, RPM, Torque, and bit hydraulics.
- Implement Particle Swarm Optimization (PSO) to identify optimal values for drilling parameters in real-time.
- Improve drilling operation efficiency by reducing costs through the development of an efficient system based on high-quality data.
- Develop a technique to optimize drilling parameters in real time to achieve maximum ROP based on Drilling Specific Energy (DSE).
- Perform quality control (QC/QA) of real-time drilling data.

## Methods

The study follows a multi-step workflow: 1. Data Collection & Selection: Selecting clean lithology (limestone) from three wells in the Middle East. 2. Data QC/QA: Standardizing units, filling gaps, and removing outliers. 3. Modeling: Developing non-linear regression models for ROP as a function of WOB, RPM, T, and Qm; modeling torque via coefficient of friction (mu); and simplifying DSE by correlating hydraulic factor (lambda) to bit diameter. 4. AI Validation: Using Neural Networks (cascade-forward), Fuzzy Logic (sub-clustering), Support Vector Machines, and Functional Networks to validate the ROP models. 5. Optimization: Applying Particle Swarm Optimization (PSO) to minimize DSE and maximize ROP.

## Data and Materials

The study utilizes real-time data from rig sites, including parameters such as Weight on Bit (WOB), Rotation per Minute (RPM), Torque (T), and bit hydraulics (HPb). It also incorporates historical drilling data for model training and validation. Specific experimental datasets are used to evaluate the DSE vs. ROP relationship across different HSI ranges.

## Key Findings

- The inclusion of a hydraulic term in the specific energy calculation (DSE) is critical for correctly matching the amount of energy used to drill with the rock's compressive strength. ([[2013-khamis|Khamis, 2013, p. 41]])
- Drilling Specific Energy (DSE) can be effectively used to identify inefficient drilling conditions; high DSE and low ROP indicate inefficiency, while low DSE and high ROP indicate efficiency. ([[2013-khamis|Khamis, 2013, p. 32]])
- Bit hydraulics are identified as the primary driver for moving from an inefficient to an efficient drilling state when WOB is held constant. ([[2013-khamis|Khamis, 2013, p. 32]])
- The Particle Swarm Optimization (PSO) algorithm was selected because it is a metaheuristic that can handle non-differentiable, noisy, or time-varying optimization problems common in drilling environments. ([[2013-khamis|Khamis, 2013, p. 36]])
- A correlation between ROP and parameters like WOB, RPM, Torque, and bit hydraulics (HPb) was established to predict ROP as a function of these variables. ([[2013-khamis|Khamis, 2013, p. 27]])
- The ROP model for Well 1 achieved a correlation coefficient of 0.864, showing that WOB has a negative effect on ROP (indicating potential bit floundering) while RPM, Torque, and mud flow have positive effects. ([[2013-khamis|Khamis, 2013, p. 79]])
- The coefficient of friction (mu) for Well 1 showed a correlation of 0.90 with WOB, with an average error of less than 8% in the prediction model. ([[2013-khamis|Khamis, 2013, p. 87]])
- Neural Networks (NN) using a cascade-forward architecture and log-sigmoid activation functions achieved high correlation coefficients for ROP prediction (0.895 for Well 1; 0.892 for Well 2). ([[2013-khamis|Khamis, 2013, p. 94]])
- Fuzzy Logic (FL) using sub-clustering provided lower accuracy compared to Neural Networks, with correlation coefficients of 0.7 and 0.65 for Wells 1 and 2 respectively. ([[2013-khamis|Khamis, 2013, p. 97]])
- The simplified DSE model successfully integrated the hydraulic factor (lambda) as a function of bit diameter using non-linear regression (R^2 = 0.9999). ([[2013-khamis|Khamis, 2013, p. 65]])
- The SVM model achieved a correlation coefficient of 0.88 for training data and 0.86 for testing data in predicting ROP. ([[2013-khamis|Khamis, 2013, p. 99]])
- The Functional Network (FN) yielded similar results to SVM, with correlation coefficients of 0.88 for training and 0.86 for testing. ([[2013-khamis|Khamis, 2013, p. 102]])
- Fuzzy logic was found to be less effective than other artificial intelligence techniques in predicting ROP. ([[2013-khamis|Khamis, 2013, p. 104]])
- The optimization process using PSO successfully minimized the DSE, which is directly linked to maximizing ROP. ([[2013-khamis|Khamis, 2013, p. 105]])
- The proposed real-time methodology resulted in a reduction of drilling time by over 30% in the cases studied. ([[2013-khamis|Khamis, 2013, p. 112]])

## Limitations

The study noted that Neural Networks can get trapped in local minima during training, requiring an increase in the maximum number of validation failures to 300; also, Fuzzy Logic results were less consistent than NN for this specific dataset.

## Recommendations and Future Work

Future development should include automatic calibration and setting of factors like K1 and multiplication factor into software modules to eliminate manual intervention in bit wear estimation.

## Related Concepts

- [[particle-swarm-optimization]]
- [[regression-analysis]]
- [[petroleum-engineering]]
- [[drilling-engineering]]
- [[mechanical-specific-energy]]
- [[drilling-specific-energy]]
- [[rate-of-penetration]]
- [[weight-on-bit]]
- [[machine-learning-geoscience]]
- [[non-linear-regression]]
- [[reservoir-engineering]]
- [[middle-east-region]]
- [[petrophysics]]
- [[petrel]]
- [[matlab]]
- [[porosity]]
