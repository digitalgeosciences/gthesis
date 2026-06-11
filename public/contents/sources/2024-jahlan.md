---
type: source
id: "142770"
title: "PARALLAX-BASED APPROACH TO REMOVE SAND DUNE EFFECTS FROM SEISMIC DATA"
author: "Mohammed Bin Jahlan"
year: 2024
department: "Geosciences"
degree: "MS"
supervisor: "Abdullatif Al-Shuhail"
committee_members:
  - "Sherif Mahmoud"
  - "Umair Bin Waheed"
source_file: "raw/142770 - PARALLAX-BASED APPROACH TO REMOVE SAND DUNE EFFECTS FROM SEISMIC DATA.pdf"
url: "https://eprints.kfupm.edu.sa/id/eprint/142770/"
study_area: "Rub al Khali basin (referenced in literature context)"
keywords:
  - Parallax phenomenon
  - Seismic data
  - Sand dunes
  - Occlusion removal
  - Signal processing
  - parallax approach
  - sand dune effects
  - multiple-image methods
  - synthetic seismic data
  - NMO correction
  - F-K filter
  - super gather
  - P-wave reflection
techniques:
  - seismic-processing
  - nmo-correction
  - f-k-filter
  - deconvolution
  - agc
  - seismic-unx
  - matlab
  - seislab
  - cdp-stacking
  - synthetic-data-generation
tags:
  - degree/ms
  - location/rub-al-khali-basin
  - location/saudi-arabia
  - location/dammam-area
  - location/eastern-province
  - technique/seismic-processing
  - technique/matlab
  - technique/nmo-correction
  - technique/f-k-filter
  - technique/synthetic-data-generation
  - theme/geophysics-general
  - theme/applied-geophysics
  - theme/seismic-imaging
  - terminology/parallax
  - terminology/signal-to-noise-ratio
  - terminology/seismic-imaging
  - terminology/p-wave-reflection
  - terminology/parallax-phenomenon
status: ingested
---

# PARALLAX-BASED APPROACH TO REMOVE SAND DUNE EFFECTS FROM SEISMIC DATA

**Summary**: The thesis investigates a parallax-based approach to remove the effects of sand dunes on seismic data, which typically cause noise and obscure underlying reflections. By applying four different variations of this method to synthetic 2D data, the study concludes that approaches three and four provide the best improvement in continuity and clarity for P-wave reflection events.

---

## Research Problem

Sand dunes cause significant noise in seismic data—including time delay, reverberation, and amplitude amplification—which masks underlying geological information. Traditional methods like static corrections or spectral ratios are often insufficient to fully resolve the impact of these near-surface features on seismic imaging.

## Objectives

- Introduce four parallax-based approaches to remove the adverse effects of sand dunes on seismic data.
- Evaluate these methods using 2D synthetic elastic seismic data generated from a model with realistic barchan dune topography.
- Apply and evaluate a parallax-based approach to remove sand dune effects from 2D synthetic seismic data.
- Compare different implementation strategies (Approach One through Four) for muting, replacing, and stacking traces affected by dunes.
- Evaluate the effectiveness of a parallax-based approach for removing sand dune effects from seismic data.
- Implement four distinct variations of the parallax-based methodology on synthetic 2D data.
- Compare the results of these approaches to determine which provides the best improvement in signal continuity and clarity.

## Methods

The study utilizes two datasets: synthetic data generated from a 2D elastic model (10 km long, with a sand dune between 2-3 km) and real data acquired near Dammam Airport. The synthetic data were processed using a standard 2D land seismic workflow including AGC, F-K filtering, spiking deconvolution, CDP sorting, NMO correction, and static correction. Four parallax-based approaches were tested: Approach One (muting + NMO + stacking), Approach Two (muting + NMO + stacking unmuted + replacing muted with stacked traces), Approach Three (muting + NMO + trace replacement from adjacent CDPs), and Approach Four (muting + NMO + supergather creation + trace replacement). Processing was performed using Seismic Un*x and MATLAB with the SeisLab package.

## Data and Materials

