---
type: source
id: "140317"
title: "A MODIFIED BOUSSINESQ-BASED APPROACH FOR NUMERICAL INVESTIGATION OF THERMAL FLOODING PROCESS WITH EXPERIMENTAL VERIFICATION"
author: "OBEMBE ABIOLA DAVID"
year: 2016
department: "Petroleum Engineering"
degree: "PhD"
supervisor: "Enamul Hossain Dr. M"
committee_members: []
source_file: "raw/140317 - A MODIFIED BOUSSINESQ-BASED APPROACH FOR NUMERICAL INVESTIGATION OF THERMAL FLOO.pdf"
url: "https://eprints.kfupm.edu.sa/140317"
study_area: "Not stated in source"
keywords:
  - Thermal flooding
  - Hot Fluid Injection (HFI)
  - Boussinesq approximation
  - Memory-based formalism
  - Fractional derivative
  - Porous media
  - Darcy equation
  - Local Thermal Equilibrium (LTE)
  - No Local Thermal Equilibrium (NOLTE)
  - thermal flood
  - memory-based model
  - Oberbeck-Boussinesq approximation
  - numerical simulation
  - non-isothermal flow
  - thermal flow
  - reservoir pressure
  - wellbore pressure
  - Boussinesq-based model
  - non-isothermal simulation
  - fluid flow
  - porous medium
  - fractional order derivative
  - heat transfer
  - fluid velocity
  - rock porosity
  - permeability
  - Non-isothermal fluid flow
  - Numerical investigation
  - Pressure equation
  - Temperature equation
  - Rock properties
  - Porosity and permeability
techniques:
  - finite-difference-modeling
  - mathematical-modeling
  - reservoir-simulation
  - matlab
  - geostatistics
  - finite-volume-method
  - petrophysics
  - impit
tags:
  - degree/phd
  - technique/finite-difference-modeling
  - technique/mathematical-modeling
  - technique/reservoir-simulation
  - technique/matlab
  - technique/geostatistics
  - technique/finite-volume-method
  - technique/petrophysics
  - theme/reservoir-engineering
  - theme/petroleum-engineering
  - theme/reservoir-simulation
  - terminology/porosity
  - terminology/permeability
  - terminology/local-thermal-equilibrium
  - terminology/no-local-thermal-equilibrium
  - terminology/boussinesq-approximation
  - terminology/petrophysics
  - terminology/petrophysics
  - terminology/hydrogeology
  - terminology/thermal-equilibrium
  - terminology/viscosity
  - terminology/density
  - terminology/reservoir-simulation
  - terminology/thermal-flooding
status: ingested
---

# A MODIFIED BOUSSINESQ-BASED APPROACH FOR NUMERICAL INVESTIGATION OF THERMAL FLOODING PROCESS WITH EXPERIMENTAL VERIFICATION

**Summary**: The thesis investigates the thermal flooding process in porous media by developing and comparing two numerical models: a memory-based formalism using fractional derivatives and a modified Boussinesq (OB) approach. The study concludes that the Local Thermal Equilibrium (LTE) formulation is sufficient for predicting reservoir performance as rock and fluid temperatures were found to be nearly identical.

---

## Research Problem

