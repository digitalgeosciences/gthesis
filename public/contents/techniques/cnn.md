---
type: technique
title: "Convolutional Neural Network"
aliases:
  - "convolutional neural network"
canonical: true
equipment: "Not stated in source"
software: "Not stated in source"
output: "binary classification (signal vs. noise)"
tags:
  - technique/cnn
  - theme/microseismic-monitoring
sources:
  - "raw/141816 - PASSIVE SEISMIC EVENT DETECTION IN THE GRONINGEN AREA USING DEEP LEARNING.pdf"
  - "raw/142585 - Inversion of Vertical Seismic Profiling (VSP) Data Via Consecutive Neural Networ.pdf"
  - "raw/143311 - Self-Supervised Deep Learning For Geoscientific Image Analysis.pdf"
status: active
last_updated: 2026-06-20
---

# Convolutional Neural Network

**Summary**: A deep learning architecture that uses convolutional layers to automatically extract features from data.

---

## How It Is Used in the Thesis Collection

- [[2021-shaheen|Shaheen, 2021]] implemented a CNN to detect seismic events by utilizing multi-level geophone records as training examples.

- [[2023-almarzooq|Almarzooq, 2023]] employed a 1-layer encoder CNN for denoising and a 2-layer encoder CNN for feature extraction.

- [[2025-ferreira|Ferreira, 2025]] used CNNs to process geoscientific imagery such as satellite images, seismic data, and microscopic mineralogical structures.

## Instruments and Software



- [[2023-almarzooq|Almarzooq, 2023]] employed a 1-layer encoder CNN for denoising and a 2-layer encoder CNN for feature extraction.

- [[2025-ferreira|Ferreira, 2025]] used CNNs to process geoscientific imagery such as satellite images, seismic data, and microscopic mineralogical structures.

## Typical Workflow



## Key Results and Findings

- The CNN detected 40 events and only 5 false alarms, significantly outperforming STA/LTA and template matching. ([[2021-shaheen|Shaheen, 2021, p. 16]])

- The CNN components were used to perform denoising and compression before the final inversion step. ([[2023-almarzooq|Almarzooq, 2023, p. 124]])

- CNNs are designed to automatically and adaptively learn spatial hierarchies of features from input images. ([[2025-ferreira|Ferreira, 2025, p. 23]])

## Methodological Variations Across Sources


## Technical Limitations and Open Questions


## Related Concepts

**Related Techniques**: 

**Applicable to Terminology**: 

**Used in Themes**: 
