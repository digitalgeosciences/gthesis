---
type: source
id: "10140"
title: "Geostatistical modelling of Zarghat magnesite deposit Saudi Arabia"
author: "Mohammad Houssain Makkawi"
year: 1991
department: "Geosciences"
degree: "MS"
supervisor: "Ali Sahin"
committee_members:
  - "Saiful-Islam Saif"
  - "Munir Ahmad"
source_file: "raw/10140 - Geostatistical modelling of Zarghat magnesite deposit Saudi Arabia.pdf"
url: "https://eprints.kfupm.edu.sa/id/eprint/10140/"
study_area: "Central Hill deposit, Zarghat magnesite deposit, northeastern part of the Arabian Shield, Saudi Arabia"
keywords:
  - Zarghat magnesite deposit
  - geostatistical modelling
  - semivariogram
  - kriging
  - co-kriging
  - grade-tonnage relationship
  - magnesite deposit
  - lognormal distribution
  - mineral resource estimation
  - Zarghat
  - magnesite
  - geostatistics
  - CaO%
  - MgO%
  - variogram analysis
techniques:
  - geostat
  - sas
  - fortran
  - atomic-absorption
  - volumetric-analysis
  - gravimetric-analysis
  - compositing
  - rotation-of-coordinates
  - kriging
  - variogram-analysis
  - geostatistics
  - vario3
  - krige3
  - blkplt
  - krivar
  - report
tags:
  - degree/ms
  - formation/zarghat-deposit
  - location/saudi-arabia
  - location/central-saudi-arabia
  - technique/geostatistics
  - technique/variogram-analysis
  - technique/kriging
  - theme/mineral-resource-estimation
  - theme/geology-of-deposits
  - theme/geostatistics
  - theme/magnesite-deposits
  - terminology/grade-tonnage
  - terminology/magnesite-deposits
  - terminology/semivariogram
  - terminology/lognormal
  - terminology/geostatistics
status: ingested
---

# Geostatistical modelling of Zarghat magnesite deposit Saudi Arabia

**Summary**: The thesis investigates the geostatistical modeling of the Zarghat magnesite deposit in the Arabian Shield. It utilizes 51 drill-hole samples to analyze the distribution of CaO% and MgO%, concluding that lognormal transformations and compound spherical semivariogram models are appropriate for characterizing the deposit's spatial variability.

---

## Research Problem

The need for accurate mineral resource estimation and grade modeling in the Zarghat magnesite deposit, specifically determining if the high correlation between CaO and MgO allows for improved accuracy using co-kriging techniques.

## Objectives

- Review the geology of the Zarghat area.
- Describe available data sets and methods of data preparation.
- Perform statistical analysis to determine types of distributions and basic statistical parameters including correlation coefficients between MgO% and CaO%.
- Compute and model semivariograms and cross-semivariogram functions for geostatistical parameters.
- Apply simple linear kriging to estimate block and point values within the deposit.
- Apply co-kriging to estimate point values and compare results with kriging.
- Derive a grade-tonnage relationship for the deposit.
- Determine the thickness and extent of the magnesite deposit in the Central Hill area.
- Analyze the statistical distribution of CaO% and MgO% values from drill-hole samples.
- Evaluate the suitability of lognormal transformations for geostatistical modeling.
- Model semivariograms to understand spatial continuity and correlation between mineral components.
- Determine the spatial behavior of CaO and MgO using semivariogram analysis.
- Verify model semivariograms through comparison of observed and estimated dispersion variances.
- Perform block kriging to estimate mineral grades for 1714 blocks in the Central Hill area.
- Establish a grade-tonnage relationship to determine total magnesite reserves.
- Perform preliminary statistical analysis of crude and calcined values of CaO% and MgO%.
- Model semivariograms and cross-semivariograms to determine spatial continuity.
- Compare simple kriging and co-kriging methods for estimating MgO content.
- Determine the grade-tonnage relationship and total magnesite reserves.
- Characterize the sampling distribution of CaO% and MgO% values from drill-hole data.
- Perform variogram analysis to determine spatial correlation of mineral components.
- Develop geostatistical models (e.g., compound spherical models) for mineral content estimation.

