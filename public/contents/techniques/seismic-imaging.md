---
type: technique
title: "Seismic Imaging"
aliases:
  - "multi-seismic attributes"
  - "seismic attributes"
canonical: true
equipment: "Not stated in source"
software: "Not stated in source"
output: "quantified attributes like amplitude, phase, and frequency values."
tags:
  - technique/seismic-attribute-analysis
  - theme/reservoir-characterization
sources:
  - "raw/10158 - Application of multi-seismic attributes in estimating reservoir properties..pdf"
  - "raw/136092 - DATA DRIVEN MAPPING AND ATTENUATION OF NEAR-SURFACE DIFFRACTORS.pdf"
  - "raw/136198 - Estimation of Reservoir Properties from Seismic Attributes and Well Log Data usi.pdf"
  - "raw/136319 - An Innovative Model-based Velocity Integration Procedure with an Application in .pdf"
  - "raw/138901 - SEISMIC ATTRIBUTES AND ADVANCED COMPUTER ALGORITHM TO PREDICT FORMATION PORE PRE.pdf"
  - "raw/139504 - TOWARDS ACCURATE SEISMIC IMAGING USING PHASE SHIFT PLUS INTERPOLATION FOR VISCO-.pdf"
  - "raw/139620 - Improved 3-D Seismic Edge Detection with the Magic Cube Operator.pdf"
  - "raw/140553 - INVESTIGATION OF SEISMIC DATA AMPLIFICATION RESPONSE UNDER THE SAND DUNES OF RUB.pdf"
  - "raw/140670 - FULL WAVEFORM INVERSION FOR COMPLEX NEARSURFACE IMAGING USING SEG SEAM II SYNTHE.pdf"
  - "raw/141628 - Managing depth to basement uncertainty by integrating magnetic and seismic data.pdf"
  - "raw/141744 - LINEAR SEMBLANCE VELOCITY ANALYSIS IN THE T2–X2 DOMAIN CONCEPT AND APPLICATIONS .pdf"
  - "raw/142044 - Wireline Based Rock Physics Modeling and Synthetic Seismic.pdf"
  - "raw/142484 - Velocity Estimation from Surface-Consistent Statics.pdf"
  - "raw/142770 - PARALLAX-BASED APPROACH TO REMOVE SAND DUNE EFFECTS FROM SEISMIC DATA.pdf"
  - "raw/143145 - Assessment of submarine channels for CO₂ storage in the deep Taranaki Basin, New.pdf"
status: active
last_updated: 2026-06-20
---

# Seismic Imaging

**Summary**: The calculation of physical properties from seismic traces by transforming the data into various parameters like amplitude, phase, and frequency.

---

## How It Is Used in the Thesis Collection

- [[1997-al-marhoun|Al-Marhoun, 1997]] used seismic-attribute-analysis to quantify reservoir properties such as porosity and water saturation.

- [[2009-al-lehyani|Al-Lehyani, 2009]] addressed challenges in seismic imaging caused by near-surface diffractions.

- [[2009-sitouah|Sitouah, 2009]] applied seismic-attribute-analysis to provide spatial context for reservoir property estimation.

- [[2010-al-moqbel|Al-Moqbel, 2010]] Referenced in this thesis.

- [[2013-mark|Mark, 2013]] applied seismic-attribute-analysis to identify features like t*Attenuation and P-Impedance.

- [[2015-mohammed|Mohammed, 2015]] focused on improving seismic imaging by integrating visco-acoustic effects into the PSPI algorithm.

- [[2015-adetokunbo|Adetokunbo, 2015]] focused on improving 3D seismic imaging through advanced edge detection techniques.

- [[2017-almarzooq|Almarzooq, 2017]] addressed the challenges of seismic-imaging in complex surface environments.

- [[2018-mohamed|Mohamed, 2018]] focused on improving seismic imaging in complex near-surface environments.

- [[2020-abdallah-2|Abdallah, 2020]] focused on seismic-imaging to overcome challenges posed by ray path distortion and poor signal-to-noise ratios in sub-salt zones.

- [[2020-alzahrani|Alzahrani, 2020]] focused on seismic-imaging by improving velocity analysis in the t2–x2 domain.

- [[2021-suleymanov|Suleymanov, 2021]] used seismic-imaging to interpret synthetic signatures and evaluate reservoir visibility.

- [[2023-muhammad|Muhammad, 2023]] focused on the theme of seismic-imaging by improving velocity estimation techniques.

- [[2024-jahlan|Jahlan, 2024]] Referenced in this thesis.

