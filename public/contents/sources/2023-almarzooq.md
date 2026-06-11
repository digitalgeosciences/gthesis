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
  - Deep Learning
  - Neural Networks
  - Seismic Inversion
  - Corridor Stack
  - Velocity Prediction
  - VSP
  - Inversion
  - Acoustic Impedance
  - VSP data
  - Consecutive Neural Networks
  - Denoising
  - Wavelet Transform
  - Autoencoders
  - Feature Extraction
  - Convolutional Neural Networks (CNN)
  - Temporal Convolutional Networks (TCN)
  - Stationary Wavelet Transform (SWT)
  - Continuous Wavelet Transform (CWT)
  - Curvelet Wavelet Transform (CWT)
  - Data Compression
  - Data Pre-processing
  - Lookahead Inversion
  - Zero-offset VSP
techniques:
  - neural-networks
  - convolutional-neural-network
  - long-short-term-memory
  - temporal-convolutional-network
  - stationary-wavelet-transform
  - continuous-wavelet-transform
  - hyperparameter-optimization
  - optuna
  - finite-difference
  - machine-learning-geoscience
  - seismic-inversion
  - well-log-analysis
  - synthetic-data-generation
  - cnn
  - tcn
  - lstm
  - autoencoder
  - cwt
  - swt
  - autoencoders
  - convolutional-neural-networks
  - temporal-convolutional-networks
  - python
  - keras
  - tensorflow
  - numpy
  - matplotlib
  - scikit-learn
  - scipy
  - dwt
  - signal-processing
tags:
  - degree/ms
  - technique/neural-networks
  - technique/convolutional-neural-network
  - technique/long-short-term-memory
  - technique/temporal-convolutional-network
  - technique/stationary-wavelet-transform
  - technique/continuous-wavelet-transform
  - technique/hyperparameter-optimization
  - technique/optuna
  - technique/finite-difference
  - technique/machine-learning-geoscience
  - technique/seismic-inversion
  - technique/well-log-analysis
  - technique/cnn
  - technique/tcn
  - technique/lstm
  - technique/cwt
  - technique/swt
  - technique/autoencoders
  - technique/convolutional-neural-networks
  - technique/temporal-convolutional-networks
  - technique/autoencoder
  - theme/geophysics-general
  - theme/seismic-inversion
  - theme/machine-learning-geoscience
  - theme/petrophysics
  - theme/seismology
  - theme/vsp
  - terminology/vsp
  - terminology/corridor-stack
  - terminology/velocity-modeling
  - terminology/acoustic-impedance
  - terminology/velocity-analysis
  - terminology/denoising
status: ingested
---

# Inversion of Vertical Seismic Profiling (VSP) Data Via Consecutive Neural Networks

**Summary**: The thesis investigates the use of deep learning architectures, specifically CNNs and LSTMs, to invert Vertical Seismic Profiling (VSP) corridor stack data into P-wave velocity profiles. The study addresses limitations in traditional inversion methods, such as non-linearity and parameter sensitivity, by utilizing a synthetic data generation engine to train and evaluate multiple neural network configurations.

---

## Research Problem

The non-linearity of conventional VSP inversion methods leads to issues in data-limited areas and introduces biases from parameters like wavelet choice and noise levels. The study seeks to determine if deep learning, specifically consecutive networks using autoencoders for feature extraction and TCNs for inversion, can provide a more robust solution.

## Objectives

- Develop a deep learning approach to directly extract velocity information from noisy synthetic corridor stacks.
- Evaluate the performance of consecutive neural networks (denoising, feature extraction/compression, and velocity inversion) compared to standalone models.
- Investigate the impact of wavelet transforms (SWT and CWT) on the inversion process.
- Perform hyperparameter optimization using Optuna for various model components.
- Create a realistic 1D Earth model synthetic data generation engine capable of producing velocity, density, acoustic impedance profiles, and reflectivity series (clean/noisy).
- Pre-process synthetic and real data for input into deep learning models.
- Develop and optimize various deep learning architectures for sub-tasks leading to the inversion of VSP data for velocity.
- Perform blind testing of models using both synthetic data and a finite difference model processed via standard VSP workflows.
- Develop a consecutive neural network architecture to invert VSP corridor stacks for velocity and acoustic impedance.
- Evaluate the effectiveness of different neural network architectures (CNN, TCN, LSTM) for deno1sing and inversion tasks.
- Quantify the impact of wavelet transforms (CWT and SWT) on the performance of the deep learning models.
- Perform hyperparameter optimization (HPO) using the Optuna framework to refine model parameters.
- Evaluate the use of autoencoders for feature extraction and data encoding in VSP inversion.
- Compare different neural network architectures (CNN vs. TCN) for autoencoding seismic data.
- Investigate the potential of stationary and continuous wavelet transforms as preprocessing steps for inversion.
- Perform joint inversion of velocity and density from corridor stacks.
- Validate models using a blind testing on synthetic and finite difference datasets.
- Evaluate the performance of direct inversion versus wavelet-transform based (SWT, CWT) inversions.
- Investigate the use of autoencoders for feature extraction and data compression in the inversion workflow.
- Develop and test a consecutive neural network (split-training) approach to improve accuracy and computational efficiency.
- Assess the impact of different encoder architectures on inference speed and prediction quality.
- Develop a deep learning approach for the inversion of zero-offset VSP corridor stacks.
- Evaluate different neural network architectures (CNN, LSTM, TCN) for velocity and depth prediction.
- Implement various data pre-processing techniques including CWT and DWT to enhance feature extraction.
- Improve velocity and depth prediction ahead of the bit.
- Extend velocity information below the well's final depth.

## Methods

