---
type: source
id: "140288"
title: "RISK BASED APPROACH TO PREDICT CASING LEAKS USING ELECTROMAGNETIC CORROSION LOGS"
author: "Mohammed Dhafer Mohammed Al-Ajmi"
year: 2017
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Dhafer A. Al-Shehri"
committee_members: []
source_file: "raw/140288 - RISK BASED APPROACH TO PREDICT CASING LEAKS USING ELECTROMAGNETIC CORROSION LOGS.pdf"
url: "https://eprints.kfupm.edu.sa/140288"
study_area: "Saudi Arabian fields (over 500 case studies)"
keywords:
  - wellbore integrity
  - downhole corrosion
  - electromagnetic corrosion logging
  - casing leaks
  - risk-based approach
  - metal loss assessment
  - electromagnetic corrosion logs
  - EMIT
  - corrosion rate
  - average metal loss
  - ARBR
  - well integrity
  - corrosion growth
  - casing integrity
techniques:
  - emit
  - emds
  - multi-finger-caliper-tool
  - ultrasonic-tool
  - corrosion-log-analysis
  - statistical-analysis
  - probability-density-function-pdf
  - electromagnetic-corrosion-logs
tags:
  - degree/ms
  - location/saudi-arabia
  - technique/well-log-analysis
  - technique/petrophysics
  - technique/electromagnetic-corrosion-logs
  - technique/risk-analysis
  - theme/petroleum-engineering
  - theme/borehole-geophysics
  - theme/environmental-risk-assessment
  - terminology/environmental-risk-assessment
  - terminology/petrophysics
  - terminology/risk-analysis
  - terminology/corrosion
status: ingested
---

# RISK BASED APPROACH TO PREDICT CASING LEAKS USING ELECTROMAGNETIC CORROSION LOGS

**Summary**: The thesis develops a risk-based approach to predict casing leaks by analyzing data from Electromagnetic Casing Inspection Tools (EMIT). It introduces the Average Remaining Barriers Ratio (ARBR) as a normalized metric to quantify uncertainty in metal loss measurements and provides mathematical models for predicting casing life and optimal maintenance schedules.

---

## Research Problem

Electromagnetic tools provide circumferential average readings, making it difficult to distinguish between uniform corrosion and localized defects that cause leaks. Specifically, 50% average metal loss could indicate a complete failure of one casing string if the defect is not distributed evenly around the circumference.

## Objectives

- Formulating a probabilistic model to predict downhole casing leaks based on electromagnetic corrosion logging data.
- Establishing guidelines to design a cost-effective casing integrity surveillance program based on electromagnetic corrosion logging analysis outcomes.
- Quantify the uncertainty associated with EMIT average metal loss measurements using statistical methods.
- Introduce and validate the Average Remaining Barriers Ratio (ARBR) as a normalized parameter for multi-string casing systems.
- Develop mathematical models to calculate the probability of casing failure based on ARBR values.
- Formulate a model to predict casing life and determine optimal corrosion logging frequencies.

## Methods

The study utilizes statistical analysis, including normality tests (Kolmogorov-Smirnov or similar visual checks) and Probability Density Function (PDF) modeling. It compares 'leaking' vs 'non-leaking' hotspots identified from field data. The ARBR is calculated by normalizing metal loss across multiple casing strings to account for varying thicknesses and counts. A decision-making model incorporates economic factors (repair costs vs. maintenance costs) to find an optimal ARBR cutoff (ARBRc). Corrosion rates are modeled using a Z-score approach to determine 'maximum likely' corrosion rates from distribution data.

## Data and Materials

The study utilizes 535 hotspots across 218 wells, categorized into 498 non-leaking and 37 leaking cases. Data includes well age (2-67 years), hotspot depth (9-7723 ft), average metal loss percentage, and corrosion rates for the first 900 feet of casing.

## Key Findings

- EMIT tool can only read an azimuthal average loss; a 50% average metal loss could mean a failure if one part of the casing is completely gone and the other stays intact. ([[2017-al-ajmi|Al-Ajmi, 2017, p. 28]])
- EMDS tool can detect casing failures at average metal loss percentages as low as 15-20%. ([[2017-al-ajmi|Al-Ajmi, 2017, p. 30]])
- A safe threshold of 50% average metal loss from the eddy current tool was set to classify the high risk of casings' failures based on analysis of over 80 wells. ([[2017-al-ajmi|Al-Ajmi, 2017, p. 34]])
- The study identifies three main types of corrosion logs: Mechanical (Multi-Finger Caliper), Ultrasonic, and Electromagnetic (EMIT/EMDS). ([[2017-al-ajmi|Al-Ajmi, 2017, p. 25]])
- The Average Remaining Barriers Ratio (ARBR) successfully accounts for differences in casing counts and thicknesses; at equal metal loss percentages, a two-string system showed lower ARBR than a three-string system. ([[2017-al-ajmi|Al-Ajmi, 2017, p. 43]])
- Both leaking and non-leaking average metal loss data were confirmed to follow normal distributions via normality tests. ([[2017-al-ajmi|Al-Ajmi, 2017, p. 50]])
- The probability of a casing leak is high (approaching 1) when the average metal loss exceeds 70% and low (near 0) below 30%. ([[2017-al-ajmi|Al-Ajmi, 2017, p. 53]])
- A specific ARBR range between 0.4 and 0.8 identifies a high-risk zone where non-uniform external corrosion is likely to cause multiple casing failures. ([[2017-al-ajmi|Al-Ajmi, 2017, p. 58]])
- The optimal ARBR cutoff (ARBRc*) was determined to be 0.58 in the study's primary example, balancing risk and cost. ([[2017-al-ajmi|Al-Ajmi, 2017, p. 69]])
- A 'Zero-Tolerance' approach (ARBR0) can increase casing integrity management costs by over 60% compared to the optimal ARBR approach. ([[2017-al-ajmi|Al-Ajmi, 2017, p. 71]])
- The maximum likely corrosion rate for the first 900 feet was determined to be 23.27 mpy (mils per year). ([[2017-al-ajmi|Al-Ajmi, 2017, p. 76]])
- The study identifies a critical cutoff (ARBRc) to distinguish between safe and high-risk casing segments; values above this threshold indicate a higher probability of failure. ([[2017-al-ajmi|Al-Ajmi, 2017, p. 98]])
- Field corrosion growth data for 208 wells were analyzed, with specific focus on metal loss percentages (e.g., ranging from 0.3% to over 10%). ([[2017-al-ajmi|Al-Ajmi, 2017, p. 85]])
- Casing Integrity Management Cost (CIMC) is calculated as a function of the probability of failure, where higher risk leads to higher potential costs. ([[2017-al-ajmi|Al-Ajmi, 2017, p. 95]])

## Limitations

EMIT tools provide circumferential average readings rather than directional ones. Unless a base log is performed using the same tool, the average corrosion rate is calculated using nominal thicknesses of the casing strings.

## Recommendations and Future Work

- Develop a risk-based sampling methodology for selecting wells for EMIT logging.
- Utilize more time-lapse corrosion logs to reduce uncertainty in forecasting casing life.
- Improve the accuracy of interpretation by developing directional multi-casing corrosion profiling tools.

## Related Concepts

- [[well-log-analysis]]
- [[environmental-risk-assessment]]
- [[petrophysics]]
- [[saudi-arabia]]
- [[petroleum-engineering]]
- [[risk-analysis]]
- [[corrosion]]
- [[electromagnetic-corrosion-logs]]