- [[2024-maigana|Maigana, 2024]] used seismic-attribute-analysis (RMS and Chaos) to identify sand bodies and channel boundaries.

## Instruments and Software



- [[2009-al-lehyani|Al-Lehyani, 2009]] addressed challenges in seismic imaging caused by near-surface diffractions.

- [[2009-sitouah|Sitouah, 2009]] applied seismic-attribute-analysis to provide spatial context for reservoir property estimation.

- [[2010-al-moqbel|Al-Moqbel, 2010]] Referenced in this thesis.

- [[2013-mark|Mark, 2013]] applied seismic-attribute-analysis to identify features like t*Attenuation and P-Impedance.

- [[2015-mohammed|Mohammed, 2015]] focused on improving seismic imaging by integrating visco-acoustic effects into the PSPI algorithm.

- [[2015-adetokunbo|Adetokunbo, 2015]] focused on improving 3D seismic imaging through advanced edge detection techniques.

- [[2017-almarzooq|Almarzooq, 2017]] addressed the challenges of seismic-imaging in complex surface environments.

- [[2018-mohamed|Mohamed, 2018]] focused on improving seismic imaging in complex near-surface environments.

- [[2020-abdallah-2|Abdallah, 2020]] focused on seismic-imaging to overcome challenges posed by ray path distortion and poor signal-to-noise ratios in sub-salt zones.

- [[2020-alzahrani|Alzahrani, 2020]] focused on seismic-imaging by improving velocity analysis in the t2–x2 domain.

- [[2021-suleymanov|Suleymanov, 2021]] used seismic-imaging to interpret synthetic signatures and evaluate reservoir visibility.

- [[2023-muhammad|Muhammad, 2023]] focused on the theme of seismic-imaging by improving velocity estimation techniques.

- [[2024-jahlan|Jahlan, 2024]] Referenced in this thesis.

- [[2024-maigana|Maigana, 2024]] used seismic-attribute-analysis (RMS and Chaos) to identify sand bodies and channel boundaries.

## Typical Workflow



## Key Results and Findings

- Nine specific attributes (RMS, peak, etc.) were used to provide a more robust estimation than single-attribute methods. ([[1997-al-marhoun|Al-Marhoun, 1997, p. 19]])

- Removing these artifacts significantly improves the continuity of reflectors in the resulting image. ([[2009-al-lehyani|Al-Lehyani, 2009, p. 15]])

- Attributes like Instantaneous Frequency and RMS amplitude were used as inputs for the GRNN model. ([[2009-sitouah|Sitouah, 2009, p. 13]])

- Referenced in this thesis. ([[2010-al-moqbel|Al-Moqbel, 2010]])

- Eight specific attributes (Instantaneous Frequency, Dominant Frequency, t*Attenuation, Reflection Intensity, Cosine of Phase, Vp/Vs ratio, P-Impedance, and Reflective Acoustic Impedance) were used to feed the SVM algorithm. ([[2013-mark|Mark, 2013, p. 74]])

- Advanced migration techniques like PSPI are essential for accurately mapping complex structures such as salt domes. ([[2015-mohammed|Mohammed, 2015, p. 47]])

- The magic cube operator provided a more robust and multidirectional approach to identifying features compared to standard filters. ([[2015-adetokunbo|Adetokunbo, 2015, p. 13]])

- The proposed method provides a dataset that may be suitable for further AVO analysis. ([[2017-almarzooq|Almarzooq, 2017, p. 14]])

- FWI and RTM are key technologies for depth and velocity imaging. ([[2018-mohamed|Mohamed, 2018, p. 23]])

- The integration of magnetic data successfully mitigated the ambiguity caused by lack of illumination in sub-salt areas. ([[2020-abdallah-2|Abdallah, 2020, p. 85]])

- Linear semblance has less noise energy and improved vertical resolution, aiding in better selection of pick locations. ([[2020-alzahrani|Alzahrani, 2020, p. 51]])

- Forward modeling provided a way to determine the seismic visibility of various reservoir parameters. ([[2021-suleymanov|Suleymanov, 2021, p. 92]])

- Improved accuracy in velocity determination leads to better imaging of complex structures. ([[2023-muhammad|Muhammad, 2023, p. 21]])

- Referenced in this thesis. ([[2024-jahlan|Jahlan, 2024]])

- RMS attributes highlighted high-amplitude sandy intervals within the Moki A sandstone. ([[2024-maigana|Maigana, 2024, p. 50]])

## Methodological Variations Across Sources


## Technical Limitations and Open Questions


## Related Concepts

**Related Techniques**: 

**Applicable to Terminology**: 

**Used in Themes**: 