## Methods

The study employs geostatistical methods including semivariogram analysis (using VARIO3) to model spatial continuity and anisotropy. Verification of models is performed by comparing observed and estimated dispersion variances. Block kriging (using KRIGE3) is applied to estimate grades for 1714 blocks in a 25m x 25m x 1m grid. The results are processed via BLKPLT for visualization and KRIVAR/REPORT programs are used to derive grade-tonnage relationships. Logarithmic values of CaO and MgO are converted back to arithmetic percentages for practical use.

## Data and Materials

Data from 51 vertical drill-holes in the Central Hill area; 1239 total samples; chemical analysis (atomic absorption for CaO, Al2O3, Fe2O3; volumetric for MgO; gravimetric for insoluble residue).

## Key Findings

- The sampling distributions of CaO% and MgO% values are characterized by lognormal behavior, suggesting that more accurate evaluation can be achieved using logarithmic values. ([[1991-makkawi|Makkawi, 1991, p. 19]])
- The compound spherical models have appropriately fitted to the experimental semivariogram of both CaO% and MgO% logarithmic values. ([[1991-makkawi|Makkawi, 1991, p. 19]])
- The Central Hill contains about 3 million tons of magnesite with a grade ranging from 38% to 48% MgO (Brosset, 1976). ([[1991-makkawi|Makkawi, 1991, p. 20]])
- Calcination of ore from the Central Hill yields a concentration with high MgO (29.9%) and low silica contents (less than 1%). ([[1991-makkawi|Makkawi, 1991, p. 20]])
- The relative kriging standard deviations are generally lower, implying the reliability of kriged estimates. ([[1991-makkawi|Makkawi, 1991, p. 19]])
- The grade-tonnage relationship, based on kriged estimates, indicates the existence of 3.2 million tonnes. ([[1991-makkawi|Makkawi, 1991, p. 19]])
- A strong linear correlation between CaO% and MgO% justifies the use of co-kriging to estimate known sample values. ([[1991-makkawi|Makkawi, 1991, p. 19]])
- Magnesite thickness in the Central Hill ranges from approximately 5 to 50 m. ([[1991-makkawi|Makkawi, 1991, p. 36]])
- The deposit is of sedimentary type, formed after bedded dolomite during a normal sequence of carbonate deposition. ([[1991-makkawi|Makkawi, 1991, p. 39]])
- Both CaO% and MgO% values exhibit lognormal behavior (strong positive skew for CaO; strong negative skew for MgO), necessitating logarithmic transformation before semivariogram calculation. ([[1991-makkawi|Makkawi, 1991, p. 51]])
- The Pearson's linear correlation coefficient between crude MgO% and CaO% was -0.89, and for calcined values was -0.85, indicating an inverse relationship due to Mg enrichment at the expense of Ca. ([[1991-makkawi|Makkawi, 1991, p. 58]])
- A high positive correlation (0.97) was observed between crude and calcined values of both MgO% and CaO%, confirming consistency in chemical analysis. ([[1991-makkawi|Makkawi, 1991, p. 58]])
- F-tests indicated that variations exist in most parts of the deposit at a significance level of 0.05. ([[1991-makkawi|Makkawi, 1991, p. 47]])
- Higher variance and lower MgO% mean values were observed in drill-holes near the boundary, likely due to influence from dolomite veins. ([[1991-makkawi|Makkawi, 1991, p. 47]])
- Semivariograms for both CaO and MgO showed a nugget type behavior with average continuity, reflecting the sedimentary origin of the deposit. ([[1991-makkawi|Makkawi, 1991, p. 94]])

## Limitations

The number of samples used for some semivariograms was limited, and in-fill drill-holes were terminated at a depth of 6m.

## Recommendations and Future Work

Not stated in source

## Related Concepts

- [[geostatistics]]
- [[variogram-analysis]]
- [[grade-tonnage]]
- [[magnesite-deposits]]
- [[saudi-arabia]]
- [[zarghat-deposit]]
- [[mineral-resource-estimation]]
- [[semivariogram]]
- [[lognormal]]
- [[kriging]]
- [[co-kriging]]
