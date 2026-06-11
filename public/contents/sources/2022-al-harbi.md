---
type: source
id: "142264"
title: "ASSESSMENT OF OPEN WASTE DUMPING SITES IN TWO CITIES IN THE EASTERN PROVINCE, SAUDI ARABIA: REMOTE SENSING AND IMAGE PROCESSING APPROACH"
author: "Muhammad Al-Harbi"
year: 2022
department: "Geosciences"
degree: "MS"
supervisor: "Bassam ِAl-Tawabini"
committee_members:
  - "Soupios Panteleimon"
  - "Alfarhan Mohammed"
source_file: "raw/142264 - ASSESSMENT OF OPEN WASTE DUMPING SITES IN TWO CITIES IN THE EASTERN PROVINCE, SA.pdf"
url: "https://eprints.kfupm.edu.sa/id/eprint/142264/"
study_area: "Dammam and Hafer Al-Batin cities, Eastern Province, Saudi Arabia"
keywords:
  - Open waste dumping sites
  - Eastern Province
  - Remote Sensing
  - Image Processing
  - Construction and Demolition (C&D) waste
  - Soil quality assessment
  - Spectral reflectance
  - open dumpsite
  - satellite image analysis
  - waste management
  - soil quality
  - heavy metals
  - urban area
  - soil assessment
  - construction waste
  - Saudi Arabia
techniques:
  - remote-sensing
  - image-processing
  - gis
  - spectroradiometer
  - google-earth-engine
  - toc-analysis
  - tc-measurement
  - spectral-analysis
  - machine-learning-geoscience
  - spectral-unmixing
  - image-differencing
  - ground-truthing
  - soil-sampling
  - unsupervised-classification
  - supervised-classification
  - change-detection
  - visual-inspection-of-images
  - spectroscopy
  - icp-ms
  - acid-digestion
tags:
  - degree/ms
  - location/eastern-province
  - location/saudi-arabia
  - location/dammam-area
  - technique/remote-sensing
  - technique/gis
  - technique/well-log-analysis
  - technique/spectral-analysis
  - theme/environmental-geoscience
  - theme/environmental-pollution
  - theme/environmental-risk-assessment
  - theme/environmental-monitoring
  - terminology/construction-and-demolition-waste
  - terminology/spectral-reflectance
  - terminology/soil-quality
  - terminology/heavy-metals
  - terminology/remote-sensing
  - terminology/geoaccumulation-index
  - terminology/environmental-monitoring
status: ingested
---

# ASSESSMENT OF OPEN WASTE DUMPING SITES IN TWO CITIES IN THE EASTERN PROVINCE, SAUDI ARABIA: REMOTE SENSING AND IMAGE PROCESSING APPROACH

**Summary**: The thesis assesses open waste dumping sites in Dammam and Hafer Al-Batin using a combination of remote sensing (unsupervised, supervised, and change detection) and soil analysis. It concludes that while remote sensing effectively maps these sites, the construction waste present does not significantly impact local soil quality regarding heavy metals or organic content.

---

## Research Problem

Rapid urbanization in Eastern Saudi Arabia has led to an increase in illegal open dumpsites, which pose significant environmental risks and health hazards. Local authorities struggle to identify these sites timely due, to a lack of effective monitoring systems and the difficulty of manual field surveys.

## Objectives

- Map the locations of open dumpsites in Dammam and Hafer Al-Batin using satellite imagery.
- Study the spectral reflectance of common materials found in these dumpsites to create a spectral library.
- Assess the environmental impact on soil quality (pH, EC, TOC, TC, and heavy metals) at selected sites.
- Evaluate the effectiveness of using remote sensing techniques in identifying illegal dumpsites
- Map the existing uncontrolled dumpsites in the study area
- Identify and quantify the composition (waste type) of these illegal dumping in a selected dumpsite
- Assess the impacts of a selected dumpsite on the surrounding soil quality
- Identify the locations of illegal waste dumpsites using remote sensing techniques (unsupervised, supervised, and change detection).
- Develop a spectral library of common materials found in construction dumpsites to aid identification.
- Assess the impact of these dumpsites on soil quality by measuring heavy metals, TOC, pH, and electrical conductivity.
- Assess open waste dumping sites in two cities in the Eastern Province of Saudi Arabia
- Utilize remote sensing and image processing to identify these sites

## Methods

