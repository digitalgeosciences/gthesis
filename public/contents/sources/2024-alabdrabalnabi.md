---
type: source
id: "143106"
title: "NUMERICAL MODELING OF WATER SHUTOFF UTILIZING NANOSILICA GEL TREATMENT"
author: "Mohammed Ibrahim Hassan Alabdrabalnabi"
year: 2024
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Murtada Saleh Al-Jawad"
committee_members: []
source_file: "raw/143106 - NUMERICAL MODELING OF WATER SHUTOFF UTILIZING NANOSILICA GEL TREATMENT.pdf"
url: "https://eprints.kfupm.edu.sa/143106"
study_area: "Not stated in source"
keywords:
  - Water production
  - Water shutoff
  - Nanosilica
  - Numerical modeling
  - Gel treatment
  - Reaction kinetics
  - Petroleum Engineering
  - nanosilica gel
  - gelation kinetics
  - thermal behavior
  - temperature cooldown
  - gel penetration
  - mass transfer
  - heat transfer
techniques:
  - viscosity-measurement
  - mathematical-modeling
  - reservoir-simulation
  - matlab
  - core-analysis
  - rheology-measurement
  - core-flooding
  - microscopy
  - sem
  - finite-volume-method
tags:
  - degree/ms
  - technique/viscosity-measurement
  - technique/mathematical-modeling
  - technique/reservoir-simulation
  - technique/matlab
  - technique/core-analysis
  - technique/rheology-measurement
  - technique/core-flooding
  - technique/microscopy
  - technique/sem
  - technique/finite-volume-method
  - theme/reservoir-engineering
  - theme/petroleum-engineering
  - terminology/water-shutoff
  - terminology/petrophysics
  - terminology/porosity
  - terminology/permeability
  - terminology/gelation-time
  - terminology/water-blocking
  - terminology/gelation
  - terminology/heterogeneity
  - terminology/thief-zone
  - terminology/temperature-cooldown
  - terminology/warmback
status: ingested
---

# NUMERICAL MODELING OF WATER SHUTOFF UTILIZING NANOSILICA GEL TREATMENT

**Summary**: The thesis develops a numerical model using the finite volume method (FVM) to simulate and predict temperature cooldown, warmback, and gel penetration of a nanosilica system during water shutoff operations. The study evaluates how parameters like injection rate, treatment volume, fluid temperature, activator concentration, and reservoir heterogeneity impact the effectiveness of the gel barrier.

---

## Research Problem

The primary challenge is the inaccurate prediction of water shutoff performance due to the omission of critical factors like temperature cooldown, complex gelation kinetics, and reservoir heterogeneity in current models. Specifically, nanosilica systems require precise control over gelation time (the duration before a fluid becomes too viscous to pump) to ensure successful placement in various environments.

## Objectives

- Develop an accurate reaction kinetic model from rheological experiments at different fluid compositions and reservoir temperatures to predict gelation time.
- Create a mathematical formulation that includes reaction kinetics, continuum flow on two scales, and thermal energy transfer.
- Generate a numerical 3D simulation model utilizing MATLAB software from the mathematical formulation developed in (1).
- Ensure that the numerical model is efficient in terms of computation.
- To study the reaction kinetics of a nanofluidic in-situ gel system (nanosilica) by monitoring viscosity development using an HPHT viscometer.
- To evaluate the effect of temperature and activator concentration on gelation time.

## Methods

The study utilized rheological experiments using a Chandler 5550 HPHT viscometer to measure viscosity against time at various temperatures (160-210°F) and activator concentrations. A kinetic model was developed based on the Arrhenius equation, where gelation time (GT) is modeled as a function of temperature (T), concentration of nanosilica (CN), and concentration of activator (CA). The research also included core flooding experiments to assess injectivity and plugging efficiency. Finally, an integrated 1D/2D/3D numerical model was developed using MATLAB to simulate fluid flow, mass transfer, and heat transfer during the treatment process.

## Data and Materials

The study utilizes 3D grids of 59,049 cells and 2D grids of 6,561 cells. Input parameters include: rock porosity (0.2 ± 0.05 m³/m³), rock permeability (1,500 ± 5.0 mD), wellbore diameter (2.375 inches), formation temperature (220°F), and various fluid properties including viscosity (1.0 cP), density (1330 kg/m³), and activation energy (126,430 J/mol).

## Key Findings

