---
type: technique
title: "Kriging"
aliases:
  - "Ordinary Kriging"
  - "BLUE"
canonical: true
equipment: "Not stated in source"
software: "Not stated in source"
output: "gridded maps of sparse data"
tags:
  - technique/kriging
  - theme/geostatistics
sources:
  - "raw/10010 - An integrated geological modeling of the Arab-D reservoir, Uthmaniyah area Ghawa.pdf"
  - "raw/10032 - Geostatistical evaluation of the Hazam al-Jalamid phosphorite deposit, Northwest.pdf"
  - "raw/10075 - Data integration in 3-D geostatistical porosity modeling of Hanifa Reservoir in .pdf"
  - "raw/10140 - Geostatistical modelling of Zarghat magnesite deposit Saudi Arabia.pdf"
  - "raw/10158 - Application of multi-seismic attributes in estimating reservoir properties..pdf"
  - "raw/10269 - Geostatistical modeling of Safaniya reservoir in Safaniya field.pdf"
  - "raw/10312 - Geostatistical modeling of Arab-D reservoir, Harmaliyah field, Saudi Arabia..pdf"
  - "raw/138942 - Identification of Discontinuous Oil Bearing Sandstone Bodies by Direct Modeling .pdf"
  - "raw/139394 - Spatial Distribution of the Levels of Trace Metals in the Topsoil of Dammam Area.pdf"
  - "raw/139706 - HIGH-RESOLUTION 3D GEOCELLULAR FACIES AND PROPERTY MODELING OF BENTIU-1 RESERVOI.pdf"
  - "raw/140123 - 3D GEOSTATISTICAL MODELING OF FACIES AND PETROPHYSICAL PROPERTIES OF THE UPPER K.pdf"
  - "raw/142041 - Geostatistical Modelling Of Groundwater Storage Variations Using Insar Remote Se.pdf"
  - "raw/142313 - Data Analytics and End-to-End Machine Learning for 1D to 3D Reservoir Prediction.pdf"
  - "raw/142924 - INTEGRATIVE CHARACTERIZATION AND MODELING OF THE PERMO-TRIASSIC CARBONATES, SOUT.pdf"
  - "raw/9569 - Geostatistical estimation of reserves in the Abu-Tartur phosphate deposits weste.pdf"
  - "raw/9656 - Use of vibrator performance data to improve near-surface velocity determination.pdf"
  - "raw/9977 - Hydrogeochemistry of Alat and Khobar aquifers in Eastern Saudi Arabia.pdf"
status: active
last_updated: 2026-06-11
---

# Kriging

**Summary**: A geostatistical interpolation method that provides the best linear unbiased estimation of values at unsampled locations.

---

## How It Is Used in the Thesis Collection

- [[2002-ibrahim|Ibrahim, 2002]] used kriging to estimate property values by minimizing variance errors and accounting for data configuration.

- [[1996-jarad|Jarad, 1996]] applied kriging to estimate the P20% in blocks with 1000 m x 500 m x 0.5 m dimensions.

- [[2001-al-khalifa|Al-Khalifa, 2001]] applied kriging to determine optimal and unbiased estimates for reservoir properties.

- [[1991-makkawi|Makkawi, 1991]] applied block kriging to estimate mineral grades for 1714 blocks in the Central Hill area.

- [[1997-al-marhoun|Al-Marhoun, 1997]] used kriging as a baseline for comparing the accuracy of attribute-driven models.

- [[1997-al-qassab|Al-Qassab, 1997]] used kriging to generate porosity maps and volumes for the SFNC sequence.

- [[1996-al-salem|Al-Salem, 1996]] applied ordinary kriging to estimate well-log porosity values in 3D models.

- [[2013-atig|atig, 2013]] used indicator kriging to generate smooth models of facies distribution.

- [[2014-adedapo|Adedapo, 2014]] applied kriging to interpolate trace metal concentrations across the Dammam area.

- [[2015-jabir|Jabir, 2015]] applied ordinary kriging to estimate petrophysical properties across the 3D grid.

- [[2016-makkawi|Makkawi, 2016]] applied indicator kriging to model lithofacies deterministically within 3D grid cells.

- [[2022-karami|Karami, 2022]] used ordinary kriging to interpolate the sampled InSAR data at a 500m x 500m grid spacing.

- [[2023-kusuma|Kusuma, 2023]] used geostatistics (SGS) to validate ML-driven models and provide ground truth for 3D prediction.

- [[2024-hassan|Hassan, 2024]] applied kriging via variogram analysis to investigate spatial continuity of geochemistry.

- [[1987-abdul-latif|Abdul-Latif, 1987]] used kriging to provide block-by-block estimates for the Abu Tartur phosphate deposit.

- [[2002-al-ali|Al-Ali, 2002]] applied kriging to estimate unsampled points in space or time based on spatial correlation.

- [[1992-hassan|Hassan, 1992]] applied Kriging via SURFER software to contour TDS, SI, and SAR parameters.

## Instruments and Software



