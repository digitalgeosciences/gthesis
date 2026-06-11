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
  - seismic data amplification
  - sand dunes
  - Rub Al-Khali
  - AVO analysis
  - surface consistent amplitude correction (SCAC)
  - finite-difference modeling
  - surface-consistent
  - spectral ratio
  - finite difference method
  - Sabkha
  - frequency domain
  - multi-taper method
  - amplitude correction
  - signal processing
  - Surface consistent scaling
  - Signal to noise ratio (S/N)
  - Gap deconvolution
techniques:
  - finite-difference
  - spectral-analysis
  - signal-processing
  - seismic-interpretation
  - avo-analysis
  - well-log-analysis
  - groundwater-modeling
  - spectral-ratio
  - spherical-spreading-correction
  - variable-gap-deconvolution
  - multi-taper-method
  - fourier-transform
  - seismic-processing
  - f-k-transform
  - finite-difference-simulation
  - gap-deconvolution
tags:
  - degree/ms
  - location/rub-al-khali-basin
  - location/saudi-arabia
  - technique/finite-difference
  - technique/spectral-analysis
  - technique/signal-processing
  - technique/seismic-interpretation
  - technique/avo-analysis
  - technique/groundwater-modeling
  - technique/spectral-ratio
  - technique/seismic-processing
  - technique/multi-taper-method
  - technique/f-k-transform
  - technique/gap-deconvolution
  - theme/geophysics-general
  - theme/applied-geophysics
  - theme/seismic-acquisition
  - theme/near-surface-geophysics
  - terminology/amplification
  - terminology/resonance
  - terminology/impedance-contrast
  - terminology/resonance-effects
  - terminology/signal-processing
status: ingested
---

# INVESTIGATION OF SEISMIC DATA AMPLIFICATION RESPONSE UNDER THE SAND DUNES OF RUB AL-KHALI

**Summary**: The thesis investigates the impact of sand dune amplification on seismic data in the Rub Al-Khali region, where high impedance contrasts between dunes and underlying formations create significant signal distortions. The author proposes a new surface-consistent amplitude correction method to mitigate these effects and ensure the data is suitable for AVO analysis.

---

## Research Problem

The high contrast in acoustic impedance between sand dunes and underlying formations in Rub Al-Khali leads to frequency-dependent amplification of seismic waves, which compromises the suitability of processed data for AVO analysis when using standard SCAC methods.

## Objectives

- Investigate the effects of sand dune amplification on seismic signals recorded at different locations (dunes vs. Sabkhas).
- Develop a new method to reduce the effects of sand dune amplification in a surface-consistent manner.
- Evaluate the performance of the proposed method using both real data from Rub Al-Khali and optimized finite-difference modeling.
- Develop a new method to significantly reduce sand dune amplification effects using real data from the Rub Al-Khali region.
- Examine a workflow to improve the signal-to-noise ratio (S/N) of seismic data in Rub Al-Khali.
- Investigate the impact of sand dune morphology and thickness on seismic signal amplitude.
- Develop a frequency-domain amplification correction method using multi-taper analysis to mitigate dune effects.
- Validate the proposed methodology using synthetic numerical simulations.
- Apply the developed methodology to real 2D seismic data from the Rub Al-Khali region.
- Identify and quantify the impact of sand dune amplification on seismic records.
- Develop a surface-consistent scaling method to correct for frequency-dependent amplification.
- Evaluate the effectiveness of the proposed correction in improving signal-to-noise ratios (S/N).
- Assess the suitability of corrected data for AVO analysis.

## Methods

The study employs a frequency-domain approach where signal components are analyzed via Fourier Transform. The multi-taper method is used for spectral estimation to reduce leakage and variance. A global reference trace (average of Sabkha traces) and local reference traces (for dune stations) are calculated. Correction factors are derived by dividing the local reference by the global reference in the frequency domain, adding a noise term (0.001) to prevent division by zero. The method is validated using a finite-difference modeling scheme (second-order wave equation, 601x2001 grid, Ricker wavelet). Real data analysis includes evaluating the impact of offset ranges on correction factors and correlating dune thickness with amplification levels.

