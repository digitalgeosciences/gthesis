---
type: technique
title: "Seismic Processing"
aliases:
  - "shot gather processing"
canonical: true
equipment: "Not stated in source"
software: "Not stated in source"
output: "cleaned seismic shot gathers"
tags:
  - technique/seismic-processing
sources:
  - "raw/136092 - DATA DRIVEN MAPPING AND ATTENUATION OF NEAR-SURFACE DIFFRACTORS.pdf"
  - "raw/136319 - An Innovative Model-based Velocity Integration Procedure with an Application in .pdf"
  - "raw/138548 - Resolving the Cycle Skip Introduced by the Multi-Layer Static Model using a Hybr.pdf"
  - "raw/139504 - TOWARDS ACCURATE SEISMIC IMAGING USING PHASE SHIFT PLUS INTERPOLATION FOR VISCO-.pdf"
  - "raw/139620 - Improved 3-D Seismic Edge Detection with the Magic Cube Operator.pdf"
  - "raw/139824 - THREE-DIMENSIONAL SUPERVIRTUAL SEISMIC REFRACTION INTERFEROMETRY.pdf"
  - "raw/140553 - INVESTIGATION OF SEISMIC DATA AMPLIFICATION RESPONSE UNDER THE SAND DUNES OF RUB.pdf"
  - "raw/140641 - RELATION BETWEEN OFFSET AND VELOCITY DETERMINATION - APPLICATION ON A SYNTHETIC .pdf"
  - "raw/140658 - Effects of Element Elevation and Position Errors On the Response of Seismic Arra.pdf"
  - "raw/140670 - FULL WAVEFORM INVERSION FOR COMPLEX NEARSURFACE IMAGING USING SEG SEAM II SYNTHE.pdf"
  - "raw/141628 - Managing depth to basement uncertainty by integrating magnetic and seismic data.pdf"
  - "raw/141744 - LINEAR SEMBLANCE VELOCITY ANALYSIS IN THE T2–X2 DOMAIN CONCEPT AND APPLICATIONS .pdf"
  - "raw/141782 - FIRST ARRIVAL PICKING USING TWO DIFFERENT METHODS MDPE AND DBSCAN.pdf"
  - "raw/142247 - SAND DUNE STATIC DELAY A DATA DRIVEN APPROACH AND ADJUSTMENT OF THE SAND CURVE.pdf"
  - "raw/142265 - FIRST ARRIVALS TRAVELTIME PICKING USING UNSUPERVISED MACHINE LEARNING (DBSCAN) A.pdf"
  - "raw/142484 - Velocity Estimation from Surface-Consistent Statics.pdf"
  - "raw/142721 - INVESTIGATION OF TTI ANISOTROPY OF P-WAVE VELOCITIES IN SAND DUNES IN EASTERN SA.pdf"
  - "raw/142770 - PARALLAX-BASED APPROACH TO REMOVE SAND DUNE EFFECTS FROM SEISMIC DATA.pdf"
  - "raw/143131 - Effect of Offset on Time to Depth Conversion.pdf"
  - "raw/143219 - SUBDUCTING SLABS BENEATH SULAWESI, INDONESIA NEW EVIDENCE FROM TELESEISMIC P-WAV.pdf"
status: active
last_updated: 2026-06-10
---

# Seismic Processing

**Summary**: The application of mathematical algorithms to seismic data to improve image quality and remove noise.

---

## How It Is Used in the Thesis Collection

- [[2009-al-lehyani|Al-Lehyani, 2009]] applied seismic-processing techniques to attenuate diffracted energy from shot gathers.

- [[2010-al-moqbel|Al-Moqbel, 2010]] applied seismic-processing workflows to integrate multi-source data into a unified volume.

- [[2011-toma|Toma, 2011]] applied seismic-processing to resolve cycle skips using a hybrid static model.

- [[2015-mohammed|Mohammed, 2015]] applied seismic processing techniques to remove artifacts and enhance resolution.

