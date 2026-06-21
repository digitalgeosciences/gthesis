---
type: source
id: "140970"
title: "ESTIMATING RATE OF GROUNDWATER DEPLETION IN THE EASTERN PROVINCE AQUIFER SYSTEM USING GRACE-INSAR DATA"
author: "Arya Prasetyo"
year: 2019
department: "Geosciences"
degree: "MS"
supervisor: "Mohammad Makkawi"
committee_members:
  - "Elamin Abdalla"
  - "SanLinn Kaka"
  - "Abdulaziz Al-Shaibani"
source_file: "raw/140970 - ESTIMATING RATE OF GROUNDWATER DEPLETION IN THE EASTERN PROVINCE AQUIFER SYSTEM .pdf"
url: "https://eprints.kfupm.edu.sa/id/eprint/140970/"
study_area: "Eastern Province, Saudi Arabia"
keywords:
  - Groundwater depletion
  - GRACE satellite
  - InSAR
  - Land subsidence
  - Eastern Province
  - Saudi Arabia
  - Aquifer system
  - remote sensing
techniques:
  - grace
  - insar
  - dinsar
  - snap
  - gis
  - snaphu
  - remote-sensing
  - groundwater-modeling
  - sentinel-1a
  - psi
  - sbas
tags:
  - degree/ms
  - formation/quaternary-sediments
  - formation/hadrush-formation
  - formation/dammam-formation
  - formation/rus-formation
  - formation/uem-er-radhuma-formation
  - location/eastern-province
  - location/saudi-arabia
  - technique/grace
  - technique/insar
  - technique/din-sar
  - technique/snap
  - technique/gis
  - technique/snaphu
  - technique/remote-sensing
  - technique/groundwater-modeling
  - technique/psi
  - technique/sbas
  - theme/hydrogeology
  - theme/land-subsidence
  - theme/water-resources-management
  - theme/remote-sensing
  - terminology/land-subsidence
  - terminology/hydrogeology
status: ingested
---

# ESTIMATING RATE OF GROUNDWATER DEPLETION IN THE EASTERN PROVINCE AQUIFER SYSTEM USING GRACE-INSAR DATA

**Summary**: The thesis investigates groundwater depletion and land subsidence in the Eastern Province of Saudi Arabia using GRACE and InSAR satellite data from 2007 to 2016. It concludes that groundwater loss is primarily driven by anthropogenic irrigation demands rather than climate factors, leading to measurable ground deformation.

---

## Research Problem

Over-exploitation of fossil aquifers in the Eastern Province leads to unsustainable water levels and potential ground subsidence, which threatens infrastructure; however, limited in-situ measurements make large-scale monitoring difficult.

## Objectives

- Analyzing the spatiotemporal groundwater variations derived from GRACE satellite mission in the Eastern Province from January 2007 to December 2016.
- Monitoring aquifer-related subsidence in municipality and large agriculture areas within the Eastern Province from June 2016 to December 2016 through SAR dataset derived from Sentinel-1A mission.
- Observe groundwater storage change in the Eastern Province using GRACE satellite missions.
- Monitor land subsidence development in the Eastern Province using InSAR satellite missions.
- Identify the primary drivers of groundwater depletion (e.g., irrigation vs. climate).

## Methods

The study utilizes GRACE TWS data (RL05) to estimate groundwater storage by subtracting soil moisture (from GLDAS models: Noah, VIC, and Mosaic) and oil extraction volumes. InSAR processing is performed using the SNAP software for DInSAR techniques to map land subsidence from Sentinel-1A SAR imagery. Snaphu is used for phase unwrapping of interferograms. Results are validated against 19 ground-based well observations.

## Data and Materials

GRACE TWS data (2007-2016), GLDAS soil moisture models (Noah, VIC, Mosaic), Sentinel-1A SAR imagery (June-Dec 2016), and 19 observed water level records from wells in the Eastern Province.

## Key Findings

- GRACE-derived groundwater storage shows a depletion rate of -6.384 ± 0.409 mm/yr over the 10-year study period (2007-2016). ([[2019-prasetyo|Prasetyo, 2019, p. 15]])
- The total volume loss in groundwater for the Eastern Province is approximately 45.2 ± 0.885 km3 over the decade. ([[2019-prasetyo|Prasetyo, 2019, p. 45]])
- Soil moisture variations (average -0.396 ± 0.048 mm/yr) were found to be relatively small compared to TWS, meaning soil moisture does not significantly impact TWS results in this arid region. ([[2019-prasetyo|Prasetyo, 2019, p. 48]])
- Crude oil-liquid extraction impacts on GRACE TWS are minimal (0.048 mm/yr) and can be neglected compared to other variables. ([[2019-prasetyo|Prasetyo, 2019, p. 50]])
- Groundwater depletion is highest in the northern and middle parts of the Eastern Province, correlating with high agricultural activity. ([[2019-prasetyo|Prasetyo, 2019, p. 53]])
- In the Dammam-Qatif area, cumulative subsidence in agriculture zones ranges from -8 cm to -13 cm. ([[2019-prasetyo|Prasetyo, 2019, p. 56]])
- Urban areas show lower subsidence (0 to -6 cm) but pose higher risks to infrastructure due to proximity to buildings and roads. ([[2019-prasetyo|Prasetyo, 2019, p. 56]])
- The study area experienced a groundwater volume loss of approximately -4.52 km3 with a rate of depletion of -6.72 mm/yr over the 10-year period. ([[2019-prasetyo|Prasetyo, 2019, p. 47]])
- Groundwater depletion was found to be driven by anthropogenic activities (irrigation) rather than climate variabilities like precipitation or evapotranspiration. ([[2019-prasetyo|Prasetyo, 2019, p. 55]])
- In the Hasa area, cumulative subsidence reached -12 to -14 cm in agricultural zones, while some areas showed uplift of up to 6 cm. ([[2019-prasetyo|Prasetyo, 2019, p. 58]])
- Qaryat al Ulya showed subsidence ranging from -6 cm to -12 cm in the northern part and 0 to -3 cm in the southern part. ([[2019-prasetyo|Prasetyo, 2019, p. 59]])
- Nairyah-Al Sarrar area exhibited subsidence varying from 0 to -8 cm, influenced by both agriculture and crude oil extraction. ([[2019-prasetyo|Prasetyo, 2019, p. 61]])
- Soil moisture and crude oil-liquid extraction were found to have minimal impact on TWS variations compared to the groundwater component. ([[2019-prasetyo|Prasetyo, 2019, p. 63]])

## Limitations

InSAR accuracy is limited by temporal decorrelation (especially in vegetated areas) and atmospheric effects. GRACE has low spatial resolution, making it difficult to isolate specific aquifers without additional data.

## Recommendations and Future Work

Utilize Mascon solutions for higher resolution GRACE data; use L-band InSAR (e.g., ALOS-2) for better penetration in vegetated areas; implement PSI and SBAS processing to reduce atmospheric noise; conduct field measurements (GPS and water levels) to validate InSAR results.

## Related Concepts

- [[grace]]
- [[insar]]
- [[land-subsidence]]
- [[hydrogeology]]
- [[eastern-province]]
- [[water-resources-management]]
- [[remote-sensing]]
