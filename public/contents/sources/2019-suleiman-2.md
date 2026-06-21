---
type: source
id: "141003"
title: "MODELING OF HYDRATE PHASE TRANSITION USING THE MEAN SPHERICAL APPROXIMATION (MSA)"
author: "Muhammad Aliyu Suleiman"
year: 2019
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Abdullah Sultan"
committee_members: []
source_file: "raw/141003 - MODELING OF HYDRATE PHASE TRANSITION USING THE MEAN SPHERICAL APPROXIMATION (MSA.pdf"
url: "https://eprints.kfupm.edu.sa/141003"
study_area: "Not stated in source"
keywords:
  - Gas Hydrate
  - Mean Spherical Approximation (MSA)
  - SAFT-VR Mie
  - Electrolyte Solution
  - Gas Solubility
  - hydrate phase transition
  - mean spherical approximation
  - electrolyte
  - thermodynamics
  - Solubility
  - Phase Behavior
  - modified Debye-Huckle
  - inhibition
techniques:
  - mathematical-modeling
  - petrophysics
  - statistical-thermodynamics
  - simulation
tags:
  - degree/ms
  - technique/mathematical-modeling
  - technique/statistical-thermodynamics
  - technique/simulation
  - theme/reservoir-engineering
  - theme/petroleum-engineering
  - theme/general-geochemistry
  - theme/chemical-engineering
  - terminology/gas-solubility
  - terminology/petrophysics
  - terminology/porosity
  - terminology/adsorption
  - terminology/chemical-potential
  - terminology/electrolyte
  - terminology/gas-saturation
  - terminology/aqueous-solution
  - terminology/salinity
  - terminology/gas-hydrate
status: ingested
---

# MODELING OF HYDRATE PHASE TRANSITION USING THE MEAN SPHERICAL APPROXIMATION (MSA)

**Summary**: The thesis investigates the thermodynamic modeling of gas hydrate phase transitions in the presence of electrolytes using various equations of state, specifically focusing on the SAFT-VR Mie and Mean Spherical Approximation (MSA) models. It evaluates these models' ability to predict solubility, mean ionic activity coefficients (MIAC), and osmotic coefficients for several salt systems.

---

## Research Problem

Accurately modeling the phase behavior of gas hydrates in the presence of electrolytes is challenging due to long-range ionic interactions and non-ideality. Existing models like Debye-Hückel often fail at high concentrations, necessitating more advanced frameworks like MSA and various modified Equations of State (EOS).

## Objectives

- Modeling the electrolyte solution properties using SAFT-VR Mie with electrolyte term represented by PMSA.
- Modeling the effect of electrolyte solution on the gas solubility using SAFT-VR Mie coupled with M-DH to describe the electrolyte effect.
- Modeling gas hydrate mixtures in the presence of salts where the vdWP model is utilized for the hydrate phase while the SAFT-VR Mie is used for the vapor and liquid phases.
- Review and evaluate different electrolyte solution theories including Debye-Hückel, Pitzer, and MSA.
- Examine various dielectric models for calculating permittivity in multi-component systems.
- Analyze the thermodynamics of gas hydrate formation using the van der Waals & Platteeuw (vdWP) model.

## Methods

The study utilizes the Statistical Associating Fluid Theory – Variable Range using Mie potential (SAFT-VR Mie) coupled with Van der Waals Platuew (VdwP) model and Modified Debye-Huckle (M-DH). The modified DH is used to quantify electrolyte effects on formation conditions. Calculation of chemical potential differences includes salt effects via a specific integration method. Binary interaction parameters are optimized using an objective function based on experimental data for gas solubility and hydrate formation.

## Data and Materials

Experimental data from literature (e.g., Nakamura et al. 2003, Jager and Sloan 2001, Mohammadi et al. 2008a/b, Dholabhai et al. 1993) were used to optimize parameters for methane (C1), ethane (C2), and propane (C3) hydrates in the presence of NaCl, KCl, and CaCl2 at various concentrations.

## Key Findings

