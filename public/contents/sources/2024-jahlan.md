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
study_area: "Rub Al-Khali Desert, Kingdom of Saudi Arabia (synthetic data used for primary evaluation)"
keywords:
  - parallax phenomenon
  - seismic data
  - sand dunes
  - image processing
  - NMO correction
  - CDP stacking
  - signal-to-noise ratio
techniques:
  - nmo-correction
  - cdp-stacking
  - agc
  - f-k-filtering
  - deconvolution
  - matlab
  - seislab
  - seismic-unx
tags:
  - degree/ms
  - location/rub-al-khali-basin
  - technique/nmo-correction
  - technique/cdp-stack
  - technique/agc
  - technique/f-k-filtering
  - technique/deconvolution
  - technique/matlab
  - technique/signal-processing
  - theme/seismic-imaging
  - theme/applied-geophysics
  - terminology/signal-to-noise-ratio
  - terminology/acoustic-impedance
status: ingested
---

# PARALLAX-BASED APPROACH TO REMOVE SAND DUNE EFFECTS FROM SEISMIC DATA

**Summary**: The thesis explores a parallax-based approach, inspired by image processing techniques, to mitigate the effects of sand dunes on seismic data. By applying muting, NMO correction, and trace replacement across four distinct workflows, the study demonstrates that these methods significantly improve the continuity and clarity of reflections beneath dune structures in 2D synthetic datasets.

---

## Research Problem

Sand dunes cause significant degradation of seismic images due to time delays, reverberation, and amplitude amplification. These effects act as 'occlusions' that mask subsurface information, making it difficult to produce high-resolution images of targets located beneath the dunes.

## Objectives

- Introduce a parallax-based approach for removing sand dune effects from seismic data based on image processing principles.
- Develop four specific workflows (approaches) to implement this concept in 2D seismic data.
- Evaluate these approaches using synthetic 2D elastic seismic data generated from a model with realistic barchan dune topography.

## Methods

The study utilizes a 2D elastic model consisting of two horizontal layers and a sand dune (10 km long, 3 km wide) to generate synthetic data. The processing workflow includes: 1) AGC for amplitude boosting; 2) F-K filtering to remove linear noise below 1500 m/s; 3) Spiking deconvolution to sharpen the wavelet; 4) CDP sorting; 5) NMO correction (T0=1s, Vnmo=3000m/s); 6) Static correction; and 7) CDP stacking. Four parallax-based approaches were then tested: Approach 1 (Muting + NMO + Stack), Approach 2 (Muting + NMO + Stack + Replacement from same CDP), Approach 3 (Muting + NMO + Trace Replacement from adjacent CDPs), and Approach 4 (Muting + NMO + Supergather creation + Trace Replacement from supergather).

## Data and Materials

Synthetic data generated from a 2D elastic model with a 10 km length, 3000 m/s and 5000 m/s layer velocities. The dataset included 5001 CDPs and 251 shots. Real seismic data were acquired near the Dammam Airport but were excluded from final analysis due to lack of clear reflection events.

## Key Findings

- The sand dune impacts on seismic data are characterized by time delays, reverberation, and amplitude amplification (Page 20). ([[2024-jahlan|Jahlan, 2024, p. 20]])
- AGC with a window of 100 ms successfully boosted the amplitude of raw synthetic data, making events like the P-wave primary reflection at 1s visible (Page 52). ([[2024-jahlan|Jahlan, 2024, p. 52]])
- F-K filtering effectively removed linear noise with velocities below 1500 m/s without affecting the primary P-wave reflection (Page 57). ([[2024-jahlan|Jahlan, 2024, p. 57]])
- NMO correction successfully flattened the P-wave primary reflection at 1s, though it could not correct for time delays caused by the sand dune (Page 57). ([[2024-jahlan|Jahlan, 2024, p. 57]])
- Approach Three produced the best results in terms of clarity and continuity of the P-wave reflection under the sand dune (Page 83). ([[2024-jahlan|Jahlan, 2024, p. 83]])
- Approach Four also provided excellent results, showing improved continuity and a sharper image compared to standard processing (Page 83). ([[2024-jahlan|Jahlan, 2024, p. 83]])
- Approach Two produced identical results to Approach One because the replaced traces had the same amplitude values (Page 69). ([[2024-jahlan|Jahlan, 2024, p. 69]])

## Limitations

The real seismic data acquired near Dammam Airport were not suitable for testing the parallax approach as they lacked clear reflection events.

## Recommendations and Future Work

- Create a workflow for preconditioning CDP gathers and improving trace selection for replacement.
- Test proposed approaches on appropriate real seismic data from near-surface and exploration surveys.
- Extend the proposed approaches to refraction events.

## Related Concepts

- [[signal-processing]]
- [[nmo-correction]]
- [[cdp-stack]]
- [[signal-to-noise-ratio]]
- [[acoustic-impedance]]
- [[seismic-imaging]]
- [[rub-al-khali-basin]]
