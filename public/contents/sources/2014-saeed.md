---
type: source
id: "139215"
title: "Joint Inversion of Gravity and Ground Penetrating Radar Data to Characterize Subsurface Cavities"
author: "Abdullah F Mohammed Saeed"
year: 2014
department: "Geosciences"
degree: "MS"
supervisor: "Abdullatif Al-Shuhail"
committee_members:
  - "Sanlinn Ismail Kaka"
  - "Khalid Alramadan"
source_file: "raw/139215 - Joint Inversion of Gravity and Ground Penetrating Radar Data to Characterize Sub.pdf"
url: "https://eprints.kfupm.edu.sa/id/eprint/139215/"
study_area: "Not stated in source"
keywords:
  - subsurface cavities
  - gravity method
  - ground penetrating radar (GPR)
  - joint inversion
  - porosity
  - water saturation
  - Gravity
  - Petrophysical Properties
techniques:
  - gravity-surveys
  - ground-penetrating-radar
  - petrel
  - matlab
tags:
  - degree/ms
  - technique/gravity-surveys
  - technique/ground-penetrating-radar
  - technique/matlab
  - theme/near-surface-geophysics
  - theme/geophysics-general
  - theme/petrophysics
  - theme/applied-geophysics
  - terminology/porosity
  - terminology/water-saturation
  - terminology/joint-inversion
status: ingested
---

# Joint Inversion of Gravity and Ground Penetrating Radar Data to Characterize Subsurface Cavities

**Summary**: The thesis develops and validates a new joint inversion method using gravity and ground penetrating radar (GPR) data to estimate porosity and water saturation of materials within subsurface cavities. The study uses synthetic data to demonstrate that the approach provides accurate results, with errors in porosity and water saturation remaining below 2.51%.

---

## Research Problem

Characterizing the contents of subsurface cavities (e.g., those formed by dissolution or human activity) is critical for hydrogeological, environmental, and engineering studies; however, single methods may not provide sufficient information to distinguish between different filling materials like air, water, or sediment.

## Objectives

- Provide an efficient approach that combines gravity and GPR data sets to determine porosity and water saturation of subsurface cavities filling materials.
- Develop a quantitative approach by using a joint inversion technique.
- Test the developed methodology using synthetic GPR and gravity data sets.
- Develop a joint inversion approach combining gravity and GPR data.
- Establish porosity and water saturation as the link between dielectric permittivity (GPR) and density (gravity).
- Test the methodology using five synthetic models of cavity-filling materials.
- Develop a joint inversion approach for GPR and gravity data to determine porosity and water saturation.
- Validate the method using synthetic datasets representing various cavity-filling materials (air, water, dry sand, partially saturated sand, fully saturated sand).
- Perform sensitivity analysis on the impact of incorrect matrix density and dielectric permittivity values on inversion results.

## Methods

The study utilizes a petrophysical approach where porosity ($\phi$) and water saturation ($S_w$) are the primary variables. GPR data provides information on dielectric permittivity via the Complex Refractive Index Model (CRIM), while gravity data provides information on bulk density through a porosity-density relationship. The thesis derives two main equations: one for $\sqrt{\epsilon_b}$ based on GPR travel times and gravity anomaly width, and another for $\rho_b$ based on the gravity anomaly magnitude. These are solved simultaneously to determine $\phi$ and $S_w$. Synthetic data were generated using a forward modeling split-step algorithm (MATGPR) for GPR and analytical expressions/Matlab scripts for gravity.

## Data and Materials

The study used 5 synthetic models of cavity-filling materials: (1) pure air, (2) pure water, (3) dry sand, (4) partially saturated sand, and (5) fully saturated sand. Each model was simulated in a 20m x 10m area with a limestone background and a shale bedrock.

## Key Findings

