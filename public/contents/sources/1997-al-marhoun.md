---
type: source
id: "10158"
title: "Application of multi-seismic attributes in estimating reservoir properties."
author: "Maher Ibraheem Al-Marhoun"
year: 1997
department: "Geosciences"
degree: "MS"
supervisor: "Gabor Korvin"
committee_members:
  - "Abdullatif A. Qahwash"
  - "Z. Y. Al-Harari"
source_file: "raw/10158 - Application of multi-seismic attributes in estimating reservoir properties..pdf"
url: "https://eprints.kfupm.edu.sa/id/eprint/10158/"
study_area: "A producing field with lateral variations in reservoir properties (not specifically named by name but located within the Khuff and Unayzah formations)."
keywords:
  - Seismic attributes
  - Reservoir properties
  - Porosity
  - Water saturation
  - Volume of silt
  - Multi-variant regression
  - Spectral analysis
  - Multi-seismic attributes
  - Quantitative interpretation
  - Qualitative interpretation
  - Porosity estimation
  - Silt volume
techniques:
  - seismic-imaging
  - multi-attribute-analysis
  - well-log-analysis
  - kriging
  - multivariate-regression
  - spectral-analysis
  - petrophysics
tags:
  - degree/ms
  - formation/khuff-formation
  - formation/unayzah-formation
  - technique/seismic-imaging
  - technique/well-log-analysis
  - technique/kriging
  - technique/multivariate-regression
  - technique/spectral-analysis
  - technique/petrophysics
  - technique/multi-attribute-analysis
  - theme/petrophysics
  - theme/geophysics-general
  - terminology/porosity
  - terminology/water-saturation
  - terminology/volume-of-silt
  - terminology/tuning
status: ingested
---

# Application of multi-seismic attributes in estimating reservoir properties.

**Summary**: The thesis investigates the use of multiple seismic attributes (e.g., peak amplitude, instantaneous frequency, reflection strength) to estimate reservoir properties including porosity, water saturation, and volume of silt. The study concludes that a multi-attribute approach using multivariate regression provides higher accuracy and better correlation with well data compared to single-attribute methods or simple kriging.

---

## Research Problem

The challenge of accurately estimating reservoir properties (porosity, water saturation, and volume of silt) from seismic data in areas where well control is limited. The study specifically addresses the difficulty of establishing a direct relationship between individual seismic attributes and physical properties due to varying geological conditions.

## Objectives

- Estimate porosity, water saturation, and volume of silt using several seismic attributes.
- Compare multi-attribute methods against single-attribute methods and simple kriging.
- Incorporate spectral attributes for qualitative interpretation of the data.
- Develop a multivariate regression model to relate seismic attributes to well-derived reservoir properties.
- Compare multi-attribute analysis with single-attribute methods for reservoir property prediction.
- Evaluate the impact of tuning phenomena on seismic attribute interpretation.

## Methods

The study utilized 3D seismic data (277,536 traces) and well logs from 21 wells. Nine seismic attributes were calculated: RMS amplitude, average absolute amplitude, maximum peak amplitude, average peak amplitude, average reflection strength, average instantaneous phase, average instantaneous frequency, energy half-time, and positive to negative ratio. These were scaled from 1 to 1000. A multivariate regression (first-degree polynomial) was used to relate these attributes to reservoir properties derived from well logs. To account for noise, a kriging method was applied to correct errors in the predicted values. Spectral attributes (dominant frequency, peak spectral frequency, and spectral slope) were analyzed qualitatively.

## Data and Materials

The study uses data from 21 wells (19 used for regression, 2 excluded as validation points). Data includes well logs for porosity, water saturation, and volume of silt. Seismic survey data is processed to derive nine primary attributes and five additional spectral attributes (Peak Spectral Frequency, Spectral Slope, F1, F2, F3) for qualitative interpretation.

## Key Findings

- Multi-attribute analysis showed that as the number of attributes increases, the sum of squared residuals decreases, indicating improved accuracy in predicting reservoir properties. ([[1997-al-marhoun|Al-Marhoun, 1997, p. 30]])
- The multi-attribute approach successfully identified a low porosity zone around well A and a higher porosity zone around well I, matching results from kriging using all available wells. ([[1997-al-marhoun|Al-Marhoun, 1997, p. 29]])
- A first-degree polynomial was used as a 'low pass filter' to avoid over-fitting the noise in the data while still providing a reliable estimation of reservoir properties. ([[1997-al-marhoun|Al-Marhoun, 1997, p. 32]])
- Spectral attributes (peak spectral frequency and spectral slope) were found useful for identifying areas of fracturing, gas saturation, and tuning effects. ([[1997-al-marhoun|Al-Marhoun, 1997, p. 26]])
- The study confirmed that the multi-attribute method outperformed single-attribute methods in predicting porosity, water saturation, and volume of silt. ([[1997-al-marhoun|Al-Marhoun, 1997, p. 16]])
- Reflection strength, RMS amplitude, and positive-to-negative ratios were found to have the highest weights/impact on reservoir property calculations in multivariate regression. ([[1997-al-marhoun|Al-Marhoun, 1997, p. 57]])
- The multi-attribute approach produced a correlation coefficient of 0.686 for porosity, compared to 0.4415 for the best single attribute (instantaneous frequency). ([[1997-al-marhoun|Al-Marhoun, 1997, p. 91]])
- The multi-attribute method reduced the error in predicting water saturation by a factor of 1.48 compared to single-attribute methods. ([[1997-al-marhoun|Al-Marhoun, 1997, p. 91]])
- A specific indicator map was created using the formula: (POR-0.1)+(0.6-WSAT)+(0.3-VSILT) to identify high-quality reservoir zones. ([[1997-al-marhoun|Al-Marhoun, 1997, p. 50]])
- The study identified a NNE-SSW trend of high porosity (>0.1), low water saturation (<0.7), and low volume of silt (<0.1). ([[1997-al-marhoun|Al-Marhoun, 1997, p. 60]])
- Tuning effects were confirmed to cause amplitude anomalies in beds with thicknesses between 18ms and 33ms. ([[1997-al-marhoun|Al-Marhoun, 1997, p. 86]])
- The inclusion of more attributes (up to nine) showed a clear trend where the sum of squared residuals decreased as the number of attributes increased, plateauing after a certain point. ([[1997-al-marhoun|Al-Marhoun, 1997, p. 90]])
- Seismic attributes can be used for both quantitative and qualitative interpretation of any zone of interest. ([[1997-al-marhoun|Al-Marhoun, 1997, p. 16]])
- As seismic data quality improves, the interpretation of seismic attributes becomes more reliable. ([[1997-al-marhoun|Al-Marhoun, 1997, p. 16]])

## Limitations

The study notes that while multivariate regression provides better results than single-attribute methods, it cannot perfectly match all well data points due to the nature of linear fitting (residuals). Additionally, seismic attributes can be affected by tuning phenomena and noise, which may mask true lithological changes.

## Recommendations and Future Work

The thesis suggests that integrating multiple types of data (geophysical, geological, and petrophysical) is essential for a complete reservoir description. It highlights the importance of using multi-attribute analysis over single-attribute methods to improve accuracy in predicting reservoir properties from seismic surveys.

## Related Concepts

- [[seismic-imaging]]
- [[multivariate-regression]]
- [[kriging]]
- [[spectral-analysis]]
- [[porosity]]
- [[water-saturation]]
- [[volume-of-silt]]
- [[khuff-formation]]
- [[unayzah-formation]]
- [[petrophysics]]
- [[tuning]]
- [[geophysics-general]]
