---
type: source
id: "142313"
title: "Data Analytics and End-to-End Machine Learning for 1D to 3D Reservoir Prediction: Volve Field, North Sea"
author: "Lundi Kusuma"
year: 2023
department: "Geosciences"
degree: "MS"
supervisor: "Ardiansyah Koeshidayatullah"
committee_members:
  - "Khalid Abdulsamad Al-Ramadan"
  - "SanLinn Isma'il Kaka"
source_file: "raw/142313 - Data Analytics and End-to-End Machine Learning for 1D to 3D Reservoir Prediction.pdf"
url: "https://eprints.kfupm.edu.sa/id/eprint/142313/"
study_area: "Volve field, North Sea"
keywords:
  - Artificial Intelligence
  - Machine Learning
  - 1D to 3D Reservoir Prediction
  - Facies prediction
  - Porosity prediction
  - Data analytics
  - Reservoir Prediction
  - Facies
  - Porosity
  - 1D to 3D prediction
  - Well Log Analysis
  - Facies Classification
  - Artificial Intelligence (AI)
  - 3D Reservoir Prediction
  - Unsupervised Clustering
  - K-Means Clustering (KMC)
  - Random Forest (RF)
  - Long Short-Term Memory (LSTM)
  - Support Vector Machine (SVM)
techniques:
  - neural-networks
  - rf
  - kmc
  - machine-learning-geoscience
  - knn
  - sequential-gaussian-simulation
  - lstm
  - xgboost
  - petrel
  - gis
  - python
  - scikit-learn
  - keras
  - k-means-clustering
  - geostatistics
  - kriging
  - gaussian-simulation
  - support-vector-machine
  - long-short-term-memory
  - feature-ranking
  - well-log-analysis
  - petrophysics
  - k-nearest-neighbors
  - numpy
  - gaussian-process
  - stochastic-simulation
  - matlab
tags:
  - degree/ms
  - formation/hugin-formation
  - location/north-sea
  - location/northsea-region
  - technique/machine-learning-geoscience
  - technique/neural-networks
  - technique/kriging
  - technique/petrel
  - technique/well-log-analysis
  - technique/geostatistics
  - technique/k-means-clustering
  - technique/petrophysics
  - technique/matlab
  - technique/support-vector-machine
  - theme/petrophysics
  - theme/machine-learning-geoscience
  - theme/reservoir-modeling
  - terminology/porosity
  - terminology/facies
  - terminology/lithofacies
status: ingested
---

# Data Analytics and End-to-End Machine Learning for 1D to 3D Reservoir Prediction: Volve Field, North Sea

**Summary**: The thesis explores the application of machine learning (ML) and geostatistical methods to predict facies and porosity in 3D space for the Volve Field in the North Sea. It compares various ML algorithms (RF, LSTM, SVM, KNN, GP) against traditional geostatistical methods (Kriging, SIS, SGS) to determine the most effective approach for 1D-to-3D reservoir characterization.

---

## Research Problem

Subsurface geological characterization often suffers from incomplete/limited log datasets and is time-consuming or biased when performed manually or with standard geostatistical methods. The study addresses how ML can automate and improve the prediction of reservoir properties (facies and porosity) from 1D to 3D.

## Objectives

- Assess the feasibility of machine learning algorithms for end-to-end reservoir characterization.
- Perform 1D well log facies and porosity predictions using supervised and unsupervised ML.
- Evaluate various ML algorithms to predict the distribution of facies and porosity in 2D and 3D space.
- Compare ML-driven models with geostatistical models for 3D prediction.
- To overcome incomplete or missing subsurface data (e.g., facies and porosity) by implementing 1D ML prediction or clustering.
- To intelligently distribute reservoir properties (e.g., facies and porosity) spatially, in 2D or 3D space using an end-to-end ML approach.
- To compare traditional and even advanced ML techniques to perform 1D to 3D reservoir quality prediction.
- To choose the best ML technique and algorithm for the datasets.
- To compare well-established model-driven geostatistic method (e.g., kriging or gaussian simulation) and data-driven ML approach.
- Evaluate machine learning algorithms for predicting porosity (PHIF) and classifying lithofacies in a dataset with significant missing values.
- Compare traditional machine learning models (RF, XGBoost, SVM) against deep learning architectures (ANN, LSTM).
- Implement unsupervised clustering to identify facies when labels are sparse or unavailable.
- Evaluate the performance of supervised ML algorithms (RF, LSTM) for facies prediction using different data preparation methods.
- Investigate unsupervised clustering (KMC) as a tool for automated facies classification.
- Develop a 3D grid and upscale well log data to facilitate spatial prediction in Python and Petrel.
- Compare the performance of various ML algorithms against geostatistical models (SIS, SGS) for 3D property population.
- Evaluate the performance of various machine learning algorithms for 1D porosity prediction.
- Assess the effectiveness of supervised and unsupervised machine learning for 1D facies prediction.
- Compare machine learning and geostatistics for 2D and 3D spatial predictions of facies and porosity.
- Develop a hybrid model combining machine learning as a trend property with geostatistical simulation (SIS/SGS) to improve 3D reservoir modeling.

