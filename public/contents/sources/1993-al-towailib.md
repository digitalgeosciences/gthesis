---
type: source
id: "10426"
title: "Comparative Study of Computational Methods for the Solution of the Two-Dimensional Reservoir Flow Equations"
author: "Hassan Saeed Al-Towailib"
year: 1993
department: "Petroleum Engineering"
degree: "PhD"
supervisor: "Dr. Muhammad Al-Marhoun"
committee_members: []
source_file: "raw/10426 - Comparative study of computational methods for the solution of the two-dimension.pdf"
url: "https://eprints.kfupm.edu.sa/10426"
study_area: "Not stated in source"
keywords:
  - reservoir flow equations
  - computational methods
  - direct methods
  - iterative methods
  - Gaussian elimination
  - successive over-relaxation
  - alternating direction implicit
  - 102
  - 103
  - 105
  - 108
  - 110
  - 112
  - 123
  - 129
  - 135
  - 144
  - 149
  - 157
  - 160
  - 164
  - 173
  - 178
  - 179
  - 189
  - 194
  - 203
  - two-dimensional
  - reservoir simulation
  - coefficient matrix
  - standard ordering
  - band matrix
  - RAD method
  - PSOR
  - LSOR
  - ADIP
  - SIP
  - CGTD
  - NF
  - Not stated in source
  - two-dimensional reservoir fluid flow
  - water flooding
  - direct solution methods
techniques:
  - gaussian-elimination
  - successive-over-relaxation
  - point-successive-over-relaxation
  - line-successive-over-relaxation
  - thomas-algorithm
  - alternating-direction-implicit-procedure
  - strongly-implicit-procedure
  - conjugate-gradient-truncated-direct-method
  - nested-factorization
  - d4-ordering
  - restricted-alternating-diagonal-ordering
  - mathematical-modeling
  - simulation
  - matrix-decomposition
  - psor
  - lsor
  - adip
  - sip
  - cgtd
  - nf
tags:
  - degree/phd
  - technique/gaussian-elimination
  - technique/successive-over-relaxation
  - technique/alternating-direction-implicit
  - technique/strongly-implicit-procedure
  - technique/nested-factorization
  - technique/mathematical-modeling
  - technique/simulation
  - technique/petrel
  - technique/reservoir-simulation
  - technique/lsor
  - technique/psor
  - technique/adip
  - technique/sip
  - theme/reservoir-simulation
  - theme/petroleum-engineering
  - theme/reservoir-engineering
  - theme/mathematical-geology
  - terminology/reservoir-simulation
  - terminology/petrophysics
  - terminology/petrophysics
  - terminology/porosity
  - terminology/permeability
  - terminology/tridiagonal-matrix
status: ingested
---

# Comparative Study of Computational Methods for the Solution of the Two-Dimensional Reservoir Flow Equations

**Summary**: The thesis compares various direct and iterative computational methods (such as PSOR, LSOR, ADIP, SIP, CGTD, and NF) for solving two-dimensional reservoir fluid flow equations. The study concludes that while iterative methods offer advantages in memory efficiency, the choice of method depends on the specific trade-off between calculation speed, memory requirements, and the complexity of the reservoir model.

---

## Research Problem

The selection of efficient and reliable numerical algorithms to solve the pressure and saturation equations in 2D and 3D reservoir simulations, where large coefficient matrices are typically sparse but computationally demanding.

## Objectives

- Compare the most commonly used computational solution techniques in reservoir simulation.
- Perform a full analysis of each method's performance.
- Evaluate computing efficiencies in terms of both calculation times and memory space requirements.
- Discuss grid ordering techniques for improving direct methods.
- Perform a complete up-to-date comparative study of commonly used computational methods (direct and iterative).
- Evaluate these methods based on computation efficiency (simulation time) and memory space requirements.

## Methods

The study utilizes a 2-D homogeneous five-spot water flooding model to test several numerical methods. Direct methods evaluated include D4-Gauss, RAD, and STBAND. Iterative methods evaluated include PSOR (Point Successive Over-relaxation), LSOR (Line Successive Over-relaxation), ADIP (Alternating Direction Implicit Procedure), SIP (Strongly Implicit Procedure), CGTD (Conjugate Gradient Truncated-Direct Method), and NF (Nested Factorization method). Performance is measured by CPU time per step, total memory requirements, and the number of iterations required to reach a convergence criterion of 0.0001 relative error.

