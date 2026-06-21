---
type: source
id: "139022"
title: "MODELING WETTABILITY ALTERATION DURING IMMISCIBLE CARBON DIOXIDE FLOODING PROCESS"
author: "SAAD MENAHI AL-MUTAIRI"
year: 2013
department: "Petroleum Engineering"
degree: "PhD"
supervisor: "Dr. Sidgi A. Abu-Khamsin"
committee_members: []
source_file: "raw/139022 - MODELING WETTABILITY ALTERATION DURING IMMISCIBLE CARBON DIOXIDE FLOODING PROCES.pdf"
url: "https://eprints.kfupm.edu.sa/139022"
study_area: "Middle East (specifically a limestone oil reservoir)"
keywords:
  - Wettability alteration
  - CO2 flooding
  - Immiscible displacement
  - Carbon dioxide
  - Mathematical modeling
  - Core flooding
  - Contact angle
  - immiscible carbon dioxide flooding
  - core flood
  - porous medium
  - displacement model
  - carbon dioxide flooding
  - carbonate rock
  - oil-wet to intermediate-wet
  - core flood experiment
  - relative permeability
  - solubility effect
  - Immiscible CO2
techniques:
  - coreflooding
  - contact-angle-measurement
  - matlab
  - reservoir-simulation
  - core-flooding
  - petrophysics
  - mathematical-modeling
  - image-analysis
  - microscopy
tags:
  - degree/phd
  - location/middle-east-region
  - technique/corefloering
  - technique/contact-angle-measurement
  - technique/matlab
  - technique/reservoir-simulation
  - technique/core-flooding
  - technique/petrophysics
  - technique/mathematical-modeling
  - technique/image-analysis
  - theme/eor
  - theme/petroleum-engineering
  - theme/reservoir-engineering
  - theme/petrophysics
  - terminology/wettibility
  - terminology/eor
  - terminology/saturation-height-modeling
  - terminology/relative-permeability
  - terminology/immiscible-displacement
  - terminology/porous-media
  - terminology/wettability
  - terminology/wettibility-alteration
  - terminology/solubility
  - terminology/carbonate-reservoirs
status: ingested
---

# MODELING WETTABILITY ALTERATION DURING IMMISCIBLE CARBON DIOXIDE FLOODING PROCESS

**Summary**: The thesis develops a mathematical model to describe the immiscible CO2-oil displacement process in porous media, specifically addressing continuous wettability alteration. It incorporates an empirical relationship between contact angle and exposure time into a modified Corey relative permeability model, validated by core flooding experiments.

---

## Research Problem

The study addresses the challenge of recovering residual oil from water-wet or oil-wet reservoirs where oil is trapped in pores. It specifically investigates whether immiscible CO2 injection can alter rock wettability and improve recovery in a limestone reservoir under conditions below the miscibility pressure.

## Objectives

- To develop a new mathematical model to represent CO2-oil displacement under immiscible conditions, including relative permeabilities as functions of wettability.
- To solve the mathematical displacement model numerically using MATLAB programming.
- To conduct a laboratory experiment to measure the change in wettability with time for a rock/oil/brine system exposed to CO2.
- To conduct a laboratory core-flooding experiment with CO2 under immiscible conditions.
- To verify the numerical model with data generated from all laboratory experiments.
- Develop a displacement model for CO2-oil flow in a one-dimensional porous medium.

## Methods

The study utilized two main experimental tracks: (1) Contact Angle Measurement: Core slices were prepared, aged in oil to ensure oil-wet status, and then exposed to brine with varying CO2 concentrations. The contact angle was measured using the pendent drop method and analyzed via 'Drop Image' software using a traveling secant method. (2) Core Flooding: A core holder (Hassler-type) was used to flood composite core samples with brine, oil, and CO2 under high pressure/temperature conditions. Data from these experiments were integrated into mathematical models for displacement simulation. MATLAB was used to implement the proposed model, IMPES, and Buckley-Leverett (BL) models for comparison.

## Data and Materials

The study utilized 3 core plugs of limestone rock with a porosity of approximately 15% and permeability of 5 mD. Brine was prepared as a 5% aqueous solution of KCl. Dead Arabian Light crude oil was used as the oil phase. Industrial grade CO2 (99.5% pure) was used for flooding. Experimental data included contact angle measurements over time and core flood production profiles.

## Key Findings

