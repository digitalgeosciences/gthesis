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
study_area: "Utah FORGE field data (applied) and synthetic models (Marmousi and simple velocity model)"
keywords:
  - microseismic hypocenter localization
  - Fourier Neural Operators
  - eikonal equation
  - data-driven approach
  - real-time microseismic event localization
  - microseismic monitoring
  - hypocenter localization
  - Fourier Neural Operator (FNO)
  - machine learning
  - geothermal energy
  - real-time event localization
techniques:
  - fourier-neural-operators
  - neural-networks
  - fast-marching-algorithm
  - fourier-neural-operator-fno
  - sonic-log-analysis
  - distributed-acoustic-sensing-das
tags:
  - degree/ms
  - location/saudi-arabia
  - location/utahsite
  - technique/machine-learning-geoscience
  - technique/neural-networks
  - technique/microseismic-monitoring
  - theme/geophysics-general
  - theme/machine-learning-geoscience
  - theme/microseismic-monitoring
  - terminology/eikonal-equation
  - terminology/earthquake-seismology
  - terminology/hypocenter
status: ingested
---

# SCIENTIFIC MACHINE LEARNING FOR MICROSEISMIC HYPOCENTER LOCALIZATION

**Summary**: The thesis investigates a data-driven approach for real-time microseismic hypocenter localization using Fourier Neural Operators (FNOs) to solve the eikonal equation. The method was validated on synthetic models (Simple and Marmousi) and applied to field data from Utah FORGE, demonstrating high accuracy even under conditions of missing receivers and noise.

---

## Research Problem

Traditional methods for microseismic hypocenter localization face limitations in computation and physics, while existing machine learning approaches like PINNs require extensive retraining for every new event or velocity variation. There is a need for a resolution-invariant model that can be evaluated quickly (one forward pass) for real-time monitoring.

## Objectives

- Develop a data-driven approach to locate hypocenters using Fourier Neural Operators (FNOs).
- Build a resolution-invariant model capable of rapid evaluation with one forward pass.
- Solve the eikonal equation in a data-driven manner using operator learning.
- Evaluate the proposed method's performance under extreme conditions like missing receivers and high-level noise.
- Apply the proposed method to real field data (Utah FORGE) to demonstrate practical applicability.
- Develop an FNO-based framework for hypocenter localization.
- Evaluate the robustness of the FNO model against varying levels of noise in travel-time observations.
- Assess the impact of missing receiver data on the accuracy of source location.
- Validate the FNO model using real microseismic data from the Utah FORGE site.

## Methods

The study utilizes Fourier Neural Operators (FNO) to solve the 2D eikonal equation in a data-driven manner. FNOs are used because they offer reduced time complexity, ability to generalize across different conditions, and do not require specific boundary/initial conditions. For training, travel times from surface receivers are used as input to produce a full travel-time field; the hypocenter is then identified by finding the minimum value in that field. To handle missing receiver data (30%, 40%, 50% removal), a four-layer feed-forward artificial neural network with 60 nodes per layer was implemented to interpolate and extrapolate missing values before FNO processing. The scikit-fmm package's fast marching algorithm was used to calculate true travel times for training on synthetic models.

## Data and Materials

Synthetic datasets based on the Marmousi velocity model with three noise levels; real-world data from the Utah FORGE site including sonic log data from well 58-32 and DAS pick data from well 78-32.

## Key Findings

- The FNO-based method successfully achieved high accuracy in detecting event locations on both simple and complex (Marmousi) velocity models. ([[2023-suleymanli|Suleymanli, 2023, p. 16]])
- The proposed model is resolution-invariant, allowing for evaluation with a single forward pass instead of retraining. ([[2023-suleymanli|Suleymanli, 2023, p. 16]])
- The FNO approach showed high accuracy even under extreme conditions such as missing receivers and high-level noise injection. ([[2023-suleymanli|Suleymanli, 2023, p. 16]])
- A feed-forward neural network (4 layers, 60 nodes each) effectively restored input shapes for the FNO model when receiver data was missing. ([[2023-suleymanli|Suleymanli, 2023, p. 31]])
- The accuracy of the FNO model degraded only slightly when 30% of receiver data was removed compared to the baseline. ([[2023-suleymanli|Suleymanli, 2023, p. 33]])
- The accuracy of the FNO model degraded 'reasonably' (more than at 30%) but remained functional when 40% of input data was removed. ([[2023-suleymanli|Suleymanli, 2023, p. 33]])
- The FNO model showed significant degradation in performance at a 50% missing receiver data rate compared to 40%, but remained sufficiently accurate for localization. ([[2023-suleymanli|Suleymanli, 2023, p. 34]])
- For the Marmousi model with high-level noise and 30% removal, the maximum deviation on the Z axis was approximately 200 meters (0.07 km), which is only slightly higher than the noise-free case. ([[2023-suleymanli|Suleymanli, 2023, p. 36]])
- The FNO model's performance remained robust even under high-level noise conditions, showing that it can provide accurate predictions in noisy environments. ([[2023-suleymanli|Suleymanli, 2023, p. 36]])
- The study successfully demonstrated the real-time event localization capability of the FNO model using data from the Utah FORGE site. ([[2023-suleymanli|Suleymanli, 2023, p. 52]])

## Limitations

Standard machine learning models like CNNs have a restricted ability to generalize beyond their training data. PINNs, while physically informed, require retraining for every new event or velocity variation.

## Recommendations and Future Work

Future work includes applying the FNO method to 3D models, utilizing 3D FNOs for velocity generalization, and integrating physics-informed neural operators (PINO).

## Related Concepts

- [[machine-learning]]
- [[neural-networks]]
- [[microseismic-monitoring]]
- [[eikonal-equation]]
- [[earthquake-seismology]]
- [[machine-learning-geoscience]]
- [[saudiarabia]]
- [[hypocenter]]
- [[utah-site]]
