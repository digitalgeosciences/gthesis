---
type: technique
title: "Sequential Gaussian Simulation"
aliases:
  - "SGS"
canonical: true
equipment: "Not stated in source"
software: "Not stated in source"
output: "multiple stochastic realizations of porosity"
tags:
  - technique/sequential-gaussian-simulation
  - theme/geostatistics
sources:
  - "raw/10010 - An integrated geological modeling of the Arab-D reservoir, Uthmaniyah area Ghawa.pdf"
  - "raw/10075 - Data integration in 3-D geostatistical porosity modeling of Hanifa Reservoir in .pdf"
  - "raw/10269 - Geostatistical modeling of Safaniya reservoir in Safaniya field.pdf"
  - "raw/10312 - Geostatistical modeling of Arab-D reservoir, Harmaliyah field, Saudi Arabia..pdf"
  - "raw/139083 - STOCHASTIC METHODS FOR SURFACTANT-POLYMER FLOODING AND WELL PLACEMENT OPTIMIZATI.pdf"
  - "raw/139694 - A Global Optimization Approach to the Gradual Deformation Method of History Matc.pdf"
  - "raw/139706 - HIGH-RESOLUTION 3D GEOCELLULAR FACIES AND PROPERTY MODELING OF BENTIU-1 RESERVOI.pdf"
  - "raw/139831 - STOCHASTIC OPTIMIZATION OF HYDRAULIC FRACTURE AND HORIZONTAL WELL PARAMETERS IN .pdf"
  - "raw/140879 - EFFECT OF PORE PRESSURE DEPLETION ON WELLBORE STABILITY AND HYDRAULIC FRACTURING.pdf"
  - "raw/142041 - Geostatistical Modelling Of Groundwater Storage Variations Using Insar Remote Se.pdf"
  - "raw/142190 - Sedimentology, Stratigraphy, and Reservoir Characterization of the Upper Jurassi.pdf"
  - "raw/143145 - Assessment of submarine channels for CO₂ storage in the deep Taranaki Basin, New.pdf"
status: active
last_updated: 2026-06-20
---

# Sequential Gaussian Simulation

**Summary**: A stochastic simulation method used to generate multiple realizations of a property while honoring its spatial statistics.

---

## How It Is Used in the Thesis Collection

- [[2002-ibrahim|Ibrahim, 2002]] used sequential Gaussian simulation to create realistic, non-smoothed porosity maps.

- [[2001-al-khalifa|Al-Khalifa, 2001]] used sequential Gaussian simulation for the primary construction of the four porosity models.

- [[1997-al-qassab|Al-Qassab, 1997]] applied Sequential Gaussian Simulation (SGS) to overcome the smoothing effects of kriged porosity volumes.

- [[1996-al-salem|Al-Salem, 1996]] used sequential-gaussian-simulation to simulate the heterogeneity of porosity in the Arab-D reservoir.

- [[2013-ahmed|AHMED, 2013]] applied stochastic-simulation algorithms (CMAES, DE, IWO) to optimize well placement and chemical concentrations.

- [[2015-adeniji|Adeniji, 2015]] used sequential Gaussian simulation (SGS) to generate three realizations of porosity and permeability for the 3D model.

- [[2015-jabir|Jabir, 2015]] used SGS to simulate the petrophysical properties of the reservoir.

- [[2015-rammay|RAMMAY, 2015]] applied stochastic-simulation via the Differential Evolution algorithm to optimize fracture parameters.

- [[2018-aldossary|AlDossary, 2018]] applied sequential-gaussian-simulation to upscale 1D geomechanical properties into 3D models.

- [[2022-karami|Karami, 2022]] used SGS to generate 50 equiprobable realizations of the transformed InSAR data.

- [[2022-bashri|Bashri, 2022]] used SIS to generate 3D lithofacies models from interpreted facies and sequence boundaries.

