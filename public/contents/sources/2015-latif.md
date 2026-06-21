---
type: source
id: "139522"
title: "GROUND MOTION PREDICTION EQUATIONS (GMPES) FOR SUBDUCTION-ZONE EARTHQUAKES IN JAVA ISLAND, INDONESIA"
author: "Abdul Latif"
year: 2015
department: "Geosciences"
degree: "MS"
supervisor: "SanLinn Isma'il Kaka"
committee_members:
  - "Abdellatif Al-shuhail"
  - "Michael Kaminski"
source_file: "raw/139522 - GROUND MOTION PREDICTION EQUATIONS (GMPES) FOR SUBDUCTION-ZONE EARTHQUAKES IN JA.pdf"
url: "https://eprints.kfupm.edu.sa/id/eprint/139522/"
study_area: "Java Island, Indonesia (subduction-zone earthquakes)"
keywords:
  - Ground Motion Prediction Equations (GMPEs)
  - subduction-zone earthquakes
  - peak ground acceleration (PGA)
  - response spectral acceleration (PSA)
  - Indonesia
  - Java Island
  - Ground Motion Prediction Equations
  - GMPEs
  - Peak Ground Acceleration
  - PGA
  - Response Spectral Acceleration
  - PSA
  - Probabilistic Seismic Hazard Analysis
techniques:
  - least-squares-fitting
  - regression-analysis
  - signal-processing
tags:
  - degree/ms
  - location/java-island
  - location/indonesia
  - technique/least-squares-fitting
  - technique/regression-analysis
  - technique/signal-processing
  - theme/ground-motion-prediction
  - theme/earthquake-seismology
  - terminology/ground-motion-prediction
  - terminology/earthquake-seismology
status: ingested
---

# GROUND MOTION PREDICTION EQUATIONS (GMPES) FOR SUBDUCTION-ZONE EARTHQUAKES IN JAVA ISLAND, INDONESIA

**Summary**: The thesis develops specific ground motion prediction equations (GMPEs) for peak ground acceleration (PGA) and response spectral acceleration (PSA) at frequencies of 1, 2, and 5 Hz for subduction-zone earthquakes in Java Island. It utilizes a dataset of 1,574 strong-motion recordings from 118 earthquakes to create models that outperform existing global models like Youngs et al. (1997) and Atkinson and Boore (2003) for moderate events.

---

## Research Problem

There are no region-specific ground-motion prediction equations (GMPEs) for subduction-zone earthquakes in Java Island, leading to unreliable predictions using existing global models, especially for moderate magnitude events (M ≤ 6.0).

## Objectives

- Perform regression analyses using the least square method to develop GMPEs for peak ground acceleration (PGA)
- Develop GMPEs for 5% damped response spectral acceleration (SA) at frequencies of 1, 2, and 5 Hz on rock (NEHRP B)
- Develop specific models for both interface and in-slab subduction zone earthquakes
- Compare the newly developed equations with existing global models (Youngs et al., 1997; Atkinson and Boore, 2003)
- Develop empirical GMPEs for peak ground acceleration (PGA) and response spectral acceleration (sPSA) at frequencies of 1, 2, and 5 Hz.
- Validate the developed equations using available recorded data.

## Methods

The study follows an 8-step methodology: 1. Collecting a database of strong-motion recordings from BMKG's network for subduction zone earthquakes in south Java Island (2008-2013). 2. Determining local site conditions using $V_{S30}$ data from BMKG and USGS maps. 3. Applying ASCE amplification factors to convert surface records to bedrock values (NEHRP B). 4. Converting various magnitude scales ($m_B$, $m_b$, $M_L$) to moment magnitude (M) using equations by Abe, Scordilis, and Irsyam. 5. Determining rupture distance ($R_{rup}$) using Wells and Coppersmith (1994) equations for fault length and area. 6. Classifying events into interface and in-slab types based on depth and mechanism. 7. Fitting the data using least squares regression to determine coefficients for GMPEs. 8. Comparing results against Youngs et al. (1997) and Atkinson and Boore (2003).

## Data and Materials

The dataset includes 1,574 strong-motion recordings from 118 subduction-zone earthquakes of moment magnitude (M) 4.4 to 7.0 occurring between 2008 and 2013. Data sources include BMKG accelerograph records, GCMT (Harvard CMT), ISC, and NEIC catalogs.

## Key Findings

- The dataset includes 1,574 strong-motion recordings from 118 subduction-zone earthquakes of moment magnitude (M) 4.4 to 7.0. ([[2015-latif|Latif, 2015, p. 21]])
- For interface events, the distribution of the dataset in the regression analysis covers 4.4 - 6.7 for moment magnitude, 10 - 49.7 km for focal depth, and 54 - 1,926 km for rupture distance. ([[2015-latif|Latif, 2015, p. 70]])
- The resulting predictions are generally lower than those predicted by Youngs et al. (1997) and significantly higher for moderate events than those of Atkinson and Boore (2003). ([[2015-latif|Latif, 2015, p. 21]])
- The study determined the geometric spreading coefficient (S) using data at 1 Hz, where S = 10^(2.6891 - 0.6804M) for interface events and S = 10^(-1.5296 - 0.0297M) for in-slab events. ([[2015-latif|Latif, 2015, p. 65]])
- For in-slab events, the fitting curve for linear vs quadratic terms is almost the same, but the linear term was selected as the final regression function. ([[2015-latif|Latif, 2015, p. 66]])
- The regression coefficients for PGA at 1 Hz for interface events were determined as: C1=-2.0827, C2=0.3826, C3=0.0055, C4=-0.0015, C5=2.6891, C6=-0.6804 with a standard deviation of 0.6169. ([[2015-latif|Latif, 2015, p. 71]])
- The majority of average residuals were near zero for the distance range between 100 and 700 km from the fault, indicating that ground-motion values are better estimated at far distances by the developed relations. ([[2015-latif|Latif, 2015, p. 72]])
- Predicted PGA values for both interface and in-slab events using the new equations were significantly lower than those predicted by Youngs-97 but higher than those predicted by AB-2003. ([[2015-latif|Latif, 2015, p. 80]])
- PSA for both interface and in-slab events predicted by the study's relations agreed reasonably well with observed data across all magnitudes and frequencies. ([[2015-latif|Latif, 2015, p. 80]])

## Limitations

The study notes that existing models (Youngs et al., 1997 and Atkinson and Boore, 2003) were found to be unreliable in predicting previously recorded moderate subduction events in Java Island, particularly for moderate events (M ≤ 6.0).

## Recommendations and Future Work

- Refine site amplification factors throughout the region.
- Test relations with a larger dataset from neighboring countries including more strong-motion recordings.
- Develop new seismic hazard maps for Java Island using these specific GMPEs.
- Revise the Indonesian earthquake resistant building code (SNI 1726-2012) using the new region-specific GMPEs.

## Related Concepts

- [[least-squares-fitting]]
- [[regression-analysis]]
- [[ground-motion-prediction]]
- [[earthquake-seismology]]
- [[java-island]]
