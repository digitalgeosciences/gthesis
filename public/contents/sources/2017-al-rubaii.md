---
type: source
id: "140578"
title: "THE IMPACT OF HOLE CLEANING ON RATE OF PENETRATION"
author: "MOHAMMED MURIF AL-RUBAII"
year: 2017
department: "Petroleum Engineering"
degree: "Master of Science"
supervisor: "Dr. Abdulaziz A. Al-Majed"
committee_members: []
source_file: "raw/140578 - THE IMPACT OF HOLE CLEANING ON RATE OF PENETRATION.pdf"
url: "https://eprints.kfupm.edu.sa/140578"
study_area: "Not stated in source"
keywords:
  - Hole cleaning
  - Rate of penetration
  - Drilling fluid
  - Mud rheology
  - Cuttings transport
  - Wellbore stability
  - drilling mud rheology
  - carrying capacity index
  - cutting concentration in annulus
  - drilling specific energy
  - particle swarm optimization
  - drilling parameters
techniques:
  - mathematical-modeling
  - particle-swarm-optimization
  - petrophysics
  - statistical-analysis
  - matlab
  - nonlinear-regression
tags:
  - technique/mathematical-modeling
  - technique/petrophysics
  - technique/particle-swarm-optimization
  - technique/statistical-analysis
  - technique/matlab
  - technique/nonlinear-regression
  - theme/petroleum-engineering
  - theme/drilling-engineering
  - terminology/hole-cleaning
  - terminology/petroleum-engineering
  - terminology/porosity
  - terminology/plastic-viscosity
  - terminology/yield-point
  - terminology/drilling-specific-energy
  - terminology/carrying-capacity-index
  - terminology/cutting-concentration-in-annulus
  - terminology/calculation-of-accuracy
  - terminology/drilling-rate
  - terminology/drill-string-efficiency
  - terminology/nonlinear-regression
status: ingested
---

# THE IMPACT OF HOLE CLEANING ON RATE OF PENETRATION

**Summary**: The thesis investigates the impact of hole cleaning on the rate of penetration (ROP) in drilling operations. It develops a mathematical model using parameters like Carrying Capacity Index (CCI) and Cutting Concentration in Annulus (CCA) to optimize mud rheology and drilling parameters, ultimately aiming to increase ROP and reduce Drill String Efficiency (DSE).

---

## Research Problem

Inadequate hole cleaning is responsible for approximately 33% of stuck pipe incidents, while the rate of penetration is strongly linked to hole cleaning. Existing indicators like Transport Ratio or Hole Cleaning Ratio often lack sufficient accuracy due to unknown variables like cuttings size/density and flow patterns.

## Objectives

- Study the impact of hole cleaning on drilling rate to ensure optimum performance and mitigate stuck pipe problems.
- Determine the significance of mud rheological properties on estimating Carrying Capacity Index (CCI).
- Simultaneously monitor and control CCI and Cuttings Concentration in Annulus (CCA) to optimize drilling operations.
- Develop a new hole cleaning model based on monitoring and control of Carrying Capacity Index (CCI) and Cutting Concentration in Annulus (CCA).
- Observe the drilling rate change after achieving optimum hole cleaning.
- Confirm optimum drilling rate using Drilling Specific Energy (DSE).

## Methods

The research follows a three-phase methodology: Phase I involves collecting and screening field data to identify significant parameters including flow rate, rotation speed, torque, WOB, mud weight, and rheological properties (PV, YP, Gels). Phase II evaluates the impact of mud rheology and drilling hydraulics on indicators like CCI, CCA, and DSE. Phase III develops a model using these relationships to optimize ROP by determining target ROP based on CCA limits and selecting parameters via Particle Swarm Optimization (PSO).

## Data and Materials

Data from several well sections were used: four vertical sections (2000 ft, 1200 ft, 400 ft, and 1800 ft) and one horizontal section (3000 ft). Data included ROP, DSE, Torque, RPM, WOB, Flow Rate (Q), Plastic Viscosity (PV), and Yield Point (YP).

