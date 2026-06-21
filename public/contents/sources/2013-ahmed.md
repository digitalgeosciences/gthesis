---
type: source
id: "139083"
title: "STOCHASTIC METHODS FOR SURFACTANT-POLYMER FLOODING AND WELL PLACEMENT OPTIMIZATION"
author: "HASSAAN AHMED"
year: 2013
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. ABEEE A. AWOTUNDE"
committee_members: []
source_file: "raw/139083 - STOCHASTIC METHODS FOR SURFACTANT-POLYMER FLOODING AND WELL PLACEMENT OPTIMIZATI.pdf"
url: "https://eprints.kfupm.edu.sa/139083"
study_area: "Saudi Aramco reservoirs (general study of EOR techniques)"
keywords:
  - Surfactant-Polymer flooding
  - Well placement optimization
  - Stochastic optimization
  - Covariance-Matrix Adaptation Evolutionary Strategy (CMAES)
  - Differential Evolution (DE)
  - Invasive Weed Optimization (IWO)
  - Stochastic Methods
  - Net Present Value (NPV)
  - Ultimate Recovery (UR)
  - CMAES
  - Differential Evolution
  - Invasive Weed Optimization
  - Net Present Value
  - Ultimate Recovery
techniques:
  - reservoir-simulation
  - matlab
  - petrel
  - cmaes
  - de
  - iwo
tags:
  - degree/ms
  - location/saudi-arabia
  - technique/reservoir-simulation
  - technique/matlab
  - technique/petrel
  - technique/cmaes
  - technique/de
  - technique/iwo
  - technique/cmas
  - theme/eor
  - theme/reservoir-engineering
  - theme/petroleum-engineering
  - terminology/eor
  - terminology/well-placement
  - terminology/petroleum-engineering
  - terminology/surfactant-polymer
  - terminology/geostatistics
  - terminology/petrophysics
  - terminology/petrophysics
  - terminology/reservoir-simulation
  - terminology/net-present-value
  - terminology/ultimate-recovery
status: ingested
---

# STOCHASTIC METHODS FOR SURFACTANT-POLYMER FLOODING AND WELL PLACEMENT OPTIMIZATION

**Summary**: The thesis investigates the optimization of surfactant-polymer (SP) flooding and well placement in two types of reservoirs: a channeled reservoir and a fully heterogeneous reservoir. It compares three stochastic algorithms—Covariance Matrix Adaptation-Evolutionary strategy (CMAES), Differential Evolution (DE), and Invasive Weed Optimization (IWO)—to maximize Net Present Value (NPV) and Ultimate Recovery (UR).

---

## Research Problem

The selection of optimal parameters for surfactant-polymer flooding (such as concentration and well placement) is a complex, multi-dimensional problem that is difficult to solve using traditional manual or deterministic methods. Existing stochastic algorithms like Genetic Algorithms are not always time-efficient enough for large-scale optimization.

## Objectives

- To study performance of three recent evolutionary optimization algorithms namely Covariance Matrix Adaptation Evolutionary Strategy (CMAES), Differential Evolution (DE) and Invasive Weed Optimization (IWO) in estimating the design variables in a surfactant-polymer flooding.
- To come up with recommendation on the best algorithm for the design of surfactant-polymer flooding.
- Optimize the design variables of a surfactant-polymer (SP) flood (surfactant concentration, polymer concentration, and duration of each flooding stage).
- Optimize the location and number of production and injection wells in a reservoir.
- Compare three stochastic optimization algorithms (CMAES, DE, and IWO) for solving these coupled problems.
- Compare the impact of well placement optimization on the overall recovery and economic outcomes.

## Methods

The study utilizes two synthetic reservoir models: Model 1 (a three-layer channel reservoir with four facies) and Model 2 (a two-layer heterogeneous reservoir with a fully distributed permeability field). Reservoir simulation was performed using the Eclipse simulator. Optimization of parameters including well locations, surfactant/polymer concentrations, and injection durations were conducted using three stochastic algorithms: Covariance Matrix Adaptation-Evolutionary Strategy (CMAES), Differential Evolution (DE), and Invasive Weed Optimization (IWO). Economic evaluation was based on Net Present Value (NPV) as the primary objective function.

