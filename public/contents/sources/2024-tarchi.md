---
type: source
id: "142786"
title: "Estimation of water saturation in a sand dune using electrical conductivity and seismic methods"
author: "Omar Tarchi"
year: 2024
department: "Geosciences"
degree: "MS"
supervisor: "Abdullatif Al-Shuhail"
committee_members:
  - "Sherif Hanafy"
  - "Panteleimon Soupios"
source_file: "raw/142786 - Estimation of water saturation in a sand dune using electrical conductivity and .pdf"
url: "https://eprints.kfupm.edu.sa/id/eprint/142786/"
study_area: "Barchan sand dune near Dammam Airport, Eastern Province, Saudi Arabia"
keywords:
  - water saturation
  - sand dunes
  - electrical conductivity
  - seismic methods
  - joint inversion
  - Complex Refractive Index Method (CRIM)
  - Gassmann-Hertz-Mindlin model
  - P-wave velocity
techniques:
  - electrical-resistivity-tomography
  - seismic-interpretation
  - mathematical-modeling
  - petrophysics
tags:
  - degree/ms
  - formation/quaternary-sediments
  - location/eastern-province
  - location/dammam-area
  - technique/electrical-resistivity-tomography
  - technique/seismic-interpretation
  - technique/mathematical-modeling
  - technique/petrophysics
  - theme/near-surface-geophysics
  - theme/hydrogeology
  - terminology/water-saturation
  - terminology/acoustic-impedance
status: ingested
---

# Estimation of water saturation in a sand dune using electrical conductivity and seismic methods

**Summary**: The thesis investigates the estimation of water saturation (SW) in sand dunes using a joint inversion of seismic P-wave velocity and electrical conductivity measurements. By integrating the CRIM model for conductivity and the Gassmann-Hertz-Mindlin model for seismic velocities, the study successfully characterized the dry conditions of a dune in eastern Saudi Arabia.

---

## Research Problem

Determining water saturation (SW) in sand dunes is essential for human activity in desert areas, but these resources are difficult to investigate due to varying water content and sand characteristics. Existing methods like refraction seismic struggle with low-to-medium saturations, necessitating a joint inversion approach using both electrical conductivity and P-wave velocities.

## Objectives

- Develop a procedure for inverting SW from measurements of electric conductivity (C) and seismic P-wave velocities (VP).
- Utilize the Complex Refractive Index Method (CRIM) to relate sand conductivity to saturation, matrix, and pore-fluid properties.
- Apply the Gassmann-Hertz-Mindlin model to determine P-wave velocity in sands with specific porosity values.
- Test the inversion procedure on 10 pairs of C-VP measurements from a sand dune near Dammam Airport.

## Methods

The study employs a joint inversion approach. Conductivity (C) is modeled using the CRIM equation to relate it to saturation (SW), porosity, and matrix/fluid properties. P-wave velocity (VP) is calculated using the Gassmann-Hertz-Mindlin model, which incorporates Hertz-Mindlin contact theory for dry sand moduli and Wood's equation for fluid modulus. The inversion process involves calculating a relative absolute error (RAE) between measured and calculated VP values to find the minimum corresponding SW. Mathematical modeling was performed in Mathematica using both FindMinimum and Minimize functions with 10 starting points to avoid local minima.

## Data and Materials

The study utilized 10 pairs of C-VP measurements from a sand dune near Dammam Airport (Eastern Province, Saudi Arabia). Data included: 1. A high-resolution seismic survey using 31 geophones over a 5.4m line and a conventional survey with 73 shot gathers. 2. An ERT survey using 96 electrodes at 0.75m intervals. 3. Laboratory measurements of water content (WC) from samples collected in a borehole.

## Key Findings

- The inversion procedure yielded SW values with a minimum of 0.04566, a maximum of 0.09945, and a median of 0.05142. ([[2024-tarchi|Tarchi, 2024, p. 14]])
- Experimental measurements for SW showed a minimum of 0.01389, a maximum of 01.1198, and a median of 0.04571. ([[2024-tarchi|Tarchi, 2024, p. 14]])
- The mean water content (WC) for inverted values was 0.0213 m3/m3, while the measured value mean was 0.0179 m3/m3. ([[2024-tarchi|Tarchi, 2024, p. 59]])
- The median water content (WC) of the inverted results was 0.018, compared to a median of 0.016 for measured values, both indicating dry conditions. ([[2024-tarchi|Tarchi, 2024, p. 55]])
- The average error between measured and inverted water content values was 33.4%, with a median error of 23.9%. ([[2024-tarchi|Tarchi, 2024, p. 61]])
- P-wave velocity (VP) at a constant depth (z=5m) shows a slight decrease in velocity as SW increases from 0 to 0.9, followed by a sharp increase once full saturation is reached. ([[2024-tarchi|Tarchi, 2024, p. 31]])

## Limitations

The inversion results showed higher values than measured values at shallow depths, potentially due to water added during the physical installation of electrodes into the sand during the resistivity survey. The study assumed a pure quartz matrix and a constant porosity of 0.35 for conversion purposes.

## Recommendations and Future Work

- Try different models other than the CRIM and Gassmann-Hertz-Mindlin models.
- Apply the same method to other soil types, such as sabkha.
- Explore other global minimization techniques.

## Related Concepts

- [[electrical-resistivity-tomography]]
- [[seismic-interpretation]]
- [[mathematical-modeling]]
- [[water-saturation]]
- [[acoustic-impedance]]
- [[dammam-area]]
- [[quaternary-sediments]]
- [[near-surface-geophysics]]
- [[hydrogeology]]
