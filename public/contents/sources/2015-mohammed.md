---
type: source
id: "139504"
title: "TOWARDS ACCURATE SEISMIC IMAGING USING PHASE SHIFT PLUS INTERPOLATION FOR VISCO-ACOUSTIC MEDIA."
author: "Yahiya Naveed Mohammed"
year: 2015
department: "Geosciences"
degree: "MS"
supervisor: "Mousa A Wail"
committee_members:
  - "Abdallatif A Al-Shuhail"
  - "Zerguine M. Azzedine"
source_file: "raw/139504 - TOWARDS ACCURATE SEISMIC IMAGING USING PHASE SHIFT PLUS INTERPOLATION FOR VISCO-.pdf"
url: "https://eprints.kfupm.edu.sa/id/eprint/139504/"
study_area: "Marmousi model (standard 2D seismic dataset)"
keywords:
  - Seismic imaging
  - Phase Shift plus Interpolation (PSPI)
  - Visco-acoustic medium
  - Prestack depth imaging
  - Wavefield extrapolator
  - Absorption compensation
  - SENSE
  - Spectral entropy
  - Spatial entropy
  - Curvelet features
  - Prestack imaging
  - Poststack imaging
  - Finite Difference modeling
  - absorption
  - dispersion
  - quality factor (Q)
  - image quality assessment (IQA)
  - Visco-acoustic media
techniques:
  - phase-shift-plus-interpolation-pspi
  - fourier-transform
  - simulation
  - sense
  - curvelets
  - pspi
  - finite-difference
  - cross-correlation
  - deconvolution
  - groundwater-modeling
  - q-filter
  - matlab
  - machine-learning-geoscience
  - svr
  - libsvm
  - curvelet-transform
  - sseq
tags:
  - degree/ms
  - location/saudi-arabia
  - technique/pspi
  - technique/seismic-processing
  - technique/simulation
  - technique/finite-difference
  - technique/groundwater-modeling
  - technique/matlab
  - technique/machine-learning-geoscience
  - technique/svr
  - technique/psi
  - technique/seismic-imaging
  - theme/seismic-imaging
  - theme/geophysics-general
  - theme/petrophysics
  - terminology/visco-acoustic
  - terminology/spatial-entropy
  - terminology/quality-assessment
  - terminology/imaging-condition
  - terminology/visco-acoustic-medium
  - terminology/quality-factor
  - terminology/spectral-entropy
  - terminology/image-quality-assessment
status: ingested
---

# TOWARDS ACCURATE SEISMIC IMAGING USING PHASE SHIFT PLUS INTERPOLATION FOR VISCO-ACOUSTIC MEDIA.

**Summary**: The thesis investigates the improvement of seismic imaging in visco-acoustic media by modifying the Phase Shift plus Interpolation (PSPI) algorithm to account for absorption and dispersion. It also proposes an objective, non-reference Image Quality Assessment (IQA) framework based on spatial and spectral entropies to evaluate seismic image quality.

---

## Research Problem

Seismic waves are attenuated and dispersed in visco-acoustic media due to factors like spherical divergence and friction, leading to poor resolution in standard imaging techniques. The study addresses the need for a robust migration method that accounts for these effects while providing a means to objectively assess image quality.

## Objectives

- Develop a modified PSPI technique that incorporates a visco-acoustic model to compensate for absorption and dispersion.
- Derive wavefield extrapolators in the frequency-wavenumber (f-k) domain to account for attenuation losses.
- Evaluate the performance of different imaging techniques using objective, non-reference quality assessment methods.
- Evaluate the Phase Shift plus Interpolation (PSPI) technique for poststack imaging.
- Implement PSPI for prestack imaging to handle complex structures like salt domes and faults.
- Model seismic wave propagation in an acoustic medium using finite difference methods.
- Address the limitations of standard migration by incorporating visco-acoustic considerations.
- Modify the PSPI algorithm to incorporate compensation for absorption in visco-acoustic media.
- Evaluate the performance of visco-acoustic PSPI against standard acoustic PSPI using the Marmousi dataset.
- Develop an objective, non-reference Image Quality Assessment (IQA) method based on spatial and spectral entropies to evaluate seismic image quality.
- Modify the PSPI algorithm to accommodate attenuation by incorporating a Q-factor into the wavefield extrapolator.
- Evaluate the performance of modified PSPI on standard datasets (SEG/EAGE and Marmousi).
- Develop and test non-reference image quality assessment (IQA) methods, specifically SSEQ and curvelet features, to evaluate seismic images.

## Methods

