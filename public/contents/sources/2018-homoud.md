---
type: source
id: "140732"
title: "Transient Wellbore Pressurization Correlation & HIPPS Response Time in Multiphase Flow"
author: "Ahmed Abdulkarim Abdullah Homoud"
year: 2018
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Rahul N. Gajbhiye"
committee_members: []
source_file: "raw/140732 - Transient Wellbore Pressurization Correlation &amp; HIPPS Response Time in Multi.pdf"
url: "https://eprints.kfupm.edu.sa/140732"
study_area: "Not stated in source"
keywords:
  - Transient Wellbore Pressurization
  - HIPPS
  - Multiphase Flow
  - Wellbore Pressure Build-up
  - Safety Instrumented System
  - Flow Assurance
  - transient wellbore flow
  - valve closure
  - pressure build-up
  - fluid compressibility
  - productivity index
  - wellbore pressure
techniques:
  - multiphphaseflowsimulation
  - nonlinearregression
  - petrophysics
  - pvtmodeling
  - nonlinear-regression
  - curve-fitting
  - reservoir-simulation
tags:
  - degree/ms
  - technique/multi-phase-flow-simulation
  - technique/non-linear-regression
  - technique/petrophysics
  - technique/pvt-modeling
  - technique/nonlinear-regression
  - technique/reservoir-simulation
  - theme/petroleum-engineering
  - theme/reservoir-engineering
  - terminology/petrophysics
  - terminology/petrophysics
  - terminology/petroleum-engineering
status: ingested
---

# Transient Wellbore Pressurization Correlation & HIPPS Response Time in Multiphase Flow

**Summary**: The thesis develops a new empirical correlation to estimate early-time wellbore pressure build-up following sudden production line valve closure. The study evaluates the influence of fluid compressibility, productivity index (PI), flowline wellhead pressure (FLWHP), and well measured depth on pressure behavior to inform High Integrity Pressure Protection System (HIPPS) response times.

---

## Research Problem

The need for accurate prediction of wellbore pressure build-up during transient events (like sudden shut-ins) to determine the 'High-High' trip points and ensure sufficient response time for HIPPS systems in high-pressure, multi-phase flow environments.

## Objectives

- Develop a generalized correlation to estimate wellbore pressure build-up time based on parameters like Fluid Properties, GOR, Reservoir Pressure, Productivity Index, Depth, and Shut-in Wellhead Pressures (SIWHPs).
- Predict wellhead pressure behavior at shut-in conditions for 21 wells using transient hydraulic simulation.
- Perform sensitivity analysis to identify the most influential parameters on pressure build-up time and maximum pressure (Pmax).
- Develop a non-linear regression model to predict early shut-in pressure profiles.
- Develop an empirical correlation for early-time wellbore pressure build-up under sudden PL valve closure.
- Identify and quantify the influence of reservoir, fluid, and wellbore parameters on pressure behavior.

## Methods

The study utilized OLGA V-2015 for transient hydraulic simulation of 21 wells. PVT data were processed using PVTsim Nova 3 to generate Black Oil tables (Peng-Robinson EOS). The well models were calibrated against field measurements (PI, FWHP, SIWHP). A quadratic curve fitting approach was used to model the pressure build-up: p(t) = at^2 + bt + c. Non-linear regression analysis was performed to determine coefficients a and b based on parameters like PI, FWHP, fluid compressibility, and time to reach Pmax.

## Data and Materials

The study utilizes field test data to calibrate and verify the developed correlation. Specific cases (e.g., Well B-9) are analyzed to compare pressure build-up profiles against pipeline maximum pressure limits.

## Key Findings

- The time to reach Pmax shows a strong relationship with average fluid compressibility at flowing wellhead condition (correlation factor of 0.96). ([[2018-homoud|Homoud, 2018, p. 49]])
- The 'c' constant in the quadratic equation is directly equivalent to the Flowing Wellhead Pressure (FWHP) as it represents pressure at t=0. ([[2018-homoud|Homoud, 2018, p. 60]])
- The correlation for coefficient 'a' showed a high accuracy with a correlation factor of 0.98 compared to predicted values. ([[2018-homoud|Homoud, 2018, p. 62]])
- The correlation for coefficient 'b' yielded a correlation factor of 0.90. ([[2018-homoud|Homoud, 2018, p. 62]])
- The developed correlation is valid for predicting pressure at early shut-in times (typically under 60 seconds), which aligns with the typical HIPPS valve response window of 5 to 40 seconds. ([[2018-homoud|Homoud, 2018, p. 71]])
- Field test results on Well-21 showed that the correlation predicted pressure build-up behavior very well compared to actual field measurements (Standard Deviation: 66.5, Standard Error: 15.7 psig). ([[2018-homoud|Homoud, 2018, p. 75]])
- A new empirical correlation $P(t) = at^2 + bt + c$ was developed where coefficients a and b are functions of PI, FWHP, Fluid Compressibility, T(Pmax), and Well MD. ([[2018-homoud|Homoud, 2018, p. 78]])
- The correlation is valid for the time frame of 0 to 60 seconds (or $T(P_{max})$ if lower). ([[2018-homoud|Homoud, 2018, p. 79]])
- The most influential parameters on pressure build-up behavior are Fluid Compressibility, Productivity Index (PI), FWHP, and Well Measured Depth. ([[2018-homoud|Homoud, 2018, p. 79]])
- There is a strong relationship between fluid compressibility at FWHP condition and the time it takes to pressurize the wellbore; higher compressibility results in longer pressurization time. ([[2018-homoud|Homoud, 2018, p. 79]])
- In specific cases like Well B-9, only 15 seconds may exist between valve closure and reaching maximum allowable pressure, creating a narrow window for HIPPS reaction. ([[2018-homoud|Homoud, 2018, p. 76]])

## Limitations

The developed correlation tends to overestimate pressure at later times (after 60 seconds), and is therefore only valid for the early shut-in window relevant to HIPPS response.

## Recommendations and Future Work

To ensure safe operations when the pressure build-up window is shorter than the HIPPS response time, it is recommended to reduce the FWHP to a point where the pressure build-up curve falls within the acceptable safety window.

## Related Concepts

- [[multi-phase-flow-simulation]]
- [[non-linear-regression]]
- [[petrophysics]]
- [[petroleum-engineering]]
- [[reservoir-engineering]]
- [[nonlinear-regression]]
- [[reservoir-simulation]]
