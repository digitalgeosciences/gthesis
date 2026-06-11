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
study_area: "Barchan sand dune in Dammam, Eastern Province, Saudi Arabia (Al Jafurah dune field)"
keywords:
  - Water saturation
  - Sand dunes
  - Electrical conductivity
  - Seismic methods
  - Joint inversion
  - Complex refractive index method (CRIM)
  - Gassmann-Hertz-Mindlin model
  - P-wave velocity
  - porosity
  - sand dune
techniques:
  - electrical-resistivity-tomography
  - well-log-analysis
  - seismic-interpretation
  - seismic-inversion
  - velocity-analysis
  - matlab
  - petrophysics
tags:
  - degree/ms
  - formation/quaternary-sediments
  - location/eastern-province
  - location/saudi-arabia
  - location/dammam-area
  - technique/electrical-resistivity-tomography
  - technique/seismic-inversion
  - technique/velocity-analysis
  - technique/seismic-interpretation
  - technique/well-log-analysis
  - technique/matlab
  - technique/petrophysics
  - theme/petrophysics
  - theme/near-surface-geophysics
  - theme/hydrogeology
  - terminology/water-saturation
  - terminology/complex-refractive-index-method
  - terminology/gassmann-modeling
  - terminology/porosity
  - terminology/petrophysics
status: ingested
---

# Estimation of water saturation in a sand dune using electrical conductivity and seismic methods

**Summary**: The thesis investigates the estimation of water saturation (Sw) in sand dunes using a joint inversion of electrical conductivity and seismic P-wave velocity data. It utilizes the CRIM model for conductivity and the Gassmann-Hertz-Mindlin model for seismic velocities to characterize water content in dry regions.

---

## Research Problem

Determining water saturation (Sw) in sand dunes is essential for human activity in desert areas, but it is difficult to investigate directly. Specifically, the thesis addresses the challenge of distinguishing between low-to-moderate saturation levels using only P-wave velocity due to minimal variation in velocity until full saturation is reached.

## Objectives

- Use joint inversion of seismic and conductivity measurements to characterize water saturation in sand dunes.
- Develop a procedure for inverting Sw from measured electric conductivity (C) and seismic P-wave velocities (Vp).
- Compare inverted results with laboratory-measured water content and literature data.
- Develop a joint inversion method for estimating water saturation (Sw) from seismic and electrical conductivity data.
- Establish a relationship between P-wave velocity, electrical conductivity, and water saturation using CRIM and Gassmann models.
- Evaluate the feasibility of determining Sw in loose sand with saturation levels ranging from 0 to 0.9.
- Validate the inversion method using real data from a Barchan sand dune in Eastern Saudi Arabia.
- Develop a procedure for inverting Sw from measurements of electrical conductivity and seismic P-wave velocities (Vp).

## Methods

The study utilizes a joint inversion approach where P-wave velocity (Vp) and electrical conductivity (C) are used to determine Sw. The methodology involves: 1) Solving the Complex Refrractive Index Model (CRIM) for porosity ($\phi$) as a function of $C$ and $Sw$. 2) Substituting $\phi(C, Sw)$ into the Vp equation to create an objective function $Vp(C, Sw)$. 3) Minimizing the Relative Absolute Error (RAE) between measured and calculated P-wave velocities. The inversion is performed using Mathematica's FindMinimum and Minimize functions with multiple starting points to avoid local minima.

## Data and Materials

The study uses data from a Barchan sand dune in Dammam, Eastern Province, Saudi Arabia. Data includes: 10 sets of P-wave velocity measurements at specific depths (0.1m to 6.4m), 10 sets of electrical conductivity measurements (17.4 to 85.18 mS/cm) from an ERT survey with 96 electrodes, and 10 borehole samples for direct water content measurement.

## Key Findings

- The inversion procedure yielded Sw values with a minimum of 0.04566, a maximum of 0.09945, and a median of 0.05142. ([[2024-tarchi|Tarchi, 2024, p. 14]])
- Experimental measurements for Sw showed a minimum of 0.01389, a maximum of 0.11198, and a median of 0.04571. ([[2024-tarchi|Tarchi, 2024, p. 14]])
- Both inverted and measured water saturation values indicated a dry sand dune, which is sufficient for most practical applications. ([[2024-tarchi|Tarchi, 2024, p. 14]])
- The median water content from literature data across various global locations was calculated as 0.0343 m3/m3. ([[2024-tarchi|Tarchi, 2024, p. 18]])
- The inversion method successfully eliminated the dependence on porosity by using the CRIM model to relate conductivity and saturation. ([[2024-tarchi|Tarchi, 2024, p. 36]])
- P-wave velocity shows a sharp increase only when full saturation is reached, making it difficult to distinguish between dry and partially saturated states without additional data like electrical conductivity. ([[2024-tarchi|Tarchi, 2024, p. 31]])
- The median water content of the inverted values was 0.018, while the median of the measured values was 0.016, both indicating a very dry sand dune. ([[2024-tarchi|Tarchi, 2024, p. 55]])
- The average error between measured and inverted water content (WC) was 33.4%, with a median error of 23.9%. ([[2024-tarchi|Tarchi, 2024, p. 61]])
- Inverted Sw values ranged from 0.0457 to 0.0994, while measured Sw values ranged from 0.0139 to 0.1120. ([[2024-tarchi|Tarchi, 2024, p. 57]])
- A procedure for inverting Sw from measurements of electric conductivity and seismic P-wave velocities (Vp) is established as a primary method for characterization. ([[2024-tarchi|Tarchi, 2024, p. 69]])

## Limitations

The study notes that the inversion may be affected by local minima in optimization algorithms and potential noise or measurement errors. Additionally, it acknowledges that while a pure quartz matrix was assumed for simplicity, real dunes contain minor amounts of other minerals.

## Recommendations and Future Work

- Try different models other than the CRIM and Gassmann-Hertz-Mindlin models.
- Apply the same method to other soil types, such as sabkha.
- Explore other global minimization techniques.

## Related Concepts

- [[electrical-resistivity-tomography]]
- [[seismic-inversion]]
- [[water-saturation]]
- [[complex-refractive-index-method]]
- [[gassmann-modeling]]
- [[petrophysics]]
- [[eastern-province]]
- [[near-surface-geophysics]]
- [[seismic-interpretation]]
- [[porosity]]
- [[dammam-area]]
- [[saudi-arabia]]
- [[hydrogeology]]
