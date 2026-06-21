---
type: source
id: "140670"
title: "FULL WAVEFORM INVERSION FOR COMPLEX NEAR-SURFACE IMAGING USING SEG SEAM II SYNTHETIC MODEL"
author: "Ali Mohamed"
year: 2018
department: "Geosciences"
degree: "MS"
supervisor: "Abdullatif Al-Shuhail"
committee_members:
  - "Stewart Greenhalgh"
  - "Sherif Hanafy"
source_file: "raw/140670 - FULL WAVEFORM INVERSION FOR COMPLEX NEARSURFACE IMAGING USING SEG SEAM II SYNTHE.pdf"
url: "https://eprints.kfupm.edu.sa/id/eprint/140670/"
study_area: "Arid SEAM Phase II synthetic model (representing Saudi Arabian desert terrain)"
keywords:
  - Full Waveform Inversion
  - Acoustic FWI
  - Viscoelastic modeling
  - Near-surface complexity
  - Karst features
  - Finite difference modeling
  - Ray tracing
  - Surface wave inversion
  - Near-surface imaging
  - SEG SEAM II
  - Viscoelastic wavefield
  - Velocity modeling
  - RTM
techniques:
  - fwi
  - finite-difference-modeling
  - ray-tracing
  - surface-wave-inversion
  - seismic-processing
  - source-wavelet-generation
  - fdelmodc
  - makewave
  - swi
  - rtm
  - velocity-scan
  - manual-velocity-picking
  - gradient-smoothing
  - line-search
tags:
  - degree/ms
  - location/saudi-arabia
  - location/middle-east-region
  - technique/fwi
  - technique/finite-difference-modeling
  - technique/ray-tracing
  - technique/surface-wave-inversion
  - technique/seismic-processing
  - technique/seismic-inversion
  - technique/surface-wave-analysis
  - technique/seismic-imaging
  - technique/velocity-analysis
  - theme/geophysics-general
  - theme/near-surface-geophysics
  - theme/seismic-imaging
  - terminology/cycle-skip
  - terminology/acoustic-impedance
  - terminology/karst-hazards
  - terminology/velocity-modeling
status: ingested
---

# FULL WAVEFORM INVERSION FOR COMPLEX NEAR-SURFACE IMAGING USING SEG SEAM II SYNTHETIC MODEL

**Summary**: The thesis investigates the application of Full Waveform Inversion (FWI) to image complex near-surface features in land seismic data, specifically using the SEG SEAM II synthetic model. It demonstrates that acoustic FWI can effectively resolve high-resolution velocity details and Karst structures when preceded by careful data conditioning and surface wave inversion (SWI).

---

## Research Problem

Complexity in the Earth's near-surface zone (e.g., Karst features and unconsolidated sediments) creates velocity contrasts and signal attenuation that hinder the imaging of deeper structures in land seismic exploration, particularly in arid regions like the Middle East.

## Objectives

- Characterize the near-surface zone more effectively using FWI in both theoretical and practical components.
- Study the behavior of seismic wavefields for complex near-surface areas with geological heterogeneities.
- Evaluate if Full Waveform Inversion can accurately reconstruct models of small, shallow geological features with strong velocity contrast to improve subsurface imaging.
- Evaluate the impact of complex near-surface geology on seismic wave propagation using finite difference modeling and ray tracing.
- Develop a workflow to improve FWI input data by removing non-acoustic components (surface waves, scattered shear waves).
- Utilize Surface Wave Inversion (SWI) to accurately estimate near-surface velocities in the first 200m.

## Methods

The study utilizes a multi-step workflow: (1) Data conditioning of input shot gathers by removing surface waves, scattered shear waves, and random noise. (2) Initial 1D velocity model construction using velocity scanning and manual picking based on semblance and gather flattening. (3) Near-surface velocity update for the top 200m using Surface Wave Inversion (SWI). (4) Acoustic FWI performed over multiple frequency bands (e.g., 4Hz to 24Hz) using a least-squares objective function with gradient smoothing and line search optimization. (5) Comparison of results using Reverse Time Migration (RTM) to evaluate the impact of velocity accuracy on subsurface imaging.

