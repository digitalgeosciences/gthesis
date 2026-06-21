---
type: source
id: "10399"
title: "APPLICATION OF NEURAL NETWORK TO THE DETERMINATION OF WELL-TEST INTERPRETATION MODEL FOR HORIZONTAL WELLS"
author: "MIR ASIF SULTAN"
year: 2001
department: "Petroleum Engineering"
degree: "PhD"
supervisor: "Dr. Abdulaziz U. Al-Kaabi"
committee_members: []
source_file: "raw/10399 - Application of neural network to the determination of well-test interpretation m.pdf"
url: "https://eprints.kfupm.edu.sa/10399"
study_area: "Not stated in source"
keywords:
  - Well-test interpretation
  - Horizontal wells
  - Neural networks
  - Pressure derivative
  - Flow regimes
  - Model identification
  - Non-linear regression
  - horizontal well
  - neural network
  - pressure transient analysis
  - automatic identification
  - Saphir software
  - flow regime
  - reservoir model
  - flow regime identification
  - parameter estimation
techniques:
  - neural-networks
  - non-linear-regression
  - mathematical-modeling
  - signal-processing
  - petrophysics
  - matlab
  - saphir-software
  - data-analysis
  - saphir
  - nonlinear-regression
tags:
  - degree/phd
  - technique/neural-networks
  - technique/non-linear-regression
  - technique/mathematical-modeling
  - technique/signal-processing
  - technique/petrophysics
  - technique/matlab
  - technique/data-analysis
  - technique/saphir
  - technique/nonlinear-regression
  - theme/reservoir-engineering
  - theme/petrophysics
  - theme/petroleum-engineering
  - terminology/pressure-derivative
  - terminology/flow-regime
  - terminology/petrophysics
  - terminology/petrophysics
  - terminology/pressure-transient-analysis
  - terminology/porosity
  - terminology/permeability
  - terminology/well-test-interpretation
  - terminology/skin-factor
status: ingested
---

# APPLICATION OF NEURAL NETWORK TO THE DETERMINATION OF WELL-TEST INTERPRETATION MODEL FOR HORIZONTAL WELLS

**Summary**: The thesis investigates the use of neural networks to automate and improve well-test interpretation for horizontal wells. It specifically addresses the issue of highly correlated model parameters in horizontal wells by using trained neural networks to identify flow regimes and provide reliable initial estimates for subsequent non-linear regression.

---

## Research Problem

In horizontal wells, model parameters are strongly correlated, making the estimation procedure non-unique and difficult for standard interpretation methods. This is particularly challenging during automated analysis where accurate identification of flow regimes (e.g., early radial, linear, late radial) is required to provide valid initial estimates.

## Objectives

- Apply the neural network technique in determining the well-test interpretation model for a horizontal well.
- Develop a software library of well-test analytical solutions in Laplace space for horizontal wells considering common models (homogeneous, dual porosity).
- Generate well-test data from various analytical solutions.
- Transform well-test derivative data using techniques like Fourier or Hough transforms.
- Design and implement a neural network architecture suitable for horizontal well-test data using the back-propagation algorithm.
- Train a neural network simulator on generated data to identify well-test models.

## Methods

The study utilizes artificial neural networks (ANN) to automate three stages of analysis: 1. Model Identification: Using trained networks to identify the reservoir model from pressure derivative data. 2. Flow Regime Identification: Identifying specific flow regimes within the test. 3. Position Marking: Identifying and marking the location of these regimes on the derivative plot. The methodology includes generating common model signatures using analytical solutions (Ozkan and Ragavan), training multiple neural networks for different identification tasks, and utilizing non-linear regression to determine final parameters from the identified segments.

## Data and Materials

The study uses 9 synthetic data sets representing different reservoir models, several 'incomplete' data sets (missing parts of the signature), and 'noisy' data sets (with 10% random noise). Field data is used for validation, including examples from various sources (e.g., Saphir data, Prudhoe Bay field, carbonate reservoirs).

