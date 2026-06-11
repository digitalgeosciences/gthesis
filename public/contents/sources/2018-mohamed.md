---
type: source
id: "140670"
title: "FULL WAVEFORM INVERSION FOR COMPLEX NEAR-SURFACE IMAGING USING SEG SEAM II SYNTHETIC MODEL"
author: "Ali Mohamed"
year: 2018
department: "Geosciences"
degree: "MS"
supervisor: "Abdullatif Al-Shuhail"
committee_members:
  - "Stewart Greenhalgh"
  - "Sherif Hanafy"
source_file: "raw/140670 - FULL WAVEFORM INVERSION FOR COMPLEX NEARSURFACE IMAGING USING SEG SEAM II SYNTHE.pdf"
url: "https://eprints.kfupm.edu.sa/id/eprint/140670/"
study_area: "Arid desert environments in the Arabian Peninsula (specifically the eastern part of Saudi Arabia)"
keywords:
  - Full Waveform Inversion
  - Near-surface imaging
  - SEG SEAM Phase II
  - Acoustic FWI
  - Viscoelastic data
  - Reverse Time Migration
  - Surface Wave Inversion
  - Karst features
  - seismic data
  - near-surface complexity
  - velocity model
  - finite difference modeling
  - acoustic wave equation
  - cycle skipping
  - multi-scale approach
  - SEG SEAM II
  - Synthetic model
  - Velocity inversion
  - Seismic wave propagation
  - Viscoelastic media
  - Velocity modeling
  - RTM
techniques:
  - fwi
  - rtm
  - swi
  - finite-difference
  - ray-tracing
  - signal-processing
  - groundwater-modeling
  - acoustic-fwi
  - visco-acoustic-fwi
  - time-domain-finite-difference-solution
  - fdelmodc
  - makewave
  - surface-wave-inversion
  - well-log-analysis
  - line-search
  - gradient-conditioning
  - velocity-scanning
tags:
  - degree/ms
  - formation/umm-al-radhuma-formation
  - formation/rus-formation
  - formation/dammam-formation
  - formation/hadrukh-formation
  - formation/dam-formation
  - formation/hofuf-formation
  - location/saudi-arabia
  - location/rub-al-khali-basin
  - technique/seismic-inversion
  - technique/seismic-processing
  - technique/surface-wave-inversion
  - technique/finite-difference
  - technique/ray-tracing
  - technique/groundwater-modeling
  - technique/well-log-analysis
  - technique/velocity-analysis
  - theme/near-surface-geophysics
  - theme/seismic-imaging
  - theme/geophysics-general
  - terminology/cycle-skip
  - terminology/karst-hazards
  - terminology/acoustic-impedance
  - terminology/velocity-modeling
status: ingested
---

# FULL WAVEFORM INVERSION FOR COMPLEX NEAR-SURFACE IMAGING USING SEG SEAM II SYNTHETIC MODEL

**Summary**: The thesis investigates the application of acoustic Full Waveform Inversion (FWI) to resolve complex near-surface velocity structures in land seismic exploration. Using the SEG SEAM II synthetic model, it demonstrates that careful data conditioning and multi-scale strategies can successfully reconstruct karst features and high-resolution details even in viscoelastic media.

---

## Research Problem

Complex near-surface zones in arid regions, such as those in the Arabian Peninsula, contain Karst features and unconsolidated sediments that create significant velocity contrasts, anisotropy, and signal attenuation, complicating the imaging of deeper structures.

## Objectives

- Address geophysical challenges of seismic wave propagation in the Arid SEAM model using finite difference forward modeling.
- Review theory of seismic wave inversion and reverse time migration (RTM) to summarize state-of-the-art depth and velocity imaging.
- Examine acoustic FWI on two synthetic datasets created using acoustic and viscoelastic forward modeling codes.
- To more effectively characterize the near-surface zone using FWI in both its theoretical and practical components.
- To study the behavior of seismic wavefield for complex near-surface areas having geological heterogeneities and its impact on seismic wave propagation and subsurface imaging.
- To examine if Full Waveform Inversion can accurately reconstruct suitable models of small shallow geological features with strong velocity contrast, resulting in improved seismic subsurface imaging.
- Evaluate the impact of complex near-surface geology (Karst, high velocity contrast) on seismic wave propagation using ray tracing and finite difference modeling.
- Assess the effectiveness of different seismic modeling schemes (acoustic, elastic, viscoelastic) in representing real-world data characteristics.
- Develop a robust FWI workflow to reconstruct models of small, shallow geological features with strong velocity contrasts.
- Evaluate if acoustic FWI can reconstruct small Karst features and high-resolution details in the SEAM model before testing on complex viscoelastic wavefields.
- Determine the impact of data conditioning (removing surface waves, noise) on the success of acoustic FWI.
- Assess the effectiveness of multi-scale strategies and early arrival inversion to avoid local minima trapping.

## Methods

