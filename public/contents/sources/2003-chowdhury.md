---
type: source
id: "9826"
title: "MONITORING FLUID FRONT MOVEMENT USING PERMANENT RESISTIVITY ARRAYS"
author: "MUHAMMAD REAZ UDDIN CHOWDHURY"
year: 2003
department: "Petroleum Engineering"
degree: "PhD"
supervisor: "Dr. Abdulaziz U. Al-Kaabi"
committee_members: []
source_file: "raw/9826 - Monitoring fluid fron movement using permanent resistivity arrays.pdf"
url: "https://eprints.kfupm.edu.sa/9826"
study_area: "Laboratory-based study using a scaled model reservoir (cylindrical and sector models)"
keywords:
  - fluid front movement
  - permanent resistivity arrays
  - reservoir monitoring
  - electrical methods
  - well centered in a circular drainage area
  - numerical model
  - resistivity arrays
  - numerical modeling
  - well monitoring
techniques:
  - eras
  - helium-porosity
  - petrophysics
  - resistivity-logging
  - mathematical-modeling
  - electrical-resistivity-tomography
  - reservoir-simulation
tags:
  - degree/phd
  - location/notspecifiedlocation
  - technique/er-as
  - technique/helium-porosity
  - technique/petrophysics
  - technique/resistivity-logging
  - technique/mathematical-modeling
  - technique/electrical-resistivity-tomography
  - technique/reservoir-simulation
  - theme/petrophysics
  - theme/borehole-geophysics
  - terminology/porosity
  - terminology/petrophysics
  - terminology/petrophysics
status: ingested
---

# MONITORING FLUID FRONT MOVEMENT USING PERMANENT RESISTIVITY ARRAYS

**Summary**: The thesis investigates the detection of fluid front movement in a reservoir using permanent resistivity arrays. It utilizes both physical experiments in scaled cylindrical and sector models and numerical simulations to validate that front positions can be accurately determined from potential distribution measurements.

---

## Research Problem

Determining if electrical methods, specifically permanent resistivity arrays, can provide reliable tracking of fluid fronts (water/oil) in a well centered in a circular drainage area to improve reservoir management without frequent well interventions.

## Objectives

- Implement permanent downhole arrays of electrodes in a scaled reservoir model that represents a cylindrical drainage area.
- Vary the current injection rate, electric potential and spacing of electrodes to get different measurement conditions.
- Use the setup to measure the change in resistivity due to change in fluid content and distribution.
- Validate and utilize a numerical model in the analysis of acquired resistance or potential data.
- Determine if the position of a fluid front can be deduced from the potential distribution using resistivity arrays.
- Validate a mathematical model for calculating potential distributions in cylindrical and sector geometries.

## Methods

The study employs a dual approach: 1) Physical experiments using two types of scaled models: a cylindrical model (to determine base resistivities for different fluids) and a sector model (to simulate real-world well geometries). Measurements were taken using an ERAS system with two sets of electrodes. 2) Numerical modeling based on the Finite Element Method (FEM) written in FORTRAN to solve Laplace's equation for potential distribution. The study also includes sensitivity analysis where parameters like front position and resistivity values were varied to calculate the impact on measured potentials.

## Data and Materials

Experimental data from a cylindrical model (used to establish baseline resistivities for 200,000 ppm brine and oil) and a sector model. The sector model included two electrode sets: one with 31 electrodes (1 cm apart) and another with 18 electrodes (1.5 cm apart). Seven distinct experimental cases were conducted on the sector model to test various scenarios including tilted models and different injection/production configurations.

## Key Findings

- The sector model yielded a calculated porosity of 37.67%, closely matching the 37.5% measured by the Helium Porosimeter. ([[2003-chowdhury|CHOWDHURY, 2003, p. 58]])
- The calculation for connate water saturation in the sector model was 8.04%. ([[2003-chowdhury|CHOWDHURY, 2003, p. 58]])
- The calculated residual oil saturation in the sector model was 13.1%. ([[2003-chowdhury|CHOWDHURY, 2003, p. 58]])
- Resistivity measurements were found to be very sensitive to fluid movement, and the front could be detected up to a distance of twice the length of the resistivity array. ([[2003-chowdhury|CHOWDHURY, 2003, p. 14]])
- The orientation of the fluid front was shown to affect the sensitivity of the measurement. ([[2003-chowdhury|CHOWDHURY, 2003, p. 14]])
- A good match was obtained between laboratory (experimental) and numerical results using the finite element model. ([[2003-chowdhury|CHOWDHURY, 2003, p. 14]])
- The system can detect a fluid front up to a distance of approximately twice the thickness (span) of the electrode array. ([[2003-chowdhury|CHOWDHURY, 2003, p. 63]])
- The sensitivity of the measurement to the position of the fluid front was found to be between 3.5 V/cm and 1.35 V/cm for a distance of 23 cm to 63 cm. ([[2003-chowdhury|CHOWDHURY, 2003, p. 90]])
- sensitivity_to_resistivity_change_of_1_ohm-m_was_0.34_V/ohm-m ([[2003-chowdhury|CHOWDHURY, 2003]])
- page_number_none ([[2003-chowdhury|CHOWDHURY, 2003]])

## Limitations

Measurement accuracy is limited by the electrical noise of the acquisition system, especially in high-impedance environments (e.g., poor electrode contact). Results for electrodes very close to the injection point are often unreliable due to local resistivity effects.

## Recommendations and Future Work

Future work should include: 1) using smaller glass beads for more realistic permeability/saturation; 2) applying the method to gas reservoirs with water drives; 3) implementing multi-source or cross-well measurements; 4) investigating deviated wells; 5) incorporating reservoir heterogeneities like varying porosity and permeability.

## Related Concepts

- [[er-as]]
- [[helium-porosity]]
- [[mathematical-modeling]]
- [[porosity]]
- [[petrophysics]]
- [[borehole-geophysics]]
- [[saudi-arabia]]
- [[electrical-resistivity-tomography]]
- [[reservoir-simulation]]
- [[notspecifiedlocation]]
