---
type: source
id: "141628"
title: "Managing depth to basement uncertainty by integrating magnetic and seismic data"
author: "Tamer Abdallah"
year: 2020
department: "Geosciences"
degree: "MS"
supervisor: "Abdullatif Al-shuhail"
committee_members:
  - "Ahmed Salem"
  - "Khalid A. H. Al-Ramadan"
source_file: "raw/141628 - Managing depth to basement uncertainty by integrating magnetic and seismic data.pdf"
url: "https://eprints.kfupm.edu.sa/id/eprint/141628/"
study_area: "HESS dataset (synthetic data)"
keywords:
  - depth to basement
  - magnetic data
  - seismic data
  - velocity model
  - pre-stack depth migration
  - salt body
  - uncertainty
  - sub-salt structure
techniques:
  - pre-stack-depth-migration
  - magnetic-method
  - werner-method
  - spectral-analysis
  - forward-modeling
  - well-log-analysis
  - velocity-analysis
  - seismic-interpretation
  - seismic-inversion
  - petrophysics
tags:
  - degree/ms
  - location/saudi-arabia
  - technique/pre-stack-depth-migration
  - technique/magnetic-method
  - technique/werner-method
  - technique/spectral-analysis
  - technique/forward-modeling
  - technique/velocity-analysis
  - technique/seismic-interpretation
  - technique/seismic-inversion
  - theme/geophysics-general
  - theme/seismic-imaging
  - theme/uncertainty-quantification
  - terminology/velocity-modeling
  - terminology/uncertainty-quantification
status: ingested
---

# Managing depth to basement uncertainty by integrating magnetic and seismic data

**Summary**: The thesis investigates the integration of magnetic data with seismic data to reduce uncertainty in determining depth to basement, particularly in complex environments like sub-salt structures. It proposes a workflow where magnetic-derived depth estimates act as 'pseudo-wells' to constrain velocity model building for pre-stack depth migration (PSDM).

---

## Research Problem

Imaging the basement is challenging due to lack of well penetration and complex overburden structures (e.g., salt bodies) that cause ray path distortion and poor illumination, leading to high uncertainty in depth-to-basement estimation.

## Objectives

- Develop a practical workflow for building an earth velocity model by integrating seismic and magnetic methods.
- Utilize magnetic data to provide additional quality control and constraint for the pre-stack depth migration (PSDM) process.
- Reduce uncertainty associated with depth-to-basement determination in areas where well data is scarce, such as sub-salt structures.
- Develop a workflow to integrate magnetic and seismic data for better depth-to-basement determination.
- Utilize magnetic-derived depth estimates as 'pseudo-wells' to constrain seismic velocity models.
- Validate the proposed methodology using a synthetic dataset (HESS) to evaluate its ability to reduce uncertainty in sub-salt structures.

## Methods

The study utilizes a 2D synthetic dataset (HESS model) to test the proposed workflow. The methodology involves: 1) Using 'Sedimentary Flood' to build an initial sedimentary velocity model; 2) Applying 'Salt Flood' to define salt body velocities; 3) Generating equivalent magnetic data for the HESS model using forward modeling; 4) Estimating basement depth from this synthetic magnetic data using the Werner method and Spectral analysis; 5) Using these magnetic-derived depths as 'pseudo-wells' or vertical constraints to validate and refine the velocity model during iterative salt flood migrations.

## Data and Materials

The study utilizes the HESS dataset, which includes: 720 shots with 30m spacing; 3617 CDPs; a sampling rate of 6ms; and a trace length of 7,992 ms. Synthetic magnetic data was generated using forward modeling for the sediment/basement interface.

## Key Findings

- The integration of magnetic data provides a qualitative means of improving velocity model accuracy by providing depth-to-basement estimates that function as correlating information to complement gather flatness. ([[2020-abdallah|Abdallah, 2020, p. 15]])
- Magnetic methods can provide a depth-to-basement estimate within a 5% error range at a given depth, which serves as a constraint for velocity model building. ([[2020-abdallah|Abdallah, 2020, p. 16]])
- The sedimentary flood technique allows the construction of an initial velocity model by masking salt influence and interpolating with sedimentary velocities. ([[2020-abdallah|Abdallah, 2020, p. 41]])
- Salt-related features in magnetic data can be identified as distinct surfaces of susceptibility, where sedimentary rocks are typically low in magnetism compared to basement rocks. ([[2020-abdallah|Abdallah, 2020, p. 22]])
- The Werner method provides a solution for the horizontal location and depth to basement by moving a window along an anomaly profile. ([[2020-abdallah|Abdallah, 2020]])
- page ([[2020-abdallah|Abdallah, 2020]])
- The Werner method provided a depth-to-basement estimate of 6300 m with an uncertainty range of 300m (approx. 5%). ([[2020-abdallah|Abdallah, 2020, p. 72]])
- Spectral analysis yielded a depth-to-basement estimation of 6600 m. ([[2020-abdallah|Abdallah, 2020, p. 70]])
- The uncertainty range for the basement based on magnetic methods was determined to be between 6300m and 6600m. ([[2020-abdallah|Abdallah, 2020, p. 72]])
- A salt velocity of 4525 m/s was identified as the optimal model, producing flat gathers at both the base-salt and basement horizons. ([[2020-abdallah|Abdallah, 2020, p. 79]])
- The proposed methodology achieved an uncertainty of less than 5% (300m) at a depth of 6600 m for the basement. ([[2020-abdallah|Abdallah, 2020, p. 85]])

## Limitations

The study used synthetic data, which may not fully replicate the complexities of real-world noise and multi-path interference. Additionally, magnetic depth determination can be affected by local metamorphic or igneous intrusions.

## Recommendations and Future Work

Future work should involve testing the workflow on a real dataset to confirm its practical application in industrial exploration. Advancements in optically pumped magnetometers and automated data collection (drones/AUVs) are expected to further improve magnetic survey resolution.

## Related Concepts

- [[seismic-inversion]]
- [[magnetic-method]]
- [[velocity-modeling]]
- [[uncertainty-quantification]]
- [[seismic-imaging]]
- [[saudi-arabia]]
