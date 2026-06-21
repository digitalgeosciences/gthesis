---
type: source
id: "142222"
title: "IMPROVING THE QUALITY OF DRILLING DATA"
author: "SALEM HAMOUD ALGHARBI"
year: 2022
department: "Petroleum Engineering Department"
degree: "PhD"
supervisor: "Dr. Abdulazeez Abdulraheem"
committee_members: []
source_file: "raw/142222 - IMPROVING THE QUALITY OF DRILLING DATA.pdf"
url: "https://eprints.kfupm.edu.sa/142222"
study_area: "MENA region (Middle East and North Africa)"
keywords:
  - drilling data quality
  - artificial intelligence
  - machine learning
  - dynamic drilling data
  - data improvement techniques
  - drilling data
  - data quality
  - statistical methods
  - hook-load
  - automated improvement
  - heuristic-based approach
  - smart agent
  - real-time applications
techniques:
  - neural-networks
  - machine-learning-geoscience
  - decision-tree
  - kalman-filtering
  - moving-average
  - kernel-regression
  - median-filter
  - exponential-smoothing
  - savitzky-golay-filtering
  - wavelet-filtering
  - polynomial-regression
  - lowess-savitzkygolay-data-filtering
  - 3d-histogram
  - heat-maps
  - statistical-analysis
tags:
  - degree/phd
  - location/middle-east-region
  - technique/neural-networks
  - technique/machine-learning-geoscience
  - technique/decision-tree
  - technique/kalman-filtering
  - technique/moving-average
  - technique/kernel-regression
  - technique/median-filter
  - technique/exponential-smoothing
  - technique/savitzky-golay-filtering
  - technique/wavelet-filtering
  - technique/polynomial-regression
  - technique/statistical-analysis
  - technique/data-analysis
  - theme/petroleum-engineering
  - theme/machine-learning-geoscience
  - terminology/petrophysics
  - terminology/data-quality
  - terminology/drilling-data
  - terminology/real-time-operation-center
  - terminology/signal-processing
  - terminology/accuracy
  - terminology/mean-absolute-percentage-error
  - terminology/hook-load
  - terminology/petroleum-engineering
status: ingested
---

# IMPROVING THE QUALITY OF DRILLING DATA

**Summary**: The thesis investigates the critical role of data quality in drilling operations, specifically focusing on how raw dynamic drilling data impacts the performance of artificial intelligence and machine learning models. It proposes a new automated approach to improve data quality that reduces processing time from days to minutes while maintaining high accuracy.

---

## Research Problem

Dynamic drilling data, particularly hook-load, is often plagued by noise, outliers, and missing values due to harsh operational environments. Current manual improvement processes are time-consuming and require high-level expertise, creating a bottleneck for integrating advanced AI models into real-time operations.

## Objectives

- To evaluate the strengths and weaknesses of existing data quality improvement techniques from a drilling data perspective.
- To identify a metric (criterion) to measure the effectiveness of improvement techniques for the quality of drilling data.
- To develop an approach that improves the quality of drilling data using artificial intelligence to explore and select optimal combinations of improvement techniques.
- Evaluate the effectiveness of various statistical data-quality-improvement algorithms (Kalman, Moving Average, etc.) on drilling datasets.
- Compare machine learning techniques (ANN, SVM, Decision Tree) in automating the data improvement process.
- Develop an iterative-improvement approach to automate the identification of trends and removal of noise.

## Methods

The study employs several stages: 1) Data Preparation: Removing null, NaN, and negative values. 2) Statistical Filtering: Testing Kalman filtering, Moving Average (various window sizes), Kernel Regression, Median Filter, Exponential Smoothing, Lowess, Wavelet Filtering, and Polynomial Regression. 3) Machine Learning: Training ANN, SVM, and Decision Tree models on both raw and 'expert-improved' datasets to evaluate their ability to replicate expert results. 4) Iterative Improvement: Using an AI agent to navigate a selection of parameters (block size, density threshold) to optimize data quality. 5) Heuristic Approach: Utilizing heuristic methods to find optimal parameter sets for noise removal and trend identification.

## Data and Materials

