---
type: source
id: "142192"
title: "Efficient 3D Wormhole Modeling Utilizing a Fully Coupled Reactive Transport Mode"
author: "Hamzah Abdullah Ali Mohammed Aboluhom"
year: 2022
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Murtada Al-Jawad"
committee_members: []
source_file: "raw/142192 - Efficient 3D Wormhole Modeling Utilizing a Fully Coupled Reactive Transport Mode.pdf"
url: "https://eprints.kfupm.edu.sa/142192"
study_area: "Not stated in source"
keywords:
  - wormhole
  - matrix acidizing
  - carbonate reservoirs
  - two-scale continuum model
  - reactive transport
  - thermal energy transfer
  - MATLAB
  - porosity evolution
  - wormhole propagation
  - acid stimulation
  - reactive transport model
  - thermal-reactive flow (TRF)
  - 3D modeling
techniques:
  - matlab
  - finite-volume-method
  - vectorized-code-operations
  - gmres-method
  - sparse-matrix-reordering
  - reservoir-simulation
  - mathematical-modeling
tags:
  - degree/ms
  - technique/matlab
  - technique/finite-volumemethod
  - technique/sparsematrixreordering
  - technique/reservoir-simulation
  - technique/mathematical-modeling
  - theme/reservoir-simulation
  - theme/petroleum-engineering
  - theme/reservoir-engineering
  - terminology/wormhole
  - terminology/pore-volume-to-breakthrough
  - terminology/two-scale-continuum
  - terminology/petrophysics
  - terminology/lithology
status: ingested
---

# Efficient 3D Wormhole Modeling Utilizing a Fully Coupled Reactive Transport Mode

**Summary**: The thesis develops a computationally efficient 3D numerical model using MATLAB to simulate wormhole growth in carbonate reservoirs. The model integrates fully coupled reactive transport, including thermal energy transfer, and is validated against analytical solutions and experimental data.

---

## Research Problem

Existing models for wormhole propagation often face high computational costs when solving coupled thermal and reactive transport equations in 3D, especially as mesh sizes increase. There is a need for an efficient, accurate 3D model to study the effects of complex variables like mineralogy and temperature on acid stimulation.

## Objectives

- Develop a mathematical formulation that combines thermal energy transfer with two scale continuum flow and reactive mass transfer.
- Create a numerical 3D wormhole model using MATLAB software based on the developed mathematical formulation.
- Make the developed model computationally efficient.
- Utilize the developed 3D simulator to investigate 3D radial wormhole propagation in presence of some field constraints or applications, such as open hole versus perforated casing completions.
- Develop a computationally efficient 3D TRF model using MATLAB.
- Validate the TRF model against analytical solutions and experimental data.

## Methods

The study utilizes a formulation based on Darcy-scale conservative equations coupled with pore-scale properties via an averaged continuum model. The TRF model is implemented in MATLAB, utilizing vectorization and sparse matrix representation to improve efficiency. For the solution stage, flow models are solved directly, while reaction and thermal models use preconditioned iterative methods (specifically GMRES) following a partial LU decomposition. Simulation parameters include 3D grids ranging from 46k to over 1 million cells, with specific focus on radial and linear flooding scenarios.

## Data and Materials

The study uses numerical simulations across various scenarios: 1. Radial cases (e.g., 96x96x120 grid) and Linear cases (e.g., 289x64x64 grid). 2. Mineralogy variations: pure limestone, pure dolomite, and 50% mixed mineralogy. 3. Temperature ranges from 35°C to 80°C in 15°C increments. 4. Completion types: open hole vs. single/multiple perforations.

## Key Findings

- The flow model showed agreement with corresponding transient and steady state analytical solutions within a relative error of 1.0%. ([[2022-aboluhom|Aboluhom, 2022, p. 58]])
- The reaction and thermal models are accurate with RSME of 0.0002 when compared with analytical solution. ([[2022-aboluhom|Aboluhom, 2022, p. 58]])
- The model successfully captured the qualitative trend of the efficiency curve being concaved upward and confirmed the existence of an optimum injection rate. ([[2022-aboluhom|Aboluhom, 2022, p. 58]])
- Different dissolution patterns during linear flooding of a limestone core, including face dissolution and conical wormhole, were accurately captured by the TRF model. ([[2022-aboluhom|Aboluhom, 2022, p. 58]])
- The inclusion of thermal energy transfer in the model allows for the prediction of shifts in optimum PVBT and injection rates when comparing limestone and dolomite at different temperatures. ([[2022-aboluhom|Aboluhom, 2022, p. 59]])
- Vectorizing code operations significantly reduced the time required to perform calculations by removing nested loops from the 3D array processing. ([[2022-aboluhom|Aboluhom, 2022, p. 62]])
- Sparse matrix reordering algorithms (e.g., Nested Dissection, AMD) were evaluated for their ability to reduce coefficient matrix inversion time in large sparse matrices. ([[2022-aboluhom|Aboluhom, 2022, p. 63]])
- The TRF model achieved a reduction in computational time of more than 90% compared to standard direct methods for large mesh sizes (e.g., reducing a 1.5-day simulation to 1.5 hours). ([[2022-aboluhom|Aboluhom, 2022, p. 68]])
- In pure limestone, increasing acid temperature slightly increased the required acid to break through but did not significantly alter wormhole shape or size. ([[2022-aboluhom|Aboluhom, 2022, p. 99]])
- In pure dolomite (a reaction-limited formation), higher acid temperatures significantly improved stimulation efficiency by transitioning the process toward a convection-limited regime. ([[2022-aboluhom|Aboluhom, 2022, p. 80]])
- Mixed mineralogy (50% calcite/dolomite) showed a competition where calcite slightly increased PVBT at 50°C while dolomite significantly decreased it, with dolomite dominating the behavior above 65°C. ([[2022-aboluhom|Aboluhom, 2022, p. 83]])
- Layered mineralogy (1:1) resulted in acid being primarily consumed in the limestone zone regardless of temperature, though the presence of a dolomite layer led to higher growth rates at high temperatures. ([[2022-aboluhom|Aboluhom, 2022, p. 90]])
- Perforated cased holes showed lower acid consumption and less fluid loss compared to open hole cases, with wormholes primarily following the path of highest permeability. ([[2022-aboluhom|Aboluhom, 2022, p. 100]])

## Limitations

The TRF model is restricted to single phase flow and assumes: incompressible single phase flow; steady-state reaction (equal diffusion/kinematic fluxes); ignored viscous dissipation energy; irreversible first-order reaction of strong acid; maximum acid dissolving strength regardless of CO2 quantity; neglected enthalpy dependency on pressure; and the assumption of cuboid samples and spherical pores.

## Recommendations and Future Work

Future work includes incorporating two-phase flow, variable fluid thermal/flow properties, multiple pore correlations, additional minerals/acids, different mesh types, and measuring productivity enhancement due to acid stimulation.

## Related Concepts

- [[matlab]]
- [[finite-volume-method]]
- [[wormhole]]
- [[pore-volume-to-breakthrough]]
- [[reservoir-simulation]]
- [[two-scale-continuum]]
- [[petrophysics]]
- [[reservoir-engineering]]
- [[lithology]]
