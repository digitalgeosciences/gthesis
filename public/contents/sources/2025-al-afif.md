---
type: source
id: "143308"
title: "HUMAN HEALTH RISK ASSESSMENT OF INDUSTRIAL AIR POLLUTANT EMISSIONS UNDER DIFFERENT MITIGATION SCENARIOS USING DISPERSION MODELING"
author: "Waleed Al-Afif"
year: 2025
department: "Geosciences"
degree: "MS"
supervisor: "Bassam Tawabini"
committee_members:
  - "Abdullah Alshuhail"
  - "Husam Baalousha"
  - "Ole John Nielsen"
source_file: "raw/143308 - HUMAN HEALTH RISK ASSESSMENT OF INDUSTRIAL AIR POLLUTANT EMISSIONS UNDER DIFFERE.pdf"
url: "https://eprints.kfupm.edu.sa/id/eprint/143308/"
study_area: "Industrial regions of the Kingdom of Saudi Arabia (specifically an industrial city with a radius of 150 km)"
keywords:
  - Air Pollution
  - Atmospheric Dispersion Modeling
  - CALPUFF
  - Air Quality Index
  - Health Risk Assessment
  - Kingdom of Saudi Arabia
  - air pollutant emissions
  - mitigation strategies
  - dispersion modeling
  - US EPA methodologies
  - CO
  - SO2
  - NO2
  - PM2.5
  - PM10
techniques:
  - calpuff
  - calmet
  - calpost
  - gis
  - mathematical-modeling
  - risk-analysis
tags:
  - degree/ms
  - location/saudi-arabia
  - technique/calpuff
  - technique/gis
  - technique/mathematical-modeling
  - technique/risk-analysis
  - theme/environmental-risk-assessment
  - theme/environmental-pollution
  - terminology/air-quality-index
  - terminology/environmental-risk-assessment
  - terminology/environmental-monitoring
  - terminology/particulate-matter
status: ingested
---

# HUMAN HEALTH RISK ASSESSMENT OF INDUSTRIAL AIR POLLUTANT EMISSIONS UNDER DIFFERENT MITIGATION SCENARIOS USING DISPERSION MODELING

**Summary**: The thesis evaluates air pollutant emissions (CO, SO2, NO2, PM2.5, and PM10) from over 90 industrial stacks in Saudi Arabia using the CALPUFF dispersion modeling system. It compares three scenarios—current conditions, increased stack heights, and a transition from diesel to natural gas—to determine the most effective mitigation strategies for improving air quality and reducing human health risks.

---

## Research Problem

Rapid industrialization in Saudi Arabia has led to significant air pollution from fossil fuel combustion (diesel/gas), posing substantial risks to public health. There is a lack of specific analysis on how different mitigation strategies, such as increasing stack heights or changing fuel types, impact pollutant dispersion and human health risk in local industrial areas.

## Objectives

- To obtain dispersion model input parameters comprising meteorological and stack emission data.
- To predict atmospheric dispersion of air pollutants (NO2, PM2.5, PM10, SO2, and CO) from an industrial city using the CALPUFF model.
- To generate pollutant concentration and air quality index (AQI) distribution maps over a selected domain based on CALPUFF results.
- To assess human health risk for the receptor domain under current conditions and two mitigation scenarios.
- Assess air pollutant emissions using CALPUFF dispersion modeling.
- Evaluate the effectiveness of increasing stack height as a mitigation strategy.

## Methods

The study utilized the CALPUFF modeling system, which includes the CALMET meteorological processor to handle complex terrain/coastal effects and the CALPOST post-processing package. Data included emission reports from 100+ stacks (2016-2021) and hourly meteorological data from three stations within a 150km radius. Two mitigation scenarios were modeled: (1) increasing stack heights to 50m, and (2) switching fuel from diesel/oil to natural gas using EPA AP-42 emission factors. Results were processed into AQI maps using QGIS based on US EPA formulas. Human health risk was assessed via the Hazard Quotient (HQ) and Hazard Index (HI) methods following US EPA protocols.

