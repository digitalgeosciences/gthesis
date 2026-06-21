---
type: source
id: "142407"
title: "SCIENTIFIC MACHINE LEARNING FOR MICROSEISMIC HYPOCENTER LOCALIZATION"
author: "Kanan Suleymanli"
year: 2023
department: "Geosciences"
degree: "MS"
supervisor: "Umair Bin Waheed"
committee_members:
  - "Sherif Mahmoud"
  - "Zhou Wei"
source_file: "raw/142407 - SCIENTIFIC MACHINE LEARNING FOR MICROSEISMIC HYPOCENTER LOCALIZATION.pdf"
url: "https://eprints.kfupm.edu.sa/id/eprint/142407/"
study_area: "Utah FORGE site, Utah, USA"
keywords:
  - microseismic monitoring
  - hypocenter localization
  - Fourier Neural Operators (FNO)
  - eikonal equation
  - real-time microseismic event localization
  - machine learning
techniques:
  - fourier-neural-operators
  - neural-networks
  - scikit-fmm
  - sonic-log-analysis
  - distributed-acoustic-sensing
  - data-analysis
tags:
  - degree/ms
  - location/utah-site
  - technique/machine-learning-geoscience
  - technique/neural-networks
  - technique/signal-processing
  - technique/well-log-analysis
  - theme/earthquake-seismology
  - theme/microseismic-monitoring
  - terminology/hypocenter
  - terminology/eikonal-equation
status: ingested
---

# SCIENTIFIC MACHINE LEARNING FOR MICROSEISMIC HYPOCENTER LOCALIZATION

**Summary**: The thesis explores a data-driven approach to microseismic hypocenter localization using Fourier Neural Operators (FNOs) to solve the eikonal equation. The method was tested on synthetic Marmousi models and real field data from the Utah FORGE site, demonstrating robustness against noise and missing receiver data.

---

## Research Problem

Traditional methods for locating microseismic events face limitations in computation and physics, while existing machine learning approaches often lack generalization or require extensive training for every new velocity model. This study addresses these issues by using FNOs to create a resolution-invariant model capable of real-time localization.

## Objectives

- Develop an FNO-based framework for microseismic hypocenter localization.
- Evaluate the performance of FNO models under conditions of missing receiver data (30%, 40%, and 50% removal).
- Assess the robustness of the FNO model against different levels of noise injection in travel-time observations.
- Apply the proposed method to real field data from the Utah FORGE site.

## Methods

The study utilizes Fourier Neural Operators (FNO) to solve the eikonal equation in a data-driven manner. The FNO model is trained on 2D travel-time fields where input and output dimensions are matched by padding. To handle missing receiver data, a four-layer feed-forward neural network was used to interpolate/extrapolate missing values before F10 processing. Synthetic tests were conducted using a simple velocity model and the complex Marmousi model (using scikit-fmm for ground truth). Real data from the Utah FORGE site included sonic log analysis of well 58-32 and Distributed Acoustic Sensing (DAS) picks from well 78-32.

## Data and Materials

Synthetic datasets: Simple velocity model (101x151 grid), Marmousi model (751x2301 grid). Real data: Utah FORGE site data including sonic logs from well 58-32 and DAS picks from well 78-32.

## Key Findings

- The FNO model successfully achieved high accuracy in detecting event locations even under extreme conditions such as missing receivers and high terms of noise injection. ([[2023-suleymanli|Suleymanli, 2023, p. 16]])
- With a 30% removal rate, the precision of location coordinates was only slightly degraded compared to the noise-free case. ([[2023-suleymanli|Suleymanli, 2023, p. 33]])
- At a 40% removal rate, the accuracy of the FNO model degraded reasonably compared to the 30% removal test. ([[2023-suleymanli|Suleymanli, 2023, p. 33]])
- At a 50% removal rate, there was a significant degradation in performance due to the increased proportion of missing receiver data, but results remained sufficiently accurate for precise event localization. ([[2023-suleymanli|Suleymanli, 2023, p. 34]])
- For the Marmousi model with high-level noise (std dev 0.2s) and 30% removal, the maximum deviation on the Z axis was approximately 0.07 km, only slightly higher than the noise-free case. ([[2023-suleymanli|Suleymanli, 2023, p. 36]])
- The FNO model demonstrated robust performance across three levels of noise (low: 0.05s, mid: 0.1s, high: 0.2s) with only slight decreases in accuracy as noise increased. ([[2023-suleymanli|Suleymanli, 2023, p. 36]])
- The model successfully demonstrated real-time event localization capabilities on real data from the Utah FORGE site despite limited velocity models and restricted DAS coverage. ([[2023-suleymanli|Suleymanli, 2023, p. 52]])

## Limitations

The current study is limited to 2D FNO models; however, the author notes that moving to 3D models holds significant potential for more comprehensive analysis. The real data application was also constrained by a limited velocity model from sonic logs and restricted DAS coverage.

## Recommendations and Future Work

Future work should include applying the method to 3D models and utilizing 3D FNOs for velocity generalization to further enhance robustness in microseismic applications. Integration of physics-informed neural operators (PINO) is also suggested as a promising avenue.

## Related Concepts

- [[neural-networks]]
- [[machine-learning-geoscience]]
- [[hypocenter]]
- [[eikonal-equation]]
- [[microseismic-monitoring]]
- [[utah-site]]