The study utilizes a finite difference modeling code for forward modeling and ray tracing. The FWI workflow includes gradient conditioning (Gaussian smoothing), line search methods to determine optimal step lengths, and multi-scale frequency band processing. Data conditioning involves removing surface waves, scattered shear waves, and random noise from the input shot gathers. Surface wave inversion is used to estimate near-surface velocities for the first few hundred meters. The study compares acoustic FWI results on both simple acoustic synthetic data and complex viscoelastic synthetic data (including multiples and noise).

## Data and Materials

The primary dataset is the Arid SEAM Phase II synthetic model, which includes a 10km x 10km area representing Arabian Peninsula geology. Two case studies were performed: Case 1 used acoustic synthetic data (no multiples/noise, 50Hz Ricker wavelet) and Case 2 used viscoelastic synthetic data (with multiples, noise, and a Klauder wavelet).

## Key Findings

- Acoustic FWI successfully reconstructed velocity images with small local anomalies and strong velocity contrast in the acoustic synthetic dataset. ([[2018-mohamed|Mohamed, 2018, p. 15]])
- Surface Wave Inversion (SWI) provided more accurate velocity at the top 200m, leading to a dramatic improvement in the subsurface RTM image. ([[2018-mohamed|Mohamed, 2018, p. 46]])
- Acoustic FWI successfully reconstructed small caves and karst geobodies and low velocity layers when applied to acoustic synthetic data. ([[2018-mohamed|Mohamed, 2018, p. 57]])
- The inclusion of multiple-rich viscoelastic data required seismic processing to eliminate waveforms that cannot be modeled by the acoustic engine before FWI application. ([[2018-mohamed|Mohamed, 2018, p. 15]])
- SWI helped FWI to estimate the wavelet accurately from first arrivals, avoiding cycle skipping and local minimum trapping in complex media. ([[2018-mohamed|Mohamed, 2018, p. 15]])
- The finite difference method is identified as a powerful and easy-to-implement tool for simulating seismic wave propagation in 2D and 3D environments. ([[2018-mohamed|Mohamed, 2018, p. 27]])
- Cycle skipping occurs when the time shift between observed and modeled data exceeds half a cycle of the typical wavelet, leading to local minimum trapping; this is mitigated by using a multi-scale approach (starting with low frequencies). ([[2018-mohamed|Mohamed, 2018, p. 34]])
- The Arid SEAM Phase II model provides a realistic representation of the Arabian Peninsula's tertiary rock system, including the UER formation (Dammam, Rus, and Umm er Radhuma) and overlying Miocene formations (Hadrukh, Dam, and Hofuf). ([[2018-mohamed|Mohamed, 2018, p. 37]])
- The inclusion of Karst features, wadis, and unconsolidated sediments in the near-surface creates strong velocity contrasts that generate significant signal scattering. ([[2018-mohamed|Mohamed, 2018, p. 38]])
- The Arid SEAM model is discretized into uniform 6.25-m blocks across a 10 km x 10 km area with 3.75 km depth. ([[2018-mohamed|Mohamed, 2018, p. 39]])
- Karst features (cavities filled with unconsolidated sands) produce large contrasts in seismic velocity, ranging from 2200 m/s to 5000 m/s. ([[2018-mohamed|Mohamed, 2018, p. 40]])
- The Makewave command was used to generate a Klauder wavelet with a flat amplitude spectrum from 3-20Hz and zero phase. ([[2018-mohamed|Mohamed, 2018, p. 41]])
- Ray tracing results showed that Karst bodies can dramatically change the behavior of wave paths, leading to complex illumination variations. ([[2018-mohamed|Mohamed, 2018, p. 47]])
- Finite difference modeling showed that viscoelastic models with free surface multiples correlate well with real seismic data by including absorption and scattering effects. ([[2018-mohamed|Mohamed, 2018, p. 53]])
- The study found that the presence of Karst causes significant signal scattering, resulting in undulations in first arrivals at specific locations. ([[2018-mohamed|Mohamed, 2018, p. 55]])

## Limitations

The Makewave source wavelet was limited to a maximum frequency of 20Hz due to computational costs associated with viscoelastic modeling. The initial FWI model required a high-quality starting model (close to the true model) and broad frequency/offset ranges to avoid cycle skipping.

## Recommendations and Future Work

Not stated in source

## Related Concepts

- [[seismic-inversion]]
- [[surface-wave-inversion]]
- [[finite-difference]]
- [[cycle-skip]]
- [[karst-hazards]]
- [[near-surface-geophysics]]
- [[seismic-imaging]]
- [[saudi-arabia]]
- [[umm-er-radhuma-formation]]
- [[rus-formation]]
- [[dammam-formation]]
- [[hadrukh-formation]]
- [[dam-formation]]
- [[hofuf-formation]]
- [[acoustic-impedance]]
- [[ray-tracing]]
- [[velocity-modeling]]
- [[seismic-processing]]
