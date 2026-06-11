---
type: source
id: "142721"
title: "INVESTIGATION OF TTI ANISOTROPY OF P-WAVE VELOCITIES IN SAND DUNES IN EASTERN SAUDI ARABIA"
author: "Khalid Makki"
year: 2024
department: "Geosciences"
degree: "MS"
supervisor: "Abdullatif Al-Shuhail"
committee_members:
  - "Sherif Hanafy"
  - "Umair Waheed"
source_file: "raw/142721 - INVESTIGATION OF TTI ANISOTROPY OF P-WAVE VELOCITIES IN SAND DUNES IN EASTERN SA.pdf"
url: "https://eprints.kfupm.edu.sa/id/eprint/142721/"
study_area: "Barchan sand dune in the Al-Jafurah sand sea, Eastern Province, Saudi Arabia (approximately 30 km east of Dhahran)"
keywords:
  - TTI anisotropy
  - P-wave velocities
  - sand dunes
  - azimuthal anisotropy
  - seismic data
  - P-wave velocity
  - seismic array
techniques:
  - circular-seismic-array
  - tilted-transverse-isotropy-tti-model
  - thomsen-parameters-estimation
  - seismic-array
  - dgps
  - geode-seismograph
  - seismic-processing
  - matlab
  - python
tags:
  - degree/ms
  - location/eastern-provincesaudiarabia
  - location/eastern-province
  - location/dhahran-area
  - location/saudi-arabia
  - technique/velocity-analysis
  - technique/seismic-processing
  - technique/seismic-array
  - technique/geodesy
  - technique/matlab
  - technique/python
  - theme/geophysics-general
  - theme/near-surface-geophysics
  - theme/seismology
  - theme/seismic-imaging
  - terminology/anisotropy
  - terminology/tilted-transverse-isotropy
  - terminology/petrophysics
  - terminology/thomsen-parameters
  - terminology/velocity-analysis
status: ingested
---

# INVESTIGATION OF TTI ANISOTROPY OF P-WAVE VELOCITIES IN SAND DUNES IN EASTERN SAUDI ARABIA

**Summary**: The thesis investigates the azimuthal anisotropy of P-wave velocity in sand dunes in Eastern Saudi Arabia, which are often modeled as isotropic but exhibit complex internal structures. By deploying a circular seismic array on a barchan dune and applying a TTI model, the study concludes that these dunes behave as weakly anisotropic TTI media.

---

## Research Problem

Unconsolidated sand dunes pose challenges for seismic imaging due to their complex topography, high attenuation, and vertical velocity profiles. Most studies assume isotropic behavior, but the lack of azimuthal data limits the understanding of HTI and TTI effects in these environments.

## Objectives

- Investigate and test for the presence of TTI (tilted transverse isotropy) with azimuthal variation in sand dunes.
- Design a circular seismic survey geometry to collect data at 15-degree increments of azimuth while maintaining constant thickness.
- Process seismic data using a workflow that preserves azimuthal effects.
- Calculate velocities and explain trends with azimuth using a TTI model.
- Estimate Thomsen parameters (epsilon and delta) in the dune.
- Investigate the azimuthal anisotropy of P-wave velocity in sand dunes
- Design and deploy a circular seismic array on a barchan sand dune
- Quantify the effect of tilted transverse isotropy (TTI) on P-wave velocities due to dipping cross-strata
- Determine Thomsen parameters (epsilon and delta) for the TTI medium
- Evaluate the impact of anisotropy on P-wave velocities and seismic imaging quality
- Design and deploy a circular seismic array on a study site

## Methods

The study utilizes a circular seismic array consisting of 24 receivers placed on a circle's circumference at 15-degree intervals with a constant offset of 9m from a central source. Data are processed to extract P-wave velocities across different azimuths. These results are then fitted to a TTI model using four known parameters (azimuth, incidence angle, tilt of symmetry axis, and velocity along the symmetry axis) to solve for two unknown Thomsen parameters (epsilon and delta).