Existing reservoir simulators often fail to accurately account for the continuous alteration of rock and fluid properties over time during thermal operations due to simplifying assumptions in flow models (e.g., Darcy's law). There is a lack of validated numerical solutions for memory-based models in the context of thermal flooding.

## Objectives

- Formulate four numerical models describing a 1D HFI process in a cylindrical core considering alterations in rock permeability, porosity, dispersion, and heat loss.
- Develop two mathematical formulations: one using a memory-based formalism (fractional derivatives) and another using the Oberberg-Boussinesq (OB) approximation.
- Validate the numerical simulators against analytical solutions of simplified problems.
- Validate models against published experimental data from Berea sandstone hot water flooding.
- Conduct numerical experiments to evaluate the impact of rock and fluid memory on pore pressure, velocity, and temperature.
- To develop a mathematical model by modifying the existing OB-based model to suit the thermal flooding process while modifying the Hossain et al. memory model to suit the HFI process in a cylindrical core under LTE and NOLTE conditions.

## Methods

The research employs two main approaches: mathematical modeling and numerical simulation. Two models were developed for a cylindrical core: one based on memory-based (MB) formulations using fractional derivative operators (Grunwald-Letnikov formula) to account for rock/fluid history, and another based on the modified Oberbeck-Boussinesq (OB) approximation to handle buoyancy effects while allowing fluid properties to vary with pressure and temperature. Both models were solved numerically using a finite volume discretization approach in MATLAB. The study considers both Local Thermal Equilibrium (LTE) and Non-Local Thermal Equilibrium (NOLTE) conditions. Verification was performed against analytical solutions for simplified cases and experimental data from literature (e.g., Arihara's hot water Berea sandstone data).

## Data and Materials

The study uses a series of computational models (labeled as Model LTE, Model NOLTE, and a Memory-based model). Input parameters include core dimensions (L, w, H), grid sizes (Nx, Ny, Nz), fluid properties (viscosity, density, thermal conductivity, specific heat) via the XSteam database, and rock properties (porosity, permeability, thermal expansion coefficients).

## Key Findings

- The results from the NOLTE (No Local Thermal Equilibrium) numerical simulators reveal that the rock and fluid temperatures are almost identical, making the LTE formulation sufficient for reservoir performance predictions. ([[2016-david|DAVID, 2016, p. 18]])
- A modified OB-based model was formulated to include variations in rock physical properties, which are typically omitted in standard Boussinesq approximations. ([[2016-david|DAVID, 2016, p. 18]])
- The memory-based approach (MB Model) uses fractional derivatives to relate fluid volumetric flux to pressure/potential, effectively capturing the impact of history on rock and fluid properties. ([[2016-david|DAVID, 2016, p. 21]])
- The study identified that higher cumulative oil recovery is predicted when alterations of rock properties are included in calculation models. ([[2016-david|DAVID, 2016, p. 34]])
- A modified Darcy law using fractional derivatives was shown to be more effective than standard models for capturing the effects of long-range dependence and trapping events. ([[2016-david|DAVID, 2016, p. 27]])
- The memory-based model utilizes a fractional derivative operator (Grunwald-Letnikov formula) to account for the history of pressure and temperature in determining flow, which is intended to overcome limitations of the standard Darcy equation. ([[2016-david|DAVID, 2016, p. 49]])
- The modified OB approach reduces non-linearity in governing equations by assuming constant density except for buoyancy terms while still allowing viscosity and density to vary with pressure and temperature. ([[2016-david|DAVID, 2016, p. 53]])
- A finite volume discretization was used to convert the partial differential equations into a set of coupled nonlinear algebraic equations, solved using an Implicit Pressure Implicit Temperature (IMPIT) scheme. ([[2016-david|DAVID, 2016, p. 58]])
- The study identifies that standard Darcy-based models may produce results differing significantly from actual behavior under thermal unsteady state conditions. ([[2016-david|DAVID, 2016, p. 44]])
- A wellbore model was modified to incorporate the memory formalism, resulting in a calculation for wellbore pressure that includes a summation of terms representing the history of the system. ([[2016-david|DAVID, 2016, p. 75]])
- The proposed numerical scheme was validated against the classic model; when gamma = 1, the results of both models were approximately equal. ([[2016-david|DAVID, 2016, p. 78]])
- A material balance check (MB) for various memory exponents (0.4 to 1.0) consistently yielded values near 1.0, confirming mass conservation in the simulator. ([[2016-david|DAVID, 2016, p. 81]])
- The distribution of the composite variable eta is not uniform across the reservoir due to its dependence on permeability and time. ([[2016-david|DAVID, 2016, p. 83]])
- Wellbore pressure in production wells shows a reversal in behavior: an initial drop due to drawdown followed by an increase as block pressures rise from influx and injection effects. ([[2016-david|DAVID, 2016, p. 85]])
- The magnitude of the memory exponent on block pressures is relatively small, with differences between gamma=1 and gamma=0.4 being only about 90 kPa (13 psia) at certain locations. ([[2016-david|DAVID, 2016, p. 86]])

## Limitations

The study notes that analytical solutions can only be derived for simplified cases (constant physical properties and an implicit memory exponent of one). Additionally, it acknowledges that the accuracy of existing simulators cannot be determined with certainty due to simplifying assumptions in their flow models.

## Recommendations and Future Work

- Perform a critical analysis of the physical implications of the volumetric flux proposed by Hossain et al.
- Develop more efficient methods to address high memory and computational requirements of the memory formulation.

## Related Concepts

- [[finite-difference-modeling]]
- [[mathematical-modeling]]
- [[porosity]]
- [[permeability]]
- [[local-thermal-equilibrium]]
- [[no-local-thermal-equilibrium]]
- [[boussinesq-approximation]]
- [[petrophysics]]
- [[reservoir-engineering]]
- [[petroleum-engineering]]
- [[hydrogeology]]
- [[thermal-equilibrium]]
- [[viscosity]]
- [[density]]
- [[matlab]]
- [[reservoir-simulation]]
- [[thermal-flooding]]
- [[berea-sandstone]]