- [[2024-maigana|Maigana, 2024]] applied Sequential Gaussian Simulation (SGS) to generate porosity and permeability models.

## Instruments and Software



- [[2001-al-khalifa|Al-Khalifa, 2001]] used sequential Gaussian simulation for the primary construction of the four porosity models.

- [[1997-al-qassab|Al-Qassab, 1997]] applied Sequential Gaussian Simulation (SGS) to overcome the smoothing effects of kriged porosity volumes.

- [[1996-al-salem|Al-Salem, 1996]] used sequential-gaussian-simulation to simulate the heterogeneity of porosity in the Arab-D reservoir.

- [[2013-ahmed|AHMED, 2013]] applied stochastic-simulation algorithms (CMAES, DE, IWO) to optimize well placement and chemical concentrations.

- [[2015-adeniji|Adeniji, 2015]] used sequential Gaussian simulation (SGS) to generate three realizations of porosity and permeability for the 3D model.

- [[2015-jabir|Jabir, 2015]] used SGS to simulate the petrophysical properties of the reservoir.

- [[2015-rammay|RAMMAY, 2015]] applied stochastic-simulation via the Differential Evolution algorithm to optimize fracture parameters.

- [[2018-aldossary|AlDossary, 2018]] applied sequential-gaussian-simulation to upscale 1D geomechanical properties into 3D models.

- [[2022-karami|Karami, 2022]] used SGS to generate 50 equiprobable realizations of the transformed InSAR data.

- [[2022-bashri|Bashri, 2022]] used SIS to generate 3D lithofacies models from interpreted facies and sequence boundaries.

- [[2024-maigana|Maigana, 2024]] applied Sequential Gaussian Simulation (SGS) to generate porosity and permeability models.

## Typical Workflow



## Key Results and Findings

- Simulated maps did not show the smoothing effect between wells seen in kriging, better capturing interwell heterogeneity. ([[2002-ibrahim|Ibrahim, 2002, p. 132]])

- Sequential Gaussian Simulation was used as the base algorithm for all four tested modeling scenarios. ([[2001-al-khalifa|Al-Khalifa, 2001, p. 23]])

- SGS was used to provide more realistic distributions of porosity within each lithofacies. ([[1997-al-qassab|Al-Qassab, 1997, p. 16]])

- Simulation appeared to have reproduced actual heterogeneity in the distribution of porosity. ([[1996-al-salem|Al-Salem, 1996, p. 19]])

- IWO was determined to be the most suitable algorithm due to its superior balance of convergence and configuration quality. ([[2013-ahmed|AHMED, 2013, p. 91]])

- Stochastic simulations were used to generate three realizations of porosity as well as permeability using sequential Gaussian simulation (SGS). ([[2015-adeniji|Adeniji, 2015, p. 45]])

- SGS produced 25 realizations for each property, allowing for the identification of best-case and worst-case scenarios. ([[2015-jabir|Jabir, 2015, p. 160]])

- The DE algorithm successfully identified optimal values for fracture length, spacing, and number of stages. ([[2015-rammay|RAMMAY, 2015, p. 16]])

- SGS was used to extrapolate 1D geomechanical properties (Young's modulus, Poisson's ratio) to create 3D volumes for simulation. ([[2018-aldossary|AlDossary, 2018, p. 79]])

- SGS models showed higher spatial variability than kriging but maintained a similar distribution to original data. ([[2022-karami|Karami, 2022, p. 49]])

- The SIS technique allowed for a single realization to be selected for use in reservoir modeling, matching regional trends. ([[2022-bashri|Bashri, 2022, p. 132]])

- The SGS algorithm allowed the model to capture spatial variability while honoring geological heterogeneity. ([[2024-maigana|Maigana, 2024, p. 61]])

## Methodological Variations Across Sources


## Technical Limitations and Open Questions


## Related Concepts

**Related Techniques**: 

**Applicable to Terminology**: 

**Used in Themes**: 
