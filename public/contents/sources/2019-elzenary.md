---
type: source
id: "140867"
title: "ESTIMATION OF HOLE CLEANING CONDITION IN REAL-TIME WHILE DRILLING (OPERATIONAL POINT OF VIEW)"
author: "Mahmoud Nader M. Elzenary"
year: 2019
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Salaheldin M. Elkatatny"
committee_members: []
source_file: "raw/140867 - ESTIMATION OF HOLE CLEANING CONDITION IN REAL-TIME WHILE DRILLING (OPERATIONAL P.pdf"
url: "https://eprints.kfupm.edu.sa/140867"
study_area: "Oil well in north Africa"
keywords:
  - Hole cleaning
  - Real-time
  - Artificial Intelligence
  - ANN
  - ANFIS
  - ECD
  - Drilling fluid rheology
  - Wellbore geometry
  - ECD prediction
  - Mud rheology
  - Real-time monitoring
techniques:
  - neural-networks
  - anfis
  - statistical-analysis
  - data-analysis
  - software-development
tags:
  - degree/ms
  - location/north-africa
  - technique/neural-networks
  - technique/machine-learning-geoscience
  - technique/statistical-analysis
  - technique/anfis
  - technique/data-analysis
  - technique/software-development
  - theme/petroleum-engineering
  - theme/drilling-engineering
  - terminology/hole-cleaning
  - terminology/petroleum-engineering
  - terminology/drilling-engineering
  - terminology/ecd
  - terminology/rheology
  - terminology/drilling-fluid
  - terminology/well-design
  - terminology/statistical-analysis
status: ingested
---

# ESTIMATION OF HOLE CLEANING CONDITION IN REAL-TIME WHILE DRILLING (OPERATIONAL POINT OF VIEW)

**Summary**: The thesis investigates methods for real-time estimation of hole cleaning conditions in both vertical and highly deviated wells. It proposes a new 'Hole Cleaning Index' (HCI) based on two artificial intelligence models—one to predict drilling fluid rheology parameters and another to predict Equivalent Circulating Density (ECD).

---

## Research Problem

The 'blindness' of drilling operations due to the lag time between downhole events and surface notifications makes it difficult to identify and react to poor hole cleaning conditions until a stuck pipe occurs. Current methods rely heavily on driller experience or delayed physical indicators like shaker monitoring.

## Objectives

- Understand the main parameters affecting hole cleaning condition in real-time.
- Build AI models to predict downhole variables and parameters that directly affect hole cleaning estimation.
- Develop an analytical model integrated with AI models to create a user-friendly software interface for real-time prediction.
- Develop an AI model (ANN) to predict Equivalent Circulating Density (ECD) from surface parameters (ROP, Mwt in, and DPP).
- Develop a hybrid ANFIS/ANN model to predict mud rheological properties (Yield Point, Plastic Viscosity, and Apparent Viscosity) without the need for real-time lab measurements.
- Develop an integrated Hole Cleaning Identification (HCI) model using surface parameters and predicted values to provide on-time alerts for hole cleaning conditions.

## Methods

The research followed a three-stage development process. Stage 1 involved building an Artificial Neural Network (ANN) to predict ECD from ROP, Mwt in, and DPP. Stage 2 utilized both ANN and Adaptive Neuro-Fuzzy Inference Systems (ANFIS) to predict mud rheological properties (YP, AV, PV). Data for these models were filtered by removing outliers (e.g., values >100 cP for Marsh funnel viscosity) and analyzed using statistical methods (mean, range, skewness). Stage 3 integrated the predicted ECD and rheology into a final HCI model based on the Coil Circulation Index (CCI) logic to categorize conditions as 'Good', 'Bad', or 'Stuck Pipe'. A software application was then developed to provide visual and audible alarms based on these calculations.

## Data and Materials

The study utilized 135 sets of real drilling data points from an oil well in North Africa, including parameters such as ROP (ft/hr), MWI (ppg), DPP (psi), ECD (ppg), Marsh funnel viscosity (cP), and solid volume content (%).

## Key Findings

- The ANN model for predicting ECD achieved a correlation coefficient of 0.9971 for training and 0.9982 for testing, with an Average Absolute Error (AAPE) of approximately 0.22%. ([[2019-elzenary|Elzenary, 2019, p. 67]])
- The ANFIS model for predicting ECD also showed high accuracy with a correlation coefficient of 0.9982 and AAPE of 0.2259% (training) and 0.2264% (testing). ([[2019-elzenary|Elzenary, 2019, p. 67]])
- Hole cleaning is most difficult at an inclination of approximately 60 degrees due to the instability of cuttings. ([[2019-elzenary|Elzenary, 2019, p. 32]])
- The Hole Cleaning Index (HCI) was developed as a comprehensive model incorporating PV, YP, ROP, and ECD to estimate conditions in real-time. ([[2019-elzenary|Elzenary, 2019, p. 62]])
- Drill pipe rotation significantly enhances cutting removal, especially in high-viscosity muds and at inclinations of 65 degrees or higher. ([[2019-elzenary|Elzenary, 2019, p. 30]])
- The ANFIS model for predicting Yield Point (YP) showed a training correlation of 0.97 and testing correlation of 0.92 with AAPE values of 7.28% and 8.29% respectively. ([[2019-elzenary|Elzenary, 2019, p. 87]])
- The ANN model for predicting Plastic Viscosity (PV) achieved a correlation coefficient of 0.975 in training and 0.961 in testing. ([[2019-elzenary|Elzenary, 2019, p. 73]])
- The ANFIS model for predicting Apparent Viscosity (AV) showed high accuracy with a training correlation of 0.896 and testing of 0.851. ([[2019-elzenary|Elzenary, 2019, p. 79]])
- The ANN model for predicting Apparent Viscosity (AV) achieved a perfect correlation coefficient of 1.0 in both training and testing with AAPE values of 0.2% and 2.8%. ([[2019-elzenary|Elzenary, 2019, p. 90]])
- The HCI model successfully identified a critical stuck pipe situation at depth 12486.96 ft where the value dropped below 0.5. ([[2019-elzenary|Elzenary, 2019, p. 93]])

## Limitations

The study notes that existing models for hole cleaning (like those by Bern et al.) are only valid for angles greater than 30 degrees, necessitating the development of a new integrated model to cover both vertical and deviated wells.

## Recommendations and Future Work

The thesis suggests integrating these three models into the rig's cyber system to provide real-time monitoring of downhole cleaning conditions without the need for MWD or LWD tools, thereby avoiding costly stuck pipe incidents.

## Related Concepts

- [[neural-networks]]
- [[machine-learning-geoscience]]
- [[hole-cleaning]]
- [[petroleum-engineering]]
- [[drilling-engineering]]
- [[ecd]]
- [[rheology]]
- [[drilling-fluid]]
- [[well-design]]
- [[statistical-analysis]]
- [[anfis]]
- [[north-africa]]
