---
type: source
id: "139078"
title: "GLOBAL OPTIMIZATION STRATEGIES FOR WELL TEST IN SINGLE AND DUAL POROSITY RESERVO"
author: "Ali Ahmed Al-Nemer"
year: 2013
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Abeeb Awotunde"
committee_members: []
source_file: "raw/139078 - GLOBAL OPTIMIZATION STRATEGIES FOR WELL TEST IN SINGLE AND DUAL POROSITY RESERVO.pdf"
url: "https://eprints.kfupm.edu.sa/139078"
study_area: "Not stated in source"
keywords:
  - Well test analysis
  - Pressure transient analysis
  - Dual porosity reservoir
  - Horizontal well
  - Stochastic optimization
  - Differential Evolution
  - Particle Swarm Optimization
  - Local Unimodal Sampling
  - Many Optimizing Liaisons
  - Well Test
  - Dual Porosity Model
  - Single Porosity Reservoir
  - Optimization Algorithms
  - Particle Swarm Optimization (PSO)
  - Differential Evolution (DE)
  - Local Unimodal Sampling (LUS)
  - Many Optimization Liaisons (MOL)
  - Optimization Strategy
  - LUS Algorithm
  - MOL Algorithm
  - Dual Porosity
  - Optimization
  - levenberg-marquardt
  - Global Optimization
techniques:
  - petrophysics
  - mathematical-modeling
  - reservoir-simulation
  - levenberg-marquardt-algorithm
  - differential-evolution
  - particle-swarm-optimization
  - local-unimodal-sampling
  - many-optimizing-liaisons
  - particle-swarm-optimization-pso
  - differential-evolution-de
  - mol-algorithm
  - well-log-analysis
  - local-update-strategy-lus
  - simulation
  - data-analysis
  - levenberg-marquardt
  - lus-algorithm
tags:
  - degree/ms
  - technique/petrophysics
  - technique/mathematical-modeling
  - technique/reservoir-simulation
  - technique/levenberg-marquardt
  - technique/differential-evolution
  - technique/particle-swarm-optimization
  - technique/local-unimodal-sampling
  - technique/many-optimizing-liaisons
  - technique/simulation
  - technique/data-analysis
  - technique/leavenberg-marquard
  - theme/reservoir-engineering
  - theme/petroleum-engineering
  - terminology/porosity
  - terminology/permeability
  - terminology/skin
  - terminology/fractured-reservoirs
  - terminology/petrophysics
  - terminology/well-test
  - terminology/fitness
status: ingested
---

# GLOBAL OPTIMIZATION STRATEGIES FOR WELL TEST IN SINGLE AND DUAL POROSITY RESERVO

**Summary**: The thesis evaluates and compares various global optimization algorithms, including Levenberg-Marquardt, Differential Evolution (DE), Particle Swarm Optimization (PSO), and others like MOL and LUS, for optimizing well test data in single and dual porosity reservoir models. It concludes that stochastic algorithms are superior for complex solution spaces with many local minima, while the Levenberg-Marquardt algorithm is efficient for simpler problems or when computational time is limited.

---

## Research Problem

The non-uniqueness of solutions in pressure transient analysis (PTA) leads to a high probability of identifying local minima instead of global minima, especially as the number of unknown parameters increases. Traditional methods like Levenberg-Marquard may fail to find the correct reservoir parameters in complex models such as dual porosity or horizontal wells.

## Objectives

- Evaluate the performance of four stochastic optimization algorithms (Differential Evolution, Particle Swarm Optimization, Local Unimodal Sampling, and Many Optimizing Liaisons) in estimating global solution parameters for two reservoir models.
- Compare these stochastic algorithms against the Levenberg-Marquard algorithm in both horizontal well and dual porosity reservoir models.
- Determine the impact of the number of unknowns and the range of values on the performance of each optimization algorithm.
- Evaluate different global optimization algorithms (DE, LUS, MOL) for well test analysis.
- Compare the performance of these algorithms against standard Particle Swarm Optimization (PSO).
- Determine optimal behavioral parameters for each algorithm to improve accuracy in identifying reservoir properties.

## Methods

The study utilizes a computational approach where two distinct reservoir models (a horizontal well in a box-shaped reservoir and a vertical well in a dual porosity reservoir) were modeled. A synthetic dataset was generated for both models, including all flow regimes, and Gaussian White Noise was added to simulate real measurement conditions. Five optimization algorithms—Levenberg-Marquard, Differential Evolution, Particle Swarm Optimization, Local Unimodal Sampling, and Many Optimizing Liaisons—were used to estimate parameters (e.g., permeability, skin factor, storativity ratio). Each algorithm was run for 25 realizations, and results were ranked by fitness to compare the performance of different parameter sets.

