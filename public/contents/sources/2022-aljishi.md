---
type: source
id: "142247"
title: "SAND DUNE STATIC DELAY: A DATA DRIVEN APPROACH AND ADJUSTMENT OF THE SAND CURVE"
author: "Ali Al Jishi"
year: 2022
department: "Geosciences"
degree: "MS"
supervisor: "Abdullaif Abdulrahman Al-Shuhail"
committee_members:
  - "Mamadou S. Diallo"
  - "Ismail Ebrahim San Linn Kaka"
source_file: "raw/142247 - SAND DUNE STATIC DELAY A DATA DRIVEN APPROACH AND ADJUSTMENT OF THE SAND CURVE.pdf"
url: "https://eprints.kfupm.edu.sa/id/eprint/142247/"
study_area: "Rub-AlKhali of Saudi Arabia and Taklimakan of China"
keywords:
  - Sand dune
  - Static delay
  - Sand curve
  - Seismic data processing
  - Autocorrelation
  - Rub-AlKhali
  - sand dune static delay
  - near-surface seismic reverberations
  - data driven approach
  - Seismic data acquisition
  - Reflections
  - Refractions
  - Signal processing
  - Rub al Khali
techniques:
  - seismic-processing
  - autocorrelation
  - forward-modeling
  - well-log-analysis
  - groundwater-modeling
  - agc
  - fk-filter
  - karhunloevtransform
  - cross-correlation
  - stacking
  - velocity-analysis
  - deconvolution
  - interpolation
  - signal-processing
tags:
  - degree/ms
  - location/rub-al-khali-basin
  - location/saudi-arabia
  - technique/seismic-processing
  - technique/autocorrelation
  - technique/forward-modeling
  - technique/groundwater-modeling
  - technique/velocity-analysis
  - technique/deconvolution
  - technique/interpolation
  - technique/signal-processing
  - theme/near-surface-geophysics
  - theme/seismic-processing
  - theme/seismic-acquisition
  - terminology/static-correction
  - terminology/sand-curve
  - terminology/near-surface-geophysics
  - terminology/reverberation
status: ingested
---

# SAND DUNE STATIC DELAY: A DATA DRIVEN APPROACH AND ADJUSTMENT OF THE SAND CURVE

**Summary**: The thesis investigates the challenges of seismic data acquisition and processing in sand dune environments, specifically focusing on the Rub-alKhali region. It proposes a data-driven approach using autocorrelation and adaptive sand curves to accurately determine static delays and improve the imaging of underlying structures.

---

## Research Problem

Sand dune environments cause significant complications for seismic data acquisition and processing due to variations in amplitude, surface multiples, and near-surface static issues. Existing methods like the 'Sand Curve' are robust but can be improved to better handle diverse sand thicknesses and ensure a consistent base of sand elevation.

## Objectives

- Develop a data-driven near-surface static solution for sand dune environments.
- Improve the accuracy of 'time-in-sand' calculations using autocorrelation analysis.
- Evaluate the proposed method against existing methods like the standard Sand Curve.
- Examine the use of autocorrelation in seismic data of sand dune environments to correct for static delays.
- Develop an approach to generate an adaptive sand curve.
- Identify and enhance the signature of near-surface reverberations in common source and receiver fields.
- Evaluate different offset ranges to address reverberations coherently.
- Model the effects of sand dunes and sabkhas on seismic signals using forward modeling.
- Evaluate the effectiveness of autocorrelation in identifying and enhancing reverberation signatures.
- Develop an adaptive sand curve methodology to improve the accuracy of static delay calculations.
- Address the limitations of existing, constrained sand curves in high-elevation areas.
- Evaluate the limitations of current Sand Curve approaches for seismic data processing in sand dunes.
- Develop an adaptive, data-driven approach to adjust the Sand Curve based on actual survey data.
- Propose a new methodology for picking the 'base of sand' elevation to ensure a consistent and smooth surface.
- Demonstrate the effectiveness of these methods using real seismic data from the Rub al Khali desert.

## Methods