- The model for electrolyte solution properties achieved an average absolute deviation (AADP) of 22.51% across fifteen systems. ([[2019-suleiman|Suleiman, 2019, p. 18]])
- Gas solubility predictions using the SAFT-VR Mie coupled with M-DH showed a maximum AADP of less than 5% for nineteen systems. ([[2019-suleiman|Suleiman, 2019, p. 18]])
- Gas hydrate modeling in the presence of an electrolyte achieved excellent matching with an AADP of less than 5% for twenty-one systems. ([[2019-suleiman|Suleiman, 2019, p. 18]])
- The Mean Spherical Approximation (MSA) is noted as a more accurate alternative to the Debye-Hückel theory because it accounts for the finite size of ions rather than treating them as point charges. ([[2019-suleiman|Suleiman, 2019, p. 51]])
- The Pitzer expansion provides a more flexible and general approach compared to the Debye-Hückel law, though both share similar accuracy in certain applications. ([[2019-suleiman|Suleiman, 2019, p. 63]])
- The van der Waals & Platteeuw (vdWP) model is established as a key link between microscopic and macroscopic levels for gas hydrate structure modeling. ([[2019-suleiman|Suleiman, 2019, p. 70]])
- The Kihara potential provides superior results over the Lennard-Jones potential for describing both spherical and rod-like molecules in hydrate models. ([[2019-suleiman|Suleiman, 2019, p. 72]])
- The SAFT-VR+DE model is capable of predicting the behavior of complex systems containing hydrocarbons, water, and sodium chloride with minimal adjustment parameters. ([[2019-suleiman|Suleiman, 2019, p. 105]])
- The SAFT-VR Mie model successfully predicted the mean ionic activity coefficient (MIAC) and osmotic coefficients for several salts, with a maximum absolute average deviation (%AAD) of 20.05% for Lithium Bromide vapor pressure. ([[2019-suleiman|Suleiman, 2019, p. 130]])
- The model accurately predicted the solubility of methane in NaCl solutions across various temperatures and concentrations, showing an average absolute deviation of 2.59%. ([[2019-suleiman|Suleiman, 2019, p. 150]])
- Carbon dioxide (CO2) solubility in sodium chloride solution was predicted with a maximum average absolute deviation percent of 1.33% and 0.67% at different conditions. ([[2019-suleiman|Suleiman, 2019, p. 151]])
- The model accurately predicted the solubility of CO2 in calcium chloride solutions with a maximum average absolute deviation percent of 1.54%. ([[2019-suleiman|Suleiman, 2019, p. 151]])
- The SAFT-VR Mie model was able to capture the 'salting out' effect, where methane solubility decreases as salt concentration increases. ([[2019-suleiman|Suleiman, 2019, p. 150]])
- The SAFT-VR Mie coupled with primitive MSA predicted electrolyte properties like MIAC, osmotic coefficient, and vapor pressure with high accuracy; maximum AAD% for MIAC was 22.51%, for osmotic coefficient 5.47%, and for vapor pressure 20.05%. ([[2019-suleiman|Suleiman, 2019, p. 150]])
- The modified Debye-Huckle model predicted methane and carbon dioxide solubility in different electrolyte solutions with a maximum average absolute deviation of 4.63%. ([[2019-suleiman|Suleiman, 2019, p. 150]])

## Limitations

The model has difficulty capturing the effect of very high salt concentrations due to ion pairing (ion association). Adding more parameters to solve this would compromise the physical representation of the model. Additionally, some deviations in potassium chloride predictions were noted when binary interaction coefficients were used outside their intended range.

## Recommendations and Future Work

Investigate more versions of SAFT and electrolyte models; consider ion association at high salt concentrations; compare different MSA versions (primitive, semi-primitive, non-primitive); incorporate molecular dynamics results to enhance prediction; develop thermodynamic models for other inhibitors like kinetic and anti-agglomerate inhibitors.

## Related Concepts

- [[mathematical-modeling]]
- [[gas-solubility]]
- [[petrophysics]]
- [[reservoir-engineering]]
- [[petroleum-engineering]]
- [[statistical-thermodynamics]]
- [[porosity]]
- [[adsorption]]
- [[chemical-potential]]
- [[electrolyte]]
- [[gas-saturation]]
- [[aqueous-solution]]
- [[salinity]]
- [[simulation]]
- [[gas-hydrate]]
