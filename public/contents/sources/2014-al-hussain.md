---
type: source
id: "139396"
title: "An Integrated Approach for Downhole Leak Detection"
author: "Ali Musa Al-Hussain"
year: 2014
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. M. Enamul Hossain"
committee_members: []
source_file: "raw/139396 - An Integrated Approach for Downhole Leak Detection.pdf"
url: "https://eprints.kfupm.edu.sa/139396"
study_area: "Not stated in source"
keywords:
  - Downhole Leak Detection
  - Well Integrity
  - Temperature Log
  - Noise Log
  - Corrosion Log
  - Artificial Intelligence
  - Decision Tree
  - Temperature survey
  - Corrosion survey
  - Tubing corrosion
  - Casing integrity
  - Noise survey
  - Well monitoring
  - Well Logging
  - Machine Learning
  - Data Analysis
techniques:
  - temperature-log
  - noise-log
  - corrosion-log
  - cbl-vdl
  - decision-tree
  - well-log-analysis
  - temperature-survey
  - corrosion-survey
  - machine-learning-geoscience
  - noise-survey
  - petrophysics
  - pressure-test
  - cbl-log
  - regression-analysis
  - formation-evaluation
tags:
  - degree/ms
  - technique/well-log-analysis
  - technique/decision-tree
  - technique/temperature-survey
  - technique/noise-log
  - technique/corrosion-survey
  - technique/machine-learning-geoscience
  - technique/noise-survey
  - technique/petrophysics
  - technique/pressure-test
  - technique/cbl-log
  - technique/regression-analysis
  - theme/petroleum-engineering
  - theme/reservoir-engineering
  - theme/petrophysics
  - terminology/well-integrity
  - terminology/petrophysics
  - terminology/petrophysics
status: ingested
---

# An Integrated Approach for Downhole Leak Detection

**Summary**: The thesis investigates an integrated approach for detecting downhole leaks in well casings using a combination of traditional mechanical integrity tests and advanced machine learning techniques. It specifically evaluates the effectiveness of decision tree algorithms in classifying leak scenarios based on various well log parameters.

---

## Research Problem

Identifying and locating minor downhole leaks (tubing and casing) in oil and gas wells is critical for maintaining well integrity and production efficiency. The study addresses the challenge of distinguishing between simple corrosion and actual leak points using a combination of noise, temperature, and corrosion survey data.

## Objectives

- To evaluate different types of logs under different flowing and shut-in conditions scenarios in order to find a new integrated approach for downhole leak identification.
- To develop a method and program that can detect downhole leak depth by utilizing only rigless data.
- To compare rigless approach results with conventional rig approach for downhole leak detection.
- To develop an artificial intelligence model for identifying any future downhole leakage that may occur in any well through utilizing both rigless and rig data.
- Develop an integrated approach for downhole leak detection using multiple survey types.
- Establish a methodology for analyzing noise, temperature, and corrosion data to identify specific leak locations.

## Methods

The study employs a multi-step approach: 1. Data Collection: Gathering well history, capacity, completion configuration, and historical pressure/temperature data. 2. Quality Check: Filtering out unreadable log data and performing regression analysis to find relationships between variables. 3. Integrated Interpretation: Combining temperature survey (to identify potential leak zones), corrosion surveys (to determine metal loss in tubing/casing), and noise logs (to confirm leaks based on frequency thresholds). 4. Model Development: Utilizing a decision tree algorithm trained on a dataset of 5,000 records from four wells to classify sections into 'leak', 'corroded', or 'good'. The model was tested across three scenarios (Run-A, Run-B, and Run-C) with varying levels of data inclusion.

## Data and Materials

The study utilizes data from a well featuring multiple zones, including a 7-inch casing and 4.5-inch tubing. Data includes: - Noise survey results (frequency analysis up to 18 kHz). - Temperature surveys (shut-in and bleed-off TCA/CCA conditions). - Corrosion survey measurements (metal loss in tubing and casing). - Well logs (Gamma Ray, CCL, LSPD) for correlation.