The research employs a two-pronged approach: 1) Remote sensing methodologies involving satellite image acquisition from platforms like Google Earth Engine (GEE) or USGS, followed by pre-processing (radiometric, atmospheric, and geometric corrections). Classification is performed using unsupervised and supervised machine learning (specifically the Random Forest algorithm) to categorize land cover into urban, water, vegetation, bare soil, and potential dumpsites. Spectral unmixing is used to isolate pure spectral signatures of waste from mixed pixels. Image differencing is applied for temporal change detection over multi-year periods. 2) Field-based methods include ground-truthing via site visits and in-situ spectral measurements using a spectroradiometer (SPECTRAL EVOLUTION, 350-2500 nm). Soil quality assessment involves systematic sampling (cell sampling strategy) of soil from selected sites to analyze heavy metal contamination.

## Data and Materials

The study identified 64 dumpsites across two cities. Soil analysis included samples from a Dammam site and a Hafer Al-Batin site, including a reference control sample. A spectral library of 21 materials (including plastics, wood, and construction materials) was developed.

## Key Findings

- The study successfully mapped 62 open dumpsite locations using remote sensing and image processing techniques. ([[2022-al-harbi|Al-Harbi, 2022, p. 11]])
- A spectral library was created for 21 common materials found in the waste sites to aid in identification. ([[2022-al-harbi|Al-Harbi, 2022, p. 11]])
- Soil quality at the selected dumpsites was found to be within normal ranges compared to nearby soil, indicating no significant impact on soil from the dumped waste. ([[2022-al-harbi|Al-Harbi, 2022, p. 11]])
- C&D waste constitutes approximately 30% to 40% of total solid waste in Saudi Arabia. ([[2022-al-harbi|Al-Harbi, 2022, p. 15]])
- For every 10,000 m2 area, between 500 and 600 tons of C&D waste are generated during construction, while 7,000 to 12,000 tons are produced during demolition/construction cycles. ([[2022-al-harbi|Al-Harbi, 2022, p. 15]])
- Approximately 80% of marine litter is generated on the mainland and transported by rivers into the sea. ([[2022-al-harbi|Al-Harbi, 2022, p. 17]])
- The Random Forest algorithm successfully identified numerous new dumpsites on the outskirts of both Dammam and Hafer Al-Batin cities. ([[2022-al-harbi|Al-Harbi, 2022, p. 20]])
- Ground truthing confirmed that 8 out of 10 visited sites were indeed dumpsites, primarily consisting of construction and demolition waste. ([[2022-al-harbi|Al-Harbi, 2022, p. 33]])
- The study identified a significant limitation in quantifying specific waste types due to the lack of high-resolution hyperspectral data and the heterogeneous nature of the waste mixtures. ([[2022-al-harbi|Al-Harbi, 2022, p. 34]])
- Image differencing was found to be an effective, though tedious, method for capturing dumpsites that might be missed by standard classification algorithms. ([[2022-al-harbi|Al-Harbi, 2022, p. 33]])
- A total of 64 dumpsites were identified in the two cities using remote sensing methods. ([[2022-al-harbi|Al-Harbi, 2022, p. 41]])
- The average organic carbon (TOC) for the Hafer Al-Batin site was 0.25%, and the total carbon (TC) was 1.8%. ([[2022-al-harbi|Al-Harbi, 2022, p. 49]])
- The Dammam site showed a higher total carbon content of 10.55% (mean), which is attributed to inorganic carbonates. ([[2022-al-harbi|Al-Harbi, 2022, p. 50]])
- page_number_reference_note_for_finding_3_is_implied_by_table_6_on_page_50 ([[2022-al-harbi|Al-Harbi, 2022]])
- Both sites exhibited average pH values of approximately 8.2, indicating slightly alkaline soil. ([[2022-al-harbi|Al-Harbi, 2022, p. 50]])

## Limitations

The study could not identify specific waste types or quantities due to a lack of high-resolution hyperspectral imaging data and the heterogeneous nature of materials in small areas, which makes it difficult for current algorithms to unmix spectral mixtures.

## Recommendations and Future Work

Develop more comprehensive waste management regulations, increase public awareness, implement stricter enforcement with severe penalties for illegal dumping, and invest in research regarding sustainable waste management practices.

## Related Concepts

- [[remote-sensing]]
- [[gis]]
- [[construction-and-demolition-waste]]
- [[spectral-reflectance]]
- [[environmental-pollution]]
- [[eastern-province]]
- [[saudi-arabia]]
- [[soil-quality]]
- [[spectral-analysis]]
- [[heavy-metals]]
- [[environmental-risk-assessment]]
- [[icp-ms]]
- [[geoaccumulation-index]]
- [[environmental-monitoring]]
- [[environmental-geology]]
