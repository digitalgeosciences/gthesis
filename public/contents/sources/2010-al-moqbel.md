---
type: source
id: "136319"
title: "An Innovative Model-based Velocity Integration Procedure with an Application in Eastern Saudi Arabia"
author: "Abdulaziz M. Al-Moqbel"
year: 2010
department: "Geosciences"
degree: "MS"
supervisor: "Abdullatif Al-Shuhail"
committee_members:
  - "Mohammad Houssain Makkawi"
  - "Ming-Ren Hong"
source_file: "raw/136319 - An Innovative Model-based Velocity Integration Procedure with an Application in .pdf"
url: "https://eprints.kfupm.edu.sa/id/eprint/136319/"
study_area: "Eastern Saudi Arabia"
keywords:
  - seismic data processing
  - stacking velocity
  - velocity integration
  - common-model platform
  - DSI interpolator
  - 3-D velocity model
  - time picks
  - interpretation consistency
  - velocity estimation
  - horizon picking
  - 3D seismic survey
  - 2D seismic survey
  - interpolation
  - surface modeling
  - semblance
  - signal to noise ratio
  - semblance method
  - multiples
  - limited-offset data
techniques:
  - velocity-analysis
  - seismic-processing
  - interpolation
  - petrel
  - mathematical-modeling
  - signal-processing
  - well-log-analysis
  - semberance-analysis
  - velocity-modeling
  - geostatistics
  - factorial-co-kriging
  - pvs-software
tags:
  - degree/ms
  - location/eastern-province
  - technique/velocity-analysis
  - technique/seismic-processing
  - technique/interpolation
  - technique/mathematical-modeling
  - technique/signal-processing
  - technique/geostatistics
  - theme/geophysics-general
  - theme/velocity-modeling
  - theme/seismic-interpretation
  - theme/seismic-imaging
  - terminology/velocity-analysis
  - terminology/signal-to-noise-ratio
  - terminology/signal-processing
  - terminology/semblance
  - terminology/karsting
status: ingested
---

# An Innovative Model-based Velocity Integration Procedure with an Application in Eastern Saudi Arabia

**Summary**: The thesis proposes a new procedure to build initial stacking velocity functions for seismic data processing by integrating 2D and 3D survey data into a common-model platform. The method uses the Discrete Smoothing Interpolator (DSI) to create a 3D velocity volume, which improves accuracy in areas with poor signal-to-noise ratios or complex geological features like karsting.

---

## Research Problem

Current methods for estimating stacking velocity are limited in vertical and horizontal resolution, especially when dealing with multiples or limited-offset datasets where coherence and continuity tools (like the semblance method) fail due to poor signal-to-noise ratios.

## Objectives

- Provide a means of giving the stacking velocity picking process more precision and accuracy.
- Obtain a consistent pick of the reflector throughout various locations of seismic surveys.
- Develop a tool with a background of geological reflectors to provide a more confident process for stacking velocity picking.
- Develop a new procedure to effectively build initial stacking velocity functions for processing new seismic lines.
- Improve the accuracy of velocity estimation in cases involving multiples and limited-offset data.
- Apply the proposed model-based integration method to seismic lines in Eastern Saudi Arabia.

## Methods

The study utilizes a large dataset of 1,410,430 velocity points collected from various 2D and 3D seismic surveys. The methodology involves analyzing raw velocity picks (X, Y, time, and value) and horizon time picks across several key regional horizons. A model-based approach is used to integrate these data points into a coherent volume, addressing the inconsistencies caused by different processing stages (e.g., CSA stage). The study also evaluates the impact of 'Auto pickers' on velocity consistency.

## Data and Materials

The study uses seismic data from several lines in Eastern Saudi Arabia, specifically focusing on 7 key horizons. The analysis includes a variety of cases (Case One: wide range of possible points; Case Two: poor coherency; and the final integrated case) to test the validity of the model-based integration.

## Key Findings

- The proposed procedure allows for the creation of a 3D velocity model from previously integrated data, providing better control over velocity values across large areas. ([[2010-al-moqbel|Al-Moqbel, 2010, p. 32]])
- Integrating the velocity model with time picks provides a more precise and consistent solution for various applications of stacking velocity. ([[2010-al-moqbel|Al-Moqbel, 2010, p. 33]])
- The DSI method, being based on discrete objects rather than continuous functions, is better suited for modeling the geometry and properties of natural objects like seismic velocities. ([[2010-al-moqbel|Al-Moqbel, 2010, p. 34]])
- The resulting 3D velocity volume allows for the generation of velocity models for any line segment or sub-volume within its boundaries. ([[2010-al-moqbel|Al-Moqbel, 2010, p. 36]])
- The method successfully identifies and manages areas with poor signal-to-noise ratios due to ambient noise or karsting (Case 5). ([[2010-al-moqbel|Al-Moqbel, 2010, p. 18]])
- The model helps in discriminating stacking velocities in areas where semblance peaks are stretched or poorly defined. ([[2010-al-moqbel|Al-Moqbel, 2010, p. 18]])
- A total of 1,410,430 velocity points were collected from the archival database for the study area. ([[2010-al-moqbel|Al-Moqbel, 2010, p. 46]])
- The study identified that some velocity picks started at values as low as 1400 m/s while others began at 2000 m/s, indicating inconsistency in initial data. ([[2010-al-moqbel|Al-Moqbel, 2010, p. 51]])
- 3-D seismic surveys were found to provide significantly more detailed and well-covered velocity picks compared to 2-D surveys. ([[2010-al-moqbel|Al-Moqbel, 2010, p. 51]])
- The use of 'Auto pickers' resulted in distinct patterns in the data, with some set at 150ms and others at 200ms windows. ([[2010-al-moqbel|Al-Moqbel, 2010, p. 53]])
- Horizon 1 time picks (727,511) showed a clear eastward dip following regional trends when color-coded by time. ([[2010-al-moqbel|Al-Moqbel, 2010, p. 64]])
- Horizon 2 time picks (844,359) also exhibited an eastward dipping trend in the data distribution. ([[2010-al-moqbel|Al-Moqbel, 2010, p. 67]])
- Horizon 3 time picks (909,565) showed a consistent eastward dip across the study region. ([[2010-al-moqbel|Al-Moqbel, 2010, p. 69]])
- Horizon 4 time picks (754,917) were well distributed and followed the regional trend of dipping east. ([[2010-al-moqbel|Al-Moqbel, 2010, p. 71]])
- Horizon 5 collected a total of 888,435 time picks distributed throughout the study area. ([[2010-al-moqbel|Al-Moqbel, 2010, p. 72]])

## Limitations

Standard semblance analysis can result in multiple possible picks for a single horizon (e.g., between 1000-2000ms and 2400-3400ms) or show very poor coherency, making it difficult to identify the actual subsurface location.

## Recommendations and Future Work

Expand the data elements to include sonic data and other borehole data; update velocity data with picks made after 2001; populate seismic time picks with more key horizons; use geostatistical methods like factorial co-kriging for enhancing irregular imprints of erroneous seismic line inputs.

## Related Concepts

- [[velocity-analysis]]
- [[interpolation]]
- [[signal-to-noise-ratio]]
- [[velocity-modeling]]
- [[eastern-province]]
- [[seismic-processing]]
- [[signal-processing]]
- [[geophysics-general]]
- [[seismic-imaging]]
- [[semblance]]
- [[seismic-interpretation]]
- [[karsting]]
