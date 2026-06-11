---
type: source
id: "141409"
title: "LOCATING IDEAL CO2 SEQUESTRATION SITES: AN INTEGRATED ENVIRONMENTAL-BIG DATA ANALYTICS APPROACH"
author: "Muhammad Abdallah"
year: 2020
department: "Geosciences"
degree: "MS"
supervisor: "Mohammad Makkawi"
committee_members:
  - "Abdulazeez Abdulraheem"
  - "Abdullatif Al-Shuhail"
source_file: "raw/141409 - LOCATING IDEAL CO2 SEQUESTRATION SITES AN INTEGRATED ENVIRONMENTAL-BIG DATA ANAL.pdf"
url: "https://eprints.kfupm.edu.sa/id/eprint/141409/"
study_area: "Well 15/9-19 A, North Sea (Note: The title mentions CO2 sequestration sites, but the provided text focuses on a specific well in the North Sea for ANN training.)"
keywords:
  - CO2 Sequestration
  - Big Data
  - Artificial Intelligence
  - Neural Networks
  - Petrophysics
  - Well log data
  - Core data
  - Seismic data
  - Reservoir properties
  - Fuzzy Logic
  - Seismic Analysis
  - Artificial Neural Networks (ANN)
  - Permeability prediction
  - Big Data Analytics
  - Artificial Neural Networks
  - Well Log Analysis
  - Lithology Classification
  - Porosity prediction
  - Environmental Analysis
  - Machine Learning
  - Petroleum Engineering
techniques:
  - neural-networks
  - matlab
  - well-log-analysis
  - core-analysis
  - seismic-interpretation
  - machine-learning-geoscience
  - fuzzy-logic
  - statistical-analysis
tags:
  - degree/ms
  - location/saudi-arabia
  - location/north-sea
  - location/northsea-region
  - location/norwegian-continental-shelf
  - technique/neural-networks
  - technique/matlab
  - technique/well-log-analysis
  - technique/core-analysis
  - technique/seismic-interpretation
  - technique/machine-learning-geoscience
  - technique/fuzzy-logic
  - technique/statistical-analysis
  - theme/co2-sequestration
  - theme/machine-learning-geoscience
  - theme/environmental-geoscience
  - theme/petrophysics
  - terminology/co2-sequestration
  - terminology/permeability
  - terminology/porosity
  - terminology/petrophysics
  - terminology/lithology
status: ingested
---

# LOCATING IDEAL CO2 SEQUESTRATION SITES: AN INTEGRATED ENVIRONMENTAL-BIG DATA ANALYTICS APPROACH

**Summary**: The thesis investigates the use of Artificial Neural Networks (ANN) to predict core porosity and permeability from well log data (GR, RHOB, NPHI) to identify suitable CO2 sequestration sites. The study concludes that a single-layered ANN with 18 neurons and a log-sigmoidal transfer function effectively predicts these properties, providing a methodology for characterizing potential storage sites.

---

## Research Problem

The identification of suitable geological formations for long-term CO2 sequestration is complicated by the need for high permeability and reliable containment. The study addresses how to efficiently predict permeability from available well log data (GR, RHOB, NPHI) using ANN models to streamline site selection in the context of carbon capture and storage (CCS).

## Objectives

- Use Big Data analytics to identify high-quality lithologies for sequestration sites.
- Predict formation permeability using Artificial Neural Networks (ANN).
- Classify lithology types using ANN models.
- Predict porosity values using ANN models.
- Utilize Big Data analytics to identify potential CO2 sequestration reservoirs.
- Predict formation permeability from core plugs using a single-layered ANN model.
- Classify lithology using well log data and ANN models to determine suitability for CO2 movement.
- Predict porosity values from well log data using ANN models to estimate storage capacity.
- Identify potential CO2 sequestration reservoirs by utilizing available Big Data (well log data, core data, and seismic data) analytics and Artificial Intelligence techniques from the Upstream Oil & Gas Industry.
- Develop a general workflow for locating suitable CO2 sequestration sites using existing industrial data.
- Integrate artificial intelligence techniques (neural networks and fuzzy logic) to analyze large-scale datasets.
- Utilize petrophysical, seismic, and core data to evaluate reservoir potential.
- Evaluate various geological and geophysical factors influencing CO2 sequestration site selection.
- Develop an Artificial Neural Network (ANN) model to predict permeability from well log data.
- Compare the performance of different ANN architectures and training methods for permeability prediction.
- Digitize well log images into usable data points.
- Perform statistical analysis on log data to identify correlations with permeability.
- Develop an Artificial Neural Network (ANN) model to predict permeability.
- Evaluate the impact of different data transformations (e.g., logarithmic scaling) and network architectures on prediction accuracy.
- Predict core formation permeability from well log data (GR, RHOB, NPHI) using a model-based approach.
- Classify lithology into target categories (e.g., sandstone, carbonate) to evaluate reservoir suitability for CO2 storage.
- Evaluate the performance of different ANN configurations and transfer functions in predicting permeability.
- Classify lithology types using a two-layer feed-forward neural network based on GR, RHOB, and NPHI logs.
- Predict porosity values in wellbores using an artificial neural network (ANN) trained on core data.
- Evaluate the performance of ANN models using metrics such as cross-entropy error, correlation coefficient (CC), RMSE, and AAPE.
- Develop a methodology to locate suitable CO2 sequestration sites using integrated environmental-big data analytics.
- Predict formation permeability from core plugs in an exploratory well using a single-layered ANN model.
- Classify lithology based on log data to characterize the reservoir environment.
- Predict porosity values from well log data using a single layered Artificial Neural Network (ANN)
- Classify lithology to determine suitable CO2 sequestration sites
- Integrate environmental and big data analytics to identify ideal storage locations
- Identify ideal sites for CO2 sequestration using an integrated approach.
- Utilize big data analytics to process large-scale environmental datasets.
- Develop and implement machine learning models (ANN) to evaluate potential sequestration sites.

