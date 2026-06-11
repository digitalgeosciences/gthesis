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
study_area: "Gulf of Aqaba, Saudi Arabia; Dammam Dome, Eastern Province, Saudi Arabia"
keywords:
  - Joint Inversion
  - Direct Current Resistivity (DCR)
  - Seismic Refraction (SR)
  - Local Optimization
  - Global Optimization
  - Synthetic Data
  - Real Data
  - Local optimization algorithms
  - Global optimization algorithms
  - Hybrid optimization techniques
  - High-Performance Computing (HPC)
  - Multi-objective Genetic Algorithm
  - NSGA II
  - Genetic Algorithm
  - Multi-objective optimization
  - Optimization Algorithms
  - Genetic Algorithm (GA)
  - Particle Swarm Optimization (PSO)
  - Simulated Annealing (SA)
  - Surrogate Optimization (SO)
  - Pattern Search (PS)
  - Gauss-Newton (GN)
  - Stochastic Modeling
techniques:
  - dcr
  - sr
  - genetic-algorithm
  - particle-swarm-optimization
  - simulated-annealing
  - surrogate-optimization
  - pattern-search
  - stochastic-methods
  - genetic-algorithm-ga
  - hpc
  - electrical-resistivity-tomography
  - refraction-seismics
  - parallel-computing
  - lom
  - gom
  - nsga-ii
  - matlab
  - svi
  - gaussian-newton
  - gauss-newton
  - supervirtual-interferometry-svi
  - joint-inversion
  - geostatistics
tags:
  - degree/phd
  - formation/dammam-formation
  - formation/rus-formation
  - formation/hadrukh-formation
  - formation/dam-formation
  - location/dammam-dome
  - location/eastern-province
  - location/saudi-arabia
  - location/dammam-area
  - technique/electrical-resistivity-tomography
  - technique/refraction-seismics
  - technique/matlab
  - technique/genetic-algorithm
  - technique/high-performance-computing
  - technique/parallel-computing
  - technique/seismic-inversion
  - technique/dc-resistivity
  - technique/particle-swarm-optimization
  - technique/simulated-annealing
  - technique/surrogate-optimization
  - technique/pattern-search
  - technique/well-log-analysis
  - technique/xrd
  - technique/sem
  - technique/joint-inversion
  - theme/applied-geophysics
  - theme/seismic-inversion
  - theme/near-surface-geophysics
  - theme/seismic-imaging
  - theme/geophysics-general
  - theme/uncertainty-quantification
  - terminology/joint-inversion
  - terminology/local-optimization
  - terminology/global-optimization
  - terminology/stochastic-modeling
  - terminology/uncertainty-quantification
  - terminology/non-uniqueness
  - terminology/pareto-optimality
  - terminology/multi-objective-optimization
status: ingested
---

# Joint Inversion of Direct Current Resistivity and Seismic Refraction Data, using Local and Global Optimization Algorithms with Synthetic and Real Data Examples

**Summary**: The thesis investigates the joint inversion of Direct Current Resist resistivity (DCR) and Seismic Refraction (SR) data using both local (Gauss-Newton) and global (Genetic Algorithm, including NSGA II) optimization algorithms. The study demonstrates that joint inversion improves structural resolution and consistency between resistivity and velocity models in identifying complex features like fault zones and 'megabreccia' zones within the Dammam Formation.

---

## Research Problem

The challenge of accurately interpreting subsurface structures using single geophysical methods due to limited resolution or non-uniqueness; specifically, how combining DCR and SR data through joint inversion with advanced optimization algorithms can improve the characterization of complex geological features like fault zones in the Dammam Formation.

## Objectives

- Evaluate the performance of different optimization algorithms (local vs. global) for joint inversion of DCR and SR data.
- Develop and apply a combined optimization approach to three synthetic anomaly models (dyke, positive, and combined positive/negative).
- Test stochastic methods to model uncertainties in DCR and SR data.
- Apply the proposed combined optimization approach to a real-world case study in the Dammam Dome.
- To formulate a joint inversion objective function involving seismic refraction and direct current resistivity methods.
- To formulate the multi-parameter objective function for the global optimization solution.
- To apply the optimum regularization parameters during the conventional (local) optimization algorithm to minimize the error function.
- To apply a hybrid technique (i.e., using local optimization into the global optimization solution) by a genetic algorithm (GA) to search for the global minimum of the objective function.
- To make the algorithm run on an HPC (High-Performance Computing) system optimizing the computational cost.
- To apply all suggested methods for data integration to real data.
- Evaluate the performance of different optimization algorithms for joint inversion of DCR and survey data.
- Develop a combined local and global optimization approach to constrain search space and reduce computational costs.
- Test the proposed methodology on synthetic models with varying anomaly types (dyke, positive, and combined).
- Apply the method to real-world case studies.
- Evaluate the performance of different optimization algorithms (LOM, GOM) for joint inversion of DCR and SR data.
- Develop a combined local-global optimization (CGO) approach to improve resolution and reduce computational costs.
- Apply the CGO method to synthetic models (dyke, positive, and combined anomalies).
- Validate the CGO method using real DCR and SR data from the Dammam Dome.
- Evaluate the performance of different optimization algorithms (local vs. global) for the joint inversion of DCR and SR data.
- Apply a combined optimization approach to synthetic anomaly models (dyke, positive, and combined).
- Perform a case study using real DCR and SR data from a roadcut in the Dammam Formation to map subsurface features.
- Evaluate the performance of five global optimization techniques (GA, PSO, SA, SO, PS) for DCR and SR data inversion.
- Compare these algorithms in terms of their ability to locate a global solution and computational cost.
- Apply a combined local and global optimization approach to synthetic models (dyke, positive, and combined).
- Perform a case study using real DCR and SR data from the Dammam Dome.
- Evaluate the performance of different optimization algorithms (GN, GA, PSO, SA, SO, PS) for DCR and SR data inversion.
- Develop a combined optimization approach using local and global methods for joint parameter estimation.
- Test the proposed methodology on synthetic models (dyke, positive, and combined anomalies).
- Apply the method to a real-world case study in the Gulf of Aqaba region to map fault structures.
- Evaluate the performance of different optimization algorithms for joint inversion of DCR and SR data.
- Develop a combined optimization approach using local and global algorithms.
- Apply the proposed combined optimization approach to three synthetic anomaly models (dyke, positive, and combined).
- Conduct a case study in the Dammam Dome to validate the methodology with real-world data.

