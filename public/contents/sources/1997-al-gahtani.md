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
  - Current conveyor
  - CCII
  - multiphase sinusoidal oscillators
  - universal filter
  - unity gain cell
  - current-mode
  - active-C
  - MPSOs
  - active-RC
  - programmable
  - multiphase sinusoidal oscillator
  - MPSO
  - high frequency operation
  - multiplier
  - divider
  - Oscillator
techniques:
  - simulation
  - circuit-analysis
  - pspice
  - circuit-simulation
  - icaps
  - icaps-circuit-simulation
  - experimental-measurement
tags:
  - degree/ms
  - technique/simulation
  - technique/pice
  - technique/circuit-simulation
  - technique/experimental-measurement
  - theme/electrical-engineering
  - theme/electronics
  - theme/petroleum-engineering
  - terminology/current-conveyor
  - terminology/multiphase-sinusoidal-oscillators
  - terminology/multiphase-sinusoidal-oscillator
  - terminology/universal-filter
status: ingested
---

# Current Conveyor-based Universal Filter and Oscillator

**Summary**: The thesis explores the application of second-generation current conveyors (CCII) to develop new active-RC, active-C multiphase sinusoidal oscillators (MPSOs), universal filters, and a current-mode multiplier/divider. The research demonstrates that CCII-based circuits offer advantages in terms of simplicity, performance at high frequencies, and lower power consumption compared to traditional OTA-based designs.

---

## Research Problem

The need for compact, versatile, and high-frequency capable filters and oscillators in integrated circuits. Traditional active-RC or active-C filters often require many components to switch between different filter types; the thesis addresses this by using CCIIs to create 'universal' designs that can perform multiple functions with minimal hardware changes.

## Objectives

- Realize new active-RC, active-R, and active-C multiphase sinusoidal oscillators (MPSOs) using CCII.
- Develop unity gain cell-based universal filters.
- Design a programmable active-C current-mode universal filter utilizing parasitic resistance Rx at the port X of the CCII.
- Investigate the extension of current conveyor use to nonlinear applications, specifically a current-mode analog multiplier/divider.
- Evaluate the feasibility of developing multiphase sinusoidal oscillators (MPSOs) using second-generation current conveyors (CCIIs).
- Develop universal filters based on current and voltage followers derived from CCIIs.
- Utilize parasitic resistance Rx at port X of the CCII to develop new programmable active-C current-mode universal filters.
- Investigate the feasibility of extending current conveyor use to nonlinear applications like multipliers and dividers.
- Realize new active-RC, active-C multiphase sinusoidal oscillators (MPSOs) using CCII.
- Develop a programmable active-C current-mode universal filter using the parasitic resistance of the CCII.
- Design a universal filter that can realize lowpass, highpass, bandpass, notch, and allpass responses without changing circuit topology.
- Evaluate the impact of non-idealities (parasitic resistance, tracking errors) on the performance of these circuits.
- Realize new active-RC and active-C multiphase sinusoidal oscillators (MPSOs) using second-generation current conveyors (CCII).
- Develop a unity gain cell-based universal filter.
- Design a programmable active-C current-mode universal filter utilizing parasitic resistance Rx.
- Propose a voltage-mode bandpass/lowpass filter with single input and two outputs.
- Develop a universal voltage-mode filter with single input and three outputs.
- Realize new active-RC, active-C, and active-R multiphase sinusoidal oscillators (MPSOs) using CCII.
- Develop universal filters based on current and voltage followers derived from CCII.
- Design a programmable active-C current-mode universal filter utilizing the parasitic resistance of the CCII.
- Implement a current-mode analog multiplier/divider circuit using only two CCII units without resistors, capacitors, or MOS transistors.
- Realize new active-RC and active-C multiphase sinusoidal oscillators (MPSOs) using CCII.
- Design a programmable active-C current-mode universal filter utilizing the parasitic resistance Rx of the CCII.

## Methods

The thesis utilizes theoretical analysis of current conveyor models (Svoboda model and Bruun model) to derive transfer functions for oscillators and filters. Circuit designs are evaluated using sensitivity analysis to determine the impact of component variations. Simulations are performed using Pspice software to compare theoretical results with simulated outcomes. Experimental validation is conducted using the AD844 integrated circuit to verify filter performance across various modes.

## Data and Materials

