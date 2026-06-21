---
type: technique
title: "Image Processing"
aliases:
  - "digital image processing"
canonical: true
equipment: "Not stated in source"
software: "Not stated in source"
output: "gradient edge maps"
tags:
  - technique/image-processing
sources:
  - "raw/139620 - Improved 3-D Seismic Edge Detection with the Magic Cube Operator.pdf"
  - "raw/142264 - ASSESSMENT OF OPEN WASTE DUMPING SITES IN TWO CITIES IN THE EASTERN PROVINCE, SA.pdf"
  - "raw/143236 - INVESTIGATION OF CO2 HYDRATE FORMATION KINETICS AND PORE-SCALE DYNAMICS FOR ENHA.pdf"
  - "raw/143311 - Self-Supervised Deep Learning For Geoscientific Image Analysis.pdf"
  - "raw/143329 - Image-based characterization of multiscale pore structure using machine learning.pdf"
status: active
last_updated: 2026-06-20
---

# Image Processing

**Summary**: The use of mathematical algorithms to process digital images for feature extraction.

---

## How It Is Used in the Thesis Collection

- [[2015-adetokunbo|Adetokunbo, 2015]] applied image-processing techniques like convolution and edge detection filters.

- [[2022-al-harbi|Al-Harbi, 2022]] applied image processing techniques including supervised classification (Random Forest) and change detection.

- [[2024-habiburrahman|HABIBURRAHMAN, 2024]] applied image processing via ImageJ Fiji and Python to quantify hydrate growth and distribution.

- [[2025-ferreira|Ferreira, 2025]] applied image processing to resize and downsample high-resolution thin-section scans for model training.

- [[2024-jibrin|Jibrin, 2024]] applied image processing techniques like watershed and Gaussian filters to segment pores.

## Instruments and Software



- [[2022-al-harbi|Al-Harbi, 2022]] applied image processing techniques including supervised classification (Random Forest) and change detection.

- [[2024-habiburrahman|HABIBURRAHMAN, 2024]] applied image processing via ImageJ Fiji and Python to quantify hydrate growth and distribution.

- [[2025-ferreira|Ferreira, 2025]] applied image processing to resize and downsample high-resolution thin-section scans for model training.

- [[2024-jibrin|Jibrin, 2024]] applied image processing techniques like watershed and Gaussian filters to segment pores.

## Typical Workflow



## Key Results and Findings

- The 5x5 magic square operators provided a larger spatial analysis window, leading to higher resolution results compared to 3x3 versions. ([[2015-adetokunbo|Adetokunbo, 2015, p. 43]])

- Supervised classification using the Random Forest algorithm was effective in identifying 64 dumpsites across two cities. ([[2022-al-harbi|Al-Harbi, 2022, p. 41]])

- Automated analysis using Python improved the efficiency and accuracy of quantifying hydrate occupancy. ([[2024-habiburrahman|HABIBURRAHMAN, 2024, p. 47]])

- Lanczos interpolation was used to reduce images to 256x256 pixels while preserving essential features. ([[2025-ferreira|Ferreira, 2025, p. 31]])

- Watershed algorithm was used to differentiate pore and solid phases in grayscale images. ([[2024-jibrin|Jibrin, 2024, p. 39]])

## Methodological Variations Across Sources


## Technical Limitations and Open Questions


## Related Concepts

**Related Techniques**: 

**Applicable to Terminology**: 

**Used in Themes**: 
