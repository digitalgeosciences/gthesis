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
  - Machine Learning
  - Image Classification
  - Semantic Segmentation
  - DinoV2
  - SimCLR
  - Deep Learning
  - Convolutional Neural Networks (CNNs)
  - Vision Transformers (ViTs)
  - Segmentation
  - Micropaleontology
  - Mineral Segmentation
  - Object Detection
  - Synthetic Data Generation
  - Generative Adversarial Networks (GANs)
techniques:
  - machine-learning-geoscience
  - neural-networks
  - convolutional-neural-networks
  - vision-transformer
  - segmentation
  - image-analysis
  - data-augmentation
  - cnn
  - gan
  - stylegan2
  - swinir
  - u-net
  - attention-u-net
  - stego
  - sam
  - seg
  - simclr
  - yolov8
  - dinov2
  - lanczos-interpolation
  - segformer
  - python
  - gis
tags:
  - degree/ms
  - technique/machine-learning-geoscience
  - technique/neural-networks
  - technique/convolutional-neural-networks
  - technique/vision-transformer
  - technique/petrel
  - technique/gan
  - technique/gis
  - theme/machine-learning-geoscience
  - terminology/machine-learning-geoscience
  - terminology/petrophysical-rock-typing
  - terminology/petrography
  - terminology/micropaleontology
  - terminology/segmentation
  - terminology/data-augmentation
  - terminology/super-resolution
  - terminology/few-shot-learning
  - terminology/petrology
  - terminology/semantic-segmentation
  - terminology/mineralogy
status: ingested
---

# Self-Supervised Deep Learning For Geoscientific Image Analysis

**Summary**: The thesis explores the application of self-supervised learning (SSL) to geoscientific image analysis, specifically in petrography and mineral segmentation. It demonstrates that SSL can effectively mitigate the shortage of labeled data by pre-training models on large unlabeled datasets before fine-tuning for specific downstream tasks like classification and detection.

---

## Research Problem

Traditional deep learning approaches in geosciences are hindered by the limited availability and quality of labeled datasets, which are essential for supervised learning methods. This lack of annotated data limits the development of accurate models for geological and geophysical applications.

## Objectives

- Provide a comprehensive introduction to self-supervised learning within the context of the geosciences.
- Discuss the advantages of pre-trained models and foundational models in enhancing SSL across petrographic, micropaleontological, and seismic image analysis.
- Evaluate various SSL tasks applicable to geoscientific data (classification, segmentation, clustering).
- Implement and evaluate specific SSL techniques (SimCLR, DinoV2, STEGO) against established benchmarks for mineral segmentation and lithofacies classification.
- Develop and implement SSL methodologies tailored for geoscientific image analysis, focusing on extracting relevant features from unlabeled data.
- Critically evaluate and benchmark the performance of SSL methods against traditional supervised learning paradigms in various geoscientific domains, such as petrography, micropaleontology, and seismic image analysis.
- Apply SSL techniques to solve concrete tasks within geoscience, particularly in petrography, and explore the potential of SSL in enhancing the accuracy and efficiency of geological interpretations.
- Expand the application of SSL methodologies into the domain of petrography and mineral segmentation.
- Demonstrate the effectiveness of SSL for ore mineral segmentation without relying on labeled examples.
- Reduce the time and financial costs associated with manual labeling of geological datasets.
- Evaluate self-supervised learning (SSL) as a means to reduce reliance on manually annotated data.
- Implement SSL algorithms like SimCLR to cluster similar structures in carbonate thin sections.
- Compare the performance of DINOv2 with conventional CNNs for lithofacies and volcanic ash classification.
- Utilize GAN-based synthetic data generation (PetroGAN) to improve few-shot learning for micropaleontological segmentation.
- Assess the effectiveness of the STEGO architecture for semantic segmentation of minerals in petrography.
- Address the scarcity of annotated data in geoscientific image analysis
- Propose novel methodologies leveraging self-supervised learning (SSL)
- Develop robust models for classification, segmentation, and clustering using SSL

## Methods

The research utilizes several deep learning architectures: Convolutional Neural Networks (CNNs) for image classification; Generative Adversarial Networks (GANs), specifically StyleGAN2, for generating synthetic petrographic datasets; SwinIR combined with GANs for super-resolution of micropaleontological images; and the STEGO (Self-Supervised Transformer with Energy-based Graph Optimization) architecture for mineral segmentation. Additionally, foundational models like SAM (Segment Anything Model) and SEG (Segment Every Grain) are repurposed using custom U-Net and Attention U-Net architectures to automate microfossil segmentation.

