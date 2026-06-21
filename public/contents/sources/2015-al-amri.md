---
type: source
id: "139687"
title: "Integrated Petrophysical and Reservoir Characterization Workflow to Enhance Permeability and Water Saturation"
author: "Meshal Ali Al-Amri"
year: 2015
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Mohamed Naser"
committee_members: []
source_file: "raw/139687 - Integrated Petrophysical and Reservoir Characterization Workflow to Enhance Perm.pdf"
url: "https://eprints.kfupm.edu.sa/139687"
study_area: "Saudi Arabia"
keywords:
  - petrophysical properties
  - permeability prediction
  - water saturation
  - lithofacies
  - carbonate reservoir
  - multi-resolution graph-based clustering (MRGC)
  - Leverett J-function
  - Integrated Petrophysical Workflow
  - Reservoir Characterization
  - Permeability Modeling
  - Lithofacies Analysis
  - Core Data Integration
  - Well-log analysis
  - Core permeability
  - Machine learning
  - KNN algorithm
  - Petrophysical analysis
  - Well log analysis
  - Dynamic permeability
  - petrophysical
  - capillary pressure
  - mercury injection capillary pressure (MICP)
  - petrophysical modeling
  - J-function
  - MICP
techniques:
  - core-analysis
  - well-log-analysis
  - microporosity-interpretation
  - petrophysics
  - mercury-injection-capillary-pressure
  - lithofacies-analysis
  - multi-resolution-graph-based-clustering
  - petrel
  - neutron-density-log
  - gamma-ray-log
  - statistical-analysis
  - machine-learning-geoscience
  - knn-algorithm
  - facimage
  - reservoir-modeling
  - multi-attribute-analysis
  - capillary-pressure
  - knn
tags:
  - degree/ms
  - location/saudi-arabia
  - technique/core-analysis
  - technique/well-log-analysis
  - technique/microporosity-interpretation
  - technique/petrophysics
  - technique/mercury-injection-capillary-pressure
  - technique/lithofacies-analysis
  - technique/multi-resolution-graph-based-clustering
  - technique/petrel
  - technique/neutron-density-log
  - technique/gamma-ray-log
  - technique/statistical-analysis
  - technique/machine-learning-geoscience
  - technique/knn-algorithm
  - technique/reservoir-modeling
  - technique/multi-attribute-analysis
  - technique/capillary-pressure
  - technique/knn
  - theme/petrophysics
  - terminology/porosity
  - terminology/permeability
  - terminology/facies-analysis
  - terminology/water-saturation
  - terminology/saturation-height-modeling
  - terminology/diagenesis
  - terminology/microporosity
  - terminology/petrophysics
  - terminology/saturation-height-modeling
  - terminology/petrophysics
  - terminology/saturation-height-modeling
status: ingested
---

# Integrated Petrophysical and Reservoir Characterization Workflow to Enhance Permeability and Water Saturation

**Summary**: The thesis proposes an integrated petrophysical workflow that incorporates lithofacies data to improve permeability and water saturation modeling in carbonate reservoirs. It utilizes a K-Nearest Neighbor (KNN) approach for permeability prediction and the Leverette J-function method for estimating irreducible water saturation across different lithofacies.

---

## Research Problem

The high uncertainty in predicting permeability and water saturation in carbonate reservoirs due to complex pore systems (micro/macro), diagenesis, and the lack of a direct relationship between porosity and permeability. Traditional methods often fail to account for these complexities, leading to inaccurate hydrocarbon-in-place estimations.

## Objectives

- Implement an integrated petrophysical workflow for carbonate reservoirs to improve geological/static models in predicting permeability and saturation distribution.
- Quantify reservoir rock heterogeneity by using a quantified geological facies model to better represent the permeability family of each face.
- Model saturation distribution from the constructed permeability model using SCAL (Normal Capillary Pressure and Mercury Injection Capillary Pressure) for un-cored wells.
- Develop an integrated petrophysical and reservoir characterization workflow.
- Filter core and log data to ensure high confidence in permeability modeling.
- Develop a robust water saturation height function (SHF) for various lithofacies in a carbonate reservoir.

## Methods

