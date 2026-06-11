---
type: source
id: "141979"
title: "Real-Time Advisory Hole-Cleaning Model"
author: "Mohammed Al-Malki"
year: 2021
department: "Geosciences"
degree: "MS"
supervisor: "Salaheldin M. Elkatatny"
committee_members:
  - "Abdulazeez Abdulraheem"
  - "Abdulaziz A. Al Majed"
source_file: "raw/141979 - Real-Time Advisory Hole-Cleaning Model.pdf"
url: "https://eprints.kfupm.edu.sa/id/eprint/141979/"
study_area: "Saudi Arabia Fields"
keywords:
  - Hole-cleaning
  - Real-Time Data
  - Well Control
  - Drilling Engineering
  - Cuttings transport
  - HCF model
  - drilling parameters
  - wellbore stability
  - offshore
  - onshore
  - real-time advisory
  - stuck pipe
  - mud rheology
  - drilling fluid properties
  - artificial neural networks
  - support vector machines
techniques:
  - gui-development
  - data-analysis
  - dru
  - mathematical-modeling
  - well-log-analysis
  - petrophysics
  - machine-learning-geoscience
  - neural-networks
  - multivariate-regression
tags:
  - degree/ms
  - location/saudi-arabia
  - location/dhahran-area
  - technique/gui-development
  - technique/data-analysis
  - technique/mathematical-modeling
  - technique/well-log-analysis
  - technique/petrophysics
  - technique/machine-learning-geoscience
  - technique/neural-networks
  - technique/multivariate-regression
  - theme/petroleum-engineering
  - theme/drilling-engineering
  - terminology/hole-cleaning
  - terminology/petroleum-engineering
  - terminology/cuttings-transport
  - terminology/well-log-analysis
  - terminology/drilling-engineering
  - terminology/rheology
status: ingested
---

# Real-Time Advisory Hole-Cleaning Model

**Summary**: The thesis develops a real-time advisory model to monitor and optimize hole cleaning in complex drilling environments, such as unconventional resources. It utilizes parameters like mud rheology, density, and annular velocity to calculate a Hole Cleaning Factor (HCF) and provides an automated interface for immediate intervention.

---

## Research Problem

Inefficient hole cleaning in complex drilling environments leads to high non-productive time (NPT) due to issues like lost circulation, stuck pipe, and excessive bit wear. There is a need for a real-time advisory system to monitor and predict these conditions using available drilling parameters.

## Objectives

- Apply the HCF model on different hole sections (vertical/Horizontal)
- Apply Real-Time Rheology and Density measurements to proactively avoid wellbore instability problems (pipe sticking, tight hole, ...)
- Develop a GUI to be used in cyber chair on the rig site
- Develop a mathematical model for calculating Hole Cleaning Efficiency (HCF) using real-time parameters.
- Integrate drilling fluid rheology (YP, PV) and hole geometry into the calculation of Cuttings Carrying Index (CCI).
- Validate the proposed model using historical data from wells with stuck-pipe incidents in Saudi Arabia fields.
- Develop a real-time advisory model for hole cleaning based on ROP, ECD, PV, and YP.
- Evaluate the performance of the HCF model across different well types (single lateral, multi-lateral, vertical).
- Identify correlations between hole cleaning efficiency and specific drilling incidents like stuck pipe or lost circulation.
- Develop a real-time advisory model for hole cleaning.
- Utilize machine learning algorithms to predict drilling fluid rheological parameters.
- Evaluate the effectiveness of various models in predicting hole-cleaning conditions.

## Methods

The study develops a mathematical framework where Hole Cleaning Efficiency (HCF) is derived from several parameters: ROP, Mud Weight (MW), Yield Point (YP), Plastic Viscosity (PV), and inclination. The model incorporates the Cuttings Carrying Index (CCI) as a primary metric for vertical wells and adapts it to directional wells by incorporating correction factors for particle size, inclination, and mud weight. A real-time workflow is established where data from the DRU system and other sensors are fed into an application to calculate HCF and provide advisory alerts.

## Data and Materials

Data from 20 wells total. Dataset 1: 8 wells with partial real-time data and rig-site collected rheology. Dataset 2: 12 wells with real-time rheology data and MPD operation parameters. Specific well cases (Well-A through Well-S) were analyzed for trajectory, mud properties, and incident logs.

