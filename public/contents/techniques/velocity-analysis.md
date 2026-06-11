---
type: technique
title: "Velocity Analysis"
aliases:
  - "stacking velocity"
  - "NMO velocity"
  - "interval velocity"
canonical: true
equipment: "Not stated in source"
software: "Not stated in source"
output: "stacking velocity values (m/s) and time-velocity profiles."
tags:
  - technique/velocity-analysis
  - theme/seismic-imaging
sources:
  - "raw/136319 - An Innovative Model-based Velocity Integration Procedure with an Application in .pdf"
  - "raw/138548 - Resolving the Cycle Skip Introduced by the Multi-Layer Static Model using a Hybr.pdf"
  - "raw/139612 - Microseismic Modeling of Hydraulic Fracturing and Analysis of Location and Detec.pdf"
  - "raw/139824 - THREE-DIMENSIONAL SUPERVIRTUAL SEISMIC REFRACTION INTERFEROMETRY.pdf"
  - "raw/139898 - CHARACTERIZATION OF BRITTLENESS AND FRACKABILITY FOR UNCONVENTIONAL SHALE.pdf"
  - "raw/140062 - Characterizing fluid contacts from seismic data by joint inversion of Acoustic v.pdf"
  - "raw/140641 - RELATION BETWEEN OFFSET AND VELOCITY DETERMINATION - APPLICATION ON A SYNTHETIC .pdf"
  - "raw/141628 - Managing depth to basement uncertainty by integrating magnetic and seismic data.pdf"
  - "raw/141744 - LINEAR SEMBLANCE VELOCITY ANALYSIS IN THE T2–X2 DOMAIN CONCEPT AND APPLICATIONS .pdf"
  - "raw/141782 - FIRST ARRIVAL PICKING USING TWO DIFFERENT METHODS MDPE AND DBSCAN.pdf"
  - "raw/142265 - FIRST ARRIVALS TRAVELTIME PICKING USING UNSUPERVISED MACHINE LEARNING (DBSCAN) A.pdf"
  - "raw/142466 - ESTIMATION OF WATER SATURATION IN A SAND DUNE FROM DIVING DIRECT SEISMIC P-WAVES.pdf"
  - "raw/142484 - Velocity Estimation from Surface-Consistent Statics.pdf"
  - "raw/142585 - Inversion of Vertical Seismic Profiling (VSP) Data Via Consecutive Neural Networ.pdf"
  - "raw/142721 - INVESTIGATION OF TTI ANISOTROPY OF P-WAVE VELOCITIES IN SAND DUNES IN EASTERN SA.pdf"
  - "raw/142807 - Estimation of Water Content Using GPR and Seismic Data in a Sand Dune in Eastern.pdf"
  - "raw/143131 - Effect of Offset on Time to Depth Conversion.pdf"
  - "raw/143219 - SUBDUCTING SLABS BENEATH SULAWESI, INDONESIA NEW EVIDENCE FROM TELESEISMIC P-WAV.pdf"
  - "raw/9656 - Use of vibrator performance data to improve near-surface velocity determination.pdf"
status: active
last_updated: 2026-06-10
---

# Velocity Analysis

**Summary**: The process of determining the speed at which seismic waves travel through subsurface layers to accurately position reflectors.

---

## How It Is Used in the Thesis Collection

- [[2010-al-moqbel|Al-Moqbel, 2010]] used velocity-analysis to determine stacking velocities for seven key horizons in Eastern Saudi Arabia.

- [[2011-toma|Toma, 2011]] applied velocity-analysis to both pre-stack and post-stack data during processing.

- [[2015-own|Own, 2015]] applied velocity-analysis to calibrate microseismic data and reduce location errors.

- [[2016-edigbue|Edigbue, 2016]] used velocity models (V1=500m/s, V2=2500m/s) to generate synthetic 3D seismic refraction data.