- [[2015-adetokunbo|Adetokunbo, 2015]] performed seismic-processing to prepare the 3D volume for edge detection analysis.

- [[2016-edigbue|Edigbue, 2016]] used seismic processing to enhance first arrivals in 3D refraction data.

- [[2017-almarzooq|Almarzooq, 2017]] developed a new signal processing method to correct for sand dune amplification.

- [[2018-abdulrahman|Abdulrahman, 2018]] processed the synthetic data using SU (Seismic Unix) for standard operations like gain, filtering, and deconvolution.

- [[2018-putra|Putra, 2018]] used seismic-processing to evaluate the impact of geophone placement errors on trace energy.

- [[2018-mohamed|Mohamed, 2018]] used seismic processing to remove surface waves and noise from the input shot gathers.

- [[2020-abdallah-2|Abdallah, 2020]] applied seismic-processing (specifically PSDM) to generate gathers for velocity model validation.

- [[2020-alzahrani|Alzahrani, 2020]] used seismic-processing techniques including band-pass filtering and squaring to prepare data for analysis.

- [[2021-almashhor|AlMashhor, 2021]] used seismic-processing to evaluate first arrival picking methods for static correction.

- [[2022-aljishi|AlJishi, 2022]] used seismic-processing to address near-surface static issues in sand dune environments.

- [[2022-awais|Awais, 2022]] applied SVI to improve SNR before final DBSCAN picking.

- [[2023-muhammad|Muhammad, 2023]] applied seismic-processing workflows including elevation and residual static corrections to both synthetic and real datasets.

- [[2024-makki|Makki, 2024]] applied seismic-processing to preserve azimuthal effects during the analysis of dune data.

- [[2024-jahlan|Jahlan, 2024]] applied standard processing including AGC, F-K filtering, and deconvolution to 2D synthetic data.

- [[2024-felemban|Felemban, 2024]] applied seismic-processing using Seismic Unix to perform gain application and CDP sorting.

- [[2025-kesumastuti|Kesumastuti, 2025]] applied seismic-processing techniques including invert3d and tomo3d scripts for 3D modeling.

## Instruments and Software



- [[2010-al-moqbel|Al-Moqbel, 2010]] applied seismic-processing workflows to integrate multi-source data into a unified volume.

- [[2011-toma|Toma, 2011]] applied seismic-processing to resolve cycle skips using a hybrid static model.

- [[2015-mohammed|Mohammed, 2015]] applied seismic processing techniques to remove artifacts and enhance resolution.

- [[2015-adetokunbo|Adetokunbo, 2015]] performed seismic-processing to prepare the 3D volume for edge detection analysis.

- [[2016-edigbue|Edigbue, 2016]] used seismic processing to enhance first arrivals in 3D refraction data.

- [[2017-almarzooq|Almarzooq, 2017]] developed a new signal processing method to correct for sand dune amplification.

- [[2018-abdulrahman|Abdulrahman, 2018]] processed the synthetic data using SU (Seismic Unix) for standard operations like gain, filtering, and deconvolution.

- [[2018-putra|Putra, 2018]] used seismic-processing to evaluate the impact of geophone placement errors on trace energy.

- [[2018-mohamed|Mohamed, 2018]] used seismic processing to remove surface waves and noise from the input shot gathers.

- [[2020-abdallah-2|Abdallah, 2020]] applied seismic-processing (specifically PSDM) to generate gathers for velocity model validation.

- [[2020-alzahrani|Alzahrani, 2020]] used seismic-processing techniques including band-pass filtering and squaring to prepare data for analysis.

- [[2021-almashhor|AlMashhor, 2021]] used seismic-processing to evaluate first arrival picking methods for static correction.

- [[2022-aljishi|AlJishi, 2022]] used seismic-processing to address near-surface static issues in sand dune environments.

- [[2022-awais|Awais, 2022]] applied SVI to improve SNR before final DBSCAN picking.

- [[2023-muhammad|Muhammad, 2023]] applied seismic-processing workflows including elevation and residual static corrections to both synthetic and real datasets.

