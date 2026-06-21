---
type: source
id: "143329"
title: "IMAGE-BASED CHARACTERIZATION OF MULTISCALE PORE STRUCTURE USING MACHINE LEARNING"
author: "Abdullahi Jibrin"
year: 2024
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Yuzhu Wang"
committee_members: []
source_file: "raw/143329 - Image-based characterization of multiscale pore structure using machine learning.pdf"
url: "https://eprints.kfupm.edu.sa/143329"
study_area: "Leman sandstone (online digital rock portal)"
keywords:
  - multiscale pore structure
  - machine learning
  - image-based rock typing
  - SEM images
  - pore characterization
  - pore structure
  - fractal dimension
  - U-net
  - random forest
  - pore partitioning
techniques:
  - sem
  - micro-ct-scan
  - python
  - scikit-learn
  - k-means-clustering
  - gaussian-mixture-model
  - support-vector-machine
  - machine-learning-geoscience
  - u-net
  - image-processing
  - watershed
  - box-counting
  - k-means
  - pca
  - convolutional-neural-network
  - segmentation
  - image-analysis
tags:
  - degree/ms
  - location/saudi-arabia
  - technique/sem
  - technique/micro-ct-scan
  - technique/python
  - technique/scikit-learn
  - technique/k-means-clustering
  - technique/gaussian-mixture-model
  - technique/support-vector-machine
  - technique/machine-learning-geoscience
  - technique/u-net
  - technique/image-processing
  - technique/watershed
  - technique/box-counting
  - technique/convolutional-neural-network
  - technique/pca
  - technique/image-analysis
  - theme/machine-learning-geoscience
  - theme/petrophysics
  - terminology/porosity
  - terminology/pore-size-distribution
  - terminology/petrophysical-rock-typing
  - terminology/pore-systems
  - terminology/fractal-dimension
status: ingested
---

# IMAGE-BASED CHARACTERIZATION OF MULTISCALE PORE STRUCTURE USING MACHINE LEARNING

**Summary**: The thesis investigates the characterization of multiscale pore structures in reservoir rock samples using SEM images and machine learning. It compares five different image-based rock typing models (K-means, GMM, SVM, Random Forest, and U-Net) and evaluates their ability to segment pores and calculate geometrical/fractal properties.

---

## Research Problem

Traditional experimental methods for characterizing complex, heterogeneous pore structures in tight sandstones provide only a generalized overview and lack insight into microstructural details. There is a need for an automated, accurate method to characterize multiscale pore networks using high-resolution imaging.

## Objectives

- To analyze the effectiveness of different features (intensity, edge, texture) in rock typing
- Evaluate and compare five different machine learning models (K-means, GMM, SVM, Random Forest, and U-Net) for image-based rock typing.
- To characterize the pore structure of each rock type
- Segment the pore network into individual pores using watershed and SEEGP methods.
- Quantify geometrical features (area, perimeter, circularity) of the pore system.
- Determine the fractal dimension of different rock types to analyze complexity and shape properties.

## Methods

The study utilized SEM images for initial data. Five machine learning models were used for rock typing: K-means clustering, Gaussian Mixture Model (GMM), Support Vector Machine (SVM), Random Forest, and U-Net (a convolutional neural network). PCA was applied to reduce the dimensionality of features before training. Image segmentation was performed using a watershed algorithm from the sci-kit-image library. Pore partitioning was conducted using the skeleton extension erosion grain partitioning (SEEGP) method. Geometrical properties were extracted via the regionprops module in sci-kit-image. Fractal dimensions were calculated using the box counting method.

## Data and Materials

High-resolution SEM images of Leman sandstone (0.174 x 0.174 μm per pixel) obtained from an online digital rock portal, categorized into five components: Grain, Macropores, and three types of micropores (natural, residual, and erosion-generated).

## Key Findings

- The study identified 5 distinct rock types based on intensity values using K-means and GMM models. ([[2024-jibrin|Jibrin, 2024, p. 43]])
- Edge features like Difference of Gaussian (DoG) were found to be effective at eliminating high-frequency noise while enhancing edges. ([[2024-jibrin|Jibrin, 2024, p. 44]])
- Laplacian of Gaussian (LoG) was used to identify edges in areas with varying intensity, with optimal kernels identified as 3x3 with sigma values of 0.7, 1.6, and 3. ([[2024-jibrin|Jibrin, 2024, p. 45]])
- Hessian of Gaussian (HoG) was utilized to identify blob-like or edge-like structures based on the eigenvalues of the Hessian matrix. ([[2024-jibrin|Jibrin, 2024, p. 46]])
- Structure Tensor Eigenvalues (STE) were used to detect lines and areas of interest in images using various sigma values (1, 1.5, and 2.5). ([[2024-jibrin|Jibrin, 2024, p. 47]])
- The Bayesian Information Criterion (BIC) determined that five clusters provided the best balance between model fit and complexity for the K-means and GMM models. ([[2024-jibrin|Jibrin, 2024, p. 48]])
- U-net achieved the highest accuracy in identifying different rock types with an overall mean IoU of 97%. ([[2024-jibrin|Jibrin, 2024, p. 61]])
- Random Forest showed high performance for rock fragments, macropores, and grains (F1 scores/IoU > 0.90), but struggled with clay and feldspar. ([[2024-jibrin|Jibrin, 2024, p. 71]])
- SVM performed poorly on complex components like feldspar, showing an F1 score of 0.20 and IoU of 0.11 for that specific class. ([[2024-jibrin|Jibrin, 2024, p. 71]])
- Clay A exhibited the highest porosity at 5.568%, while Rock Fragment B had the lowest at 1.377%. ([[2024-jibrin|Jibrin, 2024, p. 72]])
- Feldspar B showed the largest average pore size (7.803 μm²) and highest perimeter (9.288 μm), suggesting significant fractures or weathering. ([[2024-jibrin|Jibrin, 2024, p. 73]])
- Clay samples exhibited higher fractal dimensions (1.9 and 1.78) compared to feldspar (1.62-1.63), indicating more tortuous pore networks. ([[2024-jibrin|Jibrin, 2024, p. 76]])
- Three types of rock with micropore structures contributed 11.8% of the total porosity of the sample. ([[2024-jibrin|Jibrin, 2024, p. 78]])

## Limitations

The study is limited to 2D SEM images; the thesis recommends integrating 3D imaging like micro-CT to capture full pore network complexity and uncertainty quantification for ML models.

## Recommendations and Future Work

Integrate 3D imaging (micro-CT) to capture full pore network complexity; combine multiple modalities (micro-CT, SEM, NMR); incorporate uncertainty quantification methods like Bayesian Neural Networks or Monte Carlo dropout.

## Related Concepts

- [[sem]]
- [[machine-learning-geoscience]]
- [[porosity]]
- [[pore-size-distribution]]
- [[petrophysics]]
- [[saudi-arabia]]
- [[petrophysical-rock-typing]]
- [[pore-systems]]
- [[image-processing]]
- [[watershed]]
- [[convolutional-neural-network]]
- [[fractal-dimension]]
