---
type: source
id: "142044"
title: "Wireline Based Rock Physics Modeling and Synthetic Seismic"
author: "Vagif Suleymanov"
year: 2021
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Guenther Glatz"
committee_members: []
source_file: "raw/142044 - Wireline Based Rock Physics Modeling and Synthetic Seismic.pdf"
url: "https://eprints.kfupm.edu.sa/142044"
study_area: "TGS reservoir (Piceance Basin) and Mississippi Canyon (Gulf of Mexico, USA)"
keywords:
  - Rock Physics Modeling
  - Synthetic Seismic
  - Wireline Data
  - TGS Reservoir
  - Fluid Substitution
  - AVO Analysis
  - Petrophysical Properties
  - Rock Physics Diagnostics
  - Forward Modeling
  - Constant-Cement Model
  - Backus Averaging
techniques:
  - well-log-analysis
  - rock-physics-modeling
  - seismic-interpretation
  - petrophysics
  - forward-modeling
  - ray-tracing
  - backus-averaging
  - fluid-substitution
tags:
  - degree/ms
  - formation/notapplicable
  - location/northwestern-colorado-us
  - location/mississippi-canyon
  - location/piceance-basin
  - technique/well-log-analysis
  - technique/rock-physics-modeling
  - technique/seismic-interpretation
  - technique/petrophysics
  - technique/forward-modeling
  - technique/ray-tracing
  - technique/petrophysrocktyping
  - technique/backus-averaging
  - technique/fluid-substitution
  - theme/petrophysics
  - theme/rock-physics
  - theme/seismic-imaging
  - terminology/acoustic-impedance
  - terminology/avo-analysis
  - terminology/velocity-modeling
  - terminology/porosity
  - terminology/gas-saturation
  - terminology/facies-analysis
  - terminology/clay-mineralogy
status: ingested
---

# Wireline Based Rock Physics Modeling and Synthetic Seismic

**Summary**: The thesis investigates the use of rock physics modeling (RPM) and forward modeling to quantitatively interpret wireline data from tight gas sandstones (TGS) in the Piceance Basin. By establishing a constant-cement model through Rock Physics Diagnostics (RPD), the study generates synthetic seismic signatures to evaluate how variations in porosity, lithology, and pore fluid affect seismic responses.

---

## Research Problem

The challenge of qualitatively interpreting seismic reflections without quantifying rock properties like porosity, mineralogy, and pore fluids. Specifically, it addresses the need for a quantitative link between elastic properties (P-wave velocity, S-wave velocity, bulk density) and petrophysical properties in TGS and high-porosity sand reservoirs.

## Objectives

- Perform Rock Physics Diagnostics (RPD) to establish the best-fitting rock physics model (RPM) for two different datasets.
- Upscale well data from a 1-foot resolution to seismic scale using Backus averaging.
- Validate the consistency of selected models at the seismic scale.
- Generate geologically plausible pseudo-scenarios through perturbational forward modeling.
- Produce synthetic seismic signatures (AVO curves and seismograms) to serve as field guides for interpreting reservoir properties.
- Validate the established models at seismic resolution using Backus averaging.

## Methods

The study follows a multi-step workflow: 1. Quality Control of wireline data by cross-plotting elastic and petrophysical properties. 2. Rock Physics Diagnostics (RPD) using Gassmann’s fluid substitution to bring data to a common brine-saturated state, followed by the application of various models (Raymer-Dvorkin, soft-sand, stiff-sand, and constant-cement). 3. Upscaling well data to seismic resolution using Backus averaging for properties like porosity, clay content, and bulk density, while using Backus mean for P-wave velocity, S-wave velocity, and Poisson’s ratio. 4. Perturbational forward modeling where rock properties (porosity, lithology, fluid) are varied to create 'what-if' scenarios. 5. Ray-tracing synthetic seismic code used to generate synthetic seismograms from the resulting elastic parameters.

## Data and Materials

Wireline data from two clastic depositional environments: tight gas sandstones (TGS) in the Piceance Basin, Colorado, and high-porosity unconsolidated sand in the Gulf of Mexico. Specific analysis was performed on two intervals within a TGS well: 8,500-9,500 ft and 11,000-12,000 ft.

## Key Findings

- Gassmann’s fluid substitution showed only minor effects on velocity for the TGS reservoir because the rock is characterized as fast and stiff. ([[2021-suleymanov|Suleymanov, 2021, p. 51]])
- The Raymer-Dvorkin model slightly overestimated wireline data in both studied intervals (8,500-9,500 ft and 11,000-12,000 ft). ([[2021-suleymanov|Suleymanov, 2021, p. 53]])
- The soft-sand model significantly underestimated the wireline data, making it an unsuitable model for these specific reservoirs. ([[2021-suleymanov|Suleymanov, 2021, p. 54]])
- The stiff-sand model performed better than the soft-sand model but still overestimated the wireline data. ([[2021-suleymanov|Suleymanov, 2021, p. 55]])
- The constant-cement model provided the most accurate fit for both TGS and high-porosity sand datasets, leading to its selection as the primary RPM. ([[2021-suleymanov|Suleymanov, 2021, p. 55]])
- Backus averaging successfully upscaled well data to seismic resolution while maintaining consistency with measured petrophysical properties like clay content and porosity. ([[2021-suleymanov|Suleymanov, 2021, p. 59]])
- The constant-cement model remained consistent when applied at the seismic scale, confirming its validity for generating synthetic seismic signatures. ([[2021-suleymanov|Suleymanov, 2021, p. 62]])
- The constant-cement model with a coordination number of 12 successfully modeled the second wireline dataset from Mississippi Canyon, showing excellent agreement between measured and predicted clay content. ([[2021-suleymanov|Suleymanov, 2021, p. 59]])
- Backus averaging was used to upscale well data (porosity, clay, bulk density, P-wave velocity, S-wave velocity, impedance, Poisson's ratio) to seismic resolution, showing good agreement with in-situ measurements. ([[2021-suleymanov|Suleymanov, 2021, p. 60]])
- Forward modeling of the TGS reservoir showed AVO class I for a scenario where sand porosity was between 3% and 12% and clay content was 10-30%. ([[2021-suleymanov|Suleymanov, 2021, p. 45]])
- In the Mississippi Canyon dataset, high-porosity zones (above 12%) were identified as potentially being subject to different diagenetic trends compared to lower porosity areas. ([[2021-suleymanov|Suleymanov, 2021, p. 56]])
- The study demonstrated that varying rock properties (porosity and clay content) leads to distinct AVO signatures, such as Class III for high-porosity gas sands and Class IV for oil-saturated sands. ([[2021-suleymanov|Suleymanov, 2021, p. 84]])

## Limitations

The study notes that while some models (like the constant-cement model) are effective in specific ranges, they may not account for all geological complexities such as mechanical compaction or complex pore shapes in highly cemented rocks.

## Recommendations and Future Work

The resulting synthetic seismic reflection catalogues serve as field guides to distinguish reservoir from non-reservoir zones and evaluate the impact of porosity, lithology, and fluid variations on seismic signatures.

## Related Concepts

- [[rock-physics-modeling]]
- [[well-log-analysis]]
- [[forward-modeling]]
- [[acoustic-impedance]]
- [[avo-analysis]]
- [[velocity-modeling]]
- [[porosity]]
- [[gas-saturation]]
- [[facies-analysis]]
- [[petrophysics]]
- [[backus-averaging]]
- [[fluid-substitution]]
- [[clay-mineralogy]]
- [[rock-physics]]
- [[seismic-imaging]]
- [[mississippi-canyon]]
- [[piceance-basin]]
