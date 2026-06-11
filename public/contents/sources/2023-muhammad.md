---
type: source
id: "142484"
title: "Velocity Estimation from Surface-Consistent Statics"
author: "Ahmad Muhammad"
year: 2023
department: "Geosciences"
degree: "MS"
supervisor: "Abdullatif Al-Shuhail"
committee_members:
  - "Sherif Hanafy"
  - "Umair bin Waheed"
source_file: "raw/142484 - Velocity Estimation from Surface-Consistent Statics.pdf"
url: "https://eprints.kfupm.edu.sa/id/eprint/142484/"
study_area: "Southeast Texas (real data) and synthetic models including a sand dune and dipping reflector."
keywords:
  - Velocity analysis
  - Normal moveout (NMO)
  - Static correction
  - Surface-consistent statics
  - Seismic processing
  - velocity estimation
  - seismic imaging
  - residual static corrections
  - NMO analysis
  - NMO Correction
  - Residual Statics
  - NMO velocity
  - seismic data processing
techniques:
  - seismic-processing
  - velocity-analysis
  - semblance
  - well-log-analysis
  - seismic-interpretation
  - matlab
tags:
  - degree/ms
  - location/southeast-texas
  - location/east-texasusa
  - technique/seismic-processing
  - technique/velocity-analysis
  - technique/matlab
  - theme/geophysics-general
  - theme/seismic-imaging
  - terminology/nmo
  - terminology/static-corrections
  - terminology/static-correction
  - terminology/nmo-velocity
status: ingested
---

# Velocity Estimation from Surface-Consistent Statics

**Summary**: The thesis proposes a new method for estimating accurate subsurface velocity from residual static corrections in seismic data. By analyzing the parabolic relationship between time shifts and offset in surface-consistent statics, the author demonstrates that correct NMO velocities can be derived even when initial processing uses incorrect velocities.

---

## Research Problem

The determination of accurate subsurface velocities is often complicated by near-surface heterogeneity causing 'statics' effects. Specifically, the estimation of velocity from the surface-consistent statics component—which contains an imperfect NMO term—has not been previously explored despite its potential to provide a more robust estimate independent of initial velocity assumptions.

## Objectives

- Propose and demonstrate a new approach for estimating subsurface velocity from residual static corrections.
- Determine the imperfect NMO surface-consistent static component in a CMP gather.
- Invert this component to obtain the correct NMO velocity.
- Evaluate the method's performance on synthetic data (sand dune and dipping models) and real seismic data.
- Conceptualize and demonstrate a novel approach to velocity estimation.
- Derive a new relation that inverts residual statics due to imperfect NMO analysis to find the correct NMO velocity.
- Investigate the performance of this technique relative to conventional methods using synthetic and real seismic datasets.
- Develop a mathematical framework to estimate correct NMO velocity from the time shifts observed in surface-consistent statics.
- Validate the proposed methodology using synthetic datasets featuring complex near-surface conditions (e.g., sand dunes) and dipping reflectors.
- Demonstrate the effectiveness of the method on real seismic data from East Texas, USA.
- Develop a new approach for estimating subsurface velocity from residual static corrections.
- Demonstrate the effectiveness of surface-consistent statics in isolating NMO components.
- Evaluate the impact of varying levels of statics application on the accuracy of the proposed method.

## Methods

The study utilizes a mathematical derivation based on the expansion of the NMO equation into a power series to relate time shifts ($T_{ij}$) to offset ($X$). The core methodology involves: 1) Identifying the parabolic relationship between residual statics and offset; 2) Fitting a parabola to these points to extract coefficients $a$ (related to zero-offset time) and $b$ (related to NMO velocity); 3) Substituting these values into a derived formula (Eq. 3.13) to calculate the correct NMO velocity ($V_c$). This was tested on synthetic data with a known dune model and a dipping reflector, as well as real seismic data from East Texas.

## Data and Materials

