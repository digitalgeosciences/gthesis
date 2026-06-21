---
type: source
id: "142390"
title: "Joint Inversion of Direct Current Resistivity and Seismic Refraction Data, using Local and Global Optimization Algorithms with Synthetic and Real Data Examples"
author: "Paul Irikefe Edigbue"
year: 2023
department: "Geosciences"
degree: "PhD"
supervisor: "Abdullatif Prof. Al-Shuhail"
committee_members:
  - "Peter Prof. Mora"
  - "Sherif Dr. Mahmoud"
  - "Monther Prof. Alfuraidan"
source_file: "raw/142390 - Joint Inversion of Direct Current Resistivity and Seismic Refraction Data, using.pdf"
url: "https://eprints.kfupm.edu.sa/id/eprint/142390/"
study_area: "Dammam Dome, Eastern Province, Saudi Arabia; Gulf of Aqaba, Saudi Arabia"
keywords:
  - Joint inversion
  - Direct Current Resistivity (DCR)
  - Seismic Refraction (SR)
  - Local optimization
  - Global optimization
  - Genetic algorithm
  - NSGA II
  - Synthetic data
  - Real data
  - Direct Current Resisturity (DCR)
  - Multi-objective optimization
  - Particle swarm optimization
  - Optimization Algorithms
techniques:
  - dcr
  - sr
  - gauss-newton
  - genetic-algorithm
  - nsga-ii
  - parallel-computing
  - electrical-resistivity-tomography
  - refraction-seismics
  - matlab
  - particle-swarm-optimization
  - simulated-annealing
  - surrogate-optimization
  - pattern-search
  - supervirtual-interferometry
  - joint-inversion
  - local-optimization
  - global-optimization
  - mathematical-modeling
tags:
  - degree/phd
  - formation/damman-formation
  - formation/rus-formation
  - formation/hadrukh-formation
  - formation/dam-formation
  - location/dammam-area
  - location/eastern-province
  - location/dammam-dome
  - location/saudi-arabia
  - technique/electrical-resistivity-tomography
  - technique/seismic-interpretation
  - technique/mathematical-modeling
  - technique/signal-processing
  - technique/refraction-seismics
  - technique/matlab
  - technique/parallel-computing
  - technique/se-inversion
  - technique/joint-inversion
  - technique/local-optimization
  - technique/global-optimization
  - theme/geophysics-general
  - theme/near-surface-geophysics
  - theme/applied-geophysics
  - terminology/joint-inversion
  - terminology/non-uniqueness
  - terminology/cross-gradient
  - terminology/pareto-optimality
  - terminology/multi-objective-optimization
  - terminology/local-optimization
  - terminology/global-optimization
status: ingested
---

# Joint Inversion of Direct Current Resistivity and Seismic Refraction Data, using Local and Global Optimization Algorithms with Synthetic and Real Data Examples

**Summary**: The thesis investigates the joint inversion of Direct Current Resistivity (DCR) and Seismic Refraction (SR) data to improve subsurface imaging. It evaluates various optimization algorithms, proposing a combined local and global approach that uses local results to constrain the search space for global optimization, which was validated using synthetic models and a case study in the Dammam Dome.

---

## Research Problem

Standard individual inversions of DCR and SR data often fail to provide high-resolution images due to non-uniqueness; therefore, a joint inversion method using advanced optimization algorithms is needed to better characterize subsurface features like dykes and lithological variations in the Dammam Dome.

## Objectives

- To formulate a joint inversion objective function involving seismic refraction and direct current resistivity methods.
- To formulate the multi-parameter objective function for the global optimization solution.
- To apply the optimum regularization parameters during the conventional (local) optimization algorithm to minimize the error function.
- To apply a hybrid technique (i.e., using local optimization into the global system) by a genetic algorithm (GA) to search for the global minimum of the objective function.
- To make the algorithm run on an HPC (High-Performance Computing) system optimizing the computational cost.
- To apply all suggested methods for data integration to real data.

## Methods

The study utilizes a joint inversion framework combining DCR and SR data. Local optimization (LOM) uses iterative, derivative-based methods like Gauss-Newton with cross-gradient constraints to ensure structural consistency between resistivity and velocity models. Global optimization (GOM) employs the Genetic Algorithm (GA) and Non-Dominated Sorting Genetic Algorithm II (NSGA II) for multi-objective problems. A proposed Combined Optimization (CGO) method uses LOM results to define a constrained search space (scaling parameters by 10-30%) for the GA/NSGA II, reducing computational time. The study also incorporates parallel computing for forward model evaluations and tests these methods on three synthetic models (dyke, positive, and combined anomalies) and real data from the Dammam Dome.

## Data and Materials

