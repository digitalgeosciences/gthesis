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
study_area: "Dammam Metropolitan area, Eastern Province, Saudi Arabia"
keywords:
  - Air Quality
  - Sulfur Dioxide
  - Dispersion models
  - Global Warming
  - KSA
  - AERMOD
  - climate change
  - Sulphur dioxide
  - Saudi Arabia
  - dispersion modeling
techniques:
  - aermod
  - aermet
  - aermap
  - wrf
  - python
  - gis
  - modeling
tags:
  - degree/ms
  - location/dammam-area
  - location/saudi-arabia
  - technique/aeromod
  - technique/wrf
  - technique/gis
  - technique/mathematical-modeling
  - theme/environmental-geoscience
  - theme/environmental-pollution
  - terminology/environmental-monitoring
  - terminology/climate-change
status: ingested
---

# MODELLING THE EFFECTS OF CLIMATE CHANGE ON AIR QUALITY IN THE DAMMAM METROPOLITAN AREA, SAUDI ARABIA , USING AERMOD COUPLED WITH ST ATION AND MESOSCALE WEATHER DATA

**Summary**: The thesis investigates the impact of projected climate change (specifically temperature and wind speed variations) on air quality in the Dammam Metropolitan area, Saudi Arabia. Using the AERMOD dispersion model coupled with WRF mesoscale weather data, it evaluates SO2 concentrations from industrial sources under various future scenarios.

---

## Research Problem

The potential impact of global warming-induced changes in temperature and wind speed on the atmospheric dispersion patterns and concentration levels of sulfur dioxide (SO2) in the Dammam Metropolitan area, where no similar studies had been conducted to quantify these specific effects.

## Objectives

- Obtain meteorological data of decade (2010-2019) and vary its temperature parameter to reflect forecasted climate change of Saudi Arabia by mid-century (2040-2060)
- Using meteorology data from (I), model the SO2 concentrations for decade 2010-2019 as well as future period (2040-2060) using the air quality dispersion tool (AERMOD)
- Evaluate the difference in modelled dispersion results of decade (2010-2019) and future period, mid-century (2040-2060), if any.
- Model the impact of varying wind speeds on SO2 concentrations at different time scales (1hr, 4hr, 8hr).
- Evaluate the effect of projected future temperature increases on SO2 concentration.
- Compare model results against regulatory standards for air quality.

## Methods

The study utilizes the AERMOD air dispersion model to predict SO2 concentrations from five industrial stacks. Meteorological data was sourced from King Fahd International Airport (KFIA) for 2010-2019 and processed through AERMET (Stages I, II, and III). Terrain data was obtained as a 30m resolution ASTER GDEM and processed via AERMAP. WRF (Weather Research and Forecasting) model simulations were conducted using three nested domains to validate meteorological trends. The study evaluated three averaging periods (1hr, 4hr, 8hr) under scenarios of temperature increase (+1°C, +3°C, +5°C) and wind speed increases (+0.6 m/s, +1.2 m/s, +1.8 m/s).

## Data and Materials

Data includes 10 years (2010-2019) of hourly surface and upper air sounding data from KFIA; ASTER GDEM terrain data at 30m resolution; and emission inventory for 5 industrial stacks (heights 85-110m, temperatures 405-650K, rates 7.0-15.5 g/s). The model evaluated 28 sensitive receptors in the Dammam area.

## Key Findings

- Average annual temperature in Dammam rose by approximately 1°C over the last decade (2009-2019), aligning with predicted regional trends of ~1.2°C. ([[2022-mustapha|Mustapha, 2022, p. 43]])
- The average annual wind speed in Dammam dropped by about 0.6 m/s over the last decade (2009-2019). ([[2022-mustapha|Mustapha, 2022, p. 45]])
- Temperature increases of +1°C, +3°C, and +5°C resulted in only minor concentration increases for SO2: 0.04%, 0.14%, and 0.23% respectively (for the 1hr period). ([[2022-mustapha|Mustapha, 2022, p. 48]])
- For the 8-hour averaging period, temperature rises of +1°C, +3°c, and +5°C resulted in average concentration increases of 0.054%, 0.164%, and 0.276% respectively. ([[2022-mustapha|Mustapha, 2022, p. 55]])
- Increasing wind speed by 0.6 m/s, 1.2 m/s, and 1.8 m/s resulted in significant reductions in SO2 concentrations for most receptors during the 1-hour averaging period. ([[2022-mustapha|Mustapha, 2022, p. 59]])
- The study concluded that changes in wind speed have a significantly greater impact on air pollutant concentration than changes in temperature. ([[2022-mustapha|Mustapha, 2022, p. 15]])
- For the 4-hour time scale, increasing wind speed by 0.6, 1.2, and 1.8 m/s resulted in reductions of 7.53%, 15.32%, and 22.7% in SO2 concentration. ([[2022-mustapha|Mustapha, 2022, p. 68]])
- A projected increase in ambient temperature by 5 degrees Celsius only caused a 0.2% increase in SO2 concentration across all time scales (1hr, 4hr, and 8hr). ([[2022-mustapha|Mustapha, 2022, p. 77]])
- The study found that the impact of wind speed on pollutant concentration was consistent across all tested time scales (1hr, h4, 8hr), showing a steady decrease in concentration as wind speed increased. ([[2022-mustapha|Mustapha, 2022, p. 74]])
- The influence of distance was observed where receptors further from the source showed lower effects from wind speed changes due to reduced dilution potential at greater distances. ([[2022-mustapha|Mustapha, 2022, p. 75]])
- Model results for both current and simulated future climates fell within regulatory standards, with SO2 concentrations being significantly lower than minimum values required by regulatory bodies. ([[2022-mustapha|Mustapha, 2022, p. 78]])

## Limitations

The study only assessed Sulphur dioxide (SO2) as a pollutant; other pollutants like PM10 and NOx were not included. Additionally, some anomalies in wind speed results at very long distances (>33km) were noted due to potential changes in meteorological parameters over large distances.

## Recommendations and Future Work

- Investigate the effects of other climatic parameters such as precipitation on air quality dispersion model results.
- Assess the impact of other pollutants, specifically PM10 and NOx, using AERMOD.

## Related Concepts

- [[aeromod]]
- [[wrf]]
- [[gis]]
- [[environmental-monitoring]]
- [[climate-change]]
- [[dammam-area]]
- [[environmental-geoscience]]
