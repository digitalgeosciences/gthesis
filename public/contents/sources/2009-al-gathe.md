---
type: source
id: "136090"
title: "ANALYSIS OF ARCHIE’S PARAMETERS DETERMINATION TECHNIQUES"
author: "ABDELRIGEEB ALI MOHAMMED AL-GATHE"
year: 2009
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Gharib M. Hamada"
committee_members: []
source_file: "raw/136090 - ANALYSIS OF ARCHIE’S PARAMETERS DETERMINATION TECHNIQUES.pdf"
url: "https://eprints.kfupm.edu.sa/136090"
study_area: "carbonate cores from all wells"
keywords:
  - Archie's parameters
  - carbonate rocks
  - water saturation
  - conventional technique
  - CAPE technique
  - 3D technique
  - core samples
  - petrophysics
  - calculation methods
  - CAPE method
  - 3-D method
  - carbonate reservoirs
techniques:
  - petrophysics
  - core-analysis
  - resistivity-measurement
  - data-analysis
  - mathematical-modeling
  - matlab
tags:
  - degree/ms
  - technique/core-analysis
  - technique/petrophysics
  - technique/data-analysis
  - technique/mathematical-modeling
  - technique/matlab
  - theme/petrophysics
  - terminology/porosity
  - terminology/permeability
  - terminology/petrophysics
  - terminology/petrophysics
  - terminology/diagenesis
  - terminology/water-saturation
  - terminology/porosity-determination
  - terminology/mathematical-modeling
  - terminology/core-analysis
  - terminology/archies-equation
status: ingested
---

# ANALYSIS OF ARCHIE’S PARAMETERS DETERMINATION TECHNIQUES

**Summary**: The thesis evaluates and compares four different methods for determining Archie's parameters (a, m, n) in carbonate reservoir core samples: the conventional method, two variations of the Core Archie Parameter Estimation (CAPE) method, and a 3-D regression method. The study concludes that while the CAPE (a, m, n) method provides the highest accuracy for water saturation estimation, the 3-D and CAPE (1, m, n) methods offer faster calculation times.

---

## Research Problem

The determination of accurate Archie's parameters is critical for petrophysical interpretation; however, traditional methods often treat 'm' and 'n' as independent variables, leading to significant errors in calculated water saturation. The study addresses this by comparing several advanced calculation techniques (CAPE and 3D) against the conventional method using core data from three wells.

## Objectives

- Conduct laboratory experiments to determine electrical properties of core plugs.
- Use appropriate algorithms to calculate Archie’s parameters and corresponding water saturation values by different techniques.
- Analyze and discuss experimental results to identify the most accurate technique for carbonate rocks.
- Evaluate four different techniques for determining Archie's parameters: Conventional, CAPE (1, m, n), CAPE (a, m, n), and 3-D Method.
- Compare the accuracy of water saturation calculations derived from these different methods.
- Determine the most reliable method for calculating petrophysically meaningful values for a, m, and n.

## Methods

The study used an experimental approach involving 44 carbonate core samples (limestone and dolomite) from three wells. Samples were prepared, cleaned with toluene and methanol, and dried before being saturated with synthetic brine (79.339 mg/L total dissolved solids). Electrical properties were measured using the ER2005 Electrical Resistivity Test System, which included a pressure control cart, test cell, lift assist, electronics rack, and work station. Three calculation methods were compared: 1) Conventional method (using log-log plots of formation factor vs. porosity), 2) CAPE technique (minimizing mean-square error between measured and calculated saturations), and 3) 3D technique (three-dimensional regression analysis of water saturation, resistivity, and porosity). Statistical analysis including average percent relative error, root mean square error (RMSE), and correlation coefficients were used to evaluate the accuracy of each method.

## Data and Materials

44 core samples (17 from well A, 15 from well B, 12 from well C) consisting of limestone and dolomite with varying porosity and permeability. Synthetic brine with a concentration of 76.339 ppm (corrected to 79.339 mg/L total dissolved solids).

