---
type: source
id: "140553"
title: "INVESTIGATION OF SEISMIC DATA AMPLIFICATION RESPONSE UNDER THE SAND DUNES OF RUB AL-KHALI"
author: "Mustafa Almarzooq"
year: 2017
department: "Geosciences"
degree: "MS"
supervisor: "SanLinn Kaka"
committee_members:
  - "SanLinn Kaka"
  - "Abdulatif Al-Shuhail"
  - "Mamadou Diallo"
source_file: "raw/140553 - INVESTIGATION OF SEISMIC DATA AMPLIFICATION RESPONSE UNDER THE SAND DUNES OF RUB.pdf"
url: "https://eprints.kfupm.edu.sa/id/eprint/140553/"
study_area: "Rub Al-Khali region, Saudi Arabia"
keywords:
  - Seismic data amplification
  - Sand dunes
  - Rub Al-Khali
  - AVO analysis
  - Surface-consistent amplitude correction
  - Signal-to-noise ratio
  - Finite-difference modeling
  - amplitude correction
  - surface-consistent scaling
techniques:
  - finite-difference-modeling
  - spectral-analysis
  - multi-taper-method
  - seismic-processing
  - signal-processing
  - avo-analysis
  - gap-deconvolution
  - f-k-transform
  - linear-regression
tags:
  - degree/ms
  - location/rub-al-khali-basin
  - location/saudi-arabia
  - technique/finite-difference-modeling
  - technique/spectral-analysis
  - technique/multi-taper-method
  - technique/seismic-processing
  - technique/signal-processing
  - technique/avo-analysis
  - technique/gap-deconvolution
  - technique/f-k-transform
  - technique/linear-regression
  - theme/geophysics-general
  - theme/seismic-imaging
  - theme/seismic-acquisition
  - terminology/acoustic-impedance
  - terminology/avo-analysis
  - terminology/resonance
  - terminology/signal-to-noise-ratio
  - terminology/amplification
status: ingested
---

# INVESTIGATION OF SEISMIC DATA AMPLIFICATION RESPONSE UNDER THE SAND DUNES OF RUB AL-KHALI

**Summary**: The thesis investigates the problem of seismic wave amplification caused by high impedance contrasts between sand dunes and underlying salt flats (Sabkhas) in the Rub Al-Khali region. The author proposes a new deterministic, frequency-dependent de-amplification method to mitigate these effects and improve data suitability for AVO analysis.

---

## Research Problem

The high contrast in acoustic impedance between sand dunes and the underlying Sabkha leads to significant amplification of seismic waves at surface stations, which complicates AVO analysis. Existing surface-consistent amplitude correction (SCAC) methods often fail in this environment due to low signal-to-noise ratios and the specific nature of dune-induced resonance.

## Objectives

- Develop a new method to significantly reduce sand dune amplification effects using real data from the Rub Al-Khali region.
- Establish a workflow to improve the signal-to-noise ratio (SNR) for seismic data in Rub Al-Khali.
- Assess the performance of the proposed method using an optimized finite-difference modeling scheme.
- Investigate the relationship between sand dune thickness and seismic signal amplification.
- Evaluate the impact of different offset ranges on the calculation of amplification correction factors.
- Develop a surface-consistent, frequency-dependent scaling method to correct for sand dune effects.

## Methods

The study utilizes a deterministic approach to derive surface-consistent, frequency-dependent de-amplification functions. The methodology involves: 1) Computing a global reference trace as the average amplitude spectrum of all traces from pairs of sources and receivers located on the Sabkha; 2) Calculating local reference traces for receiver and shot stations located on dunes using averages of corresponding traces with source/receivers in the Sabkha; 3) Determining de-amplification factors via spectral division of local to global references; 4) Applying these factors in the frequency domain to correct the data. The study also employs finite-difference modeling (using an optimized scheme by Etienne et al., 2007) to simulate and validate the method's performance on synthetic datasets.

## Data and Materials

The study uses real seismic data from two field surveys in the Rub Al-Khali region, including survey parameters such as elevation profiles, maximum offsets, and source/receiver configurations. Additionally, it utilizes a 2D finite-difference model consisting of four layers (air, Sabkha, and two clastic layers) with an ellipse-shaped hill representing sand dunes.

## Key Findings

- The highest amplification in the study area was observed at approximately 20 Hz. ([[2017-almarzooq|Almarzooq, 2017, p. 22]])
- The transmission coefficient for typical values of a sand dune (400–1200 m/s, 1.7–1.9 g/cm3) and Sabkha (2000–3000 m/s, 2.1–2.3 g/cm3) ranges between 1.5 and 1.8. ([[2017-almarzooq|Almarzooq, 2017, p. 28]])
- The proposed method significantly reduces sand dune amplification effects in a surface-consistent manner, providing data more suitable for AVO analysis. ([[2017-almarzooq|Almarzooq, 2017]])
- page_number_placeholder_for_summary_finding_in_abstract_or_conclusion_not_explicitly_numbered_but_found_on_pages_14_and_47 ([[2017-almarzooq|Almarzooq, 2017]])
- A positive correlation was found between sand dune thickness and the average amplitude spectrum, with a coefficient of determination (R²) of 0.873. ([[2017-almarzooq|Almarzooq, 2017, p. 54]])
- Lower frequency bands exhibited higher amplification levels in sand dune sections compared to higher frequencies. ([[2017-almarzooq|Almarzooq, 2017, p. 55]])
- The average amplitude of traces on sand dunes was found to be significantly higher than those in Sabkha areas, with some variations exceeding a factor of four. ([[2017-almarzooq|Almarzooq, 2017, p. 67]])
- An amplification correction derived from a 3000-5000 m offset range provided the most consistent results for correcting sand dune effects. ([[2017-almarzooq|Almarzooq, 2017, p. 52]])
- The proposed surface-consistent scaling method successfully reduced amplitude banding in stacked sections and improved signal-to-noise (S/N) ratios. ([[2017-almarzooq|Almarzooq, 2017, p. 71]])
- The application of the correction allowed for more effective F-K filtering by removing high-amplitude artifacts that would otherwise complicate noise attenuation. ([[2017-almarzooq|Almarzooq, 2017, p. 75]])

## Limitations

Standard surface-consistent amplitude correction (SCAC) methods are often ineffective in Rub Al-Khali due to low signal-to-noise ratios and the inability of frequency-independent models to account for dune-specific amplification. The 2D finite difference model is simplified by using only four layers, which does not fully reflect the geological complexity but focuses on the specific impact of sand dunes.

## Recommendations and Future Work

The study suggests future work to improve the correction method discussed and notes that while the proposed method reduces amplification, additional static corrections are still required to correct time shifts induced by low-velocity materials.

## Related Concepts

- [[finite-difference-modeling]]
- [[spectral-analysis]]
- [[multi-taper-method]]
- [[seismic-processing]]
- [[acoustic-impedance]]
- [[avo-analysis]]
- [[resonance]]
- [[signal-to-noise-ratio]]
- [[rub-al-khali-basin]]
- [[seismic-imaging]]
- [[f-k-transform]]
- [[amplification]]
- [[seismic-acquisition]]
