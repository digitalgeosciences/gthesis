---
type: technique
title: "Kriging"
aliases:
  - "simple kriging"
canonical: true
equipment: "Not stated in source"
software: "Not stated in source"
output: "estimated grade values in a block model"
tags:
  - technique/kriging
sources:
  - "raw/10032 - Geostatistical evaluation of the Hazam al-Jalamid phosphorite deposit, Northwest.pdf"
  - "raw/10075 - Data integration in 3-D geostatistical porosity modeling of Hanifa Reservoir in .pdf"
  - "raw/10140 - Geostatistical modelling of Zarghat magnesite deposit Saudi Arabia.pdf"
  - "raw/10158 - Application of multi-seismic attributes in estimating reservoir properties..pdf"
  - "raw/10269 - Geostatistical modeling of Safaniya reservoir in Safaniya field.pdf"
  - "raw/10312 - Geostatistical modeling of Arab-D reservoir, Harmaliyah field, Saudi Arabia..pdf"
  - "raw/138942 - Identification of Discontinuous Oil Bearing Sandstone Bodies by Direct Modeling .pdf"
  - "raw/139694 - A Global Optimization Approach to the Gradual Deformation Method of History Matc.pdf"
  - "raw/139706 - HIGH-RESOLUTION 3D GEOCELLULAR FACIES AND PROPERTY MODELING OF BENTIU-1 RESERVOI.pdf"
  - "raw/142041 - Geostatistical Modelling Of Groundwater Storage Variations Using Insar Remote Se.pdf"
  - "raw/9569 - Geostatistical estimation of reserves in the Abu-Tartur phosphate deposits weste.pdf"
  - "raw/9656 - Use of vibrator performance data to improve near-surface velocity determination.pdf"
status: active
last_updated: 2026-06-20
---

# Kriging

**Summary**: A geostatistical interpolation method that provides a best linear unbiased estimate of values at unsampled locations.

---

## How It Is Used in the Thesis Collection

- [[1996-jarad|Jarad, 1996]] applied simple kriging to estimate the P20% in blocks with 1000 m x 500 m x 0.5 m dimensions.

- [[2001-al-khalifa|Al-Khalifa, 2001]] applied co-kriging and collocated co-kriging to integrate seismic impedance into the porosity models.

- [[1991-makkawi|Makkawi, 1991]] applied kriging to estimate block and point values within the deposit.

- [[1997-al-marhoun|Al-Marhoun, 1997]] used kriging to correct errors in the predicted porosity and map the distribution of properties.

- [[1997-al-qassab|Al-Qassab, 1997]] used kriging to generate a deterministic porosity map of the SFNC sequence.

- [[1996-al-salem|Al-Salem, 1996]] applied kriging to estimate well-log porosity values in the Arab-D reservoir.

- [[2013-atig|atig, 2013]] used indicator-kriging to determine the optimal parameters for predicting sand body geometry in the Safaniya member.

- [[2015-adeniji|Adeniji, 2015]] used kriging to populate porosity and permeability from 85 well locations into a 2D domain.

- [[2015-jabir|Jabir, 2015]] used ordinary kriging to estimate petrophysical properties in the 3D grid.

- [[2022-karami|Karami, 2022]] used kriging to interpolate the sampled InSAR data at 500m spacing.

- [[1987-abdul-latif|Abdul-Latif, 1987]] applied block kriging to obtain estimates for blocks of 400m x 400m x 1m dimensions.

- [[2002-al-ali|Al-Ali, 2002]] used kriging to interpolate uphole data and create initial velocity maps.

## Instruments and Software



- [[2001-al-khalifa|Al-Khalifa, 2001]] applied co-kriging and collocated co-kriging to integrate seismic impedance into the porosity models.

- [[1991-makkawi|Makkawi, 1991]] applied kriging to estimate block and point values within the deposit.

- [[1997-al-marhoun|Al-Marhoun, 1997]] used kriging to correct errors in the predicted porosity and map the distribution of properties.

- [[1997-al-qassab|Al-Qassab, 1997]] used kriging to generate a deterministic porosity map of the SFNC sequence.

- [[1996-al-salem|Al-Salem, 1996]] applied kriging to estimate well-log porosity values in the Arab-D reservoir.

- [[2013-atig|atig, 2013]] used indicator-kriging to determine the optimal parameters for predicting sand body geometry in the Safaniya member.

- [[2015-adeniji|Adeniji, 2015]] used kriging to populate porosity and permeability from 85 well locations into a 2D domain.

- [[2015-jabir|Jabir, 2015]] used ordinary kriging to estimate petrophysical properties in the 3D grid.

- [[2022-karami|Karami, 2022]] used kriging to interpolate the sampled InSAR data at 500m spacing.

- [[1987-abdul-latif|Abdul-Latif, 1987]] applied block kriging to obtain estimates for blocks of 400m x 400m x 1m dimensions.

- [[2002-al-ali|Al-Ali, 2002]] used kriging to interpolate uphole data and create initial velocity maps.

## Typical Workflow



## Key Results and Findings

- Kriging was used to estimate P20% values for both Horizon 1 and Horizon 3. ([[1996-jarad|Jarad, 1996, p. 20]])

- Collocated co-kriging was utilized to incorporate both facies and seismic data as constraints for the final porosity model. ([[2001-al-khalifa|Al-Khalifa, 2001, p. 23]])

- The kriged estimates and corresponding relative kriging standard deviations were determined for blocks of 25m x 25m x 1m dimensions. ([[1991-makkawi|Makkawi, 1991, p. 19]])

- Kriging was used specifically to calculate error maps for correction after the initial regression step. ([[1997-al-marhoun|Al-Marhoun, 1997, p. 32]])

- Kriged porosity volumes were found to be smoothed, necessitating the use of Sequential Gaussian Simulation (SGS) to capture more realistic variability. ([[1997-al-qassab|Al-Qassab, 1997, p. 16]])

- Kriging resulted in a smoother distribution of porosity values compared to simulation. ([[1996-al-salem|Al-Salem, 1996, p. 19]])

- Indicator Kriging was determined to be the optimum way to predict rock bodies compared to other methods. ([[2013-atig|atig, 2013, p. 12]])

- Kriging was used to predict the value of a parameter at a location by computing a weighted average of the known values based on the variogram. ([[2015-adeniji|Adeniji, 2015, p. 44]])

- Kriging results for porosity and permeability showed expected lateral and vertical continuity, though they were biased toward mean values in areas with low well control. ([[2015-jabir|Jabir, 2015, p. 148]])

- The ordinary kriging model produced a smoothed distribution of ∆d compared to the original data. ([[2022-karami|Karami, 2022, p. 49]])

- Kriging standard deviations were relatively small, indicating high reliability of the estimates. ([[1987-abdul-latif|Abdul-Latif, 1987, p. 18]])

- Kriging was used to produce a 19-sample base map for comparison against integrated models. ([[2002-al-ali|Al-Ali, 2002, p. 74]])

## Methodological Variations Across Sources


## Technical Limitations and Open Questions


## Related Concepts

**Related Techniques**: 

**Applicable to Terminology**: 

**Used in Themes**: 
