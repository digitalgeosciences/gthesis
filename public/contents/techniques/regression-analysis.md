---
type: technique
title: "Regression Analysis"
aliases:
  - "multiple regression"
  - "linear multiple regression"
  - "nonlinear multiple regression"
canonical: true
equipment: "Not stated in source"
software: "Not stated in source"
output: "regression coefficients and correlation coefficients"
tags:
  - technique/regression-analysis
  - theme/petrophysics
sources:
  - "raw/10034 - Oil compressibility correlations.pdf"
  - "raw/10085 - Evaluation of correlations for natural gas compressibility factors.pdf"
  - "raw/10167 - Evaluation of empirically derived PVT properties for oil field brines.pdf"
  - "raw/10425 - A New correlation for two-phase flow through chokes.pdf"
  - "raw/136177 - Application of Neural Network for Two Phase Flow Through Chokes.pdf"
  - "raw/136378 - NEW MODELS FOR ESTIMATING THE DEW-POINT PRESSURE OF GAS CONDENSATE RESERVOIRS.pdf"
  - "raw/138990 - OPTIMIZATION OF DRILLING PARAMETERS USING SPECIFIC ENERGY IN REAL TIME.pdf"
  - "raw/139094 - Transmission Amplitude Variation with Offset (TAVO).pdf"
  - "raw/139396 - An Integrated Approach for Downhole Leak Detection.pdf"
  - "raw/139487 - MODELING OF MOFS BASED CO2 ADSORPTION SYSTEMS.pdf"
  - "raw/139522 - GROUND MOTION PREDICTION EQUATIONS (GMPES) FOR SUBDUCTION-ZONE EARTHQUAKES IN JA.pdf"
  - "raw/139860 - DETERMINATION OF EVAPORATION RATE IN A SABKHA IN THE EASTERN PROVINCE, SAUDI ARA.pdf"
  - "raw/140167 - Utilizing Field Data to Understand the Effect of Drilling Parameters and Mud Rhe.pdf"
  - "raw/143218 - MACHINE LEARNING-BASED GROUND MOTION PREDICTION MODELS FOR WEST JAVA, INDONESIA.pdf"
  - "raw/2609 - A New Correlation for Two-Phase Flow Through Chokes.pdf"
  - "raw/9621 - Evaluation of empirically derived PVT properties for Nigerian crude oils.pdf"
status: active
last_updated: 2026-06-20
---

# Regression Analysis

**Summary**: A statistical process for estimating the relationships among variables by using regression coefficients.

---

## How It Is Used in the Thesis Collection

- [[1990-al-jarri|Al-Jarri, 1990]] used regression-analysis to develop empirical correlations for gas properties and oil compressibility.

- [[1995-al-khamis|Al-Khamis, 1995]] applied regression-analysis to determine the best fit for gas property correlations.

- [[1996-mehmood|Mehmood, 1996]] applied multiple regression techniques to correlate physical parameters like temperature, pressure, and salinity.

- [[1992-al-towailib|Al-Towailib, 1992]] used regression analysis to develop an empirical correlation for multiphase flow through chokes.

- [[2009-al-khalifa|Al-Khalifa, 2009]] applied regression-analysis to improve the coefficients of existing empirical correlations.

- [[2010-al-dhamen|Al-Dhamen, 2010]] applied regression analysis to develop both traditional correlation models and nonparametric ACE models.

- [[2013-khamis|Khamis, 2013]] applied multiple linear regression to develop a mathematical model for ROP as a function of drilling parameters.

- [[2014-kola|Kola, 2014]] applied least square linear regression to invert TPP and TPS amplitudes into elastic parameters.

- [[2014-al-hussain|Al-Hussain, 2014]] applied regression analysis to evaluate the correlation between input features (like FREQ, GR, GTEM) and leak status.

- [[2014-jamil|JAMIL, 2014]] applied regression analysis to determine parameters for the Dubinin-Astakhov model.

- [[2015-latif|Latif, 2015]] applied regression-analysis to determine the relationship between ground motion parameters and earthquake magnitude/distance.

- [[2016-armoh|Armoh, 2016]] applied regression analysis to determine the influence of weather parameters on evaporation.

- [[2017-al-abduljabbar|Al-AbdulJabbar, 2017]] used regression analysis to quantify the relationship between ROP and drilling parameters like WOB and RPM.

- [[2025-rachmadan|Rachmadan, 2025]] used linear regression to convert various magnitude types into a consistent moment magnitude (Mw).

- [[1992-al-towailib-2|Al-Towailib, 1992]] used non-linear multiple regression to develop a correlation for choke size based on oil flow rate, upstream pressure, and mixture density.

- [[2005-ademola|ADEMOLA, 2005]] used regression analysis to recalculate coefficients for existing PVT correlations to improve their accuracy for Nigerian crude oils.

## Instruments and Software



- [[1995-al-khamis|Al-Khamis, 1995]] applied regression-analysis to determine the best fit for gas property correlations.

