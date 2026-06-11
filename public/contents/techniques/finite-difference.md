---
type: technique
title: "Finite Difference"
aliases:
  - "Finite Difference"
  - "FD"
canonical: true
equipment: "Not stated in source"
software: "Not stated in source"
output: "synthetic shot records (seismograms)"
tags:
  - technique/finite-difference
  - theme/seismic-processing
sources:
  - "raw/139504 - TOWARDS ACCURATE SEISMIC IMAGING USING PHASE SHIFT PLUS INTERPOLATION FOR VISCO-.pdf"
  - "raw/140553 - INVESTIGATION OF SEISMIC DATA AMPLIFICATION RESPONSE UNDER THE SAND DUNES OF RUB.pdf"
  - "raw/140641 - RELATION BETWEEN OFFSET AND VELOCITY DETERMINATION - APPLICATION ON A SYNTHETIC .pdf"
  - "raw/140670 - FULL WAVEFORM INVERSION FOR COMPLEX NEARSURFACE IMAGING USING SEG SEAM II SYNTHE.pdf"
  - "raw/142247 - SAND DUNE STATIC DELAY A DATA DRIVEN APPROACH AND ADJUSTMENT OF THE SAND CURVE.pdf"
status: active
last_updated: 2026-06-10
---

# Finite Difference

**Summary**: A numerical method used to solve partial differential equations for wave propagation.

---

## How It Is Used in the Thesis Collection

- [[2015-mohammed|Mohammed, 2015]] used finite difference modeling to generate synthetic shot records in an acoustic medium.

- [[2017-almarzooq|Almarzooq, 2017]] used finite-difference modeling to evaluate the performance of the proposed method and study sand dune effects.

- [[2018-abdulrahman|Abdulrahman, 2018]] used finite difference modeling via fdelmodc to generate synthetic seismic data from a viscoelastic model.

- [[2018-mohamed|Mohamed, 2018]] used finite difference forward modeling of acoustic to viscoelastic waves including multiples to enhance understanding of features and artifacts.

- [[2022-aljishi|AlJishi, 2022]] applied finite-difference methods to generate synthetic models of sand dune environments.

## Instruments and Software



- [[2017-almarzooq|Almarzooq, 2017]] used finite-difference modeling to evaluate the performance of the proposed method and study sand dune effects.

- [[2018-abdulrahman|Abdulrahman, 2018]] used finite difference modeling via fdelmodc to generate synthetic seismic data from a viscoelastic model.

- [[2018-mohamed|Mohamed, 2018]] used finite difference forward modeling of acoustic to viscoelastic waves including multiples to enhance understanding of features and artifacts.

- [[2022-aljishi|AlJishi, 2022]] applied finite-difference methods to generate synthetic models of sand dune environments.

## Typical Workflow



## Key Results and Findings

- The 2D wave equation was solved using a second-order approximation of the Laplacian operator. ([[2015-mohammed|Mohammed, 2015, p. 49]])

- The optimized finite-difference modeling scheme was used to validate the proposed methodology against synthetic data. ([[2017-almarzooq|Almarzooq, 2017, p. 45]])

- The method successfully generated a 1D/2D dataset that allowed for the comparison of restricted vs. unrestricted offset impacts. ([[2018-abdulrahman|Abdulrahman, 2018, p. 25]])

- Finite difference modeling was used to generate both acoustic and viscoelastic synthetic data for FWI testing. ([[2018-mohamed|Mohamed, 2018, p. 14]])

- Synthetic modeling using the finite-difference method allowed for the identification of events and analysis of their kinematic and dynamic behaviors without noise interference. ([[2022-aljishi|AlJishi, 2022, p. 46]])

## Methodological Variations Across Sources


## Technical Limitations and Open Questions


## Related Concepts

**Related Techniques**: 

**Applicable to Terminology**: 

**Used in Themes**: 
