---
type: source
id: "142091"
title: "Multi-Mesh Modelling and Applications to Two-Phase Flow and Chemical Flooding Problems"
author: "Adedimeji Abdulsalam Adeyemi"
year: 2022
department: "Petroleum Engineering"
degree: "PhD"
supervisor: "Dr. Abeeb Awotunde"
committee_members: []
source_file: "raw/142091 - Multi-Mesh Modelling and Applications to Two-Phase Flow and Chemical Flooding Pr.pdf"
url: "https://eprints.kfupm.edu.sa/142091"
study_area: "Not stated in source"
keywords:
  - Multi-Mesh Modelling
  - Two-Phase Flow
  - Chemical Flooding
  - Dual Mesh Method
  - Extended Dual Mesh Method
  - Triple Mesh Method
  - Upscaling
  - Enhanced Oil Recovery
  - Dual Mesh Method (DMM)
  - Extended Dual Mesh Method (EDMM)
  - Triple Mesh Method (TMM)
  - Extended Triple Mesh Method (ETMM)
  - Downscaling
  - Numerical dispersion
  - Polymer Flooding
  - Surfactant Flooding
techniques:
  - reservoir-simulation
  - petrophysics
  - mathematical-modeling
  - impes
  - petrel
  - matlab
tags:
  - degree/phd
  - technique/reservoir-simulation
  - technique/petrophysics
  - technique/mathematical-modeling
  - technique/impes
  - technique/petrel
  - technique/matlab
  - theme/reservoir-simulation
  - theme/eor
  - theme/chemical-flooding
  - terminology/petrophysics
  - terminology/eor
  - terminology/numerical-dispersion
  - terminology/water-cut
  - terminology/upscaling
  - terminology/directional-oversampling
  - terminology/petrophysics
  - terminology/chemical-flooding
status: ingested
---

# Multi-Mesh Modelling and Applications to Two-Phase Flow and Chemical Flooding Problems

**Summary**: The thesis investigates multi-mesh modeling techniques, specifically the Dual Mesh Method (DMM), and proposes three new methods: Extended Dual Mesh Method (EDMM) using directional oversampling, and two Triple Mesh Methods (TMM and ETMM). These were evaluated for their accuracy and efficiency in simulating two-phase flow and chemical enhanced oil recovery (EOR) processes.

---

## Research Problem

The high computational cost of simulating fine-scale reservoir models (HRMs) makes it difficult to perform complex tasks like uncertainty quantification or optimization. While upscaling reduces costs, it introduces homogenization and numerical dispersion errors. Existing multi-mesh methods like DMM aim to mitigate these but often suffer from poor coupling between coarse and fine scales and lack accuracy in complex scenarios like chemical flooding.

## Objectives

- Development and evaluation of a new efficient two phase flow two-mesh method for simulating water flooding problems
- Evaluate the performance of Dual Mesh Method (DMM) and Extended Dual Mesh Method (EDMM) in 2D and 3D water-flooding scenarios.
- Develop and evaluate Triple Mesh Method (TMM) and Extended Triple Mesh Method (ETMM) for multi-mesh modeling.
- Assess the impact of different upscaling methods (PSM, WDU, GA) on the accuracy of EDMM.
- Investigate the effect of solution sequence and parallelization on the accuracy and speed of DMM and EDMM.
- Apply these multimesh methods to Chemical Enhanced Oil Recovery (CEOR) problems involving surfactant and polymer flooding.

## Methods

The study utilizes the IMPES (Implicit Pressure, Explicit Saturation) scheme for solving flow and transport equations. It compares several multi-mesh approaches: DMM/EDMM (two levels of mesh) and TMM/ETMM (three levels of mesh). Upscaling is performed using methods like Pressure Solved Method (PSM), Well Distribution Update (WDU), and Genetic Algorithm (GA). The 'Extended' versions (EDMM, ETMM) incorporate directional oversampling (DO) to mitigate the impact of local boundary conditions. Three specific models are used for testing: a refinement model (Model 1), an SPE 10 Layer 59 model (Model 2), and an SPE 10 Layer 68 model (Note: text says 59-68, but later refers to Model 3 as 3D case).

## Data and Materials