## Data and Materials

The study utilizes several datasets including: 1) A lithofacies dataset of core images (Baraboshkin et al., 2020; Koeshidayatullah, Al-Azani, et al., 2022); 2) a volcanic ash particle dataset (Shoji et al., 2018); 3) a carbonate microfossil dataset; 4) an ore mineral thin section dataset for pyrite analysis.

## Key Findings

- DinoV2 achieved an accuracy of 94.9% on the volcanic ash particle classification task using 781 images (80% of the dataset). ([[2025-ferreira|Ferreira, 2025, p. 13]])
- DinoV2 achieved an accuracy of 91.8% when only 194 images (20% of the dataset) were used for volcanic ash particle classification. ([[2025-ferreira|Ferreira, 2025, p. 13]])
- The traditional CNN-based approach for volcanic ash particle classification achieved only 86.9% accuracy. ([[2025-ferreira|Ferreira, 2025, p. 13]])
- The STEGO model demonstrated effectiveness in semantic segmentation, achieving a mean IoU score of 0.8 for ore mineral thin sections. ([[2025-ferreira|Ferreira, 2025, p. 14]])
- In the few-shot generative autoshot approach, segmentation maps for synthetic foraminifera images achieved an overall IoU score of 84%. ([[2025-ferreira|Ferreira, 2025, p. 14]])
- The number of publications related to SSL grew from 8 in 2015 to over 3,200 by November 2024. ([[2025-ferreira|Ferreira, 2025, p. 18]])
- The STEGO model achieved a mean Intersection over Union (mIoU) score of 0.8 when tested against 42 human-labeled images of pyrite, demonstrating the ability to segment minerals not included in the training set. ([[2025-ferreira|Ferreira, 2025, p. 15]])
- The modified Attention U-Net architecture for microfossil segmentation achieved an accuracy of 0.91 and a corresponding loss of 0.93. ([[2025-ferreira|Ferreira, 2025, p. 17]])
- StyleGAN2 models trained on unlabeled images produced synthetic samples that closely resembled real samples in both aesthetic and statistical properties, enabling the creation of high-fidelity petrographic datasets. ([[2025-ferreira|Ferreira, 2025, p. 14]])
- The use of SwinIR with GANs (ForamViT-GAN) allows for the synthesis and super-resolution of micropaleontological images to overcome low-resolution data constraints. ([[2025-ferreira|Ferreira, 2025, p. 12]])
- SimCLR pre-training allowed for a downstream classification task using only 20% of the available labels while maintaining accuracy comparable to models trained on 80% of the data. ([[2025-ferreira|Ferreira, 2025, p. 61]])
- The Ore Minerals dataset from Chuquicamata was processed into 256x256 pixel images using Lanczos interpolation for semantic segmentation training. ([[2025-ferreira|Ferreira, 2025, p. 46]])
- YOLOv8 utilizes an enhanced EfficientNet-B4 backbone and a NAS-FPN detection head to handle multi-scale feature maps. ([[2025-ferreira|Ferreira, 2025, p. 54]])
- The STEGO framework successfully separates unsupervised feature learning from cluster compactification to improve segmentation performance. ([[2025-ferreira|Ferreira, 2025, p. 58]])
- SimCLR clustering of carbonate thin section embeddings successfully grouped similar structures corresponding to the same microfossils. ([[2025-ferreira|Ferreira, 2025, p. 62]])

## Limitations

The performance of the STEGO model was noted to be constrained by the quality and extent of training labels, where some mineral boundaries were not perfectly outlined. Additionally, results for petrography are currently supported by high-contrast images; a transition to lower-contrast transmitted light datasets may require larger data volumes.

## Recommendations and Future Work

Future work should focus on: 1) identifying specific pretext tasks tailored to different geological scenarios (seismic vs. petrography); 2) assessing the impact of dataset size and diversity in SSL; 3) integrating SSL with transfer learning and few--shot learning; 4) developing models for low-contrast datasets.

## Related Concepts

- [[machine-learning]]
- [[neural-networks]]
- [[convolutional-neural-networks]]
- [[vision-transformer]]
- [[machine-learning-geoscience]]
- [[petrophysical-rock-typing]]
- [[segmentation]]
- [[petrography]]
- [[micropaleontology]]
- [[data-augmentation]]
- [[super-resolution]]
- [[few-shot-learning]]
- [[petrology]]
- [[sem]]
- [[semantic-segmentation]]
- [[gan]]
- [[simclr]]
- [[mineralogy]]
