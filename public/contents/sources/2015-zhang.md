---
type: source
id: "139447"
title: "Optimum Damping Factor for Levenberg-Marquardt Algorithm with Application to Reservoir Parameter Estimation"
author: "Xian Zhang"
year: 2015
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Abeeb A. Awotunde"
committee_members: []
source_file: "raw/139447 - Optimum Damping Factor for Levenberg-Marquardt Algorithm with Application to Res.pdf"
url: "https://eprints.kfupm.edu.sa/139447"
study_area: "Synthetic reservoirs (Example 1 and Example 2)"
keywords:
  - Levenberg-Marquardt algorithm
  - damping factor
  - reservoir parameter estimation
  - history matching
  - Differential Evolution
  - sensitivity coefficients
  - inverse problems
  - line search
  - reservoir simulation
  - large-scale inverse problem
techniques:
  - lm
  - differential-evolution
  - adjoint-method
  - finite-volume-reservoir-simulator
  - mathematical-modeling
  - de
  - line-search
  - lsch
tags:
  - degree/ms
  - technique/lm
  - technique/mathematical-modeling
  - technique/de
  - technique/line-search
  - technique/lsch
  - theme/petrophysics
  - theme/petroleum-engineering
  - theme/reservoir-engineering
  - terminology/history-matching
  - terminology/sensitivity-coefficients
  - terminology/damping-factor
  - terminology/petrophysics
  - terminology/petrophysics
status: ingested
---

# Optimum Damping Factor for Levenberg-Marquardt Algorithm with Application to Reservoir Parameter Estimation

**Summary**: The thesis investigates the optimization of the Levenberg-Marquardt (LM) algorithm for reservoir parameter estimation by using Differential Evolution (DE) to determine the optimal damping factor. The study evaluates several correlation methods for estimating damping factors and concludes that while DE improves convergence speed and accuracy, specific correlation formulas lack generalizability across different scales.

---

## Research Problem

The determination of an appropriate damping factor in the Levenberg-Marquardt algorithm is critical for convergence in history matching; however, standard trial-and-error approaches are often inefficient or fail when initial guesses are poor. This study addresses this by integrating global optimization (DE) to find optimal damping factors.

## Objectives

- Develop an algorithm that uses Differential Evolution (DE) to estimate optimum damping factor for Levenberg-Marquardt (LM) algorithm
- Apply this method to three synthetic reservoirs of different size representing small, medium, and large-scale inverse problems to check feasibility for history matching
- Develop correlations based on statistical values of Gauss-Newton Hessian and optimum damping factors if the DE-based approach is more reliable/efficient
- Apply these correlations to test small and large-scale inverse problems again to determine if a generalized correlation exists for global use.
- Evaluate the performance of various gradient-based algorithms (LM1+LSCH, LM2+LSCH) in history matching.
- Compare the efficiency and accuracy of LM+DE against standard LM methods using synthetic reservoir models.

## Methods

The study utilizes a finite-volume reservoir simulator (fully-implicit) to solve nonlinear equations governing fluid flow in porous media. It employs the adjoint method to calculate sensitivity coefficients of data with respect to model parameters. The core methodology involves replacing the trial-and-error selection of the damping factor in the LM algorithm with an optimization process using Differential Evolution (DE). Additionally, a mathematical correlation is derived between the damping factor and statistical values of the Hessian matrix to provide a more automated way to determine the optimal step size.

## Data and Materials

Two synthetic reservoir models (Example 1 and Example 2). Example 1 includes a 16x16 grid with 5 wells (3 producers, 2 injectors) and 8 datasets (pressure and water cut). Example 2 involves more complex data matching with 16 total datasets. Synthetic noise is added to production data using a specific noise-signal-ratio formula.

## Key Findings

- The proposed algorithm using Differential Evolution (DE) shows a much faster convergence rate due to the elimination of uncertainty in estimating the damping factor. ([[2015-zhang|Zhang, 2015, p. 16]])
- When the proposed algorithm is used, it yields smaller residuals of the objective function compared to the traditional Levenberg-Marquardt algorithm. ([[2015-zhang|Zhang, 2015, p. 16]])
- The correlation derived by the proposed algorithm works well in dealing with reservoirs of different sizes. ([[2015-zhang|Zhang, 2015, p. 16]])
- Levenberg-Marquardt (LM) provides faster convergence than other gradient-based algorithms but is limited to small/medium problems where damping factor estimation via eigenvalues is fast; large-scale problems require trial-and-error. ([[2015-zhang|Zhang, 2015, p. 15]])
- The adjoint method's computation time for sensitivity coefficients does not depend on the number of model parameters, but rather on the amount of data to be matched. ([[2015-zhang|Zhang, 2015, p. 32]])
- The LM+DE algorithm eliminates the uncertainty of trial-and-error damping factor estimation, ensuring convergence even when initial guesses are far from optimal. ([[2015-zhang|Zhang, 2015, p. 71]])
- LM+DE and LM+DE+LSCH show perfectly overlapping results for residual decay, indicating that DE can successfully replace line search by providing an optimal damping factor that determines both direction and step length. ([[2015-zhang|Zhang, 2015, p. 73]])
- In Example 1, the LM+DE algorithm required only 4 iterations to reach a target tolerance, whereas LM1+LSCH and LM2+LSCH required up to 8 iterations. ([[2015-zhang|Zhang, 2015, p. 73]])
- The proposed LM+DE approach is more computationally efficient than standard LM methods because it avoids the extra calculations associated with line search in many cases. ([[2015-zhang|Zhang, 2015, p. 73]])
- LM+DE yields lower residual values compared to LM1+LSCH and LM2+LSCH, demonstrating superior performance in finding a local minimum. ([[2015-zhang|Zhang, 2015, p. 73]])
- The study confirms that while all algorithms can produce good matches for pressure and water cut data, the information content of the available data is often insufficient to uniquely resolve all reservoir parameters (e.g., permeability). ([[2015-zhang|Zhang, 2015, p. 75]])
- The LM+DE algorithm eliminates the uncertainty of estimating the damping factor by searching for it over the entire solution domain, allowing LM to avoid divergence from poor initial values. ([[2015-zhang|Zhang, 2015, p. 89]])
- LM+DE and LM+DE+LSCH showed a perfect overlap in residual results, indicating that DE successfully finds optimal damping factors for large-scale inverse problems. ([[2015-zhang|Zhang, 2015, p. 89]])
- The proposed LM+DE algorithm reached the target tolerance in fewer iterations (5) compared to standard LM algorithms (up to 8). ([[2015-zhang|Zhang, 2015, p. 90]])
- LM+DE is more efficient than standard LM algorithms because it reduces the total number of function evaluations and computation time for large-scale problems. ([[2015-zhang|Zhang, 2015, p. 90]])

## Limitations

The proposed correlation formulas did not yield consistent coefficients and were not robust enough to be considered generalized solutions for all problems. The algorithm's performance was also noted as not being consistently optimal across all cases.

## Recommendations and Future Work

Future research should focus on finding alternative methods to speed up the LM+DE algorithm, reduce computation time, and investigate other parameters that influence the performance of the proposed algorithm.

## Related Concepts

- [[lm]]
- [[differential-evolution]]
- [[adjoint-method]]
- [[history-matching]]
- [[sensitivity-coefficients]]
- [[damping-factor]]
- [[petrophysics]]
- [[de]]
- [[line-search]]
- [[reservoir-engineering]]
- [[not-stated]]
- [[lsch]]
- [[not-stated-in-source]]
