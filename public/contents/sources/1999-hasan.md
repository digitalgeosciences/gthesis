---
type: source
id: "9963"
title: "Effect of formation damage on horizontal well performance"
author: "Syed Sajid Hasan"
year: 1999
department: "Petroleum Engineering"
degree: "PhD"
supervisor: "Dr. AbdulAziz Al-Majed"
committee_members: []
source_file: "raw/9963 - Effect of formation damage on horizontal well performance..pdf"
url: "https://eprints.kfupm.edu.sa/9963"
study_area: "Middle East (referenced as a region for parametric data)"
keywords:
  - formation damage
  - horizontal well
  - well performance
  - skin factor
  - inflow performance
  - pressure drop
  - petroleum engineering
  - multi-phase flow
  - wellbore friction
  - skin profile
  - reservoir anisotropy
  - well length
  - well diameter
  - open percentage
  - friction forces
techniques:
  - reservoir-simulation
  - mathematical-modeling
  - core-analysis
  - core-flooding
  - petrophysics
tags:
  - degree/phd
  - location/middle-east-region
  - technique/reservoir-simulation
  - technique/mathematical-modeling
  - technique/core-analysis
  - technique/core-flooding
  - technique/petrophysics
  - theme/petroleum-engineering
  - theme/petrophysics
  - theme/reservoir-engineering
  - terminology/skin-factor
  - terminology/petrophysics
  - terminology/anisotropy
  - terminology/skin
status: ingested
---

# Effect of formation damage on horizontal well performance

**Summary**: The thesis investigates the impact of formation damage (skin factor) and wellbore friction on the production performance of horizontal wells. It utilizes mathematical modeling and computer simulations to evaluate how different skin profiles, completion types, and reservoir geometries influence flow behavior.

---

## Research Problem

The complex nature of formation damage in horizontal wells—characterized by non-uniform skin distributions and interaction with wellbore friction—makes it difficult to predict performance using standard single-value skin models used for vertical wells.

## Objectives

- Develop a computer model in the FORTRAN language to simulate fluid flow between the reservoir and the wellbore.
- Account for the combined effects of inflow performance, wellbore friction, and formation damage along the horizontal wellbore.
- Evaluate the impact of specific parameters such as skin profiles (varying degrees of damage), reservoir height, anisotropy, well length, diameter, and open fraction on horizontal well performance.
- Perform a parametric study to compare results with existing literature.
- To analyze the effect of wellbore friction on production rates in horizontal wells.
- To model the combined effects of formation damage and frictional pressure drop on flow behavior.

## Methods

The thesis employs mathematical modeling and computer simulations (using FORTRAN-based logic) to calculate inflow performance. It incorporates several components: 1) Inflow performance using modified equations for partially/selectively perforated wells; 2) Skin distribution analysis considering non-uniform damage along the well length; 3) Outflow performance using multi-phase flow correlations (Beggs and Brill) to account for frictional pressure drops; 4) Iterative calculation of pressure and flow rate distributions across the wellbore. A parametric study is conducted by varying dimensionless parameters like LD (length ratio), HD (height ratio), and skin values.

## Data and Materials

The thesis utilizes a set of theoretical models, several case studies for different skin profiles (linear, polynomial, constant), and a parametric dataset from the Middle East including reservoir dimensions (up to 4000 ft length), well diameters (0.375-0.5 ft), and various skin values (S=0 to S=30).

## Key Findings

- Horizontal wells are less sensitive to formation damage than vertical wells because the larger contact area compensates for the damaged zone, though severe damage can still significantly reduce flow efficiency. ([[1999-hasan|Hasan, 1999, p. 52]])
- The study identifies four main categories of formation damage: mechanically induced (fines migration, solids entrainment), chemically induced (clay swelling, wax deposition), biologically induced (bacterial growth), and thermally induced (mineral transformations). ([[1999-hasan|Hasan, 1999, p. 60]])
- A single-value skin approach is often inaccurate for horizontal wells because it fails to account for the non-uniform distribution of damage caused by longer exposure times during drilling. ([[1999-hasan|Hasan, 1999, p. 24]])
- The model successfully integrated inflow performance, wellbore friction, and variable skin distribution to predict production rates under different reservoir conditions. ([[1999-hasan|Hasan, 1999, p. 21]])
- Pressure drop along the horizontal well is calculated using the Beggs and Brill method, which accounts for flow regimes (segregated, transition, intermittent, distributed). ([[1999-hasan|Hasan, 1999, p. 45]])
- A skin factor of S=20 in a horizontal well with a geometric factor of 2.25 results in a 58% reduction in production rate compared to an undamaged well. ([[1999-hasan|Hasan, 1999, p. 60]])
- The difference in flow rates between a constant skin profile and a realistic, varying skin profile can reach up to 100% error when friction is significant (e.g., for a 3000ft well with 4.5-inch diameter). ([[1999-hasan|Hasan, 1999, p. 131]])
- In some cases, the combination of a specific damage profile and frictional pressure drop can result in a nearly uniform influx along the well length. ([[1999-hasan|Hasan, 1999, p. 83]])
- A field case study showed that approximately 240 ft (21% of well length) contributed only 13% of total production due to damage and perforation issues. ([[1999-hasan|Hasan, 1999, p. 103]])
- For a 1000ft well with 6-inch diameter, the difference in performance between Case-1 (constant skin) and Case-4 (polynomial skin) is approximately 25%. ([[1999-hasan|Hasan, 1999, p. 130]])
- In cases of high damage at the heel, a reduction in well open percentage can be sustained without significant loss if the reservoir is thin (HD < 0.01). ([[1999-hasan|Hasan, 1999, p. 143]])
- Using a single value of skin in productivity models instead of an actual distribution can lead to errors in calculating well performance of up to 80%. ([[1999-hasan|Hasan, 1999, p. 176]])
- The impact of friction forces is more significant when the difference between constant and non-constant skin profiles is considered, even if they share the same average skin value. ([[1999-hasan|Hasan, 1999, p. 178]])
- Lower degrees of damage (lower skin values) result in a more significant reduction in well performance compared to higher degrees of damage when anisotropy increases. ([[1999-hasan|Hasan, 1999, p. 187]])
- The study found that for thin reservoirs and shorter well lengths, the loss of production due to restricted perforated length is not significant; however, as reservoir height increases, the performance becomes more sensitive to the well open percentage. ([[1999-hasan|Hasan, 1999]])

## Limitations

The study notes that some analytical models for skin are simplified by assuming constant values, which may not accurately represent the actual distribution of damage along a horizontal well.

## Recommendations and Future Work

Not stated in source

## Related Concepts

- [[reservoir-simulation]]
- [[skin-factor]]
- [[petrophysics]]
- [[core-analysis]]
- [[anisotropy]]
- [[skin]]
- [[reservoir-engineering]]
- [[middle-east-region]]
