---
type: source
id: "140150"
title: "ESTIMATION OF ACOUSTIC VELOCITIES AND ROCK MECHANICAL PARAMETERS USING ARTIFICIAL INTELLIGENCE TOOLS"
author: "Zeeshan Tariq"
year: 2016
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Abdulazeez Abdulraheem"
committee_members: []
source_file: "raw/140150 - ESTIMATION OF ACOUSTIC VELOCITIES AND ROCK MECHANICAL PARAMETERS USING ARTIFICIA.pdf"
url: "https://eprints.kfupm.edu.sa/140150"
study_area: "Middle Eastern carbonate reservoirs"
keywords:
  - Acoustic velocities
  - Rock mechanical parameters
  - Artificial Intelligence
  - Neural Network
  - ANFIS
  - Support Vector Machine
  - Well-log analysis
  - Carbonate reservoir
  - Acoustic Velocity
  - Neural Networks
  - Support Vector Machines
  - Well Log Analysis
  - Artificial Neural Network (ANN)
  - Young's Modulus
  - Poisson's Ratio
  - SVM
  - Unconfined Compressive Strength (UCS)
  - Bulk Density
  - P-wave Velocity
  - S-wave Velocity
  - Artificial Neural Network
  - Cohesion
  - Friction Angle
  - Uniaxial Compressive Strength
  - ANN
  - carbonate reservoirs
techniques:
  - neural-networks
  - anfis
  - machine-learning-geoscience
  - matlab
  - well-log-analysis
  - core-analysis
  - linear-regression
  - mathematical-modeling
  - triaxial-test
  - petrophysics
tags:
  - degree/ms
  - formation/none
  - location/none
  - location/middle-east-region
  - technique/neural-networks
  - technique/anfis
  - technique/machine-learning-geoscience
  - technique/matlab
  - technique/well-log-analysis
  - technique/core-analysis
  - technique/linear-regression
  - technique/mathematical-modeling
  - technique/triaxial-test
  - technique/petrophysics
  - theme/petrophysics
  - theme/rock-mechanics
  - theme/rock-physics-modeling
  - theme/geomechanics
  - terminology/acoustic-impedance
  - terminology/rock-mechanics
  - terminology/petrophysics
  - terminology/lithofacies-analysis
  - terminology/youngs-modulus
  - terminology/poissons-ratio
  - terminology/poisson-ratio
  - terminology/rock-mechanics
  - terminology/bulk-density
  - terminology/rock-physics
  - terminology/friction-angle
  - terminology/cohesion
status: ingested
---

# ESTIMATION OF ACOUSTIC VELOCITIES AND ROCK MECHANICAL PARAMETERS USING ARTIFICIAL INTELLIGENCE TOOLS

**Summary**: The thesis investigates the estimation of rock mechanical parameters, specifically Uniaxial Compressive Strength (UCS), friction angle (FANG), and cohesion, using various artificial intelligence techniques including Artificial Neural Networks (ANN), Adaptive Neuro-Fuzzy Inference Systems (ANFIS), and Support Vector Machines (SVM). The study utilizes well log data and core analysis to develop predictive models, concluding that ANFIS provides the highest accuracy for predicting these parameters.

---

## Research Problem

The accurate prediction of rock mechanical properties like UCS, friction angle, and cohesion is critical in petroleum engineering but often requires extensive laboratory testing. This research addresses the need for more efficient estimation methods using well log data and machine learning algorithms to predict these values from available geophysical measurements.

## Objectives

- Develop a new model based on artificial intelligence technique to predict sonic logs for missing intervals, and rock elastic and failure parameters from the basic Well log data.
- Derive Empirical correlation from the artificial intelligence model.
- Validate the new correlation with actual measured lab data.
- Compare the results with other published correlations.
- Perform a parametric study on various AI techniques (ANN, ANFIS, SVM) to optimize model parameters like number of neurons and learning algorithms.
- Evaluate the performance of different neural network architectures for predicting compress1ional wave travel time.

## Methods

The study utilizes three AI techniques (ANN, ANFIS, and SVM) implemented via MATLAB software. The workflow includes: 1) Data Acquisition & Pre-processing: Matching log data depth to core retrieval depth using a shift correction formula; 2) Data Analysis: Statistical description of datasets including mean, standard deviation, skewness, and kurtosis; 3) Relative Importance: Using linear regression correlation coefficients (CC) to identify the most influential input parameters for each target variable; 4) AI Implementation: Training ANN, ANFIS, and SVM models using various inputs like Gamma Ray, Bulk Density, Neutron Porosity, and Well-log velocities; 5. Evaluation: Comparing model performance based on Correlation Coefficient (R2) and Average Absolute Percentage Error (AAPE).

