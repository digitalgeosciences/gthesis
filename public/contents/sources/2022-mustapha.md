---
type: source
id: "142010"
title: "MODELLING THE EFFECTS OF CLIMATE CHANGE ON AIR QUALITY IN THE DAMMAM METROPOLITAN AREA, SAUDI ARABIA , USING AERMOD COUPLED WITH ST ATION AND MESOSCALE WEATHER DATA"
author: "Babatunde Mustapha"
year: 2022
department: "Geosciences"
degree: "MS"
supervisor: "Tawabini Bassam"
committee_members:
  - "John Nielsen Ole"
  - "Alshuhail Abdullah"
source_file: "raw/142010 - MODELLING THE EFFECTS OF CLIMATE CHANGE ON AIR QUALITY IN THE DAMMAM METROPOLITA.pdf"
url: "https://eprints.kfupm.edu.sa/id/eprint/142010/"
study_area: "Dammam metropolitan area, Eastern Province, Saudi Arabia"
keywords:
  - Air Quality
  - Sulfur Dioxide
  - Dispersion models
  - Global Warming
  - KSA
  - Air quality modeling
  - AERMOD
  - Climate change
  - Sulphur dioxide (SO2)
  - WRF model
  - Meteorology
  - Saudi Arabia
  - meteorological data
  - wind speed
  - temperature
  - Air dispersion (AD) models
  - climate conditions
  - air temperature
  - Sulphur dioxide
  - PM10
  - NOx
techniques:
  - aermod
  - wrf
  - aermap
  - aermet
  - wps
  - gis
  - python-api
tags:
  - degree/ms
  - location/dammam-area
  - location/saudi-arabia
  - technique/aerod
  - technique/modeling
  - technique/aeromod
  - technique/wrf
  - technique/gis
  - theme/environmental-geoscience
  - theme/environmental-pollution
  - terminology/air-quality
  - terminology/sulfur-dioxide
  - terminology/climate-change
  - terminology/so2-concentration
status: ingested
---

# MODELLING THE EFFECTS OF CLIMATE CHANGE ON AIR QUALITY IN THE DAMMAM METROPOLITAN AREA, SAUDI ARABIA , USING AERMOD COUPLED WITH ST ATION AND MESOSCALE WEATHER DATA

**Summary**: The thesis investigates the impact of climate change, specifically rising temperatures and changing wind speeds, on the dispersion of sulfur dioxide (SO2) in the Dammam Metropolitan area. Using AERMOD coupled with WRF-generated mesoscale weather data, it models SO2 concentrations under various future scenarios to assist policymakers in addressing air quality challenges.

---

## Research Problem

The study addresses the lack of research exploring how global warming—specifically projected increases in temperature and wind speed—affects the distribution and concentration of air pollutants like Sulphur dioxide (SO2) in Saudi Arabia, particularly in industrial zones like Dammam.

## Objectives

- Investigate the effects of climate change on air quality in the Dammam Metropolitan area.
- Predict SO2 dispersion trends using AERMOD coupled with station and mesoscale weather data.
- Evaluate the impact of different temperature scenarios (+1°C, +3°C, +5°C) and wind speed variations (+0.6 m/s, +1.2 m/s, +1.8 m/s) on SO2 concentrations.
- Obtain meteorological data of decade (2010-2019) and vary its temperature parameter to reflect forecasted climate change of Saudi Arabia by mid-century (2040-2060).
- Using meteorology data from (I), model the SO2 concentrations for decade 2010-2019 as well as future period (2040-2060) using the air quality dispersion tool (AERMOD).
- Evaluate the difference in modelled dispersion results of decade (2010-2019) and future period, mid-century (2040-2060), if any.
- Analyze meteorological data for Dammam over a decade (2009-2019).
- Model SO2 concentration under current and future climate scenarios (temperature increases of 1°C, 3°C, and 5°C).
- Evaluate the impact of varying wind speeds on SO2 dispersion.
- Compare model results against regulatory standards for environmental safety.
- Model the effects of climate change on air quality in the Dammam metropolitan area.
- Evaluate how changes in temperature and wind speed affect the dispersion of pollutants like Sulphur dioxide (SO2).
- Utilize AERMOD coupled with station and mesoscale weather data to project future air quality scenarios.

## Methods

The study employs a multi-stage modeling workflow. Meteorological data (surface and upper air sounding) were collected from King Fahd International Airport (KFIA) for the years 2009-2019. These were processed through AERMET to generate model-ready files. Terrain data was obtained as an ASTER GDEM (30m resolution) and processed via AERMAP to assign elevations to sources and receptors. The WRF (Weather Research and Forecasting) model was used to simulate meteorological trends and provide high-resolution mesoscale data. Finally, the AERMOD dispersion model was implemented using Trinity Breeze software to calculate SO2 concentrations from five point sources in Dammam's 2nd industrial city across 28 sensitive receptors.

