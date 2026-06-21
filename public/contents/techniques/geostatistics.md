---
type: technique
title: "Geostatistics"
aliases:
  - "kriging"
  - "stochastic modeling"
canonical: true
equipment: "Not stated in source"
software: "Not stated in source"
output: "stochastically realized property maps"
tags:
  - technique/geostatistics
  - theme/reservoir-characterization
sources:
  - "raw/10010 - An integrated geological modeling of the Arab-D reservoir, Uthmaniyah area Ghawa.pdf"
  - "raw/10032 - Geostatistical evaluation of the Hazam al-Jalamid phosphorite deposit, Northwest.pdf"
  - "raw/10075 - Data integration in 3-D geostatistical porosity modeling of Hanifa Reservoir in .pdf"
  - "raw/10140 - Geostatistical modelling of Zarghat magnesite deposit Saudi Arabia.pdf"
  - "raw/10269 - Geostatistical modeling of Safaniya reservoir in Safaniya field.pdf"
  - "raw/10312 - Geostatistical modeling of Arab-D reservoir, Harmaliyah field, Saudi Arabia..pdf"
  - "raw/138706 - Characterization of Fractured Basement Reservoir, Melut basin, Southeast Sudan.pdf"
  - "raw/138942 - Identification of Discontinuous Oil Bearing Sandstone Bodies by Direct Modeling .pdf"
  - "raw/138943 - HIGH RESOLUTION CHARACTERIZATION AND MODELLING OF AN ARAB-D OUTCROP ANALOG, CENT.pdf"
  - "raw/139083 - STOCHASTIC METHODS FOR SURFACTANT-POLYMER FLOODING AND WELL PLACEMENT OPTIMIZATI.pdf"
  - "raw/139706 - HIGH-RESOLUTION 3D GEOCELLULAR FACIES AND PROPERTY MODELING OF BENTIU-1 RESERVOI.pdf"
  - "raw/139735 - HIGH RESOLUTION SEDIMENTOLOGOY AND RESERVOIR PROPERTIES OF ULAYYAH RESERVOIR EQU.pdf"
  - "raw/139876 - Porosity and Permeability Characterization within the Lithofacies Framework of A.pdf"
  - "raw/140123 - 3D GEOSTATISTICAL MODELING OF FACIES AND PETROPHYSICAL PROPERTIES OF THE UPPER K.pdf"
  - "raw/140193 - Fractures System Within Quasiba Shale Outcrop and its Relationship to the Geomec.pdf"
  - "raw/140483 - SEDIMENTOLOGY AND RESERVOIR CHARACTERISTICS OF MIDDLE JURASSIC DHRUMA FORMATION,.pdf"
  - "raw/142041 - Geostatistical Modelling Of Groundwater Storage Variations Using Insar Remote Se.pdf"
  - "raw/142190 - Sedimentology, Stratigraphy, and Reservoir Characterization of the Upper Jurassi.pdf"
  - "raw/142313 - Data Analytics and End-to-End Machine Learning for 1D to 3D Reservoir Prediction.pdf"
  - "raw/142924 - INTEGRATIVE CHARACTERIZATION AND MODELING OF THE PERMO-TRIASSIC CARBONATES, SOUT.pdf"
  - "raw/143043 - MODELING GEOCHEMICAL AND GEOMECHANICAL EFFECTS OF CO2 REACTIVE TRANSPORT IN DEEP.pdf"
  - "raw/9569 - Geostatistical estimation of reserves in the Abu-Tartur phosphate deposits weste.pdf"
  - "raw/9656 - Use of vibrator performance data to improve near-surface velocity determination.pdf"
  - "raw/9913 - Geological, mineralogical and geostatistical studies on Zarghat magnesite deposi.pdf"
  - "raw/9977 - Hydrogeochemistry of Alat and Khobar aquifers in Eastern Saudi Arabia.pdf"
status: active
last_updated: 2026-06-20
---

