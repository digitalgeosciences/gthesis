---
type: source
id: "142766"
title: "Real Time Wellbore Cleaning Evaluation and Advisory System"
author: "Al-Rubaii, Mohammed Murif"
year: 2023
department: "Petroleum Engineering"
degree: "PhD"
supervisor: "Dr. Dhafer A. Al Shehri"
committee_members: []
source_file: "raw/142766 - Real Time Wellbore Cleaning Evaluation and Advisory System.pdf"
url: "https://eprints.kfupm.edu.sa/142766"
study_area: "Offshore wells (Well-A, Well-B, and Well-C)"
keywords:
  - Hole cleaning efficiency
  - Real-time monitoring
  - Wellbore stability
  - Drilling fluid rheology
  - Automated advisory system
  - Digital twin
  - Wellbore Cleaning
  - Drilling Fluids
  - Rheology
  - Machine Learning
  - Cuttings Transport
  - Drilling fluid properties
  - Artificial intelligence
  - Hole cleaning indices
  - Equivalent circulating density (ECD)
  - Cuttings transport ratio (CTR)
  - Drilling operations
  - real-time evaluation
  - deviated well
  - horizontal well
  - Hole cleaning index (HCI)
  - Cutting transport ratio (CTRm)
  - Mud weight (MW)
  - Drilling performance
techniques:
  - machine-learning-geoscience
  - petrophysics
  - well-log-analysis
  - data-analysis
  - mathematical-modeling
  - python
  - tensorflow
  - sklearn
  - calculation-of-accuracy
  - neural-networks
  - support-vector-machine
  - drilling-engineering
  - simulation
tags:
  - degree/phd
  - formation/arab-d-reservoir
  - location/offshore-well
  - location/mrjan-field
  - technique/machine-learning-geoscience
  - technique/petrophysics
  - technique/well-log-analysis
  - technique/data-analysis
  - technique/mathematical-modeling
  - technique/python
  - technique/neural-networks
  - technique/support-vector-machine
  - technique/drilling-engineering
  - technique/simulation
  - theme/petroleum-engineering
  - theme/reservoir-engineering
  - theme/drilling-engineering
  - terminology/rheology
  - terminology/hole-cleaning
  - terminology/petrophysics
  - terminology/petroleum-engineering
  - terminology/petrophysics
  - terminology/equivalent-circulating-density
  - terminology/cuttings-transport
  - terminology/drilling-engineering
  - terminology/data-analysis
  - terminology/porosity
  - terminology/equivalent-circulation-distance
status: ingested
---

# Real Time Wellbore Cleaning Evaluation and Advisory System

**Summary**: The thesis develops a real-time wellbore cleaning advisory system using several novel models (HCI, CTRm, TIm, ECDeffc.m, and MWeffc.m) to evaluate hole cleaning performance and predict drilling parameters like ECD and mud weight. These models were validated against field data from the MRJN Field and compared with AI techniques (ANN, SVM, DT) to improve safety and efficiency in deviated and horizontal wells.

---

## Research Problem

Inadequate hole cleaning leads to critical issues such as stuck pipe, lost circulation, and well control incidents, which impact safety and costs. Existing models are often theoretical or lack the integration of multiple indicators into a single real-time advisory system compatible with modern rig sensors.

## Objectives

- Introduce a unique Hole Cleaning Advisory System showing six real-time hole cleaning indicators.
- Develop and modify models to be compatible with drilling operations scenarios and applications.
- Validate the developed real-time models against commercial software and advanced tools like Pressure While Drilling (PWD).
- Apply the system in fields to provide firm validation for adoption by drilling rig fleets.
- Evaluate the impact of drilling fluid rheology on cuttings transport.
- Review existing models for calculating cutting concentration and flow regimes.

## Methods

The research involved developing five novel mathematical models: TIm, HCI, CTRm, ECDeffc.m, and MWeffc.m. These models utilize hydraulic parameters (flow rate, velocity), mechanical parameters (RPM, torque), well geometry (inclination, azimuth), and fluid rheology (PV, YP, LSYP). The system was integrated into an automated flowchart for real-time advisory using a color-coded risk assessment (Red/Yellow/Green) based on specific thresholds. Validation was performed by comparing model outputs against actual field data from the MRJN Field and PWD measurements. AI models (ANN, SVM, and Decision Trees) were used to predict ECD and MW as an alternative to traditional methods.

