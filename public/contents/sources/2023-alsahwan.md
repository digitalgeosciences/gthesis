---
type: source
id: "142466"
title: "ESTIMATION OF WATER SATURATION IN A SAND DUNE FROM DIVING DIRECT SEISMIC P-WAVES"
author: "Abdullah Al Sahwan"
year: 2023
department: "Geosciences"
degree: "MS"
supervisor: "Abdullatif Al-Shuhail"
committee_members:
  - "Sherif Hanafy"
  - "Mohammed Benaafi"
source_file: "raw/142466 - ESTIMATION OF WATER SATURATION IN A SAND DUNE FROM DIVING DIRECT SEISMIC P-WAVES.pdf"
url: "https://eprints.kfupm.edu.sa/id/eprint/142466/"
study_area: "Barchan dune in Dammam, Eastern Province, Saudi Arabia"
keywords:
  - Water Saturation
  - Seismic P-waves
  - Diving Direct P-waves
  - Gassmann Model
  - Hertz-Mindlin Theory
  - Unconsolidated Sediments
  - unconsolidated sediment
  - Hertz-Mindlin model
  - seismic inversion
  - Seismic P-wave velocity (VP)
  - Water saturation (SW)
techniques:
  - refraction-seismics
  - well-log-analysis
  - petrophysics
  - seismic-interpretation
  - velocity-analysis
  - matlab
  - ground-penetrating-radar
  - electrical-resistivity-tomography
  - mathematical-modeling
tags:
  - degree/ms
  - location/eastern-province
  - location/saudi-arabia
  - location/dammam-area
  - technique/refraction-seismics
  - technique/petrophysics
  - technique/seismic-interpretation
  - technique/velocity-analysis
  - technique/matlab
  - technique/ground-penetrating-radar
  - technique/electrical-resistivity-tomography
  - technique/well-log-analysis
  - technique/mathematical-modeling
  - theme/geophysics-general
  - theme/petrophysics
  - theme/near-surface-geophysics
  - terminology/water-saturation
  - terminology/gasmann-modeling
  - terminology/pore-radius
  - terminology/pore-fluid
  - terminology/mineralogy
  - terminology/porosity
  - terminology/velocity-modeling
  - terminology/sedimentology
  - terminology/petrophysics
status: ingested
---

# ESTIMATION OF WATER SATURATION IN A SAND DUNE FROM DIVING DIRECT SEISMIC P-WAVES

**Summary**: The thesis proposes a method to estimate water saturation (SW) in partially saturated unconsolidated sediments, specifically sand dunes, using diving direct seismic P-waves. The study utilizes Gassmann and Hertz-Mindlin models to establish a relationship between P-wave velocity and water saturation, successfully testing the method on both synthetic data and real samples from eastern Saudi Arabia.

---

## Research Problem

Standard seismic refraction methods are effective at identifying fully saturated zones but cannot accurately quantify partial water saturation in unconsolidated sediments like sand dunes. There is a need for a robust methodology to estimate SW values in these environments using available mineralogy and pore-fluid data.

## Objectives

- Develop a method to estimate water saturation (SW) in partially saturated unconsolidated sediments using diving direct P-waves.
- Establish a relationship between P-wave velocity (VP) and water saturation (SW) using Gassmann and Hertz-Mindlin models.
- Validate the proposed methodology using synthetic data with varying SW levels.
- Evaluate the performance of the method on real field data from sand dunes in eastern Saudi Arabia.
- Establish a relationship between P-wave velocity and water saturation using Gassmann and Hertz-Mindlin models.
- Invert SW as a function of the maximum penetration depth of the diving direct wave at each observed offset.
- Validate the proposed inversion method using both synthetic data and real field samples from a sand dune in Dammam.
- Propose a method to estimate SW in partially saturated unconsolidated sediments using diving direct P-waves
- Utilize velocity profiles from Gassmann and Hertz-Mindlin models to construct a VP (SW) relationship

## Methods

