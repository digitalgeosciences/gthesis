---
type: source
id: "141361"
title: "Rock Physics Modeling and Inversion in Glacial Ordovician Reservoirs"
author: "Ahmed Al-Dawood"
year: 2019
department: "Geosciences"
degree: "MS"
supervisor: "Abdullatif Al-Shuhail"
committee_members:
  - "Khalid Al-Ramadan"
  - "Saleh Al-Dossary"
source_file: "raw/141361 - Rock Physics Modeling and Inversion in Glacial Ordovician Reservoirs.pdf"
url: "https://eprints.kfupm.edu.sa/id/eprint/141361/"
study_area: "Ordovician reservoirs (specifically the Sarah Formation) in Central Saudi Arabia."
keywords:
  - Rock Physics Modeling
  - Seismic Inversion
  - AVO Analysis
  - Glacial Ordovician Reservoirs
  - Gas Fluid Substitution
  - Gassmann Equation
  - Acoustic Impedance
  - Porosity Prediction
  - Gas Saturation
  - P-wave Interval Velocity
  - Fluid Substitution
  - Pay Zone Identification
techniques:
  - well-log-analysis
  - seismic-inversion
  - avo-analysis
  - petrel
  - matlab
  - rock-physics
  - gas-fluid-substitution
  - velocity-analysis
  - seismic-interpretation
  - petrophysics
  - spectral-decomposition
  - core-analysis
  - gassmann-modeling
  - neural-networks
  - multi-well-wavelets
  - simulated-annealing
  - monte-carlo-approach
tags:
  - degree/ms
  - formation/notapplicable
  - formation/sarah-formation
  - location/saudi-arabia
  - location/central-saudi-arabia
  - technique/well-log-analysis
  - technique/seismic-inversion
  - technique/avo-analysis
  - technique/petrel
  - technique/matlab
  - technique/rock-physics
  - technique/gas-fluid-substitution
  - technique/velocity-analysis
  - technique/seismic-interpretation
  - technique/petrophysics
  - technique/spectral-decomposition
  - technique/neural-networks
  - theme/petrophysics
  - theme/rock-physics
  - terminology/gasmann-modeling
  - terminology/acoustic-impedance
  - terminology/porosity
  - terminology/reservoir-characterization
  - terminology/rock-physics
  - terminology/gas-saturation
status: ingested
---

# Rock Physics Modeling and Inversion in Glacial Ordovician Reservoirs

**Summary**: The thesis investigates the use of post-stack seismic data to characterize reservoir fluids in Glacial Ordovician reservoirs by applying rock physics modeling and AVO analysis. It evaluates two methods for predicting porosity and gas saturation—direct linear relationships from acoustic impedance and neural network-guided inversions—concluding that while neural networks provide better consistency, current seismic noise limits direct fluid prediction accuracy.

---

## Research Problem

The primary challenge is the inability to characterize reservoir fluid types in Ordovician formation channels due to a lack of well control and poor quality of pre-stack seismic gathers, which prevents standard pre-stack inversion techniques.

## Objectives

- Investigate the use of post-stack seismic data directly to characterize reservoir fluids by applying rock physics and AVO analysis on estimated parameters from seismic data.
- Perform rock physics modeling using well log cross plots and Gassmann's fluid substitution equation to determine feasibility and pay zones.
- Generate inversion analysis to predict properties such as porosity and gas saturation.
- Evaluate the effectiveness of synthetic wells for property prediction in areas with limited well control.
- Investigate the use of post-stack seismic data to characterize reservoir fluids.
- Apply rock physics modeling and AVO analysis on estimated parameters from seismic data.
- Perform well log cross-plotting for rock physics modeling to determine feasibility and pay zones via Gassmann's fluid substitution.
- Generate inversion models (one using estimated parameters, one using real well parameters) to predict porosity and gas saturation.
- Investigate the use of post-stack seismic data to characterize reservoir fluids via rock physics and AVO analysis.
- Perform rock physics modeling using Gassmann’s fluid substitution equation to determine feasibility for pay zone identification.
- Generate inversion analyses to predict properties such as acoustic impedance, density, and Vp/Vs.
- Compare different methods of porosity and gas saturation estimation (linear relationship vs. neural networks).

## Methods

