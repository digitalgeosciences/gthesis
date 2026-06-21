---
type: source
id: "138954"
title: "Effect of Natural Fractures on the Pressure Transient Behavior of Multilayered Reservoirs"
author: "Rami Ahmed Al-Abdulmohsin"
year: 2012
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Hasan S. Al-Hashim"
committee_members: []
source_file: "raw/138954 - Effect of Natural Fractures on the Pressure Transient Behavior of Multilayered R.pdf"
url: "https://eprints.kfupm.edu.sa/138954"
study_area: "Not stated in source"
keywords:
  - pressure transient behavior
  - multilayered reservoirs
  - cross flow
  - natural fractures
  - dual porosity
  - dual permeability
  - storativity ratio
  - interporosity flow parameter
  - multilayered reservoir
  - fractured layer
  - wellbore storage
  - permeability
  - omega (ω)
  - lambda (λ)
  - Dual Porosity Model
  - Well Test Analysis
techniques:
  - saphir
  - well-log-analysis
  - petrophysics
  - saphir-software
  - pressure-transient-analysis
tags:
  - degree/ms
  - technique/well-log-analysis
  - technique/petrophysics
  - technique/pressure-transient-analysis
  - technique/reservoir-simulation
  - theme/petrophysics
  - theme/pressure-transient-analysis
  - theme/fractured-reservoirs
  - theme/petroleum-engineering
  - terminology/porosity
  - terminology/permeability
  - terminology/fractured-reservoirs
  - terminology/storativity-ratio
  - terminology/interporosity-flow-coefficient
  - terminology/petrophysics
status: ingested
---

# Effect of Natural Fractures on the Pressure Transient Behavior of Multilayered Reservoirs

**Summary**: The thesis investigates the impact of permeability variations, storativity ratios (ω), and interporosity flow parameters (ג) on the pressure transient behavior of two-layer reservoirs containing both homogeneous and naturally fractured layers. Using numerical modeling in Saphir software, it concludes that short shut-in tests may lead to incorrect parameter estimations due to the overlapping signals of different reservoir components.

---

## Research Problem

The complexity of interpreting well test data in multilayered systems is compounded by crossflow between layers and the presence of natural fractures. Specifically, the study addresses how varying permeability in a homogeneous layer and fracture parameters (ω and ג) in fractured layers affects pressure and pressure derivative behavior.

## Objectives

- To investigate the effect of fracture interporosity flow coefficient (ג) and storativity ratio (ω) variation of each layer on the pressure transient behavior of a two-layer fractured reservoir in the absence, and presence of the crossflow between the two fractured layers.
- Investigate the effect of permeability variation in a homogeneous layer on the pressure derivative behavior.
- Analyze the impact of crossflow between a homogeneous layer and a fractured layer.
- Evaluate the effect of fracture storage (omega) and matrix-to-fracture flow (lambda) in dual-layered fractured systems.
- Analyze the effect of natural fractures on the pressure transient behavior of multilayered reservoirs.
- Evaluate the impact of fracture parameters (omega and gamma) on well test interpretation in multi-layer systems.

## Methods

The study utilizes numerical modeling using Saphir well testing software to simulate various scenarios. Models include: 1) Two-layer systems where one layer is homogeneous and the other is naturally fractured (with/without crossflow). 2) Two-layer systems where both layers are naturally fractured with varying fracture density. Parameters such as permeability, thickness, porosity, storativity ratio (ω), and interporosity flow coefficient (ג) were varied to observe changes in pressure and pressure derivative plots.

## Data and Materials

The study uses numerical models generated in Saphir software based on a set of defined parameters: 10% porosity for all layers, specific thickness values (e.g., 270 ft and 30 ft), and varying permeability values (ranging from 0.1 md to 100 md). Fluid properties include an oil viscosity of 1.2 cp and a formation volume factor of 1.29.

## Key Findings

