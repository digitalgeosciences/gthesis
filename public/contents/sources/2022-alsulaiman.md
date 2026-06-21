---
type: source
id: "142196"
title: "Acid Fracture Design Optimization in Naturally Fractured Carbonate Reservoirs"
author: "Monther Mohammed AlSulaiman"
year: 2022
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Murtada Al-Jawad"
committee_members: []
source_file: "raw/142196 - Acid Fracture Design Optimization in Naturally Fractured Carbonate Reservoirs.pdf"
url: "https://eprints.kfupm.edu.sa/142196"
study_area: "Naturally fractured carbonate reservoirs"
keywords:
  - Acid fracturing
  - Naturally fractured carbonate reservoirs
  - Hydraulic fractures
  - Natural fractures
  - Productivity enhancement
  - Artificial intelligence
  - Support vector machine
  - Fuzzy logic system
  - Artificial neural network
  - Neural Networks
  - Fuzzy Logic
  - Productivity Fold
  - Carbonate Reservoir
techniques:
  - mathematical-modeling
  - reservoir-simulation
  - machine-learning-geoscience
  - multi-variant-regression
  - petrophysics
  - fracture-characterization
  - artificial-neural-network
  - fuzzy-logic
  - support-vector-machine
  - matlab
  - statistical-analysis
tags:
  - degree/ms
  - technique/mathematical-modeling
  - technique/reservoir-simulation
  - technique/machine-learning-geoscience
  - technique/multi-variant-regression
  - technique/petrophysics
  - technique/fracture-characterization
  - technique/artificial-neural-network
  - technique/fuzzy-logic
  - technique/support-vector-machine
  - technique/matlab
  - technique/statistical-analysis
  - theme/reservoir-engineering
  - theme/petroleum-engineering
  - theme/carbonate-geology
  - terminology/fractured-reservoirs
  - terminology/acid-fracturing
  - terminology/porosity
  - terminology/permeability
  - terminology/conductivity
  - terminology/petrophysics
  - terminology/fracture-characterization
  - terminology/productivity-fold
status: ingested
---

# Acid Fracture Design Optimization in Naturally Fractured Carbonate Reservoirs

**Summary**: The thesis investigates the optimization of acid fracturing designs in naturally fractured carbonate reservoirs by comparing three AI models (ANN, Fuzzy Logic, and SVM) to predict productivity folds. It concludes that the ANN model provides the most accurate prediction with a correlation coefficient of 0.98 and an average absolute percentage error of 3.3%.

---

## Research Problem

Existing acid fracturing models often ignore the impact of natural fracture networks on fracture propagation and total conductivity. In naturally fractured carbonate reservoirs, these interactions are critical but poorly modeled, leading to uncertainties in optimizing design parameters like injection rate and volume.

## Objectives

- Demonstrate the impact of natural fractures intersecting a hydraulic fracture in dolomite reservoirs.
- Compare well performance (PI) with cases where no natural fractures intersect the hydraulic fracture.
- Evaluate the impact of different natural fracture intensities (spacing) across various reservoir permeabilities and temperatures.
- Optimize acid fracturing parameters (injection rate, volume, temperature, etc.) to maximize productivity.
- Develop a prediction model for productivity enhancement using artificial intelligence.
- Evaluate the impact of natural fractures on hydraulic fracture length and well productivity index (PI).

## Methods

The study employs an in-house developed integrated model that couples: 1) A fracture propagation model considering the activation of natural fractures; 2) An acid mass balance and transport model (solving for concentration and distance); 3) A heat transfer model accounting for reaction heat and reservoir temperature; and 4) A reservoir productivity model to calculate production indices. These are integrated into a simulation workflow where parameters like injection rate, volume, and acid type (straight vs. gel) are varied across 60 scenarios. Artificial Intelligence techniques—Support Vector Machine (SVM), Fuzzy Logic System (FLS), and Artificial Neural Network (ANN)—are used to analyze the relationship between inputs and outputs and provide rapid prediction tools.

## Data and Materials

The study evaluates 60 unique reservoir cases based on a 5x3x4 matrix: 5 permeability levels (0.001, 0.01, 0.1, 1, 10 mD), 3 natural fracture spacings (10, 40, 60 ft), and 4 reservoir temperatures (50, 100, 150, 200 °C). Two acid treatment volumes (1500 bbl and 3000 bbl) are analyzed across various injection rates and concentrations.

