---
type: source
id: "10389"
title: "Integrated deterministic/probabilistic petroleum volume evaluation for a carbonate reservoir"
author: "Sami Hamad Saleh Al-Shridi"
year: 2003
department: "Geosciences"
degree: "MS"
supervisor: "Abdullatif A. Qahwash"
committee_members:
  - "Muhammad H. Makkawi"
  - "Gabor Korvin"
source_file: "raw/10389 - Integrated deterministicprobabilistic petroleum volume evaluation for a carbonat.pdf"
url: "https://eprints.kfupm.edu.sa/id/eprint/10389/"
study_area: "Arab-D Reservoir, Saudi Arabia"
keywords:
  - hydrocarbon volume
  - uncertainty
  - deterministic method
  - probabilistic method
  - Monte Carlo simulation
  - carbonate reservoir
  - pore-volume estimation
  - hydrocarbon volume estimation
  - Latin Hypercube sampling
  - deterministic model
  - probabilistic model
  - 3D geocellular modeling
  - petrophysical properties
  - porosity
  - net pay
  - probabilistic evaluation
  - pore-volume
  - petrophysical parameters
  - deterministic
  - probabilistic
techniques:
  - well-log-analysis
  - petrel
  - geostatistics
  - stochastic-simulation
  - core-analysis
  - planimeter
  - latin-hypercube-sampling
  - stratamodel
  - open-works
  - geolog
  - risk-analysis
  - reservoir-modeling
  - inverse-distance-algorithm
  - risk-software
  - correlation-analysis
  - regression-analysis
  - risk
tags:
  - degree/ms
  - formation/arab-d-reservoir
  - location/saudi-arabia
  - location/eastern-province
  - technique/well-log-analysis
  - technique/stochastic-simulation
  - technique/core-analysis
  - technique/latin-hypercube-sampling
  - technique/geostatistics
  - technique/petrel
  - technique/stratamodel
  - technique/open-works
  - technique/geolog
  - technique/risk-analysis
  - technique/sequential-gaussian-simulation
  - theme/carbonate-reservoirs
  - theme/uncertainty-quantification
  - theme/petrophysics
  - theme/volumetric-estimation
  - theme/volumetrics
  - theme/uncertain-quantification
  - theme/carbonate-geology
  - terminology/pore-volume
  - terminology/uncertainty-quantification
  - terminology/porosity
  - terminology/net-pay
  - terminology/volumetrics
status: ingested
---

# Integrated deterministic/probabilistic petroleum volume evaluation for a carbonate reservoir

**Summary**: The thesis evaluates hydrocarbon pore-volume in the Arab-D carbonate reservoir using a combination of deterministic 3D geocellular modeling and probabilistic Monte Carlo simulations. It demonstrates that integrating these methods, while accounting for parameter correlations and dependencies, provides a more robust estimation of volume and a clearer quantification of uncertainty.

---

## Research Problem

Hydrocarbon volume estimation in carbonate reservoirs like Arab-D is subject to significant uncertainties due to complex lithology, varying porosity/permeability, and data limitations. The study addresses how to integrate deterministic models with probabilistic simulations to provide a more robust range of potential volumes for development planning.

## Objectives

- Assess the utility of probabilistic methodology as an aid in quantifying uncertainty and in pore-volume estimation.
- Integrate deterministic and probabilistic estimations to yield a better result for decision-making in exploration, drilling planning, field development, production planning, and economic evaluation.
- Compare different numerical integration methods for calculating reservoir area and volume.
- Evaluate the impact of uncertainty in petrophysical parameters on hydrocarbon volume estimation.
- Implement Monte Carlo simulation to generate probability distributions for oil volumes.
- Utilize Latin Hypercube sampling to improve the efficiency of probabilistic simulations.
- Develop a 3D geocellular model to represent the reservoir's structural and petrophysical properties.
- Perform statistical analysis on porosity and net pay data to determine appropriate probability distributions.
- Compare deterministic pore-volume calculations with probabilistic Monte Carlo simulations.
- Quantify the impact of uncertainty in key parameters (porosity, thickness, area) on total hydrocarbon volume.
- Develop a deterministic 3D geocellular model for the Arab-D reservoir.
- Perform Monte Carlo simulations to quantify the probability distribution of pore volumes.
- Evaluate the impact of parameter correlations and dependencies on volume estimation.
- Compare results from aggregated (zoned) vs. non-aggregated (single unit) simulation approaches.
- Evaluate the impact of geological, geophysical, and petrophysical data on hydrocarbon volume uncertainty.
- Integrate deterministic and probabilistic methods for more accurate volume estimation.
- Identify advanced technologies and expert experience to reduce uncertainty in reservoir calculations.

## Methods