The study employs an integrated workflow: 1. Data Collection: Gathering lithofacies, core plug analysis, MICP data, and well logs from carbonate reservoirs in Saudi Arabia. 2. Core Analysis & Correction: Performing CCA to measure porosity/permeedability, applying overburden corrections for porosity, Klinkenberg corrections for permeability, and depth-shifting core data to match wireline logs (using SGR as a reference where possible). 3. Lithofacies Modeling: Building a lithofacies model based on sedimentary descriptions to categorize rocks into distinct units with specific permeability ranges. 4. Permeability Prediction: Utilizing the MRGC algorithm to predict permeability in uncored wells by integrating log data and lithofacies information. 5. Saturation Modeling: Applying Leverett J-functions (derived from MICP) for each lithofacies to determine saturation height models, ensuring a link between geology and petrophysical properties.

## Data and Materials

The study utilizes core data from multiple wells, well-log-analysis from both cored (e.g., Well-19) and uncored wells (e.g., Wells 43, 121, 219, 221), and dynamic test results (buildup/falloff tests). Specific lithofacies are identified as F-1, F-4, and F-18.

## Key Findings

- The MRGC algorithm achieved a correlation coefficient of 0.91 between core and predicted permeability in complex carbonate environments. ([[2015-al-amri|Al-Amri, 2015, p. 17]])
- Lithofacies-1 exhibited a permeability mean of 428.94 mD from core data, while the prediction model yielded a mean of 333.47 mD. ([[2015-al-amri|Al-Amri, 2015, p. 10]])
- Lithofacies-17 water saturation was predicted with a mean of 13.9% (Figure 5.12). ([[2015-al-amri|Al-Amri, 2015, p. 13]])
- The integration of lithofacies into the permeability model significantly improved prediction accuracy compared to standard log-only methods. ([[2015-al-amri|Al-Amri, 2015, p. 17]])
- J-function modeling showed higher initial water saturation in low-quality (diagenetic) lithofacies compared to Archie's method, better honoring reservoir heterogeneity. ([[2015-al-amri|Al-Amri, 2015, p. 19]])
- The standard deviation of the absolute difference between core porosity and wireline log porosity was determined to be 0.0201 pu. ([[2015-al-amri|Al-Amri, 2015, p. 44]])
- A total of 4,299 data points were retained for permeability modeling after applying the filtration criteria. ([[2015-al-amri|Al-Amri, 2015, p. 44]])
- 17 lithofacies were identified representing various depositional environments in the carbonate reservoir. ([[2015-al-amri|Al-Amri, 2015, p. 50]])
- The reservoir is characterized as a carbonate platform sequence with sedimentary features ranging from centimeter-scale bedforms to 30-foot thick packages. ([[2015-al-amri|Al-Amri, 2015, p. 50]])
- The study identified that some porosity measurements in the laboratory were incorrect due to low grain density values, necessitating data removal. ([[2015-al-amri|Al-Amri, 2015]])
- page_num_placeholder_123 ([[2015-al-amri|Al-Amri, 2015]])
- Lithofacies 4 (microporous cemented grainstones) shows high porosity but low permeability, highlighting the need for lithofacies as a primary input to distinguish reservoir quality. ([[2015-al-amri|Al-Amri, 2015, p. 67]])
- The KNN=2 model achieved an R² of 0.91 when comparing predicted permeability against core permeability. ([[2015-al-amri|Al-Amri, 2015, p. 78]])
- KNN=3 yielded a correlation coefficient (R²) of 0.90 for predicted permeability. ([[2015-al-amri|Al-Amri, 2015, p. 79]])
- The average error difference from Anti Log(Permeability Predicted) was 18.3 with a standard deviation of 1.93 at KNN=2. ([[2015-al-amri|Al-Amri, 2015, p. 81]])

## Limitations

The model has limitations in providing accurate permeability modeling per cluster/lithofacies when not enough data is provided for a specific facies, as not all lithofacies are uniformly distributed in the reservoir.

## Recommendations and Future Work

- Examine other regression techniques for permeability prediction.
- Run formation testers to validate permeability models on new wells.
- Revisit physical core descriptions in high-uncertainty areas.
- Quality check (QC) well transient testing data when discrepancies with static flow capacity occur.
- Perform more MICP measurements for each lithofacies.
- Compare water saturation predictions using three different methods: MICP, porous plate, and centrifuge.
- Conduct lab experiments to determine distinct m & n values of Archie's equation for all lithofacies.

## Related Concepts

- [[core-analysis]]
- [[well-log-analysis]]
- [[mercury-injection-capillary-pressure]]
- [[multi-resolution-graph-based-clustering]]
- [[porosity]]
- [[permeability]]
- [[facies-analysis]]
- [[water-saturation]]
- [[saturation-height-modeling]]
- [[petrophysics]]
- [[machine-learning-geoscience]]
- [[diagenesis]]
- [[microporosity]]
- [[capillary-pressure]]
