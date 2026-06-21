---
type: technique
title: "Finite Difference Modeling"
aliases:
  - "finite difference"
canonical: true
equipment: "Not stated in source"
software: "Not stated in source"
output: "numerical solution of the pressure field over time"
tags:
  - technique/finite-difference-modeling
  - theme/petroleum-engineering
sources:
  - "raw/10112 - Incorporating the effects of gas slippage and non-darcy flow in the measurement .pdf"
  - "raw/136144 - Effects of Geometry and Anisotropy on Permeability Measurements from Drill Cutti.pdf"
  - "raw/136249 - DETERMINATION OF MATRIX AND FRACTURE PERMEABILITIES IN WHOLE CORES USING PRESSUR.pdf"
  - "raw/139504 - TOWARDS ACCURATE SEISMIC IMAGING USING PHASE SHIFT PLUS INTERPOLATION FOR VISCO-.pdf"
  - "raw/139677 - NUMERICAL MODELING OF TURBULENT GAS FLOW IN POROUS MEDIA A FRACTIONAL DIFFUSION .pdf"
  - "raw/140317 - A MODIFIED BOUSSINESQ-BASED APPROACH FOR NUMERICAL INVESTIGATION OF THERMAL FLOO.pdf"
  - "raw/140553 - INVESTIGATION OF SEISMIC DATA AMPLIFICATION RESPONSE UNDER THE SAND DUNES OF RUB.pdf"
  - "raw/140641 - RELATION BETWEEN OFFSET AND VELOCITY DETERMINATION - APPLICATION ON A SYNTHETIC .pdf"
  - "raw/140670 - FULL WAVEFORM INVERSION FOR COMPLEX NEARSURFACE IMAGING USING SEG SEAM II SYNTHE.pdf"
  - "raw/142247 - SAND DUNE STATIC DELAY A DATA DRIVEN APPROACH AND ADJUSTMENT OF THE SAND CURVE.pdf"
  - "raw/142585 - Inversion of Vertical Seismic Profiling (VSP) Data Via Consecutive Neural Networ.pdf"
  - "raw/142656 - Fully-Implicit Formulation of the Capacitance Resistance Model to Simulate Two-P.pdf"
  - "raw/9940 - Pressure transient behavior of a well in anisotropic reservoir intersected by mu.pdf"
status: active
last_updated: 2026-06-20
---

# Finite Difference Modeling

**Summary**: A numerical method for solving differential equations by approximating derivatives with finite differences.

---

## How It Is Used in the Thesis Collection

- [[2000-khan|Khan, 2000]] used finite-difference-modeling to solve the non-linear governing partial differential equations.

- [[2009-mansur|Mansur, 2009]] applied a finite difference scheme to solve the diffusivity equation in both Cartesian and spherical systems.

- [[2009-bajaalah|BAJAALAH, 2009]] applied finite difference modeling to solve the non-linear governing equations in curvilinear coordinates.

- [[2015-mohammed|Mohammed, 2015]] used finite-difference modeling to generate synthetic shot records for both acoustic and visco-acoustic media.

- [[2015-alloush|Alloush, 2015]] applied finite-difference-modeling (L1 formula) to discretize the fractional derivative in the diffusivity equation.

- [[2016-david|DAVID, 2016]] used finite-difference modeling to solve the governing energy and momentum balance equations in 1D HFI systems.

- [[2017-almarzooq|Almarzooq, 2017]] used finite-difference-modeling to create synthetic records and evaluate the impact of sand dunes on seismic data.

- [[2018-abdulrahman|Abdulrahman, 2018]] used finite difference modeling to generate a viscoelastic synthetic seismic dataset from a 2D model.

- [[2018-mohamed|Mohamed, 2018]] used finite difference modeling via FDelmodc to simulate seismic wave propagation in the Arid SEAM model.

- [[2022-aljishi|AlJishi, 2022]] applied finite-difference modeling to generate synthetic data for validating the proposed autocorrelation approach.

- [[2023-almarzooq|Almarzooq, 2023]] used finite difference modeling to generate synthetic data for testing the network's ability to generalize across different generation algorithms.

- [[2023-sadeed|Sadeed, 2023]] used finite-difference modeling to solve the non-linear system of equations in the TP-CRMIP model.