## Data and Materials

20 shot gathers with 24 traces per gather (total of 480 traces). Each trace contains 501 samples at a 1.25 ms sampling interval and a recording time of 0.0625 seconds. Geophones have a natural frequency of 15 Hz.

## Key Findings

- The measured velocity data show a sinusoidal behavior with a maximum velocity along an azimuth parallel to the slip face (cross-strata) of the dune. ([[2024-makki|Makki, 2024, p. 13]])
- The best-fit values for Thomsen parameters epsilon and delta are 0.035 and 0.005, respectively. ([[2024-makki|Makki, 2024, p. 13]])
- The results prove that the studied sand dune has the characteristic of a weakly anisotropic TTI medium. ([[2024-makki|Makki, 2024, p. 13]])
- Assuming constant velocity in sand dunes can lead to errors in thickness estimation up to 15% for sands with porosity > 0.2 and thickness < 200m. ([[2024-makki|Makki, 2024, p. 18]])
- Failure to account for the rapid increase in P-wave velocity in the first few centimeters of a dune can lead to up to 44% error in static correction under constant velocity assumptions. ([[2024-makki|Makki, 2024, p. 19]])
- The study area's sand dunes contain cross-strata with thicknesses of approximately 10 cm and dipping angles of 30-32°. ([[2024-makki|Makki, 2024, p. 42]])
- Sand properties in the barchan dune include a mineral composition of 86.8% quartz, 9.4% feldspar, 2.9% calcite, and 0.9% gypsum/heavy minerals. ([[2024-makki|Makki, 2024, p. 51]])
- Grain sizes in the bulk of the sand dune range from fine (0.22 mm) to medium (0.40 mm). ([[2024-makki|Makki, 2024, p. 51]])
- page_number_not_specified_in_source ([[2024-makki|Makki, 2024]])
- The study identified the sand dune as a weakly anisotropic medium with Thomsen parameters epsilon = 0.03461668 and delta = 0.00511634 (both < 0.1). ([[2024-makki|Makki, 2024, p. 73]])
- The P-wave propagation velocity along the TTI symmetry axis was determined to be Vp0 = 273.691 m/s. ([[2024-makki|Makki, 2024, p. 71]])
- Fastest velocities (e.g., geophones 8-20, 9-21, 10-22) were oriented in a NW-SE direction, matching the strike of the slip face and bedding. ([[2024-makki|Makki, 2024, p. 62]])
- Slowest velocities (e.g., geophones 2-14, 3-15, 4-16) were oriented in a NE-SW direction, perpendicular to the dune bedding. ([[2024-makki|Makki, 2024, p. 62]])
- The calculation of incidence angle theta was determined as 71.33 degrees based on the depth of penetration and strike orientation. ([[2024-makki|Makki, 2024, p. 69]])
- The prediction of P-wave velocity using the derived Thomsen parameters resulted in a low error rate of 1.67% (SSE = 310.087, RMSE = 3.594). ([[2024-makki|Makki, 2024, p. 75]])

## Limitations

The lack of borehole data in the study area required the use of theoretical models (Hertz-Mindlin and Gassmann approximations) to calculate P-wave velocity at depth.

## Recommendations and Future Work

- Explore different seismic acquisition geometries to capture effects of both azimuth and offset.
- Repeat the experiment in different locations to determine if weak anisotropic behavior is a global phenomenon for sand dunes.
- Simulate results on synthetic datasets to isolate variables like the tilt of the symmetry axis.

## Related Concepts

- [[velocity-analysis]]
- [[seismic-processing]]
- [[anisotropy]]
- [[tilted-transverse-isotropy]]
- [[near-surface-geophysics]]
- [[eastern-province-saudi-arabia]]
- [[seismic-array]]
- [[geodesy]]
- [[petrophysics]]
- [[eastern-province]]
- [[thomsen-parameters]]
- [[matlab]]
- [[python]]
