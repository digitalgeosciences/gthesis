---
type: source
id: "139717"
title: "Optimization of Expanded-Solvent Steam Assisted Gravity Drainage Using Differential Evolution"
author: "Tamer Magdi Moussa"
year: 2015
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Abeeb Awotunde"
committee_members: []
source_file: "raw/139717 - Optimization of Expanded-Solvent Steam Assisted Gravity Drainage Using Different.pdf"
url: "https://eprints.kfupm.edu.sa/139717"
study_area: "Athabasca heavy oil reservoir (simulated)"
keywords:
  - Differential Evolution
  - Self-adaptive DE
  - ES-SAGD
  - Heavy Oil
  - Optimization
  - Net Present Value
  - Solution Quality
  - Convergence Speed
  - Expanded-Solvent Steam Assisted Gravity Drainage
  - SaDE
  - MSaDE
  - Trial-vector generation
  - Candidate pool
  - NPV
  - cSOR
  - recovery factor
techniques:
  - differential-evolution
  - cmg-cmost
  - mathematical-modeling
  - simulation
  - matlab
  - optimization-algorithms
  - reservoir-simulation
  - petrophysics
tags:
  - degree/ms
  - location/athabasca-heavy-oil-reservoir
  - location/athabascaheavyoilreservoir
  - technique/differential-evolution
  - technique/petrel
  - technique/mathematical-modeling
  - technique/reservoir-simulation
  - technique/simulation
  - technique/matlab
  - technique/optimization-algorithms
  - technique/petrophysics
  - theme/reservoir-engineering
  - theme/petroleum-engineering
  - terminology/net-present-value
  - terminology/eor
  - terminology/petroleum-engineering
  - terminology/petrophysics
  - terminology/petrophysics
status: ingested
---

# Optimization of Expanded-Solvent Steam Assisted Gravity Drainage Using Differential Evolution

**Summary**: The thesis evaluates and compares different optimization algorithms, specifically variants of Self-Adaptive Differential Evolution (SaDE) and Modified Self-adaptive Differential Evolution (MSaDE), for optimizing parameters in Enhanced Oil Recovery (EOR) processes like Expanded-Solvent Steam Assisted Gravity Drainage. The study concludes that the MSaDE algorithm significantly outperforms the original SaDE across various test functions, demonstrating better convergence speed and solution quality.

---

## Research Problem

The study addresses the need for efficient optimization algorithms to manage the complexities of Enhanced Oil Recovery (EOR) processes, specifically focusing on the optimization of Expanded-Solvent Steam Assisted Gravity Drainage. The core problem is identifying which evolutionary algorithm (SaDE vs. MSaDE variants) provides the best convergence and stability when dealing with high-dimensional and multi-modal objective functions.

## Objectives

- Enhance the SaDE algorithm by introducing a new adaptation technique to improve solution quality, speed convergence, and reduce computational cost.
- Evaluate the performance of modified SaDE compared with original SaDE on benchmark test functions.
- Demonstrate how SaDE and modified SaDE serve as robust tools for designing and evaluating ES-SAGD recovery processes while accounting for solvent losses and economic parameters.
- Compare the profitability of SAGD and ES-SAGD using Net Present Value (NPV) instead of cSOR.
- Compare various optimization algorithms (SaDE, SaDE-2, MSaDE-1, MSaDE-2, DE, and PSO) in maximizing NPV for the ES-SAGD process.
- To compare these algorithms against standard benchmark functions (unimodal, multimodal, high-dimensional, and low-dimensional).

## Methods

The research involves: 1. Developing a modified Self-adaptive Differential Evolution (MSaDE) algorithm with a new adaptation technique based on 'quality' of improvement rather than just success rate. 2. Testing the algorithm against 22 benchmark functions to evaluate convergence and solution quality. 3. Constructing a numerical flow simulation model of an Athabasca heavy oil reservoir using CMG STARS. 4. Developing a framework integrating DE, PSO, and modified SaDE with CMG STARS to optimize ES-SAGD parameters. 5. Conducting sensitivity studies to determine parameter rankings and ranges. 6. Comparing optimization algorithms (DE, PSO, SaDE, MSaDE) based on NPV, Oil Recovery Factor (RF), and cSOR.

