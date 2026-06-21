---
type: source
id: "9903"
title: "Current Conveyor-based Universal Filter and Oscillator"
author: "Mohammed Ali Mohammed. Al-Gahtani"
year: 1997
department: "Geosciences"
degree: "MS"
supervisor: "Muhammad Taher Abuelma'atti"
committee_members:
  - "Abdul Rahman K. Al-Ali"
  - "Yahya Chedly"
  - "Zeini J. Al-Satti"
source_file: "raw/9903 - Current conveyor-based universal filter and oscillator..pdf"
url: "https://eprints.kfupm.edu.sa/id/eprint/9903/"
study_area: "Not stated in source"
keywords:
  - current conveyor
  - multiphase sinusoidal oscillators
  - universal filter
  - active-RC
  - active-R
  - active-C
  - unity gain cell
  - parasitic resistance
  - current-mode
  - CCII
  - circuit simulation
  - MPSOs
  - universal filters
  - programmable
techniques:
  - pspice
  - circuit-simulation
  - sensitivity-analysis
  - experimental-measurement
tags:
  - degree/ms
  - technique/circuit-simulation
  - technique/signal-processing
  - technique/experimental-measurement
  - theme/electrical-engineering
  - theme/mathematical-geology
  - terminology/multiphase-sinusoidal-oscillators
  - terminology/current-conveyor
  - terminology/universal-filter
status: ingested
---

# Current Conveyor-based Universal Filter and Oscillator

**Summary**: The thesis explores the use of second-generation current conveyors (CCII) to develop new active-RC, active-C multiphase sinusoidal oscillators (MPSOs) and universal filters. It also investigates a programmable active-C current-mode universal filter utilizing parasitic resistance and extends CCII application to nonlinear multiplier/divider circuits.

---

## Research Problem

Existing multiphase sinusoidal oscillator designs often suffer from complex structures, high component counts, and the interdependence of frequency and condition of oscillation. Additionally, standard universal filters often require topology changes to switch between different filter functions (lowpass, bandpass, etc.).

## Objectives

- Develop new active-RC, active-R, and active-C multiphase sinusoidal oscillators (MPSOs) using CCIIs.
- Develop unity gain cell-based universal filters that can implement multiple filter functions without changing circuit topology.
- Develop a programmable active-C current-mode universal filter utilizing the parasitic resistance of the CCCII.
- Investigate the extension of current conveyors into nonlinear applications, specifically for current-mode analog multiplier/divider circuits.
- Design a universal current-mode filter with multiple inputs and outputs to realize various responses (lowpass, bandpass, highpass, notch, allpass) without changing topology.
- Implement a current-mode analog multiplier/divider using only two CCIIs to avoid MOS transistor non-linearities.

## Methods

The thesis utilizes circuit modeling and simulation using Pspice. It employs mathematical analysis (transfer functions, sensitivity analysis) to evaluate the performance of various oscillator configurations (even/odd phase) and filter types. The study compares proposed designs against previously published circuits in terms of component count, complexity, and ability to independently control parameters like frequency and condition of oscillation.

## Data and Materials

The research involves theoretical circuit models for CCIIs, including the Svoboda model (modified version), and Pspice simulation results for three-phase and six-phase oscillators. Parameters such as resistance (R) and capacitance (C) were varied to demonstrate independent control of frequency and condition of oscillation.

## Key Findings

- The proposed active-RC, active-R, and active-C MPSOs allow for the independent control of the frequency of oscillation and the condition of oscillation by tuning grounded resistors or capacitors respectively. ([[1997-al-gahtani|Al-Gahtani, 1997, p. 52]])
- The circuit designs using CCIIs offer lower active and passive sensitivities compared to several previously published oscillator structures. ([[1997-al-gahtani|Al-Gahtani, 1997, p. 60]])
- A current-mode universal filter based on unity gain cells can implement all basic second-order functions (lowpass, bandpass, highpass, notch, and allpass) without changing the circuit topology. ([[1997-al-gahtani|Al-Gahtani, 1997, p. 47]])
- The use of a modified Svoboda model for CCII simulation showed that results deviate from theoretical calculations by less than 6% when considering parasitic resistance effects. ([[1997-al-gahtani|Al-Gahtani, 1997, p. 62]])
- A current-mode multiplier/divider circuit using only two CCCIIs was proposed to avoid the nonlinearities of MOS transistors. ([[1997-al-gahtani|Al-Gahtani, 1997, p. 48]])
- The proposed multiphase oscillators (MPSOs) using CCII can produce even or odd numbers of phases while requiring fewer active and passive elements than previously reported designs. ([[1997-al-gahtani|Al-Gahtani, 1997, p. 79]])
- Simulation results for the frequency of oscillation in the current-mode filter deviated from theoretical results by less than 2% when using the modified Bruun-model. ([[1997-al-gahtani|Al-Gahtani, 1997, p. 84]])
- Experimental results for the lowpass gain deviated from theoretical values by less than 1% using the AD844 component. ([[1997-al-gahtani|Al-Gahtani, 1997, p. 106]])
- The highpass gain deviation was less than 4% for frequencies below 1MHz in the experimental tests. ([[1997-al-gahtani|Al-Gahtani, 1997, p. 106]])
- A current-mode multiplier/divider using only two CCIIs achieved a deviation of less than 2% from theoretical results during triangular signal testing. ([[1997-al-gahtani|Al-Gahtani, 1997, p. 140]])
- The proposed universal filter in Fig. 4.1 allows for the independent tuning of frequency (omega) and quality factor (Q) by adjusting specific resistors without affecting other parameters. ([[1997-al-gahtani|Al-Gahtani, 1997, p. 147]])
- The frequencies of oscillation for the active-RC, active-R, and active-C MPSOs showed agreement with theory within an error of less than 6% during Pspice simulation. ([[1997-al-gahtani|Al-Gahtani, 1997, p. 169]])
- Experimental results for three tested universal filters were in good agreement with theoretical and simulated values, with an error of less than %7. ([[1997-al-gahtani|Al-Gahtani, 1997, p. 170]])
- The proposed programmable active-C current-mode universal filter can realize lowpass, bandpass, highpass, notch, and allpass responses using the parasitic resistance Rx of the CCCII. ([[1997-al-gahtani|Al-Gahtani, 1997, p. 170]])
- The multiplier/divider circuit using two CCCIIs requires no resistors, capacitors, or MOS transistors and offers temperature independence and large dynamic range. ([[1997-al-gahtani|Al-Gahtani, 1997, p. 171]])

## Limitations

Deviations in high-frequency results (above 100MHz) are attributed to the reduction in beta values of the transistors within the translinear loop of the CCII; higher beta transistors are recommended for improvement.

## Recommendations and Future Work

To reduce deviations at very high frequencies, transistors with higher values of beta should be used in realizing the CCII. Designing filters in integrated form is suggested to improve accuracy by reducing effects from stray capacitance.

## Related Concepts

- [[circuit-simulation]]
- [[multiphase-sinusoidal-oscillators]]
- [[current-conveyor]]
- [[electrical-engineering]]
- [[experimental-measurement]]
- [[universal-filter]]
- [[mathematical-geology]]