- The proposed joint inversion method is accurate in retrieving correct porosity and water saturation values within a 2.5% error. ([[2014-saeed|Saeed, 2014, p. 17]])
- GPR and gravity methods are effective for detecting cavities due to the contrast in physical properties (dielectric permittivity and density) between cavity fill and surrounding rock. ([[2014-saeed|Saeed, 2014, p. 21]])
- The joint inversion of GPR and gravity data minimizes uncertainty by solving for both porosity and water saturation simultaneously using shared parameters. ([[2014-saeed|Saeed, 2014, p. 22]])
- The joint inversion approach successfully estimated porosity and water saturation for all five synthetic models with high accuracy, with the highest absolute percentage error being 2.51% for water saturation and 1.67% for porosity. ([[2014-saeed|Saeed, 2014, p. 46]])
- For a cavity filled with pure air (Model 1), the inversion yielded a porosity of 1.01587 and a water saturation of 0.00206 (errors of 1.6% and 0.21%). ([[2014-saeed|Saeed, 2014, p. 46]])
- For a cavity filled with pure water (Model 2), the inversion yielded a porosity of 1.00657 and a water saturation of 1.00753 (errors of 0.7% and 0.8%). ([[2014-saeed|Saeed, 2014, p. 46]])
- For a cavity filled with dry sand (Model 3), the inversion yielded a porosity of 0.304795 and a water saturation of 0.011623 (errors of 1.6% and 1.16%). ([[2014-saeed|Saeed, 2014, p. 46]])
- For a cavity filled with partially saturated sand (Model 4), the inversion yielded a porosity of 0.30229 and a water saturation of 0.48801 (errors of 0.76% and 2.4%). ([[2014-saeed|Saeed, 2014, p. 46]])
- For a cavity filled with fully saturated sand (Model 5), the inversion yielded a porosity of 0.29499 and a water saturation of 0.97493 (errors of 1.67% and 2.51%). ([[2014-saeed|Saeed, 2014, p. 46]])
- The GPR travel time for the interface beneath a cavity filled with pure air was calculated at 83.34 ns, while the distance to the center of the cavity was determined using the half-width method (1.305 * x_half). ([[2014-saeed|Saeed, 2014, p. 47]])
- The maximum gravity anomaly for a cavity filled with pure air was -0.0000792 $\mu$Gal, while for fully saturated sand it was -0.0000123 $\mu$Gal. ([[2014-saeed|Saeed, 2014, p. 58]])
- The joint inversion approach successfully estimated porosity and water saturation for various materials (air, water, dry sand, partially saturated sand, fully saturated uddered sand) with high accuracy. ([[2014-saeed|Saeed, 2014, p. 56]])
- The maximum error recorded in the study was 2.51% for water saturation and 1.67% for porosity. ([[2014-saeed|Saeed, 2014, p. 56]])
- The minimum errors observed were 0.2% for water saturation and 0.7% for porosity. ([[2014-saeed|Saeed, 2014, p. 56]])
- The inversion process is more sensitive to the matrix density than dielectric permittivity when estimating porosity. ([[2014-saeed|Saeed, 2014, p. 51]])

## Limitations

The accuracy of the results depends heavily on the availability and precision of matrix density and dielectric permittivity values; if these are unknown or incorrect, the inversion will yield high errors. Additionally, real-world applications face challenges regarding microgravity anomaly corrections due to topographic variations and gravimeter precision.

## Recommendations and Future Work

- Extend the joint inversion approach to non-spherical cavity shapes (e.g., irregular shapes, horizontal sheets).
- Incorporate other rock-physics models such as Topp's equation or Bruggeman-Hanai-Sen (BHS) instead of CRIM.
- Integrate additional geophysical tools like seismic and electrical resistivity into the multi-sensor inversion.

## Related Concepts

- [[gravity-survey]]
- [[ground-penetrating-radar]]
- [[porosity]]
- [[water-saturation]]
- [[near-surface-geophysics]]
- [[joint-inversion]]
- [[matlab]]
- [[petrophysics]]
- [[applied-geophysics]]