## Data and Materials

Meteorological data (surface and upper air) for years 2009-2019 from KFIA station; ASTER GDEM terrain data at 30m resolution; WRF numerical simulations using three nested domains (15km, 5km, 1km); emission inventory for 5 point sources (stack heights 85-110m, temperatures 405-650K, rates 7.0-15.5 g/s) and 28 sensitive receptors in the Dammam area.

## Key Findings

- SO2 concentrations at all receiving sites under both current and simulated future conditions remained within the allowable limits of WHO and KSA air quality standards. ([[2022-mustapha|Mustapha, 2022, p. 15]])
- Projected temperature increases had only a mild effect on SO2 concentration levels (0.04% for +1°C, 0.14% for +3°C, and 0.23% for +5°C). ([[2022-mustapha|Mustapha, 2022, p. 15]])
- Changes in wind speed had a significantly larger impact on air pollutant concentration compared to temperature changes. ([[2022-mustapha|Mustapha, 2022, p. 15]])
- SO2 levels decreased by 10.9%, 15.16%, and 18.13% when wind speeds increased by 0.6 m/s, 1.2 m/s, and 1.8 m/s respectively. ([[2022-mustapha|Mustapha, 2022, p. 15]])
- The study identified the specific impact of different averaging periods (1hr, 4hr, 8hr) on dispersion results. ([[2022-mustapha|Mustapha, 2022, p. 14]])
- AERMOD was identified as a robust tool for predicting air pollutant concentrations across various meteorological conditions and is an approved tool for ambient air quality assessment worldwide. ([[2022-mustapha|Mustapha, 2022, p. 19]])
- WRF is currently the gold standard for numerical weather prediction, capable of producing high-resolution three-dimensional gridded meteorology. ([[2022-mustapha|Mustapha, 2022, p. 21]])
- Saudi Arabia is the fourth largest emitter of Sulphur Dioxide (SO2) globally and the largest in the Middle East due to its fossil fuel dependent economy. ([[2022-mustapha|Mustapha, 2022, p. 25]])
- Studies confirmed that Saudi Arabia experienced a significant rise in temperature between 1984-2013, with minimum temperatures rising faster than maximum temperatures. ([[2022-mustapha|Mustapha, 2022, p. 24]])
- The study identified five point sources in Dammam's 2nd industrial city with stack heights ranging from 85m to 110m and emission rates between 7.0035 and 15.537 g/s. ([[2022-mustapha|Mustapha, 2022, p. 23]])
- The study identified 28 sensitive receptors, including hospitals, medical facilities, schools, and residential areas, where SO2 poses a significant threat to human lives. ([[2022-mustapha|Mustapha, 2022, p. 24]])
- Dammam's average annual temperature rose by 1°C over the decade (2009-2019), consistent with a predicted mean decade rise of 1.2°C in Saudi Arabia. ([[2022-mustapha|Mustapha, 2022, p. 43]])
- The dominant wind class in Dammam was the 3.6-5.7 m/s range, and average annual wind speed dropped by approximately 0.6 m/s over the last decade. ([[2022-mustapha|Mustapha, 2022, p. 45]])
- Increasing temperature by 1°C resulted in an average of only 0.033% increase in SO2 concentration for the 1-hour period, showing that temperature rise has a minimal impact on pollutant concentration. ([[2022-mustapha|Mustapha, 2022, p. 48]])
- For the 1-hour time scale, increasing wind speed by 0.6 m/s, 1.2 m/s, and 1.8 m/s resulted in approximately 4.3%, 10.99%, and 17.52% reduction in SO2 concentration across most receptors. ([[2022-mustapha|Mustapha, 2022, p. 60]])

## Limitations

The study currently only uses Sulphur dioxide (SO2) as the primary pollutant; future work is needed to include other pollutants like PM10 and NOx. Additionally, more meteorological parameters, such as precipitation, are recommended for future investigation.

## Recommendations and Future Work

Future research should investigate the effects of other climatic parameters like precipitation on air quality dispersion models. Future studies should also assess the impact of other air pollutants such as PM10 and NOx using AERMOD.

## Related Concepts

- [[aerod]]
- [[modeling]]
- [[air-quality]]
- [[sulfur-dioxide]]
- [[dammam-area]]
- [[environmental-geoscience]]
- [[aeromod]]
- [[wrf]]
- [[gis]]
- [[climate-change]]
- [[environmental-pollution]]
- [[so2-concentration]]
