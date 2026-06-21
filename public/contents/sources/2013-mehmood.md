---
type: source
id: "139084"
title: "Sensitivity-Based Upscaling for Large-Scale Reservoir Model History Matching"
author: "Saad Mehmood"
year: 2013
department: "Petroleum Engineering"
degree: "PhD"
supervisor: "Dr. Abeeb A. Awotunde"
committee_members: []
source_file: "raw/139084 - Sensitivity-Based Upscaling for Large-Scale Reservoir Model History Matching.pdf"
url: "https://eprints.kfupm.edu.sa/139084"
study_area: "Not stated in source"
keywords:
  - Upscaling
  - History Matching
  - Wavelet Transformation
  - Sensitivity Analysis
  - Model Space Reduction
  - Multi-phase Flow
  - Sensitivity-Based Upscaling
  - Reservoir Model
  - Wavelet Transform
  - Levenberg-Marquardt
  - Adjoint Method
  - wavelet fraction
  - permeability distribution
  - Wavelet Analysis
  - Parameter Estimation
techniques:
  - wavelet-transformation
  - reservoir-simulation
  - history-matching
  - sensitivity-analysis
  - levenberg-marquardt
  - mathematical-modeling
  - levenberg-marquard
  - wavelet-transform
  - adjoint-method
  - petrel
  - numerical-analysis
  - data-analysis
tags:
  - degree/phd
  - technique/wavelet-transformation
  - technique/reservoir-simulation
  - technique/history-matching
  - technique/sensitivity-analysis
  - technique/levenberg-marquard
  - technique/mathematical-modeling
  - technique/leavenberg-marquard
  - technique/wavelet-transform
  - technique/adjoint-method
  - technique/data-analysis
  - theme/reservoir-engineering
  - theme/petroleum-engineering
  - theme/reservoir-simulation
  - terminology/porosity
  - terminology/permeability
  - terminology/petrophysics
  - terminology/reservoir-simulation
  - terminology/water-cut
status: ingested
---

# Sensitivity-Based Upscaling for Large-Scale Reservoir Model History Matching

**Summary**: The thesis investigates a sensitivity-based upscaling method for large-scale reservoir models using wavelet functions to reduce the number of parameters in history matching. The study evaluates three different wavelet fractions (0.6, 0.4, and 0.25) across various grid sizes (16x16, 32x32, and 64x64) to determine the impact on permeability estimation accuracy.

---

## Research Problem

Simulating flow at the finest scale in large reservoirs is computationally expensive; however, traditional upscaling methods often require separate, complex calculations for coarse-scale permeabilities and can lead to a loss of accuracy. There is a need for an upscaling method integrated with history matching that utilizes sensitivity analysis to determine grid blocks to be merged.

## Objectives

- Devise an upscaling technique for reservoir models based on wavelet sensitivity thresholding.
- Integrate the upscaling technique, forward modeling, and history matching process.
- Use wavelet sensitivity thresholding to determine the manner of coarsening reservoir grid blocks during history matching.
- Avoid the problem of computing coarse-scale permeabilities by using pre-determined regions of homogeneous permeability distribution.
- To develop an upscaling procedure based on the sensitivity of production data to model parameters.
- To implement wavelet transform and thresholding for dimensionality reduction in both data and model spaces.

## Methods

The study utilizes a 2Dwp-wk approach involving wavelet transformation and reduction of data and model spaces. The process involves: 1) Selecting a set of wavelets for measured data; 2) Building a reduced model space by thresholding the full wavelet sensitivity matrix; 3. Identifying neighboring grid blocks with identical permeability values (resulting from the thresholding) to be merged into single coarse-scale blocks. Two scenarios are tested: one where all adjacent grids with equal permeability but no well are combined, and another where the number of combinable neighbors is restricted to reduce the upscaling ratio.

## Data and Materials

