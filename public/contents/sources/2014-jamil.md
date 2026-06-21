---
type: source
id: "139487"
title: "MODELING OF MOFs BASED CO2 ADSORPTION SYSTEMS"
author: "YASIR JAMIL"
year: 2014
department: "Mechanical Engineering"
degree: "MS"
supervisor: "Dr. Mohamed A. Habib"
committee_members: []
source_file: "raw/139487 - MODELING OF MOFS BASED CO2 ADSORPTION SYSTEMS.pdf"
url: "https://eprints.kfupm.edu.sa/139487"
study_area: "Not stated in source"
keywords:
  - Carbon Capture and Sequestration (CCS)
  - Metal Organic Frameworks (MOFs)
  - CO2 adsorption
  - Dubinin-Astakov (D-A) model
  - Finite Volume Method
  - FLUENT
  - Heat and mass transfer
  - Porous media
  - MOF-74
  - activated carbon
  - zeolite 13X
  - ANSYS FLUENT
  - Dubinin-Astakhov model
  - storage pressure
  - bed porosity
  - thermal conductivity
  - numerical modeling
techniques:
  - finite-volume-method
  - fluent
  - regression-analysis
  - user-defined-function
  - mathematical-geology
  - simulation
  - ansys-fluent
  - gambit
  - user-defined-functions-udf
  - mathematical-modeling
tags:
  - degree/ms
  - technique/finite-volume-method
  - technique/fluent
  - technique/regression-analysis
  - technique/user-defined-function
  - technique/mathematical-geology
  - technique/simulation
  - technique/ansys-fluent
  - technique/gambit
  - technique/user-defined-functions
  - technique/mathematical-modeling
  - theme/carbon-sequestration
  - theme/reservoir-engineering
  - theme/nanotechnology
  - theme/water-treatment
  - terminology/adsorption
  - terminology/co2-sequestration
  - terminology/porous-media
  - terminology/porosity
status: ingested
---

# MODELING OF MOFs BASED CO2 ADSORPTION SYSTEMS

**Summary**: The thesis models the adsorption of CO2 in systems using different adsorbents, including activated carbon, zeolite 13X, and Mg-MOF-74. It utilizes a modified Dubinin-Astakhov (D-A) model integrated into an ANSYS FLUENT CFD framework to simulate heat and mass transfer during the charging process.

---

## Research Problem

The study addresses the need for efficient CO2 storage and adsorption systems, specifically modeling the behavior of different materials (activated carbon, zeolite 13X, and Mg-MOF-74) under varying conditions using computational fluid dynamics (CFD).

## Objectives

- To validate the numerical model against experimental data for hydrogen adsorption in activated carbon.
- To study, numerically, the effect of storage pressure and temperature on heat and mass transfer processes during adsorption.
- To study, numerically, the influence of viscous resistance and inertial resistance of porous media on heat and mass transfer during adsorption.
- To compare, numerically, uptake capacity of different MOFs and other CO2 adsorbents under same charging conditions.
- To model the adsorption of CO2 in a tank filled with various adsorbents.
- To compare the performance and uptake capacity of different adsorbents (activated carbon, zeolite 13X, and Mg-MOF-74) under similar conditions.

## Methods

The study employs a modified Dubinin-Astakhov (D-A) adsorption model to describe the adsorption isotherm. The simulation is performed using ANSYS FLUENT (version 14.5) with a finite volume method for discretization of governing equations. GAMBIT (version 2.4) is used for geometry generation and meshing. User Defined Functions (UDFs) written in C++ are integrated into the FLUENT solver to incorporate source terms for mass and energy due to adsorption. Regression analysis is used to determine parameters for the D-A model from experimental data.

## Data and Materials

The model uses a tank with dimensions L=255mm and H=48mm at T=295 K. Experimental data from Hermosillalara et al. [5] for hydrogen adsorption on activated carbon are used for validation. Comparison is made between three adsorbent types: activated carbon, zeolite, and Mg-MOF-74.

