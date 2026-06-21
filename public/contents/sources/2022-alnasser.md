---
type: source
id: "142270"
title: "Pressure Transient Analysis on Heavy Oil Reservoirs Utilizing Microwave Heating"
author: "Ali Redha Alnasser"
year: 2022
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr Abeeb Awotunde"
committee_members: []
source_file: "raw/142270 - Pressure Transient Analysis on Heavy Oil Reservoirs Utilizing Microwave Heating.pdf"
url: "https://eprints.kfupm.edu.sa/142270"
study_area: "Not stated in source"
keywords:
  - Heavy oil
  - Microwave heating
  - Pressure transient analysis
  - Non-isothermal
  - Viscosity
  - Well-test parameters
  - MATLAB
  - Heavy Oil Reservoirs
  - Heat Flow Equation
  - Inverse Modeling
  - Numerical Model
techniques:
  - matlab
  - pressure-transient-analysis
  - mathematical-modeling
  - mathematical-geology
tags:
  - degree/ms
  - technique/pressure-transient-analysis
  - technique/matlab
  - technique/mathematical-modeling
  - technique/mathematical-geology
  - theme/reservoir-engineering
  - theme/petroleum-engineering
  - terminology/viscosity
  - terminology/skin-factor
  - terminology/petrophysics
status: ingested
---

# Pressure Transient Analysis on Heavy Oil Reservoirs Utilizing Microwave Heating

**Summary**: The thesis investigates the use of microwave heating (electromagnetic radiation) to enhance production in heavy oil reservoirs. It develops a mathematical model that integrates heat flow and fluid flow equations to perform pressure transient analysis under non-isothermal conditions, ultimately concluding that both temperature and pressure modeling are necessary for accurate reservoir characterization.

---

## Research Problem

In heavy oil reservoirs utilizing microwave heating, the fluid flow equation is typically solved independently of the heat flow equation. This lack of integration leads to inaccurate results in pressure transient analysis (PTA) because it fails to account for the significant changes in oil viscosity caused by temperature fluctuations from the heating source.

## Objectives

- Evaluate the effect of a microwave heater placed at the sand face of a well over the pressure and temperature
- Estimate various well-test parameters including skin factor, permeability, wellbore storage, and the radius of investigation
- Integrate heat balance and flow balance to include all radiation, conduction, and advection heat transfer elements
- Develop a numerical model that integrates both flow and heat equations to account for temperature-dependent viscosity.
- Incorporate all heat transfer mechanisms, including conduction, convection, and radiation.
- Perform inverse modeling of pressure and temperature data to estimate reservoir parameters (e.g., permeability, skin, thickness).

## Methods

The study utilizes a mathematical approach where the energy balance partial differential equation is converted into an ordinary differential equation in Laplace space. This is solved numerically using MATLAB to determine temperature at multiple time steps. The resulting temperatures are used to calculate viscosity values, which are then substituted into the pressure model (radial diffusivity equation) to solve for pressures and other parameters. The workflow involves: 1) Deriving energy balance including conduction, advection, and radiation; 2) Converting to Laplace domain; 3) Solving in MATLAB; 4) Obtaining viscosity at time steps; 5) Substituting into the flow equation; 6) Performing PTA to determine permeability, skin factor, wellbore storage, and radius of investigation.

## Data and Materials

The study uses synthetic/modeled data for validation (Abernethy's solutions) and specific input parameters including: permeability (k) of 2000 mD, thickness (h) of 50 ft, skin factor (s) of -20, and various power levels (1 kW, 5 kW, 10 kW) with corresponding flow rates (-5, -20, -50 BPD).

## Key Findings

- Microwave heating can result in a temperature increase of up to 400 degrees Celsius due to superheated zones, leading to an effective porosity increase (higher permeability). ([[2022-alnasser|Alnasser, 2022, p. 33]])
- A frequency of 2450 MHz with microwave heating was shown to yield up to 86% more light products in Canadian tar sands. ([[2022-alnasser|Alnasser, 2022, p. 34]])
- Using a 915 MHz microwave antenna (60 kW) approximately 9m from the well can result in an 80% improvement in cumulative oil recovery over 10 years compared to cold production. ([[2022-alnasser|Alnasser, 2022, p. 35]])
- Microwave heating can produce almost ten times more energy in the reservoir than it uses as electricity, supporting its use in EOR for unconventional oils. ([[2022-alnasser|Alnasser, 2022, p. 35]])
- Standard pressure transient analysis (PTA) overestimates near-wellbore skin and underestimates skin if changing viscosity due to temperature effects is ignored. ([[2022-alnasser|Alnasser, 2022, p. 53]])
- The numerical model perfectly matches Abernethy's analytical solution when conduction is neglected, confirming the accuracy of the core equations. ([[2022-alnasser|Alnasser, 2022, p. 71]])
- Conduction heat transfer significantly affects the temperature of the near-wellbore region and should not be neglected in heavy oil reservoir modeling. ([[2022-alnasser|Alnasser, 2022, p. 71]])
- The inclusion of a composite flow model and heat model is necessary to accurately match pressure responses in heated reservoirs. ([[2022-alnasser|Alnasser, 2022, p. 100]])
- Case 2 (matching only pressure using a composite flow and heat model) provided an excellent match for pressure data compared to Case 1 (homogeneous model). ([[2022-alnasser|Alnasser, 2022, p. 95]])
- The temperature profile at 5' distance shows that higher production rates result in lower temperatures due to the transport of heat from further regions toward the wellbore. ([[2022-alnasser|Alnasser, 2022, p. 73]])
- A lower averaging criterion for the heated region results in a larger calculated thickness of the zone but a higher average temperature within that zone. ([[2022-alnasser|Alnasser, 2022, p. 76]])
- The intersection point (distance where different flow rates yield identical temperatures) moves further from the wellbore as time increases, ranging from ~0.4 ft at 1 hour to ~5 ft at 720 hours. ([[2022-alnasser|Alnasser, 2022, p. 79]])
- The study identifies that matching only pressure values using a composite model is more accurate for certain parameters than attempting to match both pressure and temperature simultaneously due to the complexity of multi-variable optimization. ([[2022-alnasser|Alnasser, 2022, p. 100]])

## Limitations

The study assumes purely radial flow, an isotropic reservoir, single-phase fluid (oil only), no heat loss to adjacent formations, and a constant permeability with respect to radius. The applicability of microwave heating is limited by its small penetration depth, requiring tight well spacing.

## Recommendations and Future Work

Not stated in source

## Related Concepts

- [[pressure-transient-analysis]]
- [[matlab]]
- [[viscosity]]
- [[skin-factor]]
- [[reservoir-engineering]]
- [[saudi-arabia]]
- [[mathematical-modeling]]
- [[petrophysics]]