## Key Findings

- The neural network approach was found effective in identifying reservoir models from incomplete and distorted data without requiring pre-processing like smoothing (Page 37). ([[2001-sultan|SULTAN, 2001, p. 37]])
- A modular approach with direct data utilization was determined to be the most suitable for field implementation of the neural network methodology (Page .29) ([[2001-sultan|SULTAN, 2001, p. 29]])
- Pressure derivative plots are identified as more sensitive tools than log-log or semilog graphs, allowing for the identification of events not evident on standard plots (Page 38). ([[2001-sultan|SULTAN, 2001, p. 38]])
- The inclusion of dual porosity parameters ($\alpha$ and $\lambda$) in the Laplace domain allows for the identification of transition zones between semilog straight lines. ([[2001-sultan|SULTAN, 2001, p. 83]])
- A well's position relative to boundaries ($z_p$) significantly impacts the flow regime; values near 0.05 or 0.9 result in hemiradial flow. ([[2001-sultan|SULTAN, 2001, p. 74]])
- Increasing the dimensionless horizontal well length ($L_p$) results in a longer linear flow period. ([[2001-sultan|SULTAN, 2001, p. 74]])
- The Hough transform (HT) and back-propagation (BP) neural network combination (ANNIS) was shown to be effective for identifying patterns without extensive data preparation. ([[2001-sultan|SULTAN, 2001, p. 42]])
- A well with very small $L_p$ and proximity to a boundary ($z_p=0.05$) behaves as a point source, resulting in spherical flow. ([[2001-sultan|SULTAN, 2001, p. 74]])
- The Hough Transform method is advantageous over the Direct method because it utilizes all available data points and does not require manual selection of input points. ([[2001-sultan|SULTAN, 2001, p. 136]])
- The training process for both neural networks (Direct and Hough) achieved a maximum error of less than 10^-2 at the output layer when trained on 27 data sets. ([[2001-sultan|SULTAN, 2001, p. 149]])
- The study identified 11 specific models based on combinations of wellbore storage, skin, reservoir type (homogeneous/dual porosity), and boundary conditions. ([[2001-sultan|SULTAN, 2001, p. 116]])
- Six flow regimes were identified: Wellbore Storage/Skin, Early radial flow, Hemiradial flow, Linear flow, Pseudo-radial flow (Homogeneous), and Pseudo-radial flow (Dual Porosity). ([[2001-sultan|SULTAN, 2001, p. 124]])
- The Modular approach using the Direct method was able to identify the correct model in all synthetic cases. ([[2001-sultan|SULTAN, 2001, p. 198]])
- The Generalized approach using the Direct method identified 8 out of 9 models correctly, failing only on a specific case where it chose model 3 instead of model 4. ([[2001-sultan|SULTAN, 2001, p. 198]])
- The Modular approach using the Hough transform method identified 7 correct models, while the Generalized version of that method only identified 6 correctly. ([[2001-sultan|SULTAN, 2001, p. 198]])

## Limitations

The thesis notes that while neural networks eliminate the need for complex rule definitions and data preprocessing required by symbolic methods, they require a significant amount of training data to ensure robust recognition.

## Recommendations and Future Work

- Add new model signatures incorporating more boundary and field conditions.
- Incorporate the neural network approach into well-test analysis software with a user interface.
- Use a segmentation approach in non-linear regression to minimize the effect of correlated model parameters.

## Related Concepts

- [[neural-networks]]
- [[non-linear-regression]]
- [[pressure-derivative]]
- [[flow-regime]]
- [[reservoir-engineering]]
- [[petrophysics]]
- [[mathematical-modeling]]
- [[matlab]]
- [[pressure-transient-analysis]]
- [[porosity]]
- [[permeability]]
- [[well-test-interpretation]]
- [[skin-factor]]
- [[saudi-arabia]]