The study utilizes a multi-step workflow: 1. Data Integration: Well logs (sonic, neutron-density), core data, and seismic surveys were integrated to define reservoir zones. 2. Statistical Analysis: Histograms and probability functions were used to characterize the distribution of porosity and net pay. 3. Deterministic Modeling: A 3D geocellular model was built using Stratamodel, incorporating structural grids (from Open-Works), petrophysical properties (interpolated via inverse distance weighting), and a defined Oil-Water Contact (OWC). 4. Probabilistic Modeling: Monte Carlo simulations with 10,000 trials were performed using @RISK software to model the impact of variable parameters on total pore volume.

## Data and Materials

The study utilizes data from the Arab-D reservoir in a carbonate system. The geocellular model consists of 320,292 cells (based on a 250m x 250m grid). Data includes well logs with half-foot resolution, core analysis results for three distinct zones, and seismic-derived structural maps.

## Key Findings

- The study found that applying aggregation and dependency in the probabilistic model led to better results by providing additional pore volume and quantifying parameter uncertainties. ([[2003-al-shridi|Al-Shridi, 2003, p. 12]])
- In the correlated case, simulation resulted in a tighter hydrocarbon volume distribution (smaller standard deviation). ([[2003-al-shridi|Al-Shridi, 2003, p. 12]])
- Hydrocarbon volumes calculated in both cases were significantly different. ([[2003-al-shridi|Al-Shridi, 2003, p. 12]])
- Monte Carlo simulations produced good hydrocarbon volume estimates despite the uncertainty in basic parameters. ([[2003-al-shridi|Al-Shridi, 2003, p. 12]])
- The Arab-D reservoir is a carbonate reservoir of Upper Jurassic, Kimmeridgian in age, with an environment ranging from shallow subtidal to supratidal. ([[2003-al-shridi|Al-Shridi, 2003, p. 18]])
- The Trapezoid Rule is a commonly used method in the oil industry because it captures all reservoir complexity by considering the average area of the reservoir. ([[2003-al-shridi|Al-Shridi, 2003, p. 26]])
- Simpson's Rule is mathematically more accurate than trapezoid integration but requires evenly spaced contours and an even number of contours. ([[2003-al-shridi|Al-Shridi, 2003, p. 26]])
- The Arab-D reservoir is part of the upper Jurassic section, which contains approximately 17% of the world's oil and 67% of Saudi Arabia's oil. ([[2003-al-shridi|Al-Shridi, 2003, p. 31]])
- Hith Formation provides a regional seal averaging 500 ft (167 m) in thickness for Jurassic-sourced oil. ([[2003-al-shridi|Al-Shridi, 2003, p. 28]])
- Latin Hypercube sampling is designed to accurately recreate the input distribution through sampling in fewer iterations compared to Monte Carlo methods by using stratification of the input probability distributions. ([[2003-al-shridi|Al-Shridi, 2003, p. 34]])
- Grainstones in the Arab-D reservoir are the most important sediment type, exhibiting high porosities (up to 30%) and permeabilities (sometimes above 2000 mD). ([[2003-al-shridi|Al-Shridi, 2003, p. 48]])
- Wackestones and packstones in the lower part of the reservoir show porosity ranges of 5-15% and permeabilities between 1 to 10 mD. ([[2003-al-shridi|Al-Shridi, 2003, p. 50]])
- Note: The study identifies three distinct zones based on lithology; Zone 1 and 2 are dominated by grainstone facies (high porosity), while Zone 3 is dominated by mudstone facies (low porosity). ([[2003-al-shridi|Al-Shridi, 2003]])
- page_num_not_found_in_text_but_implied_by_context_of_sections_4.3.1.1_and_4.3.2 ([[2003-al-shridi|Al-Shridi, 2003]])
- The normal distribution was identified as the best fit for porosity values in all three zones of the Arab-D Reservoir. ([[2003-al-shridi|Al-Shridi, 2003, p. 76]])

## Limitations

The study notes that the deterministic model provides only a single outcome, which does not account for the inherent uncertainty in input parameters like porosity and net pay; this is addressed by the probabilistic approach.

## Recommendations and Future Work

- Utilize 3D seismic data early in field development to improve petrophysical parameter interpolation and reduce uncertainty.
- Integrate logs, cores, and thin-sections at well locations to refine porosity models.
- Adopt integrated deterministic and probabilistic methods for volume calculations in other carbonate reservoirs.

## Related Concepts

- [[monte-carlo-simulation]]
- [[well-log-analysis]]
- [[pore-volume]]
- [[uncertainty-quantification]]
- [[carbonate-reservoirs]]
- [[arab-d-reservoir]]
- [[saudi-arabia]]
- [[latin-hypercube-sampling]]
- [[porosity]]
- [[net-pay]]
- [[eastern-province]]
- [[volumetric-estimation]]
- [[volumetrics]]
- [[stochastic-simulation]]
- [[risk-analysis]]
- [[carbonate-geology]]