## Key Findings

- The integration of temperature, noise, and corrosion logs in both flowing and shut-in conditions was found to be significantly more effective for locating small leaks than individual tools. ([[2014-al-hussain|Al-Hussain, 2014, p. 30]])
- A specific leak was identified as a communication between the tubing and first casing (CCA) based on an annulus survey showing 40 psi in the CCA compared to 400 psi in the TCA. ([[2014-al-hussain|Al-Hussain, 2014, p. 30]])
- Temperature logs are useful for identifying cross-flow and abnormal geothermal phenomena, but can provide late warnings for small leaks if not integrated with other data. ([[2014-al-hussain|Al-Hussain, 2014, p. 15]])
- Noise logs identify fluid movement by measuring frequency; peaks at 2-6 kHz are often associated with fracture flow, while peaks at 18 kHz indicate flow through the rock matrix. ([[2014-al-hussain|Al-Hussain, 2014, p. 26]])
- Corrosion logs (ultrasonic and electromagnetic) were used to evaluate the physical condition of tubing and casing separately to confirm integrity. ([[2014-al-hussain|Al-Hussain, 2014, p. 27]])
- The primary analysis of a temperature survey on Well-A identified three potential leak areas: two in the tubing and one in the packer. ([[2014-al-hussain|Al-Hussain, 2014, p. 31]])
- A decision tree model developed to detect downhole leaks achieved an accuracy of 93% or higher across 12 conducted scenarios. ([[2014-al-hussain|Al-Hussain, 2014, p. 51]])
- The corrosion survey criteria for identifying potential issues were set at a 53% corrosion factor for 4-1/2'' tubing and a 39% corrosion factor for 7'' casing. ([[2014-al-hussain|Al-Hussain, 2014, p. 35]])
- A leak is confirmed if the temperature profile is constant or decreasing with depth in a selected area identified by the corrosion survey. ([[2014-al-hussain|Al-Hussain, 2014, p. 36]])
- A leak is supported by noise survey results if the signal at the noted depth is greater than or equal to half of the maximum readable frequency from surface to bottom. ([[2014-al-hussain|Al-Hussain, 2014, p. 36]])
- The decision tree model was tested in three scenarios: Run-A (all data), Run-B (selected reliable data), and Run-C (only temperature, frequency, and pipe thickness). ([[2014-al-hussain|Al-Hussain, 2014, p. 51]])
- A packer leak was confirmed at 5290 ft where measured casing thickness was 0.234 inch compared to the actual 10.634 inch, supported by noise and temperature irregularities. ([[2014-al-hussain|Al-Hussain, 2014, p. 65]])
- Tubing leakage was identified at depths of 1352, 1382, 1684, and 1905 ft based on integrated survey data. ([[2014-al-hussain|Al-Hussain, 2014, p. 66]])
- A specific tubing leak was confirmed at /2763ft where a frequency of 9 kHz and temperature anomalies were observed. ([[2014-al-hussain|Al-Hussain, 2014, p. 66]])
- Corrosion-only zones (no leaks) were identified at 4190 ft - 4195 ft in the tubing. ([[2014-al-hussain|Al-Hussain, 2014, p. 66]])

## Limitations

The study notes that while corrosion indicates potential for future leaks, it does not always confirm an active leak; only when combined with temperature and noise anomalies is a leak confirmed.

## Recommendations and Future Work

The developed artificial intelligence model and integrated approach can be implemented in all types of wells, especially in mature fields where casing leaks are common. The methodology provides a value-add to current well integrity standards for safety and environmental protection.

## Related Concepts

- [[well-log-analysis]]
- [[decision-tree]]
- [[well-integrity]]
- [[petrophysics]]
- [[petroleum-engineering]]
- [[saudi-arabia]]
- [[temperature-survey]]
- [[noise-log]]
- [[corrosion-survey]]
- [[noise-survey]]
- [[cbl-log]]
- [[pressure-test]]
- [[regression-analysis]]
- [[machine-learning-geoscience]]