- [[2016-lawal|Lawal, 2016]] performed velocity-analysis on samples under varying confining pressures (5-35 MPa).

- [[2016-ali|Ali, 2016]] used velocity-analysis to calculate interval velocity via Dix's equation.

- [[2018-abdulrahman|Abdulrahman, 2018]] performed velocity analysis to compare stacking and interval velocities across different offset ranges.

- [[2020-abdallah-2|Abdallah, 2020]] proposed a workflow for building a velocity model by integrating seismic and magnetic data.

- [[2020-alzahrani|Alzahrani, 2020]] applied velocity-analysis to determine stacking velocities in both t-x and t2-x2 domains.

- [[2021-almashhor|AlMashhor, 2021]] applied LMO shift to the data before stacking to improve signal detection for the DBSCAN algorithm.

- [[2022-awais|Awais, 2022]] applied LMO at multiple velocities to create stacked images for cluster analysis.

- [[2023-alsahwan|AlSahwan, 2023]] used velocity-analysis to establish a relationship between P-wave velocity and water saturation in unconsolidated sediments.

- [[2023-muhammad|Muhammad, 2023]] used velocity-analysis to determine NMO velocities from CMP gathers using both conventional semblance and a new method based on statics.

- [[2023-almarzooq|Almarzooq, 2023]] performed velocity inversion to predict values in the undrilled section.

- [[2024-makki|Makki, 2024]] used velocity-analysis to determine P-wave propagation speeds across different azimuths in the sand dune.

- [[2024-alkhunaizi|Alkhunaizi, 2024]] applied velocity-analysis to relate P-wave and GPR velocities to water saturation.

- [[2024-felemban|Felemban, 2024]] used velocity analysis to evaluate the impact of offset limits on picking accurate stacking velocities.

- [[2025-kesumastuti|Kesumastuti, 2025]] analyzed P-wave velocity structures using teleseismic data to identify slab features.

- [[2002-al-ali|Al-Ali, 2002]] performed velocity-analysis to determine near-surface P-wave velocities.

## Instruments and Software



- [[2011-toma|Toma, 2011]] applied velocity-analysis to both pre-stack and post-stack data during processing.

- [[2015-own|Own, 2015]] applied velocity-analysis to calibrate microseismic data and reduce location errors.

- [[2016-edigbue|Edigbue, 2016]] used velocity models (V1=500m/s, V2=2500m/s) to generate synthetic 3D seismic refraction data.

- [[2016-lawal|Lawal, 2016]] performed velocity-analysis on samples under varying confining pressures (5-35 MPa).

- [[2016-ali|Ali, 2016]] used velocity-analysis to calculate interval velocity via Dix's equation.

- [[2018-abdulrahman|Abdulrahman, 2018]] performed velocity analysis to compare stacking and interval velocities across different offset ranges.

- [[2020-abdallah-2|Abdallah, 2020]] proposed a workflow for building a velocity model by integrating seismic and magnetic data.

- [[2020-alzahrani|Alzahrani, 2020]] applied velocity-analysis to determine stacking velocities in both t-x and t2-x2 domains.

- [[2021-almashhor|AlMashhor, 2021]] applied LMO shift to the data before stacking to improve signal detection for the DBSCAN algorithm.

- [[2022-awais|Awais, 2022]] applied LMO at multiple velocities to create stacked images for cluster analysis.

- [[2023-alsahwan|AlSahwan, 2023]] used velocity-analysis to establish a relationship between P-wave velocity and water saturation in unconsolidated sediments.

- [[2023-muhammad|Muhammad, 2023]] used velocity-analysis to determine NMO velocities from CMP gathers using both conventional semblance and a new method based on statics.

- [[2023-almarzooq|Almarzooq, 2023]] performed velocity inversion to predict values in the undrilled section.

- [[2024-makki|Makki, 2024]] used velocity-analysis to determine P-wave propagation speeds across different azimuths in the sand dune.

