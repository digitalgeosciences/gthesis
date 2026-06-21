---
type: source
id: "140641"
title: "RELATION BETWEEN OFFSET AND VELOCITY DETERMINATION - APPLICATION ON A SYNTHETIC SEISMIC DATA SET FROM NORTHERN GHAWAR FIELD, SAUDI ARABIA"
author: "Khalid Abdulrahman"
year: 2018
department: "Geosciences"
degree: "MS"
supervisor: "Abdullatif Al-Shuhail"
committee_members:
  - "Abdullatif Al-Shuhail"
  - "Sanlinn Isma'il Kaka"
  - "Khalid Alramadan"
source_file: "raw/140641 - RELATION BETWEEN OFFSET AND VELOCITY DETERMINATION - APPLICATION ON A SYNTHETIC .pdf"
url: "https://eprints.kfupm.edu.sa/id/eprint/140641/"
study_area: "Northern Ghawar Field, Saudi Arabia"
keywords:
  - seismic data
  - velocity analysis
  - short-offset assumption
  - synthetic seismic data
  - Ghawar Field
  - viscoelastic model
techniques:
  - finite-difference-modeling
  - seismic-unix
  - t2-gain
  - fourier-transform
  - band-pass-filter
  - deconvolution
  - cdp-sorting
  - velocity-spectrum
  - dix-formula
tags:
  - degree/ms
  - formation/biyadh-formation
  - location/ghawar-field
  - technique/finite-difference-modeling
  - technique/seismic-processing
  - technique/velocity-analysis
  - technique/signal-processing
  - theme/geophysics-general
  - theme/seismic-interpretation
  - terminology/short-offset-assumption
  - terminology/velocity-modeling
status: ingested
---

# RELATION BETWEEN OFFSET AND VELOCITY DETERMINATION - APPLICATION ON A SYNTHETIC SEISMIC DATA SET FROM NORTHERN GHAWAR FIELD, SAUDI ARABIA

**Summary**: The thesis investigates the impact of offset on velocity analysis in the Northern Ghawar Field using a viscoelastic synthetic seismic dataset. It compares interval velocity estimations from long and short offsets, concluding that the short-offset assumption is not strictly necessary for the Biyadh formation due to gradual velocity changes.

---

## Research Problem

The determination of accurate interval velocities in seismic processing often relies on the 'short-offset' assumption (X < H) to minimize errors. This study addresses whether this constraint is necessary when analyzing specific formations, like the Biyadh, in the Northern Ghawar Field.

## Objectives

- Investigate the effect of offset on velocity analysis in a specific area of Ghawar Field.
- Generate viscoelastic synthetic seismic data using a finite difference model.
- Estimate and compare interval velocities for the Biyadh layer using both restricted (short-offset) and unrestricted (long-offset) data.
- Quantify the errors in velocity estimation between these two cases.

## Methods

The study utilized a 2D viscoelastic model to generate synthetic seismic data via the 'fdelmodc' finite difference method. The resulting data were processed using Seismic Unix (SU), involving steps such as T2 gain, Fourier Transform for frequency analysis, band-pass filtering to remove ground roll, spiking deconvolution, and CDP sorting. Velocity estimation was performed using a velocity spectrum approach on CDP 180000, where stacking velocities were picked from the spectrum and then used in the Dix formula to calculate interval velocities.

## Data and Materials

A synthetic seismic dataset (7.188 GB) with 1,178,880 traces was generated based on a 2D viscoelastic model of the Northern Ghawar Field. The study specifically analyzed the Biyadh formation at a depth of approximately 950m.

## Key Findings

- The average error in velocity estimation for the long-offset case was 5.116%, while the short-offset case was 4.968%. ([[2018-abdulrahman|Abdulrahman, 2018, p. 49]])
- The difference in percentage between the average errors of unrestricted and restricted offset cases is only 2.893%. ([[2018-abdulrahman|Abdulrahman, 2018, p. 10]])
- The Biyadh formation was identified as a high-velocity (4045 m/s) and relatively thick layer (197 meters). ([[2018-abdulrahman|Abdulrahman, 2018, p. 22]])
- page_number_not_applicable_for_table_data ([[2018-abdulrahman|Abdulrahman, 2018]])

## Limitations

The study used a viscoelastic dataset but only analyzed P-waves, potentially ignoring shear wave interference. Additionally, the synthetic data included added noise and potential frequency shifts due to absorption were not fully accounted for in the processing workflow.

## Recommendations and Future Work

- Regenerate the data set as acoustic instead of viscoelastic.
- Use 3D synthetics.
- Test other velocity analysis methods like constant-velocity stacks (CVS).
- Validate findings on real data with well-log information.
- Analyze other layers and areas in Ghawar Field.

## Related Concepts

- [[finite-difference-modeling]]
- [[velocity-analysis]]
- [[short-offset-assumption]]
- [[velocity-modeling]]
- [[ghawar-field]]
- [[biyadh-formation]]
- [[seismic-interpretation]]
