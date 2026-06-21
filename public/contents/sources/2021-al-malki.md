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
  - Hole Cleaning
  - Real-Time Data
  - Well Control
  - Drilling Engineering
  - Unconventional Resources
  - hole-cleaning
  - real-time
  - drilling
  - cuttings transport
  - HCF model
techniques:
  - gui-development
  - data-analysis
  - mathematical-modeling
tags:
  - degree/ms
  - location/saudi-arabia
  - location/dhahran-area
  - technique/mathematical-modeling
  - technique/data-analysis
  - technique/gui-development
  - theme/petroleum-engineering
  - terminology/hole-cleaning
  - terminology/petroleum-engineering
status: ingested
---

# Real-Time Advisory Hole-Cleaning Model

**Summary**: The thesis develops a real-time advisory model to evaluate and optimize hole cleaning in complex drilling environments, including unconventional resources. It utilizes parameters like ROP, ECD, and mud rheology to calculate a Hole Cleaning Factor (HCF) and provides a user-friendly interface for immediate intervention.

---

## Research Problem

Inefficient hole cleaning in complex well geometries (deviated/horizontal) leads to high nonproductive time (NPT) due to stuck pipe, lost circulation, and poor ROP. Existing models are often theoretical or lack real-time data integration.

## Objectives

- Apply the HCF model on different hole sections (vertical/Horizontal)
- Apply Real-Time Rheology and Density measurements to proactively avoid wellbore instability problems
- Develop a GUI to be used in cyber chair on the rig site
- Develop a real-time advisory model for monitoring hole-cleaning efficiency.
- Evaluate the performance of the HCF model across different drilling datasets including standard and MPD operations.

## Methods

The study develops an analytical model based on several parameters: mud weight, annular velocity, rheology (PV, YP), inclination, and average cutting size. A GUI was developed to automate data collection from a Density and Rheology Unit (DRU) and provide real-time HCF calculations. The model incorporates correction factors for cut size, inclination, and mud weight to calculate the Hole Cleaning Factor (HCF). Validation was performed using real-time data from 12 wells in Saudi Arabia.

## Data and Materials

Two datasets totaling 20 wells. Dataset 1: 8 wells with partial real-time data and rig-site collected rheology. Dataset 2: 12 wells with real-time rheology data drilled under MPD operations.

## Key Findings

- The Hole Cleaning Factor (HCF) is used as a indicator where HCF > 1 indicates acceptable conditions, HCF [0.5, 1] requires corrective action, and HCF < 0.5 indicates an imminent problem. ([[2021-al-malki|Al-Malki, 2021, p. 14]])
- The model successfully identified high ROP as a factor leading to lower HCF values in Well-A (at depth 6292 ft) before a stuck pipe incident. ([[2021-al-malki|Al-Malki, 2021, p. 45]])
- In Well-B_1, high fluctuations in ROP led to low HCF between 10,000 and 11,000 ft, while higher PV and YP improved HCF after 11,000 ft. ([[2021-al-malki|Al-Malki, 2021, p. 48]])
- Well-C showed a fluctuating HCF [0, 0.5] between 2300 and 3677 ft due to partial losses and high viscosity mud usage. ([[2021-al-malki|Al-Malki, 2021, p. 52]])
- In Well-D_4, the HCF fluctuated in the [0.5, 1] range during periods of low density mud use and multiple wellbore passages. ([[2021-al-malki|Al-Malki, 2021, p. 56]])
- Well-E_1 maintained a constant HCF of 1 due to frequent pump sweeps and lower hydrostatic pressure in the wellbore. ([[2021-al-malki|Al-Malki, 2021, p. 58]])
- In Well-F_1, HCF dropped below 6000 ft because drilling continued without cleaning for approximately 1000 feet before a stuck pipe occurred. ([[2021-al-malki|Al-Malki, 2021, p. 62]])
- Well-G_1 showed an HCF drop below 9500 and 10300 ft due to tight hole conditions, followed by an increase to 1 after high weight sweeps. ([[2021-al-malki|Al-Malki, 2021, p. 64]])
- Well-H_2 showed fluctuating HCF [0.5, 1] between 13710 and 16027 ft during the transition to a horizontal section. ([[2021-al-malki|Al-Malki, 2021, p. 68]])
- Well-I_1 exhibited a fluctuating HCF [0, 1] over a 6-day period including high-pressure mud displacement. ([[2021-al-malki|Al-Malki, 2021, p. 70]])
- Well-J and Well-J_1 maintained constant HCF of 1 due to consistent pump sweeps every 45 feet drilled. ([[2021-al-malki|Al-Malki, 2021, p. 73]])
- Well-K and Well-L showed constant HCF of 1 during periods of steady circulation and mud weight maintenance. ([[2021-al-malki|Al-Malki, 2021, p. 78]])
- Well-M showed a drop in HCF below 12300 ft due to lost circulation, leading to poor hole cleaning conditions. ([[2021-al-malki|Al-Malki, 2021, p. 81]])
- The HCF model was predictive in four wells within the first dataset, successfully reporting bad hole conditions before stuck-pipe incidents occurred. ([[2021-al-malki|Al-Malki, 2021, p. 96]])
- In Well-N (11695-12370 ft), fluctuating HCF [0,1] was observed due to issues encountered from influxes affecting mud rheology. ([[2021-al-malki|Al-Malki, 2021, p. 83]])

## Limitations

The study notes that if the rig is not equipped with a DRU, the model would require an AI component to predict rheological parameters from other available data.

## Recommendations and Future Work

Future development includes using Artificial Intelligence models to predict rheology (YP, PV) when real-time DRU data is unavailable.

## Related Concepts

- [[mathematical-modeling]]
- [[gui-development]]
- [[hole-cleaning]]
- [[petroleum-engineering]]
- [[saudi-arabia]]
- [[dhahran-area]]
