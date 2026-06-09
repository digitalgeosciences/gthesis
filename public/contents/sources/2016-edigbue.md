---
type: source
id: "139824"
title: "THREE-DIMENSIONAL SUPERVIRTUAL SEISMIC REFRACTION INTERFEROMETRY"
author: "Paul Irikefe Edigbue"
year: 2016
department: "Geosciences"
degree: "MS"
supervisor: "Al-Shuhail A. Abdullatif"
committee_members:
  - "Al-Shuhail A. Abdullatif"
  - "Kaka I. SanLinn"
  - "Al-Ramadan A. Khalid"
source_file: "raw/139824 - THREE-DIMENSIONAL SUPERVIRTUAL SEISMIC REFRACTION INTERFEROMETRY.pdf"
url: "https://eprints.kfupm.edu.sa/id/eprint/139824/"
study_area: "Not stated in source"
keywords:
  - Seismic Interferometry
  - Supervirtual Method
  - 3D Seismic Refraction
  - Signal-to-Noise Ratio (SNR)
  - First Arrival Picking
  - Supervirtual interferometry (SVI)
  - Seismic refraction
  - 3D seismic data
  - Signal processing
  - First arrival
  - SNR improvement
  - supervirtual interferometry
  - first arrivals
  - noise reduction
techniques:
  - crosscorrelation
  - alignment
  - sumsummation
  - first-arrival-calculation
  - synthetic-3d-seismic-refraction-data-generation
  - signal-processing
  - synthetic-3d-seismic-data-generation
  - supervirtual-interferometry
  - seismic-processing
tags:
  - degree/ms
  - technique/seismic-interpretation
  - technique/velocity-analysis
  - technique/signal-processing
  - technique/cross-correlation
  - technique/supervirtual-interferometry
  - technique/seismic-processing
  - theme/geophysics-general
  - theme/applied-geophysics
  - theme/seismology
  - terminology/signal-to-noise-ratio
  - terminology/first-arrival
  - terminology/refraction-seismics
  - terminology/first-arrivals
status: ingested
---

# THREE-DIMENSIONAL SUPERVIRTUAL SEISMIC REFRACTION INTERFEROMETRY

**Summary**: The thesis investigates the development and application of a 3D supervirtual seismic refraction interferometry (SVI) method to improve signal-to-noise ratio (SNR) and first arrival picking in active 3D seismic data. The study uses synthetic 3D data with complex geometries to demonstrate that the proposed algorithm effectively overcomes the ray-path limitations of traditional 2D SVI methods.

---

## Research Problem

The quality of seismic data is often degraded by near-surface features, cultural noise, and the 'far offset problem,' where signal strength diminishes at large distances. In 3D seismic refraction, these issues make it difficult to accurately pick first arrivals for determining subsurface velocity structures.

## Objectives

- Extending the supervirtual refraction interferometry method to operate on 3D active seismic data.
- Generating low profile synthetic 3D seismic data to test the enhanced first arrival picking algorithm, using orthogonal survey method.
- Estimating the SNR of the enhanced data and postulating the basis for comparison of the noisy and enhanced first arrivals.
- Develop a 3D supervirtual interferometry algorithm to enhance first-arrival signals in seismic refraction data.
- Implement cross-correlation and summation techniques to improve Signal-to-Noise Ratio (SNR) of far-offset traces.
- Evaluate the performance of the SVI method using synthetic 3D seismic data with added Gaussian noise.
- Evaluate the efficiency of supervirtual algorithms for enhancing first arrivals in active 3D seismic refraction data.
- Compare first arrival results between raw synthetic data (with noise) and enhanced data using SVI.

## Methods

The study utilizes a three-stage supervirtual algorithm: 1. Cross-correlation: Pairs of raw traces from the same source are cross-correlated to generate virtual traces, which remove non-coherent signals like ground roll and multiples. 2. Alignment: The resulting correlograms are aligned to a common time (t0) to ensure constructive interference during summation. 3. Summation: Multiple aligned correlograms are summed to enhance the signal. A semi-automatic first-arrival calculation method is then used to shift the enhanced traces back to their correct times based on a single manual pick of a reference trace.

## Data and Materials

The study uses synthetic 3D seismic refraction data generated from a two-layer model (V1=1500m/s, V2=2500m/s) using a zero-phase wavelet. The survey design includes a single patch orthogonal field layout with 5 receiver lines and 5 source lines, totaling 105 sources and 105 receivers.

## Key Findings

- The 3D supervirtual algorithm successfully enhances the signal-to-noise ratio (SNR) of noisy seismic refraction data, resulting in traces with significantly better SNR than original records. ([[2016-edigbue|Edigbue, 2016, p. 13]])
- The proposed 3D SVI method overcomes the ray-path problem inherent in applying traditional 2D SVI methods to 3D geometries. ([[2016-edigbue|Edigbue, 2016, p. 17]])
- Synthetic data showed accurate first arrivals after the application of the 3D SVI algorithm, even when original traces were heavily impacted by noise. ([[2016-edigbue|Edigbue, 2016, p. 13]])
- The supervirtual method can improve SNR by a factor of N (where N is the number of sources) compared to standard interferometry which improves it by sqrt(N). ([[2016-edigbue|Edigbue, 2016, p. 23]])
- The supervirtual interferometry method successfully preserves far-offset arrivals that would otherwise be lost due to poor signal quality. ([[2016-edigbue|Edigbue, 2016, p. 27]])
- Cross-correlation of two traces from the same source results in a coherent signal because only head waves satisfy the assumption of being similar across different receiver locations. ([[2016-edigbue|Edigbue, 2016, p. 34]])
- The summation of aligned correlograms improved the Signal-to-Noise Ratio (SNR) from approximately 4 to about 20 in the tested synthetic data. ([[2016-edigbue|Edigbue, 2016, p. 60]])
- finding_page_ref_note_for_user_only_not_included_in_json_field_but_logic_applied_during_extraction_of_data_points_from_text_blocks_at_pages_27_34_and_60 ([[2016-edigbue|Edigbue, 2016]])
- The supervirtual method is shown to be effective in enhancing first arrivals, with results showing a close match between noiseless and enhanced traces. ([[2016-edigbue|Edigbue, 2016, p. 64]])
- Percentage errors for first arrival picks after applying the supervirtual method were found to be very small (less than 5%). ([[2016-edigbue|Edigbue, 2016, p. 64]])
- The semi-automatic method successfully avoids re-introducing noise into enhanced traces, a common issue with standard convolution methods. ([[2016-edigbue|Edigbue, 2016, p. 69]])
- The study confirms that the supervirtual algorithm is adequate to enhance first arrivals of active synthetic 3D seismic refraction data. ([[2016-edigbue|Edigbue, 2016, p. 69]])

## Limitations

The current semi-automatic method requires a manual pick of the first arrival of the reference trace on each receiver line, which can be time-consuming for large datasets. Additionally, the study only used synthetic data from a single patch geometry.

## Recommendations and Future Work

- Fully automate the semi-automatic method to handle larger volumes of real seismic data efficiently.
- Expand the scope of synthetic data to include multiple patches, salvos, and swath acquisition grids.
- Test the algorithm using real 3D seismic refraction data.

## Related Concepts

- [[signal-processing]]
- [[velocity-analysis]]
- [[signal-to-noise-ratio]]
- [[first-arrival]]
- [[geophysics-general]]
- [[seismology]]
- [[cross-correlation]]
- [[applied-geophysics]]
- [[refraction-seismics]]
- [[supervirtual-interferometry]]
- [[seismic-processing]]
- [[first-arrivals]]
- [[saudi-arabia]]