## Data and Materials

The study utilized data from three wells located in a limestone formation. Well 1 provided 13 core-based measurements for Poisson's Ratio and UCS; Well 2 provided 5 core-based measurements for Poisson's Ratio and 400 ft of wireline log data; Well 3 provided 4 core-based measurements for Poisson's Ratio and 400 ft of wireline log data.

## Key Findings

- The study identifies three primary categories for prediction: acoustic velocities (compressional and shear), elastic parameters (static Young's modulus and Poisson's ratio), and failure parameters (unconfined compressive strength, angle of internal friction, and cohesion). ([[2016-tariq|Tariq, 2016, p. 57]])
- The research highlights that dynamic Young's modulus is typically 1.5 to 3 times greater than static Young's modulus due to differences in strain rates between laboratory tests and ultrasonic measurements. ([[2016-tariq|Tariq, 2016, p. 35]])
- A specific gap was identified where no general empirical correlation exists for calculating Poisson's ratio directly from basic well logs, necessitating the use of AI models. ([[2016-tariq|Tariq, 2016, p. 43]])
- The study notes that while some correlations exist for failure parameters like UCS, they are often limited to specific rock types (e.g., limestone or sandstone) or require static Young's modulus as an input. ([[2016-tariq|Tariq, 2016, p. 40]])
- The Feed Forward Neural Network (FFNN) outperformed the Radial Basis Function (RBF) for predicting compressional wave travel time, achieving an R2 of 0.967 in testing compared to 0.879 for RBF. ([[2016-tariq|Tariq, 2016, p. 63]])
- The Levenberg Marquardt learning algorithm provided the best performance in FFNN models, yielding the lowest AAPE (2.48) and highest R2 (0.97) during testing. ([[2016-tariq|Tariq, 2016, p. 63]])
- A model using three input parameters (Gamma Ray, Bulk Density, and Neutron Porosity) was found to be superior to models using four or two inputs for both compressional and shear wave predictions. ([[2016-tariq|Tariq, 2016, p. 64]])
- For ANFIS, the Genfis2 (Subtractive Clustering) technique outperformed Genfis1 (Grid Partitioning), with a test R2 of 0.936 for compressional travel time. ([[2016-tariq|Tariq, 2016, p. 65]])
- In SVM models, the Gaussian kernel function significantly outperformed the Polynomial kernel, achieving an R2 of 0.808 in testing. ([[2016-tariq|Tariq, 2016, p. 67]])
- The optimal ANN configuration for compressional wave travel time was identified as a 3-20-1 architecture (3 inputs, 20 neurons, 1 output) using the Levenberg Marquardt algorithm. ([[2016-tariq|Tariq, 2016, p. 65]])
- The ANN model for compressional wave travel time achieved an AAPE of 3% and R2 of 0.865 on Well No. 1 during validation. ([[2016-tariq|Tariq, 2016, p. 82]])
- The ANN model for shear wave travel time predicted well data with an AAPE of 4.5 and R2 of 0.80 on Well No. 1. ([[2016-tariq|Tariq, 2016, p. 82]])
- Well No. 2 was identified as a limestone region with average bulk density of 2.797 g/cc and varying gamma ray values (mean 24.128 API). ([[2016-tariq|Tariq, 2016, p. 85]])
- The proposed ANN model for estimating static Young's modulus (Estatic) outperformed ANFIS and SVM, achieving R² values of 0.92-0.96 and lower AAPE compared to other models. ([[2016-tariq|Tariq, 2016, p. 104]])
- The ANN model for predicting static Poisson's ratio achieved an R² of 0.97 during training and 0.96 during testing with an AAPE of 1.4%. ([[2016-tariq|Tariq, 2016, p. 108]])

## Limitations

The availability of shear wave velocity data from well logs is not always guaranteed, and the high cost/complexity of triaxial tests makes obtaining enough core samples for extensive calibration difficult.

## Recommendations and Future Work

- Explore more data and additional input parameters to improve model accuracy.
- Incorporate resistivity logs as an additional input to capture near-wellbore features.
- Utilize hybrid optimization techniques to enhance AI prediction capabilities.
- Use ANFIS and SVM specifically to extract empirical equations.

## Related Concepts

- [[neural-networks]]
- [[anfis]]
- [[machine-learning-geoscience]]
- [[acoustic-impedance]]
- [[rock-mechanics]]
- [[petrophysics]]
- [[well-log-analysis]]
- [[rock-physics-modeling]]
- [[lithofacies-analysis]]
- [[youngs-modulus]]
- [[poissons-ratio]]
- [[poisson-ratio]]
- [[geomechanics]]
- [[bulk-density]]
- [[rock-physics]]
- [[friction-angle]]
- [[cohesion]]
