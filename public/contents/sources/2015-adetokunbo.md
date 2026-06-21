---
type: source
id: "139620"
title: "Improved 3-D Seismic Edge Detection with the Magic Cube Operator"
author: "Rasheed peter Adetokunbo"
year: 2015
department: "Geosciences"
degree: "MS"
supervisor: "A.A Al-Shuhail"
committee_members:
  - "Saleh Al-Dossary"
  - "Abdullah Abdulaziz Alshuhail"
source_file: "raw/139620 - Improved 3-D Seismic Edge Detection with the Magic Cube Operator.pdf"
url: "https://eprints.kfupm.edu.sa/id/eprint/139620/"
study_area: "Not stated in source"
keywords:
  - edge detection
  - geometric seismic attributes
  - seismic reflection data
  - magic squares
  - magic cubes
  - 3-D seismic volume
  - Seismic attributes
  - Magic square
  - Magic cube
  - 3-D seismic data
techniques:
  - signal-processing
  - image-processing
  - mathematical-modeling
  - matlab
tags:
  - degree/ms
  - technique/signal-processing
  - technique/image-processing
  - technique/mathematical-modeling
  - technique/matlab
  - theme/seismic-imaging
  - theme/geophysics-general
  - theme/seismic-interpretation
  - terminology/edge-detection
  - terminology/signal-to-noise-ratio
status: ingested
---

# Improved 3-D Seismic Edge Detection with the Magic Cube Operator

**Summary**: The thesis evaluates a new 3D seismic edge detection method based on kernels derived from magic squares and cubes. The study demonstrates that these multidirectional operators, particularly in larger spatial dimensions (5x5x5), provide superior delineation of geological features like channels and faults compared to the standard Sobel operator.

---

## Research Problem

Traditional 3D seismic edge detection filters, such as the Sobel operator, have limitations in identifying features oriented in directions not captured by their specific calculation paths. There is a need for robust, multidirectional operators to accurately delineate complex structural and stratigraphic discontinuities like faults, fractures, and channels.

## Objectives

- Extending the 2-D magic square operator to 3-D to find seismic features.
- Applying the method on real seismic data to test its performance relative to Sobel Filter.
- Evaluate a new method for geologic interpretation based on templates derived from magic squares and cubes.
- Compare the performance of different magic cube sizes (3x3x3 vs 5x5x5) against standard operators like the Sobel operator.

## Methods

The study utilizes discrete differential operators (magic squares and cubes) as kernels for convolution. The F1 operator is based on a contrast function, while the F2 operator uses a 1-D or 3-D convolution of kernels derived from magic squares to determine gradient magnitude and direction. These were extended from 3x3 dimensions to 5x5 (2D) and 3x3x3/5x5x5 (3D). The methodology involved constructing these kernels, applying them to a 3D seismic volume provided by Saudi Aramco, and comparing the results against standard Sobel filters in both clean and noisy data environments.

## Data and Materials

A real 3-D seismic volume sampled at 4 ms containing 630 inlines, 560 crosslines, and 300 time slices. The dataset included a channel system and a continuous horizon of weak/moderate amplitude.

## Key Findings

- The F1 magic square operator is capable of obtaining gradient map efficiently with good sensitivity to small changes in the gradient. ([[2015-adetokunbo|Adetokunbo, 2015, p. 24]])
- The F2 magic square operator can detect both gradient and direction, while its orientation-specific kernels (M1-M8) respond maximally to edges oriented in specific directions. ([[2015-adetokunbo|Adetokunbo, 2015, p. 26]])
- The 5x5 magic square operators provide a larger spatial analysis window compared to 3x3 versions, incorporating more neighboring pixels for better delineation of features. ([[2015-adetokunbo|Adetokunbo, 2015, p. 43]])
- In the presence of noise (0.1 standard deviation), the 5x5 magic cube operator provided better delineations of channels than the 3x3 version. ([[2015-adetokunbo|Adetokunbo, 2015, p. 57]])
- The 3x3x3 magic cube F2 operator with K-6a kernel effectively delineated a channel system because it was oriented perpendicularly to the feature. ([[2015-adetokunbo|Adetokunbo, 2015, p. 58]])
- The 5x5x5 magic cube operators produced better definition of the channel system and higher resolution than the 3x3x3 versions or the Sobel filter. ([[2015-adetokunbo|Adetokunbo, 2015, p. 58]])
- The results of the magic square and 2-D Sobel operators were found to be generally comparable in terms of gradient map quality. ([[2015-adetokunbo|Adetokunbo, 2015, p. 47]])
- Magic square operators are well-suited for evaluating amplitude gradients of 2D seismic data, with F1 and F2 both effectively locating main channels. ([[2015-adetokunbo|Adetokunbo, 2015, p. 65]])
- The 5x5 magic square shows superior performance over the 3x3 version particularly in the presence of noise. ([[2015-adetokunbo|Adetokunbo, 2015, p. 65]])
- Results from 3x3 and 5x5 magic square F2 operators are comparable to the Sobel operator, but 5x5 magic square F1 appears slightly better than 5x5 Sobel. ([[2015-adetokunbo|Adetokunbo, 2015, p. 65]])
- The proposed magic cube operators clearly delineated two channels and were capable of identifying vertical/near-vertical features (kernel-7a) more effectively than the Sobel operator. ([[2015-adetokunbo|Adetokunbo, 2015, p. 65]])
- The 5x5x5 F2 operator produces higher amplitude, more continuous, and mappable horizons compared to the 3x3x3 version. ([[2015-adetokunbo|Adetokunbo, 2015, p. 65]])
- The F2 operator is identified as the best choice for edge detection because it scans in all compass directions, allowing independent viewing of horizontal, vertical, and directional features. ([[2015-adetokunbo|Adetokunbo, 2015, p. 66]])
- Increasing the spatial analysis window (from 3x3 to 5x5) provides three main advantages: noise reduction, clearer/crisp feature detection, and better directional delineation. ([[2015-adetokunbo|Adetokunbo, 2015, p. 67]])

## Limitations

The study's example data only contains channels; therefore, the method's performance on structural features like faults is not fully tested in this specific dataset.

## Recommendations and Future Work

Future work should include testing the method on synthetic data containing all geological features (including faults) and improving the computational implementation to minimize run time.

## Related Concepts

- [[signal-processing]]
- [[image-processing]]
- [[edge-detection]]
- [[signal-to-noise-ratio]]
- [[seismic-imaging]]
- [[geophysics-general]]
- [[seismic-interpretation]]
