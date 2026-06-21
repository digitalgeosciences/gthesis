---
type: source
id: "142585"
title: "Inversion of Vertical Seismic Profiling (VSP) Data Via Consecutive Neural Networks"
author: "Hussain Almarzooq"
year: 2023
department: "Geosciences"
degree: "MS"
supervisor: "Umair Waheed"
committee_members:
  - "Sherif Mahmoud"
  - "Motaz Alfarraj"
source_file: "raw/142585 - Inversion of Vertical Seismic Profiling (VSP) Data Via Consecutive Neural Networ.pdf"
url: "https://eprints.kfupm.edu.sa/id/eprint/142585/"
study_area: "Not stated in source"
keywords:
  - Vertical Seismic Profiling (VSP)
  - Zero-offset VSP
  - Corridor Stack
  - Seismic Inversion
  - Deep Learning
  - Neural Networks
  - Convolutional Neural Networks (CNN)
  - Long Short-Term Memory (LSTM)
  - Temporal Neural Networks (TCN)
  - Autoencoders
  - Consecutive Neural Networks
  - Denoising
  - Feature Extraction
  - Wavelet Transforms
  - TCN
  - CNN
  - VSP corridor stack
  - velocity prediction
  - consecutive neural network
  - convolutional neural network
  - temporal convolutional network
techniques:
  - vsp
  - neural-networks
  - convolutional-neural-network
  - long-short-term-memory
  - signal-processing
  - machine-learning-geoscience
  - optuna
  - well-log-analysis
  - seismic-inversion
  - wavelet-transform
  - continuous-wavelet-transform
  - stationary-wavelet-transform
  - cnn
  - tcn
  - feature-extraction
  - autoencoder
  - transfer-learning
  - finite-difference-modeling
  - data-augmentation
tags:
  - degree/ms
  - technique/vsp
  - technique/neural-networks
  - technique/convolutional-neural-network
  - technique/long-short-term-memory
  - technique/signal-processing
  - technique/machine-learning-geoscience
  - technique/optuna
  - technique/well-log-analysis
  - technique/seismic-inversion
  - technique/wavelet-transform
  - technique/continuous-wavelet-transform
  - technique/stationary-wavelet-transform
  - technique/cnn
  - technique/tcn
  - technique/feature-extraction
  - technique/autoencoder
  - technique/transfer-learning
  - technique/finite-difference-modeling
  - technique/data-augmentation
  - theme/geophysics-general
  - theme/borehole-geophysics
  - theme/signal-processing
  - theme/machine-learning-geoscience
  - theme/seismic-inversion
  - terminology/acoustic-impedance
  - terminology/corridor-stack
  - terminology/velocity-modeling
  - terminology/signal-processing
status: ingested
---

# Inversion of Vertical Seismic Profiling (VSP) Data Via Consecutive Neural Networks

**Summary**: The thesis investigates the inversion of zero-offset Vertical Seismic Profiling (VSP) corridor stacks to predict P-wave velocity and depth. It proposes a consecutive neural network architecture—comprising denoising, feature extraction/compression, and velocity inversion sub-models—which aims to overcome limitations in traditional inversion methods like wavelet selection and non-linearity.

---

## Research Problem

Traditional VSP lookahead inversion for velocity and depth prediction suffers from non-linearity, limited data availability, and biases related to the choice of wavelet, noise levels, and low-frequency models. The study addresses these issues by using a deep learning approach to directly extract velocity information from noisy synthetic corridor stacks.

## Objectives

- Create a realistic 1D Earth model synthetic data generation engine capable of producing velocity, density, and acoustic impedance profiles as well as reflectivity series (clean or noisy).
- Pre-process synthetic and real data to prepare it for deep learning models.
- Create and optimize deep learning architectures for each sub-task leading up to the inversion of VSP data for velocity.
- Perform blind testing of the models on data from the synthetic engine and on a finite difference model processed via a typical VSP processing workflow.
- Develop a denoising model to remove noise from VSP corridor stacks.
- Implement an inversion model for velocity profile prediction.

## Methods

The study utilizes a multi-stage approach: 1) Synthetic Data Generation: A custom engine creates 1D Earth models (clastic, carbonate, or salt sequences) with varying lithology, thickness, and properties. These are used to generate reflectivity series convolved with three types of wavelets (Klauder, Ormsby, Ricker) and added white noise. 2) Data Pre-processing: Includes min-max normalization for velocity (0-30,000 ft/s) and density (1.0-3.5 g/cm³). 3) Neural Network Architectures: Comparison of DNN, LSTM, CNN, CNN-LSTM, and TCN architectures. 4. Consecutive Neural Networks: A proposed architecture where a denoising autoencoder is followed by a wavelet transform (CWT or SWT) and a second autoencoder for feature extraction/compression before final velocity inversion.