- The experimental results indicate that the rock wettability is altered from oil-wet to intermediate-wet when exposed to carbonated brine, with the extent of alteration depending on CO2 concentration in the brine. ([[2013-al-mutairi|AL-MUTAIRI, 2013, p. 19]])
- Contact angle decreases exponentially with the time of exposure to the brine down to a stable value. ([[2013-al-mutairi|AL-MUTAIRI, 2013, p. 19]])
- The displacement model including continuous wettability alteration predicts a much higher ultimate oil recovery compared to models without such features. ([[2013-al-mutairi|AL-MUTAIRI, 2013, p. 20]])
- Oil viscosity is reduced by CO2 dissolution, while the amount of swelling increases with increased CO2 dissolution. ([[2013-al-mutairi|AL-MUTAIRI, 2013, p. 35]])
- Interfacial tension of oil is reduced in the presence of CO2 and decreases moderately with increasing carbonation pressure of brine. ([[2013-al-mutairi|AL-MUTAIRI, 2013, p. 35]])
- Asphaltene precipitation occurs when hydrocarbons and polar fractions lose their ability to disperse asphaltenes, potentially causing significant issues in the reservoir. ([[2013-al-mutairi|AL-MUTAIRI, 2013, p. 35]])
- The non-linear term in the displacement model is found to be negligible (between 217 and 434 times smaller than the second term) at low pressure gradients, allowing for simplification of the governing equations. ([[2013-al-mutairi|AL-MUTAIRI, 2013, p. 58]])
- The contact angle is expected to decrease exponentially with CO2 exposure time as the concentration of CO2 molecules at the oil/rock interface builds up. ([[2013-al-mutairi|AL-MUTAIRI, 2013, p. 64]])
- A modified Corey model was developed where relative permeability is a function of the contact angle, allowing for the calculation of new oil and CO2 relative permeabilities as wettability shifts from oil-wet to intermediate-wet. ([[2013-al-mutairi|AL-MUTAIRI, 2013, p. 63]])
- The displacement model (Eq. 4.25) was successfully simplified by removing non-linear terms while maintaining accuracy for low pressure systems (<1000 psi). ([[2013-al-mutairi|AL-MUTAIRI, 2013, p. 59]])
- Exposure to carbonated brine caused a significant reduction in contact angle from ~101° to 83.9° (Run 1) and ~97° to 69.3° (Run 2), shifting the rock from oil-wet to intermediate-wet. ([[2013-al-mutairi|AL-MUTAIRI, 2013, p. 100]])
- The relationship between contact angle and exposure time follows an asymptotic-exponential trend, where initial reduction is rapid followed by a stable equilibrium value. ([[2013-al-mutairi|AL-MUTAIRI, 2013, p. 100]])
- higher concentration of CO2 in the brine resulted in a lower final contact angle, while the time to reach stability was only slightly dependent on concentration. ([[2013-al-mutairi|AL-MUTAIRI, 2013]])
- page_number_not_found_in_text_but_near_table_7.1 ([[2013-al-mutairi|AL-MUTAIRI, 2013]])
- Exposing carbonate rock to brine containing CO2 causes alteration of the rock wettability from an oil-wet to an intermediate-wet state. ([[2013-al-mutairi|AL-MUTAIRI, 2013, p. 132]])

## Limitations

The study notes that while laboratory-scale results are rapid (under one hour), field applications involve much slower diffusion rates due to the larger scale and lower CO2 concentrations in certain zones.

## Recommendations and Future Work

- Conduct wettability alteration experiments to establish a general model fitted for different rock/fluid systems.
- Perform CO2 core flooding on a wide range of systems to verify the new comprehensive displacement models.
- Investigate other physical phenomena like gas solubility, precipitation, and dispersion to be incorporated into the displacement model.

## Related Concepts

- [[coreflooding]]
- [[contact-angle-measurement]]
- [[matlab]]
- [[wettibility]]
- [[eor]]
- [[petroleum-engineering]]
- [[saturation-height-modeling]]
- [[relative-permeability]]
- [[immiscible-displacement]]
- [[mathematical-modeling]]
- [[porous-media]]
- [[reservoir-engineering]]
- [[core-flooding]]
- [[wettability]]
- [[middle-east-region]]
- [[reservoir-simulation]]
- [[wettibility-alteration]]
- [[solubility]]
- [[carbonate-reservoirs]]