The study utilizes the Phase Shift plus Interpolation (PSPI) technique for prestack depth imaging. To account for visco-acoustic effects, a Q-factor is introduced into the wavefield extrapolator to compensate for amplitude loss and frequency changes in both directions. For image quality assessment, two methods are used: SSEQ (based on spatial and spectral entropy) and curvelet features. Curvelet features involve transforming 256x256 blocks into 5 layers of coefficients across different scales, followed by fitting an asymmetric generalized Gaussian distribution (AGGD) to the log-magnitude of these coefficients. A Support Vector Machine (SVM) via the LIBSVM package is used to train and test the IQA models.

## Data and Materials

The study uses the Marmousi model for poststack imaging evaluation and SEG/EAGE synthetic datasets for prestack imaging in visco-acoustic media. The research also utilizes a set of standard seismic images (including Lemke, POCS, and Taylor) as comparison cases for quality assessment.

## Key Findings

- The inclusion of the Q-factor in wavefield extrapolation allows for the compensation of absorption and dispersion effects in visco-acoustic media. ([[2015-mohammed|Mohammed, 2015, p. 13]])
- A 'trivial' cosine transform applied to non-compensating operators in the f-k domain effectively compensates for attenuation losses, increasing spatial resolution. ([[2015-mohammed|Mohammed, 2015, p. 13]])
- Non-reference assessment methods based on spatial and spectral entropy (SSEQ) provide a way to evaluate image quality without a reference image. ([[2015-mohammed|Mohammed, 2015, p. 14]])
- Curvelet features can also be used as an alternative method for objective, non-reference image quality assessment. ([[2015-mohammed|Mohammed, 2015, p. 19]])
- PSPI allows for lateral velocity changes by using multiple reference velocities to interpolate the wavefield in the frequency-wavenumber domain. ([[2015-mohammed|Mohammed, 2015, p. 32]])
- The complexity of PSPI is defined as $O(2N_{FFT} 	imes n_{ref} + (n_{ref} + 2) 	imes N_{FFT}^2 / 	ext{log}_2 N_{FFT})$ for complex multiplications. ([[2015-mohammed|Mohammed, 2015, p. 35]])
- page_number_reference_note_for_finding_1_is_32_and_finding_2_is_35 ([[2015-mohammed|Mohammed, 2015]])
- The modified visco-acoustic PSPI algorithm successfully compensated for absorption by using a complex extrapolator term based on the Q-factor. ([[2015-mohammed|Mohammed, 2015, p. 66]])
- Visco-acoustic PSPI produced sharper and crisper images of features like pinch-outs and faults compared to acoustic PSPI when applied to visco-acoustic shot records. ([[2015-mohammed|Mohammed, 2015, p. 63]])
- The computational complexity of visco-acoustic PSPI is approximately 6.25% higher than that of acoustic PSPI, which is considered feasible for the improved quality gained. ([[2015-mohammed|Mohammed, 2015, p. 79]])
- Spatial entropy values for undistorted images are typically left-skewed; introduction of noise or distortion shifts the distribution to the right. ([[2015-mohammed|Mohammed, 2015, p. 71]])
- Spectral entropy is a more accurate descriptor of image energy spectrum and can distinguish between noise and smoothness effects more effectively than spatial entropy. ([[2015-mohammed|Mohammed, 2015, p. 89]])
- The modified PSPI algorithm successfully compensated for absorption by incorporating a Q-factor into the extrapolator, resulting in higher resolution images compared to standard PSPI in visco-acoustic conditions. ([[2015-mohammed|Mohammed, 2015, p. 100]])
- SSEQ and curvelet features both provided quality predictions that correlate well with human vision systems. ([[2015-mohammed|Mohammed, 2015, p. 101]])
- Curvelet features showed a higher relative improvement in accuracy compared to SSEQ when evaluating the first three quality metrics (35.2126% vs 29.901%). ([[2015-mohammed|Mohammed, 2015, p. 99]])

## Limitations

Standard migration methods like Fourier transform (F-K) are only ideal for constant velocities or functions of depth; PSPI is required to handle lateral variations. Finite difference modeling has high computational costs and requires careful selection of grid spacing to maintain stability.

## Recommendations and Future Work

The work can be extended to 3D models. The wavefield extrapolators for the absorption case could be modified during the filtering process in acoustic media and used as filters in visco-acoustic media. Future IQA assessments could focus on 'sharpness' rather than just 'smoothness'.

## Related Concepts

- [[pspi]]
- [[visco-acoustic]]
- [[spatial-entropy]]
- [[seismic-processing]]
- [[seismic-imaging]]
- [[quality-assessment]]
- [[finite-difference]]
- [[imaging-condition]]
- [[visco-acoustic-medium]]
- [[matlab]]
- [[quality-factor]]
- [[spectral-entropy]]
- [[petrophysics]]
- [[saudiarabia]]
- [[psi]]
- [[machine-learning]]
- [[image-quality-assessment]]
- [[curvelet-transform]]