The study utilizes several signal processing techniques, including auto-correlation analysis to identify sand reverberation signatures. A custom deconvolution operator is designed by averaging normalized traces to remove background noise and highlight the sand's signature. The 'base of sand' is determined through a combination of elevation picking (using polygon selection for sabkhas) and cross-correlation residual updating. These methods are then used to construct an adaptive sand curve that accounts for varying sand thicknesses, which is compared against the traditional Sand Curve model.

## Data and Materials

The study uses real seismic data acquired in the Rub al Khali desert of Saudi Arabia, featuring sand dunes with elevations ranging from a few meters to 250 meters. The dataset includes multiple survey blocks and various types of sand and sabkha (salt flat) formations.

## Key Findings

- Sand dunes cause a sharp contrast in acoustic impedance between unconsolidated quartz (sand) and high-velocity salt deposits with clays (sabkha), leading to significant static delays. ([[2022-aljishi|AlJishi, 2022, p. 19]])
- Dune reverberations, while often considered noise, are useful for revealing two-way-time in the sand dune from the sabkha to the topography. ([[2022-aljishi|AlJishi, 2022, p. 19]])
- The proposed data-driven method does not require prior knowledge of sand thickness, porosity, or water saturation to calculate static corrections. ([[2022-aljishi|AlJishi, 2022, p. 16]])
- page_number_not_applicable_for_this_finding_as_it_is_a_methodology_statement ([[2022-aljishi|AlJishi, 2022]])
- The study identifies that standard refraction tomography cannot solve high lateral variation delays caused by sand dunes without first correcting for time-in-sand. ([[2022-aljishi|AlJishi, 2022, p. 21]])
- Autocorrelation of the source gather shows that topographical variations of the dunes correlate well with the values of the autocorrelation mirror. ([[2022-aljishi|AlJishi, 2022, p. 12]])
- Autocorrelation of the source gather reveals a signature that mirrors the topography, where peaks correspond to approximately twice the two-way-time delay in the sand portion. ([[2022-aljishi|AlJishi, 2022, p. 29]])
- The autocorrelation approach is effective at filtering out random noise while preserving periodic features like those from near-surface reverberations. ([[2022-aljishi|AlJishi, 2022, p. 34]])
- Common source and common receiver gathers allow for the identification of coherent events related specifically to either the source side or the receiver side. ([[2022-aljishi|AlJishi, 2022, p. 38]])
- Automatic Gain Control (AGC) enhances periodic events, including second-order multiples, which are more noticeable with short window AGC. ([[2022-aljishi|AlJishi, 2022, p. 41]])
- FK filters in the post-stack domain can effectively reject flat events (like those from water tables) while preserving non-flat near-surface signals. ([[2022-aljishi|AlJishi, 2022, p. 43]])
- Karhun-Loev transform can be used to extract and suppress unwanted linear events that are coherent across the volume without harming the near-surface signature. ([[2022-aljishi|AlJishi, 2022, p. 43]])
- The forward modeling showed that high velocity contrast at the air-sand boundary results in distinct reverberations, which can be predicted if geological parameters (velocity, density, depth) are known. ([[2022-aljishi|AlJishi, 2022, p. 47]])
- Autocorrelation was found to be highly effective in enhancing targeted reverberation signatures and reducing noise when combined with stacking. ([[2022-aljishi|AlJishi, 2022, p. 59]])
- The 'inverse sand curve' allows for the conversion of picked times into a thickness value, which can then be used to determine an elevation point for more intuitive quality control. ([[2022-aljishi|AlJishi, 2022, p. 65]])

## Limitations

The study notes that survey reports from contractors often contain poorly classified surface points, requiring extensive manual editing. Additionally, the accuracy of the 'base of sand' is dependent on the distribution of sabkha bodies; more sabkhas lead to higher accuracy.

## Recommendations and Future Work

The author suggests using ray-tracing methods to isolate specific acoustic reflections/refractions and implementing multi-source modeling with variable topography to eliminate receiver-side reverberation in source point stacks.

## Related Concepts

- [[seismic-processing]]
- [[autocorrelation]]
- [[forward-modeling]]
- [[static-correction]]
- [[sand-curve]]
- [[rub-al-khali-basin]]
- [[near-surface-geophysics]]
- [[finite-difference]]
- [[reverberation]]
- [[signal-processing]]