The study uses three synthetic reservoir systems: a 16x16 grid with 768 production data points; a 32x32 grid with 1536 production data points; and a 64x64 grid with 3840 production data points (implied by the scale of analysis).

## Key Findings

- The results obtained using sensitivity-based upscaling are reasonably good and in very close agreement with the match provided by fine-scale inverse analysis. ([[2013-mehmood|Mehmood, 2013, p. 23]])
- Almost all cases considered showed that the reliability of the technique is high across various scenarios. ([[2013-mehmood|Mehmood, 2013, p. 23]])
- The proposed method avoids the requirement of coarse-scale permeability calculations because areas of homogeneous permeability are determined by the sensitivity of production data to model parameters. ([[2013-mehmood|Mehmood, 2013, p. 29]])
- Combining gridblocks based on the pattern obtained from model reduction results in a coarse-scale unstructured grid system. ([[2013-mehmood|Mehmood, 2013, p. 29]])
- Constraint 2 (excluding well-blocks and their immediate neighbors from merging) provided better results than Constraint 1 in both pressure and water-cut matching across all tested reservoir sizes. ([[2013-mehmood|Mehmood, 2013, p. 95]])
- The use of wavelet transform for data space reduction allows for the integration of different types of production data while reducing storage costs. ([[2013-mehmood|Mehmood, 2013, p. 78]])
- Sensitivity-based thresholding in the model space reduces the number of parameters from M to a smaller subset, effectively managing non-uniqueness during history matching. ([[2013-mehmood|Mehmood, 2013, p. 77]])
- The Adjoint Method is identified as the most efficient method for calculating sensitivity coefficients when only the gradient of the objective function is required. ([[2013-mehmood|Mehmood, 2013, p. 73]])
- A reduction in the model space to a fraction of 0.25 (retaining 25% of wavelets) results in more heterogeneous permeability distributions with larger homogeneous patches compared to higher fractions. ([[2013-mehmood|Mehmood, 2013, p. 96]])
- For the 16x16 system, the compression ratio was 10.1 for all wavelet fractions. ([[2013-mehmood|Mehmood, 2013, p. 104]])
- In the 32x32 system, the number of parameters reduced from 619 (at fraction 0.6) to 275 (at fraction 0.25). ([[2013-mehmood|Mehmood, 2013, p. 114]])
- The study found that as the wavelet fraction decreases, the homogeneity of the permeability system increases. ([[2013-mehmood|Mehmood, 2013, p. 104]])
- A good match for water-cut was achieved even with a different mobility scenario in the 32x32 system (fraction 0.4). ([[2013-mehmood|Mehmood, 2013, p. 113]])
- The results for upscaled history matching were very good, but fine-scale matches were slightly better. ([[2013-mehmood|Mehmood, 2013, p. 113]])
- A compression ratio of 12.92 was achieved by reducing the number of wavelets from 4096 parameters to a range of 942-2545 depending on the wavelet fraction. ([[2013-mehmood|Mehmood, 2013, p. 128]])

## Limitations

The study notes that while the substitution method for sensitivity is simple, it requires M+1 simulations, making it impractical for large parameter sets. The forward sensitivity method calculates sensitivities for all grid blocks even though only well locations are needed.

## Recommendations and Future Work

- Perform the method on three-dimensional reservoirs instead of two-dimensional systems.
- Test and compare different data and model space thresholding techniques.
- Incorporate various data for relative permeability and analyze matching reliability.
- Extend the work to include three-phase flow and compositional simulation.

## Related Concepts

- [[wavelet-transformation]]
- [[reservoir-simulation]]
- [[history-matching]]
- [[sensitivity-analysis]]
- [[levenberg-marquard]]
- [[porosity]]
- [[permeability]]
- [[petrophysics]]
- [[reservoir-engineering]]
- [[petroleum-engineering]]
- [[leavenberg-marquard]]
- [[wavelet-transform]]
- [[adjoint-method]]
- [[mathematical-modeling]]
- [[water-cut]]