The study uses a multi-step workflow: 1. Calculate maximum penetration depth (h) from observed offsets using a specific geometric formula. 2. Establish a P-wave velocity profile $V_P(z, S_W)$ based on Gassmann and Hertz-Mindlin models for the sediment matrix and pore fluid. 3. Define an objective function as the Normalized Squared Error (NSE) between measured travel times ($T_0$) and calculated travel times from the $V_P$ profile. 4. Use numerical integration (via Mathematica or similar methods) to calculate travel times. 5. Perform minimization of the NSE using multiple starting points to find the global minimum for $S_W$. The study also compares results using different assumptions for matrix mineralogy and porosity.

## Data and Materials

The study utilizes data from a Barchan dune in Dammam, Saudi Arabia. It includes 10 specific sand samples collected at various depths (0.1m to 6.45m) with measured properties (porosity, water content, and mineralogy). Additionally, the method was tested on synthetic data representing a range of saturation values from 0 to 0.9.

## Key Findings

- The proposed method for estimating SW using synthetic data resulted in accurate values within a 2% error margin across the range of 0 to 0.9 saturation. ([[2023-alsahwan|AlSahwan, 2023, p. 11]])
- While individual inverted and measured values at specific depths showed some variation, both sets of results collectively indicated that the sampled dune was dry. ([[2023-alsahwan|AlSahwan, 2023, p. 11]])
- The median values for both measured and inverted SW in the study area were comparable to medians reported for dry sand dunes globally. ([[2023-alsahwan|AlSahwan, 2023, p. 11]])
- Seismic P-wave velocity (VP) in unconsolidated sediment shows a slight decrease with water saturation until full saturation, where it jumps significantly. ([[2023-alsahwan|AlSahwan, 2023, p. 11]])
- The proposed inversion method successfully estimated all assumed synthetic SW values between 0 and 0.9 with a maximum error of only 2% and a median error of approximately 0%. ([[2023-alsahwan|AlSahwan, 2023, p. 43]])
- P-wave velocity ($V_P$) in unconsolidated sediment decreases slightly as water saturation increases until it reaches full saturation, where $V_P$ jumps significantly due to the increase in bulk modulus. ([[2023-alsahwan|AlSahwan, 2023, p. 29]])
- The study area (Dammam dune) shows a partially saturated zone up to 7.6 m deep within the dune and a fully saturated zone in the underlying sabkha. ([[2023-alsahwan|AlSahwan, 2023, p. 38]])
- Measured water content for the real samples ranged from 0.005 to 0.0385 $m^3/m^3$, while inverted values were between 0.0001365 and 0.004816 $m^3/m^3$. ([[2023-alsahwan|AlSahwan, 2023, p. 47]])
- Both measured and inverted water content values in the studied dune indicate a generally dry sand dune, consistent with global data for similar environments. ([[2023-alsahwan|AlSahwan, 2023, p. 47]])
- Seismic P-wave velocity (VP) in an unconsolidated sediment slightly decreases with water saturation (SW) until full saturation, where VP value suddenly jumps. ([[2023-alsahwan|AlSahwan, 2023, p. 11]])
- The proposed method utilizes diving direct P-waves to overcome the limitations of standard seismic interpretation in partially saturated sands. ([[2023-alsahwan|AlSahwan, 2023, p. 11]])

## Limitations

The current method provides an average saturation value along the curved raypath of the diving wave rather than an interval-specific value. The study was primarily tested on very dry sand dunes, and its performance in highly saturated environments is not fully explored.

## Recommendations and Future Work

- Generalize the method to account for different matrix types (e.g., clay-rich) and higher pore fluid saturation levels.
- Improve the method to invert for interval-specific water saturation rather than average values along the raypath.
- Test the proposed method on highly saturated sand dunes.

## Related Concepts

- [[seismic-refraction]]
- [[petrophysics]]
- [[water-saturation]]
- [[gasmann-modeling]]
- [[eastern-province]]
- [[pore-radius]]
- [[pore-fluid]]
- [[mineralogy]]
- [[porosity]]
- [[velocity-modeling]]
- [[sedimentology]]
- [[velocity-analysis]]
- [[seismic-inversion]]
- [[dammam-area]]
- [[near-surface-geophysics]]
- [[mathematical-modeling]]