## Data and Materials

Two synthetic reservoir models were used. Model 1: 6000 ft x 6000 ft x 150 ft, 30x30x3 grid blocks. Model 2: 10000 ft x 10000 ft x 100 ft, 50x50x2 grid blocks. Optimization parameters included 35 variables for Case-1a (well placement + SP flooding) and 5 variables for Case-1b (fixed well locations).

## Key Findings

- Stochastic optimization techniques can be used to find the optimal combination of operational parameters that give high Net Present value (NPV) and Ultimate Recovery (UR). ([[2013-ahmed|AHMED, 2013, p. 20]])
- CMAES is considered as the state of the art algorithm for continuous optimization and has been shown to outperform Genetic Algorithms in well placement problems. ([[2013-ahmed|AHMED, 2013, p. 34]])
- Differential Evolution (DE) is known for its robustness, simplicity, less number of control variables, and fast convergence. ([[2013-ahmed|AHMED, 2013, p. 34]])
- Invasive Weed Optimization (IWO) allows both feasible and infeasible solutions to take part in the evolutionary process, potentially allowing the system to 'cross' infeasible regions in non-convex search spaces. ([[2013-ahmed|AHMED, 2013, p. 48]])
- IWO showed the highest values of NPV among the three stochastic algorithms for best and median realizations in Case-1, while its result in the worst realization was comparable to CMAES. ([[2013-ahmed|AHMED, 2013, p. 101]])
- IWO demonstrated a more consistent convergence pattern than DE and CMAES for the same number of function evaluations. ([[2013-ahmed|AHMED, 2013, p. 91]])
- While CMAES yielded higher NPVs, it resulted in poor well placement configurations compared to IWO. ([[2013-ahmed|AHMED, 2013, p. 91]])
- IWO was identified as the most suitable technique for this case due to its balance of NPV values, convergence, consistency, and well placement configuration. ([[2013-ahmed|AHMED, 2013, p. 91]])
- High NPV values can be achieved by placing producers in high permeability zones and injectors in low permeability zones using a peripheral injection scheme. ([[2013-ahmed|AHMED, 2013, p. 92]])
- In Reservoir Model-1, SP flooding with well placement optimization (Case-1a) showed an increase in NPV of 97.56% to 223.96% compared to waterflooding. ([[2013-ahmed|AHMED, 2013, p. 103]])
- CMAES showed higher values of UR than DE and IWO in both best and worst realizations for Reservoir Model-1 (Case-3). ([[2013-ahmed|AHMED, 2013]])
- page_number_not_found_in_text_but_referenced_as_page_122 ([[2013-ahmed|AHMED, 2013]])
- CMAES showed the highest values of Ultimate Recovery (UR) among the three stochastic algorithms in both the channeled and fully heterogeneous reservoir models. ([[2013-ahmed|AHMED, 2013, p. 182]])
- IWO was identified as the second-best algorithm for determining maximum UR values, followed by DE. ([[2013-ahmed|AHMED, 2013, p. 182]])
- CMAES and IWO showed continuous improvement with small steps toward optimized solutions, while DE exhibited a tendency for early convergence to sub-optimal solutions. ([[2013-ahmed|AHMED, 2013, p. 182]])

## Limitations

Some optimized values for surfactant and polymer concentrations were found to be very low (near zero), which are considered artifacts of the optimization process seeking maximum solutions and would not be practical for implementation.

## Recommendations and Future Work

The study aims to provide a recommendation on the best algorithm for the design of surfactant-polymer flooding based on the comparison of CMAES, DE, and IWO.

## Related Concepts

- [[reservoir-simulation]]
- [[matlab]]
- [[eor]]
- [[well-placement]]
- [[petroleum-engineering]]
- [[saudi-arabia]]
- [[surfactant-polymer]]
- [[geostatistics]]
- [[petrophysics]]
- [[sequential-gaussian-simulation]]
- [[net-present-value]]
- [[reservoir-engineering]]
- [[cmas]]
- [[de]]
- [[iwo]]
- [[ultimate-recovery]]