## Key Findings

- Dolomite reactivity with acid is highly sensitive to temperature; as acid moves into the reservoir, it is heated by the formation, resulting in a bell-shaped conductivity profile rather than a linear one. ([[2022-alsulaiman|AlSulaiman, 2022, p. 40]])
- The presence of natural fractures reduces hydraulic fracture length due to increased fluid loss at intersections, which can limit the drainage area and reduce well productivity compared to cases without natural fractures. ([[2022-alsulaiman|AlSulaiman, 2022, p. 47]])
- In low-permeability reservoirs (e.g., 0.001 mD), a higher injection rate is preferred as it extends fracture length, whereas in high-permeability reservoirs, a moderate injection rate is more effective. ([[2022-alsulaiman|AlSulaiman, 2022, p. 28]])
- The artificial neural network (ANN) model achieved a prediction error of approximately 3.3% for productivity folds. ([[2022-alsulaiman|AlSulaiman, 2022, p. 13]])
- Treatment volume is the most significant positive factor in determining productivity fold, with an increase from 1500 to 3000 bbl significantly improving results across all reservoir types. ([[2022-alsulaiman|AlSulaiman, 2022, p. 54]])
- Gel acid provides higher productivity than straight acid in dolomite reservoirs because the reaction-limited nature of the rock makes it more sensitive to the diffusion coefficient (where lower values, associated with gelled systems, are favorable). ([[2022-alsulaiman|AlSulaiman, 2022, p. 54]])
- The impact of natural fracture spacing is most significant in low permeability reservoirs; high density (short spacing) significantly reduces productivity compared to cases without fractures. ([[2022-alsulaiman|AlSulaiman, 2022, p. 51]])
- The ANN model outperformed both Fuzzy Logic and SVM models with a correlation coefficient of 0.98 and an AAPE of 3.3%. ([[2022-alsulaiman|AlSulaiman, 2022, p. 79]])
- The fuzzy logic model showed higher accuracy than the SVM model, with CC=0.969 and AAPE=6.06% for training data. ([[2022-alsulaiman|AlSulaiman, 2022, p. 68]])
- SVM models showed poor performance in some cases, with errors exceeding 90% in certain instances. ([[2022-alsulaiman|AlSulaiman, 2022, p. 67]])
- The lowest estimation error for injection rate was observed between 20-30 bpm; errors increased outside this range. ([[2022-alsulaiman|AlSulaiman, 2022, p. 73]])
- The lowest estimation error for natural fracture (NF) spacing was at 40 ft; errors increased as NF spacing moved away from 40 ft. ([[2022-alsulaiman|AlSulaiman, 2022, p. 74]])
- The lowest estimation error for reservoir permeability was at 0.01 mD. ([[2022-alsulaiman|AlSulaiman, 2022, p. 75]])
- The most critical design parameters were identified as treatment volume and injection rate, while the most influential reservoir properties were permeability and NF spacing. ([[2022-alsulaiman|AlSulaiman, 2022, p. 81]])
- Natural fractures in carbonate reservoirs tend to reduce performance because they increase leakoff, causing the main hydraulic fracture to be shorter. ([[2022-alsulaiman|AlSulaiman, 2022, p. 81]])

## Limitations

Several models discussed in the literature were noted for limitations, such as assuming constant temperature or infinite reaction rates. The author's model addresses these by including heat transfer and varying reaction rates but is limited to a simplified assumption that natural fractures are orthogonal to the hydraulic fracture.

## Recommendations and Future Work

The study suggests using the developed AI models (specifically ANN) for rapid prediction of productivity enhancement, as they provide reliable results with low error margins compared to complex simulation runs.

## Related Concepts

- [[machine-learning-geoscience]]
- [[reservoir-simulation]]
- [[fractured-reservoirs]]
- [[acid-fracturing]]
- [[reservoir-engineering]]
- [[carbonate-geology]]
- [[porosity]]
- [[permeability]]
- [[conductivity]]
- [[petrophysics]]
- [[fracture-characterization]]
- [[artificial-neural-network]]
- [[fuzzy-logic]]
- [[support-vector-machine]]
- [[productivity-fold]]
- [[petroleum-engineering]]