# Geostatistics

**Summary**: A suite of statistical methods used to interpolate and model spatial uncertainty in geological properties.

---

## How It Is Used in the Thesis Collection

- [[2002-ibrahim|Ibrahim, 2002]] applied geostatistics to model porosity and permeability distributions.

- [[1996-jarad|Jarad, 1996]] used geostatistics to evaluate the Hazm Al-Jalamid phosphorite deposit.

- [[2001-al-khalifa|Al-Khalifa, 2001]] used geostatistics to integrate multi-scale data for 3-D porosity modeling.

- [[1991-makkawi|Makkawi, 1991]] used geostatistics to model the distribution of CaO% and MgO% in the Zarghat magnesite deposit.

- [[1997-al-qassab|Al-Qassab, 1997]] applied geostatistics to model the spatial continuity of physical properties in the Safaniya reservoir.

- [[1996-al-salem|Al-Salem, 1996]] applied geostatistics to determine the spatial distribution of porosity in the Arab-D reservoir.

- [[2012-abdelgader|Abdelgader, 2012]] used geostatistics, specifically Sequential Gaussian Simulation (SGS), to interpolate fracture intensity into the 3D grid.

- [[2013-atig|atig, 2013]] applied geostatistics to model the distribution of sand bodies in the Safaniya member.

- [[2013-abdalla|Abdalla, 2013]] applied geostatistics including variogram-analysis to determine lithofacies continuity.

- [[2013-ahmed|AHMED, 2013]] used stochastic algorithms (CMAES, DE, IWO) for well placement and process optimization.

- [[2015-jabir|Jabir, 2015]] applied geostatistics including SIS and SGS to model lithofacies and petrophysical properties.

- [[2015-elzain|Elzain, 2015]] applied geostatistics (SIS and SGS) to build a 3D geocellular outcrop model.

- [[2016-hassan-2|Hassan, 2016]] applied geostatistical modeling to lithofacies, porosity, and permeability.

- [[2016-makkawi|Makkawi, 2016]] applied geostatistics to construct 3D models for lithofacies and petrophysical properties.

- [[2017-mahgoub|Mahgoub, 2017]] used geostatistical modeling to map lithofacies and petrophysical property distributions in the Qusaiba shale member.

- [[2017-yousif|Yousif, 2017]] applied geostatistical modeling using Sequential Indicator Simulation (SIS) in Petrel to create 3D lithofacies and petrophysical models.

- [[2022-karami|Karami, 2022]] applied geostatistics to fill gaps caused by noise or clouds in InSAR data.

- [[2022-bashri|Bashri, 2022]] applied geostatistics including variogram analysis and sequential Gaussian simulation to create 3D models.

- [[2023-kusuma|Kusuma, 2023]] used geostatistics (specifically SGS) as a ground truth for 3D modeling and to refine ML-derived trends.

- [[2024-hassan|Hassan, 2024]] applied geostatistics to investigate spatial variability in geochemical composition.

- [[2024-badhafere|BADHAFERE, 2024]] applied kriging to distribute porosity across the 10,946 grid cells.

- [[1987-abdul-latif|Abdul-Latif, 1987]] used geostatistics to estimate the tonnage and grade of phosphate minerals in the Abu Tartur deposit.

- [[2002-al-ali|Al-Ali, 2002]] used geostatistics including kriging and cokriging to integrate sparse uphole data with dense vibrator performance data.

- [[1985-ghaled|Ghaled, 1985]] applied geostatistical computations to determine the spatial distribution of MgO and CaO.

- [[1992-hassan|Hassan, 1992]] applied geostatistics (Kriging) via SURFER to map the distribution of TDS, SI, and SAR.

## Instruments and Software



- [[1996-jarad|Jarad, 1996]] used geostatistics to evaluate the Hazm Al-Jalamid phosphorite deposit.

