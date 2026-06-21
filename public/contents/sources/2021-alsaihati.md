---
type: source
id: "141879"
title: "REAL-TIME ESTIMATION OF LOST CIRCULATION RATE WHILE DRILLING USING ARTIFICIAL INTELLIGENCE TECHNIQUES"
author: "Ahmed Ibrahim Alsaihati"
year: 2021
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Salaheldin Elkatatny"
committee_members: []
source_file: "raw/141879 - REAL-TIME ESTIMATION OF LOST CIRCULATION RATE WHILE DRILLING USING ARTIFICIAL IN.pdf"
url: "https://eprints.kfupm.edu.sa/141879"
study_area: "Not stated in source"
keywords:
  - Lost circulation
  - Artificial intelligence
  - Neural networks
  - Machine learning
  - Real-time estimation
  - Wellbore stability
  - Drilling parameters
  - Lost circulation rate
  - Well-8
techniques:
  - artificial-neural-network
  - adaptive-neuro-fuzzy-inference-system
  - logistic-regression
  - support-vector-machine
  - machine-learning-geoscience
  - k-nearest-neighbor
  - neural-networks
  - anfis
  - rf
  - k-nn
  - gridsearchcv
  - ema
  - iqr
tags:
  - degree/ms
  - technique/artificial-neural-network
  - technique/machine-learning-geoscience
  - technique/logistic-regression
  - technique/support-vector-machine
  - technique/k-nearest-neighbor
  - technique/signal-processing
  - technique/k-nn
  - technique/rf
  - technique/neural-networks
  - theme/petroleum-engineering
  - theme/reservoir-engineering
  - theme/machine-learning-geoscience
  - terminology/lost-circulation
  - terminology/petroleum-engineering
  - terminology/wellbore-stability
  - terminology/loss-of-circulation
status: ingested
---

# REAL-TIME ESTIMATION OF LOST CIRCULATION RATE WHILE DRILLING USING ARTIFICIAL INTELLIGENCE TECHNIQUES

**Summary**: The thesis investigates the use of various artificial intelligence (AI) techniques to detect and estimate lost circulation rates in real-time during drilling operations. It evaluates several machine learning models, including ANN, ANFIS, SVM, Random Forest, and K-NN, using actual field data from seven wells to provide early warnings for drilling crews.

---

## Research Problem

Lost circulation is a significant operational risk in drilling that leads to increased costs, nonproductive time (NPT), and potential well control issues. Current monitoring methods like floating sensors or acoustic reflectors often fail to detect small losses or provide real-time rate estimations accurately.

## Objectives

- Evaluate different artificial intelligence techniques for detecting lost circulation occurrences.
- Estimate the loss of circulation rates in real time while drilling using only mechanical surface parameters.
- Compare the performance of various machine learning models (ANN, ANFIS, Logistic Regression, SVM, Random Forest, and K-NN) using actual field data.
- To use and evaluate the performance of different AI and ML techniques in estimating the loss of circulation rate while drilling in real-time based on drilling surface parameters.
- Evaluate the ability of different AI and ML techniques to detect loss occurrence.

## Methods

The study utilizes several supervised machine learning algorithms to process mechanical surface parameters for detection and estimation. The techniques evaluated include Artificial Neural Networks (ANN), Adaptive Neuro-Fuzzy Inference Systems (ANFIS), Logistic Regression, Support Vector Machines (SVM), Random Forest (RF), and K-Nearest Neighbors (K-NN). Performance is assessed using metrics such as Recall, Precision, F1-score for detection, and Root Mean Square Error (RMSE) and Correlation Coefficient (R) for rate estimation. Data from seven wells with known loss issues were used for training/modeling, while an eighth well was used for performance comparison.

## Data and Materials

Field data from an intermediate open-hole section of seven vertical wells; 13,894 total data points; parameters include Q (GPM), ROP (fph), RS (RPM), SPP (psi), T (kft.lbf), WOB (klbf), and APV (bbl.).

## Key Findings

