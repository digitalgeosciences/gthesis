---
type: source
id: "9887"
title: "Development of Empirical Equations for Water-Oil Relative Permeability"
author: "Saud Mohammed A. Al-Fattah"
year: 1994
department: "Petroleum Engineering"
degree: "PhD"
supervisor: "Dr. Muhammad A. Al-Marhoun"
committee_members: []
source_file: "raw/9887 - Development of empirical equations for water-oil relative permeability.pdf"
url: "https://eprints.kfupm.edu.sa/9887"
study_area: "Not stated in source"
keywords:
  - Water-oil relative permeability
  - Empirical equations
  - Sandstone reservoir rocks
  - Linear multiple regression
  - Nonlinear multiple regression
  - JBN method
  - sandstone reservoirs
  - nonlinear regression
  - statistical analysis
techniques:
  - linear-regression
  - nonlinear-regression
  - petrophysics
  - core-analysis
  - mathematical-modeling
  - nonlinear-multiple-regression
  - linear-multiple-regression
  - sas
  - fortran
  - unsteady-state-measurement
  - steady-state-measurement
tags:
  - degree/phd
  - technique/linear-regression
  - technique/nonlinear-regression
  - technique/petrophysics
  - technique/core-analysis
  - technique/mathematical-modeling
  - technique/nonlinear-multiple-regression
  - technique/linear-multiple-regression
  - technique/sas
  - technique/fortran
  - technique/unsteady-state-measurement
  - technique/steady-state-measurement
  - theme/petrophysics
  - theme/reservoir-engineering
  - terminology/porosity
  - terminology/permeability
  - terminology/relative-permeability
  - terminology/wettability
  - terminology/petrophysics
status: ingested
---

# Development of Empirical Equations for Water-Oil Relative Permeability

**Summary**: The thesis develops new empirical equations for calculating water-oil relative permeability in sandstone reservoirs using nonlinear and linear multiple least-square regression analysis. The study evaluates these models against existing literature, concluding that the new equations provide higher accuracy and better performance than previously published models.

---

## Research Problem

The difficulty of directly measuring relative permeability in the laboratory leads to a reliance on empirical correlations; existing models often fail to accurately represent complex reservoir behaviors or are not optimized for specific rock types like sandstones.

## Objectives

- Develop new empirical equations to accurately predict imbibition water-oil relative permeability characteristics for sandstone rocks.
- Utilize multiple linear and nonlinear regression techniques to determine coefficients for the proposed models.
- Evaluate the newly developed equations against existing published models using both internal and external datasets.
- Develop empirical equations for oil relative permeability as a function of rock and fluid saturation properties.
- Validate the new empirical equations using independent published data sets.

## Methods

The study utilized 827 experimental data points from 46 waterflood core tests in sandstone reservoirs (ranging from semi-consolidated to unconsolidated). Data were processed using SAS and custom Fortran programs for linear and nonlinear multiple least-square regression. Statistical analysis included T-tests, F-tests, and coefficient of determination ($R^2$) to evaluate model accuracy. Graphical error analysis (crossplots and error distribution) was used to visualize the fit. The study also performed parametric statistical analysis to determine the influence of porosity, temperature, and measurement methods on the results.

## Data and Materials

A dataset of 827 experimentally obtained data points from 46 displacement core tests was used to develop the new empirical equations. Additionally, published datasets (e.g., Honarpour et al.) were used for validation and comparison.

## Key Findings

- The newly developed empirical equations outperformed all previously published equations in both development and validation data sets. ([[1994-al-fattah|Al-Fattah, 1994, p. 16]])
- Relative permeability is a function of pore geometry, wettability, fluid distribution, and saturation history (hysteresis). ([[1994-al-fattah|Al-Fattah, 1994, p. 19]])
- The steady-state method provides the highest reliability for determining relative permeabilities as it allows direct measurement of saturations. ([[1994-al-fattah|Al-Fattah, 1994, p. 42]])
- Unsteady-state methods (e.g., JBN, Welge) are faster and require less instrumentation but are subject to issues like capillary end effects and channeling. ([[1994-al-fattah|Al-Fattah, 1994, p. 45]])
- Capillary end effects can lead to underestimating the relative permeability of both phases if not managed by using long cores or high flow rates. ([[1994-al-fattah|Al-Fattah, 1994, p. 47]])
- Wettability significantly impacts relative permeability; for example, an increase in oil wetness results in increased water relative permeability and decreased oil relative permeability. ([[1994-al-fattah|Al-Fattah, 1994, p. 52]])
- Temperature changes between 70 and 186 F do not affect relative permeability in unconsolidated sands. ([[1994-al-fattah|Al-Fattah, 1994, p. 54]])
- Relative permeability is independent of the viscosity ratio for displacing a non-wetting phase by a wetting phase, but dependent on it when the wetting phase is displaced by a non-wetting phase. ([[1994-al-fattah|Al-Fattah, 1994, p. 55]])
- The oil relative permeability model developed in this study achieved a correlation coefficient of 0.979, explaining 98% of the data variation. ([[1994-al-fattah|Al-Fattah, 1994, p. 84]])
- The water relative permeability model was found to have a significant relationship with porosity, specifically in estimating the end point of the curve. ([[1994-al-fattah|Al-Fattah, 1994, p. 92]])
- Porosity was determined not to be a strongly significant physical parameter for the oil relative permeability model. ([[1994-al-fattah|Al-Fattah, 1994, p. 85]])
- Temperature did not significantly influence the oil relative permeability results in the study's data set. ([[1994-al-fattah|Al-Fattah, 1994, p. 88]])
- The measurement method (steady-state vs. unsteady-state) did not significantly impact the accuracy of either the oil or water relative permeability models. ([[1994-al-fattah|Al-Fattah, 1994, p. 88]])
- The new oil relative permeability equation outperformed Wyllie (1951), Pirson (1958), Naar et al. (1961), Jones (1966), Land (1968), and Honarpour et al. (1982) in terms of lower standard deviation and higher F-test statistics. ([[1994-al-fattah|Al-Fattah, 1994, p. 100]])
- The new water relative permeability equation achieved a high F-test statistic of 367.7, significantly outperforming other models like Wyllie (72.0) and Honarpour et al. (18.9). ([[1994-al-fattah|Al-Fattah, 1994, p. 121]])

## Limitations

The study notes that while unsteady-state methods are faster, they can be complicated by capillary end effects and channeling in heterogeneous cores. Additionally, some empirical models (like those of Wyllie) were not extensively checked against experimental data at the time of publication.

## Recommendations and Future Work

The new empirical equations can be readily implemented in any reservoir simulator with two-phase options.

## Related Concepts

- [[linear-regression]]
- [[nonlinear-regression]]
- [[porosity]]
- [[permeability]]
- [[relative-permeability]]
- [[wettability]]
- [[petrophysics]]
- [[nonlinear-multiple-regression]]
- [[core-analysis]]
- [[sandstone-reservoirs]]