- In cases with low-permeability homogeneous layers (k=1 mD) and high-permeability fractured layers, the fracture layer contributes first, followed by the homogeneous layer's contribution at later times. ([[2012-al-abdulmohsin|Al-Abdulmohsin, 2012, p. 43]])
- When the permeability of the homogeneous layer is increased (e.g., k=100 mD), its response occurs earlier and can mask the signature of the fractured layer, making it appear as a single homogeneous reservoir. ([[2012-al-abdulmohsin|Al-Abdulmohsin, 2012, p. 44]])
- The presence of crossflow between layers affects the transition period at intermediate times; however, in some cases, the long-term response remains similar to a single-layer system. ([[2012-al-abdulmohsin|Al-Abdulmohsin, 2012, p. 15]])
- Short shut-in tests may lead to incorrect estimates of parameters for each layer because the distinct responses of different layers may overlap or be masked by high permeability in one component. ([[2012-al-abdulmohsin|Al-Abdulmohsin, 2012, p. 12]])
- The interporosity flow coefficient (ג) and storativity ratio (ω) are the primary parameters used to describe dual-porosity systems, where ω represents the fraction of fracture storage compared to total system storage. ([[2012-al-abdulmohsin|Al-Abdulmohsin, 2012, p. 30]])
- In a system with one homogeneous and one fractured layer without crossflow, if the homogeneous layer permeability is low (e.g., 0.1 md), it behaves as a single fractured layer; if high (e.g., 100 md), it behaves as a single homogeneous layer. ([[2012-al-abdulmohsin|Al-Abdulmohsin, 2012, p. 69]])
- In systems with crossflow, a low permeability homogeneous layer results in two dips in the pressure derivative: one for the fractured layer transition and one for the homogeneous layer's contribution. ([[2012-al-abdulmohsin|Al-Abdulmohsin, 2012, p. 68]])
- Increasing omega (ω) in a low permeability fractured layer causes the corresponding dip to flatten, resulting in a shorter perceived transition period. ([[2012-al-abdulmohsin|Al-Abdulmohsin, 2012, p. 70]])
- Decreasing lambda (λ) in a fractured system delays the fracture response, shifting the pressure derivative dip to the right. ([[2012-al-abdulmohsin|Al-Abdulmohsin, 2012, p. 71]])
- In dual-fractured systems with crossflow, lower omega values result in sharper/deeper second dips compared to higher omega values. ([[2012-al-abdulmohsin|Al-Abdulmohsin, 2012, p. 76]])
- The study confirms that the calculation of omega (ω) is sensitive to well shut-in time; insufficient shut-in can lead to incorrect estimates of layer properties. ([[2012-al-abdulmohsin|Al-Abdulmohsin, 2012, p. 48]])
- In a two-layered reservoir where both layers are fractured and there is no cross-flow, the pressure derivative shows one dip if $\gamma$ is equal in both layers; however, lower $\gamma$ values result in two distinct dips reflecting the transition periods of high and low permeability fractured layers. ([[2012-al-abdulmohsin|Al-Abdulmohsin, 2012, p. 83]])
- In a two-layered reservoir with cross-flow between layers, the pressure derivative acts as one single fractured layer when $\gamma$ is equal in both; decreasing $\gamma$ in the low-permeability layer causes a delay in its contribution, shifting the second dip to the right. ([[2012-al-abdulmohsin|Al-Abdulmohsin, 2012, p. 83]])
- A shorter transition period occurs due to high $\omega$ values, which has no effect on the pressure derivative response of the high-permeability fractured layer. ([[2012-al-abdulmohsin|Al-Abdulmohsin, 2012, p. 83]])

## Limitations

The study notes that if a well is not flowed for enough time or data gathering during shut-in is stopped early, it may lead to incorrect estimates of properties like $\omega$.

## Recommendations and Future Work

Future research should investigate the effect of partial penetration on fractured multi-layer systems and the impact of horizontal wells with varying $\omega$ and $\gamma$ values.

## Related Concepts

- [[well-log-analysis]]
- [[porosity]]
- [[permeability]]
- [[fractured-reservoirs]]
- [[pressure-transient-analysis]]
- [[storativity-ratio]]
- [[interporosity-flow-coefficient]]
- [[petrophysics]]
- [[reservoir-simulation]]
- [[petroleum-engineering]]