- [[2024-alkhunaizi|Alkhunaizi, 2024]] applied velocity-analysis to relate P-wave and GPR velocities to water saturation.

- [[2024-felemban|Felemban, 2024]] used velocity analysis to evaluate the impact of offset limits on picking accurate stacking velocities.

- [[2025-kesumastuti|Kesumastuti, 2025]] analyzed P-wave velocity structures using teleseismic data to identify slab features.

- [[2002-al-ali|Al-Ali, 2002]] performed velocity-analysis to determine near-surface P-wave velocities.

## Typical Workflow



## Key Results and Findings

- The integrated model helped distinguish valid picks in areas with stretched or poor semblance peaks. ([[2010-al-moqbel|Al-Moqbel, 2010, p. 18]])

- Two passes of velocity analysis were performed in the processing sequence. ([[2011-toma|Toma, 2011, p. 45]])

- Accurate velocity models are essential for reducing the uncertainty in fracture geometry interpretation. ([[2015-own|Own, 2015]])

- Synthetic data showed accurate first arrivals after the application of the 3D SVI algorithm. ([[2016-edigbue|Edigbue, 2016, p. 13]])

- Measured P and S wave velocities for 8 plugs across multiple orientations and pressures. ([[2016-lawal|Lawal, 2016, p. 51]])

- Interval velocity was calculated using the RMS velocity of the current and adjacent layers. ([[2016-ali|Ali, 2016, p. 44]])

- The difference in error between restricted and unrestricted offsets was only 2.893%. ([[2018-abdulrahman|Abdulrahman, 2018, p. 9]])

- A gradient model (V = V0 + kZ) is often a reliable approximation for sedimentary lithologies like sand and shale in 'soft-rock' environments. ([[2020-abdallah-2|Abdallah, 2020, p. 40]])

- Stacking velocities picked using the squaring technique are similar or better than those selected conventionally (i.e., using the hyperbolic technique). ([[2020-alzahrani|Alzahrani, 2020, p. 17]])

- LMO shift combined with stacking enhances the SNR of random noise but may decrease it in the presence of coherent noise. ([[2021-almashhor|AlMashhor, 2021, p. 92]])

- Maximum output energy in the LMO stack identifies the optimal velocity for a given data subset. ([[2022-awais|Awais, 2022, p. 52]])

- P-wave velocity ($V_P$) shows a sharp increase at full saturation due to bulk modulus changes, while it decreases slightly during partial saturation. ([[2023-alsahwan|AlSahwan, 2023, p. 29]])

- The proposed method yielded an NMO velocity within 2.5% of the true value for sand dune models and 0.6% error on real data. ([[2023-muhammad|Muhammad, 2023, p. 15]])

- The average RMSE for the inversion model was 2748.79 on blind testing datasets. ([[2023-almarzooq|Almarzooq, 2023, p. 72]])

- Measured velocity data showed a sinusoidal behavior with maximum velocity parallel to the slip face. ([[2024-makki|Makki, 2024, p. 13]])

- Average P-wave velocity (Vp) was 264.25 m/s with an average GPR velocity of 0.1468 m/ns. ([[2024-alkhunaizi|Alkhunaizi, 2024, p. 57]])

- Analysis showed that limiting offsets to the formation depth improved the reliability of the velocity pick by avoiding phase-shifted signals beyond the critical angle. ([[2024-felemban|Felemban, 2024, p. 11]])

- SASSY21 and SASSIER22 models were compared to show differences in sensitivity to shallow structures. ([[2025-kesumastuti|Kesumastuti, 2025, p. 44]])

- Estimated velocities from vibrator measurements showed good statistical correlation with uphole velocities down to 50m. ([[2002-al-ali|Al-Ali, 2002, p. 19]])

## Methodological Variations Across Sources


## Technical Limitations and Open Questions


## Related Concepts

**Related Techniques**: 

**Applicable to Terminology**: 

**Used in Themes**: 