- [[1996-al-hajji|Al-Hajji, 1996]] applied finite-difference-modeling to simulate the behavior of multiple fractures in an anisotropic reservoir.

## Instruments and Software



- [[2009-mansur|Mansur, 2009]] applied a finite difference scheme to solve the diffusivity equation in both Cartesian and spherical systems.

- [[2009-bajaalah|BAJAALAH, 2009]] applied finite difference modeling to solve the non-linear governing equations in curvilinear coordinates.

- [[2015-mohammed|Mohammed, 2015]] used finite-difference modeling to generate synthetic shot records for both acoustic and visco-acoustic media.

- [[2015-alloush|Alloush, 2015]] applied finite-difference-modeling (L1 formula) to discretize the fractional derivative in the diffusivity equation.

- [[2016-david|DAVID, 2016]] used finite-difference modeling to solve the governing energy and momentum balance equations in 1D HFI systems.

- [[2017-almarzooq|Almarzooq, 2017]] used finite-difference-modeling to create synthetic records and evaluate the impact of sand dunes on seismic data.

- [[2018-abdulrahman|Abdulrahman, 2018]] used finite difference modeling to generate a viscoelastic synthetic seismic dataset from a 2D model.

- [[2018-mohamed|Mohamed, 2018]] used finite difference modeling via FDelmodc to simulate seismic wave propagation in the Arid SEAM model.

- [[2022-aljishi|AlJishi, 2022]] applied finite-difference modeling to generate synthetic data for validating the proposed autocorrelation approach.

- [[2023-almarzooq|Almarzooq, 2023]] used finite difference modeling to generate synthetic data for testing the network's ability to generalize across different generation algorithms.

- [[2023-sadeed|Sadeed, 2023]] used finite-difference modeling to solve the non-linear system of equations in the TP-CRMIP model.

- [[1996-al-hajji|Al-Hajji, 1996]] applied finite-difference-modeling to simulate the behavior of multiple fractures in an anisotropic reservoir.

## Typical Workflow



## Key Results and Findings

- Used to develop a simulator that can model both gas slippage and non-Darcy flow effects. ([[2000-khan|Khan, 2000, p. 53]])

- The model was solved implicitly to mitigate issues of instability, showing high consistency across different grid sizes (9-15 nodes). ([[2009-mansur|Mansur, 2009, p. 27]])

- The method allowed for the solution of complex flow geometries that lack analytical solutions. ([[2009-bajaalah|BAJAALAH, 2009, p. 54]])

- Finite difference modeling provided high-quality results for generating shot records, though it is computationally intensive. ([[2015-mohammed|Mohammed, 2015, p. 49]])

- Discretized the modified diffusivity equation into an implicit and heterogeneous system using the L1 formula. ([[2015-alloush|Alloush, 2015, p. 43]])

- The results showed that fluid velocity, initial steam injection rate, and time have strong effects on the temperature profile when using a finite difference scheme. ([[2016-david|DAVID, 2016, p. 33]])

- The simulation results showed that the resonance phenomenon contributes significantly to observed amplification in low-impedance sediments. ([[2017-almarzooq|Almarzooq, 2017, p. 31]])

- The fdelmodc program was used to simulate both acoustic and visco-elastic media using Vp, Vs, Qp, Qs, and density values. ([[2018-abdulrahman|Abdulrahman, 2018, p. 25]])

- Finite difference forward modeling successfully simulated complex features like Karst and high-velocity inversions. ([[2018-mohamed|Mohamed, 2018, p. 35]])

- Synthetic results confirmed that high velocity contrasts at sand/sabkha boundaries produce predictable reverberation patterns. ([[2022-aljishi|AlJishi, 2022, p. 46]])

- The model successfully predicted velocities from data generated by advanced algorithms not used in training. ([[2023-almarzooq|Almarzooq, 2023, p. 125]])

- The implicit formulation was found to be unconditionally stable and computationally faster than semi-analytical solutions. ([[2023-sadeed|Sadeed, 2023, p. 45]])

- The 2D, single-phase finite difference model successfully replicated known solutions for both infinite and finite conductivity cases. ([[1996-al-hajji|Al-Hajji, 1996, p. 38]])

## Methodological Variations Across Sources


## Technical Limitations and Open Questions


## Related Concepts

**Related Techniques**: 

**Applicable to Terminology**: 

**Used in Themes**: 
