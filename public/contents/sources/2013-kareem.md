---
type: source
id: "138978"
title: "IMPROVED NUMERICAL SIMULATION OF WORMHOLE PROPAGATION IN CARBONATE CORE DURING ACID STIMULATION"
author: "Lateef A. Kareem"
year: 2013
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Abdullah S. Sultan"
committee_members: []
source_file: "raw/138978 - IMPROVED NUMERICAL SIMULATION OF WORMHOLE PROPAGATION IN CARBONATE CORE DURING A.pdf"
url: "https://eprints.kfupm.edu.sa/138978"
study_area: "Not stated in source"
keywords:
  - wormhole propagation
  - carbonate core
  - acid stimulation
  - numerical simulation
  - porous media
  - acidization
  - porosity distribution
  - permeability field
  - mass transfer coefficient
  - permeability function
techniques:
  - mathematical-modeling
  - reservoir-simulation
  - finite-difference-modeling
  - matlab
  - ct-scanning
  - core-analysis
tags:
  - degree/ms
  - technique/mathematical-modeling
  - technique/reservoir-simulation
  - technique/finite-difference-modeling
  - technique/matlab
  - technique/ct-scanning
  - technique/core-analysis
  - theme/carbonate-geology
  - theme/petroleum-engineering
  - theme/reservoir-engineering
  - theme/carbonate-reservoirs
  - terminology/wormhole
  - terminology/porosity
  - terminology/permeability
status: ingested
---

# IMPROVED NUMERICAL SIMULATION OF WORMHOLE PROPAGATION IN CARBONATE CORE DURING ACID STIMULATION

**Summary**: The thesis develops an improved numerical simulator to model wormhole propagation in carbonate cores during acid stimulation. It integrates the physics of flow in porous media, the chemistry of HCl-carbonate interaction, and the relationship between porosity and permeability to improve prediction accuracy.

---

## Research Problem

Existing models for wormhole propagation often use oversimplified assumptions (e.g., cylindrical shapes, homogeneous core assumptions, or ignoring chemical interactions) which fail to accurately describe the complex dynamics of carbonate acid stimulation.

## Objectives

- To develop a robust mathematics of worm-holing phenomenon that account for convection and diffusion of acid, acid mineral interaction, variation of porosity and permeability with time and location.
- To correct errors of past study regarding the use of the convection equation in porous medium
- To develop a 4D (3D spatial + 1D time) Numerical Wormhole Simulator.
- To validate the numerical model with real experimental observations.
- Develop a numerical algorithm to solve coupled continuity and motion equations (Darcy-Stokes/Brinkman flow).
- Implement a MATLAB-based simulation to model acidization processes in carbonate cores.

## Methods

The study utilizes a coupled system of differential equations (Darcy-Stokes/Brinkman flow) to model fluid motion and concentration. A numerical algorithm is developed to solve these equations, resulting in a block hepta-diagonal matrix. The simulation is implemented in MATLAB, incorporating a flowchart that includes solving for pressure/velocity fields, updating porosity/permeability based on mineral volume fraction, and iterating until convergence. CT scan images (JPEG) are processed using an algorithm to convert RGB values into 'CT scan numbers' via calibration against known samples. These numbers are then converted into porosity and permeability fields using correlation coefficients and a connectivity-cementation constant (M).

## Data and Materials

The study uses data from 15 core samples (specifically mentioned: cores 12 and 15) to calibrate the relationship between CT scan values, porosity, and permeability. The simulation utilizes a grid of senses (e.g., 101x101 or 37x37x61 depending on geometry).

## Key Findings

- The inclusion of a resistance-weighting scheme for numerical evaluation of velocity fields from pressure fields was implemented to improve the simulation of flow in wormholes. ([[2013-kareem|Kareem, 2013, p. 13]])
- Changes in local acid molecule transfer rate were observed to result in a shift in the acidization curve. ([[2013-kareem|Kareem, 2013, p. 13]])
- Initial permeability of the core was found to affect the amount of pore volume of acid injected to breakthrough. ([[2013-kareem|Kareem, 2013, p. 13]])
- A Damkohler number (Da) is used to determine the balance between mass transfer and reaction rate; Da > 1 indicates a faster reaction rate, while Da < 1 indicates a slower reaction rate compared to mass transfer. ([[2013-kareem|Kareem, 2013, p. 16]])
- Higher rates of injection were shown to reduce the Damkohler number and increase the propagation of wormholes. ([[2013-kareem|Kareem, 2013, p. 17]])
- The model successfully simulates the 'wormhole' effect, where permeability jumps by approximately 100-fold at breakthrough. ([[2013-kareem|Kareem, 2013, p. 98]])
- A reduction in face dissolution was observed with an increased rate of injection (lower Damköhler number). ([[2013-kareem|Kareem, 2013, p. 97]])
- The simulation results for pore volumes to breakthrough were in excellent agreement with experimental observations by Fredd and Fogler. ([[2013-kareem|Kareem, 2013, p. 97]])
- A 300% increase in the local mass transfer coefficient (k) resulted in a shift in the optimum injection rate, even though the pore volume to breakthrough remained nearly constant. ([[2013-kareem|Kareem, 2013, p. 102]])
- Lower initial permeability in core samples leads to higher pore volumes required for breakthrough and lower optimal injection rates. ([[2013-kareem|Kareem, 2013, p. 103]])
- The use of two different permeability functions accounts for the sudden rise in permeability or fall in pressure drop at breakthrough caused by discontinuities in the permeability function. ([[2013-kareem|Kareem, 2013, p. 104]])
- The breakthrough pore volume injection is proportional to the cube root of the injection rate when the rate is higher than the optimum, and approaches an asymptote corresponding to complete rock dissolution at very low injection rates. ([[2013-kareem|Kareem, 2013, p. 104]])
- Acid mineral interaction is mass transfer controlled if mean core and maximum effluent acid concentrations remain low until breakthrough; it is reaction controlled if both parameters are high. ([[2013-kareem|Kareem, 2013, p. 105]])
- Competition between the dominant wormhole and the second wormhole is less pronounced at optimum injection rate, while growth of the second wormhole increases as rates move away from the optimum (2cc/min). ([[2013-kareem|Kareem, 2013, p. 105]])
- Once breakthrough occurs, growth of less dominant wormholes stalls because acids flow through the already broken-through dominant wormhole. ([[2013-kareem|Kareem, 2013, p. 105]])

## Limitations

The mismatch between some simulation results and experimental data is attributed to differences in the orientation of the core during pre-acidization and post-acidization scans, as well as the fact that experiments are not always terminated exactly at breakthrough.

## Recommendations and Future Work

Not stated in source

## Related Concepts

- [[mathematical-modeling]]
- [[wormhole]]
- [[porosity]]
- [[permeability]]
- [[carbonate-geology]]
- [[petroleum-engineering]]
- [[matlab]]
- [[ct-scanning]]
- [[reservoir-engineering]]
- [[not-stated-in-source]]
- [[reservoir-simulation]]
- [[not-stated]]