The study utilizes theoretical circuit models for second-generation current conveyors (CCII), including non-ideal models that account for parasitic resistances (Rx, Ry) and capacitances (Cz). Simulation data includes three-phase and six-phase oscillator outputs with specific component values (R=1kOhm, C=1nF, C2=2.1nF).

## Key Findings

- The current conveyor is a three-terminal device with terminals X, Y, and Z, where the second-generation (CCII) provides a more robust platform for high-speed applications than first-generation models. ([[1997-al-gahtani|Al-Gahtani, 1997, p. 25]])
- A translinear mixed loop consisting of two PNP and two NPN transistors is identified as an excellent input stage for current conveyors due to its ability to provide a virtual ground without feedback. ([[1997-al-gahtani|Al-Gahtani, 1997, p. 30]])
- The parasitic resistance Rx at port X of the CCII, which typically has a value around 50 Ohms in the AD844, can be utilized for designing programmable active-C current-mode universal filters. ([[1997-al-gahtani|Al-Gahtani, 1997, p. 40]])
- Current followers (CF) can be obtained by grounding the Y terminal of a current conveyor, providing unity current gain and high output impedance. ([[1997-al-gahtani|Al-Gahtani, 1997, p. 40]])
- The study demonstrates that CCII-based designs for multiphase oscillators provide independent control over critical parameters while maintaining low active and passive sensitivities. ([[1997-al-gahtani|Al-Gahtani, 1997, p. 22]])
- For the same value of I, the transconductance of the bipolar OTA will be four times less than that of the CCCII, resulting in approximately three times higher power consumption for the OTA. ([[1997-al-gahtani|Al-Gahtani, 1997, p. 43]])
- The proposed active-RC MPSO allows independent control of frequency (via grounded resistor R) and condition of oscillation (via grounded capacitor C). ([[1997-al-gahtani|Al-Gahtani, 1997, p. 56]])
- The proposed active-C MPSO utilizes the parasitic resistance Rx to allow for programmable filter functions. ([[1997-al-gahtani|Al-Gahtani, 1997, p. 47]])
- Simulation results using a non-ideal CCII model (including Ry and Rz) deviated from theoretical calculations by less than 6%. ([[1997-al-gahtani|Al-Gahtani, 1997, p. 62]])
- The proposed MPSO designs require fewer active devices and grounded passive elements compared to previous implementations, such as those reported in 1995. ([[1997-al-gahtani|Al-Gahtani, 1997, p. 64]])
- The proposed MPSO circuits can produce both even and odd numbers of phases (e.g., 3-phase and 6-phase) using fewer active and passive elements than previously reported designs. ([[1997-al-gahtani|Al-Gahtani, 1997, p. 80]])
- The frequency of oscillation in the CCII-based oscillators can be adjusted by tuning the grounded resistor or capacitor without disturbing the condition of oscillation. ([[1997-al-gahtani|Al-Gahtani, 1997, p. 73]])
- The proposed universal filter can realize lowpass, bandpass, highpass, notch, and allpass responses without changing the circuit topology. ([[1997-al-gahtani|Al-Gahtani, 1997, p. 100]])
- Simulation results for the MPSO using the Bruun-model deviated from theoretical results by less than 2%. ([[1997-al-gahtani|Al-Gahtani, 1997, p. 78]])
- The lowpass gain of the proposed universal filter showed a deviation of less than 1% between theory, simulation, and experiment. ([[1997-al-gahtani|Al-Gahtani, 1997, p. 106]])

## Limitations

Deviations in high-frequency results are attributed to the nonidealities of active devices, specifically parasitic resistance at port X of the CCII and the finite pole of the current conveyor. These can be mitigated by using transistors with higher cutoff frequencies.

## Recommendations and Future Work

To reduce deviations caused by transistor beta variations at high current levels, transistors with higher beta values should be used in realizing the CCII. Designing filters in integrated form is recommended to improve accuracy by reducing stray capacitance effects.

## Related Concepts

- [[simulation]]
- [[current-conveyor]]
- [[electrical-engineering]]
- [[pice]]
- [[multiphase-sinusoidal-oscillators]]
- [[electronics]]
- [[circuit-simulation]]
- [[multiphase-sinusoidal-oscillator]]
- [[universal-filter]]
- [[sensitivity-analysis]]
- [[petroleum-engineering]]
- [[experimental-measurement]]
