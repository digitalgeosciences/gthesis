---
type: source
id: "142029"
title: "STUDY OF MECHANICAL PROPERTIES OF KEROGEN BY A MOLECULAR SIMULATION APPROACH"
author: "Elshad Aslanov"
year: 2021
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Saad Al-Afnan"
committee_members: []
source_file: "raw/142029 - STUDY OF MECHANICAL PROPERTIES OF KEROGEN BY A MOLECULAR SIMULATION APPROACH.pdf"
url: "https://eprints.kfupm.edu.sa/142029"
study_area: "Not stated in source"
keywords:
  - Kerogen
  - Mechanical properties
  - Molecular simulation
  - Type II kerogen
  - Shale formations
  - Organic matter
  - Elastic moduli
  - Porosity
  - Density
  - Petrophysical analysis
  - asphaltene
  - pore size distribution
  - adsorption capacity
  - stress-strain relationship
techniques:
  - molecular-dynamics
  - medea
  - lammps
  - pcff-forcefield
  - monte-carlo
  - peng-robinson-equation-of-state
  - petrophysical-characterization
  - gibbs-monte-carlo-simulation
  - medea-software
  - peng-robinson-eos
tags:
  - degree/ms
  - technique/molecular-dynamics
  - technique/mathematical-modeling
  - technique/petrophysical-characterization
  - theme/petroleum-engineering
  - theme/rock-mechanics
  - theme/geomechanics
  - theme/petrophysics
  - terminology/kerogen
  - terminology/porosity
  - terminology/rock-mechanics
  - terminology/asphaltene
  - terminology/adsorption
  - terminology/stress-strain
status: ingested
---

# STUDY OF MECHANICAL PROPERTIES OF KEROGEN BY A MOLECULAR SIMULATION APPROACH

**Summary**: The thesis investigates the mechanical properties of organic matters (kerogen and bitumen) using a molecular simulation approach. It models different kerogen-to-asphaltene ratios to evaluate how asphaltene content affects porosity, pore size distribution, and elastic constants under various gas adsorption conditions.

---

## Research Problem

There is a lack of detailed knowledge regarding the mechanical behavior of individual organic components (kerurgen vs. bitumen) in shales; existing literature often treats them as a single unit, which limits the ability to model how varying mineralogy and organic content affect rock mechanics.

## Objectives

- Develop better understanding of kerogen and organic matter mechanical behaviour through an atomistic approach
- Study elastic and plastic deformation of both structures
- Understand factors that influence kerogen’s geomechanics
- Delineate kerogen’s and organic matter’s elastic moduli
- Investigate organic matter’s geomechanics honouring kerogen characteristics
- Build molecular models for kerogen II D and asphaltene A1 to represent organic matter.

## Methods

The study utilizes Molecular Dynamics (MD) simulations using the MedeA environment with the LAMMPS engine. The PCFF+ forcefield was used to model atomic interactions. A multi-step workflow included: 1) Building initial structures of Type II kerogen at different maturity levels; 2) Performing NVT (constant volume/temperature) simulations at 900 K for 250 ps to stabilize the system; 3) Running NPT (constant pressure/temperature) stages from 900 K down to 350 K at 20 MPa to relax the structure. Mechanical properties were derived using the Voigt-Reuss-Hill method from the Voigt stiffness matrix. Pore fluid effects were studied by saturating structures with methane, nitrogen, and CO2 using Gibbs ensemble Monte Carlo simulations.

## Data and Materials

The study uses two specific molecular models: kerogen II D (S2C175N4O9H102, 2466 g/mol) and asphaltene A1 (C37H33, 477 g/mol). Three different kerogen-to-asphaltene ratios were modeled by maintaining a constant amount of kerogen and varying the number of asphaltene units (62, 92, and 122) to create distinct organic matter configurations.

## Key Findings

- Kerogen exhibited elastomer-like mechanical behavior with consistent elastic moduli regardless of maturity level. ([[2021-aslanov|Aslanov, 2021, p. 31]])
- The most mature kerogen (Type II-D) had the lowest elastic moduli, attributed to its higher intermolecular porosity. ([[2021-aslanov|Aslanov, 2021, p. 39]])
- A negative correlation was found between mechanical properties and porosity in porosity-controlled structures. ([[2021-aslanov|Aslanov, 2021, p. 41]])
- Saturation with methane increased Young's modulus by 8.5% and bulk modulus by 5%, while carbon dioxide increased Young's modulus by 22% and bulk modulus by 50%. ([[2021-aslanov|Aslanov, 2021, p. 43]])
- Nitrogen saturation resulted in a reduction of Young's modulus by approximately 40% and a decrease in shear modulus to 0.52 GPa. ([[2021-aslanov|Aslanov, 2021, p. 43]])
- Structures containing bitumen exhibited larger values of Poisson’s ratio, indicating less likelihood of degradation under stress. ([[2021-aslanov|Aslanov, 2021, p. 46]])
- Kerogen II D exhibited the highest porosity at 14.885% compared to pure asphaltene (11.207%) and mixed organic matters. ([[2021-aslanov|Aslanov, 2021, p. 55]])
- The addition of asphaltene molecules led to a reduction in porosity due to the pore-filling effect caused by the difference in molecular sizes. ([[2021-aslanov|Aslanov, 2021, p. 55]])
- Kerogen showed a dual pore system with predominant ranges between 0.2-0.24 nm and 0.24-0.29 nm, while asphaltene was most frequent in the 0.2-0.25 nm range. ([[2021-aslanov|Aslanov, 2021, p. 55]])
- The density of organic matters (1.21 to 1.25 g/cm3) was found to be in alignment with experimental values for kerogen and asphaltene. ([[2021-aslanov|Aslanov, 2021, p. 56]])
- While the shear and Young's moduli of kerogen were approximately three times higher than those of asphaltene, asphaltene showed greater resistance to compression (higher Bulk modulus). ([[2021-aslanov|Aslanov, 2021, p. 56]])
- The inclusion of asphaltene in the matrix reduced the elastic region of the structure by nearly 70% compared to pure kerogen. ([[2021-aslanov|Aslanov, 2021, p. 57]])
- Kerogen showed a significantly higher adsorption capacity for all three gases (methane, nitrogen, and carbon dioxide) compared to asphaltene or mixed organic matters. ([[2021-aslanov|Aslanov, 2021, p. 58]])
- The addition of CO2 during gas adsorption resulted in a decrease in the shear modulus of the organic matter compared to methane and nitrogen. ([[2021-aslanov|Aslanov, 2021, p. 59]])

## Limitations

The study did not capture the swelling nature of kerogen and organic matter during adsorption, which could impact mechanical properties. The models used were specific to kerogen II D and sulfurless asphaltene A1, potentially limiting generalizability to other organic compositions.

## Recommendations and Future Work

Validate findings experimentally; extend gas type studies to different kerogen models; include various types of asphaltene structures; investigate the swelling effect during adsorption; study the interface between minerals (calcite, quartz) and organic compounds regarding fracture closure.

## Related Concepts

- [[molecular-dynamics]]
- [[kerogen]]
- [[porosity]]
- [[rock-mechanics]]
- [[petroleum-engineering]]
- [[petrophysical-characterization]]
- [[geomechanics]]
- [[asphaltene]]
- [[adsorption]]
- [[stress-strain]]
- [[petrophysics]]