- [[1996-mehmood|Mehmood, 1996]] applied multiple regression techniques to correlate physical parameters like temperature, pressure, and salinity.

- [[1992-al-towailib|Al-Towailib, 1992]] used regression analysis to develop an empirical correlation for multiphase flow through chokes.

- [[2009-al-khalifa|Al-Khalifa, 2009]] applied regression-analysis to improve the coefficients of existing empirical correlations.

- [[2010-al-dhamen|Al-Dhamen, 2010]] applied regression analysis to develop both traditional correlation models and nonparametric ACE models.

- [[2013-khamis|Khamis, 2013]] applied multiple linear regression to develop a mathematical model for ROP as a function of drilling parameters.

- [[2014-kola|Kola, 2014]] applied least square linear regression to invert TPP and TPS amplitudes into elastic parameters.

- [[2014-al-hussain|Al-Hussain, 2014]] applied regression analysis to evaluate the correlation between input features (like FREQ, GR, GTEM) and leak status.

- [[2014-jamil|JAMIL, 2014]] applied regression analysis to determine parameters for the Dubinin-Astakhov model.

- [[2015-latif|Latif, 2015]] applied regression-analysis to determine the relationship between ground motion parameters and earthquake magnitude/distance.

- [[2016-armoh|Armoh, 2016]] applied regression analysis to determine the influence of weather parameters on evaporation.

- [[2017-al-abduljabbar|Al-AbdulJabbar, 2017]] used regression analysis to quantify the relationship between ROP and drilling parameters like WOB and RPM.

- [[2025-rachmadan|Rachmadan, 2025]] used linear regression to convert various magnitude types into a consistent moment magnitude (Mw).

- [[1992-al-towailib-2|Al-Towailib, 1992]] used non-linear multiple regression to develop a correlation for choke size based on oil flow rate, upstream pressure, and mixture density.

- [[2005-ademola|ADEMOLA, 2005]] used regression analysis to recalculate coefficients for existing PVT correlations to improve their accuracy for Nigerian crude oils.

## Typical Workflow



## Key Results and Findings

- The correlation coefficient, r, represents the degree of success in reducing the standard deviation by regression analysis; a value of 1 indicates perfect correlation. ([[1990-al-jarri|Al-Jarri, 1990, p. 58]])

- The coefficient of determination (R^2) was used to quantify the reduction in standard deviation. ([[1995-al-khamis|Al-Khamis, 1995, p. 93]])

- Linear and non-linear multiple regression were used to develop models for gas solubility (Eq. 5.1) and viscosity (Eq. 5.3). ([[1996-mehmood|Mehmood, 1996, p. 48]])

- The new correlation outperformed all published correlations in literature. ([[1992-al-towailib|Al-Towailib, 1992, p. 20]])

- After regression, the correlation coefficients for all Gilbert type correlations increased to 0.97. ([[2009-al-khalifa|Al-Khalifa, 2009, p. 121]])

- The ACE algorithm provides a method for estimating optimal transformation for multiple regression resulting in maximum correlation. ([[2010-al-dhamen|Al-Dhamen, 2010, p. 23]])

- Multiple regressions were used to find coefficients that provide the best representation of data, accounting for interactions between variables like WOB and RPM. ([[2013-khamis|Khamis, 2013, p. 27]])

- Regression analysis was used to solve equations 3.5 and 3.9 to extract $\beta/\alpha$, $\Delta\beta/\beta$, and $\Delta\rho/\rho$. ([[2014-kola|Kola, 2014, p. 61]])

- Regression for Well No. 3 showed that no strong relation was found between inputs and target outcomes, leading to the use of decision trees. ([[2014-al-hussain|Al-Hussain, 2014, p. 82]])

- The D-A model parameters were successfully derived from experimental adsorption isotherms using regression analysis. ([[2014-jamil|JAMIL, 2014, p. 68]])

- The regression analysis of our dataset was performed using the least square method. ([[2015-latif|Latif, 2015, p. 63]])

- Weather data accounted for 78.5% to 79.5% of the variance in evaporation during spring. ([[2016-armoh|Armoh, 2016, p. 64]])

- Regression equations were derived for mud weight (R2=0.7315), plastic viscosity (R2=0.6087), and solid content (R2=0.6181). ([[2017-al-abduljabbar|Al-AbdulJabbar, 2017, p. 28]])

- The traditional approach used least squares method to modify coefficients of selected functional forms. ([[2025-rachmadan|Rachmadan, 2025, p. 48]])

- The coefficients were determined by the least square method and refined to nearest rounded values to ensure stability. ([[1992-al-towailib-2|Al-Towailib, 1992, p. 78]])

- Recalculating coefficients using regression analysis improved the performance of several standard correlations when applied to local datasets. ([[2005-ademola|ADEMOLA, 2005, p. 3]])

## Methodological Variations Across Sources


## Technical Limitations and Open Questions


## Related Concepts

**Related Techniques**: 

**Applicable to Terminology**: 

**Used in Themes**: 
