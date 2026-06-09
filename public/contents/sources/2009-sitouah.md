---
type: source
id: "136198"
title: "Estimation of Reservoir Properties from Seismic Attributes and Well Log Data using Artificial Intelligence"
author: "Mohamed Sitouah"
year: 2009
department: "Geosciences"
degree: "MS"
supervisor: "Gabor Korvin"
committee_members:
  - "Abdullatif . Osman"
  - "Abdulraheem Abdulazeez"
  - "Azzedine Zerguine"
source_file: "raw/136198 - Estimation of Reservoir Properties from Seismic Attributes and Well Log Data usi.pdf"
url: "https://eprints.kfupm.edu.sa/id/eprint/136198/"
study_area: "Oued Mya Basin, North-Eastern Sahara, Algeria"
keywords:
  - Reservoir Properties
  - Seismic Attributes
  - Well Log Data
  - Artificial Intelligence
  - Multilayer Perception Neural Network
  - General Regression Neural Network
  - Porosity
  - Permeability
  - Lithofacies
  - Neural Networks
  - Seismic Reservoir Characterization
  - Estimation of Reservoir Properties
techniques:
  - well-log-analysis
  - seismic-imaging
  - machine-learning-geoscience
  - neural-networks
  - multivariate-regression
  - hilbert-transform
  - petrel
tags:
  - degree/ms
  - location/saudi-arabia
  - location/africaregion
  - technique/well-log-analysis
  - technique/seismic-imaging
  - technique/machine-learning-geoscience
  - technique/neural-networks
  - technique/multivariate-regression
  - technique/hilbert-transform
  - technique/petrel
  - theme/petrophysics
  - terminology/porosity
  - terminology/permeability
  - terminology/lithofacies
status: ingested
---

# Estimation of Reservoir Properties from Seismic Attributes and Well Log Data using Artificial Intelligence

**Summary**: The thesis investigates the use of artificial intelligence, specifically neural networks like Multilayer Perceptron (MLP) and General Regression Neural Networks (GRNN), to predict reservoir properties such as porosity, permeability, and lithofacies from well log data and seismic attributes. The study concludes that integrating seismic attributes with well logs provides superior prediction results compared to using well logs alone.

---

## Research Problem

The primary challenge is that while high-quality reservoir property data (porosity, permeability) are best obtained via lab analysis of cores, these methods are expensive and time-consuming. Well log data are localized and do not cover the entire field area, whereas 3D seismic data provide broader coverage but require advanced techniques to translate attributes into quantitative reservoir properties.

## Objectives

- Compare two types of Neural Networks (MLP and GRNN) for predicting reservoir properties.
- Evaluate the performance of Artificial Intelligence in estimating porosity, permeability, and lithof_acies from seismic attributes and well log data.
- Determine which neural network architecture is more robust and efficient for geoscientific applications.
- Investigate and develop a multi layer perceptron (MLP) to estimate porosity and permeability from well log data.
- Investigate the suitability of estimating porosity and permeability from well logs using general regression neural network (GRNN).
- Compare the above two techniques and choose the better one.
- Estimate porosity and permeability from seismic attributes using the selected algorithm.
- Build a 3D model for the properties estimated by the selected neural network.
- Identify and calculate various seismic attributes to characterize the subsurface.
- Evaluate the relationship between seismic attributes and physical rock properties.
- Utilize artificial intelligence/machine learning to estimate reservoir properties from integrated datasets.
- To utilize Artificial Neural Networks (ANN) to estimate reservoir properties such as permeability and porosity.
- To integrate seismic attribute data with well log data to improve the accuracy of lithof_acies identification.
- To evaluate different activation functions (linear, threshold, sigmoid, tanh) within a neural network framework.
- Develop neural network models for porosity, permeability, and lithofacies estimation using Multilayer Perception Neural Network (MLP).
- Develop General Regression Neural Network (GRNN) models for the same properties.
- Integrate well log data and seismic attributes to improve prediction results.
- Perform spatial prediction of reservoir properties using Petrel software.
- Design and investigate multilayer perceptron (MLP) and general regression neural networks (GRNN) for predicting reservoir properties using well log data.
- Predict porosity and permeability using seismic attributes derived from 3D seismic volumes.
- Integrate seismic attributes with well log data to improve the prediction of reservoir properties.
- Build 3D models for predicted porosity, permeability, and lithofacies.

## Methods