- Nanosilica-based gels exhibit an exceptional plugging efficiency of 100%. ([[2024-alabdrabalnabi|Alabdrabalnabi, 2024, p. 21]])
- Adding nano-silica to a gel composed of hydrolyzed polyacrylamide crosslinked with chromium (III) acetate resulted in significant flexibility, elongating to 1150% at high temperatures. ([[2024-alabdrabalnabi|Alabdrabalnabi, 2024, p. 27]])
- The addition of nano-clay to PAM hydrogel increased the oil recovery by 5.8% at elevated temperatures (80 °C). ([[2024-alabdrabalnabi|Alabdrabalnabi, 2024, p. 28]])
- A preformed particle gel reinforced with bentonite nano-clay and nano-silica showed a high plugging efficiency of 97.6% for a 1 wt.% reinforced sample. ([[2024-alabdrabalnabi|Alabdrabalnabi, 2024, p. 35]])
- The viscosity of nanocomposite gel (with nano-clay) was 4,437 cp, significantly higher than the viscosity of gel without nanomaterial (170 cp). ([[2024-alabdrabalnabi|Alabdrabalnabi, 2024, p. 34]])
- Gelation time (GT) is found to be exponentially related to temperature and activator concentration; for example, at a fixed 40 wt.% activator, GT increased from 30 minutes at 210°F to 180 minutes at 160°F. ([[2024-alabdrabalnabi|Alabdrabalnabi, 2024, p. 60]])
- The reaction order of nanosilica was found to be higher than the activator (n=23.44, m=16.18). ([[2024-alabdrabalnabi|Alabdrabalnabi, 2024, p. 81]])
- The activation energy (Ea) for the nanosilica system was determined to be 126.43 kJ/mol. ([[2024-alabdrabalnabi|Alabdrabalnabi, 2024]])
- page_number_not_specified_in_text_but_near_calculation_block ([[2024-alabdrabalnabi|Alabdrabalnabi, 2024]])
- The developed gelation kinetic model showed a high correlation with lab data (R² = 0.9229) and was validated for temperatures between 140 to 220°F. ([[2024-alabdrabalnabi|Alabdrabalnabi, 2024, p. 85]])
- Nanosilica-based fluids demonstrated 100% plugging efficiency in core flooding tests, with only a small increase in differential pressure (10 psi) for five pore volumes of injection. ([[2024-alabdrabalnabi|Alabdrabalnabi, 2024, p. 53]])
- The study confirmed that nanosilice-based fluid is capable of invading all samples as verified by microscopy and SEM analysis. ([[2024-alabdrabalnabi|Alabdrabalnabi, 2024, p. 53]])
- At high activator concentration (~40 wt.%), the gelation time can increase from 30 to 180 minutes when the temperature drops from 210°F to 160°F. ([[2024-alabdrabalnabi|Alabdrabalnabi, 2024, p. 93]])
- At an injection rate of 1 BPM, the temperature profile decreased to 200°F within approximately 1.5 ft, whereas at 0.1 BPM, it only reached 200°F up to ~0.5 ft. ([[2024-alabdrabalnabi|Alabdrabalnabi, 2024, p. 99]])
- Increasing treatment volume leads to a more extensive temperature cooldown; for example, a volume of 0.5 bbl/ft resulted in a cooldown of 2 ft, while larger volumes reached 3.5 ft. ([[2024-alabdrabalnabi|Alabdrabalnabi, 2024, p. 100]])

## Limitations

Existing coupled numerical models in the literature often lack a wellbore model that can handle non-Newtonian flow behavior or a gel-blocking prediction model in the reservoir that simulates gel propagation. Additionally, many models do not fully integrate dynamic interactions between the wellbore and the reservoir.

## Recommendations and Future Work

Future work should include: capturing two-phase flow to mimic downhole conditions; introducing a non-Newtonian flow model for in-situ gels; and accounting for variable fluid thermal and flow characteristics. Additionally, incorporating viscosity development during the gelation reaction is recommended to improve prediction accuracy.

## Related Concepts

- [[viscosity-measurement]]
- [[mathematical-modeling]]
- [[reservoir-simulation]]
- [[water-shutoff]]
- [[petrophysics]]
- [[reservoir-engineering]]
- [[petroleum-engineering]]
- [[porosity]]
- [[permeability]]
- [[rheology-measurement]]
- [[gelation-time]]
- [[core-flooding]]
- [[finite-volume-method]]
- [[matlab]]
- [[water-blocking]]
- [[gelation]]
- [[heterogeneity]]
- [[thief-zone]]
- [[temperature-cooldown]]
- [[warmback]]
