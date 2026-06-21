---
type: source
id: "141371"
title: "BASIC RESERVOIR HISTORY MATCHING BY REINFORCEMENT LEARNING FUNDAMENTALS"
author: "Khalid Labib Alsamadony"
year: 2019
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Qinzhuo Liao"
committee_members: []
source_file: "raw/141371 - BASIC RESERVOIR HISTORY MATCHING BY REINFORCEMENT LEARNING FUNDAMENTALS.pdf"
url: "https://eprints.kfupm.edu.sa/141371"
study_area: "Not stated in source"
keywords:
  - History Matching
  - Reinforcement Learning
  - Automatic History Matching
  - Q-learning
  - SARSA
  - Double Q-learning
  - Expected SARSA
  - Ensemble Kalman Filter
techniques:
  - pca
  - ensemble-kalman-filter
  - machine-learning-geoscience
  - q-learning
  - sarsa
  - petrel
  - reservoir-simulation
tags:
  - degree/ms
  - technique/pca
  - technique/ensemble-kalman-filter
  - technique/machine-learning-geoscience
  - technique/q-learning
  - technique/sarsa
  - technique/reservoir-simulation
  - theme/reservoir-engineering
  - theme/machine-learning-geoscience
  - theme/petroleum-engineering
  - terminology/history-matching
  - terminology/petrophysics
  - terminology/petrophysics
status: ingested
---

# BASIC RESERVOIR HISTORY MATCHING BY REINFORCEMENT LEARNING FUNDAMENTALS

**Summary**: The thesis evaluates the potential of reinforcement learning (RL) as an automated history matching (AHM) method by applying basic RL algorithms like Q-learning, SARSA, and Double Q-learning to a simplified 1D reservoir model. The study compares these RL methods against the Ensemble Kalman Filter (EnKF) in terms of accuracy, computational cost, and number of simulation runs.

---

## Research Problem

Manual history matching is time-consuming and subjective; while automated methods like EnKF exist, there is a need to evaluate if reinforcement learning (RL) can serve as an effective alternative for solving the ill-posed problem of matching reservoir model parameters (like permeability) to observed data (like pressure).

## Objectives

- Evaluate the potential of reinforcement learning (RL) methods to be used in automatic history matching (AHM).
- Apply four basic RL methods (Q-learning, SARSA, Double Q-learning, and expected SARSA) to solve a simple history matching problem.
- Compare the performance of these tabular temporal difference methods against the Ensemble Kalman Filter (EnKF).
- Evaluate the performance of tabular TD methods (Q-learning, SARSA, Double Q-learning, and Expected SARSA) in matching pressure and permeability values.
- Compare the accuracy and efficiency of RL-based history matching against the Ensemble Kalman Filter (EnKF).
- Assess the impact of different parameter settings (e.g., step size, discount factor, exploration probability) on RL performance.

## Methods

The study utilizes reservoir simulation to generate 100 realizations of pressure and permeability data. It implements four tabular TD methods: Q-learning, SARSA, Double Q-learning, and Expected SARSA. Each method is tested with a discount factor of 1, step size (learning rate) of 0.95, and exploration probability (epsilon) of 0.2. The model inputs are adjusted by 0.01% or 0.02% per iteration. Results are compared against the EnKF method using Root Mean Square Error (RMSE) as the primary metric for accuracy and CPU time as a measure of efficiency.

## Data and Materials

The study uses 100 realizations of reservoir models, each with 50 observations of pressure and 10 reservoir model inputs to be adjusted. Comparison is made against EnKF results across multiple simulation runs (ranging from ~350 to 3000 depending on the algorithm).

## Key Findings

- All applied tabular temporal difference methods (Q-learning, SARSA, Double Q-learning, and expected SARSA) successfully solved the studied history matching problem. ([[2019-alsamadony|Alsamadony, 2019, p. 13]])
- While RL methods were successful in matching observations, they were found to be inefficient compared to the Ensemble Kalman Filter (EnKF). ([[2019-alsamadony|Alsamadony, 2019, p. 13]])
- The EnKF reduced pressure RMSE from an initial value of 0.123 to less than 0.06 in one time step, reaching a minimum average pressure RMSE of 0.013. ([[2019-alsamadony|Alsamadony, 2019, p. 51]])
- The EnKF reduced permeability RMSE from an initial value of 0.179 to approximately 1.5 at the end of the process. ([[2019-alsamadony|Alsamadony, 2019, p. 52]])
- PCA was used as a dimensionality reduction method, where 10 eigenvectors were sufficient to retain approximately 80% of the permeability field. ([[2019-alsamadony|Alsamadony, 2019, p. 48]])
- Q-learning reduced pressure RMSE to 0.06 after 1065 iterations and reached a minimum average pressure RMSE of 0.0288. ([[2019-alsamadony|Alsamadony, 2019, p. 58]])
- SARSA reduced pressure RMSE to 0.06 after 1700 iterations, but its minimum achieved average pressure RMSE was 0.04233, which was higher than Q-learning and EnKF. ([[2019-alsamadony|Alsamadony, 2019, p. 61]])
- Double Q-learning reached a minimum average pressure RMSE of 0.02541 after 803 iterations, outperforming SARSA but not reaching the EnKF's accuracy. ([[2019-alsamadony|Alsamadony, 2019, p. 64]])
- Expected SARSA (with 1% step) reached a minimum average pressure RMSE of 0.02724 after 792 iterations; with a 2% step, it achieved the best performance among RL methods with a minimum pressure RMSE of 0.02264. ([[2019-alsamadony|Alsamadony, 2019, p. 69]])
- Expected SARSA (2%) showed the fastest decrease in permeability RMSE values but flattened out after 836 simulation runs. ([[2019-alsamadony|Alsamadony, 2019, p. 72]])
- EnKF was found to be more accurate and significantly more efficient than all tabular TD methods, achieving a minimum pressure RMSE of 0.013. ([[2019-alsamadony|Alsamadony, 2019, p. 73]])
- SARSA required the least CPU time (1.7 seconds per 100 steps) among the RL methods, while Expected SARSA required the most (3.22 seconds). ([[2019-alsamadony|Alsamadony, 2019, p. 75]])

## Limitations

Tabular TD methods lack parallel computation capabilities (unlike EnKF), do not provide multiple solutions for uncertainty quantification, require complex value function design, and involve a trial-and-error process to optimize hyperparameters like step size and exploration factor. They also required significantly more simulation runs than EnKF to reach their respective minimums.

## Recommendations and Future Work

Not stated in source

## Related Concepts

- [[pca]]
- [[ensemble-kalman-filter]]
- [[machine-learning-geoscience]]
- [[history-matching]]
- [[petrophysics]]
- [[reservoir-engineering]]
- [[reservoir-simulation]]
- [[petroleum-engineering]]
