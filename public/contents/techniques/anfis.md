---
type: technique
title: "Anfis"
aliases:
  - "ANFIS"
  - "Adaptive Neuro-Fuzzy Inference System"
canonical: true
equipment: "Not stated in source"
software: "Not stated in source"
output: "predicted bottom-hole pressure (BHP)"
tags:
  - technique/anfis
  - theme/reservoir-engineering
sources:
  - "raw/138603 - PREDICTION OF PRESSURE DROP FOR TWO-PHASE FLOW IN VERTICAL PIPES USING ARTIFICIA.pdf"
  - "raw/140150 - ESTIMATION OF ACOUSTIC VELOCITIES AND ROCK MECHANICAL PARAMETERS USING ARTIFICIA.pdf"
  - "raw/140867 - ESTIMATION OF HOLE CLEANING CONDITION IN REAL-TIME WHILE DRILLING (OPERATIONAL P.pdf"
  - "raw/142049 - REAL-TIME PREDICTION OF RHEOLOGY OF OIL-BASED MUD.pdf"
  - "raw/143053 - DETECTION OF DRILLING VIBRATIONS IN CURVE &amp; HORIZONTAL SECTIONS.pdf"
status: active
last_updated: 2026-06-20
---

# Anfis

**Summary**: A hybrid inference system that combines the learning power of neural networks with the reasoning of fuzzy logic.

---

## How It Is Used in the Thesis Collection

- [[2011-al-shammari|Al-Shammari, 2011]] implemented an ANFIS model to predict flowing bottom-hole pressure in vertical multiphase flow.

- [[2016-tariq|Tariq, 2016]] implemented ANFIS to provide a robust supervised learning technique for predicting rock parameters.

- [[2019-elzenary|Elzenary, 2019]] used ANFIS to predict mud rheological properties like yield point and apparent viscosity.

- [[2021-alsabaa|Alsabaa, 2021]] used ANFIS to build models for predicting rheological properties from MWT and MFV.

- [[2023-saadeldin|SAADELDIN, 2023]] implemented ANFIS to evaluate its ability to capture parameter patterns for vibration detection.

## Instruments and Software



- [[2016-tariq|Tariq, 2016]] implemented ANFIS to provide a robust supervised learning technique for predicting rock parameters.

- [[2019-elzenary|Elzenary, 2019]] used ANFIS to predict mud rheological properties like yield point and apparent viscosity.

- [[2021-alsabaa|Alsabaa, 2021]] used ANFIS to build models for predicting rheological properties from MWT and MFV.

- [[2023-saadeldin|SAADELDIN, 2023]] implemented ANFIS to evaluate its ability to capture parameter patterns for vibration detection.

## Typical Workflow



## Key Results and Findings

- The ANFIS model achieved a 4.92% average absolute error on testing data, outperforming several empirical correlations. ([[2011-al-shammari|Al-Shammari, 2011, p. 11]])

- ANFIS was used to extract benefits from both neural networks and fuzzy logic in a single platform. ([[2016-tariq|Tariq, 2016, p. 52]])

- The ANFIS model for predicting Yield Point (YP) achieved a correlation coefficient of 0.97 in training. ([[2019-elzenary|Elzenary, 2019, p. 87]])

- The ANFIS model for apparent viscosity (AV) achieved a correlation coefficient of R = 0.96 and AAPE of 5.39%. ([[2021-alsabaa|Alsabaa, 2021, p. 52]])

- The ANFIS model showed high accuracy (R > 0.98) and low AAPE (< 2.5%) during testing phases. ([[2023-saadeldin|SAADELDIN, 2023, p. 78]])

## Methodological Variations Across Sources


## Technical Limitations and Open Questions


## Related Concepts

**Related Techniques**: 

**Applicable to Terminology**: 

**Used in Themes**: 