## Methods

The study utilizes Artificial Neural Networks (ANN) to predict permeability and classify lithology. Data from 557 sample points were extracted from three well logs: Gamma Ray (GR), Bulk Density (RHOB), and Neutron Porosity (NPHI). The ANN models were implemented using the MATLAB Neural Network Toolbox. For permeability prediction, a single-layered ANN was used with an optimal configuration of 18 neurons in the hidden layer and a log-sigmoidal transfer function. For lithology classification, a two-layer feed-forward network was trained using the scaled conjugate back-propagation algorithm. Performance metrics included Confusion Matrices, Receiver Operating Characteristic (ROC) curves, Correlation Coefficients (CC), Root Mean Square Error (RMSE), and Average Absolute Percentage Error (AAPE).

## Data and Materials

The study utilizes large-scale environmental datasets and well log data (Gamma Ray, Density, Neutron Porosity) for training and testing in the ANN model. Specific MATLAB scripts were used to calculate statistical parameters like mean, standard deviation, skewness, and kurtosis for various logs.

## Key Findings

- The study identifies four key criteria for locating a reservoir: Good Quality Lithologies, Favorable Permeability, Reservoir Extension, and Net-to-Gross Ratio. ([[2020-abdallah|Abdallah, 2020, p. 14]])
- The research establishes three main categories for site selection: Locating the Reservoir (lithology/permeability), Locating the Seal (low permeability/thickness), and Locating the Trap (structural/stratigraphic features). ([[2020-abdallah|Abdallah, 2020, p. 14]])
- ANN models were used to predict permeability, with results evaluated using R-squared (R2), Average Absolute Percentage Error (AAPE), and Root Mean Squared Error (RMSE). ([[2020-abdallah|Abdallah, 2020, p. 34]])
- Lithology classification was performed using a two-layer feed-forward network with sigmoid hidden and softmax output neurons. ([[2020-abdallah|Abdallah, 2020, p. 68]])
- Porosity prediction was conducted via ANN to evaluate the performance of different scenarios (Case 32) for potential sequestration zones. ([[2020-abdallah|Abdallah, 2020, p. 89]])
- A single-layered ANN model with 18 neurons and a log-sigmoidal transfer function was determined to be optimal for predicting permeability from GR, RHOB, and NPHI logs. ([[2020-abdallah|Abdallah, 2020, p. 15]])
- The optimum number of randomly selected data points from the total of 557 data points for permeability prediction was found to be 225. ([[2020-abdallah|Abdallah, 2020, p. 15]])
- A single-layered ANN model using a tan-sigmoid transfer function and 18 neurons achieved a correlation coefficient (CC) of 0.808, an RMSE of 0.055, and an AAPE of 5.94 for predicting porosity. ([[2020-abdallah|Abdallah, 2020, p. 17]])
- Lithology plays a major role in rock properties such as permeability and porosity, making its classification via ANN critical for determining CO2 movement potential. ([[2020-abdallah|Abdallah, 2020, p. 15]])
- The storage capacity of unmineable coal seams is relatively low (less than 2% of required storage) compared to other reservoir types. ([[2020-abdallah|Abdallah, 2020, p. 23]])
- Saline water aquifers are estimated to have a potential storage capacity ranging from 400 to 10,000 Gt of CO2 (20% to 500% of the required amount). ([[2020-abdallah|Abdallah, 2020, p. 24]])
- Artificial Neural Networks (ANN) can be used to improve estimations and predictions of reservoir properties such as porosity and permeability by using well log and seismic data. ([[2020-abdallah|Abdallah, 2020, p. 31]])
- Fuzzy logic is capable of handling incomplete data and imprecise information that commonly characterizes the exploration of hydrocarbons. ([[2020-abdallah|Abdallah, 2020, p. 26]])
- A hybrid system using type-2 fuzzy logic (type-2 FLS) showed better performance in modeling and predicting reservoir parameters like permeability compared to individual models. ([[2020-abdallah|Abdallah, 2020, p. 32]])
- Combining seismic and log data shows better results in estimating reservoir permeability compared to using only one of these datasets. ([[2020-abdallah|Abdallah, 2020, p. 32]])

## Limitations

The lithology classification accuracy was limited by an imbalanced dataset where sandstone dominated the samples, leading to over-prediction of that class. Additionally, the sample size for some lithologies (e.g., coal and siltstone) was too small for the network to generalize effectively.

## Recommendations and Future Work

To improve results, the author suggests using a larger and more balanced dataset for lithology classification to allow the neural network to better distinguish between less frequent rock types.

## Related Concepts

- [[ann]]
- [[matlab]]
- [[co2-sequestration]]
- [[permeability]]
- [[machine-learning-geoscience]]
- [[saudi-arabia]]
- [[well-log-analysis]]
- [[porosity]]
- [[environmental-geoscience]]
- [[core-analysis]]
- [[seismic-interpretation]]
- [[machine-learning]]
- [[neural-networks]]
- [[fuzzy-logic]]
- [[north-sea]]
- [[petrophysics]]
- [[lithology]]
- [[northsea-region]]
- [[norwegian-continental-shelf]]
