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
study_area: "Barchan sand dune in Eastern Province, Saudi Arabia (Al-Jafurah sand sea)"
keywords:
  - TTI anisotropy
  - P-wave velocity
  - sand dunes
  - azimuthal anisotropy
  - seismic data
  - Tilted Transversely Isotropic
  - Thomsen parameters
  - P-wave velocities
techniques:
  - seismic-processing
  - velocity-analysis
  - dgps
  - signal-processing
  - nonlinear-least-squares
tags:
  - degree/ms
  - formation/quaternary-sediments
  - location/eastern-province
  - location/saudi-arabia
  - technique/seismic-processing
  - technique/velocity-analysis
  - technique/dgps
  - technique/signal-processing
  - technique/non-linear-least-squares
  - theme/near-surface-geophysics
  - theme/seismology
  - terminology/anisotropy
  - terminology/petrophysics
  - terminology/elastic-wave-propagation
status: ingested
---

# INVESTIGATION OF TTI ANISOTROPY OF P-WAVE VELOCITIES IN SAND DUNES IN EASTERN SAUDI ARABIA

**Summary**: The thesis investigates the azimuthal anisotropy of P-wave velocity in a barchan sand dune in Eastern Saudi Arabia, modeled as a tilted transversely isotropic (TTI) medium. By deploying a circular seismic array and analyzing traveltimes, the study determines Thomsen parameters to characterize the weak anisotropy caused by dipping cross-strata.

---

## Research Problem

Sand dunes pose challenges for seismic imaging due to complex topography, internal structure, and high attenuation; specifically, the lack of azimuthal information in traditional data limits the understanding of anisotropic effects (HTI and TTI) in these environments.

## Objectives

- Investigate and test for the presence of TTI with azimuthal variation in sand dunes.
- Design a circular seismic survey geometry to capture data at 15-degree increments of azimuth.
- Process seismic data using a workflow that preserves azimuthal effects.
- Calculate P-wave velocities and explain trends using a TTI model.
- Estimate Thomsen parameters (epsilon and delta) in the dune.
- Investigate the azimuthal anisotropy of P-wave velocity in sand dunes

## Methods

The study utilized a circular seismic array with 24 geophones placed at 15-degree intervals on a 9m radius circle around a central source. A 2kg hammer and metal plate were used as the source. Data were recorded using a Geode seismograph. GPS coordinates from a Trimble R10+ DGPS were used to calculate precise offsets. Processing included applying gain, picking first arrivals (manually/automatically), and calculating P-wave velocities. Thomsen parameters were derived by fitting measured velocity-azimuth data to a TTI model using known values for incidence angle (71.33°), tilt of symmetry axis (30°), and average velocity along the symmetry axis (273.691 m/s).

## Data and Materials

20 shot gathers with 24 traces each (total 480 traces) from a circular array on a barchan sand dune; 24 geophones at 15-degree intervals; Trimble R10+ DGPS for positioning.

## Key Findings

- The measured velocity data showed a sinusoidal behavior with maximum velocity along an azimuth parallel to the slip face (cross-strata) of the dune. ([[2024-makki|Makki, 2024, p. 13]])
- The best-fit values for Thomsen parameters epsilon and delta were 0.035 and 0.005, respectively, confirming a weakly anisotropic TTI medium. ([[2024-makki|Makki, 2024, p. 13]])
- The orientation of the dune bedding was confirmed as NW-SE by comparing seismic results with field observations (the fastest velocities occurred in receiver pairs 8-20, 9-21, and 10-22). ([[2024-makki|Makki, 2024, p. 63]])
- The P-wave propagation velocity along the TTI symmetry axis was determined to be Vp0 = 273.691 m/s. ([[2024-makki|Makki, 2024, p. 73]])
- The depth of penetration (z) for the calculation of incidence angle was determined to be 1.52 m. ([[2024-makki|Makki, 2024, p. 69]])
- The Thomsen parameters were determined to be epsilon = 0.03461668 and delta = 0.00511634, indicating weak TTI anisotropy (epsilon < 0.1, delta < 0.1). ([[2024-makki|Makki, 2024, p. 73]])
- The prediction of P-wave velocity using the fitted Thomsen parameters resulted in a residual sum of squared errors of 1.67% and an RMSE of 3.594. ([[2024-makki|Makki, 2024, p. 75]])
- The study confirms that sand dunes can be viewed as a weak anisotropic medium, which affects P-wave velocities and impacts the quality of stacked seismic images in 3D data. ([[2024-makki|Makki, 2024, p. 77]])

## Limitations

Lack of borehole data in the study area required the use of theoretical models (Hertz-Mindlin and Gassmann approximations) to calculate P-wave velocity along the symmetry axis.

## Recommendations and Future Work

- Explore different seismic acquisition geometries to capture effects of both azimuth and offset.
- Repeat the experiment in different locations to determine if weak anisotropic behavior is a global phenomenon for sand dunes.
- Simulate results on synthetic datasets to control variables like the tilt of the symmetry axis.

## Related Concepts

- [[velocity-analysis]]
- [[signal-processing]]
- [[anisotropy]]
- [[petrophysics]]
- [[near-surface-geophysics]]
- [[eastern-province]]
- [[quaternary-sediments]]
- [[non-linear-least-squares]]
- [[elastic-wave-propagation]]