1. Synthetic dataset: A 2D elastic model with a two-layer system and a sand dune (causing significant elevation/residual statics). 2. Dip model: A synthetic dipping reflector model to test accuracy without prior knowledge of dip angle. 3. Real data: 2D seismic data from southeast Texas featuring a mild surface statics problem.

## Key Findings

- The proposed method yielded an NMO velocity within 2.5% of the 'true' model value for the sand dune synthetic dataset. ([[2023-muhammad|Muhammad, 2023, p. 15]])
- For the dipping reflector model, the method obtained an NMO velocity within 1% error of the true velocity without requiring prior knowledge of the dip angle. ([[2023-muhammad|Muhammad, 2023, p. 16]])
- On real data from southeast Texas, the method estimated the correct NMO velocity with only 0.6% error when applied to an intentionally incorrectly NMO-corrected gather. ([[2023-muhammad|Muhammad, 2023, p. 16]])
- The technique is independent of the initial (wrong) velocity value used for NMO correction, performing well in both overcorrected and undercorrected cases. ([[2023-muhammad|Muhammad, 2023, p. 16]])
- Statics correction errors can lead to up to a 35% error in estimated velocity if the statics are incorrectly applied. ([[2023-muhammad|Muhammad, 2023, p. 18]])
- Conventional velocity analysis methods like the semblance method can produce inaccurate results if the starting velocity function is far from the actual velocity of a reflector and perform poorly in datasets with low SNR. ([[2023-muhammad|Muhammad, 2023, p. 21]])
- Statics problems affect velocity analysis negatively because they distort the velocity function in the near surface. ([[2023-muhammad|Muhammad, 2023, p. 21]])
- The study derives a relation that enables the computation of the velocity of a reflector from the statics problem. ([[2023-muhammad|Muhammad, 2023, p. 21]])
- Surface-consistent residual statics correction is time-consuming and requires considerable effort due to its dependence on NMO-velocity picking. ([[2023-muhammad|Muhammad, 2023, p. 36]])
- Computed statics can vary up to 44% from the correct statics when using replacement or tomogram velocity instead of an accurately measured velocity profile. ([[2023-muhammad|Muhammad, 2023, p. 39]])
- The proposed method for estimating correct NMO velocity ($V_c$) from the parabolic fit of surface-consistent statics yielded an average value of 2924 m/s on synthetic data, representing only a 2.5% error from the true value of 3000 m/s. ([[2023-muhammad|Muhammad, 2023, p. 69]])
- On a dipping reflector model with an apparent NMO velocity of 2730 m/s, the method estimated a mean $V_c$ of 2763.79 m/s (a 1.24% error). ([[2023-muhammad|Muhammad, 2023, p. 77]])
- On real data from East Texas, the methodology estimated a correct NMO velocity of 9635 ft/s, which was within 1% of the true value (9581 ft/s) determined through conventional analysis. ([[2023-muhammad|Muhammad, 2023, p. 80]])
- The method successfully isolated and removed the effects of dune-induced statics while simultaneously correcting for imperfect NMO velocity in a single workflow. ([[2023-muhammad|Muhammad, 2023, p. 72]])
- The proposed method is independent of the initial (incorrect) NMO velocity applied to the CDP, allowing for correction regardless of whether the original estimate was too high or too low. ([[2023-muhammad|Muhammad, 2023, p. 93]])

## Limitations

The accuracy of the technique is sensitive to the quality of the initial statics correction; an error in the static correction can lead to up to a 35% error in the resulting velocity estimation.

## Recommendations and Future Work

- Use an auto-picking algorithm to pick Tijk times at all offsets after removing source/receiver statics.
- Test the performance in more structurally complex environments beyond simple geology.
- Test the robustness of the model using layers with steeper dips (greater than 24 degrees).

## Related Concepts

- [[velocity-analysis]]
- [[seismic-processing]]
- [[nmo]]
- [[static-corrections]]
- [[seismic-imaging]]
- [[southeast-texas]]
- [[saudi-arabia]]
- [[static-correction]]
- [[east-texasusa]]
- [[nmo-velocity]]