## Methods

The study utilizes a joint inversion approach where DCR and SR data are integrated into a single objective function. It compares local optimization algorithms (which are faster but prone to local minima) with global optimization algorithms (which are more robust but computationally intensive). A hybrid technique is proposed, using local optimization as an initial step for global optimization via a Genetic Algorithm (GA) to improve efficiency. The methodology includes the use of cross-gradient constraints to ensure structural consistency between different geophysical datasets. The study also incorporates High-Performance Computing (HPC) to manage the computational demands of global inversion.

## Data and Materials

The study uses synthetic 2D models: (1) a dyke anomaly (resistivity 1250 ohm-m; velocity 2200 m/s), (2) a positive anomaly (resistivity 250 ohm-m; velocity 2000 m/s), and (3) a combined positive and negative anomaly (resistivity 1250 ohm-m, velocity 2500 m/s). DCR data were calculated using a dipole-dipole (DD) array with 49 electrodes spaced at 5m. SR forward calculations used 49 receivers at 5m spacing and 13 sources at 20m intervals.

## Key Findings

- The combined optimization approach outperforms both local and global methods in terms of percentage of anomaly reconstruction and convergence in synthetic tests. ([[2023-edigbue|Edigbue, 2023, p. 16]])
- The combined optimization approach is particularly effective in handling the non-linear and multi-dimensional nature of joint inversion problems. ([[2023-edigbue|Edigbue, 2023, p. 16]])
- Stochastic methods provide a useful tool for modeling uncertainties in DCR and SR data, providing more realistic estimates of subsurface properties. ([[2023-edigbue|Edigbue, 2023, p. 16]])
- The case study in the Dammam Dome demonstrated that the combined approach can delineate major geological structures including faults, fractures, and lithological boundaries. ([[2023-edigbue|Edigbue, 2023, p. 17]])
- DCR is related to electrical conductivities while SR measures seismic wave velocity; their joint inversion provides a more comprehensive understanding of subsurface structure. ([[2023-edigbue|Edigbue, 2023, p. 19]])
- Local optimization algorithms are faster and more efficient than global ones but are prone to getting stuck in local minima and are highly sensitive to initial conditions. ([[2023-edigbue|Edigbue, 2023, p. 21]])
- Global optimization algorithms, such as those used for complex subsurface models, do not require the calculation of derivatives and are less likely to get stuck in local minima but are computationally intensive. ([[2023-edigbue|Edigbue, 2023, p. 28]])
- Integrating both local and global optimization algorithms can reduce computational intensity while improving the accuracy and robustness of joint inversion results. ([[2023-edigbue|Edigbue, 2023, p. 22]])
- page_number_not_specified_in_source ([[2023-edigbue|Edigbue, 2023]])
- The combined local and global optimization method showed improved anomaly delineation compared to the local optimization method alone. ([[2023-edigbue|Edigbue, 2023, p. 33]])
- The multi-objective genetic algorithm (NSGA II) successfully identified Pareto optimal fronts for joint DCR and SR data. ([[2023-edigbue|Edigbue, 2023, p. 46]])
- Parallel computing significantly reduced the run time of the entire process for the global optimization algorithms. ([[2023-edigbue|Edigbue, 2023, p. 33]])
- The search space for the global algorithm was constrained by scaling local optimization results by 10-30% to ensure diversity while maintaining reliability. ([[2023-edigbue|Edigbue, 2023, p. 41]])
- SR genetic algorithm run times were recorded at 748, 876, and 1194 minutes for the three synthetic models, while DCR processing took between 150-181 minutes. ([[2023-edigbue|Edigbue, 2023, p. 45]])
- The CGO algorithm improved the misfit values compared to LOM for both DCR and SR methods but required higher computational costs than standard LOM. ([[2023-edigbue|Edigbue, 2023, p. 54]])

## Limitations

High-quality input data is essential for accurate inversion results; computational requirements of combined algorithms may limit large-scale applications; more examples from diverse geological settings are needed to prove robustness beyond the Dammam Dome.

## Recommendations and Future Work

- Investigate the applicability of the proposed methodology in different geological settings and with different data types.
- Improve data acquisition techniques and quality control measures for joint interpretation.
- Develop more efficient algorithms to handle large-scale datasets within reasonable timeframes.
- Apply the methodology in practical fields such as groundwater exploration, mineral exploration, and geotechnical engineering.

## Related Concepts

- [[electrical-resistivity-tomography]]
- [[seismic-refraction]]
- [[matlab]]
- [[joint-inversion]]
- [[local-optimization]]
- [[global-optimization]]
- [[dammam-dome]]
- [[seismic-inversion]]
- [[stochastic-modeling]]
- [[uncertainty-quantification]]
- [[genetic-algorithm]]
- [[high-performance-computing]]
- [[non-uniqueness]]
- [[near-surface-geophysics]]
- [[parallel-computing]]
- [[pareto-optimality]]
- [[applied-geophysics]]
- [[saudi-arabia]]
- [[multi-objective-optimization]]