- [[2024-makki|Makki, 2024]] applied seismic-processing to preserve azimuthal effects during the analysis of dune data.

- [[2024-jahlan|Jahlan, 2024]] applied standard processing including AGC, F-K filtering, and deconvolution to 2D synthetic data.

- [[2024-felemban|Felemban, 2024]] applied seismic-processing using Seismic Unix to perform gain application and CDP sorting.

- [[2025-kesumastuti|Kesumastuti, 2025]] applied seismic-processing techniques including invert3d and tomo3d scripts for 3D modeling.

## Typical Workflow



## Key Results and Findings

- The proposed algorithm successfully attenuated diffracted energy in most cases. ([[2009-al-lehyani|Al-Lehyani, 2009, p. 10]])

- Data was selected at the CSA (Current State of the Art) stage to ensure consistency across different surveys. ([[2010-al-moqbel|Al-Moqbel, 2010, p. 44]])

- The hybrid approach successfully resolved a major cycle skip in the Haba Field data, resulting in better image of the subsurface structure. ([[2011-toma|Toma, 2011, p. 10]])

- Advanced PSPI methods provided better results for complex structures compared to standard imaging. ([[2015-mohammed|Mohammed, 2015, p. 18]])

- Not stated in source ([[2015-adetokunbo|Adetokunbo, 2015]])

- The semi-automatic method successfully avoided re-introducing noise during the signal enhancement process. ([[2016-edigbue|Edigbue, 2016, p. 69]])

- Proposed methods significantly reduce sand dune amplification in a surface-consistent manner. ([[2017-almarzooq|Almarzooq, 2017, p. 14]])

- Standard processing steps were applied to both restricted and unrestricted datasets before velocity analysis. ([[2018-abdulrahman|Abdulrahman, 2018, p. 9]])

- Real data analysis showed a 1.29% degradation in trace energy, significantly lower than the predicted 38.24%. ([[2018-putra|Putra, 2018, p. 17]])

- Removing waveforms that cannot be modeled by the acoustic engine (surface waves, scattered shear waves) prevented the FWI from erroneously updating velocity based on non-acoustic components. ([[2018-mohamed|Mohamed, 2018, p. 79]])

- Produced flat gathers at both base-salt and basement levels using a 4525 m/s salt velocity. ([[2020-abdallah-2|Abdallah, 2020, p. 79]])

- Squaring techniques often provide a better vertical velocity resolution. ([[2020-alzahrani|Alzahrani, 2020, p. 17]])

- Static correction is essential for both reflection and refraction data processing. ([[2021-almashhor|AlMashhor, 2021, p. 17]])

- The study utilizes various processing steps including AGC, stacking, and noise subtraction to isolate the dune reverberation signature. ([[2022-aljishi|AlJishi, 2022, p. 9]])

- SVI significantly improved the accuracy of first arrival pickings for both synthetic and field datasets. ([[2022-awais|Awais, 2022, p. 17]])

- The method successfully isolated the imperfect NMO component from the residual statics in processed data. ([[2023-muhammad|Muhammad, 2023, p. 15]])

- Data were processed to fit a TTI model with four known parameters to solve for Thomsen parameters. ([[2024-makki|Makki, 2024, p. 13]])

- Standard processing (AGC, F-K, deconvolution) improved signal clarity but did not remove the effects of sand dunes. ([[2024-jahlan|Jahlan, 2024, p. 40]])

- t^2 method with a clipping quantile of 0.95 was used to compensate for amplitude loss due to spherical divergence. ([[2024-felemban|Felemban, 2024, p. 36]])

- The final model reduced data variance by 69% from 0.89921 s2 to 0.27845 s2. ([[2025-kesumastuti|Kesumastuti, 2025, p. 61]])

## Methodological Variations Across Sources


## Technical Limitations and Open Questions


## Related Concepts

**Related Techniques**: 

**Applicable to Terminology**: 

**Used in Themes**: 
