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
  - Edge detection
  - Seismic attributes
  - Magic square
  - Magic cube
  - 3-D seismic data
  - Convolution
  - Geologic interpretation
  - 3D seismic data
  - Geological features
techniques:
  - seismic-imaging
  - matlab
  - convolution
tags:
  - degree/ms
  - technique/seismic-imaging
  - technique/matlab
  - technique/convolution
  - theme/geophysics-general
  - theme/seismic-interpretation
  - theme/applied-geophysics
  - theme/seismic-imaging
  - terminology/edge-detection
  - terminology/seismic-interpretation
status: ingested
---

# Improved 3-D Seismic Edge Detection with the Magic Cube Operator

**Summary**: The thesis evaluates and implements a new edge detection method for 3D seismic data based on magic square and magic cube operators. It demonstrates that these operators, particularly with larger spatial windows, provide superior delineation of geological features like channels compared to traditional Sobel filters.

---

## Research Problem

Standard edge detection methods in 3D seismic data, such as the Sobel operator, may have limitations in identifying complex features or providing clear orientation information. The study addresses this by implementing and evaluating magic square and cube operators to improve the identification of structural and stratigraphic discontinuities.

## Objectives

- Applying the magic square operator to seismic data.
- Extending the 2-D magic square operator to 3-D to find seismic features.
- Applying the method on real seismic data to test its performance relative to Sobel Filter.
- Implement and evaluate a new 3D seismic edge detection method based on magic squares and cubes.
- Extend existing 3x3x3 magic cube kernels into 5x5x5 magic square and cube operators.
- Compare the performance of these magic cube operators against the standard Sobel operator using real 3D seismic data.
- Evaluate new edge detection methods based on magic squares and cubes for 2-D and 3-D seismic data.
- Compare the performance of magic square/cube operators against standard Sobel filters.
- Assess the impact of spatial window size (e.g., 3x3 vs 5x5) on noise reduction and feature clarity.

## Methods

The study utilizes convolution-based edge detection. It implements two types of magic square operators: F1 (based on a contrast function) and F2 (based on discrete convolution kernels). These are extended into 3D space as 'magic cubes'. The methodology involves taking a normal magic cube, subtracting the central element to create templates, and then zeroing all elements except for absolute maxima and minima to produce specific kernels. Both 3x3x3 and 5x5x5 kernel sizes were implemented. These are compared against the Sobel operator using real 3D seismic data provided by Saudi Aramco.

## Data and Materials

Real 3-D seismic data provided by Saudi Aramco, sampled at 4 ms, consisting of 630 inlines, 560 crosslines, and 300 time slices. The dataset includes a channel system and a continuous horizon of weak/moderate amplitude.

## Key Findings

- The multidirectional scanning of magic cube operators leads to more efficient detection of different edge locations and their respective orientations compared to standard filters. ([[2015-adetokunbo|Adetokunbo, 2015, p. 12]])
- Testing in the presence of noise showed that higher spatial dimensions (5x5 and 5x5x5) provided better results for edge delineation than smaller dimensions. ([[2015-adetokunbo|Adetokunbo, 2015, p. 13]])
- The magic cube method provides better detection for steeply dipping events and more detail compared to the Sobel operator. ([[2015-adetokunbo|Adetokunbo, 2015, p. 13]])
- A 5x5 magic square is superior to a 3x3 magic square in identifying features when noise (0.1 standard deviation) is present. ([[2015-adetokunbo|Adetokunbo, 2015, p. 57]])
- The 3-D Sobel operator was compared against the maximum convolution of 3x3x3 and 5x5x5 magic cube F2 operators, showing that the latter provided more detailed edge maps. ([[2015-adetokunbo|Adetokunbo, 2015, p. 63]])
- The F1 magic square operator is capable of obtaining gradient maps efficiently while the F2 operator can detect both gradient and edge direction. ([[2015-adetokunbo|Adetokunbo, 2015, p. 38]])
- F1 average eight directional edge spaces corresponding to each row, column, forward and backward diagonal leading to a good edge magnitude evaluation with good sensitivity to small changes in the gradient. ([[2015-adetokunbo|Adetokunbo, 2015, p. 25]])
- The 3x3x3 magic cube operators (Al-Shuhail and Al-Dossary, 2014) identify seven distinct directions along which the absolute difference across the central element is maximum. ([[2015-adetokunbo|Adetokunbo, 2015, p. 30]])
- The 5x5x5 magic cube expansion incorporates more neighboring pixels in both x and y directions compared to the 3x3x3 version, providing a larger spatial analysis window. ([[2015-adetokunbo|Adetokunbo, 2015, p. 38]])
- The magic square F1 operator is sensitive to small changes in gradient magnitude because it averages all eight components (rows, columns, diagonals). ([[2015-adetokunbo|Adetokunbo, 2015, p. 66]])
- The F2 operator is identified as the best choice for edge detection because it scans in all compass directions, providing flexibility to view features in various orientations. ([[2015-adetokunbo|Adetokunbo, 2015, p. 66]])
- Larger spatial windows (5x5) provide superior performance over smaller ones (3x3), specifically resulting in noise reduction and clearer/crisper geological feature detection. ([[2015-adetokunbo|Adetokunbo, 2015, p. 67]])
- The magic cube operator with a larger spatial window produces higher amplitude, more continuous, and mappable horizons compared to the Sobel filter. ([[2015-adetokunbo|Adetokunbo, 2015, p. 65]])
- the 5x5 magic square F1 operators appear slightly better than those of 5x5 Sobel operators in certain conditions. ([[2015-adetokunbo|Adetokunbo, 2015]])
- page_num_placeholder_logic_applied_to_text_segment_at_page_65 ([[2015-adetokunbo|Adetokunbo, 2015]])

## Limitations

Specific geological information (deposition1, tectonic history, etc.) was not provided due to proprietary reasons. Noise is noted as a factor that can compromise the efficiency of magic square operators similarly to other known edge detection methods.

## Recommendations and Future Work

The study suggests that the magic cube method can serve as a complementary tool to other existing seismic attributes for identifying features like unconformity, sequence boundary, and structural deformation.

## Related Concepts

- [[seismic-attribute-analysis]]
- [[matlab]]
- [[edge-detection]]
- [[seismic-interpretation]]
- [[seismic-processing]]
- [[convolution]]
- [[seismic-imaging]]