## Key Findings

- Mg-MOF-74 showed the highest adsorption capacity compared to Zeolite and Activated carbon; at 100 kPa, it achieved 8.75 mol/kg vs 3.78 mol/kg for Zeolite and 1.73 mol/kg for Activated carbon. ([[2014-jamil|JAMIL, 2014, p. 122]])
- The highest amount of absolute adsorption is found at the entrance and near wall regions, while the lowest is in the central region of the storage tank. ([[2014-jamil|JAMIL, 2014, p. 19]])
- Maximum temperature is found in the central region of the tank and is lower at entrance and in areas adjacent to walls. ([[2014-jamil|JAMIL, 2014, p. 19]])
- After main charging phase, temperature distribution tends to become uniform. ([[2014-jamil|JAMIL, 2014, p. 19]])
- The amount of absolute adsorption has been increased while increasing storage pressure from 20 kPa to 100 kPa. ([[2014-jamil|JAMIL, 2014, p. 19]])
- With increase in bed porosity, peak value of temperature at different locations within adsorption bed increases and a delay in peaks of temperature is observed. ([[2014-jamil|JAMIL, 2014, p. 19]])
- MOF-177 filled container can capture two times the amount of CO2 compared to zeolite 13X and Maxsorb filled container. ([[2014-jamil|JAMIL, 2014, p. 44]])
- Mg-MOF-74, replete with open magnesium sites, exhibit excellent selectivity for CO2 and facile regeneration at 80 C. ([[2014-jamil|JAMIL, 2014, p. 45]])
- The maximum temperature in the center of the tank during hydrogen adsorption was found to be approximately 345 K in the numerical model compared to 347 K experimentally. ([[2014-jamil|JAMIL, 2014, p. 58]])
- The modified D-A model parameters for Mg-MOF-74 were determined as: alpha = 134.1, beta = 69.13, n_max = 25.15, and p0 = 600. ([[2014-jamil|JAMIL, 2014, p. 68]])
- The maximum temperature in the center of the tank during CO2 adsorption reached 486 K at point 03. ([[2014-jamil|JAMIL, 2014, p. 93]])
- Absolute adsorption is highest at points where local temperature is minimum, such as near the entrance and walls due to better convection and conduction. ([[2014-jamil|JAMIL, 2014, p. 89]])
- Increasing storage pressure from 20 kPa to 100 kPa resulted in an additional 2.46 mol/kg of CO2 adsorption in Mg-MOF-74. ([[2014-jamil|JAMIL, 2014, p. 104]])
- Higher bed porosity leads to a decrease in effective thermal conductivity, causing a delay in peak temperature values and higher peak temperatures at specific points (e.g., point 03) due to poor heat dissipation. ([[2014-jamil|JAMIL, 2014, p. 127]])
- Bed porosity does not significantly affect the absolute adsorption of CO2 because it represents macropore porosity which provides flow channels but does not change the micropore capacity. ([[2014-jamil|JAMIL, 2014, p. 136]])

## Limitations

The model assumes that bed porosity is isotropic and that the isosteric heat of adsorption is constant (though it is generally a function of the adsorbed gas).

## Recommendations and Future Work

- Use the Dubinin-Astakov (D-A) adsorption model to investigate different MOF materials for CO2 storage.
- Perform simulations of breakthrough experiments using the developed CFD model.
- Apply the model for separating CO2 from gas mixtures including N2 and O2.

## Related Concepts

- [[finite-volume-method]]
- [[fluent]]
- [[adsorption]]
- [[co2-sequestration]]
- [[porous-media]]
- [[carbon-sequestration]]
- [[reservoir-engineering]]
- [[ansys-fluent]]
- [[regression-analysis]]
- [[nanotechnology]]
- [[water-treatment]]
- [[mathematical-modeling]]
- [[porosity]]
