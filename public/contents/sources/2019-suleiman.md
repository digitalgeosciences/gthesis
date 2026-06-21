---
type: source
id: "140992"
title: "SIMULATION OF GAS FLOW, SAND TRANSPORT AND WELLBORE EROSION IN HORIZONTAL WELLS"
author: "Muhammad Aliyu Suleiman"
year: 2019
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Abeeb Awotunde"
committee_members: []
source_file: "raw/140992 - SIMULATION OF GAS FLOW, SAND TRANSPORT AND WELLBORE EROSION IN HORIZONTAL WELLS.pdf"
url: "https://eprints.kfupm.edu.sa/140992"
study_area: "Not stated in source"
keywords:
  - Horizontal wells
  - Gas flow
  - Sand transport
  - Wellbore erosion
  - Numerical modeling
  - Porous media
  - Flow regime
  - Pressure drop
  - Mathematical model
  - Sediment transport
techniques:
  - mathematical-modeling
  - reservoir-simulation
  - mathematical-geology
  - petrophysics
  - matlab
tags:
  - degree/ms
  - technique/mathematical-modeling
  - technique/reservoir-simulation
  - technique/mathematical-geology
  - technique/petrophysics
  - technique/matlab
  - theme/reservoir-engineering
  - theme/petroleum-engineering
  - terminology/porosity
  - terminology/wellbore-erosion
  - terminology/petrophysics
  - terminology/gas-in-place
  - terminology/wall-shear-stress
  - terminology/friction-factor
  - terminology/sediment-transport
  - terminology/wellbore-radius
  - terminology/bottom-hole-pressure
status: ingested
---

# SIMULATION OF GAS FLOW, SAND TRANSPORT AND WELLBORE EROSION IN HORIZONTAL WELLS

**Summary**: The thesis develops a mathematical model based on the WEPP sediment erosion model to simulate gas flow, sand transport, and wellbore erosion in horizontal wells. The study concludes that while wellbore erosion has a minimal impact on overall reservoir recovery, it significantly affects near-wellbore conditions such as flowing bottom hole pressure (BHP) and can influence condensate dropout.

---

## Research Problem

Wellbores in weakly consolidated formations often experience sand production due to mechanical instability and hydro-mechanical forces, leading to erosion, increased pressure drops, and potential damage to surface facilities. Existing models often overlook the dynamic changes in wellbore geometry caused by these processes.

## Objectives

- Develop a mathematical model to perform numerical simulation of single-phase 3-D gas flow inside porous media and 1-D, 2-phase Gas-Sand flow inside a horizontal OH wellbore resulting from wellbore wall erosion.
- Model the variation of wellbore diameter arising due/to wellbore erosion and sand deposition inside the wellbore.
- Provide the pressure drop inside the reservoir and wellbore with respect to time and space, focusing on pressure variations caused by changing wellbore diameter during gas production.
- Develop a mathematical model based on the WEPP sediment erosion model to predict erosion rates and variations in wellbore radius.
- Simulate sand transport of eroded particles within the wellbore using an advection-diffusion equation.
- Evaluate the impact of wellbore erosion on flow parameters such as wall shear stress, friction factor, and flowing bottom hole pressure (BHP).

## Methods

The study utilizes a mathematical model for sediment transport where the concentration of sediments is governed by an advection-diffusion equation. The system is discretized using a finite difference scheme, with pressures solved at grid centers and velocities at boundaries. A Newton-Raphson iterative method is used to solve the non-linear system of equations. The simulation was implemented in MATLAB. The model incorporates a sediment erosion model (based on WEPP) to calculate wall shear stress, erosion rates, and subsequent changes in wellbore radius and surface roughness.

## Data and Materials

The study uses a 100x100x1 grid reservoir model with a 3000 ft horizontal well divided into 20 segments. Parameters include: permeability of 30 mD, porosity of 20%, initial pressure of 6000 psi, and a constant gas production rate of 50 MMscfd.

## Key Findings

- Wellbores in weakly consolidated formations are susceptible to sand production due to two mechanisms: stress concentration causing mechanical instability and hydro-mechanical forces causing surface erosion. ([[2019-suleiman|Suleiman, 2019, p. 11]])
- The Forchhiermer equation is more practical than Darcy's law for gas flow in reservoirs as it accounts for non-linear flow resistance due to high flow speeds. ([[2019-suleiman|Suleiman, 2019, p. 46]])
- The Beggs and Brills correlation was selected for calculating gas compressibility factor (z) because it is explicit in nature and provides acceptable results across a wide range of conditions. ([[2019-suleiman|Suleiman, 2019, p. 55]])
- Wellbore erosion can be modeled as a function of the difference between applied wall shear stress and critical shear stress, where critical shear stress depends on grain size and shape. ([[2019-suleiman|Suleiman, 2019, p. 36]])
- The Peaceman formulation is used to calculate equivalent wellbore radius and exchange terms for both isotropic and anisotropic reservoirs. ([[2019-suleiman|Suleiman, 2019, p. 21]])
- The erosion rate of the wellbore varies drastically in the initial few time steps (under 140 days), after which it declines to values less than 1e-5 kg/m2/s, becoming negligible for flow parameters. ([[2019-suleiman|Suleiman, 2019, p. 62]])
- Wellbore erosion is significantly higher near the heel of the well compared to the toe due to increased wall shear stress from the continuous influx of fluids as gas volume increases toward the heel. ([[2019-suleiman|Suleiman, 2019, p. 64]])
- Continuous erosion leads to a reduction in sand surface roughness (epsilon), which results in a declining friction factor and lower wall shear stress over time. ([[2019-suleiman|Suleiman, 2019, p. 65]])
- The study found that while wellbore erosion does not significantly impact the overall recovery factor, it can have a drastic impact on near-well pressure conditions like flowing bottom hole pressure (BHP). ([[2019-suleiman|Suleiman, 2019, p. 69]])
- Higher resolution of discretization leads to higher predicted erosion rates because velocity values are measured closer to the sink point where fluid influx is greater. ([[2019-suleiman|Suleiman, 2019, p. 71]])

## Limitations

The current model assumes sediment particles are mass-less, their velocity equals that of the moving gas, and they do not impact wall shear stress. The study also notes that higher sand concentrations (e.g., from porous media failure) would require a more complex two-phase flow model.

## Recommendations and Future Work

Future work should include experimental studies on critical shear stress and rock erodibility of core samples; develop empirical relationships between UCS and critical shear stress; extend the model to multi-phase flows (two, three, or four phases); and explore computationally smarter models for friction factor prediction.

## Related Concepts

- [[mathematical-modeling]]
- [[reservoir-simulation]]
- [[porosity]]
- [[wellbore-erosion]]
- [[reservoir-engineering]]
- [[petroleum-engineering]]
- [[petrophysics]]
- [[gas-in-place]]
- [[wall-shear-stress]]
- [[friction-factor]]
- [[sediment-transport]]
- [[wellbore-radius]]
- [[bottom-hole-pressure]]