- K-nearest neighbors outperformed other models in detecting loss of circulation occurrences in Well-8 with an F1-score of 0.80. ([[2021-alsaihati|Alsaihati, 2021, p. 15]])
- The K-nearest neighbor model achieved an RMSE of 0.17 and a correlation coefficient (R) of 0.90 in predicting the loss of circulation rate in Well-8. ([[2021-alsaihati|Alsaihati, 2021, p. 15]])
- Lost circulation is considered seepage when the loss rate starts from 1-10 bbl/hr. for oil-based mud (OBM) and from 1-25 bbl/hr. for water-based mud (WBM). ([[2021-alsaihati|Alsaihati, 2021, p. 19]])
- Partial loss is considered when the loss rate starts from 10-20 bbl/hr. for OBM and 10-50 bbl./hr. for OBM by some researchers, or 25-100 bbl./hr. for WBM. ([[2021-alsaihati|Alsaihati, 2021, p. 19]])
- Severe loss is considered when the loss rate ranges from 50-150 bbl./hr. (some sources define it as >40 bbl/hr. for OBM and >100 bbl/hr. for WBM). ([[2021-alsaihati|Alsaihati, 2021, p. 20]])
- The economic impact of lost circulation can be significant, with approximately 10% to 20% of NPT in the Gulf of Mexico (1993-2003) attributed to these events. ([[2021-alsaihati|Alsaihati, 2021, p. 18]])
- Drilling fluid costs represent 25%-40% of total well construction cost, making the impact of lost circulation significant when using expensive OBM. ([[2021-alsaihati|Alsaihati, 2021, p. 22]])
- The RF classifier achieved the highest F1-score of 0.989 in the training set and 0.910 in the testing set for predicting loss occurrence. ([[2021-alsaihati|Alsaihati, 2021, p. 64]])
- The RF regressor yielded an RMSE of 0.26 and R of 0.99 in the training set, and RMSE of 0.60 and R of 0.92 in the testing set for predicting loss rate. ([[2021-alsaihati|Alsaihati, 2021, p. 87]])
- The SVM classifier with an RBF kernel (C=1, gamma=auto) outperformed other SVM configurations with F1-scores of 0.91 and 0.83 in training/testing sets. ([[2021-alsaihati|Alsaihati, 2021, p. 79]])
- K-NN models using both Manhattan and Euclidean distances achieved high F1-scores (up to 0.955) for classification. ([[2021-alsaihati|Alsaihati, 2021, p. 82]])
- The ANN regressor with TANSIG activation and TRAINBR optimizer reached an RMSE of 1.12 in the training set. ([[2021-alsaihati|Alsaihati, 2021, p. 78]])
- The K-NN classifier achieved a high F1-score of 0.912 in the testing set for detecting loss occurrence, while RF was second with 0.910. ([[2021-alsaihati|Alsaihati, 2021, p. 96]])
- The SVM model (RBF kernel) achieved an F1-score of 0.83 for detection, and the ANN (TRAINBR/TANSIG) achieved 0.80. ([[2021-alsaihati|Alsaihati, 2021, p. 96]])
- Logistic regression was the least accurate classifier with an F1-score of 0.654 in the testing set. ([[2021-alsaihati|Alsaihati, 2021, p. 96]])

## Limitations

Models are highly dependent on data quality and specific hole sections; they require retraining for different well profiles or drilling parameters. Sensor exposure to harsh environments (shock, temperature) necessitates a regular recalibration cycle.

## Recommendations and Future Work

Establish a recalibration cycle for sensors to ensure data accuracy for the drilling crew.

## Related Concepts

- [[artificial-neural-network]]
- [[machine-learning-geoscience]]
- [[lost-circulation]]
- [[petroleum-engineering]]
- [[k-nearest-neighbor]]
- [[support-vector-machine]]
- [[adaptive-neuro-fuzzy-inference-system]]
- [[wellbore-stability]]
- [[reservoir-engineering]]
- [[loss-of-circulation]]
- [[signal-processing]]
- [[k-nn]]
- [[rf]]