The study employs two types of neural networks: Multilayer Perceptron (MLP) and General Regression Neural Network (GRNN). Well logs used as inputs include Sonic (DT), Neutron (NPHI), Density (RHOB), Gamma Ray (GR), Deep Resistivity (LLD), and Shale Volume (Vsh). Seismic attributes selected for prediction include Instantaneous Frequency, Instantaneous Phase, Arc length, Half Energy, and RMS amplitude. The GRNN model utilizes a Radial Basis Function (RBF) kernel with a Gaussian function. Data was split into 70% training and 30% testing sets. Spatial prediction of properties was performed using Petrel software.

## Data and Materials

Data from a reservoir in South Algeria consisting of well logs, core porosity values, core permeability values, and 3D seismic survey data. The study utilized two specific wells (Well-1 and Well-2) with a total of 145 data samples for the initial analysis.

## Key Findings

- General Regression Neural Networks (GRNN) outperform Multilayer Perceptron (MLP) neural networks in predicting reservoir properties. ([[2009-sitouah|Sitouah, 2009, p. 16]])
- GRNN models are more robust, easier, and quicker to train compared to MLP models. ([[2009-sitouah|Sitouah, 2009, p. 16]])
- Lithofacies identification is a primary task in reservoir characterization, requiring the study of petrophysical and petrographical properties. ([[2009-sitouah|Sitouah, 2009, p. 19]])
- Permeability depends on the statistics of pore throat diameters rather than pore size and is related to effective porosity. ([[2009-sitouah|Sitouah, 2009, p. 19]])
- The study area contains 32 discovered traps, with 27 confirmed and 5 new ones identified. ([[2009-sitouah|Sitouah, 2009, p. 36]])
- Well-log data for the Devonian reservoir show porosity of 4-20% (average 12%) and permeability ranging from 0.03 to 100 mD. ([[2009-sitouah|Sitouah, 2009, p. 41]])
- The Lower Silurian radioactive clays contain high organic matter (TOC) between 4-10%, with some areas reaching up to 20%. ([[2009-sitouah|Sitouah, 2009, p. 38]])
- Triassic SI layer is characterized by braided river sedimentation, with Gamma ray (GR) values of 20-160 API and resistivity from 1 to 30 Ohm.m. ([[2009-sitouah|Sitouah, 2009, p. 42]])
- Point bar deposits in the Triassic show GR values between 30-50 API and low resistivity (3 to 10 Ohm.m.). ([[2009-sitouah|Sitouah, 2009, p. 42]])
- Channel bar sedimentary facies in the Triassic exhibit high maturity with GR values of 20-40 API and high resistivity (10 to 50 Ohm.m.). ([[2009-sitouah|Sitouah, 2009, p. 42]])
- Triassic (TSI) sandstone is a major production formation with porosity between 1-14% (average 8%) and permeability up to 800mD due to micro-fractures. ([[2009-sitouah|Sitouah, 2009, p. 47]])
- The T1 reservoir in the Triassic has a thickness of 75m with porosity ranging from low to medium and permeability improved by micro-fractures. ([[2009-sitouah|Sitouah, 2009, p. 48]])
- Devonian layers are characterized as shallow marine and continental shelf sediments with lower oil production. ([[2009-sitouah|Sitouah, 2009, p. 48]])
- Mesozoic cap rocks (Triassic and Liassic) act as 'super seals' due to their thickness exceeding 2000m. ([[2009-sitouah|Sitouah, 2009, p. 48]])
- The Hilbert transform is used to derive instantaneous phase, frequency, and envelope from seismic data. ([[2009-sitouah|Sitouah, 2009, p. 56]])

## Limitations

The thesis notes that standard linear or non-linear multiple regressions are often inadequate for characterizing heterogeneous reservoirs.

## Recommendations and Future Work

Investigate newer neural network techniques like function networks (FN) and Cascaded correlation neural network (CCNN); use other AI techniques such as support vector machine (SVM), fuzzy logic (FL), and neuro-fuzzy systems (NFL); integrate more petrophysical data such as grain size, sorting, and cement percentage.

## Related Concepts

- [[well-log-analysis]]
- [[seismic-attribute-analysis]]
- [[machine-learning]]
- [[porosity]]
- [[permeability]]
- [[lithofacies]]
- [[reservoir-characterization]]
- [[saudi-arabia]]
- [[neural-networks]]
- [[petrophysics]]
- [[saudiarabia]]
- [[hilbert-transform]]
- [[africa-region]]
