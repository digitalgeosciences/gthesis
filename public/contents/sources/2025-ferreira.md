---
type: source
id: "143311"
title: "Self-Supervised Deep Learning For Geoscientific Image Analysis"
author: "Ivan Ferreira"
year: 2025
department: "Geosciences"
degree: "MS"
supervisor: "Ardiansyah Koeshidayatullah"
committee_members:
  - "Khalid Al Armadan"
  - "Cédric John"
source_file: "raw/143311 - Self-Supervised Deep Learning For Geoscientific Image Analysis.pdf"
url: "https://eprints.kfupm.edu.sa/id/eprint/143311/"
study_area: "Not stated in source"
keywords:
  - Self-Supervised Learning (SSL)
  - Geoscientific Image Analysis
  - Petrography
  - Micropaleontology
  - Seismic Data Processing
  - Remote Sensing
  - Convolutional Neural Networks (CNN)
  - Vision Transformers (ViT)
  - Segmentation
  - Classification
  - Semantic Segmentation
  - Machine Learning
techniques:
  - machine-learning-geoscience
  - neural-networks
  - cnn
  - python
  - image-processing
  - convolutional-neural-network
  - simclr
  - segmentation
  - object-detection
  - data-analysis
  - feature-extraction
  - pre-training
  - transfer-learning
  - data-augmentation
  - few-shot-learning
  - petrology
  - microscopy
  - gan
tags:
  - degree/ms
  - technique/machine-learning-geoscience
  - technique/neural-networks
  - technique/cnn
  - technique/python
  - technique/image-processing
  - technique/convolutional-neural-network
  - technique/simclr
  - technique/segmentation
  - technique/object-detection
  - technique/data-analysis
  - technique/feature-extraction
  - technique/pre-training
  - technique/transfer-learning
  - technique/segment-analysis
  - technique/data-augmentation
  - technique/few-shot-learning
  - theme/machine-learning-geoscience
  - theme/petrology
  - terminology/segmentation
  - terminology/petrology
  - terminology/mineralogy
  - terminology/petrophysics
  - terminology/lithology
  - terminology/microfacies-analysis
  - terminology/facies-analysis
  - terminology/object-detection
  - terminology/biostratigraphy
status: ingested
---

# Self-Supervised Deep Learning For Geoscientific Image Analysis

**Summary**: The thesis explores the application of self-supervised learning (SSL) to overcome the lack of labeled data in geoscientific image analysis, specifically in petrography and micropaleontology. It evaluates several SSL architectures like DINOv2, STEGO, and SimCLR for tasks such as mineral segmentation, lithofacies classification, and object detection.

---

## Research Problem

The primary research problem is the scarcity, poor quality, and limited generalizability of labeled datasets in geosciences, which hinders the development of accurate models for classification, segmentation, and clustering in fields like petrography and seismic interpretation.

## Objectives

- Develop and implement SSL methodologies tailored for geoscientific image analysis to extract relevant features from unlabeled data.
- Critically evaluate and benchmark the performance of SSL methods against traditional supervised learning paradigms in various geoscientific domains (petrography, micropaleontology, seismic image analysis).
- Apply SSL techniques to solve concrete tasks within geoscience, particularly in petrography, to improve accuracy and efficiency.
- Evaluate self-supervised learning (SSL) methodologies to address data scarcity in geoscientific image analysis.
- Implement and compare various SSL architectures (SimCLR, DINOv2, STEGO) for lithofacies classification and mineral segmentation.
- Demonstrate the effectiveness of few-shot learning and GAN-based synthetic data generation for micropaleontological datasets.

## Methods

The study utilizes several machine learning frameworks: 1) SimCLR for contrastive learning of visual representations using data augmentation (cropping, flipping, color jittering). 2) STEGO (Self-Supervised Transformer with Energy-based Graph Optimization) for mineral segmentation. 3) DinoV2 and SimCLR for image classification. 4) YOLOv8 for object detection. The research also incorporates transfer learning and few-shot learning to mitigate data scarcity. Data processing included resizing images to 256x256 pixels using Lanczos interpolation.

## Data and Materials

1. PetroGAN: Synthetic dataset of 10,000 thin section images (sedimentary, metamorphic, volcanic). 2. LithoFacies: 3,558 core images across 6 classes. 3. Sandstone Components: 1,876 high-resolution images from Yarlung Tsanpo, Tibet. 4. Carbonate Microfossils: Over 8,723 images of labeled carbonate thin sections. 5. Ore Minerals: High-resolution scans (23,000x23,000 pixels) of pyrite from the Chuquicamata porphyry deposit.

## Key Findings

- DinoV2 achieved an accuracy of 94.9% using 781 images (80% of dataset) and 91.8% with only 194 images (20%), outperforming a traditional CNN-based approach (86.9%). ([[2025-ferreira|Ferreira, 2025, p. 13]])
- The STEGO model achieved a mean IoU score of 0.8 for the segmentation of ore minerals (pyrite) in thin sections. ([[2025-ferreira|Ferreira, 2025, p. 30]])
- A few-shot generative autoshot approach for synthetic foraminifera images achieved an overall IoU score of 84%. ([[2025-ferreira|Ferreira, 2025, p. 14]])
- The STEGO model demonstrated the ability to identify more ore minerals than were included in the manual labeling process. ([[2025-ferreira|Ferreira, 2025, p. 34]])
- A modified Attention U-Net architecture for microfossil segmentation achieved an accuracy of 0.91 and a loss of 0.93. ([[2025-ferreira|Ferreira, 2025, p. 32]])
- SimCLR-based clustering of carbonate thin sections successfully identified similar structures corresponding to microfossils and distinguished between XPL and PPL images. ([[2025-ferreira|Ferreira, 2025, p. 47]])
- DINOv2 + SVM with 80% data achieved 89.4% accuracy for lithofacies classification, while the same model with only 20% of the data achieved 83.1%. ([[2025-ferreira|Ferreira, 2025, p. 48]])
- DINOv2 + SVM on volcanic ash particles reached 94.9% accuracy using 80% of the dataset. ([[2025-ferreira|Ferreira, 2025, p. 48]])
- The object detection model for clasts in sandstone achieved a precision of 0.800, a recall of 0.798, and an mAP@50 of 0.864. ([[2025-ferreira|Ferreira, 2025, p. 52]])
- The STEGO model for pyrite segmentation achieved a mean IoU (mIoU) of 0.80 on 42 test images, showing high correlation with ground truth masks. ([[2025-ferreira|Ferreira, 2025, p. 55]])
- STEGO outperformed binary thresholding in ore vein segmentation by capturing intricate details like cracks and holes in pyrite samples. ([[2025-ferreira|Ferreira, 2025, p. 59]])

## Limitations

The performance of the models, particularly for mineral segmentation, is influenced by factors such as high contrast between minerals and the quality of the training labels; results on a transmitted light dataset may require larger datasets to achieve similar outcomes.

## Recommendations and Future Work

Future work should focus on developing tailored pretext tasks specific to geological scenarios (e.g., spatial relationships for petrography, temporal coherence for seismic data), exploring the impact of dataset size/diversity, and integrating SSL with transfer learning and few-shot learning.

## Related Concepts

- [[simclr]]
- [[cnn]]
- [[segmentation]]
- [[petrology]]
- [[machine-learning-geoscience]]
- [[image-processing]]
- [[mineralogy]]
- [[pre-training]]
- [[petrophysics]]
- [[object-detection]]
- [[lithology]]
- [[convolutional-neural-network]]
- [[microfacies-analysis]]
- [[facies-analysis]]
- [[biostratigraphy]]