The study uses 2D synthetic elastic seismic data generated from a model consisting of two horizontal layers with a dune having realistic barchan topography and a vertical velocity profile. The dataset includes shot gathers, CDP gathers, and various processing stages (AGC, F-K, deconvolution).

## Key Findings

- Sand dunes cause three primary issues in seismic data: time delays due to low velocity, reverberation due/to high impedance contrast at the dune boundaries, and amplitude amplification of signals directly under the dune. ([[2024-jahlan|Jahlan, 2024, p. 20]])
- The parallax-based approach aims to treat the sand dune as an 'occlusion' in a photographic sense, where information is recovered from adjacent viewpoints (CDPs). ([[2024-jahlan|Jahlan, 2024, p. 18]])
- Approach One involves identifying and muting traces affected by the dune and replacing them with data from neighboring CDPs. ([[2024-jahlan|Jahlan, 2024, p. 26]])
- The results show that stacked sections of target reflections below the dune are enhanced compared to standard processing workflows. ([[2024-jahlan|Jahlan, 2024, p. 14]])
- The synthetic model included a sand dune with P-wave velocity $v(z) = v_0 \sqrt{1 + k z^{1/3}}$, where $v_0$ = 15 m/s and $k$ = 1500 m$^{-1/3}$, resulting in a minimum P-wave velocity of approximately 761 m/s (rounded to 700 m/s). ([[2024-jahlan|Jahlan, 2024, p. 31]])
- The synthetic data were simulated using a zero-phase Ricker wavelet with a peak frequency of 10 Hz and a maximum frequency of 25 Hz. ([[2024-jahlan|Jahlan, 2024, p. 32]])
- Standard processing (AGC, F-K filtering, spiking deconvolution) successfully removed linear noise but did not eliminate the effects of sand dunes on underlying traces. ([[2024-jahlan|Jahlan, 2024, p. 51]])
- Approach One using 'fold number' stacking (ignoring muted traces in the fold count) showed better results than total trace stacking, as it illuminated events more clearly under the dune. ([[2024-jahlan|Jahlan, 2024, p. 62]])
- The sand dune was located between 2000 and 3000 m, while the affected traces extended from 1000 to 4000 m in the synthetic dataset. ([[2024-jahlan|Jahlan, 2024, p. 57]])
- Approach one (muting, NMO correction, and CDP stacking) successfully illuminated the reflection below the sand dune by muting noisy traces and taking the mean of the fold number. ([[2024-jahlan|Jahlan, 2024, p. 83]])
- Approach two produced results identical to approach one because the replaced traces had the same amplitude values and thus the same mean. ([[2024-jahlan|Jahlan, 2024, p. 83]])
- Approach three significantly improved stack quality, making the reflection event more continuous and sharper, though it introduced some noise from donor CDPs. ([[2024-jahlan|Jahlan, 2024, p. 83]])
- Approach four also showed significant improvement in continuity and clarity of the P-wave reflection event under sand dune illumination. ([[2024-jahlan|Jahlan, 2024, p. 83]])
- The third approach was identified as producing the best results for improving signal quality. ([[2024-jahlan|Jahlan, 2024, p. 83]])
- The fourth approach produced excellent results, showing improved continuity of the reflection event. ([[2024-jahlan|Jahlan, 2024, p. 83]])

## Limitations

Real seismic data acquired near Dammam Airport were found unsuitable for the study because they contained no usable reflection events after processing.

## Recommendations and Future Work

- Create a workflow for preconditioning CDP gathers and improving trace selection for the replacement step.
- Test the proposed approaches on real seismic data sets from near-surface and exploration surveys.
- Extend the proposed approaches to refraction events.

## Related Concepts

- [[seismic-processing]]
- [[nmo-correction]]
- [[parallax]]
- [[signal-to-noise-ratio]]
- [[rub-al-khali-basin]]
- [[seismic-imaging]]
- [[matlab]]
- [[dammam-area]]
- [[applied-geophysics]]
- [[f-k-filter]]
- [[p-wave-reflection]]
- [[parallax-phenomenon]]