- [[1996-jarad|Jarad, 1996]] applied kriging to estimate the P20% in blocks with 1000 m x 500 m x 0.5 m dimensions.

- [[2001-al-khalifa|Al-Khalifa, 2001]] applied kriging to determine optimal and unbiased estimates for reservoir properties.

- [[1991-makkawi|Makkawi, 1991]] applied block kriging to estimate mineral grades for 1714 blocks in the Central Hill area.

- [[1997-al-marhoun|Al-Marhoun, 1997]] used kriging as a baseline for comparing the accuracy of attribute-driven models.

- [[1997-al-qassab|Al-Qassab, 1997]] used kriging to generate porosity maps and volumes for the SFNC sequence.

- [[1996-al-salem|Al-Salem, 1996]] applied ordinary kriging to estimate well-log porosity values in 3D models.

- [[2013-atig|atig, 2013]] used indicator kriging to generate smooth models of facies distribution.

- [[2014-adedapo|Adedapo, 2014]] applied kriging to interpolate trace metal concentrations across the Dammam area.

- [[2015-jabir|Jabir, 2015]] applied ordinary kriging to estimate petrophysical properties across the 3D grid.

- [[2016-makkawi|Makkawi, 2016]] applied indicator kriging to model lithofacies deterministically within 3D grid cells.

- [[2022-karami|Karami, 2022]] used ordinary kriging to interpolate the sampled InSAR data at a 500m x 500m grid spacing.

- [[2023-kusuma|Kusuma, 2023]] used geostatistics (SGS) to validate ML-driven models and provide ground truth for 3D prediction.

- [[2024-hassan|Hassan, 2024]] applied kriging via variogram analysis to investigate spatial continuity of geochemistry.

- [[1987-abdul-latif|Abdul-Latif, 1987]] used kriging to provide block-by-block estimates for the Abu Tartur phosphate deposit.

- [[2002-al-ali|Al-Ali, 2002]] applied kriging to estimate unsampled points in space or time based on spatial correlation.

- [[1992-hassan|Hassan, 1992]] applied Kriging via SURFER software to contour TDS, SI, and SAR parameters.

## Typical Workflow



## Key Results and Findings

- Kriging is preferred over inverse distance methods because it accounts for the clustering of data points rather than just their distance from the target point. ([[2002-ibrahim|Ibrahim, 2002, p. 70]])

- Horizon 1 contains approximately 1008 x 10^3 tonnes at an average P20% grade of 20%, while Horizon 3 contains approximately 553 x 10^3 tonnes at an average P20% grade of 18%. ([[1996-jarad|Jarad, 1996, p. 20]])

- Ordinary Kriging (OK) accounts for local variations in the mean by limiting the mean to a local neighborhood around the location being estimated. ([[2001-al-khalifa|Al-Khalifa, 2001, p. 50]])

- Kriging standard deviations were generally low (0.003 to 0.008), indicating high reliability of the estimates. ([[1991-makkawi|Makkawi, 1991, p. 104]])

- Kriging was used to generate porosity maps from well data alone for comparison. ([[1997-al-marhoun|Al-Marhoun, 1997, p. 11]])

- Kriged porosity volume was generated using the porosity variograms calculated from the forty-five wells. ([[1997-al-qassab|Al-Qassab, 1997, p. 16]])

- Kriging resulted in smoother distribution of porosity values compared to simulation. ([[1996-al-salem|Al-Salem, 1996, p. 19]])

- Ordinary-indicator kriging was preferred as it reduces the smoothing effect compared to simple indicator kriging. ([[2013-atig|atig, 2013, p. 30]])

- Not stated in source (methodology only). ([[2014-adedapo|Adedapo, 2014]])

- Ordinary kriging was used to populate the 3-D grid with property values after upscaling from well logs. ([[2015-jabir|Jabir, 2015, p. 26]])

- Lithofacies were modeled deterministically (Indicator Kriging algorithm). ([[2016-makkawi|Makkawi, 2016, p. 123]])

- The kriging model showed a smoother distribution compared to the original InSAR data, but shared similar overall characteristics. ([[2022-karami|Karami, 2022, p. 55]])

- Geostatistics excelled in respecting well data and facies or porosity statistics. ([[2023-kusuma|Kusuma, 2023, p. 17]])

- Directional variograms showed spatial continuity in geochemical composition with minimal variation. ([[2024-hassan|Hassan, 2024, p. 15]])

- Kriging standard deviations were relatively small, indicating high reliability of the estimates. ([[1987-abdul-latif|Abdul-Latif, 1987, p. 18]])

- Ordinary Kriging is used as a point estimator, while Co-Kriging allows for the integration of different related data sets. ([[2002-al-ali|Al-Ali, 2002, p. 54]])

- Kriging was used to create areal distribution maps for key water quality indicators like TDS and saturation indices. ([[1992-hassan|Hassan, 1992, p. 29]])

## Methodological Variations Across Sources


## Technical Limitations and Open Questions


## Related Concepts

**Related Techniques**: 

**Applicable to Terminology**: 

**Used in Themes**: 