## Data and Materials

The primary data source is the Arid SEAM Phase II synthetic model, which is 10 km x 10 km in extent and 3.75 km deep. The study uses four specific 2D line extractions (extended to 20 km) from this 3D model to test different levels of complexity: smooth 1D, strong vertical variation, complex 3D without Karst, and the full Arid SEAM model with Karst.

## Key Findings

- Ray tracing results showed that Karst bodies can dramatically change wave path behavior and cause significant illumination heterogeneity due to overburden effects. ([[2018-mohamed|Mohamed, 2018, p. 47]])
- Strong velocity inversions in the model generate strong internal multiples and guided waves, while Karst features scatter seismic energy. ([[2018-mohamed|Mohamed, 2018, p. 35]])
- Viscoelastic synthetic data with multiples are highly correlated with real seismic data where dispersed ground roll, converted, and shear waves dominate. ([[2018-mohamed|Mohamed, 2018, p. 36]])
- Acoustic FWI successfully reconstructed a velocity image with small local anomalies and strong velocity contrast for acoustic synthetic data. ([[2018-mohamed|Mohamed, 2018, p. 15]])
- Surface Wave Inversion (SWI) provided more accurate velocity at the top 200m, leading to a dramatic improvement in the subsurface image during RTM processing. ([[2018-mohamed|Mohamed, 2018, p. 46]])
- Gaussian smoothing filters helped suppress migration jittering and smiles at the shallow part of the gradient during FWI. ([[2018-mohamed|Mohamed, 2018, p. 50]])
- The inclusion of multiple-bearing terms in viscoelastic modeling is essential for capturing the effects of absorption and scattering in complex geological columns. ([[2018-mohamed|Mohamed, 2018, p. 37]])
- Surface Wave Inversion (SWI) provided more accurate velocity at the top 200m compared to manual picking, leading to better definition of limestone velocity. ([[2018-mohamed|Mohamed, 2018, p. 62]])
- The inclusion of SWI in the workflow allowed FWI to resolve the source wavelet from the data without assumptions about its attributes. ([[2018-mohamed|Mohamed, 2018, p. 63]])
- Acoustic FWI successfully reconstructed small Karst structures at very shallow depth and accurately imaged strong velocity heterogeneity in the true model (Case 1). ([[2018-mohamed|Mohamed, 2018, p. 69]])
- RTM images produced using the FWI-estimated model showed a significant improvement in subsurface image continuity compared to those using the initial model. ([[2018-mohamed|Mohamed, 2018, p. 75]])
- The use of gradient smoothing (Gaussian filter) successfully suppressed migration jittering and smiles at the shallow part of the gradient. ([[2018-mohamed|Mohamed, 2018, p. 66]])
- Acoustic FWI on viscoelastic data successfully reconstructed small caves and Karst geobodies when preceded by proper data conditioning and SWI. ([[2018-mohamed|Mohamed, 2018, p. 73]])

## Limitations

Elastic inversion in land settings is currently a formidable problem due to the ill-posed nature of determining density, velocity, and attenuation simultaneously, as well as high computational costs for modeling waves with small S-velocities.

## Recommendations and Future Work

The study highlights that acoustic FWI can effectively estimate velocities for viscoelastic media provided that careful data conditioning (removing non-acoustic components) and near-surface velocity estimation via SWI are performed to avoid cycle skipping and local minimum trapping.

## Related Concepts

- [[fwi]]
- [[finite-difference-modeling]]
- [[surface-wave-inversion]]
- [[cycle-skip]]
- [[acoustic-impedance]]
- [[karst-hazards]]
- [[velocity-modeling]]
- [[seismic-imaging]]
- [[saudi-arabia]]
- [[seismic-inversion]]
- [[surface-wave-analysis]]
- [[near-surface-geophysics]]