The study utilizes a 3D seismic volume of ~3400 km2. Well log analysis includes cross-plotting acoustic impedance (AI) and Vp/Vs to classify rock types (gas, water, tight). Gassmann's equation is used for fluid substitution to define pay zones. Seismic interpretation involves picking five horizons and performing spectral decomposition (15, 20, 25 Hz) to map channel geometries. A multi-well wavelet extraction process was performed on both original and filtered seismic data (using structural smoothing and median filters). Pre-stack inversion is conducted using a low-frequency model (0-8 Hz) for AI, density, and Vp/Vs. AVO analysis follows the Shuey approximation to identify gas zones based on intercept and gradient values.

## Data and Materials

The study utilized 5 synthetic well logs (derived from forward modeling of P-wave, S-wave, and density) and data from actual wells (Well A and Well B). Comparison datasets included acoustic impedance (AI), Vp/Vs, and density logs. Porosity and gas saturation were evaluated using both linear relationships and neural network models.

## Key Findings

- The study identifies a challenge in characterizing Ordovician reservoir fluid types due to lack of well control and poor pre-stack gather quality, necessitating post-stack analysis. ([[2019-al-dawood|Al-Dawood, 2019, p. 19]])
- Hydrocarbon-filled reservoirs are characterized by lower acoustic impedance (lower density and lower velocity) compared to water-filled rocks. ([[2019-al-dawood|Al-Dawood, 2019, p. 19]])
- The Upper Ordovician glacial sandstone formation is a confirmed reservoir target, with sedimentary cycles divided into pre-glaciation, syn-glaciation, and post-glaciation. ([[2019-al-dawood|Al-Dawood, 2019, p. 20]])
- Well log cross plots were used to perform gas fluid substitution using the Gassmann equation to determine pay zones. ([[2019-al-dawood|Al-Dawood, 2019, p. 15]])
- Synthetic seismograms were created by forward modeling P-wave interval velocity and density to match seismic response in areas without well control. ([[2019-al-dawood|Al-Dawood, 2019, p. 15]])
- Acoustic Impedance (AI), Vp/Vs, and Density inversions were performed for both actual wells and synthetic wells. ([[2019-al-dawood|Al-Dawood, 2019, p. 67]])
- Porosity volume estimation was conducted to compare real well results with synthetic inversion predictions. ([[2019-al-dawood|Al-Dawood, 2019, p. 80]])
- Gas saturation/volume estimation was performed using both actual and synthetic well data to validate the rock physics model. ([[2019-al-dawood|Al-Dawood, 2019, p. 82]])
- Acoustic impedance (AI) inversion successfully differentiates between porous and tight zones, but requires Vp/Vs inversion to determine specific rock fluid types. ([[2019-al-dawood|Al-Dawood, 2019, p. 30]])
- The target formation frequency spectrum ranges from 7-42 Hz; well logs were filtered to 30 Hz to verify if rock types could be detected within the seismic bandwidth. ([[2019-al-dawood|Al-Dawood, 2019, p. 46]])
- Note: The study found that a multi-well wavelet extracted from original volume yielded a predictability of 52%, significantly higher than other variations (e.g., 6.5% or 5.6%). ([[2019-al-dawood|Al-Dawood, 2019]])
- page_number_reference_context_not_found_in_text_but_implied_by_sequence ([[2019-al-dawood|Al-Dawood, 2019]])
- Porosity derived from neural networks showed a matching value of approximately 78% compared to log porosity, outperforming the AI-derived porosity (60%). ([[2019-al-dawood|Al-Dawood, 2019, p. 99]])
- Gas saturation derived from neural networks showed a matching value of approximately 56% with gas saturation logs. ([[2019-al-dawood|Al-Dawood, 2019, p. 100]])
- Synthetic logs generated by forward modeling of P-wave, S-wave, and density yielded less than 10% error when compared to real well logs. ([[2019-al-dawood|Al-Dawood, 2019, p. 104]])

## Limitations

The primary limitations included noisy seismic data, phase inconsistency in wavelets, and a lack of AVO-friendly processing, which resulted in poor alignment between synthetic and real seismic gather averages at mid-offsets.

## Recommendations and Future Work

Reprocess the seismic data gathers from field tapes to enhance signal-to-noise ratio using an AVO-friendly processing workflow; apply synthetic inversion in areas with better seismic quality where fluid prediction is validated by real well logs.

## Related Concepts

- [[well-log-analysis]]
- [[seismic-inversion]]
- [[avo-analysis]]
- [[gasmann-modeling]]
- [[acoustic-impedance]]
- [[porosity]]
- [[reservoir-characterization]]
- [[saudi-arabia]]
- [[neural-networks]]
- [[sarah-formation]]
- [[central-saudi-arabia]]
- [[rock-physics]]
- [[gas-saturation]]