## Data and Materials

The study analyzed five key pollutants: CO, SO2, NO2, PM2.5, and PM10. It evaluated three scenarios: the original case (baseline), Scenario 1 (increased stack height), and Scenario 2 (fuel shifting). Data included 1-hour, 24-hour, and 3-month averaging periods.

## Key Findings

- Under the stack height scenario, average CO concentrations were reduced by 68.6%. ([[2025-al-afif|Al-Afif, 2025, p. 12]])
- NO2 concentrations showed reductions of 36.4% under increased stack height and 46.9% under fuel change. ([[2025-al-afif|Al-Afif, 2025, p. 12]])
- SO2 concentrations significantly reduced by 97.2% with the transition from diesel to natural gas. ([[2025-al-afif|Al-Afif, 2025, p. 12]])
- Increasing stack height led to a reduction of 59.3% for PM2.5 and 60.7% for PM10 concentrations. ([[2025-al-afif|Al-Afif, 2025, p. 12]])
- The study concluded that switching fuel to natural gas resulted in higher reductions in pollutant concentrations and lower human health risks compared to increasing stack height. ([[2025-al-afif|Al-Afif, 2025, p. 12]])
- Wind data from all three stations showed a consistent prevailing wind direction toward the southeast for the year 2021. ([[2025-al-afif|Al-Afif, 2025, p. 30]])
- The highest wind frequency at the first and third stations was observed between 3.6 m/s and 5.7 m/s (29.4% and 30.1% respectively). ([[2025-al-afif|Al-Afif, 2025, p. 30]])
- In the baseline 'three-month' case, NO2 concentrations showed reductions of 10% for 24-Hour periods and 50% for 1-Hour periods compared to the full year. ([[2025-al-afif|Al-Afif, 2025, p. 44]])
- Scenario 1 (increasing stack height) resulted in a reduction of approximately 36% for NO2 (3-month average), 29% for SO2 (24-hour), and 81% for PM2.5 (1-hour). ([[2025-al-afif|Al-Afif, 2025, p. 45]])
- Scenario 2 (fuel shifting) resulted in a dramatic reduction of approximately 97% for SO2 across all averaging periods. ([[2025-al-afif|Al-Afif, 2025, p. 47]])
- Fuel shifting showed a significant reduction of 46.9% in NO2, bringing the AQI from 'unhealthy' to 'moderate'. ([[2025-al-afif|Al-Afif, 2025, p. 52]])
- In Scenario 2 (fuel shifting), SO2 AQI values dropped sharply to a maximum of 18.27, falling into the 'good' range. ([[2025-al-afif|Al-Afif, 2025, p. 54]])
- The Hazard Index (HI) was reduced by 72.4% under the fuel-shifting scenario compared to the baseline. ([[2025-al-afif|Al-Afif, 2025, p. 58]])
- SO2 remained the largest contributor to the Hazard Index, with a reduction of 97.2% in its specific HQ under the fuel-shifting scenario. ([[2025-al-afif|Al-Afif, 2025, p. 58]])
- AQI values for CO and PM10 remained consistently below 50 (Good) across all scenarios. ([[2025-al-afif|Al-Afif, 2025, p. 57]])

## Limitations

Lack of model validation due to the unavailability of Air Quality Monitoring Station (AQMS) data; CALPUFF's lack of parallel computing limited the analysis of seasonal variations; and the exclusion of greenhouse gas/temperature impacts.

## Recommendations and Future Work

Prioritize fuel shifting to natural gas for SO2 and NO2 reduction; use increased stack height where fuel shifting is not feasible; establish a real-time industrial emissions database; utilize hourly meteorological data instead of satellite data; integrate building data into models; and install more continuous monitoring equipment.

## Related Concepts

- [[calpuff]]
- [[gis]]
- [[air-quality-index]]
- [[environmental-risk-assessment]]
- [[saudi-arabia]]
- [[risk-analysis]]
- [[environmental-monitoring]]
- [[particulate-matter]]
