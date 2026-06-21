---
type: source
id: "141358"
title: "ENHANCEMENT AND PREDICTION OF LONG-TERM ACID FRACTURE CONDUCTIVITY"
author: "Muhammad Aliyu Suleiman"
year: 2019
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Dhafer Al-Shehri"
committee_members: []
source_file: "raw/141358 - ENHANCEMENT AND PREDICTION OF LONG-TERM ACID FRACTURE CONDUCTIVITY.pdf"
url: "https://eprints.kfupm.edu.sa/141358"
study_area: "Laboratory experiments on limestone, dolomite, and chalk samples to evaluate acid treatment effects."
keywords:
  - Acid fracturing
  - Conductivity
  - Rock hardness
  - Machine learning
  - Nanocrystals
  - TEOS
  - Zinc sulfate
  - Etching patterns
  - acid fracture
  - conductivity prediction
  - rock strength
  - porosity
  - permeability
techniques:
  - sem
  - qemscan
  - xrf
  - permeability-measurement
  - helium-porosity
  - autoscan
  - impulse-hammer
  - machine-learning-geoscience
  - multivariate-linear-regression
  - sem-eds
  - gas-permeameter
  - pca
  - polynomial-regression
  - ensemble-classification
  - gentleboost
  - decision-trees
tags:
  - degree/ms
  - formation/khuff-formation
  - location/saudi-arabia
  - technique/sem
  - technique/qemscan
  - technique/xrf
  - technique/core-analysis
  - technique/helium-porosity
  - technique/machine-learning-geoscience
  - technique/multivariate-regression
  - technique/impulse-hammer
  - technique/sem-eds
  - technique/petrophysics
  - technique/poly-regression
  - technique/ensemble-classification
  - theme/petrophysics
  - theme/fracture-characterization
  - theme/reservoir-engineering
  - terminology/porosity
  - terminology/permeability
  - terminology/fracture-characterization
  - terminology/diagenesis
  - terminology/youngs-modulus
status: ingested
---

# ENHANCEMENT AND PREDICTION OF LONG-TERM ACID FRACTURE CONDUCTIVITY

**Summary**: The thesis investigates methods to enhance rock strength after acid fracturing and predicts long-term fracture conductivity using machine learning. It evaluates various chemical treatments (nanocrystals, TEOS, zinc salts) on limestone samples and develops predictive models for dolomite, chalk, and limestone based on etching patterns and treatment parameters.

---

## Research Problem

Acid fracturing often leads to rock softening and reduced conductivity over time due to acid-induced etching. There is a need for both chemical methods to stabilize the rock surface and accurate machine learning models to predict conductivity while accounting for complex factors like etching patterns and rock types.

## Objectives

- Perform systematic experimental work to enhance etched-rock hardness without reducing rock permeability.
- Develop a predictive model of acid fracture conductivity considering both etching patterns and rock mineralogy using machine learning tools.
- Evaluate the effectiveness of different consolidation agents (nanocrystals, TEOS) on rock strength.
- Investigate mineral transformation (calcite to smithsonite) using zinc solutions to enhance surface hardness.
- Analyze the impact of various treatments on porosity and permeability.
- Develop a machine learning-based classification system for acid-induced etching patterns.

## Methods

The study utilized several treatment methods: nanocrystal solutions (in ethanol or isopropyl alcohol) for consolidation, zinc sulfate for mineral alteration to convert calcite to smithsonite, and TEOS for silica gel formation. Rock samples from the Khuff formation and Indiana limestone were characterized using SEM, QEMSCAN, and XRF before and after treatments. Physical properties like Young's modulus (via Impulse Hammer), porosity (via Helium Porosimeter), and permeability (via Gas Permeameter) were measured. Machine learning models included a multiclass error-correcting output codes (ECOC) model with a decision tree learner to predict etching patterns and multivariate linear regression for conductivity prediction.

## Data and Materials

The study used 97 acid fracture experiments as a basis for the machine learning model. Laboratory samples included Indiana limestone, dolomite, and chalk. Experimental parameters included temperature, injection rate, injection time, acid concentration, and closure stress.

## Key Findings

- Nanocrystal solutions in ethanol resulted in a mean reduction of 5% in Young's modulus for Khuff sample 5.1, while the minimum value increased by 35%. ([[2019-suleiman|Suleiman, 2019, p. 68]])
- Nanocrystals in isopropyl alcohol led to an increase of 14.59% in mean Young's modulus and a 58% increase in the minimum value for Khuff sample 5. ([[2019-suleiman|Suleiman, 2019, p. 72]])
- Zinc sulfate treatment resulted in a 35% increase in rock hardness (as stated in abstract) by converting calcite to smithsonite. ([[2019-suleiman|Suleiman, 2019, p. 17]])
- TEOS treatment showed no reduction in permeability for the samples tested. ([[2019-suleiman|Suleiman, 2019, p. 17]])
- The multiclass error-correcting output codes (ECOC) model using a decision tree learner predicted etching patterns with an accuracy of 95%. ([[2019-suleiman|Suleiman, 2019, p. 18]])
- Multivariate linear regression predicted chalk conductivity with a normalized MSE of 0.364 and dolomite with 0.037 (CC near 90% and 95%). ([[2019-suleiman|Suleiman, 2019, p. 18]])
- Limestone prediction had a higher normalized MSE of 0.555 and CC around 90% due to its diverse etching patterns. ([[2019-suleiman|Suleiman, 2019, p. 20]])
- The average porosity for Khuff limestone was approximately 29%, while Indiana limestone was 17%. ([[2019-suleiman|Suleiman, 2019, p. 60]])
- Treatment with calcium hydroxide nanocrystals increased rock strength by 15%, while TEOS treatment increased it by up to 20% in some cases. ([[2019-suleiman|Suleiman, 2019, p. 132]])
- Zinc sulfate successfully converted calcite into smithsonite, increasing rock hardness by 25% to 35%. ([[2019-suleiman|Suleiman, 2019, p. 132]])
- Permeability was reduced by at least half in most treatments except for TEOS, where it remained stable. ([[2019-suleiman|Suleiman, 2019, p. 132]])
- Porosity remained largely unchanged across all treatments except for zinc chloride, which caused a minor decrease. ([[2019-suleiman|Suleiman, 2019, p. 132]])
- Dolomite and chalk developed 'rough' etching patterns in over 85% and 90% of experiments respectively. ([[2019-suleiman|Suleiman, 2019, p. 133]])
- Limestone showed high variability in etching patterns, with channelling occurring in approximately 30% of cases. ([[2019-suleiman|Suleiman, 2019, p. 133]])
- The ensemble classifier for etching patterns achieved an overall accuracy of 94.7%. ([[2019-suleiman|Suleiman, 2019, p. 109]])

## Limitations

Some high-conductivity channels in limestone were too large to be captured by the standard model, leading to higher errors in those specific cases. The study noted that some results required more data to reduce variance in certain models.

## Recommendations and Future Work

Perform confirmatory analyses (ultrasonic velocity, scratch tests) on hardened rocks; use more complex AI techniques like neural networks for prediction; and gather more conductivity data to improve model robustness.

## Related Concepts

- [[sem]]
- [[xrf]]
- [[machine-learning-geoscience]]
- [[porosity]]
- [[permeability]]
- [[fracture-characterization]]
- [[diagenesis]]
- [[youngs-modulus]]
- [[petrophysics]]
- [[reservoir-engineering]]
- [[saudi-arabia]]
