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
  - Data Analytics
  - 1D to 3D Reservoir Prediction
  - Facies prediction
  - Porosity prediction
  - Geological characterization
  - Facies Classification
  - Supervised Machine Learning
  - Unsupervised Machine Learning
  - Geostatistics
techniques:
  - machine-learning-geoscience
  - neural-networks
  - python
  - petrel
  - k-means-clustering
  - support-vector-machine
  - xgboost
  - lstm
  - geostatistics
  - sequential-gaussian-simulation
  - well-log-analysis
  - data-analysis
  - knn
  - rf
  - kriging
  - petrophysics
tags:
  - degree/ms
  - formation/hugin-formation
  - location/north-sea
  - technique/machine-learning-geoscience
  - technique/neural-networks
  - technique/python
  - technique/petrel
  - technique/k-means-clustering
  - technique/support-vector-machine
  - technique/xgboost
  - technique/lstm
  - technique/geostatistics
  - technique/sequential-gaussian-simulation
  - technique/well-log-analysis
  - technique/data-analysis
  - technique/knn
  - technique/rf
  - technique/petrophysics
  - theme/petrophysics
  - theme/machine-learning-geoscience
  - theme/reservoir-modeling
  - terminology/porosity
  - terminology/facies-analysis
status: ingested
---

# Data Analytics and End-to-End Machine Learning for 1D to 3D Reservoir Prediction: Volve Field, North Sea

**Summary**: The thesis investigates an end-to-end machine learning workflow to predict facies and porosity from 1D well logs to 3D spatial models in the Volve Field, North Sea. It evaluates various ML algorithms (RF, SVM, KNN, LSTM) against geostatistical methods (SIS, SGS) and proposes a hybrid model that uses ML as a trend for geostatistical simulation.

---

## Research Problem

Subsurface geological characterization often suffers from incomplete/limited log datasets and is time-consuming when performed manually or via traditional geostatistics. There is a need for automated, data-driven methods to predict missing properties (porosity, facies) and propagate them into 3D space.

## Objectives

- To overcome incomplete or missing subsurface data (e.g., facies and porosity) by implementing 1D ML prediction or clustering.
- To intelligently distribute reservoir properties (e.g., facies and porosity) spatially, in 2D or 3D space using an end-to-end ML approach.
- To compare traditional and advanced ML techniques to perform 1D to 3D reservoir quality prediction.
- To choose the best ML technique and algorithm for the datasets.
- To compare well-established model-driven geostatistic method (e.g., kriging or gaussian simulation) and data-driven ML approach.
- Evaluate supervised machine learning algorithms (RF, LSTM) for 1D facies and porosity prediction.

## Methods

The study follows a multi-stage workflow: 1) Data analysis and preprocessing of well logs (GR, DT, DEN, PEF, NEU, PHIF, KLOGH). 2) Supervised learning using Random Forest (RF) and LSTM for 1D prediction. 3) Unsupervised clustering via K-Means Clustering (KMC) to redefine facies labels. 4) Reverse engineering of semi-supervised ML by using KMC results as new labels for RF/LSTM. 5) 3D grid construction in Petrel using corner point gridding and then exporting to a Python 'simbox' grid. 6) Well log upscaling (arithmetic for porosity, majority voting for facies). 7) 2D and 3D spatial prediction of facies using SVM and KNN with hyperparameter tuning. 8) Geostatistical modeling using SIS and SGS. 9) Hybrid modeling where ML-derived trends guide geostatistical simulations.

## Data and Materials

A publicly available dataset from the Volve field, North Sea, consisting of 20 wells with well tops, basic/petrophysical logs (GR, RT, DEN, NEU, PEF, DT), and interpreted data (facies, porosity [PHIF], permeability [KLOGH]).

## Key Findings

- ANN reached an R2 of 0.95 for predicting missing log porosity, outperforming other algorithms. ([[2023-kusuma|Kusuma, 2023, p. 17]])
- For facies prediction, Random Forest (RF) exceeded all other algorithms including LSTM, which achieved 0.84 accuracy but suffered from overfitting in the blind well. ([[2023-kusuma|Kusuma, 2023, p. 17]])
- Sequent hierarchical K-means clustering (KMC) produced three facies labels: clean sand, shaly sand, and sandy shale. ([[2023-kusuma|Kusuma, 2023, p. 17]])
- A semi-supervised approach using KMC facies in RF and LSTM resulted in 0.85 accuracy and over 0.7 F1-score. ([[2023-kusuma|Kusuma, 2023, p. 17]])
- For 2D prediction, SVM was the first choice for facies with 0.96 accuracy, identifying an ENE-WSW trend consistent with depositional concepts. ([[2023-kusuma|Kusuma, 2023, p. 17]])
- KNN resulted in an R2 of 1 to predict 2D porosity constrained by facies, outperforming other algorithms but showing distribution issues. ([[2023-kusuma|Kusuma, 2023, p. 17]])
- ML struggled with 3D prediction; SVM gave 0.77 facies accuracy and KNN had concerns when populating porosity outside wells. ([[2023-kusuma|Kusuma, 2023, p. 17]])
- A hybrid approach combining ML (SVM) for trend identification and geostatistics for distribution provided superior results for 3D prediction. ([[2023-kusuma|Kusuma, 2023, p. 18]])
- ANN outperformed the physics-based Gardner equation for DT, which had R2 values of 0.765 and 0.654 in blind wells. ([[2023-kusuma|Kusuma, 2023, p. 58]])
- The KMC approach yielded more stable results than GMM or DBSCAN for facies clustering. ([[2023-kusuma|Kusuma, 2023, p. 83]])
- GR was identified as the most important feature for facies classification in siliciclastic lithology due to its unique ability to identify clay content. ([[2023-kusuma|Kusuma, 2023, p. 85]])
- KLOGH (permeability) was found to be a dominant petrophysical property across all feature ranking approaches, though not a direct indicator of facies. ([[2023-kusuma|Kusuma, 2023, p. 85]])
- The RF algorithm showed the best performance for supervised ML prediction of facies, even with lower accuracy in blind wells due to overfitting. ([[2023-kusuma|Kusuma, 2023, p. 86]])
- Unsupervised KMC produced three distinct clusters (clean sand, shaly sand, and sandy shale) that were more consistent than the original labels. ([[2023-kusuma|Kusuma, 2023, p. 87]])
- The 'reverse engineering' semi-supervised approach using KMC results as labels for RF and LSTM achieved accuracy >0.85 and F1-score >0.70. ([[2023-kusuma|Kusuma, 2023, p. 89]])

## Limitations

High-dimensional spatial data (3D) was difficult to resolve in Python for deep learning models like LSTM; standard ML algorithms struggled to preserve well-scale heterogeneity and proportions in 3D space compared to geostatistics.

## Recommendations and Future Work

The study suggests that while ML is a powerful tool for 1D and 2D prediction, a hybrid approach combining ML-derived trends with geostatistical simulation is the best method for 3D reservoir modeling. Future exploration of AI potential is needed as technology evolves.

## Related Concepts

- [[machine-learning-geoscience]]
- [[k-means-clustering]]
- [[geostatistics]]
- [[hugin-formation]]
- [[north-sea]]
- [[porosity]]
- [[facies-analysis]]
- [[petrophysics]]
- [[knn]]
