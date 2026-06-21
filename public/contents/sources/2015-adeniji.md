---
type: source
id: "139694"
title: "A Global Optimization Approach to the Gradual Deformation Method of History Matching"
author: "Adewale Wasiu Adeniji"
year: 2015
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Abeeb Awotunde"
committee_members: []
source_file: "raw/139694 - A Global Optimization Approach to the Gradual Deformation Method of History Matc.pdf"
url: "https://eprints.kfupm.edu.sa/139694"
study_area: "Synthetic reservoir model (not a specific geographic location)"
keywords:
  - History Matching
  - Gradual Deformation Method
  - Global Optimization
  - Particle Swarm Optimization
  - Differential Evolution
  - Simulated Annealing
  - Levenberg-Marquardt
techniques:
  - kriging
  - sequential-gaussian-simulation
  - petrel
  - matlab
  - simulation
  - reservoir-simulation
  - lm
  - de
  - pso
  - sa
tags:
  - degree/ms
  - technique/kriging
  - technique/sequential-gaussian-simulation
  - technique/petrel
  - technique/matlab
  - technique/reservoir-simulation
  - technique/lm
  - technique/de
  - technique/pso
  - technique/sa
  - theme/petrophysics
  - theme/reservoir-modeling
  - theme/mathematical-geology
  - terminology/history-matching
  - terminology/gradual-deformation-method
  - terminology/porosity
  - terminology/permeability
  - terminology/petrophysics
  - terminology/petrophysics
status: ingested
---

# A Global Optimization Approach to the Gradual Deformation Method of History Matching

**Summary**: The thesis investigates the use of global optimization algorithms (DE, PSO, and SA) to optimize deformation parameters within the Gradual Deformation Method (GDM) for history matching. The study concludes that global optimization algorithms, particularly Particle Swarm Optimization (PSO), outperform gradient-based methods like Levenberg-Marquardt in avoiding local minima while maintaining geological integrity.

---

## Research Problem

The primary problem is the tendency of gradient-based optimization algorithms to become trapped in local minima when used for history matching, which can lead to inaccurate reservoir models. The study addresses this by proposing global optimization algorithms as more robust alternatives within the GDM framework.

## Objectives

- Optimize GDM parameters using a gradient-based algorithm (LM).
- Optimize GDM parameters using three different global optimization algorithms (DE, PSO and SA) separately.
- To replace the gradient-based algorithm in GDM with a global optimization algorithm.
- To evaluate the performances of the three global optimization algorithms embedded in GDM against the performance of the LM used in GDM.
- Implement the Gradual Deformation Method (GDM) to match measured water cut and estimate reservoir permeability.
- Compare a gradient-based algorithm (Levenberg-Marquardt) against three global optimization algorithms (Differential Evolution, Particle Swarm Optimization, and Simulated Annealing).

## Methods

The study utilized a 3D synthetic reservoir model consisting of 60,000 grid cells. Geostatistical modeling included Ordinary Kriging to populate porosity and permeability from 85 well locations into a 2D domain (10,000 ft x 8,000 ft). Sequential Gaussian Simulation (SGS) was used to generate three realizations of rock properties for the 3D model. The Gradual Deformation Method (GDM) was employed to reduce the dimensionality of the inverse problem from 60,000 unknowns to 60 deformation parameters. Four optimization algorithms were compared: Levenberg-Marquardt (LM), Differential Evolution (DE), Particle Swarm Optimization (PSO), and Simulated Annealing (SA). The objective function (OF) was based on matching water cut data across various realizations.

## Data and Materials

A synthetic reservoir model with 6,000 grid cells; 15 permeability realizations generated via SGS; 85 wells used for initial geostatistical modeling; 15 production wells (10 producers, 5 injectors); 7 distinct realization sets for testing the optimization algorithms.

## Key Findings

- The dimensionality of the inverse problem was reduced from 60,000 unknown parameters to 60 deformation parameters using GDM. ([[2015-adeniji|Adeniji, 2015, p. 27]])
- Global optimization algorithms (DE, PSO, and SA) were found to be more effective, efficient, and reliable than the gradient-based LM algorithm in all seven test realizations. ([[2015-adeniji|Adeniji, 2015, p. 141]])
- The Particle Swarm Optimization (PSO) algorithm was identified as the most effective, efficient, and reliable among the global algorithms tested. ([[2015-adeniji|Adeniji, 2015, p. 141]])
- The study utilized a 3D synthetic reservoir model comprising sixty-thousand grid cells to evaluate the algorithms. ([[2015-adeniji|Adeniji, 2015, p. 22]])
- Kriging was used to populate porosity and permeability from 85 well locations into the 2D domain. ([[2015-adeniji|Adeniji, 2015, p. 44]])
- The GDM framework successfully matched water cut data to estimate permeability distributions across multiple realizations. ([[2015-adeniji|Adeniji, 2015, p. 140]])
- GDM combined with PSO provided the lowest L1 norm for both effectiveness and efficiency across multiple realizations. ([[2015-adeniji|Adeniji, 2015, p. 137]])
- The LM algorithm only successfully reduced the objective function below 0.5 in one out of seven realizations, highlighting its lower reliability compared to global methods. ([[2015-adeniji|Adeniji, 2015, p. 139]])

## Limitations

The study used a synthetic reservoir model rather than real-world field data; the number of permeability realizations combined in GDM was limited to 15; and only one specific type of production data (water cut) was used for matching.

## Recommendations and Future Work

- Use 3D datasets for geostatistical modeling.
- Increase the number of permeability realizations linearly combined in GDM to improve convergence.
- Incorporate other global optimization algorithms into the GDM framework.
- Conduct sensitivity analysis for each algorithm to determine optimal parameters and sub-region counts.

## Related Concepts

- [[kriging]]
- [[sequential-gaussian-simulation]]
- [[history-matching]]
- [[gradual-deformation-method]]
- [[petrel]]
- [[petrophysics]]
- [[matlab]]
- [[porosity]]
- [[permeability]]
- [[reservoir-simulation]]
- [[lm]]
- [[pso]]
- [[de]]
- [[sa]]
- [[reservoir-modeling]]
- [[mathematical-geology]]