The study uses three synthetic/modified reservoir models: Model 1 (2D refinement model with 16,200 cells), Model 2 (2D SPE 10 Layer 59 modified, 16,200 cells), and Model 3 (3D case based on SPE 10 Layers 59-68). Simulation parameters include porosity of 0.25, oil viscosity of 0.3 cP, water viscosity of 3 cP, and various upscaling techniques.

## Key Findings

- The Extended Dual Mesh Method (EDMM) uses directional oversampling (DO) to ensure a conservative global fine-scale velocity field, reducing errors caused by poorly coupled boundary conditions between coarse and fine scales. ([[2022-adeyemi|Adeyemi, 2022, p. 38]])
- Triple mesh methods (TMM and ETMM) consistently outperformed their two-mesh equivalents (DMM and EDMM) in terms of accuracy for both water flooding and chemical flooding problems. ([[2022-adeyemi|Adeyemi, 2022, p. 12]])
- The inclusion of a third intermediate grid size in TMM and ETMM provides significant cost improvements while maintaining higher accuracy than standard two-mesh methods. ([[2022-adeyemi|Adeyemi, 2022, p. 12]])
- EDMM successfully reduced the impact of upscaling errors on fine-scale reconstruction by utilizing directional oversampling to ensure consistency across partition boundaries. ([[2022-adeyemi|Adeyemi, 2022, p. 38]])
- The results show that gains in performance from proposed multi-mesh methods are consistent even in complex EOR processes involving chemical flooding. ([[2022-adeyemi|Adeyemi, 2022, p. 12]])
- EDMM outperformed DMM in all four producers in Model 1 by accurately forecasting breakthrough to within 10 days, whereas DMM was off by more than 20, 50, or 100 days. ([[2022-adeyemi|Adeyemi, 2022, p. 46]])
- In Model 2, EDMM was 20 times more accurate in predicting water cut and 182 times more accurate in predicting breakthrough than the coarse solution. ([[2022-adeyemi|Adeyemi, 2022, p. 50]])
- EDMM results remained consistent across different upscaling methods (PSM, WDU, GA), indicating it effectively reduces both homogenization and numerical dispersion errors. ([[2022-adeyemi|Adeyemi, 2022, p. 54]])
- The solution sequence in EDMM impacts the result, but both standard and reverse sequences are highly accurate and superior to DMM. ([[2022-adeyemi|Adeyemi, 2022, p. 61]])
- EDMM provides a significant speed-up in pressure solution compared to fine-scale models while maintaining high accuracy. ([[2022-adeyemi|Adeyemi, 2022, p. 62]])
- ETMM and TMM provide similar accuracy levels to EDMM and DMM respectively, but are more cost-effective due to the inclusion of an intermediate mesh level. ([[2022-adeyemi|Adeyemi, 2022, p. 93]])
- EDMM and ETMM significantly reduce local boundary artifacts compared to DMM and TMM by utilizing directional oversampling (DO). ([[2022-adeyemi|Adeyemi, 2022, p. 84]])
- The TMM and ETMM methods showed significantly higher accuracy compared to the coarse-scale (CSG) results in both predicting breakthrough time and water-cut for Model 1. ([[2022-adeyemi|Adeyemi, 2022, p. 111]])
- EDMM and ETMM methods exhibited similar accuracy levels, both being significantly more accurate than DMM and TMM respectively. ([[2022-adeyemi|Adeyemi, 2022, p. 111]])
- TMM and ETMM are significantly less costly (higher speed-up factor) than their dual-mesh counterparts (DMM and EDMM) because the size of each local problem is reduced when an intermediate level is introduced. ([[2022-adeyemi|Adeyemi, 2022, p. 126]])

## Limitations

The study notes that the cost of EDMM is higher than DMM due to larger oversampled fine-scale reconstruction problems. Additionally, accuracy in both DMM and EDMM can suffer when dealing with sharper fronts (unstable fronts are easier to reconstruct).

## Recommendations and Future Work

Future work should involve incorporating more physics into the formulation, specifically including compressibility and capillary pressure to further refine the accuracy of the multi-mesh methods.

## Related Concepts

- [[reservoir-simulation]]
- [[mathematical-modeling]]
- [[petrophysics]]
- [[eor]]
- [[impres]]
- [[petrel]]
- [[matlab]]
- [[chemical-flooding]]
- [[numerical-dispersion]]
- [[water-cut]]
- [[upscaling]]
- [[directional-oversampling]]
