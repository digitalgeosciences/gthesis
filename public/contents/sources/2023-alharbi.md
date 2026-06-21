---
type: source
id: "142454"
title: "OPTIMIZATION OF WELL PLACEMENT AND PATH IN HYDROCARBON RESERVOIRS"
author: "Omar Qasim Alharbi"
year: 2023
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Abeeb Awotunde"
committee_members: []
source_file: "raw/142454 - OPTIMIZATION OF WELL PLACEMENT AND PATH IN HYDROCARBON RESERVOIRS.pdf"
url: "https://eprints.kfupm.edu.sa/142454"
study_area: "Synthetic reservoir models (Channel Reservoir, Distributed Permeability Field, and Brugge Field)"
keywords:
  - Well placement
  - Optimization algorithms
  - Genetic Algorithm (GA)
  - Differential Evolution (DE)
  - Net Present Value (NPV)
  - Well path
  - Local Grid Refinement (LGR)
  - Well path optimization
  - Recovery Factor (RF)
  - Stochastic algorithm
techniques:
  - differential-evolution-de
  - genetic-algorithm-ga
  - petrel
  - local-grid-refinement-lgr
  - reservoir-simulation
  - mathematical-modeling
  - petrophysics
tags:
  - degree/ms
  - technique/differential-evolution
  - technique/genetic-algorithm
  - technique/local-grid-refinement
  - technique/reservoir-simulation
  - technique/mathematical-modeling
  - technique/petrophysics
  - theme/reservoir-engineering
  - theme/petroleum-engineering
  - terminology/net-present-value
  - terminology/petrophysics
  - terminology/petrophysics
status: ingested
---

# OPTIMIZATION OF WELL PLACEMENT AND PATH IN HYDROCARBON RESERVOIRS

**Summary**: The thesis proposes a new approach for optimizing well placement and path design in hydrocarbon reservoirs by dividing wells into multiple segments to allow for more complex, non-linear paths. The study compares this 'Generalized Path' (GP) method against the traditional 'Straight-Line Path' (SLP) using three synthetic reservoir models to evaluate impact on Net Present Value (NPV) and Recovery Factor (RF).

---

## Research Problem

Standard well placement optimization often assumes straight-line trajectories, which fails to account for modern geo-steering capabilities that allow for complex, non-linear well paths. There is a need for an optimization framework that can handle multi-segment well paths while adhering to physical and economic constraints like minimum spacing and reservoir boundaries.

## Objectives

- Optimize the placement of wells of any shape (vertical, horizontal, s-shaped, etc.) using the Differential Evolution (DE) algorithm with Net Present Value (NPV) as the objective function.
- Integrate well segment directional information (inclination, azimuth, and length) as decision parameters to represent complex paths.
- Evaluate the impact of Local Grid Refinement (LGR) on representing well path changes within a grid block.
- Compare the proposed multi-segment approach with traditional straight-line path methods.
- Develop a method to optimize well placement and path by dividing wells into multiple segments.
- Evaluate the impact of segment count on optimization performance and simulation time.

## Methods

The study utilizes the Differential Evolution (DE) algorithm to optimize well placement. The optimization problem is formulated as an unconstrained one by incorporating constraints (minimum well spacing and reservoir boundaries) into the objective function using a penalty approach. Well paths are represented as a series of segments, where each segment's orientation is defined by changes in azimuth and inclination angles relative to the previous segment. Local Grid Refinement (LGR) is used to improve the representation of these segments within the simulation grid. The primary objective function is Net Present Value (NPV), which includes costs for facilities, drilling, and well trajectory complexity.

## Data and Materials

The study evaluates three distinct reservoir cases: a synthetic reservoir with channels, a reservoir with a distributed permeability field, and the Brugge field. For Example 1 (Channel Reservoir), the model consists of 75x75x4 grids with dimensions of 150 ft each.

## Key Findings

- The proposed multi-segment representation requires fewer decision parameters (13) compared to the standard coordinate-based approach (18) for a five-segment well, reducing the computational burden on the optimization algorithm. ([[2023-alharbi|Alharbi, 2023, p. 36]])
- The inclusion of Local Grid Refinement (LGR) allows for better representation of well path changes within a grid block compared to standard grids where only center points are accepted. ([[2023-alharbi|Alharbi, 2023, p. 41]])
- In the comparison between 'Generalized Path' (GP) and 'Straight-Line Path' (SLP), the GP approach showed results that were better if not comparable in most scenarios. ([[2023-alharbi|Alharbi, 2023, p. 15]])
- The penalty approach successfully converted constrained optimization problems into unconstrained ones, allowing the DE algorithm to find solutions while penalizing violations of well spacing and boundary constraints. ([[2023-alharbi|Alharbi, 2023, p. 50]])
- The GP approach consistently outperformed the SLP approach in terms of NPV across all three study cases. ([[2023-alharbi|Alharbi, 2023, p. 61]])
- In Example 1 (Channel Reservoir), the median realization of the GP approach provided better results than the best realization of the SLP approach. ([[2023-alharbi|Alharbi, 2023, p. 60]])
- A segment count of 10 was found to provide a slight enhancement in NPV compared to 5 or 15 segments, though 15 segments increased optimization difficulty. ([[2023-alharbi|Alharbi, 2023, p. 67]])
- Lower minimum well spacing values (e.g., 300 ft) resulted in more consistent results and higher NPV for the SLP approach compared to larger spacings like 1500 ft. ([[2023-alharbi|Alharbi, 2023, p. 68]])
- In Example 2, the GP method outperformed the SLP method by approximately $122 million in the highest NPV scenario. ([[2023-alharbi|Alharbi, 2023, p. 73]])
- The study found that a high number of segments can lead to extensive simulation time or convergence issues, while too few segments limit path design freedom. ([[2023-alharbi|Alharbi, 2023, p. 91]])
- In the Brugge Field (Example 3), the GP method's highest NPV was $68.8 million with a recovery factor of 21.58%. ([[2023-alharbi|Alharbi, 2023, p. 86]])

## Limitations

The study notes that high segment counts increase the number of decision parameters, potentially leading to convergence issues and longer simulation times.

## Recommendations and Future Work

- Apply upscaling techniques to grids where no wells are placed.
- Integrate more detailed calculations of the NPV for complex-path wells.
- Couple the optimization with model reduction techniques.
- Couple the optimization with techniques that help and guide the algorithm in the searching process.

## Related Concepts

- [[differential-evolution]]
- [[local-grid-refinement]]
- [[net-present-value]]
- [[petrophysics]]
- [[reservoir-engineering]]
- [[reservoir-simulation]]
- [[mathematical-modeling]]
- [[petroleum-engineering]]
