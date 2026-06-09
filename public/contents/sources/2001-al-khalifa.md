---
type: source
id: "10075"
title: "Data integration in 3-D geostatistical porosity modeling of Hanifa Reservoir in Berri field, Saudi Arabia"
author: "Mohammad Ahmad Hasan Al-Khalifa"
year: 2001
department: "Geosciences"
degree: "MS"
supervisor: "Gabor Korvin"
committee_members:
  - "Muhammad H. Makkawi"
  - "M. Badrul Imam"
source_file: "raw/10075 - Data integration in 3-D geostatistical porosity modeling of Hanifa Reservoir in .pdf"
url: "https://eprints.kfupm.edu.sa/id/eprint/10075/"
study_area: "Hanifa Reservoir in Berri field, Saudi Arabia"
keywords:
  - Data integration
  - 3-D geostatistical porosity modeling
  - Hanifa Reservoir
  - Berri field
  - Saudi Arabia
  - 3D geostatistical porosity modeling
  - geostatistics
  - porosity
  - petrophysics
  - 3D geostatistical modeling
  - seismic impedance
  - soft data
  - hard data
  - sequential Gaussian simulation
  - sequential indicator simulation
  - Facies model
  - Collocated Cokriging
techniques:
  - geostatistics
  - sequential-gaussian-simulation
  - collocated-kriging
  - well-log-analysis
  - seismic-inversion
  - petrel
  - resprep
  - resgram
  - resmod
  - rescalc
  - resscape
  - kriging
  - variogram-analysis
  - core-analysis
  - stochastic-simulation
  - cokriging
  - petrophysics
  - 3d-geological-modeling
tags:
  - degree/ms
  - formation/hanifa-formation
  - location/berri-field
  - location/saudi-arabia
  - technique/geostatistics
  - technique/sequential-gaussian-simulation
  - technique/collocated-kriging
  - technique/well-log-analysis
  - technique/seismic-inversion
  - technique/kriging
  - technique/variogram-analysis
  - technique/core-analysis
  - technique/stochastic-simulation
  - technique/petrophysics
  - theme/petrophysics
  - terminology/porosity
  - terminology/petrophysics
  - terminology/reservoir-characterization
  - terminology/soft-data
  - terminology/hard-data
status: ingested
---

# Data integration in 3-D geostatistical porosity modeling of Hanifa Reservoir in Berri field, Saudi Arabia

**Summary**: The thesis evaluates the impact of integrating different data types, specifically facies and seismic impedance, into 3-D geostatistical porosity models for the Hanifa Reservoir in the Berri field. Four distinct modeling approaches were compared to determine which combination provides the most accurate representation of reservoir properties.

---

## Research Problem

Accurately predicting the 3D spatial distribution of reservoir properties like porosity is challenging due to the limitations of well data alone. The study addresses how to effectively integrate 'soft' data (seismic impedance) and categorical data (facies models) into geostatistical workflows to improve the resolution and reliability of porosity models in the Hanifa Reservoir.

## Objectives

- Evaluate the importance of integrating different data types in 3-D geostatistical porosity modeling.
- Build four distinct porosity models: one based on well data only, and three using combinations of well logs, facies, and seismic impedance.
- Investigate the impact of data integration on reservoir characterization.
- Evaluate different geostatistical techniques for modeling porosity in the Han1fa Reservoir.
- Integrate geological and geophysical data into a 3D model.
- Compare various layering schemes (e.g., 52 layers vs. 13 layers) to assess their impact on reservoir heterogeneity representation.
- Evaluate different geostatistical modeling techniques for 3D porosity estimation.
- Integrate seismic impedance as soft data to improve the spatial continuity of porosity.
- Develop a facies model using Sequential Indicator Simulation (SIS) to guide porosity distribution.
- Compare four distinct modeling methods: well-only, seismic-integrated, facies-guided, and fully integrated models.
- Evaluate different geostatistical methods for 3D porosity modeling.
- Integrate seismic impedance as a soft data constraint to improve model accuracy in low-well density areas.
- Incorporate facies models to preserve vertical and lateral reservoir heterogeneity.
- Validate the resulting models by comparing simulated porosity traces against true well logs.
- Integrate multi-source data (well logs, seismic) into a 3D geostatistical model
- Model porosity distribution in the Hanifa Reservoir
- Evaluate the impact of different data integration methods on reservoir characterization

## Methods

