---
type: technique
title: "Seismic Inversion"
aliases:
  - "model-based inversion"
  - "impedance inversion"
canonical: true
equipment: "Not stated in source"
software: "Not stated in source"
output: "3D acoustic impedance volume"
tags:
  - technique/seismic-inversion
  - theme/reservoir-characterization
sources:
  - "raw/10010 - An integrated geological modeling of the Arab-D reservoir, Uthmaniyah area Ghawa.pdf"
  - "raw/139588 - LOG POROSITY AND LITHOLOGY PREDICTION FROM SEISMIC DATA FRONTIER AND TENSLEEP FO.pdf"
  - "raw/140062 - Characterizing fluid contacts from seismic data by joint inversion of Acoustic v.pdf"
  - "raw/140670 - FULL WAVEFORM INVERSION FOR COMPLEX NEARSURFACE IMAGING USING SEG SEAM II SYNTHE.pdf"
  - "raw/141361 - Rock Physics Modeling and Inversion in Glacial Ordovician Reservoirs.pdf"
  - "raw/141628 - Managing depth to basement uncertainty by integrating magnetic and seismic data.pdf"
  - "raw/142585 - Inversion of Vertical Seismic Profiling (VSP) Data Via Consecutive Neural Networ.pdf"
  - "raw/143219 - SUBDUCTING SLABS BENEATH SULAWESI, INDONESIA NEW EVIDENCE FROM TELESEISMIC P-WAV.pdf"
status: active
last_updated: 2026-06-20
---

# Seismic Inversion

**Summary**: The process of converting seismic reflection data into a volume of rock properties, such as acoustic impedance.

---

## How It Is Used in the Thesis Collection

- [[2002-ibrahim|Ibrahim, 2002]] used seismic-inversion to construct a 3D impedance model for the Arab-D reservoir.

- [[2015-fuad|Fuad, 2015]] applied colored inversion to derive acoustic impedance from 3D seismic data.

- [[2016-ali|Ali, 2016]] used joint inversion of acoustic velocity and impedance to identify pore fluids.

- [[2018-mohamed|Mohamed, 2018]] used FWI to reconstruct high-resolution velocity models from both acoustic and viscoelastic synthetic data.

- [[2019-al-dawood|Al-Dawood, 2019]] applied seismic-inversion to predict porosity and gas saturation from both real and synthetic well logs.

- [[2020-abdallah-2|Abdallah, 2020]] used pre-stack depth migration (PSDM) to build and refine the velocity model for sub-salt imaging.

- [[2023-almarzooq|Almarzooq, 2023]] investigated the use of deep learning to perform seismic inversion on VSP corridor stacks.

- [[2025-kesumastuti|Kesumastuti, 2025]] applied iterative non-linear tomography to invert travel-time residuals into a 3D velocity structure.

## Instruments and Software



- [[2015-fuad|Fuad, 2015]] applied colored inversion to derive acoustic impedance from 3D seismic data.

- [[2016-ali|Ali, 2016]] used joint inversion of acoustic velocity and impedance to identify pore fluids.

- [[2018-mohamed|Mohamed, 2018]] used FWI to reconstruct high-resolution velocity models from both acoustic and viscoelastic synthetic data.

- [[2019-al-dawood|Al-Dawood, 2019]] applied seismic-inversion to predict porosity and gas saturation from both real and synthetic well logs.

- [[2020-abdallah-2|Abdallah, 2020]] used pre-stack depth migration (PSDM) to build and refine the velocity model for sub-salt imaging.

- [[2023-almarzooq|Almarzooq, 2023]] investigated the use of deep learning to perform seismic inversion on VSP corridor stacks.

- [[2025-kesumastuti|Kesumastuti, 2025]] applied iterative non-linear tomography to invert travel-time residuals into a 3D velocity structure.

## Typical Workflow



## Key Results and Findings

- Model-based inversion was chosen because it allows for resolution beyond the seismic band by utilizing high-resolution well logs and provides a result consistent with the geological model. ([[2002-ibrahim|Ibrahim, 2002, p. 42]])

- Colored Inversion successfully transformed the spectrum of average seismic traces to match a fitted smooth curve representing the average reflectivity log. ([[2015-fuad|Fuad, 2015, p. 24]])

- Inversion of AI, velocity, density, and modulus successfully identified the transition between gas/oil and brine. ([[2016-ali|Ali, 2016, p. 52]])

- FWI successfully reconstructed small Karst structures at very shallow depth when integrated with a multi-scale approach. ([[2018-mohamed|Mohamed, 2018, p. 69]])

- In AI inversion for well A, the result followed the same trend as the log at the top target. ([[2019-al-dawood|Al-Dawood, 2019, p. 85]])

- The iterative PSDM approach allowed for the selection of an optimal salt velocity (4525 m/s) that produced flat gathers at both base-salt and basement horizons. ([[2020-abdallah-2|Abdallah, 2020, p. 79]])

- A consecutive neural network architecture outperformed other models for this specific task. ([[2023-almarzooq|Almarzooq, 2023, p. 126]])

- The use of multi-stage FMM and grid-based parameterization allowed for robust mapping of high-velocity anomalies. ([[2025-kesumastuti|Kesumastuti, 2025, p. 35]])

## Methodological Variations Across Sources


## Technical Limitations and Open Questions


## Related Concepts

**Related Techniques**: 

**Applicable to Terminology**: 

**Used in Themes**: 
