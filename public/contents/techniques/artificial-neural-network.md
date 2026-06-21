---
type: technique
title: "Artificial Neural Network"
aliases:
  - "ANN"
  - "Artificial Neural Network"
canonical: true
equipment: "Not stated in source"
software: "Not stated in source"
output: "predicted dew-point pressure values"
tags:
  - technique/artificial-neural-network
  - theme/reservoir-engineering
sources:
  - "raw/136378 - NEW MODELS FOR ESTIMATING THE DEW-POINT PRESSURE OF GAS CONDENSATE RESERVOIRS.pdf"
  - "raw/138433 - Prediction of Mobility Profile with Minimum Real Time Measurements using Artific.pdf"
  - "raw/140071 - Empirical Correlations for 5-Spot Water Flooding Performance with Different Perm.pdf"
  - "raw/140113 - AN EMPIRICAL CORRELATION FOR WATER FLOODING PERFORMANCE IN A LAYERED RESERVOIR.pdf"
  - "raw/140847 - WATER CUT ESTIMATION IN HIGH GOR WELLS.pdf"
  - "raw/140949 - Prediction of Lost Circulation Zones Using Artificial Intelligence Techniques.pdf"
  - "raw/141879 - REAL-TIME ESTIMATION OF LOST CIRCULATION RATE WHILE DRILLING USING ARTIFICIAL IN.pdf"
  - "raw/142049 - REAL-TIME PREDICTION OF RHEOLOGY OF OIL-BASED MUD.pdf"
  - "raw/142196 - Acid Fracture Design Optimization in Naturally Fractured Carbonate Reservoirs.pdf"
  - "raw/142243 - Numerical Investigation of Rock and Acid Properties Impacting Matrix Acidizing E.pdf"
  - "raw/142848 - Predicting Rate of Penetration (ROP) for Horizontal Wells in Unconventional Rese.pdf"
  - "raw/142924 - INTEGRATIVE CHARACTERIZATION AND MODELING OF THE PERMO-TRIASSIC CARBONATES, SOUT.pdf"
status: active
last_updated: 2026-06-18
---

# Artificial Neural Network

**Summary**: A computational model inspired by biological neural networks used to map input variables to output variables through a learning process.

---

## How It Is Used in the Thesis Collection

- [[2010-al-dhamen|Al-Dhamen, 2010]] developed artificial neural network models to predict dew-point pressure using various activation functions like Sigmoid and Tanh.

- [[2011-al-dhufairi|AL-DHUFAIRI, 2011]] used ANN to predict mobility profiles from limited sampling data points.

- [[2016-mahboob|MAHBOOB, 2016]] employed artificial neural network technique to generate the correlation from simulation data.

- [[2016-kalam|Kalam, 2016]] used artificial neural networks with optimum weights and biases to develop a new empirical correlation for water flood performance.

- [[2018-al-kadem|Al-Kadem, 2018]] developed an artificial neural network (ANN) to estimate water cut in high GOR wells using surface and subsurface parameters.

- [[2019-ahmed|Ahmed, 2019]] applied artificial neural networks (ANN) to predict lost circulation zones using mechanical surface parameters.

- [[2021-alsaihati|Alsaihati, 2021]] used artificial neural networks to evaluate detection and estimation of lost circulation.

- [[2021-alsabaa|Alsabaa, 2021]] used ANN to predict rheological properties of oil-based mud from field measurements.

- [[2022-alsulaiman|AlSulaiman, 2022]] used artificial-neural-network to predict productivity folds with a correlation coefficient of 0.98.

- [[2022-alkathim|Alkathim, 2022]] implemented ANN to predict PVBT using both 5 and 11 input parameters.

- [[2024-almomen|Almomen, 2024]] used ANN to predict ROP based on drilling parameters and mud properties.

- [[2024-hassan|Hassan, 2024]] implemented ANN to predict elemental composition and Permo-Triassic member identification.

## Instruments and Software



- [[2011-al-dhufairi|AL-DHUFAIRI, 2011]] used ANN to predict mobility profiles from limited sampling data points.

- [[2016-mahboob|MAHBOOB, 2016]] employed artificial neural network technique to generate the correlation from simulation data.

- [[2016-kalam|Kalam, 2016]] used artificial neural networks with optimum weights and biases to develop a new empirical correlation for water flood performance.

- [[2018-al-kadem|Al-Kadem, 2018]] developed an artificial neural network (ANN) to estimate water cut in high GOR wells using surface and subsurface parameters.

- [[2019-ahmed|Ahmed, 2019]] applied artificial neural networks (ANN) to predict lost circulation zones using mechanical surface parameters.

- [[2021-alsaihati|Alsaihati, 2021]] used artificial neural networks to evaluate detection and estimation of lost circulation.

- [[2021-alsabaa|Alsabaa, 2021]] used ANN to predict rheological properties of oil-based mud from field measurements.

- [[2022-alsulaiman|AlSulaiman, 2022]] used artificial-neural-network to predict productivity folds with a correlation coefficient of 0.98.

- [[2022-alkathim|Alkathim, 2022]] implemented ANN to predict PVBT using both 5 and 11 input parameters.

- [[2024-almomen|Almomen, 2024]] used ANN to predict ROP based on drilling parameters and mud properties.

- [[2024-hassan|Hassan, 2024]] implemented ANN to predict elemental composition and Permo-Triassic member identification.

## Typical Workflow



## Key Results and Findings

- The artificial neural network developed in this study had the best results among all other models. ([[2010-al-dhamen|Al-Dhamen, 2010, p. 10]])

- The ANN performed the best among the three tools (ANN, FunNet, SVM) for predicting mobility profile results. ([[2011-al-dhufairi|AL-DHUFAIRI, 2011, p. 11]])

- The ANN was used to map five input parameters (M, V, beta, wettability, fw) to the recovery factor. ([[2016-mahboob|MAHBOOB, 2016, p. 51]])

- The ANN-based correlation was able to match actual field data with good accuracy. ([[2016-kalam|Kalam, 2016, p. 114]])

- The ANN model demonstrated more reliable results with an average absolute relative percentage error of 8.13% when comparing values to actual water cut from test separators. ([[2018-al-kadem|Al-Kadem, 2018, p. 14]])

- ANN predicted loss zones in unseen wells with high correlation coefficients (R > 0.95). ([[2019-ahmed|Ahmed, 2019, p. 20]])

- Used as one of the primary AI techniques for predicting loss rates based on mechanical parameters. ([[2021-alsaihati|Alsaihati, 2021, p. 41]])

- The ANN models for all parameters (PV, YP, n, R300, R600, AV) achieved correlation coefficients (R) above 0.90 and AAPE below 8% in testing sets. ([[2021-alsabaa|Alsabaa, 2021, p. 40]])

- The ANN model achieved the highest accuracy among all tested models, with an AAPE of 3.3% and CC of 0.98. ([[2022-alsulaiman|AlSulaiman, 2022, p. 79]])

- The ANN with two hidden layers (10, 5 neurons) achieved the highest R2 (0.97) and CC (0.99) for the 11-input dataset. ([[2022-alkathim|Alkathim, 2022, p. 98]])

- The initial results confirmed the robustness of ANN models in predicting ROP for unconventional fields using only drilling parameters. ([[2024-almomen|Almomen, 2024, p. 14]])

- The simplest architecture (Architecture_1) performed best, balancing complexity with predictive accuracy. ([[2024-hassan|Hassan, 2024, p. 15]])

## Methodological Variations Across Sources


## Technical Limitations and Open Questions


## Related Concepts

**Related Techniques**: 

**Applicable to Terminology**: 

**Used in Themes**: 