The study utilized a 3D grid of 315,370 cells with cell sizes of 250x250m. Data preparation included univariate analysis (histograms) for porosity and facies across 12 reservoir zones. Bivariate analysis was used to establish the correlation between porosity and seismic impedance (correlation coefficient improved from -0.74 to -0.97 after removing noisy data). Facies were grouped into 6 categories based on similarity in distribution and core properties. Four modeling workflows were implemented: 1) Sequential Gaussian Simulation (SGS) for well-only data; 2) SGS with seismic impedance as soft data; 3) SIS to create a facies model used as a constraint for porosity; 4) Integrated modeling using both seismic impedance and the facies model to guide the final porosity distribution.

## Data and Materials

A sector area of the Hanifa Reservoir in the Berri field containing 97 wells (mixture of vertical, deviated, and horizontal). Data included porosity logs for all wells, impedance logs for 22 wells, and facies logs for all wells. A 3-D acoustic impedance model derived from a stochastic inversion of a 3-D seismic survey was used.

## Key Findings

- Facies-based porosity models yielded better definition of porosity in both vertical and lateral directions compared to other models due to the use of facies as a constraint. ([[2001-al-khalifa|Al-Khalifa, 2001, p. 17]])
- The accuracy of the seismic controlled model was higher than all other models because seismic data provides a more dense spatial sampling density than wells. ([[2001-al-khalifa|Al-Khalifa, 2001, p. 17]])
- The well-only model had the lowest accuracy, highlighting the necessity of incorporating additional data types like facies and seismic into the modeling process. ([[2001-al-khalifa|Al-Khalifa, 2001, p. 17]])
- Acoustic impedance was converted from time to depth domain for integration with well logs. ([[2001-al-khalifa|Al-Khalifa, 2001, p. 21]])
- Hanifa Reservoir porosity is primarily intergranular, with secondary moldic porosity being the only significant secondary type but having low impact on total volume. ([[2001-al-khalifa|Al-Khalifa, 2001, p. 36]])
- Facies 2 (skeletal/intraclast grainstone) shows high reservoir quality with 24% porosity and 675 mD permeability. ([[2001-al-khalifa|Al-Khalifa, 2001, p. 37]])
- Facies 3 (burrowed peloid grainstone) has 16% porosity and 6.7 mD permeability. ([[2001-al-khalifa|Al-Khalifa, 2001, p. 37]])
- Facies 6 (skeletal wackestone) shows low reservoir quality with 2.4% porosity and 0 mD permeability. ([[2001-al-khalifa|Al-Khalifa, 2001, p. 38]])
- Facies 8 (Stromatoporoid specimen) has 15.5% porosity and approximately 44 mD permeability. ([[2001-al-khalifa|Al-Khalifa, 2001, p. 38]])
- A 13-layer scheme was found to preserve reservoir heterogeneity similarly to a 52-layer scheme, suggesting that fewer layers can reduce human error and modeling time while maintaining accuracy. ([[2001-al-khalifa|Al-Khalifa, 2001, p. 42]])
- The correlation coefficient between porosity and seismic impedance increased from -0.74 to -0.97 after removing five wells with unreliable data (those lacking density logs). ([[2001-al-khalifa|Al-Khalifa, 2001, p. 48]])
- Seismic impedance was determined to be a good estimator of porosity in the Hanifa Reservoir, but not a good indicator for facies variations. ([[2001-al-khalifa|Al-Khalifa, 2001, p. 49]])
- The study identified a clear relationship between log porosity and depositional facies; zones with grain-rich facies (2, 3) showed normal distributions with high means, while mudstone-dominated zones (12) were skewed with low mean porosity. ([[2001-al-khalifa|Al-Khalifa, 2001]])
- page_num_placeholder_for_finding_3_above_is_41 ([[2001-al-khalifa|Al-Khalifa, 2001]])
- The study area was modeled using a grid of 315,370 cells with vertical cell thicknesses ranging from 0.2 feet in good reservoir rocks to 10 feet in non-reservoir rocks. ([[2001-al-khalifa|Al-Khalifa, 2001, p. 40]])

## Limitations

Core samples are limited in quantity due to high cost and incomplete recovery; well logs provide better coverage but require correction for borehole conditions (mud/size) and cannot easily distinguish porosity types.

## Recommendations and Future Work

- Use streamline simulation methods to evaluate which model best matches pressure and flow rates.
- Perform 3D seismic surveys during early field development when wells are widely spaced.
- Utilize seismic impedance data to condition porosity models in future work.
- Use facies maps to improve the accuracy of facies models.

## Related Concepts

- [[geostatistics]]
- [[sequential-gaussian-simulation]]
- [[collocated-kriging]]
- [[porosity]]
- [[petrophysics]]
- [[reservoir-characterization]]
- [[hanifa-formation]]
- [[berri-field]]
- [[well-log-analysis]]
- [[kriging]]
- [[variogram-analysis]]
- [[sequential-indicator-simulation]]
- [[soft-data]]
- [[hard-data]]
