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
study_area: "North Africa (Algeria, Tunisia, Libya, Morocco, Mauritania)"
keywords:
  - Reservoir Properties
  - Seismic Attributes
  - Well Log Data
  - Artificial Intelligence
  - Neural Networks
  - Multilayer Perceptron
  - General Regression Neural Network
  - Porosity
  - Permeability
  - Lithofacies
  - Seismic Reservoir Characterization
techniques:
  - well-log-analysis
  - seismic-imaging
  - machine-learning-geoscience
  - neural-networks
  - multi-attribute-analysis
  - hilbert-transform
  - petrophysics
  - petrel
  - seismic-interpretation
  - seismic-inversion
tags:
  - degree/ms
  - formation/not-applicable
  - location/saudi-arabia
  - location/north-africa
  - location/southalgeria
  - technique/well-log-analysis
  - technique/seismic-imaging
  - technique/machine-learning-geoscience
  - technique/neural-networks
  - technique/multi-attribute-analysis
  - technique/hilbert-transform
  - technique/petrophysics
  - technique/petrel
  - technique/seismic-interpretation
  - technique/seismic-inversion
  - theme/petrophysics
  - terminology/porosity
  - terminology/permeability
  - terminology/facies-analysis
  - terminology/acoustic-impedance
status: ingested
---

# Estimation of Reservoir Properties from Seismic Attributes and Well Log Data using Artificial Intelligence

**Summary**: The thesis investigates the estimation of reservoir properties, specifically porosity and permeability, using a combination of seismic attributes and well log data processed through artificial intelligence models (MLP and GRNN). The study evaluates several seismic attributes including Instantaneous Frequency, Instantaneous Phase, Arc length, Half Energy, and RMS amplitude to predict core measurements.

---

## Research Problem

The challenge of accurately predicting key reservoir properties (porosity, permeability, and lithofacies) across a field without the extensive cost and time required for coring every well. The study specifically addresses how different neural network architectures (MLP vs. GRNN) perform when using both well log data and seismic attributes.

## Objectives

- Investigate and develop a multi layer perceptron (MLP) to estimate porosity and permeability from well log data.
- To evaluate the performance of Multi-layer Perceptron (MLP) and General Regression Neural Network (GRNN) in predicting porosity and permeability.
- Compare the above two techniques and choose the better one.
- Estimate reservoir properties (porosity, permeability, and lithofacies) from seismic attributes.
- Build a 3D model for the properties estimated by the selected neural network.
- Define and classify various types of seismic attributes (geometrical, physical, pre--stack, post-stack).

## Methods

The study employs a multi-step workflow: 1. Data Collection: Gathering of core samples, well logs (GR, DT, RHOB, NPHI, LLD, LLS), and seismic attributes (Instantaneous Frequency, Instantaneous Phase, Arc Length, Half Energy, RMS Amplitude). 2. Statistical Analysis: Averaging data for both training and testing sets to ensure consistency. 3. Modeling: Implementation of GRNN (Generalized Regression Neural Networks) to predict porosity and permeability. 4. Advanced Prediction: Using ANNs to classify lithofacies based on well log signatures. 5. 3D Modeling: Utilizing Petrel software to build a 3D grid from interpreted seismic surfaces to map the spatial distribution of reservoir properties.

## Data and Materials

The dataset includes well logs, core porosity values, core permeability values, and 3D seismic survey data from a reservoir in South Algeria. The study utilized two specific wells (Well-1 and Well-2) providing a total of 145 data samples. Training and testing sets were split into 70% and 30%, respectively.

## Key Findings

- General Regression Neural Networks (GRNN) outperform Multilayer Perceptron (MLP) neural networks in terms of accuracy, robustness, and training speed. ([[2009-sitouah|Sitouah, 2009, p. 16]])
- The study area includes a reservoir with porosity ranging from 4-20% (average 12%) and permeability between 0.03 - 100 mD in the Devonian section. ([[2009-sitouah|Sitouah, 2009, p. 41]])
- Triassic SI layer thickness varies between 12-96m, with a more stable distribution of 70-80m in the central part of the block. ([[2009-sitouah|Sitouah, 2009, p. 35]])
- T1 thickness in Triassic ranges from 0-78m, and T2 thickness varies between 9-66m. ([[2009-sitouah|Sitouah, 2009, p. 35]])
- The lower Silurian mudstone and shale (radioactive black shale) contain high organic matter content (TOC) of approximately 4-10%, with some areas reaching up to 20%. ([[2009-sitouah|Sitouah, 2009, p. 38]])
- Fluvi-deltaic layers in the lower Cretaceous are characterized by fine to coarse sandstones and clays. ([[2009-sitouah|Sitouah, 2009, p. 29]])
- Point bar deposits show Gamma ray (GR) values of 30-50 API and low resistivity (3-10 Ohm.m). ([[2009-sitouah|Sitouah, 2009, p. 42]])
- Channel bar sedimentary features exhibit GR values of 20-40 API and high resistivity (10-50 Ohm.m). ([[2009-sitouah|Sitouah, 2009, p. 42]])
- Triassic (TSI) sandstone is the main production formation with porosity ranging from 1-14% and permeability up to 800mD, enhanced by micro-fractures. ([[2009-sitouah|Sitouah, 2009, p. 47]])
- The T1 reservoir has a thickness of 75m (net 10-20m) with porosity ranging from 2-17% and permeability up to 300mD. ([[2009-sitouah|Sitouah, 2009, p. 48]])
- Lower Devonian reservoirs are characterized as shallow marine/continental shelf sediments with lower oil production. ([[2009-sitouah|Sitouah, 2009, p. 48]])
- The Hilbert Transform is used to derive instantaneous attributes like envelope, phase, and frequency from seismic traces. ([[2009-sitouah|Sitouah, 2009, p. 56]])
- Instantaneous frequency serves as a discriminator for lithology changes, where lower frequencies may indicate sand-rich bedding. ([[2009-sitouah|Sitouah, 2009, p. 48]])
- Average energy (RMS amplitude) is used to map direct hydrocarbon indicators and other geological features. ([[2009-sitouah|Sitouah, 2009, p. 68]])
- The MLP model for porosity estimation from well logs achieved a correlation coefficient (CC) of 0.91 and MSE of 0.10 on the training set, but dropped to CC = 0.66 and MSE = 0.40 on the testing set. ([[2009-sitouah|Sitouah, 2009, p. 105]])

## Limitations

The thesis notes that the Hilbert Transform is only valid for narrow-band signals, necessitating Gabor-Morlet decomposition for broader bandwidths.

## Recommendations and Future Work

The author recommends investigating newer neural network techniques like function networks (FN) and Cascaded correlation neural network (CCNN), as well as other AI methods such as support vector machines (SVM), fuzzy logic (FL), and neuro-fuzzy systems (NFL). Additionally, the integration of more petrophysical data, such as grain size, sorting, cement percentage, and grain shape from petrography, is suggested to improve prediction accuracy.

## Related Concepts

- [[neural-networks]]
- [[well-log-analysis]]
- [[seismic-imaging]]
- [[porosity]]
- [[permeability]]
- [[facies-analysis]]
- [[petrophysics]]
- [[saudi-arabia]]
- [[hilbert-transform]]
- [[acoustic-impedance]]
- [[southalgeria]]