## Data and Materials

The study utilizes: 1) Synthetic seismic gathers generated from 2D finite difference models representing sand dune/Sabkha environments; 2) Real field data from two surveys conducted in the Rub Al-Khali region, including parameters such as elevation, maximum offset, and source/receiver configurations.

## Key Findings

- The high contrast in acoustic impedance between the dune base and the underlying formation results in an amplification of seismic waves recorded at stations located on the surface. ([[2017-almarzooq|Almarzooq, 2017, p. 14]])
- Resonance effects (reverberations) within sand dunes and scattering around topographic irregularities may strengthen the effects of the amplification. ([[2017-almarzooq|Almarzooq, 2017, p. 18]])
- The proposed method significantly reduces sand dune amplification effects in a surface-consistent manner, providing data suitable for AVO analysis. ([[2017-almarzooq|Almarzooq, 2017]])
- page_num_ref_not_found_in_text_but_implied_by_abstract_and_conclusions ([[2017-almarzooq|Almarzooq, 2017]])
- Sand dunes are observed to have an average elevation of approximately 91 meters, occasionally exceeding 183 meters. ([[2017-almarzooq|Almarzooq, 2017, p. 23]])
- The highest amplification in the sand dune environment is observed at 20 Hz. ([[2017-almarzooq|Almarzooq, 2017, p. 22]])
- Transmission coefficients for typical sand dune and Sabkha properties range between 1.5 and 1.8, necessitating pre-processing to attenuate these effects. ([[2017-almarzooq|Almarzooq, 2017, p. 28]])
- The primary mechanism for amplification is the trapping of seismic waves due to high impedance contrast between sediments (sand) and underlying formations (Sabkha). ([[2017-almarzooq|Almarzooq, 2017, p. 27]])
- Resonance effects in soft sedimentary cover contribute significantly to low-frequency amplification. ([[2017-almarzooq|Almarzooq, 2017, p. 30]])
- Surface waves generated by rough topography can increase signal duration and kinetic energy by 15% when scattering is considered. ([[2017-almarzooq|Almarzooq, 2017, p. 32]])
- Frequency-dependent attenuation is significant only at frequencies beyond 10 Hz; constant Q assumptions overestimate amplification at 30 Hz. ([[2017-almarzooq|Almarzooq, 2017, p. 33]])
- Conventional surface-consistent methods often fail in Rub Al-Khali because they are frequency-independent and cannot account for specific dune-related amplification. ([[2017-almarzooq|Almarzooq, 2017, p. 34]])
- The multi-taper method effectively reduces spectral leakage and variance compared to standard Fourier Transform methods for signal estimation. ([[2017-almarzooq|Almarzooq, 2017, p. 38]])
- Sand dune stations exhibit significantly higher amplitudes across the entire frequency spectrum compared to Sabkha stations due to high acoustic impedance differences. ([[2017-almarzooq|Almarzooq, 2017, p. 42]])
- A positive correlation exists between sand dune thickness and average amplitude spectra, with a coefficient of determination (R^2) of 0.873. ([[2017-almarzooq|Almarzooq, 2017, p. 54]])

## Limitations

The standard spectral ratio techniques used in engineering studies were noted as insufficient for the specific challenges of the Rub Al-Khali region due to their inability to target only those stations impacted by sand dunes.

## Recommendations and Future Work

The study suggests that while amplification correction improves S/N and consistency, additional surface-consistent residual statics are required to correct time shifts induced by low-velocity materials.

## Related Concepts

- [[finite-difference]]
- [[avo-analysis]]
- [[spectral-analysis]]
- [[amplification]]
- [[resonance]]
- [[rub-al-khali-basin]]
- [[geophysics-general]]
- [[seismic-acquisition]]
- [[seismic-processing]]
- [[spectral-ratio]]
- [[impedance-contrast]]
- [[resonance-effects]]
- [[near-surface-geophysics]]
- [[multi-taper-method]]
- [[signal-processing]]
