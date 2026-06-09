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
status: active
last_updated: 2026-06-09
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

## Methodological Variations Across Sources


## Technical Limitations and Open Questions


## Related Concepts

**Related Techniques**: 

**Applicable to Terminology**: 

**Used in Themes**: 