## Key Findings

- The conventional method for determining Archie's parameters in carbonate rocks often leads to non-physical results because it minimizes error in non-physical quantities rather than physical ones. ([[2009-al-gathe|AL-GATHE, 2009, p. 33]])
- The CAPE technique provides a more natural and physically meaningful method of 'averaging' Archie’s parameters compared to the conventional method. ([[2009-al-gathe|AL-GATHE, 2009, p. 33]])
- The parameter 'a' is a weak-fitting parameter with no physical significance, which can generally be set to unity (1.0). ([[2009-al-gathe|AL-GATHE, 2009, p. 33]])
- In carbonate rocks, the cementation factor (m) varies significantly based on grain size and geometric configuration; for example, m values of 2 are typical for intergranular porosity or mudstones, while higher values (>2) occur in systems with both matrix and vuggy/mold1ic porosity. ([[2009-al-gathe|AL-GATHE, 2009, p. 23]])
- The 3D technique allows for the simultaneous determination of a, m, and n parameters by treating the problem as a plane in three-dimensional space (porosity, water saturation, and resistivity). ([[2009-al-gathe|AL-GATHE, 2009, p. 35]])
- Water saturation values calculated using CAPE results showed better agreement with core-measured values compared to those from the conventional method. ([[2009-al-gathe|AL-GATHE, 2009, p. 33]])
- The conventional method for well A yielded an average water saturation error of 14% with a correlation factor of 0.90. ([[2009-al-gathe|AL-GATHE, 2009, p. 79]])
- The CAPE (a, m, n) technique for well A reduced the average water saturation error to 10% and improved the correlation factor to 0.92. ([[2009-al-gathe|AL-GATHE, 2009, p. 79]])
- For Well C, the average water saturation error for the conventional method was 10.6%, while the CAPE (a, m, n) and 3D methods reduced it to approximately 6.8%. ([[2009-al-gathe|AL-GATHE, 2009, p. 109]])
- The study found that the calculation of 'n' as a separate problem from 'a' and 'm' in conventional methods is not physically correct and leads to higher errors. ([[2009-al-gathe|AL-GATHE, 2009, p. 68]])
- CAPE (a, m, n) yielded the lowest absolute relative error in water saturation estimation at 10.0% compared to 24.00% for CAPE (1, m, n) and 31.81% for the conventional method. ([[2009-al-gathe|AL-GATHE, 2009, p. 119]])
- The correlation factor for the 3-D method was 0.87, while the CAPE (a, m, n) method showed a correlation factor of 0.86. ([[2009-al-gathe|AL-GATHE, 2009, p. 119]])
- The standard deviation for water saturation error in the conventional method was 26.54%, whereas it was significantly lower in the CAPE (a, m, n) method at 18.33%. ([[2009-al-gathe|AL-GATHE, 2009, p. 119]])
- The 3-D and CAPE methods utilize all available data points of Sw to determine parameters, unlike the conventional method which ignores values where Sw < 1.0. ([[2009-al-gathe|AL-GATHE, 2009, p. 125]])
- CAPE (a, m, n) provides the lowest absolute relative error but is noted as being slower than the CAPE (1, m, n) and 3-D methods. ([[2009-al-gathe|AL-GATHE, 2009, p. 125]])

## Limitations

The conventional method has severe limitations in carbonate rocks because parameters (a, m, n) are functions of changes in pore geometry, clay content, and tortuosity. The 3D technique requires a larger dataset to ensure the system of equations is not singular.

## Recommendations and Future Work

The study suggests that the CAPE (a, m, n) and 3D methods are superior for determining Archie's parameters as they provide more accurate water saturation values by treating 'a', 'm', and 'n' as a coupled system.

## Related Concepts

- [[core-analysis]]
- [[petrophysics]]
- [[porosity]]
- [[permeability]]
- [[diagenesis]]
- [[water-saturation]]
- [[porosity-determination]]
- [[mathematical-modeling]]
- [[matlab]]
- [[archies-equation]]