## Data and Materials

The study utilizes synthetic VSP corridor stacks generated via a custom engine (not specified). It includes 5,000 blind testing datasets for standard inversions and up to 4,000 datasets for evaluating the encoder-inversion model. A finite difference ZVSP dataset from Campbell (2023) was used as an independent blind test.

## Key Findings

- The proposed consecutive neural network model can predict results ten times faster than all other tested models at a higher accuracy. ([[2023-almarzooq|Almarzooq, 2023, p. 16]])
- A corridor stack is typically very clean, with remaining noise being random; however, this noise can affect the fidelity of reflections and is addressed via band-pass filtering or rank-reduction methods. ([[2023-almarzooq|Almarzooq, 2023, p. 30]])
- The range for velocity in the subsurface is approximately 5,000 ft/s to 25,000 ft/s; a normalization range of 0 to 30,000 ft/s was used. ([[2023-almarzooq|Almarzooq, 2023, p. 35]])
- The density values in the subsurface typically range from 1.5 g/cm³ to 3.0 g/cm³; a normalization range of 1.0 to 3.5 g/cm³ was used. ([[2023-almarzooq|Almarzooq, 2023, p. 35]])
- TCNs offer an advantage by processing information from current and previous time steps without information leakage from future steps, while reducing computational load compared to CNN-LSTM architectures. ([[2023-almarzooq|Almarzooq, 2023, p. 24]])
- The TCN architecture showed a significant lead over other models in velocity inversion, with 1/2 the loss of other architectures tested. ([[2023-almarzooq|Almarzooq, 2023, p. 69]])
- For denoising, CNN-based autoencoders outperformed TCNs, showing that local receptive fields are more effective for noise removal. ([[2023-almarzooq|Almarzooq, 2023, p. 73]])
- The inclusion of a denoising sub-model resulted in an RMSE of 2950.23 for noisy data, significantly better than the 3404.15 RMSE achieved by a model trained directly on noisy data. ([[2023-almarzooq|Almarzooq, 2023, p. 120]])
- The encoder-inversion model (using a 2-layer autoencoder) provided a 10x speedup in prediction time compared to the standalone inversion model. ([[2023-almarzooq|Almarzooq, 2023, p. 80]])
- The encoder-inversion model outperformed the standalone model in blind testing with an RMSE of 2146.56 vs 2781.62. ([[2023-almarzooq|Almarzooq, 2023, p. 83]])
- Transfer learning from a pre-trained velocity model to an acoustic impedance model was 98.11% faster and 25.73% more accurate than training from scratch. ([[2023-almarzooq|Almarzooq, 2023, p. 67]])
- Wavelet transforms (SWT and CWT) performed worse than direct inversion, failing to capture high-frequency details and increasing computational load by 11x and 250x respectively. ([[2023-almarzooq|Almarzooq, 2023, p. 101]])
- Joint inversion of velocity and density was found feasible with a refined model using 156 dilations in TCN layers. ([[2023-almarzooq|Almarzooq, 2023, p. 70]])
- The consecutive (split-trained) network outperformed all other tested alternatives, including end-to-end models and various combinations of hyperparameter optimizations. ([[2023-almarzooq|Almarzooq, 2023, p. 126]])
- The modular approach allows for better explainability and easier debugging compared to black-box end-to-end models because each stage (denoising, feature extraction, inversion) can be independently optimized. ([[2023-almarzooq|Almarzooq, 2023, p. 123]])

## Limitations

The study notes that while the encoder-inversion model is faster, it may struggle to capture very thin layers or exact transition points between layers compared to standalone models. Additionally, some results are based on synthetic data which may not perfectly replicate real-world complexities.

## Recommendations and Future Work

Future work should include: 1) testing the model on real field data; 2) improving joint inversion of multiple properties (e.g., density and velocity) by adjusting weights or objective functions; 3) exploring additional pre-processing steps like wavelet transformations on both target and input.

## Related Concepts

- [[vsp]]
- [[neural-networks]]
- [[wavelet-transform]]
- [[acoustic-impedance]]
- [[corridor-stack]]
- [[velocity-modeling]]
- [[machine-learning-geoscience]]
- [[borehole-geophysics]]
- [[autoencoder]]
- [[optuna]]
- [[stationary-wavelet-transform]]
- [[continuous-wavelet-transform]]
- [[transfer-learning]]
- [[signal-processing]]
- [[geophysics-general]]
- [[cnn]]
- [[tcn]]
- [[finite-difference-modeling]]
- [[seismic-inversion]]
