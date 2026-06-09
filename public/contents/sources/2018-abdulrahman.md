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
  - velocity determination
  - short-offset assumption
  - synthetic seismic data
  - viscoelastic model
  - finite difference method
  - offset
  - Ghawar Field
techniques:
  - su-seismic-unix
  - fdelmodc
  - digitizeit
  - finite-difference-modeling
  - t2-gain-method
  - fourier-transform
  - band-pass-filter
  - deconvolution
  - cdp-sorting
  - velocity-analysis
  - dix-formula
  - seismic-unix
tags:
  - degree/ms
  - formation/hadrukh-formation
  - formation/dammam-formation
  - formation/rus-formation
  - formation/umm-al-radhuma-formation
  - formation/aruma-formation
  - formation/wasia-formation
  - formation/shuaiba-formation
  - formation/hith-anhydrite
  - formation/arab-formation
  - formation/hanifa-formation
  - formation/dhruma-formation
  - formation/marrat-formation
  - formation/minjur-sandstone
  - formation/jilh-formation
  - formation/sudair-formation
  - formation/khuff-formation
  - formation/unayzah-formation
  - formation/qusaiba-member
  - formation/saq-formation
  - location/ghawar-field
  - location/saudi-arabia
  - technique/finite-difference-modeling
  - technique/well-log-analysis
  - technique/seismic-processing
  - technique/velocity-analysis
  - theme/geophysics-general
  - theme/seismology
  - theme/applied-geophysics
  - theme/seismic-imaging
  - terminology/velocity-analysis
  - terminology/short-offset-assumption
  - terminology/short-offset
  - terminology/kern-analysis
status: ingested
---

# RELATION BETWEEN OFFSET AND VELOCITY DETERMINATION - APPLICATION ON A SYNTHETIC SEISMIC DATA SET FROM NORTHERN GHAWAR FIELD, SAUDI ARABIA

**Summary**: The thesis investigates the impact of offset on velocity analysis in the Northern Ghawari Field using a synthetic seismic dataset. By comparing results from restricted (short-offset) and unrestricted data, it concludes that the short-offset assumption is not strictly necessary for accurate velocity estimation in this specific area.

---

## Research Problem

The core problem is determining whether the standard 'short-offset' assumption (where offset is significantly smaller than depth) is necessary or if larger offsets can be used to accurately determine seismic velocities in the Gh100/Biyadh area of the Ghawar Field, where velocity changes may be gradual.

## Objectives

- Investigate the effect of offset on velocity analysis in a specific area of Ghawar Field.
- Generate synthetic seismic data using a viscoelastic depth model and finite difference method.
- Estimate the interval velocity of a key layer (Biyadh) from processed synthetic data.
- Quantify the errors in velocity estimation when offset is restricted versus when it is unrestricted.
- Compare long-offset and short-offset data processing for determining seismic velocities.
- Evaluate the accuracy of interval velocity calculations using the Dix formula under both offset conditions.

## Methods

The study utilized synthetic 2D viscoelastic seismic data generated from a model including Vp, Vs, Qp, Qs, and density. The data were processed using Seismic Unix through several stages: T2 gain application (0.5s gate, power of 2), Fourier Transform to identify frequency content, band-pass filtering (10-55 Hz), spiking deconvolution (0.004s prediction lag, 0.2s operator length, 0.1% prewhitening), and CDP sorting. Velocity analysis was performed using the Velan script in Seismic Unix, where velocity spectra were analyzed for both full offset and restricted short-18000m offsets. The Dix formula was then applied to calculate interval velocities from stacking velocities at the top and bottom of the Biyadh formation.

## Data and Materials

A 2D viscoelastic depth model including parameters for Vp, Vs, Qp, Qs, and density. A synthetic seismic dataset generated via finite difference modeling. Specific focus on the Biyadh layer (197m thick, 4045 m/s).

## Key Findings

- The difference in percentage between the average error in velocity estimation when offset is unrestricted versus when it is restricted is only 2.893%. ([[2018-abdulrahman|Abdulrahman, 2018, p. 9]])
- The Biyadh layer was identified as a key target with a thickness of 197 meters and a velocity of 4045 m/s. ([[2018-abdulrahman|Abdulrahman, 2018, p. 22]])
- The study concluded that there is no need to honor the short-offset assumption when working on this particular area of Ghawar Field. ([[2018-abdulrahman|Abdulrahman, 2018, p. 10]])
- The average velocity error for the long-offset case was 5.116%, while the short-offset case was 4.968%, showing a difference of only 2.893% between the two methods. ([[2018-abdulrahman|Abdulrahman, 2018, p. 49]])
- The median velocity error for long-offset was 3.826% and for short-offset was 4.734%, indicating both methods are relatively accurate for this specific area. ([[2018-abdulrahman|Abdulrahman, 2018, p. 49]])
- The study concluded that, contrary to common theory, there is no strict need to honor the short-offset assumption in the Ghawar Field area studied because velocity changes gradually from surface to Biyadh. ([[2018-abdulrahman|Abdulrahman, 2018, p. 49]])
- While both methods were accurate for the Biyadh formation, shorter offsets provided better semblance and easier picking for deeper layers due to better hyperbolic fitting with less noise. ([[2018-abdulrahman|Abdulrahman, 2018, p. 49]])
- The maximum error in the long-offset case (14.46%) was higher than the short-offset case (9.91%), but minimum errors were similar (0.391% vs 0.329%). ([[2018-abdulrahman|Abdulrahman, 2018, p. 49]])
- The synthetic data included a 25 Hz dominant frequency and was subjected to Gaussian noise with a standard deviation of 10%. ([[2018-abdulrahman|Abdulrahman, 2018, p. 29]])

## Limitations

Potential sources of error include: (1) the use of a viscoelastic dataset with a conventional processing workflow that might not be optimal for complex data; (2) potential interference from shear waves in P-wave analysis; (3) frequency changes due to absorption over time; and (4) the impact of added noise on synthetic results.

## Recommendations and Future Work

Future studies should: 1. Regenerate data as acoustic instead of viscoelastic. 2. Use 3D synthetics. 3. Test other velocity analysis methods like constant-velocity stacks (CVS). 4. Test on real data with well-log information. 5. Calculate errors for more layers and areas in Ghawar Field. 6. Implement advanced prestack noise removal.

## Related Concepts

- [[finite-difference-modeling]]
- [[seismic-processing]]
- [[velocity-analysis]]
- [[short-offset-assumption]]
- [[ghawar-field]]
- [[seismology]]
- [[short-offset]]
- [[kern-analysis]]
- [[shuaiba-formation]]
- [[seismic-imaging]]