## Methods

The study utilizes a multi-stage workflow: 1) Data Preparation involving reformatting various log formats (DLIS, LAS, txt, Excel) into consistent LAS files in Petrel; 2) Exploratory Data Analysis including univariate, bivariate, and multivariate analysis; 3) Data Pre-processing involving cleaning, outlier removal, rescaling (normalization/standardization), and feature engineering; 4) Machine Learning Modeling using Python (Scikit-learn, Keras) for 1D prediction (classification for facies, regression for porosity); 5) Spatial Distribution where results are upscaled to a 3D grid in Petrel and distributed via geostatistics or spatial ML. A hybrid approach combining ML with geostatistical models was also evaluated.

## Data and Materials

The study uses a dataset from the Volve Field in the North Sea consisting of multiple well logs including Gamma Ray (GR), Resistivity (RT), Density (DEN), Neutron (NEU), Photoelectric Factor (PEF), Sonic Travel Time (DT), and Porosity (PHIF). The facies data is limited to 10 out of 20 wells.

## Key Findings

- ANN reached an R2 of 0.95 for predicting missing log porosity, outperforming other algorithms. ([[2023-kusuma|Kusuma, 2023, p. 17]])
- Random Forest (RF) exceeded all other algorithms for facies prediction, including LSTM which achieved 0.84 accuracy but suffered from overfitting in blind wells. ([[2023-kusuma|Kusuma, 2023, p. 17]])
- Sequent hierarchical KMC produced three consistent facies labels: clean sand, shaly sand, and sandy shale. ([[2023-kusuma|Kusuma, 2023, p. 17]])
- The semi-supervised approach (KMC results used in RF/LSTM) yielded 0.85 accuracy and over 0.7 F1-score for facies prediction. ([[2023-kusuma|Kusuma, 2023, p. 17]])
- SVM was the preferred method for 2D facies prediction, achieving 0.96 accuracy and identifying an ENE-WSW trend consistent with depositional concepts. ([[2023-kusuma|Kusuma, 2023, p. 17]])
- KNN achieved an R2 of 1 to predict 2D porosity constrained by facies, but suffered from distribution issues. ([[2023-kusuma|Kusuma, 2023, p. 17]])
- ML struggled with 3D prediction directly; SVM gave only 0.77 accuracy for facies in 3D. ([[2023-kusuma|Kusuma, 2023, p. 17]])
- A hybrid model combining ML (as a trend) and geostatistics (SGS) provided superior results for 3D prediction compared to standalone methods. ([[2023-kusuma|Kusuma, 2023, p. 18]])
- ANN was used to predict missing log porosity with an R-squared value of 0.95, outperforming other tested algorithms. ([[2023-kusuma|Kusuma, 2023, p. 19]])
- Random Forest (RF) outperformed all other algorithms for facies prediction, including LSTM, which achieved a precision of 0.84 and F1-score > 0.5 but suffered from overfitting in blind wells. ([[2023-kusuma|Kusuma, 2023, p. 20]])
- KMC (Sequential Hierarchical Clustering) was proposed as an alternative for facies clustering, resulting in 3 facies: clean sand, sandy clay, and clayey sand. ([[2023-kusuma|Kusuma, 2023, p. 20]])
- The use of KMC for facies led to a higher accuracy (0.85) and F1-score > 0.7 compared to original labels due to inconsistency in the original data. ([[2023-kusuma|Kusuma, 2023, p. 20]])
- SVM was the first choice for 2D facies prediction, achieving an accuracy of 0.96 and identifying a WSW-ENE trend consistent with depositional concepts. ([[2023-kusuma|Kusuma, 2023, p. 20]])
- KNN achieved an R-squared value of 1 for constrained 2D porosity prediction but showed issues in distribution. ([[2023-kusuma|Kusuma, 2023, p. 20]])
- SVM provided a 0.77 accuracy for facies in 3D, while KNN was problematic for out-of-well porosity distribution. ([[2023-kusuma|Kusuma, 2023, p. 20]])

## Limitations

The study notes that unsupervised clustering is often more robust than supervised learning when facies labels are sparse (only 10 of 20 wells had labels). Additionally, the performance of LSTM was limited by the specific nature of the data's linear relationships.

## Recommendations and Future Work

The study suggests that while ML is powerful for 1D log prediction, it should be integrated into a hybrid framework with geostatistics for 3D modeling to overcome the limitations of standalone machine learning in spatial consistency.

## Related Concepts

- [[machine-learning]]
- [[neural-networks]]
- [[kriging]]
- [[porosity]]
- [[facies]]
- [[reservoir-characterization]]
- [[north-sea]]
- [[well-log-analysis]]
- [[geostatistics]]
- [[hugin-formation]]
- [[lithofacies]]
- [[reservoir-modeling]]
- [[support-vector-machine]]