## Data and Materials

Field data from three wells in the MRJN Field: Well-A (offshore gas deviated), Well-B (offshore oil deviated), and Well-C (horizontal). Data included ROP, torque, flow rates, mud properties (PV, YP, LSYP), and PWD measurements. Comparison was made against a standard tool (BaraLogix) for mud weight measurement.

## Key Findings

- The inclusion of six real-time indicators provides a more comprehensive vision of hole cleaning performance than single-indicator systems. ([[2023-murif|Murif, 2023, p. 25]])
- Hole cleaning efficiency is significantly impacted by the angle of inclination, which leads to the formation of cuttings beds in deviated or horizontal sections. ([[2023-murif|Murif, 2023, p. 29]])
- The study identifies that 33% of stuck pipe incidents are due to insufficient hole cleaning efficiency. ([[2023-murif|Murif, 2023]])
- page_number_not_found ([[2023-murif|Murif, 2023]])
- Cuttings concentration in the annulus must remain below 5% to ensure safe operations (Pigott, 1941). ([[2023-murif|Murif, 2023, p. 70]])
- A higher yield point is required for larger cuttings to improve transport efficiency. ([[2023-murif|Murif, 2023, p. 72]])
- The hole cleaning ratio (HCR) should be greater than 1.1; values below 0.5 are associated with stuck pipe risks. ([[2023-murif|Murif, 2023, p. 73]])
- A cutting lifting factor (beta1) greater than 1 is preferred for efficient hole cleaning in various well sections. ([[2023-murif|Murif, 2023, p. 78]])
- The addition of nanoparticles like MgO significantly improves hole cleaning compared to TiO2. ([[2023-murif|Murif, 2023, p. 63]])
- Wellbore instability is caused by both osmotic diffusion (causing shale swelling) and chemical diffusion. ([[2023-murif|Murif, 2023, p. 64]])
- The TIm model provides a clear indicator where values > 1 signify satisfactory borehole cleaning and < 1 indicate inadequate cleaning. ([[2023-murif|Murif, 2023, p. 134]])
- The HCI model incorporates more parameters than the original CCI, including hydraulic velocities (Vann.m), cut sizes (dcm), and well geometry factors. ([[2023-murif|Murif, 2023, p. 152]])
- The CTRm model is evaluated using a threshold of 50%; values > 50% indicate proper hole cleaning, while < 50% indicates poor performance. ([[2023-murif|Murif, 2023, p. 160]])
- The novel TIm model incorporates advanced parameters like LSYP, k, n, and Mapp to account for complex drilling environments compared to the original TI. ([[2023-murif|Murif, 2023, p. 145]])
- HCI is a comprehensive metric that considers rheological properties, well trajectory (inclination/azimuth), and cutting concentration in the annulus. ([[2023-murif|Murif, 2023, p. 152]])

## Limitations

Existing models often rely on laboratory data and lack real-time prediction capabilities; some tools for measuring parameters have limitations regarding pressure, temperature, and potential tool failure. The HCI model assumes no total lost circulation, no well control incidents, and no wellbore instability.

## Recommendations and Future Work

The results suggest that the automated advisory system can be used to provide real-time indicators of hole cleaning performance, allowing for immediate adjustments in drilling parameters like GPM and ROP to ensure safety and efficiency. The models are recommended as tools for well design and during active drilling to select/adjust MW and ECD without relying solely on expensive downhole equipment.

## Related Concepts

- [[machine-learning-geoscience]]
- [[mathematical-modeling]]
- [[rheology]]
- [[hole-cleaning]]
- [[petroleum-engineering]]
- [[petrophysics]]
- [[equivalent-circulating-density]]
- [[cuttings-transport]]
- [[python]]
- [[drilling-engineering]]
- [[data-analysis]]
- [[offshore-well]]
- [[porosity]]
- [[mrjan-field]]
- [[arab-d-reservoir]]
- [[equivalent-circulation-distance]]