The study utilizes two primary datasets: 1) A large original dataset of real-time drilling surface parameters exceeding 150,000 records (used for current practice analysis), and 2) a smaller experimental subset of approximately 19,000 records used to compare raw vs. improved data in AI model performance.

## Key Findings

- The current manual/expert-led process for improving drilling data quality can reduce the dataset size by up to 94% (from over 150,000 records to approximately 13,000 points). ([[2022-algharbi|ALGHARBI, 2022, p. 67]])
- Removing basic indicators of missing values (Null, NA, NaN) and negative values from a raw dataset reduced the data volume by approximately 40%. ([[2022-algharbi|ALGHARBI, 2022, p. 57]])
- The study identifies that human-related errors are the most common source of flaws in drilling data. ([[2022-algharbi|ALGHARBI, 2022, p. 32]])
- A specific ANN architecture achieved a MAPE of 6.2% on training data when using raw data (after basic cleaning). ([[2022-algharbi|ALGHARBI, 2022, p. 48]])
- The proposed automated approach aims to reduce the time required for data quality improvement from several days to just a few minutes with an accuracy reaching 95%. ([[2022-algharbi|ALGHARBI, 2022, p. 23]])
- The raw dataset included over 150,000 records with hook-load values ranging from 28 to 265 units (mean of 141). ([[2022-algharbi|ALGHARBI, 2022, p. 68]])
- Moving average with a window size of 100 was found to be effective at removing noise but failed to capture the full range of data, specifically missing 'on-slip' values. ([[2022-algharbi|ALGHARBI, 2022, p. 82]])
- Median filter (window size 10) successfully captured both upper and lower valid data points while removing most noise, though it retained some intermediate noise. ([[2022-algharbi|ALGHARBI, 2022, p. 85]])
- Exponential smoothing (AAdA method) was identified as a superior option to moving average for cases where the full range of data is required, as it captures both upper and lower points while keeping noise levels low. ([[2022-algharbi|ALGHARBI, 2022, p. 87]])
- Polynomial regression with order 30 removed most noise but also eliminated many valid data points, making it less suitable for preserving full dataset characteristics. ([[2022-algharbi|ALGHARBI, 2022, p. 92]])
- The Decision Tree (DT) model outperformed ANN and SVM in terms of retaining the full range of data (including on-slip values) while effectively removing noise. ([[2022-algharbi|ALGHARBI, 2022, p. 114]])
- The iterative-improvement approach achieved a MAPE of 3.5 for dataset-1 and 1.5 for dataset-2, matching expert results in under two minutes. ([[2022-algharbi|ALGHARBI, 2022, p. 132]])
- The heuristic-based approach was proposed to solve the problem of large search spaces (over 75,000 combinations) when selecting parameters for noise removal and trend identification. ([[2022-algharbi|ALGHARBI, 2022, p. 154]])
- The heuristic-based approach achieved a MAPE of 3.2 on the hook-load dataset, showing significant improvement in performance as MAPE decreased over time. ([[2022-algharbi|ALGHARBI, 2022, p. 145]])
- The methodology's data-quality-improvement equation achieved a MAPE of 1.0 for a new dataset (stand pipe pressure) in less than one minute. ([[2022-algharbi|ALGHARBI, 2022, p. 148]])

## Limitations

The current approach might lead to overfitting because it mimics practitioners' results; this can be mitigated by setting a specific range for the matching. Some algorithms were unable to cover the full spectrum of the dataset, and some machine-learning techniques required significant processing time.

## Recommendations and Future Work

Future work should explore different exploitation-exploration methodologies to reduce the number of steps needed to reach optimal results. Other statistical algorithms could be explored to reach desired results in fewer steps. The approach could also be applied to datasets outside the oil and gas domain.

## Related Concepts

- [[neural-networks]]
- [[kalman-filtering]]
- [[petrophysics]]
- [[data-quality]]
- [[petroleum-engineering]]
- [[machine-learning-geoscience]]
- [[drilling-data]]
- [[real-time-operation-center]]
- [[signal-processing]]
- [[accuracy]]
- [[mean-absolute-percentage-error]]
- [[hook-load]]
- [[statistical-analysis]]
- [[middle-east-region]]