- [[2001-al-khalifa|Al-Khalifa, 2001]] used geostatistics to integrate multi-scale data for 3-D porosity modeling.

- [[1991-makkawi|Makkawi, 1991]] used geostatistics to model the distribution of CaO% and MgO% in the Zarghat magnesite deposit.

- [[1997-al-qassab|Al-Qassab, 1997]] applied geostatistics to model the spatial continuity of physical properties in the Safaniya reservoir.

- [[1996-al-salem|Al-Salem, 1996]] applied geostatistics to determine the spatial distribution of porosity in the Arab-D reservoir.

- [[2012-abdelgader|Abdelgader, 2012]] used geostatistics, specifically Sequential Gaussian Simulation (SGS), to interpolate fracture intensity into the 3D grid.

- [[2013-atig|atig, 2013]] applied geostatistics to model the distribution of sand bodies in the Safaniya member.

- [[2013-abdalla|Abdalla, 2013]] applied geostatistics including variogram-analysis to determine lithofacies continuity.

- [[2013-ahmed|AHMED, 2013]] used stochastic algorithms (CMAES, DE, IWO) for well placement and process optimization.

- [[2015-jabir|Jabir, 2015]] applied geostatistics including SIS and SGS to model lithofacies and petrophysical properties.

- [[2015-elzain|Elzain, 2015]] applied geostatistics (SIS and SGS) to build a 3D geocellular outcrop model.

- [[2016-hassan-2|Hassan, 2016]] applied geostatistical modeling to lithofacies, porosity, and permeability.

- [[2016-makkawi|Makkawi, 2016]] applied geostatistics to construct 3D models for lithofacies and petrophysical properties.

- [[2017-mahgoub|Mahgoub, 2017]] used geostatistical modeling to map lithofacies and petrophysical property distributions in the Qusaiba shale member.

- [[2017-yousif|Yousif, 2017]] applied geostatistical modeling using Sequential Indicator Simulation (SIS) in Petrel to create 3D lithofacies and petrophysical models.

- [[2022-karami|Karami, 2022]] applied geostatistics to fill gaps caused by noise or clouds in InSAR data.

- [[2022-bashri|Bashri, 2022]] applied geostatistics including variogram analysis and sequential Gaussian simulation to create 3D models.

- [[2023-kusuma|Kusuma, 2023]] used geostatistics (specifically SGS) as a ground truth for 3D modeling and to refine ML-derived trends.

- [[2024-hassan|Hassan, 2024]] applied geostatistics to investigate spatial variability in geochemical composition.

- [[2024-badhafere|BADHAFERE, 2024]] applied kriging to distribute porosity across the 10,946 grid cells.

- [[1987-abdul-latif|Abdul-Latif, 1987]] used geostatistics to estimate the tonnage and grade of phosphate minerals in the Abu Tartur deposit.

- [[2002-al-ali|Al-Ali, 2002]] used geostatistics including kriging and cokriging to integrate sparse uphole data with dense vibrator performance data.

- [[1985-ghaled|Ghaled, 1985]] applied geostatistical computations to determine the spatial distribution of MgO and CaO.

- [[1992-hassan|Hassan, 1992]] applied geostatistics (Kriging) via SURFER to map the distribution of TDS, SI, and SAR.

## Typical Workflow



## Key Results and Findings

- Geostatistical stochastic modeling was used to better honor heterogeneity, reservoir architecture, and complex information compared to traditional deterministic techniques. ([[2002-ibrahim|Ibrahim, 2002, p. 20]])

- Geostatistical techniques were used to provide more reliable estimates for the reserves in the Hazm Al-Jalamid area compared to traditional methods. ([[1996-jarad|Jarad, 1996, p. 29]])

- Geostatistics provided the necessary tools to incorporate seismic and facies constraints into the porosity model. ([[2001-al-khalifa|Al-Khalifa, 2001, p. 19]])