## Data and Materials

A 19x19 uniform grid representing a quadrant of a five-spot water flooding pattern (361 total cells). Two wells: one producer at (19,19) and one injector at (1,1). Parameters include: initial water saturation (0.10), oil/water density, rock compressibility (3e-6 psi^-1), porosity (0.20), permeability (500 mD in all directions), and a 40 STB/D/psi injectivity index.

## Key Findings

- The D4-Gaussian Elimination method was found to be the most efficient among the direct methods tested. ([[1993-al-towailib|Al-Towailib, 1993, p. 21]])
- Point Successive Over-Relaxation (PSOR) was identified as the most efficient technique among iterative methods. ([[1993-al-towailib|Al-Towailib, 1993, p. 21]])
- The Nested Factorization (NF) method exhibited the fastest convergence of all iterative techniques. ([[1993-al-towailib|Al-Towailib, 1993, p. 21]])
- ADIP is considerably superior to ADEP in terms of accuracy but requires approximately 60% more computing time. ([[1993-al-towailib|Al-Towailib, 1993, p. 25]])
- SIP is a fast, reliable numerical iterative procedure that is less subject to rounding errors than ADIP and required significantly less computational effort in several tests. ([[1993-al-towailib|Al-Towailib, 1993, p. 43]])
- LSORC was found to be faster than other methods for strongly anisotropic cases (k_x = 100 k_y), while ADI was too slow. ([[1993-al-towailib|Al-Towailib, 1993, p. 47]])
- The D4 ordering reduced computing expense by a factor of up to 5.8 compared to standard ordering. ([[1993-al-towailib|Al-Towailib, 1993, p. 51]])
- The RAD procedure was found to be substantially faster than both STBAND and D4 schemes for a 345 cell system, requiring only 65.5% of the computer time required by STBAND. ([[1993-al-towailib|Al-Towailib, 1993, p. 55]])
- Among iterative techniques, PSOR was found to be the fastest overall, while ADI performed slightly better for homogeneous cases and SIP was considerably better for heterogeneous cases. ([[1993-al-towailib|Al-Towailib, 1993, p. 55]])
- Direct methods were determined to be more reliable than iterative ones as they did not require the search for optimum iteration parameters (a significant issue for methods like SIP). ([[1993-al-towailib|Al-Towailib, 1993, p. 55]])
- The RAD method required fewer iterations than SIP in all eight tested cases, though it was only faster than SIP in two-dimensional problems. ([[1993-al-towailib|Al-Towailib, 1993, p. 60]])
- Nested Factorization (NF) showed a marked advantage over other methods in terms of computational work for several 3D test cases compared to SIP and CGTD. ([[1993-al-towailib|Al-Towailib, 1993, p. 64]])
- The D4 ordering scheme was found to produce the greatest reduction in work among the tested orderings, requiring less work and storage than standard or diagonal orderings for a square grid. ([[1993-al-towailib|Al-Towailib, 1993, p. 82]])
- The RAD method was designed to eliminate the overhead calculations and extra storage needed for zero elements in band matrix algorithms by using an expanded grid. ([[1993-al-towailib|Al-Towailib, 1993, p. 93]])
- The Thomas algorithm is used to solve tridiagonal matrices generated in LSOR or ADIP methods. ([[1993-al-towailib|Al-Towailib, 1993, p. 117]])

## Limitations

Iterative methods (PSOR, LSOR, ADIP, SIP) are dependent on the selection of optimal relaxation parameters; any change in the reservoir problem requires a new optimization of these parameters. Furthermore, iterative procedures do not guarantee convergence for all reservoir problems.

## Recommendations and Future Work

Further evaluation of these methods is recommended for other types of 2D reservoir problems and for solving 3D reservoir flow equations.

## Related Concepts

- [[gaussian-elimination]]
- [[successive-over-relaxation]]
- [[alternating-direction-implicit]]
- [[strongly-implicit-procedure]]
- [[nested-factorization]]
- [[reservoir-simulation]]
- [[petrophysics]]
- [[saudi-arabia]]
- [[mathematical-modeling]]
- [[simulation]]
- [[petroleum-engineering]]
- [[porosity]]
- [[permeability]]
- [[reservoir-engineering]]
- [[tridiagonal-matrix]]
- [[psor]]
- [[lsor]]