Three synthetic 2D models: Model 1 (dyke anomaly), Model 2 (positive blocks), and Model 3 (high contrast). Synthetic parameters included resistivity values of 1250, 250, 50, and 250 ohm-m; velocities of 2200, 2000, and 1500 m/s. Data acquisition for synthetic models used a dipole-dipole (DD) array with 49 electrodes spaced at 5m and an SR layout with 49 receivers and 13 sources. Real data were collected from the Dammam Dome in Eastern Saudi Arabia.

## Key Findings

- The combined optimization approach outperforms both local and global optimization methods in terms of percentage of anomaly reconstruction and convergence in synthetic tests. ([[2023-edigbue|Edigbue, 2023, p. 16]])
- The combined optimization approach is particularly effective in handling the non-linear and multi-dimensional nature of the joint inversion problem. ([[2023-edigbue|Edigbue, 2023, p. 16]])
- Stochastic methods (GA, NSGA II) provide a useful tool for modeling uncertainties in DCR and SR data and providing more realistic estimates of subsurface properties. ([[2023-edigbue|Edigbue, 2023, p. 17]])
- The case study in the Dammam Dome demonstrated that the combined optimization approach can accurately delineate major geological structures, including faults, fractures, and lithological boundaries. ([[2023-edigbue|Edigbue, 2023, p. 17]])
- Using local optimization to define a search space for global optimization reduces computational time while maintaining accuracy by limiting parameters to a reliable range. ([[2023-edigbue|Edigbue, 2023, p. 35]])
- The NSGA II algorithm is effective for multi-objective joint inversion as it avoids the dominance of one objective function over another. ([[2023-edigbue|Edigbue, 2023, p. 41]])
- The combined optimization approach (CGO) successfully reduced the search space for global algorithms, leading to more stable results compared to standalone global optimization. ([[2023-edigbue|Edigbue, 2023, p. 59]])
- Local optimization (LOM) performed optimally in delineating both resistivity and velocity anomalies by utilizing smoothing terms and regularization parameters. ([[2023-edigbue|Edigbue, 2023, p. 54]])
- The multi-objective genetic algorithm (NSGA II) provided a balanced solution for joint DCR and SR data, avoiding the dominance of one method over the other. ([[2023-edigbue|Edigbue, 2023, p. 46]])
- Parallel computing in MATLAB reduced the run time for the DCR model by approximately 71% and for the SR model by 89% compared to non-parallel processing. ([[2023-edigbue|Edigbue, 2023, p. 56]])
- The DCR method provided a depth of 100m, while the SR method reached a maximum depth of 60m on Profile 1. ([[2023-edigbue|Edigbue, 2023, p. 74]])
- A large deformed zone (MBZ) was confirmed by both DCR and SR data as an area of low resistivity (<10 Ohm.m) and low velocity. ([[2023-edigbue|Edigbue, 2023, p. 80]])
- The bedrock in the southern part of Profile 2 was identified at a depth of 20m with high resistivity (>200 Ohm.m) and high velocity (>3000 m/s). ([[2023-edigbue|Edigbue, 2023, p. 77]])
- The combined optimization algorithms (GA, PSO, SA, SO, PS) all successfully reduced the misfit compared to the local Gauss-Newton (GN) method for both synthetic and real data. ([[2023-edigbue|Edigbue, 2023, p. 108]])
- For DCR synthetic data, GA and PSO were identified as the most promising techniques because they significantly reduced the misfit while maintaining manageable computation costs compared to other global methods. ([[2023-edigbue|Edigbue, 2023, p. 101]])

## Limitations

Local optimization algorithms are prone to getting stuck in local minima and are sensitive to initial conditions. Global optimization methods, while more robust, can be computationally intensive and time-consuming for large datasets without a hybrid approach.

## Recommendations and Future Work

- Investigate the applicability of the proposed methodology in diverse geological settings and with different data types.
- Improve data acquisition techniques and quality control measures to ensure high-quality input for inversion.
- Develop more efficient algorithms to handle large-scale datasets within reasonable timeframes.
- Utilize the proposed methodology in practical applications such as groundwater exploration, mineral exploration, and geotechnical engineering.

## Related Concepts

- [[electrical-resistivity-tomography]]
- [[seismic-interpretation]]
- [[mathematical-modeling]]
- [[joint-inversion]]
- [[non-uniqueness]]
- [[dammam-area]]
- [[near-surface-geophysics]]
- [[cross-gradient]]
- [[genetic-algorithm]]
- [[pareto-optimality]]
- [[signal-processing]]
- [[refraction-seismics]]
- [[matlab]]
- [[multi-objective-optimization]]
- [[damman-formation]]
- [[dammam-dome]]
- [[local-optimization]]
- [[global-optimization]]