The study utilizes a multi-stage workflow: 1) Synthetic Data Generation: A custom engine creates 1D Earth models (clastic, carbonate, or salt sequences) with randomized lithology, thickness, and properties. These are converted to reflectivity series using acoustic impedance calculations based on empirical density-velocity relationships. Three types of wavelets (Klauder, Ormsby, Ricker) are used for convolution. 2) Data Pre-processing: Preparing data for neural network input. 3) Neural Network Training: Comparison of various architectures including DNNs, LSTMs, CNNs, TCNs, and hybrid CNN-LSTM models. 4) Optimization: Use of Grid Search and Optuna frameworks for Hyperparameter Optimization (HPO). 5. Evaluation: Blind testing on synthetic data and a finite difference model.

## Data and Materials

The study utilizes a custom-built synthetic data generation engine to produce an unlimited number of datasets. Each training epoch typically uses 1000 unique datasets with 4096 samples each (reduced to 250 for Optuna HPO). Validation sets are one-third the size of training sets, and 1000 datasets are reserved for blind testing.

## Key Findings

- The proposed consecutive neural network model can predict results ten times faster than all other tested models while maintaining higher accuracy. ([[2023-almarzooq|Almarzooq, 2023, p. 16]])
- Direct inversion of seismic traces using neural networks was evaluated against wavelet-transformed inputs to determine the impact of feature extraction. ([[2023-almarzooq|Almarzooq, 2023, p. 45]])
- Hyperparameter optimization (HPO) via Optuna was used to optimize denoising, inference, and encoder-based models. ([[2023-almarzooq|Almarzooq, 2023, p. 49]])
- The study compared the performance of CNN-LSTM, TCN, and autoencoder architectures for feature extraction in VSP data. ([[2023-almarzooq|Almarzooq, 2023, p. 81]])
- SWT-CNN and SWT-TCN autoencoders were tested to evaluate the effect of stationary wavelet transforms on inversion accuracy. ([[2023-almarzooq|Almarzooq, 2023, p. 84]])
- CWT-CNN and CWT-TCN autoencoders were evaluated to assess the impact of continuous wavelet transforms on the results. ([[2023-almarzooq|Almarzooq, 2023, p. 93]])
- The study identifies three primary assumptions in traditional VSP inversion that impact results: sparsity of reflectivity, time-invariance of the wavelet (neglecting attenuation), and the use of Gardner's relation for density below the well's final depth. ([[2023-almarzooq|Almarzooq, 2023, p. 44]])
- The synthetic data engine incorporates three distinct wavelets (Klauder, Ormsby, Ricker) to ensure diversity in frequency content during training. ([[2023-almarzooq|Almarzooq, 2023, p. 48]])
- A specific empirical relationship for density and velocity was used for different lithologies: Shale (-0.0261, 0.3730, 1.4580), Sandstone (-0.0115, 0.2610, 1.5150), Limestone (-0.0296, 0.4610, 0.9630), Dolomite (-0.0235, 0.3900, 1.2420), Anhydrite (-0.0203, 0.3210, 1.7320), and Halite (-0.0455, 0.5892, 0.4358). ([[2023-almarzooq|Almarzooq, 2023, p. 48]])
- The study proposes that deep learning can potentially overcome non-linearity and non-uniqueness issues in VSP inversion by learning to counteract complexities like attenuation and lack of low-frequency data implicitly. ([[2023-almarzooq|Almarzooq, 2023, p. 44]])
- TCN architectures outperformed CNNs in the inversion task, showing half the loss of other networks due to their ability to capture both global and local features via dilated convolutions. ([[2023-almarzooq|Almarzooq, 2023, p. 69]])
- CNN-based autoencoders were found more robust for denoising tasks compared to TCNs because their localized receptive fields better isolate and remove noise. ([[2023-almarzooq|Almarzooq, 2023, p. 73]])
- The inclusion of a denoising sub-model significantly improved results; the denoised prediction was only 4.96% higher in RMSE than the clean baseline, whereas the noisy model's prediction was 17.50% higher. ([[2023-almarzooq|Almarzooq, 2023, p. 77]])
- The average RMSE for the denoising model on blind testing data was 0.0105, showing high consistency with training and validation losses. ([[2023-almarzooq|Almarzooq, 2023, p. 72]])
- The inversion model achieved an average RMSE of 2748.79 on blind testing datasets, which, while higher than the minimum validation loss by 1314.84, was still considered a high-quality result compared to conventional methods. ([[2023-almarzooq|Almarzooq, 2023, p. 72]])

## Limitations

Access to real VSP datasets is restricted due to confidentiality; therefore, all results are based on synthetic data and finite difference modeling. The study notes that while the current model performs well on synthetic data, it requires testing on real field data for definitive validation.

## Recommendations and Future Work

Future work should include: 1) Testing the proposed consecutive network on real-world VSP datasets; 2. Exploring joint inversion of multiple properties (e.g., density and velocity) by adjusting weights or objective functions; 3. Investigating additional pre-processing steps for wavelet transformations, such as applying them to the target (velocity) rather than just the input.

## Related Concepts

- [[neural-networks]]
- [[seismic-inversion]]
- [[stationary-wavelet-transform]]
- [[continuous-wavelet-transform]]
- [[vsp]]
- [[corridor-stack]]
- [[velocity-modeling]]
- [[machine-learning-geoscience]]
- [[acoustic-impedance]]
- [[synthetic-data-generation]]
- [[tcn]]
- [[optuna]]
- [[cwm]]
- [[swt]]
- [[velocity-analysis]]
- [[denoising]]
- [[seismology]]
- [[autoencoders]]
- [[convolutional-neural-networks]]