## Key Findings

- The Hole Cleaning Factor (HCF) indicates a good condition when HCF > 1; an HCF between 0.5 and 1 indicates poor conditions requiring corrective action; and an HCF < 0.5 indicates a high risk of problems. ([[2021-al-malki|Al-Malki, 2021, p. 14]])
- The model successfully calculates annular velocity based on cutting and slip velocities while correcting for inclination, cutting size, and mud weight using specific correction factors. ([[2021-al-malki|Al-Malki, 2021, p. 14]])
- HCF values derived from both real-time and historical data were found to reflect actual well conditions accurately across the 12 validated wells. ([[2021-al-malki|Al-Malki, 2021, p. 14]])
- The system provides a visual chart for depth divided into 'problem', 'critical', and 'clean' zones based on HCF values. ([[2021-al-malki|Al-Malki, 2021, p. 14]])
- The model successfully identifies hole quality indicators where HCF values below 1.0 indicate poor cleaning conditions, as seen in Well-A where HCF was between 0.5 and 1.0 prior to a stuck-pipe incident. ([[2021-al-malki|Al-Malki, 2021, p. 45]])
- The study identifies that high ROP leads to increased demand for hole cleaning hydraulic requirements, potentially leading to poor wellbore quality if not managed. ([[2021-al-malki|Al-Malki, 2021, p. 31]])
- In High Angle Regimes (HAR), higher rotary speeds are more effective as they create helical flow around the drill string, moving cuttings into higher transport regions of the annulus. ([[2021-al-malki|Al-Malki, 2021, p. 36]])
- The Cuttings Carrying Index (CCI) for vertical wells is calculated using a formula involving mud weight, average velocity, and consistency index (K), where a value of 1.0 is the target. ([[2021-al-malki|Al-Malki, 2021, p. 32]])
- Mud weight has little to no effect on hole cleaning in some cases, but it significantly impacts buoyancy; however, high-density fluids are essential for ensuring sufficient hydrostatic pressure and preventing cuttings from settling. ([[2021-al-malki|Al-Malki, 2021, p. 35]])
- High fluctuations in ROP led to low HCF between 10000 and 11000 ft depth in Well-A. ([[2021-al-malki|Al-Malki, 2021, p. 48]])
- High PV and YP increased mud carrying capacity, resulting in an HCF of 1 for Well-B_1 after 11000 ft. ([[2021-al-malki|Al-Malki, 2021, p. 48]])
- Fluctuating HCF [0, 0.5] in Well-C was associated with drilling in the minimum stress direction, potentially leading to stuck pipe or wellbore breakout. ([[2021-al-malki|Al-Malki, 2021, p. 51]])
- In Well-D_4, fluctuating HCF [0.5, 1] was linked to issues like low-lubricity mud cake and excessive embedded pipe length. ([[2021-al-malki|Al-Malki, 2021, p. 55]])
- Well-E_1 maintained a constant HCF of 1 due to high-weight sweep pills and lower hydrostatic pressure. ([[2021-al-malki|Al-Malki, 2021, p. 58]])
- In Well-F_1, HCF dropped below 6000 ft because the hole was drilled continuously from 5020 to 6045 ft without cleaning. ([[2021-al-malki|Al-Malki, 2021, p. 61]])

## Limitations

The current model's accuracy is dependent on the availability of real-time rheology data (YP, PV); if not available, an AI model would be required to predict these values based on nearby well data.

## Recommendations and Future Work

If drilling rigs are not equipped with DRU systems, future iterations should utilize Artificial Intelligence models to predict rheological parameters (YP, PV) from available real-time measurements from neighboring wells in the same field.

## Related Concepts

- [[gui-development]]
- [[data-analysis]]
- [[hole-cleaning]]
- [[petroleum-engineering]]
- [[drilling-engineering]]
- [[mathematical-modeling]]
- [[cuttings-transport]]
- [[well-log-analysis]]
- [[saudi-arabia]]
- [[petrophysical-rock-typing]]
- [[dhahran-area]]
- [[machine-learning]]
- [[neural-networks]]
- [[multivariate-regression]]
- [[rheology]]