## Data and Materials

The study utilized synthetic reservoir models: one horizontal well model in a box-shaped reservoir (calculating parameters like permeability, skin factor, thickness, and boundary length) and one dual porosity model (calculating parameters like fracture permeability, matrix porosity, skin factor, radius, storativity ratio, and interporosity flow). Each algorithm was run for 25 realizations to evaluate performance.

## Key Findings

- Differential evolution algorithms showed the best performance in Dual Porosity when λ (interporosity flow) are the unknowns, and in horizontal well model when the unknowns are permeability and the length of the parallel boundary. ([[2013-al-nemer|Al-Nemer, 2013, p. 13]])
- Levenberg-Marquard algorithm performed better than Particle Swarm Optimization, Local Unimodal Sampling and Many Optimizing Liaisons in horizontal well model. ([[2013-al-nemer|Al-Nemer, 2013, p. 14]])
- As the number of unknowns increases, more solutions can be found, but it also complicates the solution space geometry and increases the number of local minima. ([[2013-al-nemer|Al-Nemer, 2013, p. 22]])
- When the number of unknowns decreased (from 6 to 3), the achieved fitness for all algorithms improved, and the obtained skin value became closer to the actual skin value (5). ([[2013-al-nemer|Al-Nemer, 2013, p. 22]])
- Increasing the range of values for unknown parameters leads to a more complex solution space, resulting in higher differences between the observed skin and the actual skin. ([[2013-al-nemer|Al-Nemer, 2013, p. 22]])
- The study found that stochastic algorithms are effective at finding global optima because they use multiple agents starting from different random points, increasing the probability of avoiding local minima compared to single-start methods. ([[2013-al-nemer|Al-Nemer, 2013, p. 23]])
- The DE algorithm using the DE/best/1 scheme was selected as the primary optimization method in the study. ([[2013-al-nemer|Al-Nemer, 2013, p. 47]])
- The dual porosity model includes four distinct flow regimes: wellbore storage, fissure radial, transition, and equivalent infinite acting radial flow. ([[2013-al-nemer|Al-Nemer, 2013, p. 51]])
- A C# .Net program was developed to generate the pressure response models for both single and dual porosity systems. ([[2013-al-nemer|Al-Nemer, 2013, p. 62]])
- Gaussian white noise with a standard deviation of 0.3 was added to synthetic data to simulate real-world measurement conditions. ([[2013-al-nemer|Al-Nemer, 2013, p. 62]])
- The study identified that at 300 function evaluations, specific parameter combinations were the best performing for the PSO algorithm. ([[2013-al-nemer|Al-Nemer, 2013, p. 66]])
- The best performance in PSO was found using behavioral parameters w=0.729 and C=1.49445 (or similar high-value combinations), outperforming standard literature recommendations. ([[2013-al-nemer|Al-Nemer, 2013, p. 68]])
- A population size of 30 performed the best for the DE algorithm, while a size of 60 also showed good performance with continued improvement as evaluations increased. ([[2013-al-nemer|Al-Nemer, 2013, p. 71]])
- Reducing the population size below 30 (e.g., to 12) caused the algorithm to stop improving after approximately 300 iterations. ([[2013-al-nemer|Al-Nemer, 2013, p. 71]])
- In the case of the dual porosity model, a dynamic weight strategy (where w decreases linearly from 0.7 to 0.28) worsened PSO performance compared to static weights. ([[2013-al-nemer|Al-Nemer, 2013, p. 71]])

## Limitations

The study notes that while the objective function value is a measure of how well an algorithm performs, it does not necessarily reflect the absolute correctness of the solution if multiple parameters change simultaneously (e.g., skin and wellbore storage).

## Recommendations and Future Work

It is recommended to use the Chang and Ershaghi (1986) method for LM if a good initial guess is required, and to choose DE for complex problems with high evaluation counts or PSO when computational time is limited.

## Related Concepts

- [[petrophysics]]
- [[mathematical-modeling]]
- [[particle-swarm-optimization]]
- [[levenberg-marquard]]
- [[porosity]]
- [[permeability]]
- [[skin]]
- [[fractured-reservoirs]]
- [[reservoir-engineering]]
- [[differential-evolution]]
- [[petroleum-engineering]]
- [[well-test]]
- [[saudi-arabia]]
- [[reservoir-simulation]]
- [[fitness]]
- [[not-stated]]
- [[not-specified-location]]
- [[simulation]]
- [[leavenberg-marquard]]