- The kriged estimates and corresponding relative kriging standard deviations were determined for blocks of 25m x 25m x 1m dimensions. ([[1991-makkawi|Makkawi, 1991, p. 19]])

- Geostatistics provided a framework for modeling both continuous (porosity) and discrete (lithofacies) variables. ([[1997-al-qassab|Al-Qassab, 1997, p. 20]])

- Geostatistical techniques were used to estimate and simulate porosity values within the Jurassic Arab-D reservoir rocks. ([[1996-al-salem|Al-Salem, 1996, p. 58]])

- SGS was used because it could honor input data, distributions, and variograms while providing a realistic stochastic distribution. ([[2012-abdelgader|Abdelgader, 2012, p. 116]])

- Indicator Kriging was identified as the most robust geostatistical method for this specific study. ([[2013-atig|atig, 2013, p. 12]])

- Showed good continuity in the N-S direction and less in the E-W direction. ([[2013-abdalla|Abdalla, 2013, p. 116]])

- Stochastic algorithms are suitable for multi-dimensional problems where variables are hard to correlate. ([[2013-ahmed|AHMED, 2013, p. 31]])

- The geostatistical approach was capable of yielding realistic images of the reservoir by considering stratigraphic envelopes and structural framework. ([[2015-jabir|Jabir, 2015, p. 22]])

- Used Sequential Indicator Simulation (SIS) for facies modeling and Sequential Gaussian Simulation (SGS) for property modeling with 20 realizations. ([[2015-elzain|Elzain, 2015, p. 58]])

- Several realizations were generated for lithofacies, porosity, and permeability models; these showed small scale heterogeneity even within the same lithofacies. ([[2016-hassan-2|Hassan, 2016, p. 14]])

- Used SIS and SGS algorithms to populate the 3D grid with facies and porosity data. ([[2016-makkawi|Makkawi, 2016, p. 45]])

- The 3D geostatistical model showed three zones representing three depositional cycles, with Zone-3 showing distinct lithology transitions from fine to coarse sandstone. ([[2017-mahgoub|Mahgoub, 2017, p. 85]])

- The 3D lithofacies model was successfully validated against field data, showing a good match between the model and outcrop stratigraphy. ([[2017-yousif|Yousif, 2017, p. 166]])

- Ordinary Kriging and Sequential Gaussian Simulation (SGS) were used to generate realistic realizations of the unmeasured phenomena. ([[2022-karami|Karami, 2022, p. 48]])

- The lithofacies model matches the regional trend, and porosity values are proportional to lithofacies. ([[2022-bashri|Bashri, 2022, p. 21]])

- Geostatistics excelled in respecting well data and facies/porosity statistics compared to pure ML. ([[2023-kusuma|Kusuma, 2023, p. 17]])

- Directional variograms showed high continuity (long major ranges) for Ca and S with minimal variation. ([[2024-hassan|Hassan, 2024, p. 15]])

- Kriging was used to construct a realistic distribution of porosity (0.05-0.38) based on geological interpretation. ([[2024-badhafere|BADHAFERE, 2024, p. 77]])

- Geostatistical methods were shown to provide more reliable estimates with quantifiable confidence intervals compared to classical methods. ([[1987-abdul-latif|Abdul-Latif, 1987, p. 18]])

- Cokriging (CCK) provided a more detailed velocity map than standard kriging by incorporating secondary attributes like ground stiffness and viscosity. ([[2002-al-ali|Al-Ali, 2002, p. 102]])

- Semivariograms revealed continuous behavior near the origin, indicating typical sedimentary deposit characteristics. ([[1985-ghaled|Ghaled, 1985, p. 23]])

- Contour maps were generated for various ions and parameters across the study area. ([[1992-hassan|Hassan, 1992, p. 29]])

## Methodological Variations Across Sources


## Technical Limitations and Open Questions


## Related Concepts

**Related Techniques**: 

**Applicable to Terminology**: 

**Used in Themes**: 