## Key Findings

- Inadequate hole cleaning is responsible for approximately 33% of stuck pipe incidents. ([[2017-al-rubaii|AL-RUBAII, 2017, p. 21]])
- The new hole cleaning model improved well drilling performance by more than 55%. ([[2017-al-rubaii|AL-RUBAII, 2017, p. 22]])
- The model successfully mitigated stuck pipe incidents and eliminated wiper trips, reaming trips, and pumping of sweeps. ([[2017-al-rubaii|AL-RUBAII, 2017, p. 22]])
- A higher plastic viscosity (PV) leads to increased pressure drop at the bit, which reduces flow rate and lifting ability. ([[2017-al-rubaii|AL-RUBAII, 2017, p. 45]])
- The relationship between ROP and PV shows that a decrease in PV allows for higher penetration rates due to lower resistance at the bit. ([[2017-al-rubaii|AL-RUBAII, 2017, p. 46]])
- A flow behavior index (n) of less than 1 indicates shear-thinning mud, which is preferred for optimizing ROP. ([[2017-al-rubaii|AL-RUBAII, 2017, p. 47]])
- The Reynolds number (Rn) determines the flow regime: Plug (<2100), Laminar (<2100), Transition (2100-3200), and Turbulent (>3200). ([[2017-al-rubaii|AL-RUBAII, 2017, p. 33]])
- Cuttings concentration in the annulus (CCA) exceeding 5% can lead to a 'tight' hole, stuck pipe, and loss of circulation. ([[2017-al-rubaii|AL-RUBAII, 2017, p. 26]])
- A yield point (YP) range for various mud weights was established to ensure sufficient transport capacity. ([[2017-al-rubaii|AL-RUBAII, 2017, p. 50]])
- The ratio of YP over PV has a strong direct relationship with the consistency index (K); an increase in this ratio ensures mud consistency is maintained under conditions like dilution or high temperature. ([[2017-al-rubaii|AL-RUBAII, 2017, p. 122]])
- The ratio of PV over YP has a strong direct relationship with the flow behavior index (n). ([[2017-al-rubaii|AL-RUBAII, 2017, p. 122]])
- the proposed model resulted in an ROP increase of 72% and a DSE reduction of 64%. ([[2017-al-rubaii|AL-RUBAII, 2017]])
- page_num_placeholder_for_calculation_result_on_page_123 ([[2017-al-rubaii|AL-RUBAII, 2017]])
- The optimum value of Carrying Capacity Index (CCI) was found to be 5; values above 5 ensure effective hole cleaning. ([[2017-al-rubaii|AL-RUBAII, 2017, p. 125]])
- The ROP increased significantly in trial wells where the hole cleaning model was applied compared to offset wells, with improvements of 58%, 62%, and 68% in three vertical sections. ([[2017-al-rubaii|AL-RUBAII, 2017, p. 125]])

## Limitations

The thesis notes that some models are limited to certain applications (e.g., Lyoho, Ford) and that the accuracy of determining cutting size/shape from field data is difficult.

## Recommendations and Future Work

- Engineering approach of optimization of drilling performance must be used to determine the optimum drilling parameters.
- Apply the model in RTOC (Real Time operating Center) so that all monitored wells ensure recommended and perfect performance.

## Related Concepts

- [[mathematical-modeling]]
- [[petrophysics]]
- [[hole-cleaning]]
- [[petroleum-engineering]]
- [[porosity]]
- [[plastic-viscosity]]
- [[yield-point]]
- [[drilling-specific-energy]]
- [[particle-swarm-optimization]]
- [[carrying-capacity-index]]
- [[cutting-concentration-in-annulus]]
- [[drilling-engineering]]
- [[matlab]]
- [[calculation-of-accuracy]]
- [[drilling-rate]]
- [[drill-string-efficiency]]
- [[nonlinear-regression]]