## Data and Materials

The study utilizes 22 benchmark test functions (as defined in literature such as Yao et al. 1999 and Hedar 2007). Each experiment was performed over 25 independent runs for each algorithm across various dimensions (e.g., 10-D, 30-D, and others specified in the benchmark table).

## Key Findings

- The proposed MSaDE algorithm, which uses a new adaptation technique based on solution improvement quality (Eq. 2.21), is shown to be more effective than original SaDE in terms of solution quality and convergence speed. ([[2015-moussa|Moussa, 2015, p. 43]])
- Cumulative Steam Oil Ratio (cSOR) was found not to be the correct performance indicator for optimizing ES-SAGD; Net Present Value (NPV) is a better representation of project profitability and recovery capability. ([[2015-moussa|Moussa, 2015, p. 13]])
- Downsizing the candidate pool of strategies in SaDE to two effective strategies (DE/Best/1/bin and DE/Rand/1/bin) improves solution quality and reduces computational costs compared to using four strategies. ([[2015-moussa|Moussa, 2015, p. 47]])
- Differential Evolution is a robust, easy-to-implement algorithm that outperforms Particle Swarm Optimization (PSO) and Genetic Algorithms (GA) on various test functions. ([[2015-moussa|Moussa, 2015, p. 28]])
- The MSaDE-2 algorithm showed superior performance compared to SaDE and SaDE-2 in several multi-modal functions, reaching lower median fitness values more rapidly. ([[2015-moussa|Moussa, 2015, p. 56]])
- For high-dimensional problems (e.g., function 1), the MSaDE variants demonstrated significantly better stability than the standard SaDE algorithm. ([[2015-moussa|Moussa, 2015, p. 53]])
- The study identified that for multi-modal functions, the number of local minima increases exponentially with problem dimension, making them the most difficult class for optimization. ([[2015-moussa|Moussa, 2015, p. 48]])
- A tolerance of 1E-15 was established in MATLAB to determine when an optimization run should be stopped based on fitness value. ([[2015-moussa|Moussa, 2015, p. 51]])
- MSaDE outperformed SaDE for all 10-D unimodal functions (f1-f5), with MSaDE-1 and MSaDE-2 showing nearly identical results. ([[2015-moussa|Moussa, 2015, p. 62]])
- SaDE-2 showed significant improvement in solution quality and convergence speed by downsizing the candidate pool of trial-vector generation strategies from four to two. ([[2015-moussa|Moussa, 2015, p. 62]])
- MSaDE outperformed SaDE for all functions except f10, where SaDE-2 showed the best median result in the 10-D multimodal category. ([[2015-moussa|Moussa, 2015, p. 62]])
- MSaDE-1 and MSaDE-2 both outperformed the original SaDE on 30-D multimodal functions (f6-f11), with MSaDE-1 performing better than MSaDE-2 in this specific case. ([[2015-moussa|Moussa, 2015, p. 64]])
- MSaDE performed better than SaDE in 82% of all the 22 functions considered. ([[2015-moussa|Moussa, 2015, p. 66]])
- The new adaptation technique (Eq. 2.20) was found to be more effective than the combination technique (Eq. 2.24). ([[2015-moussa|Moussa, 2015, p. 67]])
- In SaDE, no single strategy dominated the trial-vector generation techniques, leading to a loss of ability to identify the best technique and requiring more computational time. ([[2015-moussa|Moussa, 2015, p. 67]])

## Limitations

Not stated in source

## Recommendations and Future Work

It would be very interesting to investigate the performance of proposed MSaDE to solve practical engineering optimization problems and real-world applications.

## Related Concepts

- [[differential-evolution]]
- [[reservoir-simulation]]
- [[net-present-value]]
- [[eor]]
- [[reservoir-engineering]]
- [[athabasca-heavy-oil-reservoir]]
- [[mathematical-modeling]]
- [[simulation]]
- [[petroleum-engineering]]
- [[optimization-algorithms]]
- [[petrophysics]]
