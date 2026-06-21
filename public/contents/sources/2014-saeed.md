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
  - Gravity survey
techniques:
  - gravity-surveys
  - ground-penetrating-radar
  - matlab
  - matgpr
tags:
  - degree/ms
  - technique/gravity-surveys
  - technique/ground-penetrating-radar
  - technique/matlab
  - theme/near-surface-geophysics
  - terminology/porosity
  - terminology/water-saturation
  - terminology/karst-hazards
  - terminology/joint-inversion
status: ingested
---

# Joint Inversion of Gravity and Ground Penetrating Radar Data to Characterize Subsurface Cavities

**Summary**: The thesis proposes a new joint inversion approach combining gravity and ground penetrating radar (GPR) data to determine the porosity and water saturation of materials filling subsurface cavities. The method was validated using synthetic datasets for five different cavity types, showing accuracy within 2.5% error.

---

## Research Problem

Characterizing subsurface cavities (formed naturally or by human action) is critical for hydrogeological, environmental, and engineering studies; however, determining specific properties like porosity and water saturation of the filling material requires robust geophysical interpretation methods.

## Objectives

- Develop an efficient approach that combines gravity and GPR data sets to determine porosity and water saturation of subsurface cavities filling materials.
- Implement a quantitative approach by using a joint inversion technique.
- Test the proposed methodology using synthetic GPR and gravity data sets.
- Develop a joint inversion approach to estimate porosity and water saturation from GPR and gravity measurements
- Evaluate the accuracy of the proposed method using synthetic data for various cavity-filling materials (air, water, dry sand, partially saturated sand, fully saturated sand)

## Methods

The study utilizes two primary geophysical methods: gravity survey (measuring density contrasts) and ground penetrating radar (GPR, measuring dielectric permittivity). A joint inversion is performed by linking these techniques through petrophysical models: the porosity-density relationship (Eq. 2.7) and the Complex Refractive Index Model (CRIM) for dielectric permittivity (Eq. 2.10). These two equations are solved simultaneously to derive porosity ($\phi$) and water saturation ($S_w$). The methodology was tested using five synthetic models of cavity fillings: pure air, pure water, dry sand, partially saturated sand, and fully saturated sand. Synthetic data were generated via forward modeling (MATGPR for GPR and analytical expressions for gravity).

## Data and Materials

The study tested five synthetic models representing different materials within a spherical cavity: air, water, dry sand, partially saturated sand, and fully saturated sand. The basic model included a 10m x 20m slab with a 1m radius sphere at a depth of 3m.

## Key Findings

- The joint inversion method accurately retrieved porosity and water saturation values within a 2.5% error across all five synthetic models. ([[2014-saeed|Saeed, 2014, p. 17]])
- For a cavity filled with pure water, the inverted porosity was 1.00657 (0.7% error) and water saturation was 1.00753 (0.8% error). ([[2014-saeed|Saeed, 2014, p. 46]])
- For a cavity filled with partially saturated sand, the inverted porosity was 0.30229 (0.76% error) and water saturation was 0.48801 (2.4% error). ([[2014-saeed|Saeed, 2014, p. 46]])
- The inversion of water saturation is more sensitive to errors in matrix dielectric permittivity than to matrix density. ([[2014-saeed|Saeed, 2014, p. 52]])
- The joint inversion approach successfully determined porosity and water saturation for five types of cavity-filling materials (air, water, dry sand, partially saturated sand, and fully saturated sand). ([[2014-saeed|Saeed, 2014, p. 75]])
- The study reported high accuracy results with errors less than 2.51% overall. ([[2014-saeed|Saeed, 2014, p. 76]])
- For water saturation, the highest error was 2.51% and the lowest was 0.2%. ([[2014-saeed|Saeed, 2014, p. 76]])
- For porosity, the highest error was 1.67% and the lowest was 0.7%. ([[2014-saeed|Saeed, 2014, p. 76]])
- The results produced by joint inversion are sensitive to incorrect matrix density and dielectric permittivity values. ([[2014-saeed|Saeed, 2014, p. 76]])

## Limitations

The method is highly sensitive to the accuracy of input parameters for matrix density and dielectric permittivity. Application to real data may be challenging due to the need for precise microgravity corrections (topography/instrument precision) and accurate material properties.

## Recommendations and Future Work

Extend the approach to non-spherical cavity shapes, incorporate other rock-physics models like Topp's equation or Bruggeman-Hanai-Sen (BHS), and integrate additional geophysical tools such as seismic or electrical resistivity.

## Related Concepts

- [[gravity-surveys]]
- [[ground-penetrating-radar]]
- [[matlab]]
- [[porosity]]
- [[water-saturation]]
- [[near-surface-geophysics]]
- [[karst-hazards]]
- [[joint-inversion]]
